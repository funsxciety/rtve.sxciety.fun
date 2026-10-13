# RTVE — Técnica Informática — Banco de Datos — Preguntas de estudio

Versión 1.0 · Elaborado el **13/10/2026**.

## Alcance

Preparación de la **convocatoria 1/2026 de acceso al Banco de Datos de Técnica Informática**, conforme al **anexo 1, pp. 12–13**, del PDF aportado. «Banco de Datos» es aquí la bolsa de candidaturas para contratación temporal, **no una especialidad exclusivamente de SQL**.

**384 preguntas**: **360 originales**, 20 por cada uno de los 18 temas, y **24 adaptaciones históricas**. Cuatro opciones, una correcta y explicación. Incluye conceptos directos, diagnóstico, cálculos y lectura de código.

**No son preguntas oficiales del examen BD 2026 ni una predicción.** No es posible enumerar todas las variaciones de preguntas que podría redactar un tribunal. Este banco cubre los conceptos enumerados en el anexo a nivel básico/operativo, sin garantizar agotar cada detalle tecnológico. La distribución uniforme es editorial, no un peso oficial.

No se incorporan como bloques obligatorios Constitución, financiación/organización jurídica de RTVE, convenio, PERT, blockchain ni estándares broadcast avanzados: pertenecen a otros procesos y no figuran expresamente en este anexo. Sí se incluyen PRL y protección de datos. Se excluyen preguntas históricas anuladas y se corrigen formulaciones ambiguas mediante nuevos enunciados.

## Reglas de examen del PDF aportado

Fuente: **L01, p. 7, apartado 5**. Una única prueba escrita **teórico-práctica**. Mínimo de **40 preguntas** y **20 % de reserva**, cuatro alternativas y una correcta. Acierto **+1**, error **−1/3**, blanco o varias respuestas **0**. Superación: al menos la mitad de la puntuación máxima. Fórmula: `aciertos - errores / 3`. Las reservas sustituyen anulaciones en orden; no sumarlas automáticamente. Si hubiera exactamente 40 principales, corresponderían 8 reservas, pero no se afirma que esa sea la cantidad definitiva. La duración se concretará en la citación: no trasladar los 120 minutos históricos a esta convocatoria.

## Fuentes y trazabilidad

### PDF aportados

| Código | Documento | Utilización |
|---|---|---|
| L01 | `BasesBBDD_Tecnica-Informatica.pdf` | Programa obligatorio, anexo 1, pp. 12–13; reglas p. 7. |
| L02 | `BE_TECINFO_Convocatoria-Banco-de-Datos (1).pdf` | Duplicado binario de L01; no es otro programa. |
| L03 | `CUADERNILLO PREGUNTAS EXAMEN A ING SUP INFORMATICA.pdf` | Examen de otra ocupación: se seleccionan conceptos coincidentes. |
| L04 | `PLANTILLA RESPUESTAS EXAMEN A ING SUP INFORMATICA.pdf` | Fechada 04/02/2025. La pregunta **24** está ANULADA, p. 2. |

SHA-256 de L01 y L02: `ff68fcb4300fa51ad5fa941c045d6b69013214042f5c832f5e83adef4ad680e8`.

### Exámenes localizados en Internet

Son copias alojadas por **USO RTVE**, fuente sindical secundaria, no publicaciones del futuro examen BD. Se enlazan originales y plantillas; **no se transcriben íntegramente los cuestionarios externos**. Las adaptaciones tienen opciones nuevas: su letra correcta no es la letra del original.

| Código | Documento | Precaución |
|---|---|---|
| H20 | [Técnica Informática, convocatoria 1/2020](https://rtve.usoindustria.org/wp-content/uploads/sites/4/2024/09/preguntas-tenica-informatica_2020.pdf) | Tres alternativas y supuestos; formato diferente al BD. |
| R20 | [Respuestas provisionales 1/2020](https://rtve.usoindustria.org/wp-content/uploads/sites/4/2024/09/respuestas_tecnica_informatica_2020.pdf) | Fechadas 10/11/2021. La extracción no conserva las marcas del test; no se atribuye letra oficial a las adaptaciones. |
| H23 | [Técnica Informática 2023](https://rtve.usoindustria.org/wp-content/uploads/sites/4/2024/09/preguntas-tenica-informatica_2023.pdf) | 80 principales y 16 reservas. |
| R23 | [Respuestas Técnica Informática 2023](https://rtve.usoindustria.org/wp-content/uploads/sites/4/2024/09/respuestas_tecnica_informatica_2023.pdf) | Prueba 25/09/2023; publicación 26/09/2023. Anuladas **25, 32, 49 y 67**; excluidas. |
| H25 | [Técnica Informática 2025](https://rtve.usoindustria.org/wp-content/uploads/sites/4/2025/02/PREG_TECINFO_2025.pdf) | Otra convocatoria. |
| R25 | [Respuestas Técnica Informática 2025](https://rtve.usoindustria.org/wp-content/uploads/sites/4/2025/02/RESP_TECINFO_2025.pdf) | Referencia histórica, no solución oficial de nuestras opciones. |
| W01 | [RTVE: ofertas de empleo](https://www.rtve.es/corporacion/ofertas-empleo/) | Identificación oficial del proceso. |
| W02 | [RTVE: puestos ofertados](https://convocatorias.rtve.es/puestos-ofertados) | Consultar citación y comunicaciones oficiales. |
| W03 | [Índice de exámenes USO](https://rtve.usoindustria.org/author/davidcamilo/page/9/) | Localización de cuestionarios/plantillas. |

### Apoyo técnico y normativo

Referencias consultadas para contrastar conceptos y ampliar estudio. **No son bibliografía obligatoria prescrita por RTVE** ni implican que todas las preguntas se extraigan de ellas. Las preguntas T son elaboración propia. Los enlaces de versión «current» pueden evolucionar.

| Código | Referencia |
|---|---|
| F01 | [Microsoft: comandos Windows](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands) |
| F02 | [Ubuntu: documentación de servidor](https://ubuntu.com/server/docs/) |
| F03 | [Microsoft: Active Directory](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview) |
| F04 | [RFC 1918: IPv4 privadas](https://www.rfc-editor.org/rfc/rfc1918) |
| F05 | [RFC 8200: IPv6](https://www.rfc-editor.org/rfc/rfc8200) |
| F06 | [Microsoft: nslookup](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/nslookup) |
| F07 | [MDN: HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview) |
| F08 | [PostgreSQL: tutorial](https://www.postgresql.org/docs/current/tutorial.html) |
| F09 | [PostgreSQL: agregaciones](https://www.postgresql.org/docs/current/tutorial-agg.html) |
| F10 | [PostgreSQL: JOIN](https://www.postgresql.org/docs/current/tutorial-join.html) |
| F11 | [PostgreSQL: restricciones](https://www.postgresql.org/docs/current/ddl-constraints.html) |
| F12 | [Python: tutorial](https://docs.python.org/3/tutorial/) |
| F13 | [Python: excepciones](https://docs.python.org/3/tutorial/errors.html) |
| F14 | [MDN: JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) |
| F15 | [RFC 8259: JSON](https://www.rfc-editor.org/rfc/rfc8259) |
| F16 | [Git: tutorial](https://git-scm.com/docs/gittutorial) |
| F17 | [NIST: cloud computing](https://csrc.nist.gov/pubs/sp/800/145/final) |
| F18 | [FFmpeg: documentación](https://ffmpeg.org/ffmpeg.html) |
| F19 | [AEPD: principios del tratamiento](https://www.aepd.es/preguntas-frecuentes/2-tus-obligaciones-como-responsable-del-tratamiento/4-los-principios-del-tratamiento/FAQ-0207-que-principios-debo-cumplir) |
| F20 | [AEPD: protección por defecto](https://www.aepd.es/derechos-y-deberes/cumple-tus-deberes/medidas-de-cumplimiento/proteccion-de-datos-por-defecto) |
| F21 | [BOE: Ley 31/1995 PRL](https://boe.es/buscar/act.php?id=BOE-A-1995-24292) |
| F22 | [BOE: RD 488/1997 PVD](https://boe.es/buscar/act.php?id=BOE-A-1997-8671) |
| F23 | [INSST: guía de PVD](https://www.insst.es/documentacion/catalogo-de-publicaciones/guia-tecnica-para-la-evaluacion-y-prevencion-de-los-riesgos-relativos-a-la-utilizacion-de-equipos-con-pantallas-de-visualizacion) |
| F24 | [INSST: manipulación de cargas](https://www.insst.es/materias/riesgos/riesgos-ergonomicos/carga-fisica/manipulacion-manual-de-cargas) |
| F25 | [Microsoft: icacls](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/icacls) |

## Formato y uso

- IDs estables `T01-001` a `T18-020`; históricos `H-001` a `H-024`.
- Secciones T: origen **GENERADA**. Sección H: origen **ADAPTADA**, no reproducción literal ni pregunta oficial BD 2026.
- Nivel **B**: básico; **M**: comprensión; **P**: supuesto, cálculo o código. Etiquetas editoriales.
- Una fila por pregunta: ID, nivel, enunciado, opciones A–D, letra correcta y explicación. El tema y las fuentes figuran en el encabezado del bloque.
- Para practicar, ocultar Correcta/Explicación; para aprender, revelarlas tras responder. La aplicación futura debe tratar todo como texto, sin ejecutar código ni interpretar enunciados como HTML.
- No se crean todavía HTML, CSS, JS ni programas de conversión. Los comandos son ejemplos académicos, no instrucciones para modificar sistemas reales.

## Índice de cobertura

| Tema | Programa del anexo 1 | IDs |
|---|---|---|
| 01 | Fundamentos de informática y arquitectura de equipos | T01-001–020 |
| 02 | Sistemas operativos de puesto de usuario | T02-001–020 |
| 03 | Sistemas corporativos y servidores | T03-001–020 |
| 04 | Redes y conectividad | T04-001–020 |
| 05 | Internet, servicios y certificados | T05-001–020 |
| 06 | Soporte técnico y atención a usuarios | T06-001–020 |
| 07 | Seguridad informática | T07-001–020 |
| 08 | Bases de datos | T08-001–020 |
| 09 | Automatización, scripting y desarrollo web básico | T09-001–020 |
| 10 | Formatos de datos e intercambio de información | T10-001–020 |
| 11 | Fundamentos del desarrollo de software | T11-001–020 |
| 12 | Entornos de desarrollo y herramientas de trabajo | T12-001–020 |
| 13 | Virtualización, almacenamiento y copias de seguridad | T13-001–020 |
| 14 | Servicios cloud y herramientas colaborativas | T14-001–020 |
| 15 | Sistemas audiovisuales, multimedia y producción digital | T15-001–020 |
| 16 | Documentación, inventario y procedimientos | T16-001–020 |
| 17 | Protección de datos y uso responsable de sistemas | T17-001–020 |
| 18 | Derechos y obligaciones de los trabajadores en PRL | T18-001–020 |

## Preguntas originales

### Tema 01. Fundamentos de informática y arquitectura de equipos

Origen: GENERADA. Alcance: L01, tema 1. Hardware/software, periféricos, BIOS/UEFI, arranque, discos, memoria, CPU, NIC/GPU, equipos y diagnóstico.

| ID | Nivel | Pregunta | A | B | C | D | Correcta | Explicación |
|---|---|---|---|---|---|---|---|---|
| T01-001 | B | ¿Cuál es hardware? | Navegador | Sistema operativo | Módulo RAM | Driver instalado | C | Hardware es el componente físico. |
| T01-002 | B | ¿Cuál es un periférico de entrada? | Teclado | Altavoz | Impresora | Proyector | A | Introduce información en el equipo. |
| T01-003 | B | ¿Qué permite entrada y salida? | Micrófono | Altavoz | Monitor no táctil | Pantalla táctil | D | Muestra información y recibe pulsaciones. |
| T01-004 | B | ¿Qué memoria convencional es volátil? | SSD | RAM | HDD | Flash | B | Pierde su contenido sin alimentación. |
| T01-005 | B | ¿Qué hace principalmente la CPU? | Alimentar el equipo | Guardar copias externas | Ejecutar instrucciones | Proporcionar WiFi | C | Procesa instrucciones y operaciones. |
| T01-006 | M | ¿Para qué sirve la caché de CPU? | Acelerar acceso a datos frecuentes | Sustituir cualquier disco | Guardar copias externas | Asignar IP | A | Reduce accesos a memoria más lenta. |
| T01-007 | B | ¿Qué distingue un SSD de un HDD convencional? | Tiene platos | Es RAM | No admite sistemas operativos | No tiene partes mecánicas móviles | D | Almacena electrónicamente. |
| T01-008 | M | ¿Qué relación es correcta? | HDMI es memoria | NVMe es protocolo y M.2 formato/conector | DHCP es una GPU | SATA es un antivirus | B | No todo dispositivo M.2 utiliza NVMe. |
| T01-009 | B | ¿Qué función tiene BIOS/UEFI? | Compilar Java | Crear documentos | Inicializar hardware y preparar arranque | Resolver DNS público | C | Es firmware previo al sistema operativo. |
| T01-010 | M | ¿Qué controla Secure Boot? | Todo el malware | Confianza de componentes de arranque mediante firmas | Velocidad de RAM | Contraseñas locales | B | Protege el arranque; no sustituye al antivirus. |
| T01-011 | B | ¿Qué conecta un equipo a Ethernet? | NIC | Disipador | Fuente | Tarjeta de sonido | A | La tarjeta de red proporciona esa interfaz. |
| T01-012 | B | ¿Qué trabajo corresponde a una GPU? | Permisos NTFS | Resolver DNS | Aplicar GPO | Gráficos y cargas paralelas compatibles | D | Acelera procesamiento gráfico. |
| T01-013 | M | ¿Cómo elegir entre portátil y estación de trabajo? | Solo por color | Ignorando movilidad | Según carga, recursos y movilidad | Siempre el más caro | C | El tipo debe ajustarse al uso previsto. |
| T01-014 | P | No enciende ni muestra luces. ¿Primera comprobación segura? | Reinstalar navegador | Alimentación y cableado | Cambiar DNS | Formatear | B | Se comienza por verificaciones no destructivas. |
| T01-015 | P | Se apaga bajo carga con temperatura elevada. ¿Qué revisar? | Refrigeración y ventilación | Registro MX | Formato CSV | Historial web | A | Puede actuar una protección térmica. |
| T01-016 | P | Un HDD hace ruidos anómalos y falla al leer. ¿Prioridad? | Desfragmentar repetidamente | Formatear | Ignorar | Proteger datos y evaluar avería | D | Las escrituras y lecturas intensivas pueden agravarla. |
| T01-017 | B | ¿Para qué sirve un driver? | Reemplazar alimentación | Crear usuarios | Permitir al SO gestionar un dispositivo | Garantizar ausencia de fallos | C | Enlaza software y hardware concreto. |
| T01-018 | P | Hay fallos compatibles con RAM defectuosa. ¿Prueba pertinente? | Cambiar inicio web | Diagnóstico de memoria | Eliminar certificados | Cambiar DNS | B | Permite contrastar esa hipótesis. |
| T01-019 | B | ¿Cuántos bits tiene un byte? | 8 | 10 | 16 | 1024 | A | Un byte contiene ocho bits. |
| T01-020 | P | 80 Mbit/s constantes, sin sobrecarga: ¿cuántos MB/s decimales? | 80 | 640 | 8 | 10 | D | 80/8 = 10 MB/s. |

### Tema 02. Sistemas operativos de puesto de usuario

Origen: GENERADA. Alcance: L01, tema 2. Windows 10/11 y Ubuntu: instalación, cuentas, permisos, archivos, procesos, servicios, actualizaciones, administración, eventos y recuperación. Apoyo: F01, F02, F25.

| ID | Nivel | Pregunta | A | B | C | D | Correcta | Explicación |
|---|---|---|---|---|---|---|---|---|
| T02-001 | B | ¿Qué hace un sistema operativo? | Diseñar cables | Gestionar procesos, memoria y dispositivos | Alimentar CPU | Emitir certificados públicos | B | Coordina recursos y ejecución. |
| T02-002 | P | Antes de reinstalar Windows, ¿qué hacer? | Borrar particiones | Quitar contraseñas | Copia verificada, requisitos y autorización | Cambiar fondo | C | La reinstalación puede destruir datos. |
| T02-003 | B | ¿Qué muestra procesos y consumo en Windows? | Administrador de tareas | Paint | Calculadora | Lupa | A | Permite inspeccionar utilización de recursos. |
| T02-004 | B | ¿Dónde consultar errores registrados de Windows? | Papelera | Portapapeles | Paint | Visor de eventos | D | Relaciona eventos con incidencias. |
| T02-005 | B | ¿Qué administra hardware y drivers en Windows? | Bloc de notas | Administrador de dispositivos | Agenda | Calculadora | B | Muestra estado y controladores. |
| T02-006 | M | ¿Para qué sirve UAC? | Controlar elevación de privilegios | Sustituir antivirus | Cifrar toda red | Crear VLAN | A | Solicita confirmación o credenciales para elevar. |
| T02-007 | B | ¿Qué sistema de archivos admite ACL en Windows? | CSV | HTTP | NTFS | JSON | C | Permite controlar permisos detallados. |
| T02-008 | M | ¿Qué límite tiene FAT32 para un archivo? | No admite carpetas | Solo funciona en Linux | Requiere Internet | Aproximadamente 4 GiB | D | El límite habitual es 4 GiB menos un byte. |
| T02-009 | B | ¿Qué sistema de archivos es habitual en Linux? | NTLM | ext4 | SMTP | UEFI | B | ext4 organiza archivos en almacenamiento. |
| T02-010 | B | ¿Qué contiene normalmente `/home`? | Directorios personales | Lista de DNS | Firmware | Cargador gráfico | A | Aloja hogares de usuarios normales. |
| T02-011 | B | ¿Qué muestra el directorio actual en Bash? | mkdir | rm | pwd | chmod | C | `pwd` imprime la ubicación actual. |
| T02-012 | P | ¿Qué expresa `chmod 640 informe.txt`? | Todos ejecutan | Propietario solo lee | Grupo escribe | Propietario rw; grupo r; otros ninguno | D | 6=lectura/escritura, 4=lectura, 0=ninguno. |
| T02-013 | M | ¿Qué es un proceso? | Instancia de programa en ejecución | Archivo siempre malicioso | Programa sin memoria | Solo una carpeta | A | Puede haber varias instancias del mismo programa. |
| T02-014 | B | ¿Qué es un servicio? | CSV obligatorio | Función normalmente ejecutada en segundo plano | Partición física | Cuenta personal | B | No requiere normalmente ventana interactiva. |
| T02-015 | P | Ubuntu con systemd: ¿cómo consultar estado de SSH? | `chmod ssh` | `apt ssh --delete` | `systemctl status ssh` | `mkdir ssh` | C | Consulta el estado de esa unidad. |
| T02-016 | M | ¿Qué hace `apt update`? | Actualizar índices de paquetes | Instalar todas las actualizaciones | Formatear | Cambiar contraseña root | A | No equivale a `apt upgrade`. |
| T02-017 | P | Un parche afecta una aplicación crítica. ¿Qué hacer? | Bloquear parches para siempre | Instalar sin avisar | Compartir administrador | Validar, planificar y prever reversión | D | Seguridad y continuidad deben coordinarse. |
| T02-018 | M | ¿Un punto de restauración sustituye una copia de documentos? | Siempre | No, revierte componentes/configuración del sistema | Solo en Linux | Solo con WiFi | B | No es una copia completa de datos personales. |
| T02-019 | P | Un usuario requiere una tarea administrativa puntual. ¿Mejor opción? | Todos administradores | Desactivar ACL | Elevación autorizada para esa tarea | Publicar credenciales | C | Evita privilegios permanentes innecesarios. |
| T02-020 | P | Una aplicación bloqueada contiene trabajo no guardado. ¿Antes de terminarla? | Evaluar recuperación y advertir de pérdida | Borrar carpeta | Cambiar hora | Desconectar ratón | A | Finalizar el proceso puede perder trabajo. |

### Tema 03. Sistemas corporativos y servidores

Origen: GENERADA. Alcance: L01, tema 3. Servidores Windows/Linux, dominio/AD, cuentas/grupos, permisos, recursos, GPO, remoto, logs, tareas y mantenimiento. Apoyo: F01, F02, F03, F25.

| ID | Nivel | Pregunta | A | B | C | D | Correcta | Explicación |
|---|---|---|---|---|---|---|---|---|
| T03-001 | B | ¿Qué caracteriza a un servidor? | Nunca tiene SO | Solo admite un usuario | Presta servicios a clientes | Siempre es físico | C | Es un papel, no un tipo obligatorio de caja. |
| T03-002 | B | ¿Qué aporta un dominio AD? | Gestión centralizada de identidades y recursos | Eliminar contraseñas | Comprimir vídeo | Sustituir IP | A | Centraliza cuentas, equipos y políticas. |
| T03-003 | B | ¿Qué hace un controlador de dominio? | Dibujar interfaces | Autenticar y prestar servicios del directorio | Convertir PDF | Alimentar switches | B | Participa en la gestión del dominio. |
| T03-004 | M | ¿Cómo se distinguen cuenta local y de dominio? | La local es pública | Dominio no usa contraseña | Ambas son solo RAM | Equipo local frente a directorio corporativo | D | Tienen ámbitos de administración diferentes. |
| T03-005 | B | ¿Por qué asignar permisos a grupos? | Eliminar trazabilidad | Desactivar controles | Gestionar acceso por funciones | Evitar autenticación | C | Simplifica altas/bajas manteniendo coherencia. |
| T03-006 | M | ¿Qué es una OU de AD? | Contenedor organizativo y administrativo | Disco USB | IPv6 | Códec | A | No equivale a un grupo de seguridad. |
| T03-007 | B | ¿Para qué sirven las GPO? | Crear vídeos | Aplicar configuración a cuentas/equipos | Aumentar RAM | Crear claves SQL | B | Distribuyen políticas del entorno administrado. |
| T03-008 | P | Un PC no localiza el dominio, pero navega. ¿Qué revisar? | Brillo | Códec | Impresora | DNS corporativo | D | AD localiza sus servicios mediante DNS. |
| T03-009 | B | ¿Qué protocolo comparte archivos en Windows? | SMTP | ICMP | SMB | POP3 | C | SMB proporciona acceso a recursos compartidos. |
| T03-010 | M | Acceso a carpeta Windows por red: ¿qué permisos cuentan? | Compartición y NTFS efectivos | Solo escritorio | Nombre del servidor | Ninguno | A | La operación debe satisfacer ambas capas. |
| T03-011 | P | SMB: lectura en recurso y modificación NTFS, sin otras reglas. ¿Acceso por red? | Modificar | Leer | Administrar dominio | Borrar siempre | B | La compartición limita a lectura. |
| T03-012 | B | ¿Cuál es una ruta UNC? | `https://correo.example` | `/etc/hosts` | `C:datos` | `\\servidor\recurso` | D | Identifica un recurso de red Windows. |
| T03-013 | B | ¿Qué proporciona SSH? | Solo impresión | Solo DNS | Acceso remoto protegido | Solo vídeo | C | Protege la sesión remota mediante cifrado. |
| T03-014 | B | ¿Qué protocolo se asocia con Escritorio remoto? | RDP | XML | RAID | DHCP | A | Proporciona sesiones gráficas remotas. |
| T03-015 | M | Exponer administración remota sin controles, ¿qué implica? | Más confidencialidad | Mayor superficie de ataque | No necesitar parches | Evitar errores | B | Exige restricciones, autenticación y supervisión. |
| T03-016 | P | ¿Cómo consultar logs de una unidad systemd? | `touch servicio` | `chmod servicio` | `clear servicio` | `journalctl -u nombre.service` | D | Filtra el diario por unidad. |
| T03-017 | B | ¿Qué programa tareas en Windows? | Paint | Papelera | Programador de tareas | Lupa | C | Usa desencadenadores temporales o por eventos. |
| T03-018 | B | ¿Qué programa tareas periódicas clásicas en Linux? | cron | BIOS | TLS | GPU | A | Ejecuta tareas según expresiones temporales. |
| T03-019 | P | Una tarea solo falla programada. ¿Qué revisar? | Fondo | Cuenta, permisos, rutas y entorno | Resolución | Cable del ratón | B | Puede ejecutarse bajo otro contexto. |
| T03-020 | P | Antes de reiniciar un servidor de producción, ¿qué hacer? | Cortar corriente | Borrar logs | Desactivar copias | Evaluar dependencias y usar ventana autorizada | D | Reduce interrupciones y deja trazabilidad. |

### Tema 04. Redes y conectividad

Origen: GENERADA. Alcance: L01, tema 4. OSI/TCP-IP, LAN/WAN/WiFi, direccionamiento, máscara/gateway, DNS/DHCP/NAT/VLAN, equipos, cableado y diagnóstico. Apoyo: F01, F04, F05, F06. Cálculos IPv4 en subredes convencionales, sin excepciones /31 o /32.

| ID | Nivel | Pregunta | A | B | C | D | Correcta | Explicación |
|---|---|---|---|---|---|---|---|---|
| T04-001 | B | ¿En qué capa OSI trabaja IP? | Aplicación | Red | Física | Sesión | B | IP proporciona direccionamiento y encaminamiento. |
| T04-002 | B | ¿En qué capa TCP/IP se sitúan TCP y UDP? | Acceso | Internet | Transporte | Aplicación | C | Comunican procesos mediante puertos. |
| T04-003 | B | ¿Qué describe una LAN? | Red de área local | Toda Internet | Red solo satelital | Un antivirus | A | Conecta equipos de un ámbito local. |
| T04-004 | B | ¿Qué caracteriza una WAN? | Solo un cable USB | Ausencia de routers | Uso exclusivo de WiFi | Interconexión de ámbitos geográficos amplios | D | Une redes o sedes a mayor distancia. |
| T04-005 | M | ¿Qué puede empeorar una conexión WiFi? | Un archivo JSON | Interferencias y obstáculos | Una clave primaria | Un nombre de usuario corto | B | Afectan al medio radioeléctrico. |
| T04-006 | B | ¿Cuántos bits tiene una dirección IPv4? | 32 | 48 | 64 | 128 | A | Son cuatro octetos. |
| T04-007 | B | ¿Cuántos bits tiene una dirección IPv6? | 32 | 48 | 128 | 256 | C | Amplía notablemente el espacio de direcciones. |
| T04-008 | B | ¿Qué IP pertenece a un rango privado RFC 1918? | 8.8.8.8 | 1.1.1.1 | 172.32.1.1 | 192.168.10.5 | D | 192.168.0.0/16 es privado; 172.32 queda fuera de 172.16/12. |
| T04-009 | P | ¿Qué máscara corresponde a /24? | 255.0.0.0 | 255.255.255.0 | 255.255.0.0 | 255.255.255.255 | B | Tiene 24 bits de red. |
| T04-010 | P | ¿Cuál es la red de 192.168.10.45/24? | 192.168.10.0 | 192.168.0.0 | 192.168.10.45 | 192.168.10.255 | A | Se ponen a cero los ocho bits de host. |
| T04-011 | P | ¿Cuántas direcciones de host utilizables hay normalmente en una /26? | 64 | 126 | 62 | 254 | C | 2^6−2 = 62: se excluyen red y broadcast. |
| T04-012 | B | ¿Para qué sirve la puerta de enlace predeterminada? | Asignar contraseñas | Comprimir paquetes | Cambiar MAC | Enviar tráfico hacia otras redes | D | Se utiliza cuando no hay una ruta más específica. |
| T04-013 | B | ¿Qué proporciona DNS? | Cifrado de discos | Resolución de nombres | Alimentación eléctrica | Copias completas | B | Relaciona nombres con registros, incluidas direcciones. |
| T04-014 | B | ¿Qué hace DHCP? | Facilitar configuración IP automáticamente | Cifrar HTTPS | Escanear discos | Editar audio | A | Puede entregar IP, máscara, gateway y DNS. |
| T04-015 | B | ¿Para qué sirve NAT? | Dar nombres a usuarios | Sincronizar vídeo | Traducir direcciones de red | Cifrar automáticamente el tráfico | C | No es por sí solo una garantía de seguridad. |
| T04-016 | M | ¿Qué crea una VLAN? | Una copia de seguridad | Más RAM | Un dominio AD | Segmentación lógica de capa 2 | D | El tráfico entre VLAN requiere encaminamiento. |
| T04-017 | B | ¿Qué distingue un router de un switch básico de capa 2? | El router solo imprime | Encaminamiento entre redes frente a conmutación por MAC | Ninguno usa tablas | El switch cifra siempre | B | Sus decisiones usan información de capas distintas. |
| T04-018 | M | ¿Qué elemento filtra tráfico según reglas? | Cortafuegos | Teclado | Disipador | UPS | A | Permite o bloquea comunicaciones definidas. |
| T04-019 | P | Para varios kilómetros sin repetidores, ¿qué medio suele ser adecuado? | USB | UTP de oficina | Fibra monomodo con ópticas compatibles | Cable de ratón | C | Deben ajustarse alcance y presupuesto óptico. |
| T04-020 | P | ¿Qué correspondencia de diagnóstico es correcta en Windows? | ping edita DNS | tracert renueva DHCP | nslookup mide temperatura | ipconfig muestra IP; ping prueba ICMP; tracert ruta; nslookup DNS | D | Son pruebas distintas; un ping fallido no demuestra por sí solo caída. |

### Tema 05. Internet, servicios y certificados

Origen: GENERADA. Alcance: L01, tema 5. Internet/web/correo, HTTP/HTTPS, DNS/TCP-IP, SMTP/IMAP/POP3, FTP/SFTP/SSH, certificados, TLS y navegación. Apoyo: F06, F07.

| ID | Nivel | Pregunta | A | B | C | D | Correcta | Explicación |
|---|---|---|---|---|---|---|---|---|
| T05-001 | B | ¿Qué relación existe entre web e Internet? | La web es un servicio que utiliza Internet | Son siempre lo mismo | Internet solo lleva HTML | La web sustituye TCP/IP | A | Internet transporta muchos servicios, no solo web. |
| T05-002 | B | ¿Cuál es la función de HTTP? | Dar alimentación | Intercambiar peticiones y respuestas web | Gestionar discos RAID | Crear usuarios locales | B | Es un protocolo de aplicación. |
| T05-003 | B | ¿Qué añade HTTPS a HTTP? | Compresión obligatoria | Más RAM | Protección mediante TLS | Ausencia de servidores | C | Protege la comunicación y permite autenticar al servidor. |
| T05-004 | M | ¿Qué garantiza el candado HTTPS correctamente validado? | Que el contenido es verdadero | Que no hay phishing | Que la empresa es honesta | Canal protegido hacia el sitio identificado por el certificado | D | Un sitio malicioso también puede tener certificado válido. |
| T05-005 | B | ¿Qué protocolo se utiliza para enviar y transferir correo? | SMTP | IMAP | POP3 | ICMP | A | SMTP se ocupa del envío/transporte de mensajes. |
| T05-006 | M | ¿Qué ventaja típica tiene IMAP? | No admite carpetas | Sincronizar buzón y estado entre dispositivos | Solo envía correo | Borra siempre todo al leer | B | Mantiene normalmente los mensajes en el servidor. |
| T05-007 | M | ¿Qué describe mejor POP3? | Gestión de VLAN | Transporte de vídeo | Acceso para descargar mensajes del buzón | Emisión de certificados | C | La conservación en servidor depende de configuración. |
| T05-008 | B | ¿Qué registro DNS indica servidores de correo de un dominio? | A | AAAA | PTR | MX | D | MX especifica destinos de recepción del correo. |
| T05-009 | B | ¿Qué registro DNS relaciona nombre con dirección IPv4? | A | MX | TXT exclusivamente | CNAME exclusivamente | A | AAAA cumple esa función para IPv6. |
| T05-010 | M | ¿Qué aporta TCP? | Entrega siempre instantánea | Flujo fiable y ordenado de bytes | Cifrado de contenido por defecto | Direcciones de 128 bits | B | Puede retransmitir; no proporciona cifrado por sí mismo. |
| T05-011 | B | ¿Qué puerto se asocia habitualmente a HTTPS? | 25 | 110 | 443 | 53 | C | Es el puerto de servicio habitual; puede configurarse otro. |
| T05-012 | B | ¿Qué puerto se asocia habitualmente a SSH? | 80 | 443 | 21 | 22 | D | Es el puerto predeterminado habitual. |
| T05-013 | M | ¿Qué riesgo presenta FTP sin protección adicional? | Credenciales y datos pueden viajar sin cifrar | No puede transferir archivos | Siempre usa TLS | Solo sirve para vídeo | A | No confundir FTP con FTPS o SFTP. |
| T05-014 | M | ¿Qué es SFTP? | FTP sobre ICMP | Transferencia de archivos mediante SSH | Sinónimo de FTP sin cifrar | Un servidor DNS | B | No es FTP sobre TLS: eso corresponde a FTPS. |
| T05-015 | B | ¿Qué vincula un certificado digital de servidor? | Contraseña con disco | GPU con códec | Identidad/nombre con una clave pública | Archivo con clave privada pública | C | La firma del emisor permite validar esa vinculación. |
| T05-016 | P | Un certificado válido está emitido para otro nombre. ¿Qué ocurre? | Da igual con TLS | Se convierte en DNS | Mejora seguridad | Falla la validación de identidad del servidor | D | El nombre debe corresponder al sitio solicitado. |
| T05-017 | P | Aparece aviso de certificado caducado. ¿Qué hacer? | Investigar fecha/certificado y comunicar, sin ignorarlo rutinariamente | Desactivar TLS | Compartir contraseña | Aceptar siempre | A | También conviene comprobar el reloj del equipo. |
| T05-018 | B | ¿Qué clave de un certificado debe mantenerse secreta? | La pública | La privada | El número de serie | El nombre del emisor | B | Su exposición permite usos no autorizados. |
| T05-019 | P | Hay conectividad IP, pero falla acceso por nombre. ¿Qué comprobar? | Temperatura CPU | RAID | Resolución DNS | Ratón | C | Conviene probar nombres y registros con herramientas DNS. |
| T05-020 | M | ¿Qué práctica mejora navegación segura? | Instalar extensiones de cualquier origen | Ignorar alertas TLS | Desactivar actualizaciones | Verificar URL, usar software actualizado y evitar descargas dudosas | D | La protección del canal no evita toda ingeniería social. |

### Tema 06. Soporte técnico y atención a usuarios

Origen: GENERADA. Alcance: L01, tema 6. Diagnóstico, tickets, clasificación, prioridad, seguimiento, documentación, comunicación, escalado y distinción de solicitudes. No se exige una versión ni certificación ITIL.

| ID | Nivel | Pregunta | A | B | C | D | Correcta | Explicación |
|---|---|---|---|---|---|---|---|---|
| T06-001 | B | ¿Qué es una incidencia? | Alta planificada | Interrupción o degradación no prevista de un servicio | Cualquier reunión | Compra aprobada | B | El objetivo inicial es restaurar el servicio. |
| T06-002 | B | ¿Qué es una petición de servicio? | Siempre una caída | Un ataque confirmado | Solicitud habitual de información, acceso o prestación | Fallo de hardware necesariamente | C | Puede tramitarse por un procedimiento predefinido. |
| T06-003 | M | ¿Qué representa un problema en gestión de servicios? | Causa real o potencial de una o varias incidencias | Cualquier usuario nuevo | Un activo | Un turno | A | Investigar la causa ayuda a evitar recurrencias. |
| T06-004 | B | ¿Qué es un cambio? | Ticket sin responsable | Copia del inventario | Solo reiniciar ratón | Modificación controlada que puede afectar al servicio | D | Debe valorar riesgo y autorización aplicable. |
| T06-005 | P | Un usuario solicita instalar software aprobado. ¿Clasificación habitual? | Incidente de malware | Petición de servicio | Problema raíz confirmado | Accidente laboral | B | No hay necesariamente una interrupción. |
| T06-006 | P | Fallan repetidamente varias estaciones por la misma causa. ¿Qué procede además de resolver? | Investigar el problema común | Cerrar sin explicar | Borrar tickets anteriores | Cambiar usuarios | A | La recurrencia justifica análisis de causa raíz. |
| T06-007 | B | ¿Para qué sirve un identificador único de ticket? | Cifrar WiFi | Aumentar prioridad automáticamente | Seguir y relacionar actuaciones | Reemplazar contraseña | C | Facilita trazabilidad y comunicación. |
| T06-008 | B | ¿Qué debe incluir el registro inicial? | Contraseña del usuario | Datos personales irrelevantes | Solo «no funciona» | Servicio, síntomas, alcance, momento y contacto necesario | D | Permite reproducir y evaluar la incidencia. |
| T06-009 | M | ¿Cómo establecer prioridad normalmente? | Según simpatía | Combinando impacto y urgencia | Solo por antigüedad del PC | Por número de letras | B | Afectación y tiempo disponible guían la prioridad. |
| T06-010 | P | ¿Qué merece más prioridad durante un directo? | Caída del servicio crítico de emisión | Cambio de fondo | Instalación no urgente | Duda documental aplazable | A | El impacto operativo y la urgencia son mayores. |
| T06-011 | M | ¿Qué significa escalado funcional? | Cambiar fecha sin aviso | Comprar hardware | Derivar a personal con competencia técnica necesaria | Cerrar el ticket | C | Traslada el caso a otro nivel o especialista. |
| T06-012 | M | ¿Qué caracteriza un escalado jerárquico? | Formatear equipo | Cambiar VLAN | Sustituir monitor | Involucrar responsables por impacto, decisión o plazos | D | No equivale necesariamente a cambiar de especialidad. |
| T06-013 | P | ¿Qué acompañará un ticket escalado? | Solo «urgente» | Evidencias, pruebas realizadas, resultados y contexto | Contraseña compartida | Historial personal completo | B | Evita repetir pruebas y agiliza diagnóstico. |
| T06-014 | P | ¿Qué preguntar primero ante «no funciona»? | Qué esperaba, qué ocurre y desde cuándo | La contraseña | Datos familiares | Que reinstale todo | A | Se concreta el síntoma antes de actuar. |
| T06-015 | M | ¿Qué ayuda a aislar una avería? | Cambiar todo a la vez | Ocultar mensajes | Probar hipótesis cambiando una variable cada vez | Borrar evidencias | C | Permite atribuir el resultado a una causa. |
| T06-016 | P | Una solución temporal restaura el servicio. ¿Qué registrar? | Nada | Solo el nombre del técnico | Que la causa está eliminada sin comprobar | Workaround, límites y seguimiento de causa | D | Restaurar no implica resolver definitivamente el problema. |
| T06-017 | B | ¿Qué comunicación es adecuada? | Culpar al usuario | Explicar claramente estado y siguientes pasos | Prometer tiempos imposibles | Usar jerga sin contexto | B | Ayuda a gestionar expectativas y colaboración. |
| T06-018 | P | ¿Cuándo cerrar una incidencia? | Tras verificar recuperación y documentar, según procedimiento | Al derivarla siempre | Al recibirla | Antes de probar | A | Debe existir evidencia de resolución o cierre justificado. |
| T06-019 | M | ¿Qué aporta una herramienta de ticketing? | Sustituye todo diagnóstico | Corrige hardware automáticamente | Registro, asignación, estados y seguimiento | Elimina comunicación | C | Organiza el trabajo sin reemplazar criterio técnico. |
| T06-020 | P | El usuario ofrece su contraseña para soporte. ¿Qué hacer? | Guardarla en ticket | Enviarla al equipo | Usarla en cuenta compartida | Rechazarla y usar el procedimiento autorizado | D | El soporte no debe recopilar secretos innecesarios. |

### Tema 07. Seguridad informática

Origen: GENERADA. Alcance: L01, tema 7. CIA, contraseñas/MFA, privilegios, parches, antivirus/EDR, cifrado/copias, ransomware/phishing, amenazas, VPN y firewall. Apoyo relacionado: F19, F20 y [política de contraseñas INCIBE](https://www.incibe.es/sites/default/files/contenidos/politicas/documentos/2024/Contrase%C3%B1as_Pol%C3%ADtica%20de%20seguridad_2024.pdf).

| ID | Nivel | Pregunta | A | B | C | D | Correcta | Explicación |
|---|---|---|---|---|---|---|---|---|
| T07-001 | B | ¿Qué significa CIA en seguridad? | Certificado, IP, acceso | Copia, Internet, archivo | CPU, integridad, antivirus | Confidencialidad, integridad y disponibilidad | D | Son tres objetivos básicos de protección. |
| T07-002 | B | ¿Qué protege la confidencialidad? | Acceso a información solo por autorizados | Velocidad de vídeo | Existencia de backups únicamente | Tamaño de disco | A | Evita divulgación indebida. |
| T07-003 | M | Alterar sin permiso una noticia almacenada afecta directamente a… | Disponibilidad solamente | Resolución | Integridad | Latencia | C | La integridad protege contra modificaciones no autorizadas. |
| T07-004 | M | Una caída impide consultar documentos. ¿Qué propiedad se afecta? | Confidencialidad necesariamente | Disponibilidad | Compresión | Autenticidad del códec | B | El servicio no está accesible cuando se necesita. |
| T07-005 | B | ¿Qué caracteriza una contraseña adecuada? | Misma en todos los servicios | Nombre del usuario | Publicada en el ticket | Larga, difícil de adivinar y no reutilizada | D | La reutilización propaga el impacto de una filtración. |
| T07-006 | M | ¿Qué combinación es MFA? | Contraseña y token de posesión | Contraseña y otra contraseña | Usuario y apellido | Dos preguntas secretas | A | Combina categorías de factor diferentes. |
| T07-007 | P | Llega una solicitud MFA inesperada. ¿Qué hacer? | Aprobar para que cese | Repetir contraseña por correo | Rechazar y comunicar posible compromiso | Desactivar MFA | C | Puede ser un intento de acceso no autorizado. |
| T07-008 | B | ¿Qué exige mínimo privilegio? | Todos administradores | Solo permisos necesarios para la función | Sin permisos nunca | Compartir cuentas | B | Reduce exposición y daño potencial. |
| T07-009 | M | ¿Para qué sirven los parches de seguridad? | Para añadir siempre funciones | Para eliminar backups | Para reemplazar permisos | Corregir vulnerabilidades conocidas | D | Deben desplegarse con validación y seguimiento. |
| T07-010 | M | ¿Qué añade normalmente EDR respecto de antivirus básico? | Telemetría y capacidades de detección/respuesta en endpoints | Inmunidad absoluta | Alimentación redundante | Resolución DNS | A | Detecta comportamientos y permite respuesta; no garantiza protección total. |
| T07-011 | B | ¿Qué es ransomware? | Un formato de vídeo | Una copia externa | Malware que puede bloquear/cifrar y extorsionar | Un protocolo seguro | C | También puede acompañarse de robo de información. |
| T07-012 | P | Se detecta cifrado masivo sospechoso. ¿Actuación inicial adecuada? | Abrir más archivos | Aislar según protocolo y avisar al equipo de seguridad | Pagar automáticamente | Borrar todas las evidencias | B | Se limita propagación preservando evidencia. |
| T07-013 | B | ¿Qué caracteriza al phishing? | Un disco lento | Una partición | Un driver | Engaño para obtener secretos o provocar acciones | D | Puede usar correo, web u otros canales. |
| T07-014 | P | Un correo exige cambiar la clave en un enlace urgente. ¿Qué hacer? | Verificar por canal conocido y reportar | Pulsar por urgencia | Responder con contraseña | Reenviar a todos | A | Evita validar la petición mediante el propio enlace sospechoso. |
| T07-015 | M | ¿Qué diferencia amenaza y vulnerabilidad? | Son sinónimos exactos | La amenaza siempre es un parche | La amenaza puede explotar una debilidad o vulnerabilidad | Vulnerabilidad es una copia | C | El riesgo depende también de impacto y probabilidad. |
| T07-016 | M | ¿Qué protege el cifrado de disco de un portátil apagado? | Toda navegación | Datos en reposo frente a acceso sin claves | Cualquier malware en ejecución | Todos los errores de usuario | B | No sustituye el control de acceso durante la sesión. |
| T07-017 | B | ¿Qué caracteriza una VPN corporativa segura? | Antivirus obligatorio dentro del PDF | Más RAM | Almacenamiento RAID | Túnel protegido hacia recursos autorizados | D | No garantiza que los extremos estén libres de malware. |
| T07-018 | M | ¿Qué regla de firewall sigue mínimo acceso? | Permitir solo comunicaciones justificadas | Abrir todos los puertos | Quitar logs | Permitir todo origen siempre | A | Reduce exposición de servicios. |
| T07-019 | P | ¿Qué backup resiste mejor el cifrado del equipo? | Carpeta local siempre montada | Disco con mismas credenciales siempre conectado | Copia separada, protegida y probada | Acceso directo al archivo | C | Separación y controles dificultan que el ataque alcance la copia. |
| T07-020 | P | Se pierde un portátil corporativo. ¿Qué hacer? | Esperar una semana | Comunicar de inmediato y aplicar protocolo de pérdida | Ocultarlo | Compartir claves para localizarlo | B | Puede requerir revocar accesos y evaluar datos afectados. |

### Tema 08. Bases de datos

Origen: GENERADA. Alcance: L01, tema 8. Tabla/registro/campo, claves, relaciones, integridad, normalización, CRUD SQL, filtros, ordenación, agregación, uniones y NoSQL. Apoyo: F08–F11. SQL común; no se presuponen efectos de intercalación ni extensiones de un fabricante.

| ID | Nivel | Pregunta | A | B | C | D | Correcta | Explicación |
|---|---|---|---|---|---|---|---|---|
| T08-001 | B | En una tabla, ¿qué es un registro? | Un índice | Una columna | Una fila | Una base completa | C | Representa una ocurrencia de la entidad. |
| T08-002 | B | ¿Qué representa un campo o columna? | Un atributo con valores de un dominio/tipo | Toda la base | Una unión | Una copia física | A | Define una característica de los registros. |
| T08-003 | B | ¿Qué exige una clave primaria? | Valores duplicados | Identificación única y sin NULL | Ser siempre una sola columna | Dos claves primarias por tabla | B | Puede ser compuesta por varias columnas. |
| T08-004 | M | ¿Qué función cumple una clave foránea? | Ordenar por fecha | Cifrar registros | Aumentar RAM | Relacionar datos y controlar referencias | D | Referencia una clave válida según restricciones del esquema. |
| T08-005 | M | ¿Qué describe una relación uno a muchos? | Todos tienen un solo hijo | Ninguna clave | Un departamento puede tener varios empleados | Todas las tablas son iguales | C | Cada empleado puede asociarse a un departamento en ese modelo. |
| T08-006 | M | ¿Cómo representar una relación muchos a muchos? | Tabla intermedia con referencias a ambas entidades | Una cadena gigante | Duplicar toda la base | Eliminar claves | A | La tabla de enlace representa las asociaciones. |
| T08-007 | P | Insertar un hijo con referencia inexistente y FK activa produce… | Una unión automática | Rechazo por integridad referencial | Cifrado | Copia del padre automática | B | La referencia debe cumplir la restricción. |
| T08-008 | M | ¿Qué busca la normalización básica? | Duplicar datos siempre | Eliminar todas las tablas | Ordenar físicamente el disco | Reducir redundancia y anomalías | D | Organiza atributos y dependencias. |
| T08-009 | M | ¿Qué evita la primera forma normal en el modelo básico? | Filas | Claves | Grupos repetidos o listas de valores en una celda | Tipos de datos | C | Se trabaja con valores atómicos respecto del dominio elegido. |
| T08-010 | B | ¿Qué instrucción consulta datos? | SELECT | INSERT | UPDATE | DELETE | A | SELECT recupera resultados sin modificar las filas por sí mismo. |
| T08-011 | P | ¿Qué inserta una fila en `personas(nombre)`? | `ADD personas 'Ana'` | `INSERT INTO personas(nombre) VALUES ('Ana');` | `UPDATE personas('Ana');` | `SELECT INSERT 'Ana';` | B | Se indican tabla, columnas y valores. |
| T08-012 | P | ¿Qué efecto tiene `UPDATE personas SET activo=0;` sin WHERE? | Solo primera fila | Solo filas NULL | No cambia nada siempre | Actualiza todas las filas de la tabla | D | Omitir el filtro puede producir modificaciones masivas. |
| T08-013 | P | ¿Qué hace `DELETE FROM personas WHERE id=5;`? | Borra siempre la tabla | Crea una clave | Elimina las filas que cumplan el filtro | Borra la columna id | C | DELETE elimina datos, no la definición de tabla. |
| T08-014 | P | ¿Cómo seleccionar filas cuyo `correo` es NULL? | `WHERE correo IS NULL` | `WHERE correo = NULL` | `WHERE correo == NULL` | `WHERE correo = 'NULL'` | A | NULL requiere el predicado correspondiente, no igualdad ordinaria. |
| T08-015 | P | ¿Qué patrón LIKE selecciona nombres que empiezan por la letra literal `a`? | `'%a'` | `'a%'` | `'%a%'` | `'_'` | B | `%` representa cualquier secuencia tras el prefijo; mayúsculas dependen de intercalación. |
| T08-016 | P | ¿Qué ordena salario de mayor a menor? | `GROUP BY salario` | `WHERE salario DESC` | `ORDER BY salario ASC` | `ORDER BY salario DESC` | D | DESC establece orden descendente. |
| T08-017 | P | Hay 5 filas y 2 tienen `correo` NULL. ¿Valores de COUNT(*) y COUNT(correo)? | 3 y 5 | 5 y 5 | 5 y 3 | 3 y 3 | C | COUNT(columna) excluye NULL; COUNT(*) cuenta filas. |
| T08-018 | M | ¿Qué diferencia WHERE y HAVING? | WHERE filtra filas; HAVING filtra grupos | Ambos solo ordenan | HAVING crea índices | WHERE solo recibe sumas | A | El filtrado de grupos sigue a la agregación. |
| T08-019 | M | ¿Qué conserva LEFT JOIN aunque no haya coincidencia? | Todas las derechas siempre | Todas las filas izquierdas | Solo coincidencias | Ninguna fila | B | Las columnas derechas sin pareja quedan a NULL. |
| T08-020 | M | ¿Qué modelo es habitual en una base documental NoSQL? | Solo tablas con SQL obligatorio | Solo archivos de audio | Exclusivamente claves primarias numéricas | Documentos con estructura flexible | D | NoSQL engloba varios modelos; no significa ausencia de estructura. |

### Tema 09. Automatización, scripting y desarrollo web básico

Origen: GENERADA. Alcance: L01, tema 9. Variables/tipos/control/funciones/errores, Python/PowerShell/Bash, HTML/CSS/JS, cliente-servidor, HTTP/API. Apoyo: F01, F07, F12–F14.

| ID | Nivel | Pregunta | A | B | C | D | Correcta | Explicación |
|---|---|---|---|---|---|---|---|---|
| T09-001 | B | ¿Qué aporta automatizar una tarea repetitiva? | Elimina toda revisión | Reemplaza permisos | Impide errores siempre | Repetibilidad y menor trabajo manual | D | Los scripts también necesitan validación y control de errores. |
| T09-002 | P | Python: `cantidad = 3; cantidad += 2`. ¿Valor final? | 5 | 3 | 2 | 32 | A | Se suma 2 al valor previo. |
| T09-003 | P | Python: `type('12')` corresponde a… | int | float | str | bool | C | Las comillas crean una cadena. |
| T09-004 | B | ¿Qué estructura selecciona una rama según condición? | import | if/else | comentario | return únicamente | B | Permite ejecución condicional. |
| T09-005 | P | Python: ¿qué valores recorre `range(3)`? | 1,2,3 | 0,1,2,3 | Solo 3 | 0,1,2 | D | El extremo superior se excluye. |
| T09-006 | M | ¿Qué puede causar un while infinito? | No cambiar una condición que sigue siendo verdadera | Definir una función | Usar UTF-8 | Declarar lista vacía | A | La condición debe poder dejar de cumplirse. |
| T09-007 | B | ¿Para qué sirve una función? | Solo guardar contraseñas | Solo imprimir | Encapsular una operación con parámetros y posible resultado | Sustituir el sistema operativo | C | Facilita reutilización de una operación definida. |
| T09-008 | P | Python: convertir `int('abc')` requiere controlar normalmente… | NameError siempre | ValueError | Ningún error posible | Un reinicio | B | No representa un entero válido. |
| T09-009 | M | ¿Qué debe hacer un script que falla al copiar un archivo crítico? | Marcar éxito siempre | Borrar el original | Ignorar y ocultar | Registrar fallo y evitar afirmar que la copia existe | D | El error debe ser observable sin destruir datos. |
| T09-010 | B | ¿Cómo se referencia una variable en PowerShell? | `$nombre` | `%nombre` únicamente | `@variable()` siempre | `#nombre` | A | El prefijo habitual es `$`. |
| T09-011 | B | ¿Qué devuelve normalmente el pipeline de PowerShell? | Solo imágenes | Solo bytes comprimidos | Objetos estructurados | Solo números | C | No equivale al flujo textual clásico de Bash. |
| T09-012 | P | Bash: ¿qué asignación es correcta? | `$nombre = Ana` | `nombre="Ana"` | `set nombre := Ana` | `nombre : Ana` | B | La asignación no lleva espacios alrededor de `=`. |
| T09-013 | M | ¿Por qué entrecomillar una ruta variable en Bash? | Para convertirla en JSON | Para eliminar permisos | Para borrar espacios | Para conservar espacios y evitar expansión no deseada | D | Reduce interpretaciones accidentales del contenido. |
| T09-014 | B | ¿Para qué sirve HTML? | Estructurar contenido web | Cifrar discos | Asignar IP | Compilar Python | A | Describe elementos y estructura del documento. |
| T09-015 | B | ¿Para qué sirve CSS? | Consultar SQL | Crear cuentas | Definir presentación y estilos | Emitir certificados | C | Separa apariencia de estructura. |
| T09-016 | B | ¿Qué permite JavaScript en una página? | Solo cambiar cables | Comportamiento e interacción | Configurar BIOS directamente | Sustituir toda validación del servidor | B | Puede responder a eventos y actualizar la interfaz. |
| T09-017 | M | ¿Qué ocurre en una arquitectura cliente-servidor? | Ambos deben ser el mismo proceso | Nunca usan red | El cliente solo almacena backups | El cliente solicita servicios y el servidor responde | D | Describe responsabilidades de comunicación. |
| T09-018 | B | ¿Qué es una API? | Interfaz definida para interactuar con funcionalidades/datos | Un tipo de cable | Una clave privada | Una pantalla física | A | No implica necesariamente interfaz gráfica. |
| T09-019 | P | ¿Qué código HTTP indica normalmente recurso no encontrado? | 200 | 201 | 404 | 500 | C | 500 indica fallo interno del servidor. |
| T09-020 | M | ¿Dónde debe validarse un dato recibido de un cliente web? | Solo CSS | También en el servidor, aunque haya validación cliente | Solo en el navegador | Nunca si usa HTTPS | B | El cliente puede alterarse; TLS no valida la lógica del dato. |

### Tema 10. Formatos de datos e intercambio de información

Origen: GENERADA. Alcance: L01, tema 10. XML/JSON/CSV: estructura, validación, codificación, configuración, API, exportaciones/importaciones. Apoyo: F14, F15 y [tipos MIME MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types).

| ID | Nivel | Pregunta | A | B | C | D | Correcta | Explicación |
|---|---|---|---|---|---|---|---|---|
| T10-001 | B | ¿Qué caracteriza XML? | Solo datos binarios | Solo arrays numéricos | Información estructurada mediante elementos y atributos | Un único esquema universal | C | Permite vocabularios definidos para cada uso. |
| T10-002 | P | ¿Qué fragmento XML está bien formado? | `<dato>7</dato>` | `<dato>7</valor>` | `<dato>7` | `<dato></DATO>` | A | Apertura y cierre deben coincidir, incluida capitalización. |
| T10-003 | M | ¿Qué exige un documento XML bien formado? | Elementos cruzados | Un elemento raíz y anidamiento correcto | Comas tras etiquetas | Todas las etiquetas vacías | B | Los elementos no deben cerrarse en orden cruzado. |
| T10-004 | M | ¿Qué distingue XML válido de solo bien formado? | El válido es siempre más pequeño | Ambos implican XSD automáticamente | El válido no tiene raíz | Además satisface el esquema o DTD aplicable | D | La sintaxis correcta no garantiza conformidad con un esquema. |
| T10-005 | P | En XML, ¿qué representa `id` en `<equipo id="7"/>`? | Elemento hijo | Comentario | Atributo | Tipo de codificación | C | Los atributos añaden valores a un elemento. |
| T10-006 | M | ¿Para qué sirve un espacio de nombres XML? | Distinguir vocabularios con nombres que podrían coincidir | Aumentar RAM | Comprimir obligatoriamente | Cifrar etiquetas | A | Evita confundir elementos homónimos. |
| T10-007 | P | ¿Cuál es JSON válido? | `{nombre:'Ana'}` | `{"nombre":"Ana"}` | `{'nombre':'Ana'}` | `{"nombre":"Ana",}` | B | JSON estándar usa comillas dobles y no admite coma final. |
| T10-008 | B | ¿Qué estructura JSON representa una lista ordenada? | Objeto | Booleano | Cadena | Array | D | Los arrays conservan una secuencia de valores. |
| T10-009 | M | ¿Cuál NO es un tipo de valor JSON estándar? | null | número | función | booleano | C | Las funciones de JavaScript no forman parte de JSON. |
| T10-010 | P | ¿Qué literal booleano admite JSON? | `true` | `True` | `TRUE` | `verdadero` | A | Los literales estándar se escriben en minúsculas. |
| T10-011 | B | ¿Qué hace `JSON.parse(texto)`? | Genera CSV | Convierte texto JSON en un valor JavaScript | Cifra el texto | Produce HTML | B | El texto debe tener sintaxis JSON válida. |
| T10-012 | B | ¿Qué hace `JSON.stringify(valor)`? | Descarga XML | Crea una clave | Valida permisos | Serializa un valor compatible a texto JSON | D | Hay valores no representables y casos como referencias circulares. |
| T10-013 | B | ¿Qué representa normalmente CSV? | Árbol de etiquetas | Programa compilado | Registros tabulares con campos delimitados | Disco cifrado | C | El separador y la codificación deben acordarse. |
| T10-014 | P | En CSV separado por comas, un campo contiene una coma. ¿Qué hacer? | Entrecomillarlo conforme al dialecto | Eliminar siempre la coma | Crear otra fila | Tratarla siempre como nueva columna | A | Las comillas permiten incluir delimitadores dentro del campo. |
| T10-015 | M | ¿Todo CSV usa obligatoriamente coma y UTF-8? | Sí, siempre | No; existen dialectos y codificaciones distintos | Solo en Linux | Solo si tiene cabecera | B | Se debe conocer el formato antes de importar. |
| T10-016 | M | ¿Qué aporta UTF-8? | Cifrado | Validación SQL | Compresión de vídeo | Codificación de caracteres Unicode de longitud variable | D | No equivale a un algoritmo de cifrado. |
| T10-017 | P | «España» aparece con caracteres extraños tras importar. ¿Qué revisar? | Procesador | VLAN | Codificación usada al escribir y leer | RAID | C | Interpretar bytes con otra codificación puede producir mojibake. |
| T10-018 | M | ¿Un JSON sintácticamente válido asegura un dato aceptable? | No; hay que validar campos, tipos y reglas | Sí, incluso permisos | Sí, cualquier fecha | Sí, todo contenido | A | Sintaxis y validez de negocio son controles distintos. |
| T10-019 | P | Exportar identificadores `0012` a una hoja requiere… | Convertirlos siempre a 12 | Preservarlos como texto cuando ceros sean significativos | Borrar ceros | Convertirlos a fecha | B | La inferencia automática de tipo puede perder información. |
| T10-020 | P | Antes de una importación masiva, ¿qué es correcto? | Sobrescribir sin copia | Ignorar errores | Desactivar validación | Comprobar formato, hacer prueba y prever recuperación | D | Se evita introducir datos corruptos o perder los anteriores. |

### Tema 11. Fundamentos del desarrollo de software

Origen: GENERADA. Alcance: L01, tema 11. Variables, tipos, control, funciones, POO, Java/PHP, frameworks web y aplicaciones móviles. Apoyo relacionado: F12. No se requieren patrones avanzados ni detalles internos de un framework.

| ID | Nivel | Pregunta | A | B | C | D | Correcta | Explicación |
|---|---|---|---|---|---|---|---|---|
| T11-001 | B | ¿Qué representa una variable? | Un valor asociado a un nombre durante ejecución | Un periférico | Un router | Una copia externa | A | Su uso y mutabilidad dependen del lenguaje. |
| T11-002 | B | ¿Qué tipo representa verdadero/falso? | Cadena | Decimal | Booleano | Imagen | C | Se utiliza para condiciones lógicas. |
| T11-003 | M | ¿Qué diferencia entero y cadena numérica? | Ninguna siempre | Tipo y operaciones disponibles | La cadena es siempre inválida | El entero no se almacena | B | «12» y 12 pueden requerir conversión explícita. |
| T11-004 | B | ¿Qué hace una estructura condicional? | Repite siempre infinitamente | Solo declara tipos | Compila toda la aplicación | Elige ejecución según una condición | D | Permite ramas alternativas. |
| T11-005 | B | ¿Qué hace un bucle? | Repite un bloque mientras se cumple su regla | Crea un disco | Cifra la RAM | Borra siempre una variable | A | Puede recorrer una colección o evaluar una condición. |
| T11-006 | M | ¿Qué diferencia parámetro y argumento? | Son siempre archivos | El argumento solo es texto | Parámetro en definición; argumento en llamada | El parámetro es una clase | C | Son posiciones complementarias de una función. |
| T11-007 | B | ¿Qué hace normalmente `return`? | Reinicia sistema | Devuelve resultado y termina esa ejecución de función | Siempre imprime | Crea un objeto automáticamente | B | Devolver y mostrar en pantalla no son lo mismo. |
| T11-008 | M | ¿Qué es una variable local? | Siempre una constante global | Un dato en DNS | Una contraseña | Variable de ámbito limitado a su contexto | D | No está necesariamente disponible fuera de la función/bloque. |
| T11-009 | B | En POO, ¿qué es una clase? | Definición de atributos y comportamiento de sus instancias | Un registro MX | Un archivo de sonido | Un hilo físico | A | Define el tipo de objetos que se crean. |
| T11-010 | B | ¿Qué es un objeto? | Solo un dato primitivo | Un comentario | Una instancia con estado/comportamiento | Una VLAN | C | Se crea conforme a una clase u otro mecanismo del lenguaje. |
| T11-011 | B | ¿Qué es un método? | Un disco | Función asociada a una clase/objeto | Una IP | Una copia | B | Representa comportamiento del objeto o clase. |
| T11-012 | M | ¿Qué es encapsulación? | Duplicar código | Publicar todo estado | Mezclar todas las funciones | Controlar acceso al estado interno mediante una interfaz | D | Protege invariantes y reduce dependencias indebidas. |
| T11-013 | M | ¿Qué permite la herencia? | Derivar una clase de otra y reutilizar/especializar comportamiento | Convertir SQL a WiFi | Evitar objetos | Cifrar archivos | A | No implica que siempre sea la mejor forma de reutilización. |
| T11-014 | M | ¿Qué ejemplifica polimorfismo? | Todas las clases idénticas | Solo una variable global | Una operación común con comportamiento según el objeto | Ningún método | C | La misma llamada puede resolverse de manera diferente. |
| T11-015 | M | ¿Qué papel tiene la JVM en Java? | Es un editor HTML | Ejecutar bytecode en una plataforma compatible | Es solo un compresor | Cambia hardware | B | La portabilidad depende también de dependencias y entorno. |
| T11-016 | B | ¿Qué uso es habitual de PHP? | Firmware de discos | Sustituir DNS | Renderizar siempre en el navegador | Desarrollo web ejecutado del lado servidor | D | Genera respuestas que recibe el cliente. |
| T11-017 | M | ¿Qué aporta un framework web? | Estructura y utilidades comunes para desarrollar aplicaciones | Garantía de seguridad absoluta | Evita conocer HTTP | Elimina las pruebas | A | Reduce tareas repetidas sin eliminar responsabilidad del desarrollador. |
| T11-018 | M | ¿Qué caracteriza una app móvil nativa? | Solo funciona por correo | No puede usar cámara | Se desarrolla para APIs/plataforma específicas | Es siempre una página sin instalar | C | Puede aprovechar capacidades del sistema móvil. |
| T11-019 | M | ¿Qué busca el desarrollo móvil multiplataforma? | Eliminar toda adaptación | Compartir parte del código entre plataformas | Ejecutar sin sistema operativo | Usar exclusivamente PHP | B | Puede requerir ajustes específicos de cada plataforma. |
| T11-020 | P | Una app necesita acceso a micrófono. ¿Qué práctica es correcta? | Pedir todos los permisos | No informar al usuario | Guardar grabaciones sin finalidad | Solicitar solo permiso necesario y gestionar denegación | D | El permiso puede no concederse o revocarse. |

### Tema 12. Entornos de desarrollo y herramientas de trabajo

Origen: GENERADA. Alcance: L01, tema 12. IDE, compilación, depuración, control de versiones y pruebas básicas. Apoyo: F12, F13, F16.

| ID | Nivel | Pregunta | A | B | C | D | Correcta | Explicación |
|---|---|---|---|---|---|---|---|---|
| T12-001 | B | ¿Qué es un IDE? | Un disco | Entorno integrado de desarrollo | Un protocolo | Un algoritmo de cifrado | B | Reúne edición y herramientas de desarrollo. |
| T12-002 | B | ¿Qué hace un compilador? | Ejecuta solo correos | Gestiona permisos físicos | Traduce código a otra representación ejecutable/intermedia | Sustituye tests | C | El resultado depende del lenguaje y destino. |
| T12-003 | M | ¿Qué distingue un error de compilación de uno lógico? | El primero impide traducir; el segundo puede dar resultado incorrecto al ejecutar | Son siempre idénticos | El lógico solo es hardware | El de compilación no se detecta | A | Compilar correctamente no prueba corrección funcional. |
| T12-004 | B | ¿Para qué sirve un depurador? | Cifrar repositorios | Borrar errores automáticamente | Cambiar DNS | Inspeccionar la ejecución y el estado del programa | D | Ayuda a localizar la causa de fallos. |
| T12-005 | B | ¿Qué es un breakpoint? | Una copia completa | Un punto donde detener la ejecución al depurar | Un disco roto | Un usuario bloqueado | B | Permite inspeccionar variables y flujo. |
| T12-006 | M | ¿Qué hace «paso a paso» en depuración? | Avanzar controladamente por instrucciones | Reinstalar SO | Crear backups | Cambiar todas las variables | A | Permite observar la evolución del estado. |
| T12-007 | M | ¿Qué muestra una pila de llamadas? | Capacidad del disco | Solo usuarios | Secuencia de funciones activas que llevó al punto actual | Solo commits | C | Ayuda a localizar el origen de una excepción. |
| T12-008 | B | ¿Qué aporta control de versiones? | Inmunidad al malware | Sustituye autorización | Evita conflictos siempre | Historial y coordinación de cambios | D | Permite comparar y recuperar revisiones. |
| T12-009 | B | En Git, ¿qué es un commit? | Una descarga temporal | Un registro de cambios confirmados en el historial | Un antivirus | Un backup de toda la empresa | B | Incluye una instantánea y metadatos asociados. |
| T12-010 | B | ¿Qué prepara cambios para el próximo commit? | `git add` | `git log` | `git status` | `git fetch` | A | Añade contenido al área de preparación. |
| T12-011 | P | ¿Qué permite consultar archivos modificados y preparados? | `git push` | `git clone` | `git status` | `git init` | C | No envía cambios al remoto. |
| T12-012 | M | ¿Qué diferencia commit y push? | Son lo mismo | Push edita archivos | Commit descarga remoto | Commit registra localmente; push transmite referencias al remoto | D | Puede haber commits locales aún no compartidos. |
| T12-013 | B | ¿Para qué sirve una rama? | Duplicar físicamente toda la empresa | Trabajar en una línea de desarrollo diferenciada | Borrar historial | Cambiar contraseña | B | Git maneja referencias a líneas de commits. |
| T12-014 | P | Dos cambios incompatibles afectan la misma zona. ¿Qué puede ocurrir al fusionar? | Conflicto que necesita resolución | Cifrado automático | Borrado obligado del repositorio | Éxito garantizado | A | Debe elegirse o integrar el contenido correcto. |
| T12-015 | M | ¿Para qué sirve `.gitignore`? | Borrar logs del servidor | Cifrar secretos | Evitar añadir ciertos archivos no rastreados | Quitar automáticamente secretos ya publicados | C | No elimina del historial archivos ya versionados. |
| T12-016 | P | Se publica por error una clave secreta en Git. ¿Prioridad? | Solo ocultar archivo | Ignorar si es privado | Cambiar título del commit | Revocar/rotar la clave y gestionar la exposición | D | Borrar la línea no hace desaparecer copias existentes. |
| T12-017 | B | ¿Qué evalúa una prueba unitaria? | Solo una pantalla física | Una unidad pequeña de comportamiento | Toda la red siempre | Solo documentación | B | Busca comprobar lógica aislada. |
| T12-018 | B | ¿Qué evalúa una prueba de integración? | Interacción entre componentes | Solo sintaxis | Color del IDE | Etiqueta de un disco | A | Verifica que las partes colaboran correctamente. |
| T12-019 | M | ¿Qué es una prueba de regresión? | Volver a un disco anterior | Solo medir RAM | Comprobar que cambios no rompen comportamiento existente | Borrar tests antiguos | C | Puede ejecutarse tras una corrección o mejora. |
| T12-020 | P | Una función recibe entrada vacía o inválida. ¿Qué debe probarse? | Solo caso ideal | Ningún caso | Solo el IDE | Casos límite y manejo de error además del normal | D | La corrección debe cubrir condiciones previsibles. |

### Tema 13. Virtualización, almacenamiento y copias de seguridad

Origen: GENERADA. Alcance: L01, tema 13. VM/hipervisores/snapshots, local/red, NAS/SAN, discos/particiones/RAID, políticas/restauración/3-2-1. Apoyo relacionado: F02 y [material de copias INCIBE](https://www.incibe.es/sites/default/files/docs/osi-trivial-ciberseguridad.pdf). RAID con discos de igual capacidad y sin contar metadatos ni reservas.

| ID | Nivel | Pregunta | A | B | C | D | Correcta | Explicación |
|---|---|---|---|---|---|---|---|---|
| T13-001 | B | ¿Qué es una máquina virtual? | Un monitor remoto | Un disco sin sistema | Un correo | Entorno que presenta hardware virtual a un sistema invitado | D | Varios invitados pueden compartir un host. |
| T13-002 | B | ¿Qué hace un hipervisor? | Gestionar ejecución y recursos de máquinas virtuales | Comprimir exclusivamente vídeo | Resolver MX | Solo copiar archivos | A | Media entre recursos físicos y entornos virtuales. |
| T13-003 | M | ¿Qué caracteriza al hipervisor tipo 1? | Requiere navegador | Es una aplicación ofimática | Se ejecuta directamente sobre el hardware | Solo sirve para móviles | C | También se denomina bare-metal. |
| T13-004 | M | ¿Qué caracteriza al hipervisor tipo 2? | No permite invitados | Se ejecuta sobre un sistema operativo anfitrión | Es siempre firmware | Solo administra SAN | B | Utiliza un SO host como base. |
| T13-005 | M | ¿Un snapshot local de VM sustituye un backup separado? | Sí, siempre | Solo con Linux | Sí, aunque falle el almacenamiento | No: puede depender del mismo host/almacenamiento | D | Una avería común puede destruir VM y snapshots. |
| T13-006 | P | Mantener snapshots indefinidamente puede provocar… | Crecimiento de almacenamiento y degradación | Protección ilimitada gratuita | Más RAM física | Eliminación de ransomware | A | Deben gestionarse según la plataforma y la política. |
| T13-007 | B | ¿Qué ofrece un NAS normalmente? | Solo vídeo | Solo memoria virtual | Acceso a archivos a través de la red | Exclusivamente bloques Fibre Channel | C | Suele usar protocolos como SMB o NFS. |
| T13-008 | B | ¿Qué ofrece una SAN normalmente? | Correo POP3 | Acceso a almacenamiento por bloques | Solo archivos HTML | Usuarios de AD exclusivamente | B | Puede usar Fibre Channel o iSCSI, entre otros. |
| T13-009 | M | ¿Qué afirmación sobre SAN es correcta? | Nunca usa IP | Toda SAN es Ethernet obligatoriamente | Es siempre igual a NAS | Puede utilizar iSCSI sobre redes IP | D | No limitar SAN exclusivamente a fibra óptica. |
| T13-010 | B | ¿Qué es una partición de disco? | División lógica del espacio del dispositivo | Otro disco físico obligatorio | Un backup externo | Una VLAN | A | Varias particiones del mismo disco comparten el fallo físico. |
| T13-011 | M | ¿Qué distingue particionar de formatear? | Ambos siempre crean hardware | Ninguno afecta datos | Dividir espacio frente a preparar un sistema de archivos | Son sinónimos exactos | C | Ambas operaciones pueden alterar o destruir información. |
| T13-012 | M | ¿Qué caracteriza RAID 0? | Espejo | Distribución sin tolerancia a fallo de disco | Paridad doble | Copia remota | B | No aporta redundancia. |
| T13-013 | P | Dos discos de 2 TB en RAID 1: ¿capacidad útil aproximada? | 4 TB | 1 TB | 8 TB | 2 TB | D | El espejo conserva una copia en cada disco. |
| T13-014 | P | Tres discos de 2 TB en RAID 5: ¿capacidad útil aproximada? | 4 TB | 6 TB | 2 TB | 8 TB | A | (N−1)×capacidad = 4 TB; tolera un disco fallado. |
| T13-015 | M | ¿Por qué RAID no sustituye al backup? | No guarda ningún dato | Solo usa USB | No protege por sí solo frente a borrado, corrupción o ataque | Todos los RAID pierden al primer fallo | C | Redundancia y recuperación histórica son objetivos distintos. |
| T13-016 | B | ¿Qué significa la regla 3-2-1 en su formulación habitual? | Tres carpetas del mismo disco | Tres copias totales, dos tipos de soporte, una fuera de ubicación | Tres contraseñas | Una copia cada tres años | B | Incluye el original y dos copias; añadir aislamiento mejora protección. |
| T13-017 | M | ¿Qué guarda una copia incremental? | Todos los datos siempre | Solo archivos borrados | Solo carpetas vacías | Cambios desde la copia anterior de la cadena | D | Para restaurar puede necesitar base y todos los incrementales. |
| T13-018 | M | ¿Qué guarda una copia diferencial? | Cambios desde la última copia completa | Solo cambios desde cualquier incremental | Un snapshot siempre | Solo metadatos | A | Se restaura normalmente con completa y diferencial elegido. |
| T13-019 | P | El sistema informa «backup correcto». ¿Qué prueba falta para confiar en recuperación? | Cambiar nombre | Imprimir informe | Restauración de prueba y comprobación de datos | Borrar original | C | Finalizar la copia no demuestra que sea recuperable. |
| T13-020 | M | ¿Qué diferencia RPO y RTO? | Son códecs | Pérdida temporal de datos tolerable frente a tiempo objetivo de recuperación | Solo capacidad de disco | Ambos cuentan usuarios | B | Ayudan a definir frecuencia de copia y procedimiento de recuperación. |

### Tema 14. Servicios cloud y herramientas colaborativas

Origen: GENERADA. Alcance: L01, tema 14. Cloud/SaaS/IaaS/PaaS, almacenamiento/sincronización, identidad/correo, colaboración y compartición segura. Apoyo: F17, F19, F20. No se presupone proveedor concreto.

| ID | Nivel | Pregunta | A | B | C | D | Correcta | Explicación |
|---|---|---|---|---|---|---|---|---|
| T14-001 | B | ¿Qué caracteriza cloud computing? | Solo un USB remoto | Recursos/servicios accesibles bajo demanda mediante red | Ausencia de servidores | Una sola aplicación local | B | El proveedor gestiona recursos que se consumen como servicio. |
| T14-002 | B | ¿Cuál es un ejemplo de SaaS? | Comprar un switch | Instalar un disco | Usar correo/ofimática como aplicación del proveedor | Montar CPU | C | Se consume una aplicación, no se administra su infraestructura completa. |
| T14-003 | B | ¿Qué ofrece IaaS? | Infraestructura virtual como máquinas, red y almacenamiento | Solo documentos | Solo una pantalla | Exclusivamente código fuente | A | El cliente administra normalmente SO y aplicaciones de sus VM. |
| T14-004 | B | ¿Qué ofrece PaaS? | Solo correo final | Discos físicos entregados | Siempre acceso al hipervisor | Plataforma gestionada para desplegar aplicaciones | D | Reduce administración de infraestructura subyacente. |
| T14-005 | P | Se necesita controlar el SO de una VM en cloud. ¿Modelo más adecuado? | SaaS | IaaS | Solo correo | Ofimática web | B | IaaS proporciona control del sistema invitado. |
| T14-006 | P | Solo se necesita utilizar una herramienta colaborativa completa. ¿Modelo habitual? | SaaS | RAID | BIOS | SAN | A | Se usa la aplicación provista. |
| T14-007 | M | ¿Quién gestiona los permisos de los documentos corporativos en SaaS? | Nadie | Siempre el ISP | La organización según responsabilidades del servicio | Solo el fabricante del teclado | C | Externalizar infraestructura no elimina gestión de accesos. |
| T14-008 | M | ¿Sincronización equivale siempre a copia de seguridad? | Sí | Solo con WiFi | Sí, aunque propague borrados | No; puede propagar borrados o corrupción | D | La recuperación depende de historial, retención y copias independientes. |
| T14-009 | P | Se borra un archivo de una carpeta sincronizada. ¿Qué puede ocurrir? | Nunca afecta otros equipos | El borrado se propaga a otros dispositivos | Crea backup infinito | Se cifra siempre | B | Conviene conocer papelera, versiones y retención. |
| T14-010 | B | ¿Qué aporta identidad corporativa centralizada? | Gestión coherente de cuentas y accesos | Prohibición de MFA | Ausencia de auditoría | Todas las cuentas públicas | A | Facilita administrar el ciclo de vida del usuario. |
| T14-011 | B | ¿Qué significa SSO? | Un RAID | Un códec | Inicio de sesión único para varios servicios | Una copia externa | C | No implica ausencia de controles adicionales como MFA. |
| T14-012 | P | Una persona deja la organización. ¿Qué hacer con sus accesos? | Mantenerlos indefinidamente | Compartir su cuenta | Borrar todo sin política | Revocar accesos y gestionar datos según procedimiento | D | Se separan bajas de acceso y obligaciones de conservación. |
| T14-013 | M | ¿Ventaja de coeditar un documento corporativo? | Impedir historial | Trabajar sobre una versión compartida con control adecuado | Eliminar permisos | Hacer público todo | B | Reduce copias divergentes si la plataforma lo admite. |
| T14-014 | P | Un colaborador solo debe consultar un documento. ¿Permiso adecuado? | Lectura | Administración | Propietario | Edición global | A | Se otorga la capacidad mínima necesaria. |
| T14-015 | P | Se comparte información sensible. ¿Qué opción es preferible? | Enlace público permanente | Cuenta personal cualquiera | Acceso a destinatarios concretos con restricciones necesarias | Publicar en redes | C | Se controla destinatario y alcance de la compartición. |
| T14-016 | M | ¿Qué riesgo tiene «cualquiera con el enlace»? | Impide reenvío | Obliga siempre a MFA | Solo funciona localmente | Puede acceder alguien no previsto si recibe el enlace | D | Conocer el enlace puede ser suficiente según la configuración. |
| T14-017 | P | Un correo pide reenviar documentación corporativa a una cuenta personal. ¿Qué hacer? | Obedecer siempre | Verificar autorización y política de compartición | Enviar copia a todos | Desactivar registros | B | Puede exponer información fuera del control corporativo. |
| T14-018 | M | ¿Qué aporta historial de versiones? | Consultar o recuperar revisiones dentro de la retención | Copia infinita garantizada | Mayor ancho de banda | Eliminar identidad | A | Hay límites y condiciones del servicio. |
| T14-019 | P | Dos equipos editan sin conexión el mismo archivo. ¿Qué puede ocurrir al sincronizar? | Nunca hay conflicto | Fusión perfecta siempre | Conflicto o copia divergente | Creación de una VLAN | C | La herramienta puede requerir resolución manual. |
| T14-020 | P | ¿Qué comprobar antes de adoptar una herramienta cloud para datos corporativos? | Solo el color | Solo publicidad | Que sea gratuita | Autorización, seguridad, tratamiento de datos y recuperación | D | El uso debe ajustarse a requisitos y política corporativa. |

### Tema 15. Sistemas audiovisuales, multimedia y producción digital

Origen: GENERADA. Alcance: L01, tema 15. Audio/vídeo, formatos/códecs/contenedores, compresión, resolución/fps/bitrate, streaming/transcodificación, captura/ingesta/edición/emisión/archivo/distribución, MAM/DAM y metadatos. Apoyo relacionado: F18. Cálculos con unidades decimales y sin sobrecarga, salvo indicación.

| ID | Nivel | Pregunta | A | B | C | D | Correcta | Explicación |
|---|---|---|---|---|---|---|---|---|
| T15-001 | B | ¿Qué es la frecuencia de muestreo del audio? | Muestras tomadas por segundo | Tamaño del monitor | Número de archivos | Resolución de vídeo | A | Se expresa habitualmente en Hz o kHz. |
| T15-002 | B | ¿Qué indica la profundidad de bits en audio PCM? | Duración del archivo | Velocidad de red | Precisión de cuantificación de cada muestra | Número de carpetas | C | Más bits permiten más niveles de representación. |
| T15-003 | P | Audio PCM 48 kHz, 16 bits, estéreo: ¿bitrate bruto? | 768 kbit/s | 1,536 Mbit/s | 48 Mbit/s | 96 bit/s | B | 48000×16×2 = 1536000 bit/s. |
| T15-004 | B | ¿Qué diferencia códec y contenedor? | Son sinónimos exactos | El contenedor comprime siempre | El códec es la extensión | Códec codifica/decodifica; contenedor organiza pistas y metadatos | D | Un contenedor puede admitir distintos códecs. |
| T15-005 | B | ¿Cuál es un códec de vídeo? | H.264/AVC | MP4 como contenedor | CSV | NTFS | A | MP4 organiza contenido, no define por sí solo la compresión. |
| T15-006 | B | ¿Cuál es un contenedor audiovisual? | H.265 | AAC | MP4 | DNS | C | Puede contener vídeo, audio y otras pistas. |
| T15-007 | M | ¿Qué caracteriza compresión con pérdida? | Recuperación bit a bit obligatoria | Descarta información para reducir tamaño | No reduce tamaño nunca | Solo sirve para documentos | B | El original no se recupera exactamente de la versión comprimida. |
| T15-008 | M | ¿Qué caracteriza compresión sin pérdida? | Siempre ocupa más que el original | Descarta detalle visible | Se aplica solo a vídeo | Permite recuperar exactamente los datos originales | D | El ratio logrado depende del contenido. |
| T15-009 | B | ¿Qué representa 1920×1080? | Dimensiones de imagen en píxeles | Bitrate fijo | Frecuencia de audio | Número de pistas | A | No determina por sí solo calidad ni tasa de datos. |
| T15-010 | B | ¿Qué significa 25 fps? | 25 bits por muestra | 25 MB por segundo | 25 fotogramas por segundo | 25 canales | C | Es una frecuencia temporal de imagen. |
| T15-011 | M | ¿Qué representa el bitrate? | Resolución únicamente | Bits transmitidos o almacenados por segundo | Número de píxeles verticales | Duración fija | B | Puede ser constante o variable. |
| T15-012 | P | Vídeo a 8 Mbit/s durante 60 s: ¿tamaño aproximado sin audio ni sobrecarga? | 480 MB | 8 MB | 60 GB | 60 MB | D | 8×60/8 = 60 MB decimales. |
| T15-013 | M | ¿Qué distingue vídeo progresivo de entrelazado? | Fotogramas completos frente a campos alternos | El progresivo no tiene audio | El entrelazado no tiene resolución | Son siempre iguales | A | Sus cadencias no deben confundirse al convertir. |
| T15-014 | B | ¿Qué es streaming? | Entrega solo después de descargar todo | Un RAID | Distribución para reproducir mientras se reciben datos | Un editor de texto | C | Puede ser en directo o bajo demanda. |
| T15-015 | M | ¿Qué busca un streaming adaptativo? | Impedir todo buffering | Ajustar la representación a condiciones de reproducción/red | Mantener máxima tasa siempre | Eliminar compresión | B | Selecciona entre perfiles disponibles. |
| T15-016 | B | ¿Qué es transcodificación? | Cambiar nombre sin tocar contenido | Copiar idénticos bytes | Cambiar solo carpeta | Convertir el contenido a otra codificación/perfil | D | Suele implicar decodificar y volver a codificar. |
| T15-017 | M | ¿Qué diferencia remultiplexar de transcodificar? | Reorganizar pistas/contenedor sin recodificar frente a recodificar | Son siempre sinónimos | Remultiplexar borra audio siempre | Transcodificar solo renombra | A | Puede cambiarse contenedor sin modificar las pistas codificadas. |
| T15-018 | M | ¿Qué secuencia refleja un flujo audiovisual habitual? | Archivo antes de capturar siempre | Emisión antes de ingesta obligatoria | Captura, ingesta, edición, emisión/distribución y archivo | Solo sincronización | C | Los flujos concretos pueden solapar etapas; ingesta incorpora y organiza material. |
| T15-019 | B | ¿Qué hacen MAM/DAM? | Asignar IP únicamente | Gestionar activos multimedia/digitales y su información | Sustituir cámaras | Solo aumentar volumen | B | Facilitan búsqueda, organización y control de recursos. |
| T15-020 | P | ¿Qué conjunto de metadatos favorece reutilización segura de una pieza? | Solo color de icono | Contraseña del editor | Dirección privada irrelevante | Identificador, título, fechas, formato y derechos de uso | D | Describen y permiten localizar el activo y conocer restricciones. |

### Tema 16. Documentación, inventario y procedimientos

Origen: GENERADA. Alcance: L01, tema 16. Inventario de activos, documentación técnica, procedimientos, conocimiento, cambios, etiquetado y trazabilidad. Ejemplos de buena práctica, no procedimientos internos de RTVE que no se hayan aportado.

| ID | Nivel | Pregunta | A | B | C | D | Correcta | Explicación |
|---|---|---|---|---|---|---|---|---|
| T16-001 | B | ¿Qué es un inventario de activos informáticos? | Registro organizado de equipos y recursos | Solo facturas impresas | Una copia del correo | Un listado de contraseñas | A | Permite conocer y gestionar el parque tecnológico. |
| T16-002 | B | ¿Qué dato identifica inequívocamente un equipo inventariado? | Color | Fondo de pantalla | Identificador de activo y número de serie | Usuario genérico | C | Debe poder relacionarse con el dispositivo concreto. |
| T16-003 | M | ¿Qué combinación es útil en inventario? | Solo precio | Identificador, ubicación, responsable y características | Solo icono | Contraseña de administrador | B | Ayuda a gestionar soporte, mantenimiento y movimientos. |
| T16-004 | P | Un equipo cambia de sala y usuario. ¿Qué hacer? | Mantener registro antiguo | Darlo de baja siempre | Cambiar número de serie | Actualizar asignación/ubicación y registrar movimiento | D | Mantiene trazabilidad sin alterar identidad del activo. |
| T16-005 | B | ¿Qué aporta etiquetar activos? | Relacionar físicamente equipo y registro | Más velocidad de CPU | Cifrar automáticamente | Evitar todo robo | A | La etiqueta facilita identificación en intervenciones. |
| T16-006 | M | ¿Qué debe contener un procedimiento de soporte? | Solo un título | Claves personales | Alcance, requisitos, pasos, verificación y escalado | Datos irrelevantes | C | Debe permitir actuación reproducible y segura. |
| T16-007 | P | Un procedimiento dice «borrar y reinstalar». ¿Qué falta especialmente? | Logo | Respaldo, autorización y advertencia sobre pérdida de datos | Más colores | Nombre de una impresora | B | Una operación destructiva requiere salvaguardas. |
| T16-008 | B | ¿Qué es una base de conocimiento? | Un servidor DNS | Un código malicioso | Solo inventario | Repositorio de soluciones y documentación reutilizable | D | Facilita resolver casos conocidos. |
| T16-009 | M | ¿Qué mejora un artículo de conocimiento? | Síntomas, contexto, solución y comprobación | Contraseña del usuario | Solo «reiniciar» | Capturas con secretos | A | Debe ser útil sin exponer información innecesaria. |
| T16-010 | P | Se descubre que una guía ya no funciona. ¿Qué hacer? | Ignorar | Seguirla siempre | Revisar, validar y actualizar versión/fecha | Borrar todos los documentos | C | La documentación desactualizada puede causar errores. |
| T16-011 | B | ¿Para qué registrar un cambio técnico? | Para ocultar al responsable | Para saber qué cambió, cuándo, quién y por qué | Para sustituir pruebas | Para publicar secretos | B | Permite reconstruir actuaciones. |
| T16-012 | P | Tras un cambio aparece una avería. ¿Qué información ayuda? | Color del logo | Precio del ratón | Cumpleaños | Configuración previa, modificación y hora | D | Permite correlacionar y valorar reversión. |
| T16-013 | M | ¿Qué significa trazabilidad? | Reconstruir historial de decisiones y actuaciones | Copiar sin control | Dar permisos a todos | Eliminar tickets | A | Se apoya en identificadores, fechas y responsables. |
| T16-014 | P | ¿Qué evidencia adjuntar a un ticket técnico? | Contraseña completa | Historial privado irrelevante | Logs/capturas pertinentes con secretos ocultos | Todos los correos del usuario | C | Debe limitarse a lo necesario para diagnóstico. |
| T16-015 | M | ¿Qué conviene documentar de un servicio crítico? | Solo nombre comercial | Dependencias, responsables y recuperación | Solo color de interfaz | Solo marca del monitor | B | Facilita operar y recuperar el servicio. |
| T16-016 | B | ¿Qué utilidad tiene una convención de nombres consistente? | Evitar toda auditoría | Aumentar ancho de banda | Eliminar inventario | Identificar recursos y reducir confusiones | D | Debe ser clara y mantenerse en los registros. |
| T16-017 | P | Dos guías contradictorias circulan por correo. ¿Qué hacer? | Mantener fuente de referencia y versionado accesible | Usar siempre la más antigua | Publicar ambas sin aviso | Borrar historial | A | Debe identificarse la versión aplicable. |
| T16-018 | P | Se retira un disco del servicio. ¿Qué registrar? | Solo su color | Nada | Activo, baja, destino y tratamiento seguro de datos | Clave privada del usuario | C | La baja debe incluir protección de información residual. |
| T16-019 | M | ¿Qué debe facilitar un relevo de soporte? | Empezar sin contexto | Pendientes, estado, evidencias y próximos pasos | Contraseñas compartidas | Solo tickets cerrados | B | Evita pérdida de continuidad entre turnos. |
| T16-020 | P | ¿Qué documentación publicar en una base accesible a todo el personal? | Secretos de producción | Datos clínicos | Claves de VPN | Contenido autorizado y sin información restringida | D | La utilidad no justifica ampliar accesos indebidamente. |

### Tema 17. Protección de datos y uso responsable de sistemas

Origen: GENERADA. Alcance: L01, tema 17. Confidencialidad, tratamiento básico, autorización, uso aceptable, equipos/cuentas/soportes. Apoyo: F19, F20. No se sustituyen instrucciones del delegado de protección de datos ni asesoramiento jurídico.

| ID | Nivel | Pregunta | A | B | C | D | Correcta | Explicación |
|---|---|---|---|---|---|---|---|---|
| T17-001 | B | ¿Qué es un dato personal? | Solo el DNI | Información sobre una persona física identificada o identificable | Solo una contraseña | Cualquier dato meteorológico | B | También pueden serlo identificadores indirectos según el contexto. |
| T17-002 | P | ¿Cuál contiene datos personales? | Manual genérico sin nombres | Tabla de códecs | Listado de empleados con correo nominativo | Catálogo vacío | C | Vincula identidades con información de contacto. |
| T17-003 | B | ¿Qué es tratamiento de datos personales? | Incluye consultar, almacenar, comunicar o borrar | Solo vender datos | Solo imprimir | Solo crear cuentas | A | Abarca distintas operaciones, automatizadas o no. |
| T17-004 | M | ¿Qué significa minimización? | Guardar todo por si acaso | Prohibir todos los datos | Borrar inmediatamente todo | Tratar solo los datos necesarios para la finalidad | D | Reduce información y exposición innecesarias. |
| T17-005 | M | ¿Qué implica limitación de finalidad? | Todo uso posterior es libre | Usar datos para fines determinados y legítimos compatibles | Publicarlos si son internos | Usarlos para cualquier curiosidad | B | La disponibilidad técnica no legitima cualquier uso. |
| T17-006 | M | ¿Cómo se decide la conservación? | Según finalidad y obligaciones aplicables, no indefinidamente | Siempre diez años | Siempre dos días | Solo según capacidad del disco | A | No existe un plazo universal para todos los tratamientos. |
| T17-007 | M | ¿Qué exige confidencialidad? | Compartir con todo compañero | Solo poner un logo | Evitar divulgación y acceso no autorizado | Conservar más copias siempre | C | Afecta al acceso y manejo de información. |
| T17-008 | P | Soporte permite técnicamente abrir documentos de un usuario. ¿Puede hacerlo por curiosidad? | Sí, si es administrador | Sí, si no modifica | Sí, si usa VPN | No; debe existir necesidad y autorización | D | Privilegio técnico no equivale a permiso de uso. |
| T17-009 | P | Hay que enviar un listado con datos personales. ¿Qué comprobar? | Solo tamaño | Destinatario, autorización, necesidad y canal seguro | Fondo de pantalla | Marca de teclado | B | Se evita divulgación indebida y excesiva. |
| T17-010 | P | Se manda información al destinatario equivocado. ¿Qué hacer? | Comunicar inmediatamente por el procedimiento de brechas | Ocultarlo | Esperar a que reclame | Borrar el correo local y asumir solución | A | Eliminar la copia local no retira la recibida. |
| T17-011 | M | ¿Seudonimizar equivale a anonimizar? | Siempre | Solo en CSV | No, puede conservarse posibilidad de vincular a una persona | Sí, cambiando nombres | C | Los datos seudonimizados pueden seguir siendo personales. |
| T17-012 | B | ¿Qué organismo supervisa protección de datos en España con carácter general? | DGT | CNMC como regla general | Banco de España siempre | AEPD | D | Existen autoridades competentes en sus ámbitos; la AEPD es la referencia estatal. |
| T17-013 | P | Para un ticket solo se requiere versión de aplicación. ¿Debe pedirse el DNI? | Siempre | No, salvo necesidad justificada ajena a ese diagnóstico | Si es más cómodo | Si cabe en el formulario | B | Pedir información no necesaria contradice minimización. |
| T17-014 | B | ¿Qué hacer al ausentarse de un puesto con sesión abierta? | Bloquear la sesión | Dejar contraseña al lado | Apagar monitor sin bloquear | Compartir cuenta | A | Impide acceso casual a la sesión activa. |
| T17-015 | M | ¿Qué caracteriza uso aceptable corporativo? | Usar recursos para cualquier fin | Instalar sin autorización | Cumplir políticas y finalidad autorizada | Subir todo a cuenta personal | C | Los recursos siguen normas de seguridad y organización. |
| T17-016 | P | Se necesita software no autorizado. ¿Qué hacer? | Descargarlo de cualquier sitio | Desactivar antivirus | Usar cuenta ajena | Solicitar evaluación por el canal previsto | D | Evita licencias, malware y tratamiento no controlado. |
| T17-017 | P | Un USB desconocido aparece en la oficina. ¿Qué hacer? | Conectarlo para averiguar dueño | Entregarlo por procedimiento seguro sin conectarlo | Copiar todo | Abrirlo en un servidor | B | Puede contener malware o datos de terceros. |
| T17-018 | P | Se reutiliza un soporte con información sensible. ¿Qué hacer? | Aplicar borrado seguro autorizado y verificarlo | Borrar acceso directo | Vaciar solo papelera | Cambiar etiqueta | A | El borrado lógico ordinario puede dejar datos recuperables. |
| T17-019 | M | ¿Por qué evitar cuentas compartidas? | Consumen más vídeo | No admiten TLS | Dificultan atribuir actuaciones y gestionar bajas | No funcionan en Linux | C | Las cuentas nominativas favorecen trazabilidad. |
| T17-020 | P | Para una prueba se necesitan ejemplos de datos. ¿Qué es preferible? | Copiar todo producción | Publicar datos reales | Quitar solo el nombre y asumir anonimato | Datos sintéticos o adecuadamente anonimizados | D | Debe evitarse usar datos personales reales sin justificación. |

### Tema 18. Derechos y obligaciones de los trabajadores en PRL

Origen: GENERADA. Alcance: L01, tema 18. Derechos/deberes, pantallas, extremidad superior, cargas, electricidad, incendios, in itinere/en misión. Apoyo: F21–F24; [RD 614/2001, riesgo eléctrico](https://www.boe.es/buscar/act.php?id=BOE-A-2001-11881), [RD 487/1997, cargas](https://boe.es/buscar/doc.php?id=BOE-A-1997-8670), [LGSS, art. 156](https://boe.es/buscar/act.php?id=BOE-A-2015-11724). Los supuestos son académicos: la calificación de un accidente real depende de hechos y requisitos aplicables.

| ID | Nivel | Pregunta | A | B | C | D | Correcta | Explicación |
|---|---|---|---|---|---|---|---|---|
| T18-001 | B | ¿Qué derecho básico reconoce la PRL? | Ausencia de cualquier responsabilidad | Elegir todos los riesgos | Protección eficaz de seguridad y salud en el trabajo | Ignorar procedimientos | C | Existe un deber empresarial correlativo de protección. |
| T18-002 | B | ¿Qué debe hacer el trabajador con herramientas y protecciones? | Usarlas adecuadamente según formación e instrucciones | Anularlas por comodidad | Usarlas como quiera | Compartirlas sin control siempre | A | La Ley 31/1995 establece obligaciones de uso adecuado. |
| T18-003 | P | Se observa un cable deteriorado potencialmente peligroso. ¿Qué hacer? | Seguir usándolo | Informar inmediatamente y seguir el protocolo seguro | Repararlo con cinta sin autorización | Ocultarlo | B | Debe comunicarse la situación de riesgo. |
| T18-004 | M | Ante riesgo grave e inminente, ¿qué derecho puede ejercer el trabajador conforme a la ley? | Desactivar toda protección | Exigir un premio | Ignorar al servicio preventivo | Interrumpir actividad y abandonar el lugar si es necesario | D | Debe existir la situación prevista por la normativa; no es una elección arbitraria. |
| T18-005 | B | ¿Qué grupos de riesgos se asocian al trabajo con PVD? | Solo cortes | Solo infección | Fatiga visual, trastornos musculoesqueléticos y carga mental | Solo ruido de teclado | C | La evaluación debe contemplar el puesto y la organización. |
| T18-006 | P | La pantalla tiene reflejos de una ventana. ¿Qué medida es adecuada? | Reorientar puesto y controlar iluminación/reflejos | Subir brillo al máximo siempre | Quitar descansos | Acercar ojos a pantalla | A | La iluminación debe permitir lectura cómoda sin deslumbramiento. |
| T18-007 | M | ¿Qué características debe facilitar una silla de PVD? | Asiento inestable | Estabilidad y ajustes adecuados del asiento/respaldo | Altura fija para todos | Ausencia de respaldo | B | Debe permitir una postura de trabajo adaptable. |
| T18-008 | M | ¿Qué medida organizativa ayuda ante uso prolongado de pantallas? | Trabajo continuo obligatorio | Solo cambiar de monitor | Quitar toda pausa | Alternar tareas o introducir pausas según evaluación | D | No existe aquí una pauta universal de minutos aplicable a todos. |
| T18-009 | P | Hay tensión en muñecas al usar teclado/ratón. ¿Qué revisar? | Solo marca del navegador | Tamaño del CSV | Postura, apoyos, alcance y repetición | DNS | C | Se busca evitar desviaciones y sobreesfuerzos sostenidos. |
| T18-010 | M | ¿Qué aumenta riesgo musculoesquelético en extremidad superior? | Repetición, fuerza y posturas forzadas | Nombre del archivo | Direcciones IPv6 | UTF-8 | A | La combinación y duración de exposición son relevantes. |
| T18-011 | B | ¿Qué medida debe priorizarse ante manipulación manual de cargas con riesgo? | Levantar más deprisa | Evitarla cuando sea posible mediante medios adecuados | Cargar siempre a solas | Aumentar el peso | B | La ayuda mecánica puede evitar exposición. |
| T18-012 | P | Hay que mover un servidor pesado. ¿Qué hacer? | Tirar del cable | Levantar girando tronco | Improvisar sin comprobar | Evaluar peso/recorrido y usar ayuda adecuada | D | No se fija un peso seguro universal para cualquier persona y situación. |
| T18-013 | M | Si debe levantarse una carga tras evaluar el riesgo, ¿qué es preferible? | Mantenerla lejos | Girar bruscamente cintura | Mantenerla próxima y evitar torsiones | Sostenerla con brazos extendidos | C | La técnica no sustituye evitar la carga o usar medios auxiliares. |
| T18-014 | P | Hay que intervenir en equipo con posible riesgo eléctrico. ¿Actuación segura? | Personal habilitado, procedimiento y ausencia de tensión verificada cuando proceda | Abrir sin desconectar | Tocar para comprobar | Confiar solo en apagar pantalla | A | Desconectar un mando no prueba ausencia de tensión. |
| T18-015 | M | ¿Por qué no abrir una fuente de alimentación sin capacitación? | Porque aumenta DNS | Puede contener energía peligrosa aun desconectada | Porque cambia JSON | Porque pierde resolución | B | Los condensadores pueden conservar carga. |
| T18-016 | P | Una regleta presenta calor excesivo o daño. ¿Qué hacer? | Añadir otra regleta | Taparla | Seguir si funciona | Retirar de uso de forma segura y comunicar | D | Sobrecarga y defectos pueden causar incendio o contacto eléctrico. |
| T18-017 | P | Se detecta un incendio en la oficina. ¿Qué prioridad es correcta? | Recuperar objetos | Usar ascensor | Alertar y evacuar según plan, sin exponerse | Grabarlo antes de avisar | C | Intervenir solo conforme a formación y condiciones seguras. |
| T18-018 | M | ¿Qué medida preventiva evita obstáculos durante una evacuación? | Mantener libres y señalizadas las vías y salidas | Guardar cajas en puertas | Cerrar salidas con llave | Ocultar planos | A | La evacuación requiere recorridos utilizables. |
| T18-019 | B | ¿Qué describe un accidente in itinere en términos generales? | Cualquier accidente doméstico | El ocurrido al ir o volver del trabajo, cumpliendo requisitos | Solo dentro del CPD | Solo durante vacaciones | B | El nexo con el desplazamiento laboral debe concurrir. |
| T18-020 | B | ¿Qué describe un accidente en misión? | Cualquier viaje privado | Siempre cualquier hecho en un hotel | Solo el trayecto habitual a casa | Accidente relacionado con desplazamiento/actividad por encargo laboral | D | No equivale automáticamente a todo hecho durante las 24 horas de un viaje. |

## Adaptaciones de conceptos de exámenes históricos

Origen de todas las filas: **ADAPTADA**. Son ejercicios nuevos con distractores propios, seleccionados por coincidencia con el anexo BD. **No son transcripción literal ni banco oficial del proceso actual.** Se conservan números originales para volver al documento de procedencia. Se han excluido las preguntas anuladas señaladas en las plantillas revisadas; no se atribuye a una plantilla histórica la letra de nuestras opciones.

### Correspondencia de procedencia

| ID | Tema BD | Fuente y número original | Concepto conservado / cautela |
|---|---|---|---|
| H-001 | 18 | L03/L04, pregunta 1 | Accidente en misión; se precisa el nexo laboral. |
| H-002 | 13 | L03/L04, pregunta 3 | Acceso redundante SAN; múltiples caminos, no simple duplicación de datos. |
| H-003 | 04 | L03/L04, pregunta 4 | Consulta de DNS con nslookup. |
| H-004 | 09 | L03/L04, pregunta 8 | Texto alternativo en imágenes HTML; se especifica que la imagen es informativa. |
| H-005 | 12 | L03/L04, pregunta 10 | Pruebas de caja negra. |
| H-006 | 09 | L03/L04, pregunta 12 | Selector CSS de clase. |
| H-007 | 08 | L03/L04, pregunta 54 | Clave primaria; puede ser compuesta. |
| H-008 | 08 | L03/L04, pregunta 56 | Consulta con LIKE y prefijo; sensibilidad a mayúsculas dependiente de intercalación. |
| H-009 | 11 | L03/L04, pregunta 59 | Base Linux de Android; no se equipara a Ubuntu. |
| H-010 | 07 | L03/L04, pregunta 91 | MFA; se explicita que los factores son de categorías diferentes. |
| H-011 | 18 | L03/L04, pregunta 94 | Cooperación del trabajador con prevención. |
| H-012 | 10 | L03/L04, pregunta 96 | Serialización JSON en JavaScript. |
| H-013 | 15 | H23/R23, pregunta 7 | Contenedor audiovisual para web. |
| H-014 | 10 | H23/R23, pregunta 8 | Cierre de elemento XML. |
| H-015 | 02 | H23/R23, pregunta 11 | exFAT y archivos grandes; sin afirmar compatibilidad universal. |
| H-016 | 11 | H23/R23, pregunta 12 | JVM y bytecode. |
| H-017 | 09 | H25/R25, pregunta 4 | Selección CSS de hijos pares. |
| H-018 | 04 | H25/R25, pregunta 6 | Enlace de varios kilómetros y fibra monomodo. |
| H-019 | 17 | H25/R25, pregunta 8 | Limitación de conservación; no hay plazo universal. |
| H-020 | 08 | H25/R25, pregunta 10 | Modelo documental no relacional. |
| H-021 | 02 | H20, pregunta 11 | Configuración Linux en /etc; R20 no permite extraer marcas de test. |
| H-022 | 02 | H20, pregunta 12 | Permisos octales; respuesta calculada, no letra atribuida a R20. |
| H-023 | 04 | H20, pregunta 13 | IP y capa de red; respuesta técnica propia. |
| H-024 | 13 | H20, pregunta 37 | Hipervisor tipo 1; respuesta técnica propia. |

### Preguntas adaptadas

| ID | Nivel | Pregunta | A | B | C | D | Correcta | Explicación |
|---|---|---|---|---|---|---|---|---|
| H-001 | M | Un técnico resulta lesionado realizando una intervención encargada en otra sede. ¿Qué concepto encaja? | Viaje privado | Accidente en misión | In itinere necesariamente | No laboral siempre | B | La actividad se realiza por encargo laboral; la calificación real requiere valorar hechos. |
| H-002 | M | ¿Qué evita que perder un único camino de acceso inutilice una SAN? | Un nombre DNS | Comprimir archivos | Rutas redundantes y multipath configurado | Un monitor adicional | C | La redundancia debe ser efectiva y correctamente gestionada. |
| H-003 | B | Para investigar qué IP devuelve un DNS en Windows, ¿qué herramienta elegir? | nslookup | mkdir | rmdir | format | A | Consulta respuestas del sistema de nombres. |
| H-004 | M | Una imagen informativa web necesita equivalente textual. ¿Qué atributo corresponde? | id | src | width | alt | D | El texto alternativo debe transmitir su función; las decorativas requieren otro tratamiento. |
| H-005 | M | ¿Qué examina una prueba de caja negra? | Solo código interno | Salidas respecto a entradas y comportamiento esperado | Color del IDE | Modelo del procesador | B | No requiere conocer la implementación interna. |
| H-006 | P | El selector CSS `.aviso` coincide con… | Elementos que tienen esa clase | Solo `id="aviso"` | Solo etiqueta aviso | Todos los párrafos | A | El punto indica selector de clase. |
| H-007 | M | Se elige `(codigo, version)` como clave primaria. ¿Qué debe cumplirse? | Cada columna debe ser única por separado | Una puede ser NULL | La combinación es única y sus componentes no son NULL | Debe haber otra clave primaria | C | La unicidad se evalúa sobre la combinación. |
| H-008 | P | ¿Qué filtra nombres que comienzan por el prefijo literal `rt` en SQL? | `nombre LIKE '%rt'` | `nombre LIKE '%rt%'` | `nombre = 'rt%'` | `nombre LIKE 'rt%'` | D | El comodín sigue al prefijo; capitalización según intercalación. |
| H-009 | B | ¿Sobre qué núcleo se basa Android? | Windows NT | Linux | Darwin exclusivamente | DOS | B | Android no es por ello idéntico a una distribución de escritorio. |
| H-010 | M | ¿Qué opción combina dos categorías de autenticación? | Contraseña y llave física de seguridad | Usuario y apellido | Dos PIN | Dos preguntas secretas | A | Combina conocimiento y posesión. |
| H-011 | B | ¿Qué conducta cumple deberes preventivos del trabajador? | Anular dispositivos | Ocultar riesgos | Cooperar y seguir instrucciones preventivas | Elegir ignorar formación | C | La prevención implica obligaciones además de derechos. |
| H-012 | B | ¿Qué operación produce texto JSON desde un valor compatible de JavaScript? | `JSON.parse()` | `JSON.open()` | `JSON.compile()` | `JSON.stringify()` | D | Serializar y analizar texto son operaciones distintas. |
| H-013 | B | ¿Cuál puede contener vídeo y audio para distribución web? | PNG | WebM | TXT | CSV | B | WebM es un contenedor audiovisual. |
| H-014 | P | Abierto `<titulo>`, ¿qué cierre XML corresponde? | `</titulo>` | `<titulo/>` | `</TITULO>` | `<fin titulo>` | A | Deben coincidir nombre y capitalización. |
| H-015 | M | Para intercambiar archivos mayores de 4 GiB en sistemas compatibles, ¿qué evita la limitación de FAT32? | DNS | CSV | exFAT | SMTP | C | Comprobar soporte en los sistemas concretos; no es compatibilidad universal. |
| H-016 | M | ¿Qué necesita normalmente un programa Java compilado a bytecode? | Solo PHP | Solo CSS | Una tarjeta gráfica específica | JVM compatible | D | También deben ser compatibles bibliotecas y dependencias. |
| H-017 | P | ¿Qué selector apunta a los hijos en posiciones pares? | `:pair()` | `:nth-child(2n)` | `:second-only` | `:even-index()` | B | El índice de nth-child empieza en uno. |
| H-018 | M | Para un enlace directo de varios kilómetros, ¿qué medio elegir entre estas opciones? | Fibra monomodo y ópticas de alcance adecuado | USB | UTP convencional de oficina | HDMI corto | A | El alcance depende también de ópticas y presupuesto de pérdidas. |
| H-019 | M | ¿Qué determina cuánto conservar datos personales? | Siempre cinco años | Espacio libre disponible | Finalidad y obligaciones de conservación aplicables | Preferencia personal sin límite | C | Deben justificarse los plazos, no conservarse indefinidamente. |
| H-020 | B | ¿Cuál es conocido por un modelo documental no relacional? | PostgreSQL | MariaDB | MySQL | MongoDB | D | Es un ejemplo de base documental, no un modelo relacional clásico. |
| H-021 | B | ¿Dónde se guardan habitualmente configuraciones del sistema Linux? | /tmp exclusivamente | /etc | /proc como archivos permanentes | /home siempre | B | /etc reúne configuraciones; ubicaciones específicas pueden variar. |
| H-022 | P | ¿Qué octal da propietario rwx, grupo r-x y otros r--? | 754 | 745 | 644 | 700 | A | 7=4+2+1; 5=4+1; 4=lectura. |
| H-023 | B | ¿Qué protocolo aporta direccionamiento y encaminamiento en la capa de red? | SMTP | TCP | IP | HTTP | C | TCP es transporte; SMTP/HTTP son aplicación. |
| H-024 | B | ¿Qué hipervisor se ejecuta directamente sobre hardware? | Tipo 2 | Solo un emulador web | Un editor | Tipo 1 | D | Es el hipervisor nativo o bare-metal. |

## Mapa de comprobación de cobertura

Este mapa identifica dónde estudiar cada grupo enumerado en el anexo. **Cobertura de un concepto no significa agotamiento de todas sus variantes.** Las etiquetas P identifican ejercicios aplicados; los bloques H refuerzan conceptos históricos coincidentes.

| Tema | Conceptos y preguntas de referencia |
|---|---|
| 01 | Hardware/software y periféricos 001–003; memoria/CPU/caché 004–006; discos 007–008; firmware/arranque 009–010; red/gráfica/tipos 011–013; diagnóstico/drivers 014–018; unidades 019–020. |
| 02 | SO/instalación 001–002; herramientas/eventos 003–006; archivos 007–011; permisos 012/019; procesos/servicios 013–015/020; actualizaciones 016–017; recuperación 018. Windows 10/11 y Ubuntu se tratan sin depender de menús de una build. |
| 03 | Servidores/dominio/AD 001–004/008; grupos/OU/GPO 005–007; recursos/permisos 009–012; acceso remoto 013–015; logs/tareas/mantenimiento 016–020. |
| 04 | Modelos/redes 001–005; IPv4/IPv6/subredes 006–012; DNS/DHCP/NAT/VLAN 013–016; equipos/firewall/cableado 017–019; herramientas 020. H-003 y H-023 amplían diagnóstico/modelo. |
| 05 | Internet/web/HTTP/TLS 001–004/010–012; correo/DNS 005–009/019; FTP/SFTP/SSH 012–014; certificados 015–018; navegación segura 020. |
| 06 | Incidencia/petición/problema/cambio 001–006; registro/ticket 007–008/019; prioridad 009–010; escalado 011–013; diagnóstico 014–015; seguimiento/comunicación/cierre 016–018; seguridad en atención 020. |
| 07 | CIA 001–004; contraseña/MFA 005–007; privilegios/parches/EDR 008–010; ransomware/phishing 011–014; amenaza/vulnerabilidad 015; cifrado/VPN/firewall/copias 016–020. |
| 08 | Tabla/registro/campo 001–002; claves/relaciones/integridad 003–007; normalización 008–009; SELECT/INSERT/UPDATE/DELETE 010–013; filtros/orden/agregación 014–018; JOIN 019; NoSQL 020. |
| 09 | Automatización/variables/tipos/control/funciones/errores 001–009; PowerShell/Bash 010–013; HTML/CSS/JS 014–016; cliente-servidor/HTTP/API 017–020. H-004, H-006 y H-017 añaden casos web. |
| 10 | XML 001–006; JSON 007–012/018; CSV 013–015/019; codificación 016–017; importación/configuración/intercambio 018–020. Las validaciones de estructura y valores son aplicables a APIs y ficheros de configuración. |
| 11 | Variables/tipos/control/funciones 001–008; POO 009–014; Java/PHP/frameworks 015–017; móvil 018–020 y H-009. |
| 12 | IDE/compilación 001–003; depuración 004–007; versiones 008–016; pruebas 017–020 y H-005. |
| 13 | VM/hipervisores/snapshots 001–006; NAS/SAN/local-red 007–009; discos/particiones/RAID 010–015; política de copia/restauración 016–020. H-002 añade caminos SAN redundantes. |
| 14 | Cloud/SaaS/IaaS/PaaS 001–007; almacenamiento/sincronización 008–009/018–019; identidad/correo 010–012/017; colaboración/compartición segura 013–017/020. |
| 15 | Audio 001–003; formatos/códec/contenedor/compresión 004–008; resolución/fps/bitrate 009–013; streaming/transcodificación 014–017; captura/ingesta/edición/emisión/archivo/distribución 018; MAM/DAM/metadatos 019–020. |
| 16 | Inventario/etiquetado 001–005; documentación/procedimientos/conocimiento 006–010/015/017; cambios/trazabilidad 011–014/016/018–020. |
| 17 | Conceptos/principios/confidencialidad 001–007/011–013; acceso/incidentes 008–010; equipos/cuentas/soportes/uso aceptable 014–020. |
| 18 | Derechos/deberes 001–004; PVD 005–008; extremidad superior 009–010; cargas 011–013; eléctrico 014–016; incendios 017–018; accidentes 019–020. |

## Límites y uso recomendado

1. Estudiar primero las explicaciones y después responder sin ver la solución. Consultar la referencia correspondiente cuando una distinción no quede clara.
2. Repasar por tema y mezclar después preguntas. En una futura aplicación, **barajar tanto preguntas como alternativas**, conservando la correspondencia de la respuesta; no memorizar posiciones.
3. Para un simulacro de 40 principales más 8 reservas, usar la fórmula de las bases y no contar reservas salvo sustitución. Esa configuración es un ejemplo, no la convocatoria definitiva.
4. Los bloques no reproducen todos los exámenes localizados: se seleccionan conceptos coincidentes, se enlazan los originales y se evitan transcripciones masivas y temarios de otras ocupaciones. Las plantillas secundarias pueden ser provisionales o tener revisiones posteriores.
5. No se han utilizado materiales comerciales cerrados, filtraciones ni supuestas preguntas futuras. Ningún enunciado lleva probabilidad inventada de aparición.
6. No se ha verificado una por una cada conducta en todas las versiones de Windows, Ubuntu, plataformas cloud y lenguajes. El material se limita a conceptos comunes; consultar documentación de la versión concreta para uso operativo.
7. Las normas legales y las comunicaciones del proceso pueden cambiar. La revisión normativa se refiere a las fuentes consultadas en la fecha de elaboración; para examen y casos reales comprobar el texto aplicable y las comunicaciones oficiales.
8. El Markdown es el único entregable de esta fase. No se han generado web, dependencias, ni código ejecutable de estudio.
