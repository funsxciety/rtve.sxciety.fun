const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

process.env.TZ = 'Europe/Madrid';
const source = path.join(__dirname, '..', 'study-engine.js');
assert.ok(fs.existsSync(source), 'Daily study rules must exist in study-engine.js');
const context = vm.createContext({ Date });
vm.runInContext(fs.readFileSync(source, 'utf8'), context, { filename: source });
const Study = vm.runInContext('Study', context);
const plain = value => JSON.parse(JSON.stringify(value));
const at = value => new Date(`${value}T12:00:00`);
const now = at('2026-10-17');
const card = overrides => ({
    attempts: 1, correct: 1, stage: 1, due: '2026-10-18',
    lastAttempt: '2026-10-16', lastScheduled: '2026-10-16', ...overrides
});
let checks = 0;
const check = (name, run) => { run(); checks++; console.log(`PASS ${name}`); };

check('local dates and scheduling cross DST, months and years', () => {
    assert.equal(Study.day(new Date('2026-03-28T23:30:00Z')), '2026-03-29');
    assert.equal(Study.day(new Date('2026-10-24T22:30:00Z')), '2026-10-25');
    const study = Study.normalize(null, ['a']);
    Study.answer(study, 'a', true, at('2026-03-28'));
    assert.equal(study.cards.a.due, '2026-03-29');
    Study.answer(study, 'a', true, at('2026-03-29'));
    assert.equal(study.cards.a.due, '2026-04-01');
    Study.flag(study, 'a', at('2026-10-24'));
    assert.equal(study.cards.a.due, '2026-10-25');
    Study.flag(study, 'a', at('2026-12-31'));
    assert.equal(study.cards.a.due, '2027-01-01');
});

check('normalization rejects corrupt counters, dates, unknown IDs and unsafe history', () => {
    const raw = {
        cards: {
            a: card({ attempts: 5, correct: 3, stage: 2 }),
            b: card({ attempts: Infinity }),
            c: card({ attempts: 2, correct: 3 }),
            d: card({ due: '2026-02-30' }),
            e: card({ stage: 6 }),
            f: card({ attempts: 1000001 }),
            gone: card({}),
            flag: card({ attempts: 0, correct: 0, stage: 0, lastAttempt: null })
        },
        days: {
            '2026-10-17': { answers: { a: true, b: false, c: 'true', gone: true } },
            '2026-07-20': { answers: { a: false } },
            '2026-07-19': { answers: { a: true } },
            '2026-10-18': { answers: { a: true } },
            '2026-02-30': { answers: { a: true } }
        },
        xp: 420,
        exams: [
            { day: '2026-10-16', correct: 1, wrong: 2, blank: 3, total: 99, net: 99 },
            { day: '2026-10-16', correct: Infinity, wrong: 0, blank: 0 },
            { day: '2026-02-30', correct: 1, wrong: 0, blank: 0 }
        ]
    };
    const study = Study.normalize(raw, ['a', 'b', 'c', 'd', 'e', 'f', 'flag'], now);
    assert.deepEqual(Object.keys(study.cards).sort(), ['a', 'flag']);
    assert.deepEqual(plain(study.days), {
        '2026-10-17': { answers: { a: true, b: false } },
        '2026-07-20': { answers: { a: false } }
    });
    assert.equal(study.xp, 420, 'Pruning activity must not erase lifetime XP');
    assert.deepEqual(plain(study.exams), [{
        day: '2026-10-16', correct: 1, wrong: 2, blank: 3,
        total: 6, net: 0.33333333333333337
    }]);
    for (const xp of [-1, Infinity, 1.5, '10', 1000000001]) {
        assert.equal(Study.normalize({ xp }, [], now).xp, 0);
    }
    assert.deepEqual(plain(Study.normalize([], [], now)), { cards: {}, days: {}, xp: 0, exams: [] });
});

check('normalization rejects future activity and inconsistent scheduling chronology', () => {
    const cards = {
        futureAttempt: card({ lastAttempt: '2026-10-18' }),
        futureScheduled: card({ lastScheduled: '2026-10-18', due: '2026-10-19' }),
        unscheduledStage: card({ lastScheduled: null }),
        reversedSchedule: card({ due: '2026-10-15' }),
        valid: card({ lastAttempt: '2026-10-17', lastScheduled: '2026-10-17' }),
        flag: card({ attempts: 0, correct: 0, stage: 0, lastAttempt: null, lastScheduled: '2026-10-17' })
    };
    const study = Study.normalize({ cards }, Object.keys(cards), now);
    assert.deepEqual(Object.keys(study.cards).sort(), ['flag', 'valid']);
    assert.equal(study.cards.flag.attempts, 0);
    assert.equal(study.cards.flag.lastAttempt, null);
});

check('only the twenty latest valid exams survive', () => {
    const exams = Array.from({ length: 25 }, (_, i) => ({
        day: `2026-09-${String(i + 1).padStart(2, '0')}`, correct: 2, wrong: 1, blank: 0
    }));
    const study = Study.normalize({ exams }, [], now);
    assert.equal(study.exams.length, 20);
    assert.equal(study.exams[0].day, '2026-09-06');
    assert.equal(study.exams[19].day, '2026-09-25');
});

check('first daily answers earn XP once; repeated errors still reset the schedule', () => {
    const study = Study.normalize(null, ['a'], now);
    assert.deepEqual(plain(Study.answer(study, 'a', true, now)), { first: true, xp: 10 });
    assert.deepEqual(plain(study.cards.a), card({
        lastAttempt: '2026-10-17', lastScheduled: '2026-10-17'
    }));
    assert.deepEqual(plain(Study.answer(study, 'a', true, now)), { first: false, xp: 0 });
    Study.answer(study, 'a', false, now);
    Study.answer(study, 'a', true, now);
    assert.equal(study.cards.a.stage, 0);
    assert.equal(study.cards.a.due, '2026-10-18');
    assert.equal(study.cards.a.attempts, 1);
    assert.equal(study.cards.a.correct, 1);
    assert.equal(study.days['2026-10-17'].answers.a, true);
    assert.equal(study.xp, 10);
    assert.deepEqual(plain(Study.answer(study, 'a', false, at('2026-10-18'))), { first: true, xp: 4 });
    Study.answer(study, 'a', true, at('2026-10-18'));
    assert.equal(study.cards.a.stage, 0);
    assert.equal(study.cards.a.due, '2026-10-19');
    assert.equal(study.cards.a.attempts, 2);
    assert.equal(study.cards.a.correct, 1);
    assert.equal(study.xp, 14);
    Study.answer(study, 'a', true, at('2026-10-19'));
    assert.equal(study.cards.a.stage, 1);
    assert.equal(study.cards.a.due, '2026-10-20');
});

check('early and same-day correct answers never postpone a due review', () => {
    const study = Study.normalize({ cards: {
        a: card({ attempts: 2, correct: 2, stage: 2, due: '2026-10-20' }),
        b: card({ due: '2026-10-17', lastScheduled: '2026-10-17' })
    } }, ['a', 'b'], now);
    Study.answer(study, 'a', true, now);
    assert.equal(study.cards.a.stage, 2);
    assert.equal(study.cards.a.due, '2026-10-20');
    assert.equal(study.cards.a.lastScheduled, '2026-10-16');
    Study.answer(study, 'b', true, now);
    assert.equal(study.cards.b.stage, 1);
    assert.equal(study.cards.b.due, '2026-10-17');
});

check('due correct reviews use all intervals and cap the final stage', () => {
    const study = Study.normalize({ cards: {
        a: card({ attempts: 5, correct: 5, stage: 2, due: '2026-10-17' })
    } }, ['a'], now);
    for (const [date, stage, due] of [
        ['2026-10-17', 3, '2026-10-24'],
        ['2026-10-24', 4, '2026-11-07'],
        ['2026-11-07', 5, '2026-12-07'],
        ['2026-12-07', 5, '2027-01-06']
    ]) {
        Study.answer(study, 'a', true, at(date));
        assert.equal(study.cards.a.stage, stage);
        assert.equal(study.cards.a.due, due);
    }
});

check('doubt adds a review without an attempt or XP and prevents early promotion', () => {
    const study = Study.normalize(null, ['a'], now);
    Study.flag(study, 'a', now);
    Study.flag(study, 'a', now);
    assert.equal(study.cards.a.attempts, 0);
    assert.equal(study.cards.a.lastAttempt, null);
    assert.equal(study.cards.a.stage, 0);
    assert.equal(study.cards.a.due, '2026-10-18');
    assert.equal(study.xp, 0);
    assert.deepEqual(plain(study.days), {});
    assert.equal(Study.summary([{ id: 'a', tema: 1 }], study, now).tested, 0);
    Study.answer(study, 'a', true, now);
    assert.equal(study.cards.a.stage, 0);
    Study.answer(study, 'a', true, at('2026-10-18'));
    assert.equal(study.cards.a.stage, 1);
    const before = [study.cards.a.attempts, study.cards.a.correct, study.cards.a.lastAttempt, study.xp];
    Study.flag(study, 'a', at('2026-10-19'));
    assert.deepEqual([study.cards.a.attempts, study.cards.a.correct, study.cards.a.lastAttempt, study.xp], before);
    assert.equal(study.cards.a.due, '2026-10-20');
});

check('replayed past answers and flags preserve newer history and scheduling', () => {
    const study = Study.normalize({ cards: {
        a: card({ attempts: 2, correct: 2, stage: 2, due: '2026-10-20',
            lastAttempt: '2026-10-17', lastScheduled: '2026-10-17' })
    }, days: { '2026-10-17': { answers: { a: true } } }, xp: 20 }, ['a'], now);
    assert.deepEqual(plain(Study.answer(study, 'a', false, at('2026-10-16'))), { first: true, xp: 4 });
    assert.deepEqual(plain(study.days), {
        '2026-10-17': { answers: { a: true } }, '2026-10-16': { answers: { a: false } }
    });
    assert.deepEqual(plain(study.cards.a), card({
        attempts: 3, correct: 2, stage: 2, due: '2026-10-20',
        lastAttempt: '2026-10-17', lastScheduled: '2026-10-17'
    }));
    assert.equal(study.xp, 24);
    Study.flag(study, 'a', at('2026-10-16'));
    assert.deepEqual([study.cards.a.stage, study.cards.a.due, study.cards.a.lastScheduled,
        study.cards.a.lastAttempt, study.cards.a.attempts, study.xp], [2, '2026-10-20', '2026-10-17', '2026-10-17', 3, 24]);
    assert.deepEqual(plain(Study.answer(study, 'a', true, at('2026-10-16'))), { first: false, xp: 0 });
    assert.equal(study.cards.a.correct, 2);
    assert.equal(study.cards.a.lastAttempt, '2026-10-17');
    assert.equal(study.days['2026-10-17'].answers.a, true);
});

check('daily plans prioritize due, explicit review, weak and unseen questions', () => {
    const questions = [
        { id: 'new', tema: 1 }, { id: 'weak', tema: 1 }, { id: 'review', tema: 2 },
        { id: 'due', tema: 1 }, { id: 'due2', tema: 2 }, { id: 'answered', tema: 3 }
    ];
    const study = Study.normalize({ cards: {
        weak: card({ correct: 0, stage: 0 }), review: card({}),
        due: card({ due: '2026-10-16' }), due2: card({ due: '2026-10-17' }),
        answered: card({ due: '2026-10-16' })
    }, days: { '2026-10-17': { answers: { answered: true } } } }, questions.map(q => q.id), now);
    const plan = Study.plan(questions, study, ['review'], now, 5);
    assert.deepEqual(new Set(plan.slice(0, 2).map(q => q.id)), new Set(['due', 'due2']));
    assert.equal(plan[2].id, 'review');
    assert.equal(plan[3].id, 'weak');
    assert.equal(plan[4].id, 'new');
    assert.equal(Study.plan(questions, study, [], now, 6)[5].id, 'answered');
    assert.equal(Study.plan(questions, study, [], now, 0).length, 0);
});

check('unseen plans diversify topics and never duplicate questions', () => {
    const questions = [{ id: 'a', tema: 1 }, { id: 'b', tema: 1 }, { id: 'c', tema: 2 }];
    const study = Study.normalize(null, questions.map(q => q.id), now);
    const plan = Study.plan([...questions, questions[0]], study, [], now, 10);
    assert.equal(plan.length, 3);
    assert.equal(new Set(plan.map(q => q.id)).size, 3);
    assert.equal(new Set(plan.slice(0, 2).map(q => q.tema)).size, 2);
});

check('later plans cover untouched topics before more unseen items from studied topics', () => {
    const questions = Array.from({ length: 18 }, (_, i) => [
        { id: `t${i + 1}a`, tema: i + 1 }, { id: `t${i + 1}b`, tema: i + 1 }
    ]).flat();
    const study = Study.normalize(null, questions.map(q => q.id), now);
    const firstRound = questions.filter(q => q.tema <= 10 && q.id.endsWith('a'));
    firstRound.forEach(q => Study.answer(study, q.id, true, now));
    const next = Study.plan(questions, study, [], now, 10);
    assert.deepEqual(new Set(next.slice(0, 8).map(q => q.tema)), new Set([11, 12, 13, 14, 15, 16, 17, 18]));
    assert.equal(next.length, 10);
    assert.ok(next.every(q => !firstRound.some(first => first.id === q.id)));
    const tomorrow = Study.plan(questions, study, [], at('2026-10-18'), 10);
    assert.deepEqual(new Set(tomorrow.map(q => q.id)), new Set(firstRound.map(q => q.id)), 'Due reviews still outrank untested topics');
});

check('summary distinguishes tested, consolidated, due and daily activity', () => {
    const questions = [
        { id: 'a', tema: 1 }, { id: 'b', tema: 1 }, { id: 'c', tema: 2 },
        { id: 'flag', tema: 2 }, { id: 'new', tema: 3 }
    ];
    const study = Study.normalize({ cards: {
        a: card({ attempts: 2, correct: 1, stage: 0, due: '2026-10-17' }),
        b: card({ attempts: 3, correct: 3, stage: 3, due: '2026-10-20' }),
        c: card({ correct: 0, stage: 0 }),
        flag: card({ attempts: 0, correct: 0, stage: 0, due: '2026-10-17', lastAttempt: null })
    }, xp: 237, days: {
        '2026-10-15': { answers: { a: false } },
        '2026-10-16': { answers: { b: true } },
        '2026-10-17': { answers: { a: true, c: false } }
    } }, questions.map(q => q.id), now);
    const summary = Study.summary(questions, study, now);
    assert.deepEqual([summary.total, summary.tested, summary.consolidated, summary.due], [5, 3, 1, 2]);
    assert.deepEqual(plain(summary.today), { answers: 2, correct: 1 });
    assert.deepEqual([summary.streak, summary.xp, summary.level, summary.levelProgress], [3, 237, 3, 37]);
    assert.equal(summary.week.length, 7);
    assert.equal(summary.week[0].day, '2026-10-11');
    assert.deepEqual(plain(summary.week[6]), { day: '2026-10-17', answers: 2, correct: 1 });
    assert.deepEqual(plain(summary.topics), [
        { topic: 1, total: 2, tested: 2, attempts: 5, correct: 4, accuracy: 80, weak: false, due: 1 },
        { topic: 2, total: 2, tested: 1, attempts: 1, correct: 0, accuracy: 0, weak: true, due: 1 },
        { topic: 3, total: 1, tested: 0, attempts: 0, correct: 0, accuracy: null, weak: false, due: 0 }
    ]);
    assert.equal(Study.summary(questions, study, at('2026-10-18')).streak, 3);
    assert.equal(Study.summary(questions, study, at('2026-10-19')).streak, 0);
});

check('exam blanks have no penalty and wrong answers can produce a negative score', () => {
    assert.deepEqual(plain(Study.examScore([])), { correct: 0, wrong: 0, blank: 0, net: 0, percent: 0 });
    const score = Study.examScore([true, false, null, false, null, true]);
    assert.deepEqual([score.correct, score.wrong, score.blank], [2, 2, 2]);
    assert.ok(Math.abs(score.net - 1.3333333333333335) < 1e-12);
    assert.ok(Math.abs(score.percent - 22.222222222222225) < 1e-12);
    assert.ok(Study.examScore([false, false, null]).percent < 0);
    assert.equal(Study.examScore([null, null]).percent, 0);
});

console.log(`${checks} study-engine checks passed (Europe/Madrid)`);
