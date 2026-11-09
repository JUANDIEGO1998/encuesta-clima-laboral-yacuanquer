const GOOGLE_SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbzlt5DnDDzx6Toi_fjP-LbI8gRAKQyuT3yodfjrR3ZsHoQAsl5lArPnFopxJ3fLPbLQ/exec";

const preguntas = [

{
categoria:"COMUNICACIÓN Y TECNOLOGÍA INSTITUCIONAL",
pregunta:"¿Qué medio utiliza prioritariamente para comunicarse con sus compañeros de trabajo y superiores?",
opciones:[
"Correo institucional",
"WhatsApp / Mensajería instantánea",
"Llamadas telefónicas",
"Reuniones presenciales / De forma directa",
"Circulares y actos administrativos físicos o digitales"
]
},

{
categoria:"COMUNICACIÓN Y TECNOLOGÍA INSTITUCIONAL",
pregunta:"¿Cómo califica la eficacia de los canales de comunicación interna en la Alcaldía? (1 a 5, donde 1 es muy deficiente y 5 excelente)",
opciones:[
"1",
"2",
"3",
"4",
"5"
]
},

{
categoria:"COMUNICACIÓN Y TECNOLOGÍA INSTITUCIONAL",
pregunta:"¿A través de qué medio se entera oportunamente de la información relevante, directrices y actividades de la Alcaldía?",
opciones:[
"Página web / Redes sociales oficiales de la Alcaldía",
"Correo electrónico institucional",
"Grupos oficiales de difusión (WhatsApp)",
"Carteleras informativas internas",
"De forma directa (jefes o compañeros)"
]
},

{
categoria:"PARTICIPACIÓN, INNOVACIÓN Y GESTIÓN",
pregunta:"¿Qué espacio se brinda en su dependencia para la innovación y la mejora de procesos?",
opciones:[
"Uso autónomo del tiempo para proponer mejoras",
"Espacios formales de co-creación y planeación por dependencias",
"Posibilidad abierta de presentar ideas y proyectos ante el nivel directivo",
"No se brindan espacios específicos para este fin"
]
},

{
categoria:"PARTICIPACIÓN, INNOVACIÓN Y GESTIÓN",
pregunta:"¿En qué oportunidades se tiene en cuenta su opinión personal y técnica en la toma de decisiones de su área?",
opciones:[
"Generalmente siempre se tiene en cuenta",
"Cuando se presenta algún problema operativo o dificultad",
"En las reuniones periódicas de equipo o comités",
"Cuando el superior inmediato o alcalde lo considera necesario",
"Nunca se tiene en cuenta"
]
},

{
categoria:"RECONOCIMIENTO Y ESTÍMULOS",
pregunta:"¿De qué manera se reconoce su desempeño y compromiso laboral en la administración municipal?",
opciones:[
"Reconocimiento público institucional",
"Felicitación personal y/o memorando de exaltación",
"Asignación de nuevas responsabilidades de liderazgo",
"Permisos o incentivos de bienestar",
"No se cuenta con mecanismos claros de reconocimiento"
]
},

{
categoria:"RELACIONES INTERPERSONALES Y CLIMA LABORAL",
pregunta:"¿Cómo actúan por lo general sus compañeros cuando se presentan diferencias o altercados en el equipo de trabajo?",
opciones:[
"Informan inmediatamente al jefe inmediato o instancia competente",
"Buscan mediar y ayudar a solucionar el problema de forma constructiva",
"Critican o generan tensión en la situación",
"Ignoran por completo la situación"
]
},

{
categoria:"RELACIONES INTERPERSONALES Y CLIMA LABORAL",
pregunta:"¿Qué aspectos considera usted que afectan negativamente su ambiente laboral?",
opciones:[
"Relaciones interpersonales / rumores",
"Exceso de carga laboral o trámites represados",
"Espacios físicos, mobiliario o herramientas tecnológicas inadecuadas",
"Presión excesiva por parte de superiores",
"El ambiente de trabajo es estable, armónico y colaborativo"
]
},

{
categoria:"RELACIONES INTERPERSONALES Y CLIMA LABORAL",
pregunta:"¿Cómo califica la respuesta de su jefe inmediato ante conflictos o tensiones en el grupo?",
opciones:[
"Aplica correctivos normativos con rigor y justicia",
"Promueve el diálogo y busca soluciones alternativas",
"Informa a instancias superiores (Secretaría de Gobierno / Control Interno)",
"Ignora o minimiza la situación"
]
},

{
categoria:"CARGAS LABORALES, COMPETENCIAS Y CONDICIONES",
pregunta:"¿Su carga laboral corresponde a sus competencias y perfil profesional?",
opciones:[
"Sí, es totalmente acorde con mi formación y manual de funciones",
"Sí, he desarrollado competencias prácticas para cumplir con solvencia",
"No, mi formación no corresponde plenamente a la labor designada",
"No, mi perfil profesional es más complejo y hay sobrecarga operativa"
]
},

{
categoria:"CARGAS LABORALES, COMPETENCIAS Y CONDICIONES",
pregunta:"¿Cuánto tiempo en promedio emplea a la semana para cumplir con sus funciones?",
opciones:[
"Menos de 40 horas",
"De 40 a 45 horas",
"Entre 45 y 55 horas",
"Más de 55 horas semanales de manera constante"
]
},

{
categoria:"CARGAS LABORALES, COMPETENCIAS Y CONDICIONES",
pregunta:"¿Considera que su asignación salarial o retribución guarda proporción con su responsabilidad y carga de trabajo?",
opciones:[
"Sí, es equivalente a la responsabilidad y carga laboral",
"Sí, corresponde al promedio del sector público municipal en la región",
"No, la remuneración no es proporcional a la alta exigencia y responsabilidad",
"No corresponde a la complejidad de las funciones asignadas"
]
},

{
categoria:"LIDERAZGO Y COMPROMISO INSTITUCIONAL",
pregunta:"¿Cómo definiría predominantemente el estilo de liderazgo de su jefe inmediato o superior de dependencia?",
opciones:[
"Orientado a resultados, dinámico y participativo",
"Estructurado, rígido y estrictamente apegado al cumplimiento normativo",
"Democrático, abierto al consenso y al trabajo en equipo",
"Centralizador en la toma de decisiones",
"Flexible y facilitador"
]
},

{
categoria:"LIDERAZGO Y COMPROMISO INSTITUCIONAL",
pregunta:"¿En su criterio, qué tan comprometidos están sus compañeros con el servicio a la comunidad de Yacuanquer?",
opciones:[
"Nada comprometidos",
"Un poco comprometidos",
"Muy comprometidos",
"Demasiado comprometidos con la vocación de servicio público"
]
},

{
categoria:"BIENESTAR, ESPARCIMIENTO E INTEGRIDAD",
pregunta:"¿Cuál o cuáles actividades de bienestar e integración prefiere o se llevan a cabo en su área?",
opciones:[
"Celebración de cumpleaños y fechas especiales institucionales",
"Jornadas deportivas, recreativas o pausas activas",
"Encuentros o actividades de integración extra-laborales",
"Capacitaciones en ética, clima y cultura organizacional",
"No suelo participar en actividades de bienestar"
]
}

];

const app = document.getElementById('app');

let indice = 0;
let respuestas = [];
let participante = {};

mostrarBienvenida();

function mostrarBienvenida(){

app.innerHTML = `

<div class="card">

<div style="text-align:center;">

<img
src="logo-alcaldia.jpeg"
style="
width:120px;
margin-bottom:20px;
">

<h2>
ALCALDÍA MUNICIPAL DE YACUANQUER, NARIÑO
</h2>

<h3 style="margin-top:15px;line-height:1.6;">

SECRETARÍA DE GOBIERNO Y GENERAL
<br>
DIAGNÓSTICO DE CLIMA LABORAL Y CULTURA ORGANIZACIONAL

</h3>

<div style="
margin-top:25px;
padding:25px;
background:#f5f8fc;
border-radius:12px;
text-align:justify;
line-height:1.8;
">

La presente encuesta tiene como objetivo medir,
evaluar y fortalecer el clima laboral y el bienestar
del talento humano de la Alcaldía Municipal de
Yacuanquer.

<br><br>

Sus respuestas son confidenciales y serán utilizadas
exclusivamente con fines de mejora institucional en
el marco de la gestión pública y la integridad
administrativa.

</div>

<button
class="btn"
style="margin-top:30px;"
onclick="mostrarRegistro()">

📝 INICIAR ENCUESTA

</button>

</div>

</div>

`;

}

function mostrarRegistro(){

app.innerHTML = `

<div class="card">

<h2>Datos Generales</h2>

<div class="form-group">
<label>Nombre Completo</label>
<input id="nombre">
</div>

<div class="form-group">

<label>Dependencia</label>

<select id="dependencia">

<option value="">Seleccione una dependencia</option>

<option>Despacho Municipal</option>
<option>Secretaria de Gobierno y General</option>
<option>Oficina de Cultura, Recreación y Deporte</option>
<option>Oficina de Archivo, Gestión Documental y Correspondencia</option>
<option>Oficina de Almacén General</option>
<option>Inspección de Convivencia y Paz</option>
<option>Comisaria de Familia</option>
<option>Secretaria de Planeación y Obras Publicas</option>
<option>Secretaria de Hacienda</option>
<option>Oficina de Presupuesto y gestión de Ingresos</option>
<option>Dirección Local de Salud</option>
<option>Oficina de Salud Publica</option>
<option>Oficina de Bienestar Social</option>
<option>Oficina de Contratación</option>
<option>Oficina de Control Interno</option>
<option>Oficina de Asistencia Técnica Agropecuaria</option>

</select>

</div>


<div class="form-group">
<label>Tipo de Vinculación</label>

<select id="vinculacion">
<option>Carrera Administrativa</option>
<option>Libre Nombramiento y Remoción</option>
<option>Provisionalidad</option>
<option>Contratista OPS</option>
</select>

</div>

<div class="form-group">
<label>Tiempo de servicio en la entidad</label>
<input id="tiempo">
</div>

<button
class="btn"
onclick="iniciarEncuesta()">

Continuar

</button>

</div>

`;

}

function iniciarEncuesta(){

const nombre =
document.getElementById('nombre').value.trim();

const dependencia =
document.getElementById('dependencia').value;

const vinculacion =
document.getElementById('vinculacion').value;

const tiempo =
document.getElementById('tiempo').value.trim();

if(nombre === ''){

alert('Por favor ingrese el nombre completo.');
return;

}

if(dependencia === ''){

alert('Por favor seleccione una dependencia.');
return;

}

if(vinculacion === ''){

alert('Por favor seleccione el tipo de vinculación.');
return;

}

if(tiempo === ''){

alert('Por favor indique el tiempo de servicio.');
return;

}

participante = {

nombre,
dependencia,
vinculacion,
tiempo

};

mostrarPregunta();

}
function mostrarPregunta(){

if(indice >= preguntas.length){

finalizarEncuesta();
return;

}

const pregunta = preguntas[indice];

let opciones = '';

pregunta.opciones.forEach(op=>{

opciones += `

<label class="option">

<input
type="radio"
name="respuesta"
value="${op}">

${op}

</label>

`;

});

app.innerHTML = `

<div class="card">

<div class="progress">

Pregunta ${indice+1} de ${preguntas.length}

</div>

<h2>${pregunta.categoria}</h2>

<p>${pregunta.pregunta}</p>

<div class="options">

${opciones}

</div>

<button
class="btn"
onclick="guardarRespuesta()">

${indice === preguntas.length - 1 ? 'Finalizar Encuesta' : 'Siguiente'}

</button>

</div>

`;

}

function guardarRespuesta(){

const opcion =
document.querySelector(
'input[name="respuesta"]:checked'
);

if(!opcion){

alert('Seleccione una respuesta');
return;

}

respuestas.push(opcion.value);

indice++;

mostrarPregunta();

}



async function finalizarEncuesta(){

const datos = {

...participante,

fecha:new Date().toLocaleString(),

respuestas

};

try{

await fetch(
GOOGLE_SCRIPT_URL,
{
method:"POST",
headers:{
"Content-Type":"text/plain"
},
body:JSON.stringify(datos)
}
);

}catch(error){

console.error(error);

}

app.innerHTML = `

<div class="card thanks">

<h2>
✅ Encuesta Completada
</h2>

<p>

Gracias por participar en el diagnóstico
de clima laboral y cultura organizacional
de la Alcaldía Municipal de Yacuanquer.

</p>

<br>

<p>

Sus respuestas fueron registradas correctamente.

</p>

</div>

`;

}