const Study = (() => {
    const intervals = [1, 1, 3, 7, 14, 30];
    const maxCount = 1000000;
    const maxXp = 1000000000;
    const record = value => value !== null && typeof value === 'object' && !Array.isArray(value);
    const integer = (value, max = maxCount) => Number.isSafeInteger(value) && value >= 0 && value <= max;
    const own = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
    const put = (object, key, value) => {
        Object.defineProperty(object, key, { value, writable: true, enumerable: true, configurable: true });
        return value;
    };

    function day(date = new Date()) {
        return `${String(date.getFullYear()).padStart(4, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    }

    function dateOf(value) {
        if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
        const [year, month, date] = value.split('-').map(Number);
        if (year < 1) return null;
        const parsed = new Date(0);
        parsed.setHours(12, 0, 0, 0);
        parsed.setFullYear(year, month - 1, date);
        return day(parsed) === value ? parsed : null;
    }

    function shift(value, days) {
        const date = dateOf(value);
        date.setDate(date.getDate() + days);
        return day(date);
    }

    function normalize(raw, validIds, now = new Date()) {
        const study = { cards: {}, days: {}, xp: 0, exams: [] };
        if (!record(raw)) return study;
        const ids = new Set(typeof validIds === 'string' ? [] : Array.from(validIds || []));
        const today = day(now);
        const cutoff = shift(today, -89);
        if (record(raw.cards)) {
            for (const [id, card] of Object.entries(raw.cards)) {
                if (!ids.has(id) || !record(card) || !integer(card.attempts) || !integer(card.correct) ||
                    card.correct > card.attempts || !integer(card.stage, 5) || card.stage > card.correct ||
                    !dateOf(card.due) || !(card.lastAttempt === null || dateOf(card.lastAttempt)) ||
                    !(card.lastScheduled === null || dateOf(card.lastScheduled)) ||
                    (card.attempts > 0 && card.lastAttempt === null) ||
                    (card.lastAttempt !== null && card.lastAttempt > today) ||
                    (card.stage > 0 && card.lastScheduled === null) ||
                    (card.lastScheduled !== null && (card.lastScheduled > today || card.due < card.lastScheduled))) continue;
                put(study.cards, id, {
                    attempts: card.attempts, correct: card.correct, stage: card.stage, due: card.due,
                    lastAttempt: card.lastAttempt, lastScheduled: card.lastScheduled
                });
            }
        }
        if (record(raw.days)) {
            for (const [date, entry] of Object.entries(raw.days)) {
                if (!dateOf(date) || date < cutoff || date > today || !record(entry) || !record(entry.answers)) continue;
                const answers = Object.fromEntries(Object.entries(entry.answers)
                    .filter(([id, correct]) => ids.has(id) && typeof correct === 'boolean'));
                if (Object.keys(answers).length) study.days[date] = { answers };
            }
        }
        if (integer(raw.xp, maxXp)) study.xp = raw.xp;
        if (Array.isArray(raw.exams)) {
            study.exams = raw.exams.filter(exam => record(exam) && dateOf(exam.day) && exam.day <= today &&
                integer(exam.correct) && integer(exam.wrong) && integer(exam.blank) &&
                integer(exam.correct + exam.wrong + exam.blank)).slice(-20).map(exam => ({
                    day: exam.day, correct: exam.correct, wrong: exam.wrong, blank: exam.blank,
                    total: exam.correct + exam.wrong + exam.blank, net: exam.correct - exam.wrong / 3
                }));
        }
        return study;
    }

    function newCard(today) {
        return { attempts: 0, correct: 0, stage: 0, due: today, lastAttempt: null, lastScheduled: null };
    }

    function answer(study, id, correct, now = new Date()) {
        const today = day(now);
        const cutoff = shift(today, -89);
        for (const date of Object.keys(study.days)) {
            if (date < cutoff) delete study.days[date];
        }
        const entry = study.days[today] || (study.days[today] = { answers: {} });
        const first = !own(entry.answers, id);
        const card = own(study.cards, id) ? study.cards[id] : put(study.cards, id, newCard(today));
        correct = correct === true;
        const xp = first ? (correct ? 10 : 4) : 0;
        if (first) {
            put(entry.answers, id, correct);
            card.attempts = Math.min(maxCount, card.attempts + 1);
            if (correct) card.correct = Math.min(card.attempts, card.correct + 1);
            study.xp = Math.min(maxXp, study.xp + xp);
        }
        if (card.lastAttempt === null || card.lastAttempt < today) card.lastAttempt = today;
        if (card.lastScheduled !== null && card.lastScheduled > today) return { first, xp };
        if (!correct) {
            card.stage = 0;
            card.due = shift(today, 1);
            card.lastScheduled = today;
        } else if (card.attempts > 0 && card.due <= today && card.lastScheduled !== today) {
            card.stage = Math.min(5, card.stage + 1);
            card.due = shift(today, intervals[card.stage]);
            card.lastScheduled = today;
        }
        return { first, xp };
    }

    function flag(study, id, now = new Date()) {
        const today = day(now);
        const card = own(study.cards, id) ? study.cards[id] : put(study.cards, id, newCard(today));
        if (card.lastScheduled !== null && card.lastScheduled > today) return;
        card.stage = 0;
        card.due = shift(today, 1);
        card.lastScheduled = today;
    }

    const unique = questions => [...new Map(questions.map(question => [question.id, question])).values()];

    function plan(questions, study, reviewIds = [], now = new Date(), limit = 10) {
        const today = day(now);
        const answers = study.days[today]?.answers || {};
        const reviews = new Set(reviewIds);
        const topicCounts = new Map();
        const candidates = unique(questions).map(question => {
            const card = own(study.cards, question.id) ? study.cards[question.id] : null;
            if (card?.attempts > 0) topicCounts.set(question.tema, (topicCounts.get(question.tema) || 0) + 1);
            const rank = card?.due <= today ? 0 : reviews.has(question.id) ? 1 :
                card?.attempts > 0 && card.correct / card.attempts < 0.7 ? 2 : !card?.attempts ? 3 : 4;
            return { question, rank, repeated: own(answers, question.id), due: card?.due || today };
        });
        const result = [];
        limit = Number.isSafeInteger(limit) ? Math.max(0, limit) : 10;
        for (const repeated of [false, true]) {
            for (let rank = 0; rank <= 4 && result.length < limit; rank++) {
                const bucket = candidates.filter(item => item.repeated === repeated && item.rank === rank)
                    .sort((a, b) => a.due.localeCompare(b.due));
                while (bucket.length && result.length < limit) {
                    let best = 0;
                    for (let i = 1; i < bucket.length; i++) {
                        if ((topicCounts.get(bucket[i].question.tema) || 0) <
                            (topicCounts.get(bucket[best].question.tema) || 0)) best = i;
                    }
                    const { question } = bucket.splice(best, 1)[0];
                    result.push(question);
                    topicCounts.set(question.tema, (topicCounts.get(question.tema) || 0) + 1);
                }
            }
        }
        return result;
    }

    function activity(study, date, ids) {
        const answers = Object.entries(study.days[date]?.answers || {}).filter(([id]) => ids.has(id));
        return { day: date, answers: answers.length, correct: answers.filter(([, correct]) => correct).length };
    }

    function summary(questions, study, now = new Date()) {
        const all = unique(questions);
        const today = day(now);
        const ids = new Set(all.map(question => question.id));
        const topics = new Map();
        let tested = 0;
        let consolidated = 0;
        let due = 0;
        for (const question of all) {
            if (!topics.has(question.tema)) topics.set(question.tema, {
                topic: question.tema, total: 0, tested: 0, attempts: 0, correct: 0, accuracy: null, weak: false, due: 0
            });
            const topic = topics.get(question.tema);
            const card = own(study.cards, question.id) ? study.cards[question.id] : null;
            topic.total++;
            if (card?.attempts > 0) {
                tested++;
                topic.tested++;
                topic.attempts += card.attempts;
                topic.correct += card.correct;
                if (card.stage >= 3) consolidated++;
            }
            if (card?.due <= today) { due++; topic.due++; }
        }
        for (const topic of topics.values()) {
            if (topic.attempts) topic.accuracy = topic.correct / topic.attempts * 100;
            topic.weak = topic.accuracy !== null && topic.accuracy < 70;
        }
        const week = Array.from({ length: 7 }, (_, i) => activity(study, shift(today, i - 6), ids));
        let streak = 0;
        let date = week[6].answers ? today : shift(today, -1);
        while (activity(study, date, ids).answers) { streak++; date = shift(date, -1); }
        return {
            total: all.length, tested, consolidated, due,
            today: { answers: week[6].answers, correct: week[6].correct },
            streak, xp: study.xp, level: 1 + Math.floor(study.xp / 100), levelProgress: study.xp % 100,
            week, topics: [...topics.values()].sort((a, b) => a.topic - b.topic)
        };
    }

    function examScore(results) {
        const correct = results.filter(result => result === true).length;
        const wrong = results.filter(result => result === false).length;
        const blank = results.length - correct - wrong;
        const net = correct - wrong / 3;
        return { correct, wrong, blank, net, percent: results.length ? net / results.length * 100 : 0 };
    }

    return { day, normalize, answer, flag, plan, summary, examScore };
})();
