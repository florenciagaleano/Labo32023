/*console.log(document.body);
console.log(document.element);
console.log(document.forms);
console.log(document.links);
console.log(document.styleSheets);*/

//metodos para seleccionar los elementos con el dom

const $parrafo = document.getElementById("parrafo1");
/*console.log(document.getElementsByClassName("tarjeta"));
console.log(document.getElementsByName("nombre"));
console.log($parrafo);
console.log(document.getElementsByTagName("a"));

console.log("////////////////////////////////////////////////////////");

console.log(document.querySelector("#parrafo1"));
console.log(document.querySelector(".tarjeta"));//si tengo mas de uno me trae solo el primero
console.log(document.querySelectorAll(".tarjeta"));
console.log(document.querySelectorAll("li"));
console.log(document.querySelector("ul a"));
*/

//atributos getter y setter o notacion de punto
/*
const $txtNombre = document.getElementsByName("nombre")[0];

$txtNombre.setAttribute("placeholder","escribi tu nombre");
console.log($txtNombre.hasAttribute("placeholder"));
console.log($txtNombre.placeholder);
$txtNombre.removeAttribute("placeholder");
console.log($txtNombre.hasAttribute("placeholder"));

const $lista = document.querySelector("h2");
$lista.dataset.description = "lista x";
console.log($lista.dataset.description);
$lista.setAttribute("data-description", "lista Y");
console.log($lista.getAttribute("data-description"));*/

//console.log(document.querySelector("li data-sec"))

/*
const $tarjeta1 = document.querySelector(".tarjeta");
/*
$tarjeta1.setAttribute("style", "background-color: yellow");
$tarjeta1.style.setProperty("background-color", "violet");

console.log($tarjeta1.style.getPropertyValue("background-color"));
*/
/*
$tarjeta1.classList.add("rotar-45","sepia");
console.log($tarjeta1.classList.contains("sepia"));
$tarjeta1.classList.remove("sepia");
$tarjeta1.classList.toggle("sepia");//si no lo tengo lo agrega y si lo tengo lo saca
console.log($tarjeta1.classList.contains("sepia"));
*/
/*
$parrafo.textContent = "<mark>Estoy desde js</mark>";//no interpreta html, el text content
$parrafo.innerHTML = `<p><mark>Estoy desde js</mark></p>
<p><mark>Estoy desde js</mark></p>
<p><mark>Estoy desde js</mark></p>`;
//como lo inyecto como texto no tengo la referencia

$parrafo.outerHTML = `<p><mark>Estoy desde js</mark></p>
<p><mark>Estoy desde js</mark></p>
<p><mark>Estoy desde js</mark></p>`;

$parrafo.querySelector("p");

const $newTarjeta = document.createElement("figure"),
$imagen = document.createElement("img"),
$fig = document.createElement("figcaption"),
texto = document.createTextNode("Any"),
$sectionImagenes = document.querySelector(".imagenes");

$newTarjeta.classList.add("tarjeta");
$imagen.setAttribute("src","https://placeimg.com//200/200/any")
$imagen.setAttribute("alt","cualquiera");
$newTarjeta.appendChild($imagen);
$newTarjeta.appendChild($fig);
$fig.appendChild(texto);

$sectionImagenes.appendChild($newTarjeta);
*/
/*
const listaFrutas = ['banana','manzana','pera','melon','sandia'];
$listaFrutas = document.getElementById("frutas");
const fragmento = document.createDocumentFragment();
//$listaFrutas = document.createElement("li");
listaFrutas.forEach((el)=>{
    const $li = document.createElement("li");
    $li.textContent = el;
    fragmento.appendChild($li);
})

$listaFrutas.appendChild(fragmento);*/
const $imagenes = document.querySelector(".imagenes");//section imagenes
let $tarjeta = $imagenes.firstElementChild;
//console.log($tarjeta);
//me muestra uno y tendria q mostrar 4
//conseguir un array de objetos bajarlo como json pasarloa  una variable array de esos objetos, tirarlo a funcion que devuelta la tabla cargada con lso elementos y les lea las keys.
//Por ej si hay algo con id que lo lea
//se hace la tr del encabezado con las keys y el resto del contenido con los valores de losobjetos
do{
    console.log($tarjeta);
    $tarjeta = $tarjeta.nextElementSibling;
}while($tarjeta.nextElementSibling)
//console.log($imagenes);









