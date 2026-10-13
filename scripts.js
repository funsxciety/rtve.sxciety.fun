"use strict";

const QUESTION_BANK = [
  {"id":"T01-001","tema":1,"category":"Hardware","level":"B","question":"¿Cuál es hardware?","options":["Navegador","Sistema operativo","Módulo RAM","Driver instalado"],"answer":2,"explanation":"Hardware es el componente físico.","origin":"GENERADA","source":"L01, anexo 1, tema 1"},
  {"id":"T01-002","tema":1,"category":"Hardware","level":"B","question":"¿Cuál es un periférico de entrada?","options":["Teclado","Altavoz","Impresora","Proyector"],"answer":0,"explanation":"Introduce información en el equipo.","origin":"GENERADA","source":"L01, anexo 1, tema 1"},
  {"id":"T01-003","tema":1,"category":"Hardware","level":"B","question":"¿Qué permite entrada y salida?","options":["Micrófono","Altavoz","Monitor no táctil","Pantalla táctil"],"answer":3,"explanation":"Muestra información y recibe pulsaciones.","origin":"GENERADA","source":"L01, anexo 1, tema 1"},
  {"id":"T01-004","tema":1,"category":"Hardware","level":"B","question":"¿Qué memoria convencional es volátil?","options":["SSD","RAM","HDD","Flash"],"answer":1,"explanation":"Pierde su contenido sin alimentación.","origin":"GENERADA","source":"L01, anexo 1, tema 1"},
  {"id":"T01-005","tema":1,"category":"Hardware","level":"B","question":"¿Qué hace principalmente la CPU?","options":["Alimentar el equipo","Guardar copias externas","Ejecutar instrucciones","Proporcionar WiFi"],"answer":2,"explanation":"Procesa instrucciones y operaciones.","origin":"GENERADA","source":"L01, anexo 1, tema 1"},
  {"id":"T01-006","tema":1,"category":"Hardware","level":"M","question":"¿Para qué sirve la caché de CPU?","options":["Acelerar acceso a datos frecuentes","Sustituir cualquier disco","Guardar copias externas","Asignar IP"],"answer":0,"explanation":"Reduce accesos a memoria más lenta.","origin":"GENERADA","source":"L01, anexo 1, tema 1"},
  {"id":"T01-007","tema":1,"category":"Hardware","level":"B","question":"¿Qué distingue un SSD de un HDD convencional?","options":["Tiene platos","Es RAM","No admite sistemas operativos","No tiene partes mecánicas móviles"],"answer":3,"explanation":"Almacena electrónicamente.","origin":"GENERADA","source":"L01, anexo 1, tema 1"},
  {"id":"T01-008","tema":1,"category":"Hardware","level":"M","question":"¿Qué relación es correcta?","options":["HDMI es memoria","NVMe es protocolo y M.2 formato/conector","DHCP es una GPU","SATA es un antivirus"],"answer":1,"explanation":"No todo dispositivo M.2 utiliza NVMe.","origin":"GENERADA","source":"L01, anexo 1, tema 1"},
  {"id":"T01-009","tema":1,"category":"Hardware","level":"B","question":"¿Qué función tiene BIOS/UEFI?","options":["Compilar Java","Crear documentos","Inicializar hardware y preparar arranque","Resolver DNS público"],"answer":2,"explanation":"Es firmware previo al sistema operativo.","origin":"GENERADA","source":"L01, anexo 1, tema 1"},
  {"id":"T01-010","tema":1,"category":"Hardware","level":"M","question":"¿Qué controla Secure Boot?","options":["Todo el malware","Confianza de componentes de arranque mediante firmas","Velocidad de RAM","Contraseñas locales"],"answer":1,"explanation":"Protege el arranque; no sustituye al antivirus.","origin":"GENERADA","source":"L01, anexo 1, tema 1"},
  {"id":"T01-011","tema":1,"category":"Hardware","level":"B","question":"¿Qué conecta un equipo a Ethernet?","options":["NIC","Disipador","Fuente","Tarjeta de sonido"],"answer":0,"explanation":"La tarjeta de red proporciona esa interfaz.","origin":"GENERADA","source":"L01, anexo 1, tema 1"},
  {"id":"T01-012","tema":1,"category":"Hardware","level":"B","question":"¿Qué trabajo corresponde a una GPU?","options":["Permisos NTFS","Resolver DNS","Aplicar GPO","Gráficos y cargas paralelas compatibles"],"answer":3,"explanation":"Acelera procesamiento gráfico.","origin":"GENERADA","source":"L01, anexo 1, tema 1"},
  {"id":"T01-013","tema":1,"category":"Hardware","level":"M","question":"¿Cómo elegir entre portátil y estación de trabajo?","options":["Solo por color","Ignorando movilidad","Según carga, recursos y movilidad","Siempre el más caro"],"answer":2,"explanation":"El tipo debe ajustarse al uso previsto.","origin":"GENERADA","source":"L01, anexo 1, tema 1"},
  {"id":"T01-014","tema":1,"category":"Hardware","level":"P","question":"No enciende ni muestra luces. ¿Primera comprobación segura?","options":["Reinstalar navegador","Alimentación y cableado","Cambiar DNS","Formatear"],"answer":1,"explanation":"Se comienza por verificaciones no destructivas.","origin":"GENERADA","source":"L01, anexo 1, tema 1"},
  {"id":"T01-015","tema":1,"category":"Hardware","level":"P","question":"Se apaga bajo carga con temperatura elevada. ¿Qué revisar?","options":["Refrigeración y ventilación","Registro MX","Formato CSV","Historial web"],"answer":0,"explanation":"Puede actuar una protección térmica.","origin":"GENERADA","source":"L01, anexo 1, tema 1"},
  {"id":"T01-016","tema":1,"category":"Hardware","level":"P","question":"Un HDD hace ruidos anómalos y falla al leer. ¿Prioridad?","options":["Desfragmentar repetidamente","Formatear","Ignorar","Proteger datos y evaluar avería"],"answer":3,"explanation":"Las escrituras y lecturas intensivas pueden agravarla.","origin":"GENERADA","source":"L01, anexo 1, tema 1"},
  {"id":"T01-017","tema":1,"category":"Hardware","level":"B","question":"¿Para qué sirve un driver?","options":["Reemplazar alimentación","Crear usuarios","Permitir al SO gestionar un dispositivo","Garantizar ausencia de fallos"],"answer":2,"explanation":"Enlaza software y hardware concreto.","origin":"GENERADA","source":"L01, anexo 1, tema 1"},
  {"id":"T01-018","tema":1,"category":"Hardware","level":"P","question":"Hay fallos compatibles con RAM defectuosa. ¿Prueba pertinente?","options":["Cambiar inicio web","Diagnóstico de memoria","Eliminar certificados","Cambiar DNS"],"answer":1,"explanation":"Permite contrastar esa hipótesis.","origin":"GENERADA","source":"L01, anexo 1, tema 1"},
  {"id":"T01-019","tema":1,"category":"Hardware","level":"B","question":"¿Cuántos bits tiene un byte?","options":["8","10","16","1024"],"answer":0,"explanation":"Un byte contiene ocho bits.","origin":"GENERADA","source":"L01, anexo 1, tema 1"},
  {"id":"T01-020","tema":1,"category":"Hardware","level":"P","question":"80 Mbit/s constantes, sin sobrecarga: ¿cuántos MB/s decimales?","options":["80","640","8","10"],"answer":3,"explanation":"80/8 = 10 MB/s.","origin":"GENERADA","source":"L01, anexo 1, tema 1"},
  {"id":"T02-001","tema":2,"category":"Sistemas","level":"B","question":"¿Qué hace un sistema operativo?","options":["Diseñar cables","Gestionar procesos, memoria y dispositivos","Alimentar CPU","Emitir certificados públicos"],"answer":1,"explanation":"Coordina recursos y ejecución.","origin":"GENERADA","source":"L01, anexo 1, tema 2"},
  {"id":"T02-002","tema":2,"category":"Sistemas","level":"P","question":"Antes de reinstalar Windows, ¿qué hacer?","options":["Borrar particiones","Quitar contraseñas","Copia verificada, requisitos y autorización","Cambiar fondo"],"answer":2,"explanation":"La reinstalación puede destruir datos.","origin":"GENERADA","source":"L01, anexo 1, tema 2"},
  {"id":"T02-003","tema":2,"category":"Sistemas","level":"B","question":"¿Qué muestra procesos y consumo en Windows?","options":["Administrador de tareas","Paint","Calculadora","Lupa"],"answer":0,"explanation":"Permite inspeccionar utilización de recursos.","origin":"GENERADA","source":"L01, anexo 1, tema 2"},
  {"id":"T02-004","tema":2,"category":"Sistemas","level":"B","question":"¿Dónde consultar errores registrados de Windows?","options":["Papelera","Portapapeles","Paint","Visor de eventos"],"answer":3,"explanation":"Relaciona eventos con incidencias.","origin":"GENERADA","source":"L01, anexo 1, tema 2"},
  {"id":"T02-005","tema":2,"category":"Sistemas","level":"B","question":"¿Qué administra hardware y drivers en Windows?","options":["Bloc de notas","Administrador de dispositivos","Agenda","Calculadora"],"answer":1,"explanation":"Muestra estado y controladores.","origin":"GENERADA","source":"L01, anexo 1, tema 2"},
  {"id":"T02-006","tema":2,"category":"Sistemas","level":"M","question":"¿Para qué sirve UAC?","options":["Controlar elevación de privilegios","Sustituir antivirus","Cifrar toda red","Crear VLAN"],"answer":0,"explanation":"Solicita confirmación o credenciales para elevar.","origin":"GENERADA","source":"L01, anexo 1, tema 2"},
  {"id":"T02-007","tema":2,"category":"Sistemas","level":"B","question":"¿Qué sistema de archivos admite ACL en Windows?","options":["CSV","HTTP","NTFS","JSON"],"answer":2,"explanation":"Permite controlar permisos detallados.","origin":"GENERADA","source":"L01, anexo 1, tema 2"},
  {"id":"T02-008","tema":2,"category":"Sistemas","level":"M","question":"¿Qué límite tiene FAT32 para un archivo?","options":["No admite carpetas","Solo funciona en Linux","Requiere Internet","Aproximadamente 4 GiB"],"answer":3,"explanation":"El límite habitual es 4 GiB menos un byte.","origin":"GENERADA","source":"L01, anexo 1, tema 2"},
  {"id":"T02-009","tema":2,"category":"Sistemas","level":"B","question":"¿Qué sistema de archivos es habitual en Linux?","options":["NTLM","ext4","SMTP","UEFI"],"answer":1,"explanation":"ext4 organiza archivos en almacenamiento.","origin":"GENERADA","source":"L01, anexo 1, tema 2"},
  {"id":"T02-010","tema":2,"category":"Sistemas","level":"B","question":"¿Qué contiene normalmente `/home`?","options":["Directorios personales","Lista de DNS","Firmware","Cargador gráfico"],"answer":0,"explanation":"Aloja hogares de usuarios normales.","origin":"GENERADA","source":"L01, anexo 1, tema 2"},
  {"id":"T02-011","tema":2,"category":"Sistemas","level":"B","question":"¿Qué muestra el directorio actual en Bash?","options":["mkdir","rm","pwd","chmod"],"answer":2,"explanation":"`pwd` imprime la ubicación actual.","origin":"GENERADA","source":"L01, anexo 1, tema 2"},
  {"id":"T02-012","tema":2,"category":"Sistemas","level":"P","question":"¿Qué expresa `chmod 640 informe.txt`?","options":["Todos ejecutan","Propietario solo lee","Grupo escribe","Propietario rw; grupo r; otros ninguno"],"answer":3,"explanation":"6=lectura/escritura, 4=lectura, 0=ninguno.","origin":"GENERADA","source":"L01, anexo 1, tema 2"},
  {"id":"T02-013","tema":2,"category":"Sistemas","level":"M","question":"¿Qué es un proceso?","options":["Instancia de programa en ejecución","Archivo siempre malicioso","Programa sin memoria","Solo una carpeta"],"answer":0,"explanation":"Puede haber varias instancias del mismo programa.","origin":"GENERADA","source":"L01, anexo 1, tema 2"},
  {"id":"T02-014","tema":2,"category":"Sistemas","level":"B","question":"¿Qué es un servicio?","options":["CSV obligatorio","Función normalmente ejecutada en segundo plano","Partición física","Cuenta personal"],"answer":1,"explanation":"No requiere normalmente ventana interactiva.","origin":"GENERADA","source":"L01, anexo 1, tema 2"},
  {"id":"T02-015","tema":2,"category":"Sistemas","level":"P","question":"Ubuntu con systemd: ¿cómo consultar estado de SSH?","options":["`chmod ssh`","`apt ssh --delete`","`systemctl status ssh`","`mkdir ssh`"],"answer":2,"explanation":"Consulta el estado de esa unidad.","origin":"GENERADA","source":"L01, anexo 1, tema 2"},
  {"id":"T02-016","tema":2,"category":"Sistemas","level":"M","question":"¿Qué hace `apt update`?","options":["Actualizar índices de paquetes","Instalar todas las actualizaciones","Formatear","Cambiar contraseña root"],"answer":0,"explanation":"No equivale a `apt upgrade`.","origin":"GENERADA","source":"L01, anexo 1, tema 2"},
  {"id":"T02-017","tema":2,"category":"Sistemas","level":"P","question":"Un parche afecta una aplicación crítica. ¿Qué hacer?","options":["Bloquear parches para siempre","Instalar sin avisar","Compartir administrador","Validar, planificar y prever reversión"],"answer":3,"explanation":"Seguridad y continuidad deben coordinarse.","origin":"GENERADA","source":"L01, anexo 1, tema 2"},
  {"id":"T02-018","tema":2,"category":"Sistemas","level":"M","question":"¿Un punto de restauración sustituye una copia de documentos?","options":["Siempre","No, revierte componentes/configuración del sistema","Solo en Linux","Solo con WiFi"],"answer":1,"explanation":"No es una copia completa de datos personales.","origin":"GENERADA","source":"L01, anexo 1, tema 2"},
  {"id":"T02-019","tema":2,"category":"Sistemas","level":"P","question":"Un usuario requiere una tarea administrativa puntual. ¿Mejor opción?","options":["Todos administradores","Desactivar ACL","Elevación autorizada para esa tarea","Publicar credenciales"],"answer":2,"explanation":"Evita privilegios permanentes innecesarios.","origin":"GENERADA","source":"L01, anexo 1, tema 2"},
  {"id":"T02-020","tema":2,"category":"Sistemas","level":"P","question":"Una aplicación bloqueada contiene trabajo no guardado. ¿Antes de terminarla?","options":["Evaluar recuperación y advertir de pérdida","Borrar carpeta","Cambiar hora","Desconectar ratón"],"answer":0,"explanation":"Finalizar el proceso puede perder trabajo.","origin":"GENERADA","source":"L01, anexo 1, tema 2"},
  {"id":"T03-001","tema":3,"category":"Sistemas","level":"B","question":"¿Qué caracteriza a un servidor?","options":["Nunca tiene SO","Solo admite un usuario","Presta servicios a clientes","Siempre es físico"],"answer":2,"explanation":"Es un papel, no un tipo obligatorio de caja.","origin":"GENERADA","source":"L01, anexo 1, tema 3"},
  {"id":"T03-002","tema":3,"category":"Sistemas","level":"B","question":"¿Qué aporta un dominio AD?","options":["Gestión centralizada de identidades y recursos","Eliminar contraseñas","Comprimir vídeo","Sustituir IP"],"answer":0,"explanation":"Centraliza cuentas, equipos y políticas.","origin":"GENERADA","source":"L01, anexo 1, tema 3"},
  {"id":"T03-003","tema":3,"category":"Sistemas","level":"B","question":"¿Qué hace un controlador de dominio?","options":["Dibujar interfaces","Autenticar y prestar servicios del directorio","Convertir PDF","Alimentar switches"],"answer":1,"explanation":"Participa en la gestión del dominio.","origin":"GENERADA","source":"L01, anexo 1, tema 3"},
  {"id":"T03-004","tema":3,"category":"Sistemas","level":"M","question":"¿Cómo se distinguen cuenta local y de dominio?","options":["La local es pública","Dominio no usa contraseña","Ambas son solo RAM","Equipo local frente a directorio corporativo"],"answer":3,"explanation":"Tienen ámbitos de administración diferentes.","origin":"GENERADA","source":"L01, anexo 1, tema 3"},
  {"id":"T03-005","tema":3,"category":"Sistemas","level":"B","question":"¿Por qué asignar permisos a grupos?","options":["Eliminar trazabilidad","Desactivar controles","Gestionar acceso por funciones","Evitar autenticación"],"answer":2,"explanation":"Simplifica altas/bajas manteniendo coherencia.","origin":"GENERADA","source":"L01, anexo 1, tema 3"},
  {"id":"T03-006","tema":3,"category":"Sistemas","level":"M","question":"¿Qué es una OU de AD?","options":["Contenedor organizativo y administrativo","Disco USB","IPv6","Códec"],"answer":0,"explanation":"No equivale a un grupo de seguridad.","origin":"GENERADA","source":"L01, anexo 1, tema 3"},
  {"id":"T03-007","tema":3,"category":"Sistemas","level":"B","question":"¿Para qué sirven las GPO?","options":["Crear vídeos","Aplicar configuración a cuentas/equipos","Aumentar RAM","Crear claves SQL"],"answer":1,"explanation":"Distribuyen políticas del entorno administrado.","origin":"GENERADA","source":"L01, anexo 1, tema 3"},
  {"id":"T03-008","tema":3,"category":"Sistemas","level":"P","question":"Un PC no localiza el dominio, pero navega. ¿Qué revisar?","options":["Brillo","Códec","Impresora","DNS corporativo"],"answer":3,"explanation":"AD localiza sus servicios mediante DNS.","origin":"GENERADA","source":"L01, anexo 1, tema 3"},
  {"id":"T03-009","tema":3,"category":"Sistemas","level":"B","question":"¿Qué protocolo comparte archivos en Windows?","options":["SMTP","ICMP","SMB","POP3"],"answer":2,"explanation":"SMB proporciona acceso a recursos compartidos.","origin":"GENERADA","source":"L01, anexo 1, tema 3"},
  {"id":"T03-010","tema":3,"category":"Sistemas","level":"M","question":"Acceso a carpeta Windows por red: ¿qué permisos cuentan?","options":["Compartición y NTFS efectivos","Solo escritorio","Nombre del servidor","Ninguno"],"answer":0,"explanation":"La operación debe satisfacer ambas capas.","origin":"GENERADA","source":"L01, anexo 1, tema 3"},
  {"id":"T03-011","tema":3,"category":"Sistemas","level":"P","question":"SMB: lectura en recurso y modificación NTFS, sin otras reglas. ¿Acceso por red?","options":["Modificar","Leer","Administrar dominio","Borrar siempre"],"answer":1,"explanation":"La compartición limita a lectura.","origin":"GENERADA","source":"L01, anexo 1, tema 3"},
  {"id":"T03-012","tema":3,"category":"Sistemas","level":"B","question":"¿Cuál es una ruta UNC?","options":["`https://correo.example`","`/etc/hosts`","`C:datos`","`\\\\servidor\\recurso`"],"answer":3,"explanation":"Identifica un recurso de red Windows.","origin":"GENERADA","source":"L01, anexo 1, tema 3"},
  {"id":"T03-013","tema":3,"category":"Sistemas","level":"B","question":"¿Qué proporciona SSH?","options":["Solo impresión","Solo DNS","Acceso remoto protegido","Solo vídeo"],"answer":2,"explanation":"Protege la sesión remota mediante cifrado.","origin":"GENERADA","source":"L01, anexo 1, tema 3"},
  {"id":"T03-014","tema":3,"category":"Sistemas","level":"B","question":"¿Qué protocolo se asocia con Escritorio remoto?","options":["RDP","XML","RAID","DHCP"],"answer":0,"explanation":"Proporciona sesiones gráficas remotas.","origin":"GENERADA","source":"L01, anexo 1, tema 3"},
  {"id":"T03-015","tema":3,"category":"Sistemas","level":"M","question":"Exponer administración remota sin controles, ¿qué implica?","options":["Más confidencialidad","Mayor superficie de ataque","No necesitar parches","Evitar errores"],"answer":1,"explanation":"Exige restricciones, autenticación y supervisión.","origin":"GENERADA","source":"L01, anexo 1, tema 3"},
  {"id":"T03-016","tema":3,"category":"Sistemas","level":"P","question":"¿Cómo consultar logs de una unidad systemd?","options":["`touch servicio`","`chmod servicio`","`clear servicio`","`journalctl -u nombre.service`"],"answer":3,"explanation":"Filtra el diario por unidad.","origin":"GENERADA","source":"L01, anexo 1, tema 3"},
  {"id":"T03-017","tema":3,"category":"Sistemas","level":"B","question":"¿Qué programa tareas en Windows?","options":["Paint","Papelera","Programador de tareas","Lupa"],"answer":2,"explanation":"Usa desencadenadores temporales o por eventos.","origin":"GENERADA","source":"L01, anexo 1, tema 3"},
  {"id":"T03-018","tema":3,"category":"Sistemas","level":"B","question":"¿Qué programa tareas periódicas clásicas en Linux?","options":["cron","BIOS","TLS","GPU"],"answer":0,"explanation":"Ejecuta tareas según expresiones temporales.","origin":"GENERADA","source":"L01, anexo 1, tema 3"},
  {"id":"T03-019","tema":3,"category":"Sistemas","level":"P","question":"Una tarea solo falla programada. ¿Qué revisar?","options":["Fondo","Cuenta, permisos, rutas y entorno","Resolución","Cable del ratón"],"answer":1,"explanation":"Puede ejecutarse bajo otro contexto.","origin":"GENERADA","source":"L01, anexo 1, tema 3"},
  {"id":"T03-020","tema":3,"category":"Sistemas","level":"P","question":"Antes de reiniciar un servidor de producción, ¿qué hacer?","options":["Cortar corriente","Borrar logs","Desactivar copias","Evaluar dependencias y usar ventana autorizada"],"answer":3,"explanation":"Reduce interrupciones y deja trazabilidad.","origin":"GENERADA","source":"L01, anexo 1, tema 3"},
  {"id":"T04-001","tema":4,"category":"Redes","level":"B","question":"¿En qué capa OSI trabaja IP?","options":["Aplicación","Red","Física","Sesión"],"answer":1,"explanation":"IP proporciona direccionamiento y encaminamiento.","origin":"GENERADA","source":"L01, anexo 1, tema 4"},
  {"id":"T04-002","tema":4,"category":"Redes","level":"B","question":"¿En qué capa TCP/IP se sitúan TCP y UDP?","options":["Acceso","Internet","Transporte","Aplicación"],"answer":2,"explanation":"Comunican procesos mediante puertos.","origin":"GENERADA","source":"L01, anexo 1, tema 4"},
  {"id":"T04-003","tema":4,"category":"Redes","level":"B","question":"¿Qué describe una LAN?","options":["Red de área local","Toda Internet","Red solo satelital","Un antivirus"],"answer":0,"explanation":"Conecta equipos de un ámbito local.","origin":"GENERADA","source":"L01, anexo 1, tema 4"},
  {"id":"T04-004","tema":4,"category":"Redes","level":"B","question":"¿Qué caracteriza una WAN?","options":["Solo un cable USB","Ausencia de routers","Uso exclusivo de WiFi","Interconexión de ámbitos geográficos amplios"],"answer":3,"explanation":"Une redes o sedes a mayor distancia.","origin":"GENERADA","source":"L01, anexo 1, tema 4"},
  {"id":"T04-005","tema":4,"category":"Redes","level":"M","question":"¿Qué puede empeorar una conexión WiFi?","options":["Un archivo JSON","Interferencias y obstáculos","Una clave primaria","Un nombre de usuario corto"],"answer":1,"explanation":"Afectan al medio radioeléctrico.","origin":"GENERADA","source":"L01, anexo 1, tema 4"},
  {"id":"T04-006","tema":4,"category":"Redes","level":"B","question":"¿Cuántos bits tiene una dirección IPv4?","options":["32","48","64","128"],"answer":0,"explanation":"Son cuatro octetos.","origin":"GENERADA","source":"L01, anexo 1, tema 4"},
  {"id":"T04-007","tema":4,"category":"Redes","level":"B","question":"¿Cuántos bits tiene una dirección IPv6?","options":["32","48","128","256"],"answer":2,"explanation":"Amplía notablemente el espacio de direcciones.","origin":"GENERADA","source":"L01, anexo 1, tema 4"},
  {"id":"T04-008","tema":4,"category":"Redes","level":"B","question":"¿Qué IP pertenece a un rango privado RFC 1918?","options":["8.8.8.8","1.1.1.1","172.32.1.1","192.168.10.5"],"answer":3,"explanation":"192.168.0.0/16 es privado; 172.32 queda fuera de 172.16/12.","origin":"GENERADA","source":"L01, anexo 1, tema 4"},
  {"id":"T04-009","tema":4,"category":"Redes","level":"P","question":"¿Qué máscara corresponde a /24?","options":["255.0.0.0","255.255.255.0","255.255.0.0","255.255.255.255"],"answer":1,"explanation":"Tiene 24 bits de red.","origin":"GENERADA","source":"L01, anexo 1, tema 4"},
  {"id":"T04-010","tema":4,"category":"Redes","level":"P","question":"¿Cuál es la red de 192.168.10.45/24?","options":["192.168.10.0","192.168.0.0","192.168.10.45","192.168.10.255"],"answer":0,"explanation":"Se ponen a cero los ocho bits de host.","origin":"GENERADA","source":"L01, anexo 1, tema 4"},
  {"id":"T04-011","tema":4,"category":"Redes","level":"P","question":"¿Cuántas direcciones de host utilizables hay normalmente en una /26?","options":["64","126","62","254"],"answer":2,"explanation":"2^6−2 = 62: se excluyen red y broadcast.","origin":"GENERADA","source":"L01, anexo 1, tema 4"},
  {"id":"T04-012","tema":4,"category":"Redes","level":"B","question":"¿Para qué sirve la puerta de enlace predeterminada?","options":["Asignar contraseñas","Comprimir paquetes","Cambiar MAC","Enviar tráfico hacia otras redes"],"answer":3,"explanation":"Se utiliza cuando no hay una ruta más específica.","origin":"GENERADA","source":"L01, anexo 1, tema 4"},
  {"id":"T04-013","tema":4,"category":"Redes","level":"B","question":"¿Qué proporciona DNS?","options":["Cifrado de discos","Resolución de nombres","Alimentación eléctrica","Copias completas"],"answer":1,"explanation":"Relaciona nombres con registros, incluidas direcciones.","origin":"GENERADA","source":"L01, anexo 1, tema 4"},
  {"id":"T04-014","tema":4,"category":"Redes","level":"B","question":"¿Qué hace DHCP?","options":["Facilitar configuración IP automáticamente","Cifrar HTTPS","Escanear discos","Editar audio"],"answer":0,"explanation":"Puede entregar IP, máscara, gateway y DNS.","origin":"GENERADA","source":"L01, anexo 1, tema 4"},
  {"id":"T04-015","tema":4,"category":"Redes","level":"B","question":"¿Para qué sirve NAT?","options":["Dar nombres a usuarios","Sincronizar vídeo","Traducir direcciones de red","Cifrar automáticamente el tráfico"],"answer":2,"explanation":"No es por sí solo una garantía de seguridad.","origin":"GENERADA","source":"L01, anexo 1, tema 4"},
  {"id":"T04-016","tema":4,"category":"Redes","level":"M","question":"¿Qué crea una VLAN?","options":["Una copia de seguridad","Más RAM","Un dominio AD","Segmentación lógica de capa 2"],"answer":3,"explanation":"El tráfico entre VLAN requiere encaminamiento.","origin":"GENERADA","source":"L01, anexo 1, tema 4"},
  {"id":"T04-017","tema":4,"category":"Redes","level":"B","question":"¿Qué distingue un router de un switch básico de capa 2?","options":["El router solo imprime","Encaminamiento entre redes frente a conmutación por MAC","Ninguno usa tablas","El switch cifra siempre"],"answer":1,"explanation":"Sus decisiones usan información de capas distintas.","origin":"GENERADA","source":"L01, anexo 1, tema 4"},
  {"id":"T04-018","tema":4,"category":"Redes","level":"M","question":"¿Qué elemento filtra tráfico según reglas?","options":["Cortafuegos","Teclado","Disipador","UPS"],"answer":0,"explanation":"Permite o bloquea comunicaciones definidas.","origin":"GENERADA","source":"L01, anexo 1, tema 4"},
  {"id":"T04-019","tema":4,"category":"Redes","level":"P","question":"Para varios kilómetros sin repetidores, ¿qué medio suele ser adecuado?","options":["USB","UTP de oficina","Fibra monomodo con ópticas compatibles","Cable de ratón"],"answer":2,"explanation":"Deben ajustarse alcance y presupuesto óptico.","origin":"GENERADA","source":"L01, anexo 1, tema 4"},
  {"id":"T04-020","tema":4,"category":"Redes","level":"P","question":"¿Qué correspondencia de diagnóstico es correcta en Windows?","options":["ping edita DNS","tracert renueva DHCP","nslookup mide temperatura","ipconfig muestra IP; ping prueba ICMP; tracert ruta; nslookup DNS"],"answer":3,"explanation":"Son pruebas distintas; un ping fallido no demuestra por sí solo caída.","origin":"GENERADA","source":"L01, anexo 1, tema 4"},
  {"id":"T05-001","tema":5,"category":"Redes","level":"B","question":"¿Qué relación existe entre web e Internet?","options":["La web es un servicio que utiliza Internet","Son siempre lo mismo","Internet solo lleva HTML","La web sustituye TCP/IP"],"answer":0,"explanation":"Internet transporta muchos servicios, no solo web.","origin":"GENERADA","source":"L01, anexo 1, tema 5"},
  {"id":"T05-002","tema":5,"category":"Redes","level":"B","question":"¿Cuál es la función de HTTP?","options":["Dar alimentación","Intercambiar peticiones y respuestas web","Gestionar discos RAID","Crear usuarios locales"],"answer":1,"explanation":"Es un protocolo de aplicación.","origin":"GENERADA","source":"L01, anexo 1, tema 5"},
  {"id":"T05-003","tema":5,"category":"Redes","level":"B","question":"¿Qué añade HTTPS a HTTP?","options":["Compresión obligatoria","Más RAM","Protección mediante TLS","Ausencia de servidores"],"answer":2,"explanation":"Protege la comunicación y permite autenticar al servidor.","origin":"GENERADA","source":"L01, anexo 1, tema 5"},
  {"id":"T05-004","tema":5,"category":"Redes","level":"M","question":"¿Qué garantiza el candado HTTPS correctamente validado?","options":["Que el contenido es verdadero","Que no hay phishing","Que la empresa es honesta","Canal protegido hacia el sitio identificado por el certificado"],"answer":3,"explanation":"Un sitio malicioso también puede tener certificado válido.","origin":"GENERADA","source":"L01, anexo 1, tema 5"},
  {"id":"T05-005","tema":5,"category":"Redes","level":"B","question":"¿Qué protocolo se utiliza para enviar y transferir correo?","options":["SMTP","IMAP","POP3","ICMP"],"answer":0,"explanation":"SMTP se ocupa del envío/transporte de mensajes.","origin":"GENERADA","source":"L01, anexo 1, tema 5"},
  {"id":"T05-006","tema":5,"category":"Redes","level":"M","question":"¿Qué ventaja típica tiene IMAP?","options":["No admite carpetas","Sincronizar buzón y estado entre dispositivos","Solo envía correo","Borra siempre todo al leer"],"answer":1,"explanation":"Mantiene normalmente los mensajes en el servidor.","origin":"GENERADA","source":"L01, anexo 1, tema 5"},
  {"id":"T05-007","tema":5,"category":"Redes","level":"M","question":"¿Qué describe mejor POP3?","options":["Gestión de VLAN","Transporte de vídeo","Acceso para descargar mensajes del buzón","Emisión de certificados"],"answer":2,"explanation":"La conservación en servidor depende de configuración.","origin":"GENERADA","source":"L01, anexo 1, tema 5"},
  {"id":"T05-008","tema":5,"category":"Redes","level":"B","question":"¿Qué registro DNS indica servidores de correo de un dominio?","options":["A","AAAA","PTR","MX"],"answer":3,"explanation":"MX especifica destinos de recepción del correo.","origin":"GENERADA","source":"L01, anexo 1, tema 5"},
  {"id":"T05-009","tema":5,"category":"Redes","level":"B","question":"¿Qué registro DNS relaciona nombre con dirección IPv4?","options":["A","MX","TXT exclusivamente","CNAME exclusivamente"],"answer":0,"explanation":"AAAA cumple esa función para IPv6.","origin":"GENERADA","source":"L01, anexo 1, tema 5"},
  {"id":"T05-010","tema":5,"category":"Redes","level":"M","question":"¿Qué aporta TCP?","options":["Entrega siempre instantánea","Flujo fiable y ordenado de bytes","Cifrado de contenido por defecto","Direcciones de 128 bits"],"answer":1,"explanation":"Puede retransmitir; no proporciona cifrado por sí mismo.","origin":"GENERADA","source":"L01, anexo 1, tema 5"},
  {"id":"T05-011","tema":5,"category":"Redes","level":"B","question":"¿Qué puerto se asocia habitualmente a HTTPS?","options":["25","110","443","53"],"answer":2,"explanation":"Es el puerto de servicio habitual; puede configurarse otro.","origin":"GENERADA","source":"L01, anexo 1, tema 5"},
  {"id":"T05-012","tema":5,"category":"Redes","level":"B","question":"¿Qué puerto se asocia habitualmente a SSH?","options":["80","443","21","22"],"answer":3,"explanation":"Es el puerto predeterminado habitual.","origin":"GENERADA","source":"L01, anexo 1, tema 5"},
  {"id":"T05-013","tema":5,"category":"Redes","level":"M","question":"¿Qué riesgo presenta FTP sin protección adicional?","options":["Credenciales y datos pueden viajar sin cifrar","No puede transferir archivos","Siempre usa TLS","Solo sirve para vídeo"],"answer":0,"explanation":"No confundir FTP con FTPS o SFTP.","origin":"GENERADA","source":"L01, anexo 1, tema 5"},
  {"id":"T05-014","tema":5,"category":"Redes","level":"M","question":"¿Qué es SFTP?","options":["FTP sobre ICMP","Transferencia de archivos mediante SSH","Sinónimo de FTP sin cifrar","Un servidor DNS"],"answer":1,"explanation":"No es FTP sobre TLS: eso corresponde a FTPS.","origin":"GENERADA","source":"L01, anexo 1, tema 5"},
  {"id":"T05-015","tema":5,"category":"Redes","level":"B","question":"¿Qué vincula un certificado digital de servidor?","options":["Contraseña con disco","GPU con códec","Identidad/nombre con una clave pública","Archivo con clave privada pública"],"answer":2,"explanation":"La firma del emisor permite validar esa vinculación.","origin":"GENERADA","source":"L01, anexo 1, tema 5"},
  {"id":"T05-016","tema":5,"category":"Redes","level":"P","question":"Un certificado válido está emitido para otro nombre. ¿Qué ocurre?","options":["Da igual con TLS","Se convierte en DNS","Mejora seguridad","Falla la validación de identidad del servidor"],"answer":3,"explanation":"El nombre debe corresponder al sitio solicitado.","origin":"GENERADA","source":"L01, anexo 1, tema 5"},
  {"id":"T05-017","tema":5,"category":"Redes","level":"P","question":"Aparece aviso de certificado caducado. ¿Qué hacer?","options":["Investigar fecha/certificado y comunicar, sin ignorarlo rutinariamente","Desactivar TLS","Compartir contraseña","Aceptar siempre"],"answer":0,"explanation":"También conviene comprobar el reloj del equipo.","origin":"GENERADA","source":"L01, anexo 1, tema 5"},
  {"id":"T05-018","tema":5,"category":"Redes","level":"B","question":"¿Qué clave de un certificado debe mantenerse secreta?","options":["La pública","La privada","El número de serie","El nombre del emisor"],"answer":1,"explanation":"Su exposición permite usos no autorizados.","origin":"GENERADA","source":"L01, anexo 1, tema 5"},
  {"id":"T05-019","tema":5,"category":"Redes","level":"P","question":"Hay conectividad IP, pero falla acceso por nombre. ¿Qué comprobar?","options":["Temperatura CPU","RAID","Resolución DNS","Ratón"],"answer":2,"explanation":"Conviene probar nombres y registros con herramientas DNS.","origin":"GENERADA","source":"L01, anexo 1, tema 5"},
  {"id":"T05-020","tema":5,"category":"Redes","level":"M","question":"¿Qué práctica mejora navegación segura?","options":["Instalar extensiones de cualquier origen","Ignorar alertas TLS","Desactivar actualizaciones","Verificar URL, usar software actualizado y evitar descargas dudosas"],"answer":3,"explanation":"La protección del canal no evita toda ingeniería social.","origin":"GENERADA","source":"L01, anexo 1, tema 5"},
  {"id":"T06-001","tema":6,"category":"Sistemas","level":"B","question":"¿Qué es una incidencia?","options":["Alta planificada","Interrupción o degradación no prevista de un servicio","Cualquier reunión","Compra aprobada"],"answer":1,"explanation":"El objetivo inicial es restaurar el servicio.","origin":"GENERADA","source":"L01, anexo 1, tema 6"},
  {"id":"T06-002","tema":6,"category":"Sistemas","level":"B","question":"¿Qué es una petición de servicio?","options":["Siempre una caída","Un ataque confirmado","Solicitud habitual de información, acceso o prestación","Fallo de hardware necesariamente"],"answer":2,"explanation":"Puede tramitarse por un procedimiento predefinido.","origin":"GENERADA","source":"L01, anexo 1, tema 6"},
  {"id":"T06-003","tema":6,"category":"Sistemas","level":"M","question":"¿Qué representa un problema en gestión de servicios?","options":["Causa real o potencial de una o varias incidencias","Cualquier usuario nuevo","Un activo","Un turno"],"answer":0,"explanation":"Investigar la causa ayuda a evitar recurrencias.","origin":"GENERADA","source":"L01, anexo 1, tema 6"},
  {"id":"T06-004","tema":6,"category":"Sistemas","level":"B","question":"¿Qué es un cambio?","options":["Ticket sin responsable","Copia del inventario","Solo reiniciar ratón","Modificación controlada que puede afectar al servicio"],"answer":3,"explanation":"Debe valorar riesgo y autorización aplicable.","origin":"GENERADA","source":"L01, anexo 1, tema 6"},
  {"id":"T06-005","tema":6,"category":"Sistemas","level":"P","question":"Un usuario solicita instalar software aprobado. ¿Clasificación habitual?","options":["Incidente de malware","Petición de servicio","Problema raíz confirmado","Accidente laboral"],"answer":1,"explanation":"No hay necesariamente una interrupción.","origin":"GENERADA","source":"L01, anexo 1, tema 6"},
  {"id":"T06-006","tema":6,"category":"Sistemas","level":"P","question":"Fallan repetidamente varias estaciones por la misma causa. ¿Qué procede además de resolver?","options":["Investigar el problema común","Cerrar sin explicar","Borrar tickets anteriores","Cambiar usuarios"],"answer":0,"explanation":"La recurrencia justifica análisis de causa raíz.","origin":"GENERADA","source":"L01, anexo 1, tema 6"},
  {"id":"T06-007","tema":6,"category":"Sistemas","level":"B","question":"¿Para qué sirve un identificador único de ticket?","options":["Cifrar WiFi","Aumentar prioridad automáticamente","Seguir y relacionar actuaciones","Reemplazar contraseña"],"answer":2,"explanation":"Facilita trazabilidad y comunicación.","origin":"GENERADA","source":"L01, anexo 1, tema 6"},
  {"id":"T06-008","tema":6,"category":"Sistemas","level":"B","question":"¿Qué debe incluir el registro inicial?","options":["Contraseña del usuario","Datos personales irrelevantes","Solo «no funciona»","Servicio, síntomas, alcance, momento y contacto necesario"],"answer":3,"explanation":"Permite reproducir y evaluar la incidencia.","origin":"GENERADA","source":"L01, anexo 1, tema 6"},
  {"id":"T06-009","tema":6,"category":"Sistemas","level":"M","question":"¿Cómo establecer prioridad normalmente?","options":["Según simpatía","Combinando impacto y urgencia","Solo por antigüedad del PC","Por número de letras"],"answer":1,"explanation":"Afectación y tiempo disponible guían la prioridad.","origin":"GENERADA","source":"L01, anexo 1, tema 6"},
  {"id":"T06-010","tema":6,"category":"Sistemas","level":"P","question":"¿Qué merece más prioridad durante un directo?","options":["Caída del servicio crítico de emisión","Cambio de fondo","Instalación no urgente","Duda documental aplazable"],"answer":0,"explanation":"El impacto operativo y la urgencia son mayores.","origin":"GENERADA","source":"L01, anexo 1, tema 6"},
  {"id":"T06-011","tema":6,"category":"Sistemas","level":"M","question":"¿Qué significa escalado funcional?","options":["Cambiar fecha sin aviso","Comprar hardware","Derivar a personal con competencia técnica necesaria","Cerrar el ticket"],"answer":2,"explanation":"Traslada el caso a otro nivel o especialista.","origin":"GENERADA","source":"L01, anexo 1, tema 6"},
  {"id":"T06-012","tema":6,"category":"Sistemas","level":"M","question":"¿Qué caracteriza un escalado jerárquico?","options":["Formatear equipo","Cambiar VLAN","Sustituir monitor","Involucrar responsables por impacto, decisión o plazos"],"answer":3,"explanation":"No equivale necesariamente a cambiar de especialidad.","origin":"GENERADA","source":"L01, anexo 1, tema 6"},
  {"id":"T06-013","tema":6,"category":"Sistemas","level":"P","question":"¿Qué acompañará un ticket escalado?","options":["Solo «urgente»","Evidencias, pruebas realizadas, resultados y contexto","Contraseña compartida","Historial personal completo"],"answer":1,"explanation":"Evita repetir pruebas y agiliza diagnóstico.","origin":"GENERADA","source":"L01, anexo 1, tema 6"},
  {"id":"T06-014","tema":6,"category":"Sistemas","level":"P","question":"¿Qué preguntar primero ante «no funciona»?","options":["Qué esperaba, qué ocurre y desde cuándo","La contraseña","Datos familiares","Que reinstale todo"],"answer":0,"explanation":"Se concreta el síntoma antes de actuar.","origin":"GENERADA","source":"L01, anexo 1, tema 6"},
  {"id":"T06-015","tema":6,"category":"Sistemas","level":"M","question":"¿Qué ayuda a aislar una avería?","options":["Cambiar todo a la vez","Ocultar mensajes","Probar hipótesis cambiando una variable cada vez","Borrar evidencias"],"answer":2,"explanation":"Permite atribuir el resultado a una causa.","origin":"GENERADA","source":"L01, anexo 1, tema 6"},
  {"id":"T06-016","tema":6,"category":"Sistemas","level":"P","question":"Una solución temporal restaura el servicio. ¿Qué registrar?","options":["Nada","Solo el nombre del técnico","Que la causa está eliminada sin comprobar","Workaround, límites y seguimiento de causa"],"answer":3,"explanation":"Restaurar no implica resolver definitivamente el problema.","origin":"GENERADA","source":"L01, anexo 1, tema 6"},
  {"id":"T06-017","tema":6,"category":"Sistemas","level":"B","question":"¿Qué comunicación es adecuada?","options":["Culpar al usuario","Explicar claramente estado y siguientes pasos","Prometer tiempos imposibles","Usar jerga sin contexto"],"answer":1,"explanation":"Ayuda a gestionar expectativas y colaboración.","origin":"GENERADA","source":"L01, anexo 1, tema 6"},
  {"id":"T06-018","tema":6,"category":"Sistemas","level":"P","question":"¿Cuándo cerrar una incidencia?","options":["Tras verificar recuperación y documentar, según procedimiento","Al derivarla siempre","Al recibirla","Antes de probar"],"answer":0,"explanation":"Debe existir evidencia de resolución o cierre justificado.","origin":"GENERADA","source":"L01, anexo 1, tema 6"},
  {"id":"T06-019","tema":6,"category":"Sistemas","level":"M","question":"¿Qué aporta una herramienta de ticketing?","options":["Sustituye todo diagnóstico","Corrige hardware automáticamente","Registro, asignación, estados y seguimiento","Elimina comunicación"],"answer":2,"explanation":"Organiza el trabajo sin reemplazar criterio técnico.","origin":"GENERADA","source":"L01, anexo 1, tema 6"},
  {"id":"T06-020","tema":6,"category":"Sistemas","level":"P","question":"El usuario ofrece su contraseña para soporte. ¿Qué hacer?","options":["Guardarla en ticket","Enviarla al equipo","Usarla en cuenta compartida","Rechazarla y usar el procedimiento autorizado"],"answer":3,"explanation":"El soporte no debe recopilar secretos innecesarios.","origin":"GENERADA","source":"L01, anexo 1, tema 6"},
  {"id":"T07-001","tema":7,"category":"Sistemas","level":"B","question":"¿Qué significa CIA en seguridad?","options":["Certificado, IP, acceso","Copia, Internet, archivo","CPU, integridad, antivirus","Confidencialidad, integridad y disponibilidad"],"answer":3,"explanation":"Son tres objetivos básicos de protección.","origin":"GENERADA","source":"L01, anexo 1, tema 7"},
  {"id":"T07-002","tema":7,"category":"Sistemas","level":"B","question":"¿Qué protege la confidencialidad?","options":["Acceso a información solo por autorizados","Velocidad de vídeo","Existencia de backups únicamente","Tamaño de disco"],"answer":0,"explanation":"Evita divulgación indebida.","origin":"GENERADA","source":"L01, anexo 1, tema 7"},
  {"id":"T07-003","tema":7,"category":"Sistemas","level":"M","question":"Alterar sin permiso una noticia almacenada afecta directamente a…","options":["Disponibilidad solamente","Resolución","Integridad","Latencia"],"answer":2,"explanation":"La integridad protege contra modificaciones no autorizadas.","origin":"GENERADA","source":"L01, anexo 1, tema 7"},
  {"id":"T07-004","tema":7,"category":"Sistemas","level":"M","question":"Una caída impide consultar documentos. ¿Qué propiedad se afecta?","options":["Confidencialidad necesariamente","Disponibilidad","Compresión","Autenticidad del códec"],"answer":1,"explanation":"El servicio no está accesible cuando se necesita.","origin":"GENERADA","source":"L01, anexo 1, tema 7"},
  {"id":"T07-005","tema":7,"category":"Sistemas","level":"B","question":"¿Qué caracteriza una contraseña adecuada?","options":["Misma en todos los servicios","Nombre del usuario","Publicada en el ticket","Larga, difícil de adivinar y no reutilizada"],"answer":3,"explanation":"La reutilización propaga el impacto de una filtración.","origin":"GENERADA","source":"L01, anexo 1, tema 7"},
  {"id":"T07-006","tema":7,"category":"Sistemas","level":"M","question":"¿Qué combinación es MFA?","options":["Contraseña y token de posesión","Contraseña y otra contraseña","Usuario y apellido","Dos preguntas secretas"],"answer":0,"explanation":"Combina categorías de factor diferentes.","origin":"GENERADA","source":"L01, anexo 1, tema 7"},
  {"id":"T07-007","tema":7,"category":"Sistemas","level":"P","question":"Llega una solicitud MFA inesperada. ¿Qué hacer?","options":["Aprobar para que cese","Repetir contraseña por correo","Rechazar y comunicar posible compromiso","Desactivar MFA"],"answer":2,"explanation":"Puede ser un intento de acceso no autorizado.","origin":"GENERADA","source":"L01, anexo 1, tema 7"},
  {"id":"T07-008","tema":7,"category":"Sistemas","level":"B","question":"¿Qué exige mínimo privilegio?","options":["Todos administradores","Solo permisos necesarios para la función","Sin permisos nunca","Compartir cuentas"],"answer":1,"explanation":"Reduce exposición y daño potencial.","origin":"GENERADA","source":"L01, anexo 1, tema 7"},
  {"id":"T07-009","tema":7,"category":"Sistemas","level":"M","question":"¿Para qué sirven los parches de seguridad?","options":["Para añadir siempre funciones","Para eliminar backups","Para reemplazar permisos","Corregir vulnerabilidades conocidas"],"answer":3,"explanation":"Deben desplegarse con validación y seguimiento.","origin":"GENERADA","source":"L01, anexo 1, tema 7"},
  {"id":"T07-010","tema":7,"category":"Sistemas","level":"M","question":"¿Qué añade normalmente EDR respecto de antivirus básico?","options":["Telemetría y capacidades de detección/respuesta en endpoints","Inmunidad absoluta","Alimentación redundante","Resolución DNS"],"answer":0,"explanation":"Detecta comportamientos y permite respuesta; no garantiza protección total.","origin":"GENERADA","source":"L01, anexo 1, tema 7"},
  {"id":"T07-011","tema":7,"category":"Sistemas","level":"B","question":"¿Qué es ransomware?","options":["Un formato de vídeo","Una copia externa","Malware que puede bloquear/cifrar y extorsionar","Un protocolo seguro"],"answer":2,"explanation":"También puede acompañarse de robo de información.","origin":"GENERADA","source":"L01, anexo 1, tema 7"},
  {"id":"T07-012","tema":7,"category":"Sistemas","level":"P","question":"Se detecta cifrado masivo sospechoso. ¿Actuación inicial adecuada?","options":["Abrir más archivos","Aislar según protocolo y avisar al equipo de seguridad","Pagar automáticamente","Borrar todas las evidencias"],"answer":1,"explanation":"Se limita propagación preservando evidencia.","origin":"GENERADA","source":"L01, anexo 1, tema 7"},
  {"id":"T07-013","tema":7,"category":"Sistemas","level":"B","question":"¿Qué caracteriza al phishing?","options":["Un disco lento","Una partición","Un driver","Engaño para obtener secretos o provocar acciones"],"answer":3,"explanation":"Puede usar correo, web u otros canales.","origin":"GENERADA","source":"L01, anexo 1, tema 7"},
  {"id":"T07-014","tema":7,"category":"Sistemas","level":"P","question":"Un correo exige cambiar la clave en un enlace urgente. ¿Qué hacer?","options":["Verificar por canal conocido y reportar","Pulsar por urgencia","Responder con contraseña","Reenviar a todos"],"answer":0,"explanation":"Evita validar la petición mediante el propio enlace sospechoso.","origin":"GENERADA","source":"L01, anexo 1, tema 7"},
  {"id":"T07-015","tema":7,"category":"Sistemas","level":"M","question":"¿Qué diferencia amenaza y vulnerabilidad?","options":["Son sinónimos exactos","La amenaza siempre es un parche","La amenaza puede explotar una debilidad o vulnerabilidad","Vulnerabilidad es una copia"],"answer":2,"explanation":"El riesgo depende también de impacto y probabilidad.","origin":"GENERADA","source":"L01, anexo 1, tema 7"},
  {"id":"T07-016","tema":7,"category":"Sistemas","level":"M","question":"¿Qué protege el cifrado de disco de un portátil apagado?","options":["Toda navegación","Datos en reposo frente a acceso sin claves","Cualquier malware en ejecución","Todos los errores de usuario"],"answer":1,"explanation":"No sustituye el control de acceso durante la sesión.","origin":"GENERADA","source":"L01, anexo 1, tema 7"},
  {"id":"T07-017","tema":7,"category":"Sistemas","level":"B","question":"¿Qué caracteriza una VPN corporativa segura?","options":["Antivirus obligatorio dentro del PDF","Más RAM","Almacenamiento RAID","Túnel protegido hacia recursos autorizados"],"answer":3,"explanation":"No garantiza que los extremos estén libres de malware.","origin":"GENERADA","source":"L01, anexo 1, tema 7"},
  {"id":"T07-018","tema":7,"category":"Sistemas","level":"M","question":"¿Qué regla de firewall sigue mínimo acceso?","options":["Permitir solo comunicaciones justificadas","Abrir todos los puertos","Quitar logs","Permitir todo origen siempre"],"answer":0,"explanation":"Reduce exposición de servicios.","origin":"GENERADA","source":"L01, anexo 1, tema 7"},
  {"id":"T07-019","tema":7,"category":"Sistemas","level":"P","question":"¿Qué backup resiste mejor el cifrado del equipo?","options":["Carpeta local siempre montada","Disco con mismas credenciales siempre conectado","Copia separada, protegida y probada","Acceso directo al archivo"],"answer":2,"explanation":"Separación y controles dificultan que el ataque alcance la copia.","origin":"GENERADA","source":"L01, anexo 1, tema 7"},
  {"id":"T07-020","tema":7,"category":"Sistemas","level":"P","question":"Se pierde un portátil corporativo. ¿Qué hacer?","options":["Esperar una semana","Comunicar de inmediato y aplicar protocolo de pérdida","Ocultarlo","Compartir claves para localizarlo"],"answer":1,"explanation":"Puede requerir revocar accesos y evaluar datos afectados.","origin":"GENERADA","source":"L01, anexo 1, tema 7"},
  {"id":"T08-001","tema":8,"category":"Desarrollo","level":"B","question":"En una tabla, ¿qué es un registro?","options":["Un índice","Una columna","Una fila","Una base completa"],"answer":2,"explanation":"Representa una ocurrencia de la entidad.","origin":"GENERADA","source":"L01, anexo 1, tema 8"},
  {"id":"T08-002","tema":8,"category":"Desarrollo","level":"B","question":"¿Qué representa un campo o columna?","options":["Un atributo con valores de un dominio/tipo","Toda la base","Una unión","Una copia física"],"answer":0,"explanation":"Define una característica de los registros.","origin":"GENERADA","source":"L01, anexo 1, tema 8"},
  {"id":"T08-003","tema":8,"category":"Desarrollo","level":"B","question":"¿Qué exige una clave primaria?","options":["Valores duplicados","Identificación única y sin NULL","Ser siempre una sola columna","Dos claves primarias por tabla"],"answer":1,"explanation":"Puede ser compuesta por varias columnas.","origin":"GENERADA","source":"L01, anexo 1, tema 8"},
  {"id":"T08-004","tema":8,"category":"Desarrollo","level":"M","question":"¿Qué función cumple una clave foránea?","options":["Ordenar por fecha","Cifrar registros","Aumentar RAM","Relacionar datos y controlar referencias"],"answer":3,"explanation":"Referencia una clave válida según restricciones del esquema.","origin":"GENERADA","source":"L01, anexo 1, tema 8"},
  {"id":"T08-005","tema":8,"category":"Desarrollo","level":"M","question":"¿Qué describe una relación uno a muchos?","options":["Todos tienen un solo hijo","Ninguna clave","Un departamento puede tener varios empleados","Todas las tablas son iguales"],"answer":2,"explanation":"Cada empleado puede asociarse a un departamento en ese modelo.","origin":"GENERADA","source":"L01, anexo 1, tema 8"},
  {"id":"T08-006","tema":8,"category":"Desarrollo","level":"M","question":"¿Cómo representar una relación muchos a muchos?","options":["Tabla intermedia con referencias a ambas entidades","Una cadena gigante","Duplicar toda la base","Eliminar claves"],"answer":0,"explanation":"La tabla de enlace representa las asociaciones.","origin":"GENERADA","source":"L01, anexo 1, tema 8"},
  {"id":"T08-007","tema":8,"category":"Desarrollo","level":"P","question":"Insertar un hijo con referencia inexistente y FK activa produce…","options":["Una unión automática","Rechazo por integridad referencial","Cifrado","Copia del padre automática"],"answer":1,"explanation":"La referencia debe cumplir la restricción.","origin":"GENERADA","source":"L01, anexo 1, tema 8"},
  {"id":"T08-008","tema":8,"category":"Desarrollo","level":"M","question":"¿Qué busca la normalización básica?","options":["Duplicar datos siempre","Eliminar todas las tablas","Ordenar físicamente el disco","Reducir redundancia y anomalías"],"answer":3,"explanation":"Organiza atributos y dependencias.","origin":"GENERADA","source":"L01, anexo 1, tema 8"},
  {"id":"T08-009","tema":8,"category":"Desarrollo","level":"M","question":"¿Qué evita la primera forma normal en el modelo básico?","options":["Filas","Claves","Grupos repetidos o listas de valores en una celda","Tipos de datos"],"answer":2,"explanation":"Se trabaja con valores atómicos respecto del dominio elegido.","origin":"GENERADA","source":"L01, anexo 1, tema 8"},
  {"id":"T08-010","tema":8,"category":"Desarrollo","level":"B","question":"¿Qué instrucción consulta datos?","options":["SELECT","INSERT","UPDATE","DELETE"],"answer":0,"explanation":"SELECT recupera resultados sin modificar las filas por sí mismo.","origin":"GENERADA","source":"L01, anexo 1, tema 8"},
  {"id":"T08-011","tema":8,"category":"Desarrollo","level":"P","question":"¿Qué inserta una fila en `personas(nombre)`?","options":["`ADD personas 'Ana'`","`INSERT INTO personas(nombre) VALUES ('Ana');`","`UPDATE personas('Ana');`","`SELECT INSERT 'Ana';`"],"answer":1,"explanation":"Se indican tabla, columnas y valores.","origin":"GENERADA","source":"L01, anexo 1, tema 8"},
  {"id":"T08-012","tema":8,"category":"Desarrollo","level":"P","question":"¿Qué efecto tiene `UPDATE personas SET activo=0;` sin WHERE?","options":["Solo primera fila","Solo filas NULL","No cambia nada siempre","Actualiza todas las filas de la tabla"],"answer":3,"explanation":"Omitir el filtro puede producir modificaciones masivas.","origin":"GENERADA","source":"L01, anexo 1, tema 8"},
  {"id":"T08-013","tema":8,"category":"Desarrollo","level":"P","question":"¿Qué hace `DELETE FROM personas WHERE id=5;`?","options":["Borra siempre la tabla","Crea una clave","Elimina las filas que cumplan el filtro","Borra la columna id"],"answer":2,"explanation":"DELETE elimina datos, no la definición de tabla.","origin":"GENERADA","source":"L01, anexo 1, tema 8"},
  {"id":"T08-014","tema":8,"category":"Desarrollo","level":"P","question":"¿Cómo seleccionar filas cuyo `correo` es NULL?","options":["`WHERE correo IS NULL`","`WHERE correo = NULL`","`WHERE correo == NULL`","`WHERE correo = 'NULL'`"],"answer":0,"explanation":"NULL requiere el predicado correspondiente, no igualdad ordinaria.","origin":"GENERADA","source":"L01, anexo 1, tema 8"},
  {"id":"T08-015","tema":8,"category":"Desarrollo","level":"P","question":"¿Qué patrón LIKE selecciona nombres que empiezan por la letra literal `a`?","options":["`'%a'`","`'a%'`","`'%a%'`","`'_'`"],"answer":1,"explanation":"`%` representa cualquier secuencia tras el prefijo; mayúsculas dependen de intercalación.","origin":"GENERADA","source":"L01, anexo 1, tema 8"},
  {"id":"T08-016","tema":8,"category":"Desarrollo","level":"P","question":"¿Qué ordena salario de mayor a menor?","options":["`GROUP BY salario`","`WHERE salario DESC`","`ORDER BY salario ASC`","`ORDER BY salario DESC`"],"answer":3,"explanation":"DESC establece orden descendente.","origin":"GENERADA","source":"L01, anexo 1, tema 8"},
  {"id":"T08-017","tema":8,"category":"Desarrollo","level":"P","question":"Hay 5 filas y 2 tienen `correo` NULL. ¿Valores de COUNT(*) y COUNT(correo)?","options":["3 y 5","5 y 5","5 y 3","3 y 3"],"answer":2,"explanation":"COUNT(columna) excluye NULL; COUNT(*) cuenta filas.","origin":"GENERADA","source":"L01, anexo 1, tema 8"},
  {"id":"T08-018","tema":8,"category":"Desarrollo","level":"M","question":"¿Qué diferencia WHERE y HAVING?","options":["WHERE filtra filas; HAVING filtra grupos","Ambos solo ordenan","HAVING crea índices","WHERE solo recibe sumas"],"answer":0,"explanation":"El filtrado de grupos sigue a la agregación.","origin":"GENERADA","source":"L01, anexo 1, tema 8"},
  {"id":"T08-019","tema":8,"category":"Desarrollo","level":"M","question":"¿Qué conserva LEFT JOIN aunque no haya coincidencia?","options":["Todas las derechas siempre","Todas las filas izquierdas","Solo coincidencias","Ninguna fila"],"answer":1,"explanation":"Las columnas derechas sin pareja quedan a NULL.","origin":"GENERADA","source":"L01, anexo 1, tema 8"},
  {"id":"T08-020","tema":8,"category":"Desarrollo","level":"M","question":"¿Qué modelo es habitual en una base documental NoSQL?","options":["Solo tablas con SQL obligatorio","Solo archivos de audio","Exclusivamente claves primarias numéricas","Documentos con estructura flexible"],"answer":3,"explanation":"NoSQL engloba varios modelos; no significa ausencia de estructura.","origin":"GENERADA","source":"L01, anexo 1, tema 8"},
  {"id":"T09-001","tema":9,"category":"Desarrollo","level":"B","question":"¿Qué aporta automatizar una tarea repetitiva?","options":["Elimina toda revisión","Reemplaza permisos","Impide errores siempre","Repetibilidad y menor trabajo manual"],"answer":3,"explanation":"Los scripts también necesitan validación y control de errores.","origin":"GENERADA","source":"L01, anexo 1, tema 9"},
  {"id":"T09-002","tema":9,"category":"Desarrollo","level":"P","question":"Python: `cantidad = 3; cantidad += 2`. ¿Valor final?","options":["5","3","2","32"],"answer":0,"explanation":"Se suma 2 al valor previo.","origin":"GENERADA","source":"L01, anexo 1, tema 9"},
  {"id":"T09-003","tema":9,"category":"Desarrollo","level":"P","question":"Python: `type('12')` corresponde a…","options":["int","float","str","bool"],"answer":2,"explanation":"Las comillas crean una cadena.","origin":"GENERADA","source":"L01, anexo 1, tema 9"},
  {"id":"T09-004","tema":9,"category":"Desarrollo","level":"B","question":"¿Qué estructura selecciona una rama según condición?","options":["import","if/else","comentario","return únicamente"],"answer":1,"explanation":"Permite ejecución condicional.","origin":"GENERADA","source":"L01, anexo 1, tema 9"},
  {"id":"T09-005","tema":9,"category":"Desarrollo","level":"P","question":"Python: ¿qué valores recorre `range(3)`?","options":["1,2,3","0,1,2,3","Solo 3","0,1,2"],"answer":3,"explanation":"El extremo superior se excluye.","origin":"GENERADA","source":"L01, anexo 1, tema 9"},
  {"id":"T09-006","tema":9,"category":"Desarrollo","level":"M","question":"¿Qué puede causar un while infinito?","options":["No cambiar una condición que sigue siendo verdadera","Definir una función","Usar UTF-8","Declarar lista vacía"],"answer":0,"explanation":"La condición debe poder dejar de cumplirse.","origin":"GENERADA","source":"L01, anexo 1, tema 9"},
  {"id":"T09-007","tema":9,"category":"Desarrollo","level":"B","question":"¿Para qué sirve una función?","options":["Solo guardar contraseñas","Solo imprimir","Encapsular una operación con parámetros y posible resultado","Sustituir el sistema operativo"],"answer":2,"explanation":"Facilita reutilización de una operación definida.","origin":"GENERADA","source":"L01, anexo 1, tema 9"},
  {"id":"T09-008","tema":9,"category":"Desarrollo","level":"P","question":"Python: convertir `int('abc')` requiere controlar normalmente…","options":["NameError siempre","ValueError","Ningún error posible","Un reinicio"],"answer":1,"explanation":"No representa un entero válido.","origin":"GENERADA","source":"L01, anexo 1, tema 9"},
  {"id":"T09-009","tema":9,"category":"Desarrollo","level":"M","question":"¿Qué debe hacer un script que falla al copiar un archivo crítico?","options":["Marcar éxito siempre","Borrar el original","Ignorar y ocultar","Registrar fallo y evitar afirmar que la copia existe"],"answer":3,"explanation":"El error debe ser observable sin destruir datos.","origin":"GENERADA","source":"L01, anexo 1, tema 9"},
  {"id":"T09-010","tema":9,"category":"Desarrollo","level":"B","question":"¿Cómo se referencia una variable en PowerShell?","options":["`$nombre`","`%nombre` únicamente","`@variable()` siempre","`#nombre`"],"answer":0,"explanation":"El prefijo habitual es `$`.","origin":"GENERADA","source":"L01, anexo 1, tema 9"},
  {"id":"T09-011","tema":9,"category":"Desarrollo","level":"B","question":"¿Qué devuelve normalmente el pipeline de PowerShell?","options":["Solo imágenes","Solo bytes comprimidos","Objetos estructurados","Solo números"],"answer":2,"explanation":"No equivale al flujo textual clásico de Bash.","origin":"GENERADA","source":"L01, anexo 1, tema 9"},
  {"id":"T09-012","tema":9,"category":"Desarrollo","level":"P","question":"Bash: ¿qué asignación es correcta?","options":["`$nombre = Ana`","`nombre=\"Ana\"`","`set nombre := Ana`","`nombre : Ana`"],"answer":1,"explanation":"La asignación no lleva espacios alrededor de `=`.","origin":"GENERADA","source":"L01, anexo 1, tema 9"},
  {"id":"T09-013","tema":9,"category":"Desarrollo","level":"M","question":"¿Por qué entrecomillar una ruta variable en Bash?","options":["Para convertirla en JSON","Para eliminar permisos","Para borrar espacios","Para conservar espacios y evitar expansión no deseada"],"answer":3,"explanation":"Reduce interpretaciones accidentales del contenido.","origin":"GENERADA","source":"L01, anexo 1, tema 9"},
  {"id":"T09-014","tema":9,"category":"Desarrollo","level":"B","question":"¿Para qué sirve HTML?","options":["Estructurar contenido web","Cifrar discos","Asignar IP","Compilar Python"],"answer":0,"explanation":"Describe elementos y estructura del documento.","origin":"GENERADA","source":"L01, anexo 1, tema 9"},
  {"id":"T09-015","tema":9,"category":"Desarrollo","level":"B","question":"¿Para qué sirve CSS?","options":["Consultar SQL","Crear cuentas","Definir presentación y estilos","Emitir certificados"],"answer":2,"explanation":"Separa apariencia de estructura.","origin":"GENERADA","source":"L01, anexo 1, tema 9"},
  {"id":"T09-016","tema":9,"category":"Desarrollo","level":"B","question":"¿Qué permite JavaScript en una página?","options":["Solo cambiar cables","Comportamiento e interacción","Configurar BIOS directamente","Sustituir toda validación del servidor"],"answer":1,"explanation":"Puede responder a eventos y actualizar la interfaz.","origin":"GENERADA","source":"L01, anexo 1, tema 9"},
  {"id":"T09-017","tema":9,"category":"Desarrollo","level":"M","question":"¿Qué ocurre en una arquitectura cliente-servidor?","options":["Ambos deben ser el mismo proceso","Nunca usan red","El cliente solo almacena backups","El cliente solicita servicios y el servidor responde"],"answer":3,"explanation":"Describe responsabilidades de comunicación.","origin":"GENERADA","source":"L01, anexo 1, tema 9"},
  {"id":"T09-018","tema":9,"category":"Desarrollo","level":"B","question":"¿Qué es una API?","options":["Interfaz definida para interactuar con funcionalidades/datos","Un tipo de cable","Una clave privada","Una pantalla física"],"answer":0,"explanation":"No implica necesariamente interfaz gráfica.","origin":"GENERADA","source":"L01, anexo 1, tema 9"},
  {"id":"T09-019","tema":9,"category":"Desarrollo","level":"P","question":"¿Qué código HTTP indica normalmente recurso no encontrado?","options":["200","201","404","500"],"answer":2,"explanation":"500 indica fallo interno del servidor.","origin":"GENERADA","source":"L01, anexo 1, tema 9"},
  {"id":"T09-020","tema":9,"category":"Desarrollo","level":"M","question":"¿Dónde debe validarse un dato recibido de un cliente web?","options":["Solo CSS","También en el servidor, aunque haya validación cliente","Solo en el navegador","Nunca si usa HTTPS"],"answer":1,"explanation":"El cliente puede alterarse; TLS no valida la lógica del dato.","origin":"GENERADA","source":"L01, anexo 1, tema 9"},
  {"id":"T10-001","tema":10,"category":"Desarrollo","level":"B","question":"¿Qué caracteriza XML?","options":["Solo datos binarios","Solo arrays numéricos","Información estructurada mediante elementos y atributos","Un único esquema universal"],"answer":2,"explanation":"Permite vocabularios definidos para cada uso.","origin":"GENERADA","source":"L01, anexo 1, tema 10"},
  {"id":"T10-002","tema":10,"category":"Desarrollo","level":"P","question":"¿Qué fragmento XML está bien formado?","options":["`<dato>7</dato>`","`<dato>7</valor>`","`<dato>7`","`<dato></DATO>`"],"answer":0,"explanation":"Apertura y cierre deben coincidir, incluida capitalización.","origin":"GENERADA","source":"L01, anexo 1, tema 10"},
  {"id":"T10-003","tema":10,"category":"Desarrollo","level":"M","question":"¿Qué exige un documento XML bien formado?","options":["Elementos cruzados","Un elemento raíz y anidamiento correcto","Comas tras etiquetas","Todas las etiquetas vacías"],"answer":1,"explanation":"Los elementos no deben cerrarse en orden cruzado.","origin":"GENERADA","source":"L01, anexo 1, tema 10"},
  {"id":"T10-004","tema":10,"category":"Desarrollo","level":"M","question":"¿Qué distingue XML válido de solo bien formado?","options":["El válido es siempre más pequeño","Ambos implican XSD automáticamente","El válido no tiene raíz","Además satisface el esquema o DTD aplicable"],"answer":3,"explanation":"La sintaxis correcta no garantiza conformidad con un esquema.","origin":"GENERADA","source":"L01, anexo 1, tema 10"},
  {"id":"T10-005","tema":10,"category":"Desarrollo","level":"P","question":"En XML, ¿qué representa `id` en `<equipo id=\"7\"/>`?","options":["Elemento hijo","Comentario","Atributo","Tipo de codificación"],"answer":2,"explanation":"Los atributos añaden valores a un elemento.","origin":"GENERADA","source":"L01, anexo 1, tema 10"},
  {"id":"T10-006","tema":10,"category":"Desarrollo","level":"M","question":"¿Para qué sirve un espacio de nombres XML?","options":["Distinguir vocabularios con nombres que podrían coincidir","Aumentar RAM","Comprimir obligatoriamente","Cifrar etiquetas"],"answer":0,"explanation":"Evita confundir elementos homónimos.","origin":"GENERADA","source":"L01, anexo 1, tema 10"},
  {"id":"T10-007","tema":10,"category":"Desarrollo","level":"P","question":"¿Cuál es JSON válido?","options":["`{nombre:'Ana'}`","`{\"nombre\":\"Ana\"}`","`{'nombre':'Ana'}`","`{\"nombre\":\"Ana\",}`"],"answer":1,"explanation":"JSON estándar usa comillas dobles y no admite coma final.","origin":"GENERADA","source":"L01, anexo 1, tema 10"},
  {"id":"T10-008","tema":10,"category":"Desarrollo","level":"B","question":"¿Qué estructura JSON representa una lista ordenada?","options":["Objeto","Booleano","Cadena","Array"],"answer":3,"explanation":"Los arrays conservan una secuencia de valores.","origin":"GENERADA","source":"L01, anexo 1, tema 10"},
  {"id":"T10-009","tema":10,"category":"Desarrollo","level":"M","question":"¿Cuál NO es un tipo de valor JSON estándar?","options":["null","número","función","booleano"],"answer":2,"explanation":"Las funciones de JavaScript no forman parte de JSON.","origin":"GENERADA","source":"L01, anexo 1, tema 10"},
  {"id":"T10-010","tema":10,"category":"Desarrollo","level":"P","question":"¿Qué literal booleano admite JSON?","options":["`true`","`True`","`TRUE`","`verdadero`"],"answer":0,"explanation":"Los literales estándar se escriben en minúsculas.","origin":"GENERADA","source":"L01, anexo 1, tema 10"},
  {"id":"T10-011","tema":10,"category":"Desarrollo","level":"B","question":"¿Qué hace `JSON.parse(texto)`?","options":["Genera CSV","Convierte texto JSON en un valor JavaScript","Cifra el texto","Produce HTML"],"answer":1,"explanation":"El texto debe tener sintaxis JSON válida.","origin":"GENERADA","source":"L01, anexo 1, tema 10"},
  {"id":"T10-012","tema":10,"category":"Desarrollo","level":"B","question":"¿Qué hace `JSON.stringify(valor)`?","options":["Descarga XML","Crea una clave","Valida permisos","Serializa un valor compatible a texto JSON"],"answer":3,"explanation":"Hay valores no representables y casos como referencias circulares.","origin":"GENERADA","source":"L01, anexo 1, tema 10"},
  {"id":"T10-013","tema":10,"category":"Desarrollo","level":"B","question":"¿Qué representa normalmente CSV?","options":["Árbol de etiquetas","Programa compilado","Registros tabulares con campos delimitados","Disco cifrado"],"answer":2,"explanation":"El separador y la codificación deben acordarse.","origin":"GENERADA","source":"L01, anexo 1, tema 10"},
  {"id":"T10-014","tema":10,"category":"Desarrollo","level":"P","question":"En CSV separado por comas, un campo contiene una coma. ¿Qué hacer?","options":["Entrecomillarlo conforme al dialecto","Eliminar siempre la coma","Crear otra fila","Tratarla siempre como nueva columna"],"answer":0,"explanation":"Las comillas permiten incluir delimitadores dentro del campo.","origin":"GENERADA","source":"L01, anexo 1, tema 10"},
  {"id":"T10-015","tema":10,"category":"Desarrollo","level":"M","question":"¿Todo CSV usa obligatoriamente coma y UTF-8?","options":["Sí, siempre","No; existen dialectos y codificaciones distintos","Solo en Linux","Solo si tiene cabecera"],"answer":1,"explanation":"Se debe conocer el formato antes de importar.","origin":"GENERADA","source":"L01, anexo 1, tema 10"},
  {"id":"T10-016","tema":10,"category":"Desarrollo","level":"M","question":"¿Qué aporta UTF-8?","options":["Cifrado","Validación SQL","Compresión de vídeo","Codificación de caracteres Unicode de longitud variable"],"answer":3,"explanation":"No equivale a un algoritmo de cifrado.","origin":"GENERADA","source":"L01, anexo 1, tema 10"},
  {"id":"T10-017","tema":10,"category":"Desarrollo","level":"P","question":"«España» aparece con caracteres extraños tras importar. ¿Qué revisar?","options":["Procesador","VLAN","Codificación usada al escribir y leer","RAID"],"answer":2,"explanation":"Interpretar bytes con otra codificación puede producir mojibake.","origin":"GENERADA","source":"L01, anexo 1, tema 10"},
  {"id":"T10-018","tema":10,"category":"Desarrollo","level":"M","question":"¿Un JSON sintácticamente válido asegura un dato aceptable?","options":["No; hay que validar campos, tipos y reglas","Sí, incluso permisos","Sí, cualquier fecha","Sí, todo contenido"],"answer":0,"explanation":"Sintaxis y validez de negocio son controles distintos.","origin":"GENERADA","source":"L01, anexo 1, tema 10"},
  {"id":"T10-019","tema":10,"category":"Desarrollo","level":"P","question":"Exportar identificadores `0012` a una hoja requiere…","options":["Convertirlos siempre a 12","Preservarlos como texto cuando ceros sean significativos","Borrar ceros","Convertirlos a fecha"],"answer":1,"explanation":"La inferencia automática de tipo puede perder información.","origin":"GENERADA","source":"L01, anexo 1, tema 10"},
  {"id":"T10-020","tema":10,"category":"Desarrollo","level":"P","question":"Antes de una importación masiva, ¿qué es correcto?","options":["Sobrescribir sin copia","Ignorar errores","Desactivar validación","Comprobar formato, hacer prueba y prever recuperación"],"answer":3,"explanation":"Se evita introducir datos corruptos o perder los anteriores.","origin":"GENERADA","source":"L01, anexo 1, tema 10"},
  {"id":"T11-001","tema":11,"category":"Desarrollo","level":"B","question":"¿Qué representa una variable?","options":["Un valor asociado a un nombre durante ejecución","Un periférico","Un router","Una copia externa"],"answer":0,"explanation":"Su uso y mutabilidad dependen del lenguaje.","origin":"GENERADA","source":"L01, anexo 1, tema 11"},
  {"id":"T11-002","tema":11,"category":"Desarrollo","level":"B","question":"¿Qué tipo representa verdadero/falso?","options":["Cadena","Decimal","Booleano","Imagen"],"answer":2,"explanation":"Se utiliza para condiciones lógicas.","origin":"GENERADA","source":"L01, anexo 1, tema 11"},
  {"id":"T11-003","tema":11,"category":"Desarrollo","level":"M","question":"¿Qué diferencia entero y cadena numérica?","options":["Ninguna siempre","Tipo y operaciones disponibles","La cadena es siempre inválida","El entero no se almacena"],"answer":1,"explanation":"«12» y 12 pueden requerir conversión explícita.","origin":"GENERADA","source":"L01, anexo 1, tema 11"},
  {"id":"T11-004","tema":11,"category":"Desarrollo","level":"B","question":"¿Qué hace una estructura condicional?","options":["Repite siempre infinitamente","Solo declara tipos","Compila toda la aplicación","Elige ejecución según una condición"],"answer":3,"explanation":"Permite ramas alternativas.","origin":"GENERADA","source":"L01, anexo 1, tema 11"},
  {"id":"T11-005","tema":11,"category":"Desarrollo","level":"B","question":"¿Qué hace un bucle?","options":["Repite un bloque mientras se cumple su regla","Crea un disco","Cifra la RAM","Borra siempre una variable"],"answer":0,"explanation":"Puede recorrer una colección o evaluar una condición.","origin":"GENERADA","source":"L01, anexo 1, tema 11"},
  {"id":"T11-006","tema":11,"category":"Desarrollo","level":"M","question":"¿Qué diferencia parámetro y argumento?","options":["Son siempre archivos","El argumento solo es texto","Parámetro en definición; argumento en llamada","El parámetro es una clase"],"answer":2,"explanation":"Son posiciones complementarias de una función.","origin":"GENERADA","source":"L01, anexo 1, tema 11"},
  {"id":"T11-007","tema":11,"category":"Desarrollo","level":"B","question":"¿Qué hace normalmente `return`?","options":["Reinicia sistema","Devuelve resultado y termina esa ejecución de función","Siempre imprime","Crea un objeto automáticamente"],"answer":1,"explanation":"Devolver y mostrar en pantalla no son lo mismo.","origin":"GENERADA","source":"L01, anexo 1, tema 11"},
  {"id":"T11-008","tema":11,"category":"Desarrollo","level":"M","question":"¿Qué es una variable local?","options":["Siempre una constante global","Un dato en DNS","Una contraseña","Variable de ámbito limitado a su contexto"],"answer":3,"explanation":"No está necesariamente disponible fuera de la función/bloque.","origin":"GENERADA","source":"L01, anexo 1, tema 11"},
  {"id":"T11-009","tema":11,"category":"Desarrollo","level":"B","question":"En POO, ¿qué es una clase?","options":["Definición de atributos y comportamiento de sus instancias","Un registro MX","Un archivo de sonido","Un hilo físico"],"answer":0,"explanation":"Define el tipo de objetos que se crean.","origin":"GENERADA","source":"L01, anexo 1, tema 11"},
  {"id":"T11-010","tema":11,"category":"Desarrollo","level":"B","question":"¿Qué es un objeto?","options":["Solo un dato primitivo","Un comentario","Una instancia con estado/comportamiento","Una VLAN"],"answer":2,"explanation":"Se crea conforme a una clase u otro mecanismo del lenguaje.","origin":"GENERADA","source":"L01, anexo 1, tema 11"},
  {"id":"T11-011","tema":11,"category":"Desarrollo","level":"B","question":"¿Qué es un método?","options":["Un disco","Función asociada a una clase/objeto","Una IP","Una copia"],"answer":1,"explanation":"Representa comportamiento del objeto o clase.","origin":"GENERADA","source":"L01, anexo 1, tema 11"},
  {"id":"T11-012","tema":11,"category":"Desarrollo","level":"M","question":"¿Qué es encapsulación?","options":["Duplicar código","Publicar todo estado","Mezclar todas las funciones","Controlar acceso al estado interno mediante una interfaz"],"answer":3,"explanation":"Protege invariantes y reduce dependencias indebidas.","origin":"GENERADA","source":"L01, anexo 1, tema 11"},
  {"id":"T11-013","tema":11,"category":"Desarrollo","level":"M","question":"¿Qué permite la herencia?","options":["Derivar una clase de otra y reutilizar/especializar comportamiento","Convertir SQL a WiFi","Evitar objetos","Cifrar archivos"],"answer":0,"explanation":"No implica que siempre sea la mejor forma de reutilización.","origin":"GENERADA","source":"L01, anexo 1, tema 11"},
  {"id":"T11-014","tema":11,"category":"Desarrollo","level":"M","question":"¿Qué ejemplifica polimorfismo?","options":["Todas las clases idénticas","Solo una variable global","Una operación común con comportamiento según el objeto","Ningún método"],"answer":2,"explanation":"La misma llamada puede resolverse de manera diferente.","origin":"GENERADA","source":"L01, anexo 1, tema 11"},
  {"id":"T11-015","tema":11,"category":"Desarrollo","level":"M","question":"¿Qué papel tiene la JVM en Java?","options":["Es un editor HTML","Ejecutar bytecode en una plataforma compatible","Es solo un compresor","Cambia hardware"],"answer":1,"explanation":"La portabilidad depende también de dependencias y entorno.","origin":"GENERADA","source":"L01, anexo 1, tema 11"},
  {"id":"T11-016","tema":11,"category":"Desarrollo","level":"B","question":"¿Qué uso es habitual de PHP?","options":["Firmware de discos","Sustituir DNS","Renderizar siempre en el navegador","Desarrollo web ejecutado del lado servidor"],"answer":3,"explanation":"Genera respuestas que recibe el cliente.","origin":"GENERADA","source":"L01, anexo 1, tema 11"},
  {"id":"T11-017","tema":11,"category":"Desarrollo","level":"M","question":"¿Qué aporta un framework web?","options":["Estructura y utilidades comunes para desarrollar aplicaciones","Garantía de seguridad absoluta","Evita conocer HTTP","Elimina las pruebas"],"answer":0,"explanation":"Reduce tareas repetidas sin eliminar responsabilidad del desarrollador.","origin":"GENERADA","source":"L01, anexo 1, tema 11"},
  {"id":"T11-018","tema":11,"category":"Desarrollo","level":"M","question":"¿Qué caracteriza una app móvil nativa?","options":["Solo funciona por correo","No puede usar cámara","Se desarrolla para APIs/plataforma específicas","Es siempre una página sin instalar"],"answer":2,"explanation":"Puede aprovechar capacidades del sistema móvil.","origin":"GENERADA","source":"L01, anexo 1, tema 11"},
  {"id":"T11-019","tema":11,"category":"Desarrollo","level":"M","question":"¿Qué busca el desarrollo móvil multiplataforma?","options":["Eliminar toda adaptación","Compartir parte del código entre plataformas","Ejecutar sin sistema operativo","Usar exclusivamente PHP"],"answer":1,"explanation":"Puede requerir ajustes específicos de cada plataforma.","origin":"GENERADA","source":"L01, anexo 1, tema 11"},
  {"id":"T11-020","tema":11,"category":"Desarrollo","level":"P","question":"Una app necesita acceso a micrófono. ¿Qué práctica es correcta?","options":["Pedir todos los permisos","No informar al usuario","Guardar grabaciones sin finalidad","Solicitar solo permiso necesario y gestionar denegación"],"answer":3,"explanation":"El permiso puede no concederse o revocarse.","origin":"GENERADA","source":"L01, anexo 1, tema 11"},
  {"id":"T12-001","tema":12,"category":"Desarrollo","level":"B","question":"¿Qué es un IDE?","options":["Un disco","Entorno integrado de desarrollo","Un protocolo","Un algoritmo de cifrado"],"answer":1,"explanation":"Reúne edición y herramientas de desarrollo.","origin":"GENERADA","source":"L01, anexo 1, tema 12"},
  {"id":"T12-002","tema":12,"category":"Desarrollo","level":"B","question":"¿Qué hace un compilador?","options":["Ejecuta solo correos","Gestiona permisos físicos","Traduce código a otra representación ejecutable/intermedia","Sustituye tests"],"answer":2,"explanation":"El resultado depende del lenguaje y destino.","origin":"GENERADA","source":"L01, anexo 1, tema 12"},
  {"id":"T12-003","tema":12,"category":"Desarrollo","level":"M","question":"¿Qué distingue un error de compilación de uno lógico?","options":["El primero impide traducir; el segundo puede dar resultado incorrecto al ejecutar","Son siempre idénticos","El lógico solo es hardware","El de compilación no se detecta"],"answer":0,"explanation":"Compilar correctamente no prueba corrección funcional.","origin":"GENERADA","source":"L01, anexo 1, tema 12"},
  {"id":"T12-004","tema":12,"category":"Desarrollo","level":"B","question":"¿Para qué sirve un depurador?","options":["Cifrar repositorios","Borrar errores automáticamente","Cambiar DNS","Inspeccionar la ejecución y el estado del programa"],"answer":3,"explanation":"Ayuda a localizar la causa de fallos.","origin":"GENERADA","source":"L01, anexo 1, tema 12"},
  {"id":"T12-005","tema":12,"category":"Desarrollo","level":"B","question":"¿Qué es un breakpoint?","options":["Una copia completa","Un punto donde detener la ejecución al depurar","Un disco roto","Un usuario bloqueado"],"answer":1,"explanation":"Permite inspeccionar variables y flujo.","origin":"GENERADA","source":"L01, anexo 1, tema 12"},
  {"id":"T12-006","tema":12,"category":"Desarrollo","level":"M","question":"¿Qué hace «paso a paso» en depuración?","options":["Avanzar controladamente por instrucciones","Reinstalar SO","Crear backups","Cambiar todas las variables"],"answer":0,"explanation":"Permite observar la evolución del estado.","origin":"GENERADA","source":"L01, anexo 1, tema 12"},
  {"id":"T12-007","tema":12,"category":"Desarrollo","level":"M","question":"¿Qué muestra una pila de llamadas?","options":["Capacidad del disco","Solo usuarios","Secuencia de funciones activas que llevó al punto actual","Solo commits"],"answer":2,"explanation":"Ayuda a localizar el origen de una excepción.","origin":"GENERADA","source":"L01, anexo 1, tema 12"},
  {"id":"T12-008","tema":12,"category":"Desarrollo","level":"B","question":"¿Qué aporta control de versiones?","options":["Inmunidad al malware","Sustituye autorización","Evita conflictos siempre","Historial y coordinación de cambios"],"answer":3,"explanation":"Permite comparar y recuperar revisiones.","origin":"GENERADA","source":"L01, anexo 1, tema 12"},
  {"id":"T12-009","tema":12,"category":"Desarrollo","level":"B","question":"En Git, ¿qué es un commit?","options":["Una descarga temporal","Un registro de cambios confirmados en el historial","Un antivirus","Un backup de toda la empresa"],"answer":1,"explanation":"Incluye una instantánea y metadatos asociados.","origin":"GENERADA","source":"L01, anexo 1, tema 12"},
  {"id":"T12-010","tema":12,"category":"Desarrollo","level":"B","question":"¿Qué prepara cambios para el próximo commit?","options":["`git add`","`git log`","`git status`","`git fetch`"],"answer":0,"explanation":"Añade contenido al área de preparación.","origin":"GENERADA","source":"L01, anexo 1, tema 12"},
  {"id":"T12-011","tema":12,"category":"Desarrollo","level":"P","question":"¿Qué permite consultar archivos modificados y preparados?","options":["`git push`","`git clone`","`git status`","`git init`"],"answer":2,"explanation":"No envía cambios al remoto.","origin":"GENERADA","source":"L01, anexo 1, tema 12"},
  {"id":"T12-012","tema":12,"category":"Desarrollo","level":"M","question":"¿Qué diferencia commit y push?","options":["Son lo mismo","Push edita archivos","Commit descarga remoto","Commit registra localmente; push transmite referencias al remoto"],"answer":3,"explanation":"Puede haber commits locales aún no compartidos.","origin":"GENERADA","source":"L01, anexo 1, tema 12"},
  {"id":"T12-013","tema":12,"category":"Desarrollo","level":"B","question":"¿Para qué sirve una rama?","options":["Duplicar físicamente toda la empresa","Trabajar en una línea de desarrollo diferenciada","Borrar historial","Cambiar contraseña"],"answer":1,"explanation":"Git maneja referencias a líneas de commits.","origin":"GENERADA","source":"L01, anexo 1, tema 12"},
  {"id":"T12-014","tema":12,"category":"Desarrollo","level":"P","question":"Dos cambios incompatibles afectan la misma zona. ¿Qué puede ocurrir al fusionar?","options":["Conflicto que necesita resolución","Cifrado automático","Borrado obligado del repositorio","Éxito garantizado"],"answer":0,"explanation":"Debe elegirse o integrar el contenido correcto.","origin":"GENERADA","source":"L01, anexo 1, tema 12"},
  {"id":"T12-015","tema":12,"category":"Desarrollo","level":"M","question":"¿Para qué sirve `.gitignore`?","options":["Borrar logs del servidor","Cifrar secretos","Evitar añadir ciertos archivos no rastreados","Quitar automáticamente secretos ya publicados"],"answer":2,"explanation":"No elimina del historial archivos ya versionados.","origin":"GENERADA","source":"L01, anexo 1, tema 12"},
  {"id":"T12-016","tema":12,"category":"Desarrollo","level":"P","question":"Se publica por error una clave secreta en Git. ¿Prioridad?","options":["Solo ocultar archivo","Ignorar si es privado","Cambiar título del commit","Revocar/rotar la clave y gestionar la exposición"],"answer":3,"explanation":"Borrar la línea no hace desaparecer copias existentes.","origin":"GENERADA","source":"L01, anexo 1, tema 12"},
  {"id":"T12-017","tema":12,"category":"Desarrollo","level":"B","question":"¿Qué evalúa una prueba unitaria?","options":["Solo una pantalla física","Una unidad pequeña de comportamiento","Toda la red siempre","Solo documentación"],"answer":1,"explanation":"Busca comprobar lógica aislada.","origin":"GENERADA","source":"L01, anexo 1, tema 12"},
  {"id":"T12-018","tema":12,"category":"Desarrollo","level":"B","question":"¿Qué evalúa una prueba de integración?","options":["Interacción entre componentes","Solo sintaxis","Color del IDE","Etiqueta de un disco"],"answer":0,"explanation":"Verifica que las partes colaboran correctamente.","origin":"GENERADA","source":"L01, anexo 1, tema 12"},
  {"id":"T12-019","tema":12,"category":"Desarrollo","level":"M","question":"¿Qué es una prueba de regresión?","options":["Volver a un disco anterior","Solo medir RAM","Comprobar que cambios no rompen comportamiento existente","Borrar tests antiguos"],"answer":2,"explanation":"Puede ejecutarse tras una corrección o mejora.","origin":"GENERADA","source":"L01, anexo 1, tema 12"},
  {"id":"T12-020","tema":12,"category":"Desarrollo","level":"P","question":"Una función recibe entrada vacía o inválida. ¿Qué debe probarse?","options":["Solo caso ideal","Ningún caso","Solo el IDE","Casos límite y manejo de error además del normal"],"answer":3,"explanation":"La corrección debe cubrir condiciones previsibles.","origin":"GENERADA","source":"L01, anexo 1, tema 12"},
  {"id":"T13-001","tema":13,"category":"Hardware","level":"B","question":"¿Qué es una máquina virtual?","options":["Un monitor remoto","Un disco sin sistema","Un correo","Entorno que presenta hardware virtual a un sistema invitado"],"answer":3,"explanation":"Varios invitados pueden compartir un host.","origin":"GENERADA","source":"L01, anexo 1, tema 13"},
  {"id":"T13-002","tema":13,"category":"Hardware","level":"B","question":"¿Qué hace un hipervisor?","options":["Gestionar ejecución y recursos de máquinas virtuales","Comprimir exclusivamente vídeo","Resolver MX","Solo copiar archivos"],"answer":0,"explanation":"Media entre recursos físicos y entornos virtuales.","origin":"GENERADA","source":"L01, anexo 1, tema 13"},
  {"id":"T13-003","tema":13,"category":"Hardware","level":"M","question":"¿Qué caracteriza al hipervisor tipo 1?","options":["Requiere navegador","Es una aplicación ofimática","Se ejecuta directamente sobre el hardware","Solo sirve para móviles"],"answer":2,"explanation":"También se denomina bare-metal.","origin":"GENERADA","source":"L01, anexo 1, tema 13"},
  {"id":"T13-004","tema":13,"category":"Hardware","level":"M","question":"¿Qué caracteriza al hipervisor tipo 2?","options":["No permite invitados","Se ejecuta sobre un sistema operativo anfitrión","Es siempre firmware","Solo administra SAN"],"answer":1,"explanation":"Utiliza un SO host como base.","origin":"GENERADA","source":"L01, anexo 1, tema 13"},
  {"id":"T13-005","tema":13,"category":"Hardware","level":"M","question":"¿Un snapshot local de VM sustituye un backup separado?","options":["Sí, siempre","Solo con Linux","Sí, aunque falle el almacenamiento","No: puede depender del mismo host/almacenamiento"],"answer":3,"explanation":"Una avería común puede destruir VM y snapshots.","origin":"GENERADA","source":"L01, anexo 1, tema 13"},
  {"id":"T13-006","tema":13,"category":"Hardware","level":"P","question":"Mantener snapshots indefinidamente puede provocar…","options":["Crecimiento de almacenamiento y degradación","Protección ilimitada gratuita","Más RAM física","Eliminación de ransomware"],"answer":0,"explanation":"Deben gestionarse según la plataforma y la política.","origin":"GENERADA","source":"L01, anexo 1, tema 13"},
  {"id":"T13-007","tema":13,"category":"Hardware","level":"B","question":"¿Qué ofrece un NAS normalmente?","options":["Solo vídeo","Solo memoria virtual","Acceso a archivos a través de la red","Exclusivamente bloques Fibre Channel"],"answer":2,"explanation":"Suele usar protocolos como SMB o NFS.","origin":"GENERADA","source":"L01, anexo 1, tema 13"},
  {"id":"T13-008","tema":13,"category":"Hardware","level":"B","question":"¿Qué ofrece una SAN normalmente?","options":["Correo POP3","Acceso a almacenamiento por bloques","Solo archivos HTML","Usuarios de AD exclusivamente"],"answer":1,"explanation":"Puede usar Fibre Channel o iSCSI, entre otros.","origin":"GENERADA","source":"L01, anexo 1, tema 13"},
  {"id":"T13-009","tema":13,"category":"Hardware","level":"M","question":"¿Qué afirmación sobre SAN es correcta?","options":["Nunca usa IP","Toda SAN es Ethernet obligatoriamente","Es siempre igual a NAS","Puede utilizar iSCSI sobre redes IP"],"answer":3,"explanation":"No limitar SAN exclusivamente a fibra óptica.","origin":"GENERADA","source":"L01, anexo 1, tema 13"},
  {"id":"T13-010","tema":13,"category":"Hardware","level":"B","question":"¿Qué es una partición de disco?","options":["División lógica del espacio del dispositivo","Otro disco físico obligatorio","Un backup externo","Una VLAN"],"answer":0,"explanation":"Varias particiones del mismo disco comparten el fallo físico.","origin":"GENERADA","source":"L01, anexo 1, tema 13"},
  {"id":"T13-011","tema":13,"category":"Hardware","level":"M","question":"¿Qué distingue particionar de formatear?","options":["Ambos siempre crean hardware","Ninguno afecta datos","Dividir espacio frente a preparar un sistema de archivos","Son sinónimos exactos"],"answer":2,"explanation":"Ambas operaciones pueden alterar o destruir información.","origin":"GENERADA","source":"L01, anexo 1, tema 13"},
  {"id":"T13-012","tema":13,"category":"Hardware","level":"M","question":"¿Qué caracteriza RAID 0?","options":["Espejo","Distribución sin tolerancia a fallo de disco","Paridad doble","Copia remota"],"answer":1,"explanation":"No aporta redundancia.","origin":"GENERADA","source":"L01, anexo 1, tema 13"},
  {"id":"T13-013","tema":13,"category":"Hardware","level":"P","question":"Dos discos de 2 TB en RAID 1: ¿capacidad útil aproximada?","options":["4 TB","1 TB","8 TB","2 TB"],"answer":3,"explanation":"El espejo conserva una copia en cada disco.","origin":"GENERADA","source":"L01, anexo 1, tema 13"},
  {"id":"T13-014","tema":13,"category":"Hardware","level":"P","question":"Tres discos de 2 TB en RAID 5: ¿capacidad útil aproximada?","options":["4 TB","6 TB","2 TB","8 TB"],"answer":0,"explanation":"(N−1)×capacidad = 4 TB; tolera un disco fallado.","origin":"GENERADA","source":"L01, anexo 1, tema 13"},
  {"id":"T13-015","tema":13,"category":"Hardware","level":"M","question":"¿Por qué RAID no sustituye al backup?","options":["No guarda ningún dato","Solo usa USB","No protege por sí solo frente a borrado, corrupción o ataque","Todos los RAID pierden al primer fallo"],"answer":2,"explanation":"Redundancia y recuperación histórica son objetivos distintos.","origin":"GENERADA","source":"L01, anexo 1, tema 13"},
  {"id":"T13-016","tema":13,"category":"Hardware","level":"B","question":"¿Qué significa la regla 3-2-1 en su formulación habitual?","options":["Tres carpetas del mismo disco","Tres copias totales, dos tipos de soporte, una fuera de ubicación","Tres contraseñas","Una copia cada tres años"],"answer":1,"explanation":"Incluye el original y dos copias; añadir aislamiento mejora protección.","origin":"GENERADA","source":"L01, anexo 1, tema 13"},
  {"id":"T13-017","tema":13,"category":"Hardware","level":"M","question":"¿Qué guarda una copia incremental?","options":["Todos los datos siempre","Solo archivos borrados","Solo carpetas vacías","Cambios desde la copia anterior de la cadena"],"answer":3,"explanation":"Para restaurar puede necesitar base y todos los incrementales.","origin":"GENERADA","source":"L01, anexo 1, tema 13"},
  {"id":"T13-018","tema":13,"category":"Hardware","level":"M","question":"¿Qué guarda una copia diferencial?","options":["Cambios desde la última copia completa","Solo cambios desde cualquier incremental","Un snapshot siempre","Solo metadatos"],"answer":0,"explanation":"Se restaura normalmente con completa y diferencial elegido.","origin":"GENERADA","source":"L01, anexo 1, tema 13"},
  {"id":"T13-019","tema":13,"category":"Hardware","level":"P","question":"El sistema informa «backup correcto». ¿Qué prueba falta para confiar en recuperación?","options":["Cambiar nombre","Imprimir informe","Restauración de prueba y comprobación de datos","Borrar original"],"answer":2,"explanation":"Finalizar la copia no demuestra que sea recuperable.","origin":"GENERADA","source":"L01, anexo 1, tema 13"},
  {"id":"T13-020","tema":13,"category":"Hardware","level":"M","question":"¿Qué diferencia RPO y RTO?","options":["Son códecs","Pérdida temporal de datos tolerable frente a tiempo objetivo de recuperación","Solo capacidad de disco","Ambos cuentan usuarios"],"answer":1,"explanation":"Ayudan a definir frecuencia de copia y procedimiento de recuperación.","origin":"GENERADA","source":"L01, anexo 1, tema 13"},
  {"id":"T14-001","tema":14,"category":"Sistemas","level":"B","question":"¿Qué caracteriza cloud computing?","options":["Solo un USB remoto","Recursos/servicios accesibles bajo demanda mediante red","Ausencia de servidores","Una sola aplicación local"],"answer":1,"explanation":"El proveedor gestiona recursos que se consumen como servicio.","origin":"GENERADA","source":"L01, anexo 1, tema 14"},
  {"id":"T14-002","tema":14,"category":"Sistemas","level":"B","question":"¿Cuál es un ejemplo de SaaS?","options":["Comprar un switch","Instalar un disco","Usar correo/ofimática como aplicación del proveedor","Montar CPU"],"answer":2,"explanation":"Se consume una aplicación, no se administra su infraestructura completa.","origin":"GENERADA","source":"L01, anexo 1, tema 14"},
  {"id":"T14-003","tema":14,"category":"Sistemas","level":"B","question":"¿Qué ofrece IaaS?","options":["Infraestructura virtual como máquinas, red y almacenamiento","Solo documentos","Solo una pantalla","Exclusivamente código fuente"],"answer":0,"explanation":"El cliente administra normalmente SO y aplicaciones de sus VM.","origin":"GENERADA","source":"L01, anexo 1, tema 14"},
  {"id":"T14-004","tema":14,"category":"Sistemas","level":"B","question":"¿Qué ofrece PaaS?","options":["Solo correo final","Discos físicos entregados","Siempre acceso al hipervisor","Plataforma gestionada para desplegar aplicaciones"],"answer":3,"explanation":"Reduce administración de infraestructura subyacente.","origin":"GENERADA","source":"L01, anexo 1, tema 14"},
  {"id":"T14-005","tema":14,"category":"Sistemas","level":"P","question":"Se necesita controlar el SO de una VM en cloud. ¿Modelo más adecuado?","options":["SaaS","IaaS","Solo correo","Ofimática web"],"answer":1,"explanation":"IaaS proporciona control del sistema invitado.","origin":"GENERADA","source":"L01, anexo 1, tema 14"},
  {"id":"T14-006","tema":14,"category":"Sistemas","level":"P","question":"Solo se necesita utilizar una herramienta colaborativa completa. ¿Modelo habitual?","options":["SaaS","RAID","BIOS","SAN"],"answer":0,"explanation":"Se usa la aplicación provista.","origin":"GENERADA","source":"L01, anexo 1, tema 14"},
  {"id":"T14-007","tema":14,"category":"Sistemas","level":"M","question":"¿Quién gestiona los permisos de los documentos corporativos en SaaS?","options":["Nadie","Siempre el ISP","La organización según responsabilidades del servicio","Solo el fabricante del teclado"],"answer":2,"explanation":"Externalizar infraestructura no elimina gestión de accesos.","origin":"GENERADA","source":"L01, anexo 1, tema 14"},
  {"id":"T14-008","tema":14,"category":"Sistemas","level":"M","question":"¿Sincronización equivale siempre a copia de seguridad?","options":["Sí","Solo con WiFi","Sí, aunque propague borrados","No; puede propagar borrados o corrupción"],"answer":3,"explanation":"La recuperación depende de historial, retención y copias independientes.","origin":"GENERADA","source":"L01, anexo 1, tema 14"},
  {"id":"T14-009","tema":14,"category":"Sistemas","level":"P","question":"Se borra un archivo de una carpeta sincronizada. ¿Qué puede ocurrir?","options":["Nunca afecta otros equipos","El borrado se propaga a otros dispositivos","Crea backup infinito","Se cifra siempre"],"answer":1,"explanation":"Conviene conocer papelera, versiones y retención.","origin":"GENERADA","source":"L01, anexo 1, tema 14"},
  {"id":"T14-010","tema":14,"category":"Sistemas","level":"B","question":"¿Qué aporta identidad corporativa centralizada?","options":["Gestión coherente de cuentas y accesos","Prohibición de MFA","Ausencia de auditoría","Todas las cuentas públicas"],"answer":0,"explanation":"Facilita administrar el ciclo de vida del usuario.","origin":"GENERADA","source":"L01, anexo 1, tema 14"},
  {"id":"T14-011","tema":14,"category":"Sistemas","level":"B","question":"¿Qué significa SSO?","options":["Un RAID","Un códec","Inicio de sesión único para varios servicios","Una copia externa"],"answer":2,"explanation":"No implica ausencia de controles adicionales como MFA.","origin":"GENERADA","source":"L01, anexo 1, tema 14"},
  {"id":"T14-012","tema":14,"category":"Sistemas","level":"P","question":"Una persona deja la organización. ¿Qué hacer con sus accesos?","options":["Mantenerlos indefinidamente","Compartir su cuenta","Borrar todo sin política","Revocar accesos y gestionar datos según procedimiento"],"answer":3,"explanation":"Se separan bajas de acceso y obligaciones de conservación.","origin":"GENERADA","source":"L01, anexo 1, tema 14"},
  {"id":"T14-013","tema":14,"category":"Sistemas","level":"M","question":"¿Ventaja de coeditar un documento corporativo?","options":["Impedir historial","Trabajar sobre una versión compartida con control adecuado","Eliminar permisos","Hacer público todo"],"answer":1,"explanation":"Reduce copias divergentes si la plataforma lo admite.","origin":"GENERADA","source":"L01, anexo 1, tema 14"},
  {"id":"T14-014","tema":14,"category":"Sistemas","level":"P","question":"Un colaborador solo debe consultar un documento. ¿Permiso adecuado?","options":["Lectura","Administración","Propietario","Edición global"],"answer":0,"explanation":"Se otorga la capacidad mínima necesaria.","origin":"GENERADA","source":"L01, anexo 1, tema 14"},
  {"id":"T14-015","tema":14,"category":"Sistemas","level":"P","question":"Se comparte información sensible. ¿Qué opción es preferible?","options":["Enlace público permanente","Cuenta personal cualquiera","Acceso a destinatarios concretos con restricciones necesarias","Publicar en redes"],"answer":2,"explanation":"Se controla destinatario y alcance de la compartición.","origin":"GENERADA","source":"L01, anexo 1, tema 14"},
  {"id":"T14-016","tema":14,"category":"Sistemas","level":"M","question":"¿Qué riesgo tiene «cualquiera con el enlace»?","options":["Impide reenvío","Obliga siempre a MFA","Solo funciona localmente","Puede acceder alguien no previsto si recibe el enlace"],"answer":3,"explanation":"Conocer el enlace puede ser suficiente según la configuración.","origin":"GENERADA","source":"L01, anexo 1, tema 14"},
  {"id":"T14-017","tema":14,"category":"Sistemas","level":"P","question":"Un correo pide reenviar documentación corporativa a una cuenta personal. ¿Qué hacer?","options":["Obedecer siempre","Verificar autorización y política de compartición","Enviar copia a todos","Desactivar registros"],"answer":1,"explanation":"Puede exponer información fuera del control corporativo.","origin":"GENERADA","source":"L01, anexo 1, tema 14"},
  {"id":"T14-018","tema":14,"category":"Sistemas","level":"M","question":"¿Qué aporta historial de versiones?","options":["Consultar o recuperar revisiones dentro de la retención","Copia infinita garantizada","Mayor ancho de banda","Eliminar identidad"],"answer":0,"explanation":"Hay límites y condiciones del servicio.","origin":"GENERADA","source":"L01, anexo 1, tema 14"},
  {"id":"T14-019","tema":14,"category":"Sistemas","level":"P","question":"Dos equipos editan sin conexión el mismo archivo. ¿Qué puede ocurrir al sincronizar?","options":["Nunca hay conflicto","Fusión perfecta siempre","Conflicto o copia divergente","Creación de una VLAN"],"answer":2,"explanation":"La herramienta puede requerir resolución manual.","origin":"GENERADA","source":"L01, anexo 1, tema 14"},
  {"id":"T14-020","tema":14,"category":"Sistemas","level":"P","question":"¿Qué comprobar antes de adoptar una herramienta cloud para datos corporativos?","options":["Solo el color","Solo publicidad","Que sea gratuita","Autorización, seguridad, tratamiento de datos y recuperación"],"answer":3,"explanation":"El uso debe ajustarse a requisitos y política corporativa.","origin":"GENERADA","source":"L01, anexo 1, tema 14"},
  {"id":"T15-001","tema":15,"category":"Hardware","level":"B","question":"¿Qué es la frecuencia de muestreo del audio?","options":["Muestras tomadas por segundo","Tamaño del monitor","Número de archivos","Resolución de vídeo"],"answer":0,"explanation":"Se expresa habitualmente en Hz o kHz.","origin":"GENERADA","source":"L01, anexo 1, tema 15"},
  {"id":"T15-002","tema":15,"category":"Hardware","level":"B","question":"¿Qué indica la profundidad de bits en audio PCM?","options":["Duración del archivo","Velocidad de red","Precisión de cuantificación de cada muestra","Número de carpetas"],"answer":2,"explanation":"Más bits permiten más niveles de representación.","origin":"GENERADA","source":"L01, anexo 1, tema 15"},
  {"id":"T15-003","tema":15,"category":"Hardware","level":"P","question":"Audio PCM 48 kHz, 16 bits, estéreo: ¿bitrate bruto?","options":["768 kbit/s","1,536 Mbit/s","48 Mbit/s","96 bit/s"],"answer":1,"explanation":"48000×16×2 = 1536000 bit/s.","origin":"GENERADA","source":"L01, anexo 1, tema 15"},
  {"id":"T15-004","tema":15,"category":"Hardware","level":"B","question":"¿Qué diferencia códec y contenedor?","options":["Son sinónimos exactos","El contenedor comprime siempre","El códec es la extensión","Códec codifica/decodifica; contenedor organiza pistas y metadatos"],"answer":3,"explanation":"Un contenedor puede admitir distintos códecs.","origin":"GENERADA","source":"L01, anexo 1, tema 15"},
  {"id":"T15-005","tema":15,"category":"Hardware","level":"B","question":"¿Cuál es un códec de vídeo?","options":["H.264/AVC","MP4 como contenedor","CSV","NTFS"],"answer":0,"explanation":"MP4 organiza contenido, no define por sí solo la compresión.","origin":"GENERADA","source":"L01, anexo 1, tema 15"},
  {"id":"T15-006","tema":15,"category":"Hardware","level":"B","question":"¿Cuál es un contenedor audiovisual?","options":["H.265","AAC","MP4","DNS"],"answer":2,"explanation":"Puede contener vídeo, audio y otras pistas.","origin":"GENERADA","source":"L01, anexo 1, tema 15"},
  {"id":"T15-007","tema":15,"category":"Hardware","level":"M","question":"¿Qué caracteriza compresión con pérdida?","options":["Recuperación bit a bit obligatoria","Descarta información para reducir tamaño","No reduce tamaño nunca","Solo sirve para documentos"],"answer":1,"explanation":"El original no se recupera exactamente de la versión comprimida.","origin":"GENERADA","source":"L01, anexo 1, tema 15"},
  {"id":"T15-008","tema":15,"category":"Hardware","level":"M","question":"¿Qué caracteriza compresión sin pérdida?","options":["Siempre ocupa más que el original","Descarta detalle visible","Se aplica solo a vídeo","Permite recuperar exactamente los datos originales"],"answer":3,"explanation":"El ratio logrado depende del contenido.","origin":"GENERADA","source":"L01, anexo 1, tema 15"},
  {"id":"T15-009","tema":15,"category":"Hardware","level":"B","question":"¿Qué representa 1920×1080?","options":["Dimensiones de imagen en píxeles","Bitrate fijo","Frecuencia de audio","Número de pistas"],"answer":0,"explanation":"No determina por sí solo calidad ni tasa de datos.","origin":"GENERADA","source":"L01, anexo 1, tema 15"},
  {"id":"T15-010","tema":15,"category":"Hardware","level":"B","question":"¿Qué significa 25 fps?","options":["25 bits por muestra","25 MB por segundo","25 fotogramas por segundo","25 canales"],"answer":2,"explanation":"Es una frecuencia temporal de imagen.","origin":"GENERADA","source":"L01, anexo 1, tema 15"},
  {"id":"T15-011","tema":15,"category":"Hardware","level":"M","question":"¿Qué representa el bitrate?","options":["Resolución únicamente","Bits transmitidos o almacenados por segundo","Número de píxeles verticales","Duración fija"],"answer":1,"explanation":"Puede ser constante o variable.","origin":"GENERADA","source":"L01, anexo 1, tema 15"},
  {"id":"T15-012","tema":15,"category":"Hardware","level":"P","question":"Vídeo a 8 Mbit/s durante 60 s: ¿tamaño aproximado sin audio ni sobrecarga?","options":["480 MB","8 MB","60 GB","60 MB"],"answer":3,"explanation":"8×60/8 = 60 MB decimales.","origin":"GENERADA","source":"L01, anexo 1, tema 15"},
  {"id":"T15-013","tema":15,"category":"Hardware","level":"M","question":"¿Qué distingue vídeo progresivo de entrelazado?","options":["Fotogramas completos frente a campos alternos","El progresivo no tiene audio","El entrelazado no tiene resolución","Son siempre iguales"],"answer":0,"explanation":"Sus cadencias no deben confundirse al convertir.","origin":"GENERADA","source":"L01, anexo 1, tema 15"},
  {"id":"T15-014","tema":15,"category":"Hardware","level":"B","question":"¿Qué es streaming?","options":["Entrega solo después de descargar todo","Un RAID","Distribución para reproducir mientras se reciben datos","Un editor de texto"],"answer":2,"explanation":"Puede ser en directo o bajo demanda.","origin":"GENERADA","source":"L01, anexo 1, tema 15"},
  {"id":"T15-015","tema":15,"category":"Hardware","level":"M","question":"¿Qué busca un streaming adaptativo?","options":["Impedir todo buffering","Ajustar la representación a condiciones de reproducción/red","Mantener máxima tasa siempre","Eliminar compresión"],"answer":1,"explanation":"Selecciona entre perfiles disponibles.","origin":"GENERADA","source":"L01, anexo 1, tema 15"},
  {"id":"T15-016","tema":15,"category":"Hardware","level":"B","question":"¿Qué es transcodificación?","options":["Cambiar nombre sin tocar contenido","Copiar idénticos bytes","Cambiar solo carpeta","Convertir el contenido a otra codificación/perfil"],"answer":3,"explanation":"Suele implicar decodificar y volver a codificar.","origin":"GENERADA","source":"L01, anexo 1, tema 15"},
  {"id":"T15-017","tema":15,"category":"Hardware","level":"M","question":"¿Qué diferencia remultiplexar de transcodificar?","options":["Reorganizar pistas/contenedor sin recodificar frente a recodificar","Son siempre sinónimos","Remultiplexar borra audio siempre","Transcodificar solo renombra"],"answer":0,"explanation":"Puede cambiarse contenedor sin modificar las pistas codificadas.","origin":"GENERADA","source":"L01, anexo 1, tema 15"},
  {"id":"T15-018","tema":15,"category":"Hardware","level":"M","question":"¿Qué secuencia refleja un flujo audiovisual habitual?","options":["Archivo antes de capturar siempre","Emisión antes de ingesta obligatoria","Captura, ingesta, edición, emisión/distribución y archivo","Solo sincronización"],"answer":2,"explanation":"Los flujos concretos pueden solapar etapas; ingesta incorpora y organiza material.","origin":"GENERADA","source":"L01, anexo 1, tema 15"},
  {"id":"T15-019","tema":15,"category":"Hardware","level":"B","question":"¿Qué hacen MAM/DAM?","options":["Asignar IP únicamente","Gestionar activos multimedia/digitales y su información","Sustituir cámaras","Solo aumentar volumen"],"answer":1,"explanation":"Facilitan búsqueda, organización y control de recursos.","origin":"GENERADA","source":"L01, anexo 1, tema 15"},
  {"id":"T15-020","tema":15,"category":"Hardware","level":"P","question":"¿Qué conjunto de metadatos favorece reutilización segura de una pieza?","options":["Solo color de icono","Contraseña del editor","Dirección privada irrelevante","Identificador, título, fechas, formato y derechos de uso"],"answer":3,"explanation":"Describen y permiten localizar el activo y conocer restricciones.","origin":"GENERADA","source":"L01, anexo 1, tema 15"},
  {"id":"T16-001","tema":16,"category":"Sistemas","level":"B","question":"¿Qué es un inventario de activos informáticos?","options":["Registro organizado de equipos y recursos","Solo facturas impresas","Una copia del correo","Un listado de contraseñas"],"answer":0,"explanation":"Permite conocer y gestionar el parque tecnológico.","origin":"GENERADA","source":"L01, anexo 1, tema 16"},
  {"id":"T16-002","tema":16,"category":"Sistemas","level":"B","question":"¿Qué dato identifica inequívocamente un equipo inventariado?","options":["Color","Fondo de pantalla","Identificador de activo y número de serie","Usuario genérico"],"answer":2,"explanation":"Debe poder relacionarse con el dispositivo concreto.","origin":"GENERADA","source":"L01, anexo 1, tema 16"},
  {"id":"T16-003","tema":16,"category":"Sistemas","level":"M","question":"¿Qué combinación es útil en inventario?","options":["Solo precio","Identificador, ubicación, responsable y características","Solo icono","Contraseña de administrador"],"answer":1,"explanation":"Ayuda a gestionar soporte, mantenimiento y movimientos.","origin":"GENERADA","source":"L01, anexo 1, tema 16"},
  {"id":"T16-004","tema":16,"category":"Sistemas","level":"P","question":"Un equipo cambia de sala y usuario. ¿Qué hacer?","options":["Mantener registro antiguo","Darlo de baja siempre","Cambiar número de serie","Actualizar asignación/ubicación y registrar movimiento"],"answer":3,"explanation":"Mantiene trazabilidad sin alterar identidad del activo.","origin":"GENERADA","source":"L01, anexo 1, tema 16"},
  {"id":"T16-005","tema":16,"category":"Sistemas","level":"B","question":"¿Qué aporta etiquetar activos?","options":["Relacionar físicamente equipo y registro","Más velocidad de CPU","Cifrar automáticamente","Evitar todo robo"],"answer":0,"explanation":"La etiqueta facilita identificación en intervenciones.","origin":"GENERADA","source":"L01, anexo 1, tema 16"},
  {"id":"T16-006","tema":16,"category":"Sistemas","level":"M","question":"¿Qué debe contener un procedimiento de soporte?","options":["Solo un título","Claves personales","Alcance, requisitos, pasos, verificación y escalado","Datos irrelevantes"],"answer":2,"explanation":"Debe permitir actuación reproducible y segura.","origin":"GENERADA","source":"L01, anexo 1, tema 16"},
  {"id":"T16-007","tema":16,"category":"Sistemas","level":"P","question":"Un procedimiento dice «borrar y reinstalar». ¿Qué falta especialmente?","options":["Logo","Respaldo, autorización y advertencia sobre pérdida de datos","Más colores","Nombre de una impresora"],"answer":1,"explanation":"Una operación destructiva requiere salvaguardas.","origin":"GENERADA","source":"L01, anexo 1, tema 16"},
  {"id":"T16-008","tema":16,"category":"Sistemas","level":"B","question":"¿Qué es una base de conocimiento?","options":["Un servidor DNS","Un código malicioso","Solo inventario","Repositorio de soluciones y documentación reutilizable"],"answer":3,"explanation":"Facilita resolver casos conocidos.","origin":"GENERADA","source":"L01, anexo 1, tema 16"},
  {"id":"T16-009","tema":16,"category":"Sistemas","level":"M","question":"¿Qué mejora un artículo de conocimiento?","options":["Síntomas, contexto, solución y comprobación","Contraseña del usuario","Solo «reiniciar»","Capturas con secretos"],"answer":0,"explanation":"Debe ser útil sin exponer información innecesaria.","origin":"GENERADA","source":"L01, anexo 1, tema 16"},
  {"id":"T16-010","tema":16,"category":"Sistemas","level":"P","question":"Se descubre que una guía ya no funciona. ¿Qué hacer?","options":["Ignorar","Seguirla siempre","Revisar, validar y actualizar versión/fecha","Borrar todos los documentos"],"answer":2,"explanation":"La documentación desactualizada puede causar errores.","origin":"GENERADA","source":"L01, anexo 1, tema 16"},
  {"id":"T16-011","tema":16,"category":"Sistemas","level":"B","question":"¿Para qué registrar un cambio técnico?","options":["Para ocultar al responsable","Para saber qué cambió, cuándo, quién y por qué","Para sustituir pruebas","Para publicar secretos"],"answer":1,"explanation":"Permite reconstruir actuaciones.","origin":"GENERADA","source":"L01, anexo 1, tema 16"},
  {"id":"T16-012","tema":16,"category":"Sistemas","level":"P","question":"Tras un cambio aparece una avería. ¿Qué información ayuda?","options":["Color del logo","Precio del ratón","Cumpleaños","Configuración previa, modificación y hora"],"answer":3,"explanation":"Permite correlacionar y valorar reversión.","origin":"GENERADA","source":"L01, anexo 1, tema 16"},
  {"id":"T16-013","tema":16,"category":"Sistemas","level":"M","question":"¿Qué significa trazabilidad?","options":["Reconstruir historial de decisiones y actuaciones","Copiar sin control","Dar permisos a todos","Eliminar tickets"],"answer":0,"explanation":"Se apoya en identificadores, fechas y responsables.","origin":"GENERADA","source":"L01, anexo 1, tema 16"},
  {"id":"T16-014","tema":16,"category":"Sistemas","level":"P","question":"¿Qué evidencia adjuntar a un ticket técnico?","options":["Contraseña completa","Historial privado irrelevante","Logs/capturas pertinentes con secretos ocultos","Todos los correos del usuario"],"answer":2,"explanation":"Debe limitarse a lo necesario para diagnóstico.","origin":"GENERADA","source":"L01, anexo 1, tema 16"},
  {"id":"T16-015","tema":16,"category":"Sistemas","level":"M","question":"¿Qué conviene documentar de un servicio crítico?","options":["Solo nombre comercial","Dependencias, responsables y recuperación","Solo color de interfaz","Solo marca del monitor"],"answer":1,"explanation":"Facilita operar y recuperar el servicio.","origin":"GENERADA","source":"L01, anexo 1, tema 16"},
  {"id":"T16-016","tema":16,"category":"Sistemas","level":"B","question":"¿Qué utilidad tiene una convención de nombres consistente?","options":["Evitar toda auditoría","Aumentar ancho de banda","Eliminar inventario","Identificar recursos y reducir confusiones"],"answer":3,"explanation":"Debe ser clara y mantenerse en los registros.","origin":"GENERADA","source":"L01, anexo 1, tema 16"},
  {"id":"T16-017","tema":16,"category":"Sistemas","level":"P","question":"Dos guías contradictorias circulan por correo. ¿Qué hacer?","options":["Mantener fuente de referencia y versionado accesible","Usar siempre la más antigua","Publicar ambas sin aviso","Borrar historial"],"answer":0,"explanation":"Debe identificarse la versión aplicable.","origin":"GENERADA","source":"L01, anexo 1, tema 16"},
  {"id":"T16-018","tema":16,"category":"Sistemas","level":"P","question":"Se retira un disco del servicio. ¿Qué registrar?","options":["Solo su color","Nada","Activo, baja, destino y tratamiento seguro de datos","Clave privada del usuario"],"answer":2,"explanation":"La baja debe incluir protección de información residual.","origin":"GENERADA","source":"L01, anexo 1, tema 16"},
  {"id":"T16-019","tema":16,"category":"Sistemas","level":"M","question":"¿Qué debe facilitar un relevo de soporte?","options":["Empezar sin contexto","Pendientes, estado, evidencias y próximos pasos","Contraseñas compartidas","Solo tickets cerrados"],"answer":1,"explanation":"Evita pérdida de continuidad entre turnos.","origin":"GENERADA","source":"L01, anexo 1, tema 16"},
  {"id":"T16-020","tema":16,"category":"Sistemas","level":"P","question":"¿Qué documentación publicar en una base accesible a todo el personal?","options":["Secretos de producción","Datos clínicos","Claves de VPN","Contenido autorizado y sin información restringida"],"answer":3,"explanation":"La utilidad no justifica ampliar accesos indebidamente.","origin":"GENERADA","source":"L01, anexo 1, tema 16"},
  {"id":"T17-001","tema":17,"category":"Sistemas","level":"B","question":"¿Qué es un dato personal?","options":["Solo el DNI","Información sobre una persona física identificada o identificable","Solo una contraseña","Cualquier dato meteorológico"],"answer":1,"explanation":"También pueden serlo identificadores indirectos según el contexto.","origin":"GENERADA","source":"L01, anexo 1, tema 17"},
  {"id":"T17-002","tema":17,"category":"Sistemas","level":"P","question":"¿Cuál contiene datos personales?","options":["Manual genérico sin nombres","Tabla de códecs","Listado de empleados con correo nominativo","Catálogo vacío"],"answer":2,"explanation":"Vincula identidades con información de contacto.","origin":"GENERADA","source":"L01, anexo 1, tema 17"},
  {"id":"T17-003","tema":17,"category":"Sistemas","level":"B","question":"¿Qué es tratamiento de datos personales?","options":["Incluye consultar, almacenar, comunicar o borrar","Solo vender datos","Solo imprimir","Solo crear cuentas"],"answer":0,"explanation":"Abarca distintas operaciones, automatizadas o no.","origin":"GENERADA","source":"L01, anexo 1, tema 17"},
  {"id":"T17-004","tema":17,"category":"Sistemas","level":"M","question":"¿Qué significa minimización?","options":["Guardar todo por si acaso","Prohibir todos los datos","Borrar inmediatamente todo","Tratar solo los datos necesarios para la finalidad"],"answer":3,"explanation":"Reduce información y exposición innecesarias.","origin":"GENERADA","source":"L01, anexo 1, tema 17"},
  {"id":"T17-005","tema":17,"category":"Sistemas","level":"M","question":"¿Qué implica limitación de finalidad?","options":["Todo uso posterior es libre","Usar datos para fines determinados y legítimos compatibles","Publicarlos si son internos","Usarlos para cualquier curiosidad"],"answer":1,"explanation":"La disponibilidad técnica no legitima cualquier uso.","origin":"GENERADA","source":"L01, anexo 1, tema 17"},
  {"id":"T17-006","tema":17,"category":"Sistemas","level":"M","question":"¿Cómo se decide la conservación?","options":["Según finalidad y obligaciones aplicables, no indefinidamente","Siempre diez años","Siempre dos días","Solo según capacidad del disco"],"answer":0,"explanation":"No existe un plazo universal para todos los tratamientos.","origin":"GENERADA","source":"L01, anexo 1, tema 17"},
  {"id":"T17-007","tema":17,"category":"Sistemas","level":"M","question":"¿Qué exige confidencialidad?","options":["Compartir con todo compañero","Solo poner un logo","Evitar divulgación y acceso no autorizado","Conservar más copias siempre"],"answer":2,"explanation":"Afecta al acceso y manejo de información.","origin":"GENERADA","source":"L01, anexo 1, tema 17"},
  {"id":"T17-008","tema":17,"category":"Sistemas","level":"P","question":"Soporte permite técnicamente abrir documentos de un usuario. ¿Puede hacerlo por curiosidad?","options":["Sí, si es administrador","Sí, si no modifica","Sí, si usa VPN","No; debe existir necesidad y autorización"],"answer":3,"explanation":"Privilegio técnico no equivale a permiso de uso.","origin":"GENERADA","source":"L01, anexo 1, tema 17"},
  {"id":"T17-009","tema":17,"category":"Sistemas","level":"P","question":"Hay que enviar un listado con datos personales. ¿Qué comprobar?","options":["Solo tamaño","Destinatario, autorización, necesidad y canal seguro","Fondo de pantalla","Marca de teclado"],"answer":1,"explanation":"Se evita divulgación indebida y excesiva.","origin":"GENERADA","source":"L01, anexo 1, tema 17"},
  {"id":"T17-010","tema":17,"category":"Sistemas","level":"P","question":"Se manda información al destinatario equivocado. ¿Qué hacer?","options":["Comunicar inmediatamente por el procedimiento de brechas","Ocultarlo","Esperar a que reclame","Borrar el correo local y asumir solución"],"answer":0,"explanation":"Eliminar la copia local no retira la recibida.","origin":"GENERADA","source":"L01, anexo 1, tema 17"},
  {"id":"T17-011","tema":17,"category":"Sistemas","level":"M","question":"¿Seudonimizar equivale a anonimizar?","options":["Siempre","Solo en CSV","No, puede conservarse posibilidad de vincular a una persona","Sí, cambiando nombres"],"answer":2,"explanation":"Los datos seudonimizados pueden seguir siendo personales.","origin":"GENERADA","source":"L01, anexo 1, tema 17"},
  {"id":"T17-012","tema":17,"category":"Sistemas","level":"B","question":"¿Qué organismo supervisa protección de datos en España con carácter general?","options":["DGT","CNMC como regla general","Banco de España siempre","AEPD"],"answer":3,"explanation":"Existen autoridades competentes en sus ámbitos; la AEPD es la referencia estatal.","origin":"GENERADA","source":"L01, anexo 1, tema 17"},
  {"id":"T17-013","tema":17,"category":"Sistemas","level":"P","question":"Para un ticket solo se requiere versión de aplicación. ¿Debe pedirse el DNI?","options":["Siempre","No, salvo necesidad justificada ajena a ese diagnóstico","Si es más cómodo","Si cabe en el formulario"],"answer":1,"explanation":"Pedir información no necesaria contradice minimización.","origin":"GENERADA","source":"L01, anexo 1, tema 17"},
  {"id":"T17-014","tema":17,"category":"Sistemas","level":"B","question":"¿Qué hacer al ausentarse de un puesto con sesión abierta?","options":["Bloquear la sesión","Dejar contraseña al lado","Apagar monitor sin bloquear","Compartir cuenta"],"answer":0,"explanation":"Impide acceso casual a la sesión activa.","origin":"GENERADA","source":"L01, anexo 1, tema 17"},
  {"id":"T17-015","tema":17,"category":"Sistemas","level":"M","question":"¿Qué caracteriza uso aceptable corporativo?","options":["Usar recursos para cualquier fin","Instalar sin autorización","Cumplir políticas y finalidad autorizada","Subir todo a cuenta personal"],"answer":2,"explanation":"Los recursos siguen normas de seguridad y organización.","origin":"GENERADA","source":"L01, anexo 1, tema 17"},
  {"id":"T17-016","tema":17,"category":"Sistemas","level":"P","question":"Se necesita software no autorizado. ¿Qué hacer?","options":["Descargarlo de cualquier sitio","Desactivar antivirus","Usar cuenta ajena","Solicitar evaluación por el canal previsto"],"answer":3,"explanation":"Evita licencias, malware y tratamiento no controlado.","origin":"GENERADA","source":"L01, anexo 1, tema 17"},
  {"id":"T17-017","tema":17,"category":"Sistemas","level":"P","question":"Un USB desconocido aparece en la oficina. ¿Qué hacer?","options":["Conectarlo para averiguar dueño","Entregarlo por procedimiento seguro sin conectarlo","Copiar todo","Abrirlo en un servidor"],"answer":1,"explanation":"Puede contener malware o datos de terceros.","origin":"GENERADA","source":"L01, anexo 1, tema 17"},
  {"id":"T17-018","tema":17,"category":"Sistemas","level":"P","question":"Se reutiliza un soporte con información sensible. ¿Qué hacer?","options":["Aplicar borrado seguro autorizado y verificarlo","Borrar acceso directo","Vaciar solo papelera","Cambiar etiqueta"],"answer":0,"explanation":"El borrado lógico ordinario puede dejar datos recuperables.","origin":"GENERADA","source":"L01, anexo 1, tema 17"},
  {"id":"T17-019","tema":17,"category":"Sistemas","level":"M","question":"¿Por qué evitar cuentas compartidas?","options":["Consumen más vídeo","No admiten TLS","Dificultan atribuir actuaciones y gestionar bajas","No funcionan en Linux"],"answer":2,"explanation":"Las cuentas nominativas favorecen trazabilidad.","origin":"GENERADA","source":"L01, anexo 1, tema 17"},
  {"id":"T17-020","tema":17,"category":"Sistemas","level":"P","question":"Para una prueba se necesitan ejemplos de datos. ¿Qué es preferible?","options":["Copiar todo producción","Publicar datos reales","Quitar solo el nombre y asumir anonimato","Datos sintéticos o adecuadamente anonimizados"],"answer":3,"explanation":"Debe evitarse usar datos personales reales sin justificación.","origin":"GENERADA","source":"L01, anexo 1, tema 17"},
  {"id":"T18-001","tema":18,"category":"Sistemas","level":"B","question":"¿Qué derecho básico reconoce la PRL?","options":["Ausencia de cualquier responsabilidad","Elegir todos los riesgos","Protección eficaz de seguridad y salud en el trabajo","Ignorar procedimientos"],"answer":2,"explanation":"Existe un deber empresarial correlativo de protección.","origin":"GENERADA","source":"L01, anexo 1, tema 18"},
  {"id":"T18-002","tema":18,"category":"Sistemas","level":"B","question":"¿Qué debe hacer el trabajador con herramientas y protecciones?","options":["Usarlas adecuadamente según formación e instrucciones","Anularlas por comodidad","Usarlas como quiera","Compartirlas sin control siempre"],"answer":0,"explanation":"La Ley 31/1995 establece obligaciones de uso adecuado.","origin":"GENERADA","source":"L01, anexo 1, tema 18"},
  {"id":"T18-003","tema":18,"category":"Sistemas","level":"P","question":"Se observa un cable deteriorado potencialmente peligroso. ¿Qué hacer?","options":["Seguir usándolo","Informar inmediatamente y seguir el protocolo seguro","Repararlo con cinta sin autorización","Ocultarlo"],"answer":1,"explanation":"Debe comunicarse la situación de riesgo.","origin":"GENERADA","source":"L01, anexo 1, tema 18"},
  {"id":"T18-004","tema":18,"category":"Sistemas","level":"M","question":"Ante riesgo grave e inminente, ¿qué derecho puede ejercer el trabajador conforme a la ley?","options":["Desactivar toda protección","Exigir un premio","Ignorar al servicio preventivo","Interrumpir actividad y abandonar el lugar si es necesario"],"answer":3,"explanation":"Debe existir la situación prevista por la normativa; no es una elección arbitraria.","origin":"GENERADA","source":"L01, anexo 1, tema 18"},
  {"id":"T18-005","tema":18,"category":"Sistemas","level":"B","question":"¿Qué grupos de riesgos se asocian al trabajo con PVD?","options":["Solo cortes","Solo infección","Fatiga visual, trastornos musculoesqueléticos y carga mental","Solo ruido de teclado"],"answer":2,"explanation":"La evaluación debe contemplar el puesto y la organización.","origin":"GENERADA","source":"L01, anexo 1, tema 18"},
  {"id":"T18-006","tema":18,"category":"Sistemas","level":"P","question":"La pantalla tiene reflejos de una ventana. ¿Qué medida es adecuada?","options":["Reorientar puesto y controlar iluminación/reflejos","Subir brillo al máximo siempre","Quitar descansos","Acercar ojos a pantalla"],"answer":0,"explanation":"La iluminación debe permitir lectura cómoda sin deslumbramiento.","origin":"GENERADA","source":"L01, anexo 1, tema 18"},
  {"id":"T18-007","tema":18,"category":"Sistemas","level":"M","question":"¿Qué características debe facilitar una silla de PVD?","options":["Asiento inestable","Estabilidad y ajustes adecuados del asiento/respaldo","Altura fija para todos","Ausencia de respaldo"],"answer":1,"explanation":"Debe permitir una postura de trabajo adaptable.","origin":"GENERADA","source":"L01, anexo 1, tema 18"},
  {"id":"T18-008","tema":18,"category":"Sistemas","level":"M","question":"¿Qué medida organizativa ayuda ante uso prolongado de pantallas?","options":["Trabajo continuo obligatorio","Solo cambiar de monitor","Quitar toda pausa","Alternar tareas o introducir pausas según evaluación"],"answer":3,"explanation":"No existe aquí una pauta universal de minutos aplicable a todos.","origin":"GENERADA","source":"L01, anexo 1, tema 18"},
  {"id":"T18-009","tema":18,"category":"Sistemas","level":"P","question":"Hay tensión en muñecas al usar teclado/ratón. ¿Qué revisar?","options":["Solo marca del navegador","Tamaño del CSV","Postura, apoyos, alcance y repetición","DNS"],"answer":2,"explanation":"Se busca evitar desviaciones y sobreesfuerzos sostenidos.","origin":"GENERADA","source":"L01, anexo 1, tema 18"},
  {"id":"T18-010","tema":18,"category":"Sistemas","level":"M","question":"¿Qué aumenta riesgo musculoesquelético en extremidad superior?","options":["Repetición, fuerza y posturas forzadas","Nombre del archivo","Direcciones IPv6","UTF-8"],"answer":0,"explanation":"La combinación y duración de exposición son relevantes.","origin":"GENERADA","source":"L01, anexo 1, tema 18"},
  {"id":"T18-011","tema":18,"category":"Sistemas","level":"B","question":"¿Qué medida debe priorizarse ante manipulación manual de cargas con riesgo?","options":["Levantar más deprisa","Evitarla cuando sea posible mediante medios adecuados","Cargar siempre a solas","Aumentar el peso"],"answer":1,"explanation":"La ayuda mecánica puede evitar exposición.","origin":"GENERADA","source":"L01, anexo 1, tema 18"},
  {"id":"T18-012","tema":18,"category":"Sistemas","level":"P","question":"Hay que mover un servidor pesado. ¿Qué hacer?","options":["Tirar del cable","Levantar girando tronco","Improvisar sin comprobar","Evaluar peso/recorrido y usar ayuda adecuada"],"answer":3,"explanation":"No se fija un peso seguro universal para cualquier persona y situación.","origin":"GENERADA","source":"L01, anexo 1, tema 18"},
  {"id":"T18-013","tema":18,"category":"Sistemas","level":"M","question":"Si debe levantarse una carga tras evaluar el riesgo, ¿qué es preferible?","options":["Mantenerla lejos","Girar bruscamente cintura","Mantenerla próxima y evitar torsiones","Sostenerla con brazos extendidos"],"answer":2,"explanation":"La técnica no sustituye evitar la carga o usar medios auxiliares.","origin":"GENERADA","source":"L01, anexo 1, tema 18"},
  {"id":"T18-014","tema":18,"category":"Sistemas","level":"P","question":"Hay que intervenir en equipo con posible riesgo eléctrico. ¿Actuación segura?","options":["Personal habilitado, procedimiento y ausencia de tensión verificada cuando proceda","Abrir sin desconectar","Tocar para comprobar","Confiar solo en apagar pantalla"],"answer":0,"explanation":"Desconectar un mando no prueba ausencia de tensión.","origin":"GENERADA","source":"L01, anexo 1, tema 18"},
  {"id":"T18-015","tema":18,"category":"Sistemas","level":"M","question":"¿Por qué no abrir una fuente de alimentación sin capacitación?","options":["Porque aumenta DNS","Puede contener energía peligrosa aun desconectada","Porque cambia JSON","Porque pierde resolución"],"answer":1,"explanation":"Los condensadores pueden conservar carga.","origin":"GENERADA","source":"L01, anexo 1, tema 18"},
  {"id":"T18-016","tema":18,"category":"Sistemas","level":"P","question":"Una regleta presenta calor excesivo o daño. ¿Qué hacer?","options":["Añadir otra regleta","Taparla","Seguir si funciona","Retirar de uso de forma segura y comunicar"],"answer":3,"explanation":"Sobrecarga y defectos pueden causar incendio o contacto eléctrico.","origin":"GENERADA","source":"L01, anexo 1, tema 18"},
  {"id":"T18-017","tema":18,"category":"Sistemas","level":"P","question":"Se detecta un incendio en la oficina. ¿Qué prioridad es correcta?","options":["Recuperar objetos","Usar ascensor","Alertar y evacuar según plan, sin exponerse","Grabarlo antes de avisar"],"answer":2,"explanation":"Intervenir solo conforme a formación y condiciones seguras.","origin":"GENERADA","source":"L01, anexo 1, tema 18"},
  {"id":"T18-018","tema":18,"category":"Sistemas","level":"M","question":"¿Qué medida preventiva evita obstáculos durante una evacuación?","options":["Mantener libres y señalizadas las vías y salidas","Guardar cajas en puertas","Cerrar salidas con llave","Ocultar planos"],"answer":0,"explanation":"La evacuación requiere recorridos utilizables.","origin":"GENERADA","source":"L01, anexo 1, tema 18"},
  {"id":"T18-019","tema":18,"category":"Sistemas","level":"B","question":"¿Qué describe un accidente in itinere en términos generales?","options":["Cualquier accidente doméstico","El ocurrido al ir o volver del trabajo, cumpliendo requisitos","Solo dentro del CPD","Solo durante vacaciones"],"answer":1,"explanation":"El nexo con el desplazamiento laboral debe concurrir.","origin":"GENERADA","source":"L01, anexo 1, tema 18"},
  {"id":"T18-020","tema":18,"category":"Sistemas","level":"B","question":"¿Qué describe un accidente en misión?","options":["Cualquier viaje privado","Siempre cualquier hecho en un hotel","Solo el trayecto habitual a casa","Accidente relacionado con desplazamiento/actividad por encargo laboral"],"answer":3,"explanation":"No equivale automáticamente a todo hecho durante las 24 horas de un viaje.","origin":"GENERADA","source":"L01, anexo 1, tema 18"},
  {"id":"H-001","tema":18,"category":"Sistemas","level":"M","question":"Un técnico resulta lesionado realizando una intervención encargada en otra sede. ¿Qué concepto encaja?","options":["Viaje privado","Accidente en misión","In itinere necesariamente","No laboral siempre"],"answer":1,"explanation":"La actividad se realiza por encargo laboral; la calificación real requiere valorar hechos.","origin":"ADAPTADA","source":"L03/L04, pregunta 1"},
  {"id":"H-002","tema":13,"category":"Hardware","level":"M","question":"¿Qué evita que perder un único camino de acceso inutilice una SAN?","options":["Un nombre DNS","Comprimir archivos","Rutas redundantes y multipath configurado","Un monitor adicional"],"answer":2,"explanation":"La redundancia debe ser efectiva y correctamente gestionada.","origin":"ADAPTADA","source":"L03/L04, pregunta 3"},
  {"id":"H-003","tema":4,"category":"Redes","level":"B","question":"Para investigar qué IP devuelve un DNS en Windows, ¿qué herramienta elegir?","options":["nslookup","mkdir","rmdir","format"],"answer":0,"explanation":"Consulta respuestas del sistema de nombres.","origin":"ADAPTADA","source":"L03/L04, pregunta 4"},
  {"id":"H-004","tema":9,"category":"Desarrollo","level":"M","question":"Una imagen informativa web necesita equivalente textual. ¿Qué atributo corresponde?","options":["id","src","width","alt"],"answer":3,"explanation":"El texto alternativo debe transmitir su función; las decorativas requieren otro tratamiento.","origin":"ADAPTADA","source":"L03/L04, pregunta 8"},
  {"id":"H-005","tema":12,"category":"Desarrollo","level":"M","question":"¿Qué examina una prueba de caja negra?","options":["Solo código interno","Salidas respecto a entradas y comportamiento esperado","Color del IDE","Modelo del procesador"],"answer":1,"explanation":"No requiere conocer la implementación interna.","origin":"ADAPTADA","source":"L03/L04, pregunta 10"},
  {"id":"H-006","tema":9,"category":"Desarrollo","level":"P","question":"El selector CSS `.aviso` coincide con…","options":["Elementos que tienen esa clase","Solo `id=\"aviso\"`","Solo etiqueta aviso","Todos los párrafos"],"answer":0,"explanation":"El punto indica selector de clase.","origin":"ADAPTADA","source":"L03/L04, pregunta 12"},
  {"id":"H-007","tema":8,"category":"Desarrollo","level":"M","question":"Se elige `(codigo, version)` como clave primaria. ¿Qué debe cumplirse?","options":["Cada columna debe ser única por separado","Una puede ser NULL","La combinación es única y sus componentes no son NULL","Debe haber otra clave primaria"],"answer":2,"explanation":"La unicidad se evalúa sobre la combinación.","origin":"ADAPTADA","source":"L03/L04, pregunta 54"},
  {"id":"H-008","tema":8,"category":"Desarrollo","level":"P","question":"¿Qué filtra nombres que comienzan por el prefijo literal `rt` en SQL?","options":["`nombre LIKE '%rt'`","`nombre LIKE '%rt%'`","`nombre = 'rt%'`","`nombre LIKE 'rt%'`"],"answer":3,"explanation":"El comodín sigue al prefijo; capitalización según intercalación.","origin":"ADAPTADA","source":"L03/L04, pregunta 56"},
  {"id":"H-009","tema":11,"category":"Desarrollo","level":"B","question":"¿Sobre qué núcleo se basa Android?","options":["Windows NT","Linux","Darwin exclusivamente","DOS"],"answer":1,"explanation":"Android no es por ello idéntico a una distribución de escritorio.","origin":"ADAPTADA","source":"L03/L04, pregunta 59"},
  {"id":"H-010","tema":7,"category":"Sistemas","level":"M","question":"¿Qué opción combina dos categorías de autenticación?","options":["Contraseña y llave física de seguridad","Usuario y apellido","Dos PIN","Dos preguntas secretas"],"answer":0,"explanation":"Combina conocimiento y posesión.","origin":"ADAPTADA","source":"L03/L04, pregunta 91"},
  {"id":"H-011","tema":18,"category":"Sistemas","level":"B","question":"¿Qué conducta cumple deberes preventivos del trabajador?","options":["Anular dispositivos","Ocultar riesgos","Cooperar y seguir instrucciones preventivas","Elegir ignorar formación"],"answer":2,"explanation":"La prevención implica obligaciones además de derechos.","origin":"ADAPTADA","source":"L03/L04, pregunta 94"},
  {"id":"H-012","tema":10,"category":"Desarrollo","level":"B","question":"¿Qué operación produce texto JSON desde un valor compatible de JavaScript?","options":["`JSON.parse()`","`JSON.open()`","`JSON.compile()`","`JSON.stringify()`"],"answer":3,"explanation":"Serializar y analizar texto son operaciones distintas.","origin":"ADAPTADA","source":"L03/L04, pregunta 96"},
  {"id":"H-013","tema":15,"category":"Hardware","level":"B","question":"¿Cuál puede contener vídeo y audio para distribución web?","options":["PNG","WebM","TXT","CSV"],"answer":1,"explanation":"WebM es un contenedor audiovisual.","origin":"ADAPTADA","source":"H23/R23, pregunta 7"},
  {"id":"H-014","tema":10,"category":"Desarrollo","level":"P","question":"Abierto `<titulo>`, ¿qué cierre XML corresponde?","options":["`</titulo>`","`<titulo/>`","`</TITULO>`","`<fin titulo>`"],"answer":0,"explanation":"Deben coincidir nombre y capitalización.","origin":"ADAPTADA","source":"H23/R23, pregunta 8"},
  {"id":"H-015","tema":2,"category":"Sistemas","level":"M","question":"Para intercambiar archivos mayores de 4 GiB en sistemas compatibles, ¿qué evita la limitación de FAT32?","options":["DNS","CSV","exFAT","SMTP"],"answer":2,"explanation":"Comprobar soporte en los sistemas concretos; no es compatibilidad universal.","origin":"ADAPTADA","source":"H23/R23, pregunta 11"},
  {"id":"H-016","tema":11,"category":"Desarrollo","level":"M","question":"¿Qué necesita normalmente un programa Java compilado a bytecode?","options":["Solo PHP","Solo CSS","Una tarjeta gráfica específica","JVM compatible"],"answer":3,"explanation":"También deben ser compatibles bibliotecas y dependencias.","origin":"ADAPTADA","source":"H23/R23, pregunta 12"},
  {"id":"H-017","tema":9,"category":"Desarrollo","level":"P","question":"¿Qué selector apunta a los hijos en posiciones pares?","options":["`:pair()`","`:nth-child(2n)`","`:second-only`","`:even-index()`"],"answer":1,"explanation":"El índice de nth-child empieza en uno.","origin":"ADAPTADA","source":"H25/R25, pregunta 4"},
  {"id":"H-018","tema":4,"category":"Redes","level":"M","question":"Para un enlace directo de varios kilómetros, ¿qué medio elegir entre estas opciones?","options":["Fibra monomodo y ópticas de alcance adecuado","USB","UTP convencional de oficina","HDMI corto"],"answer":0,"explanation":"El alcance depende también de ópticas y presupuesto de pérdidas.","origin":"ADAPTADA","source":"H25/R25, pregunta 6"},
  {"id":"H-019","tema":17,"category":"Sistemas","level":"M","question":"¿Qué determina cuánto conservar datos personales?","options":["Siempre cinco años","Espacio libre disponible","Finalidad y obligaciones de conservación aplicables","Preferencia personal sin límite"],"answer":2,"explanation":"Deben justificarse los plazos, no conservarse indefinidamente.","origin":"ADAPTADA","source":"H25/R25, pregunta 8"},
  {"id":"H-020","tema":8,"category":"Desarrollo","level":"B","question":"¿Cuál es conocido por un modelo documental no relacional?","options":["PostgreSQL","MariaDB","MySQL","MongoDB"],"answer":3,"explanation":"Es un ejemplo de base documental, no un modelo relacional clásico.","origin":"ADAPTADA","source":"H25/R25, pregunta 10"},
  {"id":"H-021","tema":2,"category":"Sistemas","level":"B","question":"¿Dónde se guardan habitualmente configuraciones del sistema Linux?","options":["/tmp exclusivamente","/etc","/proc como archivos permanentes","/home siempre"],"answer":1,"explanation":"/etc reúne configuraciones; ubicaciones específicas pueden variar.","origin":"ADAPTADA","source":"H20, pregunta 11"},
  {"id":"H-022","tema":2,"category":"Sistemas","level":"P","question":"¿Qué octal da propietario rwx, grupo r-x y otros r--?","options":["754","745","644","700"],"answer":0,"explanation":"7=4+2+1; 5=4+1; 4=lectura.","origin":"ADAPTADA","source":"H20, pregunta 12"},
  {"id":"H-023","tema":4,"category":"Redes","level":"B","question":"¿Qué protocolo aporta direccionamiento y encaminamiento en la capa de red?","options":["SMTP","TCP","IP","HTTP"],"answer":2,"explanation":"TCP es transporte; SMTP/HTTP son aplicación.","origin":"ADAPTADA","source":"H20, pregunta 13"},
  {"id":"H-024","tema":13,"category":"Hardware","level":"B","question":"¿Qué hipervisor se ejecuta directamente sobre hardware?","options":["Tipo 2","Solo un emulador web","Un editor","Tipo 1"],"answer":3,"explanation":"Es el hipervisor nativo o bare-metal.","origin":"ADAPTADA","source":"H20, pregunta 37"},
];

const TOPIC_NAMES = {
  "1": "Fundamentos de informática y arquitectura de equipos",
  "2": "Sistemas operativos de puesto de usuario",
  "3": "Sistemas corporativos y servidores",
  "4": "Redes y conectividad",
  "5": "Internet, servicios y certificados",
  "6": "Soporte técnico y atención a usuarios",
  "7": "Seguridad informática",
  "8": "Bases de datos",
  "9": "Automatización, scripting y desarrollo web básico",
  "10": "Formatos de datos e intercambio de información",
  "11": "Fundamentos del desarrollo de software",
  "12": "Entornos de desarrollo y herramientas de trabajo",
  "13": "Virtualización, almacenamiento y copias de seguridad",
  "14": "Servicios cloud y herramientas colaborativas",
  "15": "Sistemas audiovisuales, multimedia y producción digital",
  "16": "Documentación, inventario y procedimientos",
  "17": "Protección de datos y uso responsable de sistemas",
  "18": "Derechos y obligaciones de los trabajadores en materia de prevención de riesgos laborales"
};

const CATEGORY_TOPICS = {
  Redes: [4, 5],
  Sistemas: [2, 3, 6, 7, 14, 16, 17, 18],
  Desarrollo: [8, 9, 10, 11, 12],
  Hardware: [1, 13, 15]
};

const ROUND_SECONDS = 30;
const ROUND_LENGTH = 10;
const TRIVIAL_TARGET = 3;
const STORAGE_KEY = "rtve-estudio-v1";

function shuffle(items) {
  const result = items.slice();
  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }
  return result;
}

function calculateScore(correct, remaining, duration) {
  if (!correct || !Number.isFinite(remaining) || !Number.isFinite(duration) || duration <= 0) return 0;
  return 500 + Math.round(500 * Math.max(0, Math.min(remaining / duration, 1)));
}

function normalizeProgress(raw) {
  const input = raw && typeof raw === "object" ? raw : {};
  const validIds = new Set(QUESTION_BANK.map(question => question.id));
  const cleanIds = value => Array.isArray(value) ? [...new Set(value.filter(id => validIds.has(id)))] : [];
  const learned = cleanIds(input.learned);
  const learnedIds = new Set(learned);
  const review = cleanIds(input.review).filter(id => !learnedIds.has(id));
  const trivial = Object.fromEntries(Object.keys(CATEGORY_TOPICS).map(category => {
    const value = input.trivial?.[category];
    return [category, Number.isInteger(value) ? Math.max(0, Math.min(value, TRIVIAL_TARGET)) : 0];
  }));
  const bestScore = Number.isInteger(input.bestScore) ? Math.max(0, Math.min(input.bestScore, ROUND_LENGTH * 1000)) : 0;
  const temas = Object.fromEntries(Object.keys(TOPIC_NAMES).map(tema => {
    const value = input.temas?.[tema];
    return [tema, Number.isInteger(value) ? Math.max(0, Math.min(value, TRIVIAL_TARGET)) : 0];
  }));
  return { learned, review, trivial, temas, bestScore };
}

function prepareQuestion(question) {
  return {
    ...question,
    choices: shuffle(question.options.map((text, index) => ({ text, correct: index === question.answer })))
  };
}

function filteredQuestions(temas) {
  const selected = new Set(temas);
  return QUESTION_BANK.filter(question => selected.has(question.tema));
}

function setFormattedText(element, text) {
  element.replaceChildren();
  String(text).split("`").forEach((part, index) => {
    if (index % 2 === 0) element.append(document.createTextNode(part));
    else {
      const code = document.createElement("code");
      code.textContent = part;
      element.append(code);
    }
  });
}

function questionMeta(question) {
  const origin = question.origin === "ADAPTADA" ? " · Histórica adaptada" : "";
  return `Tema ${question.tema} · ${question.id}${origin}`;
}

function renderOptions(container, question, selected, resolved, disabled, onAnswer) {
  container.replaceChildren();
  question.choices.forEach((choice, index) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.disabled = resolved || disabled;
    button.dataset.answer = String(index);
    button.setAttribute("aria-pressed", String(selected === index));
    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.textContent = "ABCD"[index];
    const content = document.createElement("span");
    content.className = "option-content";
    setFormattedText(content, choice.text);
    button.append(letter, content);
    if (resolved && (choice.correct || selected === index)) {
      const result = document.createElement("span");
      result.className = "option-result";
      result.textContent = choice.correct ? "✓ Correcta" : "× Tu elección";
      button.classList.add(choice.correct ? "is-correct" : "is-wrong");
      button.append(result);
    }
    button.addEventListener("click", () => onAnswer(index));
    item.append(button);
    container.append(item);
  });
}

function renderFeedback(element, title, question) {
  element.replaceChildren();
  const heading = document.createElement("strong");
  heading.textContent = title;
  const answer = document.createElement("p");
  setFormattedText(answer, `Respuesta: ${question.options[question.answer]}`);
  const explanation = document.createElement("p");
  setFormattedText(explanation, question.explanation);
  element.append(heading, answer, explanation);
  element.hidden = false;
}

document.addEventListener("DOMContentLoaded", () => {
  const byId = id => document.getElementById(id);
  const state = { view: "home", mode: "kahoot", temas: Object.keys(TOPIC_NAMES).map(Number), boardPage: 0, reviewIndex: 0, scope: "all", kahoot: null, trivial: null, flash: null };
  let timer = null;
  let deadline = 0;
  let progress;
  const trivialPools = {};

  function showStorageNotice() {
    byId("storage-notice").hidden = false;
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    progress = normalizeProgress(stored ? JSON.parse(stored) : null);
  } catch {
    progress = normalizeProgress(null);
    showStorageNotice();
  }

  function saveProgress() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }
    catch { showStorageNotice(); }
    updateCounts();
  }

  function updateCounts() {
    byId("question-total").textContent = String(QUESTION_BANK.length);
    byId("learned-total").textContent = String(progress.learned.length);
    byId("learned-count").textContent = String(progress.learned.length);
    byId("review-count").textContent = String(progress.review.length);
    byId("best-score").textContent = progress.bestScore.toLocaleString("es-ES");
    const count = filteredQuestions(state.temas).length;
    byId("selection-count").textContent = `${state.temas.length} ${state.temas.length === 1 ? "tema" : "temas"} · ${count} preguntas`;
    byId("play-now").disabled = count === 0;
  }

  function stopTimer() {
    if (timer !== null) clearInterval(timer);
    timer = null;
  }

  function updateClockUI() {
    const round = state.kahoot;
    if (!round) return;
    byId("timer-seconds").textContent = String(Math.ceil(round.remaining));
    byId("timer-progress").value = round.remaining;
    byId("timer-state").textContent = round.paused ? "en pausa" : "restantes";
    byId("pause-timer").textContent = round.paused ? "Continuar" : "Pausar";
    byId("pause-timer").setAttribute("aria-pressed", String(round.paused));
    byId("pause-timer").disabled = round.resolved;
  }

  function startTimer() {
    stopTimer();
    const round = state.kahoot;
    if (!round || round.paused || round.resolved || round.finished || state.mode !== "kahoot" || state.view !== "game") return;
    deadline = performance.now() + round.remaining * 1000;
    timer = setInterval(() => {
      round.remaining = Math.max(0, (deadline - performance.now()) / 1000);
      updateClockUI();
      if (round.remaining === 0) resolveKahoot(null);
    }, 100);
  }

  function pauseKahoot() {
    const round = state.kahoot;
    if (!round || round.paused || round.resolved || round.finished) return;
    round.remaining = Math.max(0, (deadline - performance.now()) / 1000);
    if (round.remaining === 0) { resolveKahoot(null); return; }
    round.paused = true;
    stopTimer();
    updateClockUI();
    byId("kahoot-options").querySelectorAll("button").forEach(button => { button.disabled = true; });
  }

  function renderKahoot() {
    const round = state.kahoot;
    byId("kahoot-play").hidden = !round || round.finished;
    byId("kahoot-result").hidden = !round || !round.finished;
    if (!round) { updateCounts(); return; }
    if (round.finished) { renderKahootResult(); return; }
    const question = round.deck[round.index];
    byId("kahoot-meta").textContent = questionMeta(question);
    byId("kahoot-position").textContent = `${round.index + 1} / ${round.deck.length}`;
    setFormattedText(byId("kahoot-question"), question.question);
    renderOptions(byId("kahoot-options"), question, round.selected, round.resolved, round.paused, resolveKahoot);
    byId("kahoot-feedback").hidden = !round.resolved;
    byId("kahoot-options").hidden = round.resolved;
    byId("kahoot-next").hidden = !round.resolved;
    byId("kahoot-next").firstChild.textContent = round.index === round.deck.length - 1 ? "Ver resultado " : "Siguiente pregunta ";
    byId("kahoot-score").textContent = round.score.toLocaleString("es-ES");
    updateClockUI();
    if (round.resolved) {
      const title = round.selected === null ? "Tiempo agotado." : round.earned > 0 ? `Correcto. +${round.earned} puntos.` : "No esta vez. Sigue construyendo.";
      renderFeedback(byId("kahoot-feedback"), title, question);
    } else startTimer();
  }

  function startKahoot() {
    stopTimer();
    state.reviewIndex = 0;
    const deck = shuffle(filteredQuestions(state.temas)).slice(0, ROUND_LENGTH).map(prepareQuestion);
    if (!deck.length) return;
    state.kahoot = { deck, index: 0, score: 0, correct: 0, missed: [], remaining: ROUND_SECONDS, paused: false, resolved: false, finished: false, selected: null, earned: 0 };
    renderKahoot();
    byId("kahoot-question").focus({ preventScroll: true });
  }

  function resolveKahoot(selected) {
    const round = state.kahoot;
    if (!round || round.resolved || round.finished || round.paused || state.mode !== "kahoot" || state.view !== "game") return;
    round.remaining = Math.max(0, (deadline - performance.now()) / 1000);
    if (round.remaining === 0) selected = null;
    round.resolved = true;
    round.selected = selected;
    stopTimer();
    const question = round.deck[round.index];
    const correct = selected !== null && Boolean(question.choices[selected]?.correct);
    round.earned = calculateScore(correct, round.remaining, ROUND_SECONDS);
    round.score += round.earned;
    if (correct) round.correct += 1;
    else round.missed.push(question);
    renderKahoot();
    byId("kahoot-next").focus({ preventScroll: true });
  }

  function nextKahoot() {
    const round = state.kahoot;
    if (!round?.resolved || round.finished) return;
    if (round.index === round.deck.length - 1) {
      round.finished = true;
      progress.bestScore = Math.max(progress.bestScore, round.score);
      saveProgress();
      renderKahoot();
      byId("result-title").focus({ preventScroll: true });
      return;
    }
    round.index += 1;
    round.remaining = ROUND_SECONDS;
    round.resolved = false;
    round.paused = false;
    round.selected = null;
    round.earned = 0;
    renderKahoot();
    byId("kahoot-question").focus({ preventScroll: true });
  }

  function renderKahootResult() {
    const round = state.kahoot;
    byId("result-score").textContent = round.score.toLocaleString("es-ES");
    byId("result-accuracy").textContent = `${round.correct} de ${round.deck.length} correctas · ${Math.round(round.correct / round.deck.length * 100)} % de acierto`;
    byId("result-review-area").hidden = round.missed.length === 0;
    const question = round.missed[state.reviewIndex];
    if (question) {
      setFormattedText(byId("result-review-question"), question.question);
      renderFeedback(byId("result-review"), "Respuesta y explicación", question);
      byId("result-review-position").textContent = `${state.reviewIndex + 1} / ${round.missed.length} errores`;
      byId("review-prev").disabled = state.reviewIndex === 0;
      byId("review-next").disabled = state.reviewIndex === round.missed.length - 1;
    }
  }

  function renderTrivial() {
    const total = state.temas.reduce((sum, tema) => sum + progress.temas[tema], 0);
    const target = state.temas.length * TRIVIAL_TARGET;
    byId("trivial-progress").max = target;
    byId("trivial-progress").value = total;
    byId("trivial-progress-text").textContent = `${total} de ${target} aciertos · ${state.temas.length} ${state.temas.length === 1 ? "tema" : "temas"}`;
    byId("trivial-board-area").hidden = state.trivial !== null || total === target;
    byId("trivial-board").replaceChildren();
    const shortScreen = window.matchMedia("(max-height: 480px)").matches;
    const pageSize = shortScreen ? (window.matchMedia("(min-width: 600px)").matches ? 3 : 2) : window.matchMedia("(max-height: 600px)").matches ? 4 : 6;
    const pages = Math.ceil(state.temas.length / pageSize);
    state.boardPage = Math.min(state.boardPage, Math.max(0, pages - 1));
    state.temas.slice(state.boardPage * pageSize, state.boardPage * pageSize + pageSize).forEach(tema => {
      const count = progress.temas[tema];
      const button = document.createElement("button");
      button.type = "button";
      button.className = "category-tile";
      button.disabled = count >= TRIVIAL_TARGET;
      button.setAttribute("aria-label", `Tema ${tema}: ${TOPIC_NAMES[tema]}, ${count} de ${TRIVIAL_TARGET} aciertos`);
      const name = document.createElement("strong");
      name.textContent = `Tema ${String(tema).padStart(2, "0")}`;
      const title = document.createElement("span");
      title.textContent = TOPIC_NAMES[tema];
      const status = document.createElement("span");
      status.className = "tile-foot";
      status.textContent = `${count} / ${TRIVIAL_TARGET}${count >= TRIVIAL_TARGET ? " · Completado" : " · Jugar"}`;
      button.append(name, title, status);
      button.addEventListener("click", () => pickTrivial(tema));
      byId("trivial-board").append(button);
    });
    byId("board-position").textContent = `${state.boardPage + 1} / ${pages}`;
    byId("board-prev").disabled = state.boardPage === 0;
    byId("board-next").disabled = state.boardPage >= pages - 1;
    byId("trivial-complete").hidden = total !== target || state.trivial !== null;
    byId("trivial-play").hidden = state.trivial === null;
    if (!state.trivial) return;
    const { question, selected, resolved } = state.trivial;
    byId("trivial-meta").textContent = questionMeta(question);
    byId("trivial-position").textContent = `${progress.temas[question.tema]} / ${TRIVIAL_TARGET} aciertos`;
    setFormattedText(byId("trivial-question"), question.question);
    renderOptions(byId("trivial-options"), question, selected, resolved, false, resolveTrivial);
    byId("trivial-options").hidden = resolved;
    byId("trivial-feedback").hidden = !resolved;
    byId("trivial-next").hidden = !resolved;
    if (resolved) renderFeedback(byId("trivial-feedback"), question.choices[selected]?.correct ? "Correcto. Una pieza más cerca." : "No esta vez. Los errores no restan.", question);
  }

  function pickTrivial(tema) {
    if (state.trivial || !state.temas.includes(tema) || progress.temas[tema] >= TRIVIAL_TARGET || state.view !== "game") return;
    if (!trivialPools[tema]?.length) trivialPools[tema] = shuffle(filteredQuestions([tema]));
    state.trivial = { question: prepareQuestion(trivialPools[tema].pop()), selected: null, resolved: false };
    renderTrivial();
    byId("trivial-question").focus({ preventScroll: true });
  }

  function resolveTrivial(selected) {
    const round = state.trivial;
    if (!round || round.resolved || state.mode !== "trivial" || state.view !== "game") return;
    round.resolved = true;
    round.selected = selected;
    if (round.question.choices[selected]?.correct) {
      const tema = round.question.tema;
      progress.temas[tema] = Math.min(TRIVIAL_TARGET, progress.temas[tema] + 1);
      saveProgress();
    }
    renderTrivial();
    byId("trivial-next").focus({ preventScroll: true });
  }

  function startFlashSession() {
    const allowed = state.scope === "all" ? null : new Set(progress[state.scope]);
    const deck = shuffle(filteredQuestions(state.temas).filter(question => !allowed || allowed.has(question.id)));
    state.flash = { deck, index: 0, flipped: false };
    renderFlash();
  }

  function renderFlash() {
    const session = state.flash;
    document.querySelectorAll("[data-scope]").forEach(button => {
      const active = button.dataset.scope === state.scope;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    const question = session?.deck[session.index];
    byId("flash-session").hidden = !question;
    byId("flash-empty").hidden = Boolean(question);
    if (!question) {
      const completed = Boolean(session?.deck.length);
      byId("flash-empty-title").textContent = completed ? "Sesión completada." : "Todavía no hay tarjetas aquí.";
      byId("flash-empty-message").textContent = completed ? "Cada repaso cuenta. Puedes volver a recorrer estas tarjetas cuando quieras." : state.scope === "review" ? "Marca tarjetas como Repasar para encontrarlas aquí. Prueba también otra categoría." : state.scope === "learned" ? "Las tarjetas que marques como Aprendido aparecerán aquí." : "Prueba otra categoría para seguir estudiando.";
      byId("restart-flash").textContent = completed ? "Repetir sesión" : "Mostrar todas las tarjetas";
      return;
    }
    byId("flash-meta").textContent = questionMeta(question);
    byId("flash-position").textContent = `${session.index + 1} / ${session.deck.length}`;
    setFormattedText(byId("flash-front"), question.question);
    setFormattedText(byId("flash-answer"), question.options[question.answer]);
    setFormattedText(byId("flash-explanation"), question.explanation);
    syncFlashFace();
  }

  function syncFlashFace() {
    const session = state.flash;
    const question = session?.deck[session.index];
    if (!question) return;
    const flipped = session.flipped;
    byId("flash-card").classList.toggle("is-flipped", flipped);
    byId("flash-card").setAttribute("aria-pressed", String(flipped));
    byId("flash-card").setAttribute("aria-label", flipped ? `Respuesta: ${question.options[question.answer].replaceAll("`", "")}. ${question.explanation.replaceAll("`", "")}. Toca para volver a la pregunta.` : `Pregunta: ${question.question.replaceAll("`", "")}. Toca para mostrar la respuesta.`);
    byId("flash-front-face").setAttribute("aria-hidden", String(flipped));
    byId("flash-back-face").setAttribute("aria-hidden", String(!flipped));
    byId("mark-review").disabled = !flipped;
    byId("mark-learned").disabled = !flipped;
    byId("flash-guidance").textContent = flipped ? "¿Lo tenías claro? Decide cómo quieres volver a verlo." : "Primero intenta responder. Después gira la tarjeta.";
  }

  function nextFlash() {
    if (!state.flash?.deck[state.flash.index]) return;
    state.flash.index += 1;
    state.flash.flipped = false;
    renderFlash();
    byId(state.flash.deck[state.flash.index] ? "flash-card" : "restart-flash").focus({ preventScroll: true });
  }

  function markFlash(bucket) {
    const session = state.flash;
    const question = session?.deck[session.index];
    if (!question || !session.flipped) return;
    progress.learned = progress.learned.filter(id => id !== question.id);
    progress.review = progress.review.filter(id => id !== question.id);
    progress[bucket].push(question.id);
    saveProgress();
    nextFlash();
  }

  function setView(view) {
    state.view = view;
    document.body.classList.remove("view-home", "view-selection", "view-game");
    document.body.classList.add(`view-${view}`);
    byId("home-view").hidden = view !== "home";
    byId("selection-view").hidden = view !== "selection";
  }

  function switchMode(mode) {
    state.mode = mode;
    const descriptions = {
      kahoot: "Hasta diez preguntas · 30 segundos por pregunta · Acierto y velocidad." ,
      trivial: "Tres aciertos por tema. Completa los temas que elijas.",
      flashcards: "Gira, comprende y decide: Aprendido o Repasar."
    };
    byId("mode-description").textContent = descriptions[mode];
    byId("game-title").textContent = mode === "flashcards" ? "Flashcards" : mode === "trivial" ? "Trivial" : "Kahoot";
    document.querySelectorAll("[data-mode]").forEach(button => {
      const active = button.dataset.mode === mode;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    ["kahoot", "trivial", "flashcards"].forEach(name => { byId(`${name}-view`).hidden = name !== mode; });
  }

  function updateTopicSelection() {
    state.temas = Array.from(byId("topic-list").querySelectorAll("input:checked"), input => Number(input.value));
    updateCounts();
  }

  function renderTopics() {
    Object.entries(TOPIC_NAMES).forEach(([number, title]) => {
      const label = document.createElement("label");
      label.className = "topic-choice";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = number;
      checkbox.checked = true;
      checkbox.addEventListener("change", updateTopicSelection);
      const text = document.createElement("span");
      const name = document.createElement("strong");
      name.textContent = `Tema ${number.padStart(2, "0")}`;
      const description = document.createElement("span");
      description.textContent = title;
      text.append(name, description);
      label.append(checkbox, text);
      byId("topic-list").append(label);
    });
  }

  function openGame() {
    if (!filteredQuestions(state.temas).length) return;
    state.kahoot = null;
    state.trivial = null;
    state.flash = null;
    state.scope = "all";
    state.boardPage = 0;
    setView("game");
    byId("game-dialog").showModal();
    if (state.mode === "kahoot") startKahoot();
    else if (state.mode === "trivial") { renderTrivial(); byId("trivial-board").querySelector("button:not(:disabled)")?.focus(); }
    else { startFlashSession(); byId("flash-card").focus(); }
  }

  byId("go-play").addEventListener("click", () => { setView("selection"); byId("selection-title").focus(); });
  byId("go-home").addEventListener("click", () => { setView("home"); byId("go-play").focus(); });
  byId("play-now").addEventListener("click", openGame);
  byId("close-game").addEventListener("click", () => byId("game-dialog").close());
  byId("game-dialog").addEventListener("close", () => {
    pauseKahoot();
    stopTimer();
    setView("selection");
    byId("play-now").focus();
  });
  document.querySelectorAll("[data-mode]").forEach(button => button.addEventListener("click", () => switchMode(button.dataset.mode)));
  ["select-all", "select-none"].forEach(id => byId(id).addEventListener("click", () => {
    byId("topic-list").querySelectorAll("input").forEach(input => { input.checked = id === "select-all"; });
    updateTopicSelection();
  }));
  byId("restart-kahoot").addEventListener("click", startKahoot);
  byId("kahoot-next").addEventListener("click", nextKahoot);
  ["review-prev", "review-next"].forEach(id => byId(id).addEventListener("click", () => {
    state.reviewIndex = Math.max(0, Math.min(state.kahoot.missed.length - 1, state.reviewIndex + (id === "review-next" ? 1 : -1)));
    renderKahootResult();
  }));
  byId("pause-timer").addEventListener("click", () => {
    const round = state.kahoot;
    if (!round || round.resolved || round.finished) return;
    if (!round.paused) pauseKahoot();
    else { round.paused = false; renderKahoot(); }
  });
  ["board-prev", "board-next"].forEach(id => byId(id).addEventListener("click", () => {
    state.boardPage += id === "board-next" ? 1 : -1;
    renderTrivial();
  }));
  byId("trivial-next").addEventListener("click", () => {
    if (!state.trivial?.resolved) return;
    state.trivial = null;
    renderTrivial();
    (byId("trivial-board").querySelector("button:not(:disabled)") || byId("close-game")).focus({ preventScroll: true });
  });
  byId("reset-trivial").addEventListener("click", () => {
    state.temas.forEach(tema => { progress.temas[tema] = 0; delete trivialPools[tema]; });
    state.trivial = null;
    saveProgress();
    renderTrivial();
    byId("trivial-board").querySelector("button").focus();
  });
  document.querySelectorAll("[data-scope]").forEach(button => button.addEventListener("click", () => {
    state.scope = button.dataset.scope;
    startFlashSession();
  }));
  byId("flash-card").addEventListener("click", () => {
    if (!state.flash?.deck[state.flash.index]) return;
    state.flash.flipped = !state.flash.flipped;
    syncFlashFace();
  });
  byId("mark-learned").addEventListener("click", () => markFlash("learned"));
  byId("mark-review").addEventListener("click", () => markFlash("review"));
  byId("skip-flash").addEventListener("click", nextFlash);
  byId("restart-flash").addEventListener("click", () => {
    if (!state.flash?.deck.length) state.scope = "all";
    startFlashSession();
  });
  document.addEventListener("visibilitychange", () => { if (document.hidden && state.mode === "kahoot") pauseKahoot(); });
  document.addEventListener("keydown", event => {
    if (state.view !== "game" || event.ctrlKey || event.altKey || event.metaKey || /^(INPUT|TEXTAREA|SELECT)$/.test(event.target.tagName) || event.target.isContentEditable) return;
    if (!/^[1-4]$/.test(event.key)) return;
    const container = state.mode === "kahoot" ? byId("kahoot-options") : state.mode === "trivial" ? byId("trivial-options") : null;
    const button = container?.querySelectorAll("button")[Number(event.key) - 1];
    if (button && !button.disabled) { event.preventDefault(); button.click(); }
  });
  window.addEventListener("resize", () => { if (state.view === "game" && state.mode === "trivial") renderTrivial(); });
  window.addEventListener("pagehide", () => { pauseKahoot(); stopTimer(); });
  renderTopics();
  updateCounts();
  switchMode("kahoot");
  setView("home");
});

window.addEventListener("load", () => {
  if (!window.isSecureContext || !/^https?:$/.test(location.protocol) || !("serviceWorker" in navigator)) return;
  navigator.serviceWorker.register("./sw.js").catch(error => {
    console.warn("No se pudo activar el modo offline:", error);
  });
});
