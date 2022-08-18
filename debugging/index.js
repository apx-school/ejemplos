const apx = {
  url: "https://apx.school/",
  cursos: [
    {
      id: "dwf",
      nombre: "Desarrollo web fullstack",
    },
    {
      id: "mod-0",
      nombre: "¿Qué es programar?",
    },
    {
      id: "eng",
      nombre: "English for dev",
    },
  ],
};

console.table(apx.cursos);

/* -> 
  Descomentar la siguiente linea
  y abrir la devtools de chrome para probar la instrucción debugger
*/
// debugger;

apx.comu = "https://apx.school/comu";

// -> console.timer
function estoTardaUnToque() {
  var items = [];

  for (var i = 0; i < 100000; i++) {
    items.push({ index: i });
  }
}

console.time("miTimer");
estoTardaUnToque();
console.timeEnd("miTimer");

// console trace
function algoFallaAca() {
  console.trace("trace");
}

function otraFunction() {
  algoFallaAca();
}

otraFunction();

// -> console group y console count

// console.group("lo de los pares");
[1, 2, 3, 4, 5, 6, 7].forEach((n) => {
  if (n % 2 == 0) {
    console.count("pares");
  }
});
// console.groupEnd();

if (!apx.nuevoCurso) {
  console.error("Por ahora...");
}

if (!apx.nuevoCurso) {
  console.warn("Se vienen cositas");
}

// console.log con colores
console.log("%c Opa la papa! ", "background: #222; color: #bada55");
