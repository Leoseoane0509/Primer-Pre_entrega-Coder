// Declaración de función
function comprar(nombre, celular, email, cursosEnCarro) {
  let cant = cursosEnCarro.reduce((acc, item) => item.precio + acc, 0);
  alert(
    `¡Muchas gracias por tu compra, ${nombre} ! \nEl total es el siguiente: $ ${cant}`
  );
}
// Creando objetos mediante una clase
class Curso {
  constructor(id, nombre, precio, idioma) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.idioma = idioma;
  }

  mostrarCurso() {
    return `Producto: ${this.nombre}  \nPrecio: ${this.precio} \nID: ${this.id} \n\n`;
  }
}

// ARRAYS
// Array de los cursos que están disponibles para comprar (con objetos adentro)
let cursosDisponibles = [
  new Curso(1, "Curso de sintáxis", 15000, "Español"),
  new Curso(2, "Curso de sintáxis", 18000, "Inglés"),
  new Curso(3, "Curso de gramática", 10000, "Español"),
  new Curso(4, "Curso de gramática", 12000, "Inglés"),
  new Curso(5, "Curso de escritura", 14000, "Español"),
  new Curso(6, "Curso de escritura", 16000, "Inglés"),
  new Curso(7, "Curso de vocabulario", 20000, "Español"),
  new Curso(8, "Curso de vocabulario", 22000, "Inglés"),
];
console.log(cursosDisponibles);

// Array de los cursos que están en el carrito de compras.Arranca en cero
let cursosEnCarro = [];

// Array de las categorías de cada producto (para luego filtrar por categoría)
let idiomas = ["Español", "Inglés"];

let idioma = "";

while (idioma != "salir" && idioma != null) {
  let idiomasOrdenados = idiomas.join(" | ");
  idioma = prompt(
    `Ingrese un idioma para filtrar en la búsqueda o ingrese "salir": \n(${idiomasOrdenados})`
  );
  if (idioma != "salir" && idioma != null) {
    let cursosFiltradosPorCategoria = cursosDisponibles.filter(
      (item) => item.idioma == idioma
    );
    let cartel = "";
    for (let i = 0; i < cursosFiltradosPorCategoria.length; i++) {
      cartel += cursosFiltradosPorCategoria[i].mostrarCurso();
    }
    let idSeleccionado = Number(
      prompt("Seleccione el id del producto que quiere comprar \n" + cartel)
    );

    let cursoParaCarro = cursosFiltradosPorCategoria.find(
      (item) => item.id == idSeleccionado
    );
    console.log(cursoParaCarro);

    if (cursoParaCarro) {
      cursosEnCarro.push(cursoParaCarro);
    }
  }
}

// Condicional
if (cursosEnCarro.length > 0) {
  alert("Ingrese sus datos para finalizar la compra");
  let nombre = prompt("Ingrese su nombre");
  let celular = Number("Ingrese su número de celular");
  let email = prompt("Ingrese su email");
  comprar(nombre, celular, email, cursosEnCarro);
}
