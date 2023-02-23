// VARIABLES
const botonProductos = document.getElementById("btnProductos")
const botonContacto = document.getElementById("btnContacto")
const botonAgregar = document.getElementById("btnAgregar")
const botonReiniciar = document.getElementById("reiniciar")
const botonUbicacion = document.getElementById("btnUbicacion")
const botonVideos = document.getElementById("btnVideos")
const botonGaleria = document.getElementById("btnGaleria")
const botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
const botonCarrito = document.getElementById("botonCarrito")
const sectionProductos = document.getElementById("productos")
const sectionUbicacion= document.getElementById("ubicacion")
const sectionBuscador = document.getElementById("nav")
const sectionContacto = document.getElementById("contacto")
const sectionGaleria = document.getElementById("galeria")
const sectionVideos = document.getElementById("videos")
const sectionReiniciar = document.getElementById("rei")
const sectionBotones = document.getElementById("botones")
const $form = document.querySelector('#form')
const dia = luxon.DateTime
const Hoy = dia.now()

let mueblesDiv = document.getElementById("muebles")
let guardarMuebleBtn = document.getElementById("guardarMuebleBtn")
let encontrado = document.getElementById("encontrado")
let ordenProductos= document.getElementById("ordenProductos")
let carrito = document.getElementById("carrito")
let añadirMueble = document.getElementById("añadirMueble")
let totalCompra = document.getElementById("totalCompra")
let buscador = document.getElementById("buscador")
let fecha = document.getElementById("fecha")
let fechaHoy = Hoy.toLocaleString(dia.DATE_MED_WITH_WEEKDAY)
let productosEnCarrito

let deposito = []


//EVENTOS
$form.addEventListener('submit', handleSubmit)
botonUbicacion.addEventListener(`click`, funcionUbicacion)
botonProductos.addEventListener(`click`, funcionProductos)
botonContacto.addEventListener(`click`, funcionContacto)
botonReiniciar.addEventListener("click", reiniciarPag)
botonGaleria.addEventListener("click", funcionGaleria)
botonVideos.addEventListener("click", funcionVideos)
guardarMuebleBtn.addEventListener("click", ()=>{
    cargarMueble(deposito)})
botonCarrito.addEventListener("click", () =>{
cargarProductosCarrito(productosEnCarrito)
})
buscador.addEventListener("input", ()=>{  
buscarInfo(buscador.value.toLowerCase(), deposito)
})

botonFinalizarCompra.addEventListener("click", ()=>{
finalizarCompra()})

ordenProductos.addEventListener("change", ()=>{
if(ordenProductos.value == 1){
    ordenarMayorMenor(deposito)
}else if(ordenProductos.value == 2){
    ordenarMenorMayor(deposito)
}else if(ordenProductos.value == 3){
    ordenarAlfabeticamenteTipo(deposito)
}else{
    mostrarMuebles(deposito)
}
})

sectionContacto.style.display = "none"
sectionReiniciar.style.display = "none"
sectionProductos.style.display = "none"
sectionBuscador.style.display = "none"
botonAgregar.style.display = "none"

// CLASES
class Mueble {
    constructor(id, modelo, tipo, precio, imagen){
        this.id = id,
        this.modelo = modelo,
        this.tipo = tipo,
        this.precio = precio,
        this.imagen = imagen

    }
}

// Funciones de secciones
function reiniciarPag(){
    location.reload()
}

function funcionProductos(){
    sectionBuscador.style.display = "flex"
    sectionBotones.style.display = "none"
    sectionReiniciar.style.display = "flex"
    sectionProductos.style.display = "flex"
    botonAgregar.style.display = "flex"
}

function funcionContacto(){
    sectionBotones.style.display = "none"
    sectionReiniciar.style.display = "flex"
    sectionContacto.style.display = "flex"
}

function funcionUbicacion(){
    sectionBotones.style.display = "none"
    sectionReiniciar.style.display = "flex"
    sectionUbicacion.innerHTML=`<div>
    <h2 class="subrayado">¿Donde estamos ubicamos?</h2>
    <iframe id="iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.070597186248!2d-65.24852506439908!3d-26.805880644543244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d0215ea7413%3A0xa1e68ac98df4c8f5!2sBBK%2C%20Uruguay%203483%2C%20T4001%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Provincia%20de%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1664594565657!5m2!1ses-419!2sar"
        width="1200" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>`
}

function funcionGaleria(){
    sectionBotones.style.display = "none"
    sectionReiniciar.style.display = "flex"
    sectionGaleria.innerHTML=`<div>
    <img class="imagenn" src="../assets/imagenes/trabajos/WhatsApp Image 2022-11-17 at 17.37.28.jpeg" alt="mueble con diseño color marron">
    <img class="imagenn" src="../assets/imagenes/trabajos/WhatsApp Image 2022-11-17 at 11.35.27.jpeg" alt="vestidor completo de color blanco">
    <img class="imagenn" src="../assets/imagenes/trabajos/WhatsApp Image 2022-11-17 at 11.35.28 (2).jpeg" alt="vestidor de color blanco">
    <img class="imagenn" src="../assets/imagenes/trabajos/WhatsApp Image 2022-11-17 at 11.35.28.jpeg" alt="placard de color blanco">
    <img class="imagenn" src="../assets/imagenes/trabajos/WhatsApp Image 2022-11-17 at 17.34.50 (1).jpeg" alt="dos muebles al costado de la puerta con cajones y estantes blancos">
    <img class="imagenn" src="../assets/imagenes/trabajos/WhatsApp Image 2022-11-17 at 17.37.28 (2).jpeg" alt="mueble minimalista de gran tamaño para sala de estar para tele y sus alrededores">
    <img class="imagenn" src="../assets/imagenes/trabajos/WhatsApp Image 2022-11-17 at 17.37.31.jpeg" alt="mostrador de recepcion para edificio color gris">
    <img class="imagenn" src="../assets/imagenes/trabajos/WhatsApp Image 2022-11-17 at 11.35.25.jpeg" alt="mesa de luz flotante gris">
    <img class="imagenn" src="../assets/imagenes/trabajos/WhatsApp Image 2022-11-17 at 11.35.23.jpeg" alt="placard y escritorio">
    <img class="imagenn" src="../assets/imagenes/trabajos/WhatsApp Image 2022-11-17 at 11.35.24 (1).jpeg" alt="alacena y muebles de cocina de color blanco">
    <img class="imagenn" src="../assets/imagenes/trabajos/WhatsApp Image 2022-11-17 at 11.35.24.jpeg" alt="mostrador de tienda marron con blanco">
    <img class="imagenn" src="../assets/imagenes/trabajos/WhatsApp Image 2022-11-17 at 11.35.28 (1).jpeg" alt="placard de color blanco">
    <img class="imagenn" src="../assets/imagenes/trabajos/WhatsApp Image 2022-11-17 at 11.35.25 (2).jpeg" alt="placard blanco con cajita fuerte de madera">
    <img class="imagenn" src="../assets/imagenes/trabajos/WhatsApp Image 2022-11-17 at 11.35.26.jpeg" alt="rack para habitacion de color marron claro">
    <img class="imagenn" src="../assets/imagenes/trabajos/WhatsApp Image 2022-11-17 at 11.35.27 (1).jpeg" alt="mueble de cocina con alacenas de color blanco">
    <img class="imagenn" src="../assets/imagenes/trabajos/WhatsApp Image 2022-11-17 at 11.35.27 (2).jpeg" alt="placard con puertas corredizas de tono gris con marron">
</div>`
}

function funcionVideos(){
    sectionBotones.style.display = "none"
    sectionReiniciar.style.display = "flex"
    sectionVideos.innerHTML=`<section class="productos-1">
    <div>
        <h2 class="subrayado">Instalación</h2>
        <iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/6rGtceLlpOo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div>
        <h2 class="subrayado">Limpieza</h2>
        <iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/UxHCcAuBW4U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div>
        <h2 class="subrayado">Armado</h2>
        <iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/nzCGfv-bI0k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</section>`
}


// Productos
const cargarDeposito = async () => {
    const response = await fetch("../muebles.json")
    const data =  await response.json() 
    for(let mueble of data ){    
        let muebleNuevo = new Mueble(mueble.id, mueble.modelo, mueble.tipo, mueble.precio, mueble.imagen)
        deposito.push(muebleNuevo)
    }
    localStorage.setItem("deposito", JSON.stringify(deposito))
}

if(localStorage.getItem("deposito")){
    for(let mueble of JSON.parse(localStorage.getItem("deposito"))){
    let muebleNuevo = new Mueble(mueble.id, mueble.modelo, mueble.tipo, mueble.precio, mueble.imagen)
        deposito.push(muebleNuevo)
    }
}else{
    cargarDeposito()
}

function agregarMueble(){
    let modeloIngresado = prompt("Ingrese el nombre del modelo")
    let tipoIngresado = prompt("Ingrese el tipo del mueble")
    let precioIngresado = parseInt(prompt("Ingrese el precio del mueble"))
    const muebleNuevo = new Mueble(deposito.length+1, modeloIngresado, tipoIngresado, precioIngresado)
}


function mostrarMuebles(array){
    mueblesDiv.innerHTML = ""
    for(let mueble of array){
        let nuevoMuebleDiv = document.createElement("div")
        nuevoMuebleDiv.classList.add("col-12", "col-md-6", "col-lg-4", "mb-3")
        nuevoMuebleDiv.innerHTML = `
        <div id="${mueble.id}" class="card" style="width: 18rem;">
            <img class="card-img-top img-fluid" style="height: 300px; " src="../assets/${mueble.imagen}" alt="${mueble.tipo} de ${mueble.modelo}">
            <div class="card-body">
                <h4 class="card-title">${mueble.tipo}</h4>
                <p>Modelo: ${mueble.modelo}</p>
                <p>Precio: ${mueble.precio}</p>
            <button id="agregarBtn${mueble.id}" class="btn btn-outline-success">Agregar al carrito</button>
            </div>
        </div>
        `
        mueblesDiv.appendChild(nuevoMuebleDiv)
        let agregarBtn = document.getElementById(`agregarBtn${mueble.id}`)
        agregarBtn.addEventListener("click", ()=>{
            
            agregarAlCarrito(mueble)
        })
    }
    
}

function cargarMueble(array){
    let inputModelo = document.getElementById("modeloInput")
    let inputTipo = document.getElementById("tipoInput")
    let inputPrecio = document.getElementById("precioInput")
    
    const muebleNuevo = new Mueble(array.length+1, inputModelo.value, inputTipo.value, parseInt(inputPrecio.value), "muebleNuevo.jpg")
    array.push(muebleNuevo)
    localStorage.setItem("deposito", JSON.stringify(array))
    mostrarMuebles(array)
    
    añadirMueble.reset()

    Toastify({
        text: `El mueble ${muebleNuevo.tipo} ha sido incorporado al deposito`,
        duration: 3000,
        gravity: "top", 
        position: "center", 
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
          color: "black"
        },
      }).showToast();
 
}

// Carrito
if(localStorage.getItem("carrito")){
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
}else{
    productosEnCarrito = []
    localStorage.setItem("carrito", productosEnCarrito)

}

function cargarProductosCarrito(array){
    carrito.innerHTML = ""
    array.forEach((productoEnCarrito)=>{
        carrito.innerHTML +=
        `
        <div class="card border-primary mb-3" id ="productoCarrito${productoEnCarrito.id}" style="max-width: 540px;">
                 <img class="card-img-top" height="300px" src="../assets/${productoEnCarrito.imagen}" alt="">
                 <div class="card-body">
                        <h4 class="card-title">${productoEnCarrito.tipo}</h4>
                    
                         <p class="card-text">$${productoEnCarrito.precio}</p> 
                         <button class= "btn btn-danger" id="botonEliminar${productoEnCarrito.id}"><i class="fas fa-trash-alt"></i></button>
                 </div>    
            </div>
        `
    })

    array.forEach((productoEnCarrito) =>
    document.getElementById(`botonEliminar${productoEnCarrito.id}`).addEventListener("click",()=>{
        let cardProducto = document.getElementById(`productoCarrito${productoEnCarrito.id}`) 
        cardProducto.remove()
        let productoEliminar = array.find((mueble)=> mueble.id == productoEnCarrito.id)

        let posicion = array.indexOf(productoEliminar)
        array.splice(posicion, 1)   
        localStorage.setItem("carrito", JSON.stringify(array))
        calcularTotal(array)

    })
    )
    calcularTotal(array)

}

function agregarAlCarrito(mueble){
    let MuebleAgregado = productosEnCarrito.find((elem)=>elem.id == mueble.id)

    if(MuebleAgregado == undefined){
        productosEnCarrito.push(mueble)
        localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))

        Swal.fire({
            title: 'Usted agrego un nuevo mueble',
            text: `El modelo ${mueble.tipo} de tipo ${mueble.modelo} ha sido agregado`,
            icon: "success",
            confirmButtonColor: "green",
            confirmButtonText: "Gracias!",
            timer: 3000,
            imageUrl: `assets/${mueble.imagen}`,
            imageHeight: 200
        })

    }else{
        Swal.fire({
            title: 'Mueble ya agregado',
            text: `El modelo ${MuebleAgregado.tipo} de tipo ${MuebleAgregado.modelo} ya existe en el carrito`,
            icon: "warning",
            showConfirmButton: false,
            timer: 1500,
            
        })
    }
}

function finalizarCompra(){
    Swal.fire({
        title: 'Está seguro de realizar la compra',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero',
        confirmButtonColor: 'green',
        cancelButtonColor: 'red',
    }).then((result)=>{
        if(result.isConfirmed){
            Swal.fire({
                title: 'Compra realizada',
                icon: 'success',
                confirmButtonColor: 'green',
                text: `Muchas gracias por su compra ha adquirido nuestros productos. `,
                })
                productosEnCarrito = []
                localStorage.removeItem("carrito")
        }else{
            Swal.fire({
                title: 'Compra no realizada',
                icon: 'error',
                text: `La compra no ha sido realizada! Atención sus productos siguen en el carrito`,
                confirmButtonColor: 'green',
                timer:3500
            })
        }
    }

    )
}

function calcularTotal(array){
    let total = array.reduce((acc, productoCarrito)=>acc + productoCarrito.precio ,0)
    total == 0 ? totalCompra.innerHTML = `No se encontraron productos en el carrito` : totalCompra.innerHTML = `El total es <strong>${total}</strong>`    
}



// Barra navegacion productos
function buscarPorTipo(array){
    let tipoBuscado = prompt("Ingrese el nombre del tipo del mueble que desea buscar")
    let tipoEncontrado = array.find(
        (furniture)=> furniture.tipo.toLowerCase() == tipoBuscado.toLowerCase()
        )
}

function buscarPorModelo(arr){
    let modeloBuscado = prompt("Ingrese el nombre del modelo que está buscando")
    let busqueda = arr.filter((mueble)=> mueble.modelo.toLowerCase() == modeloBuscado.toLowerCase())
    if(busqueda.length == 0){
    }else{
        verMuebles(busqueda)
    }

}

function buscarInfo(buscado, array){
    let busquedaArray = array.filter(
        (mueble)=> mueble.modelo.toLowerCase().includes(buscado) || mueble.tipo.toLowerCase().includes(buscado)
    )
    busquedaArray.length == 0 ?
    (encontrado.innerHTML = `<h3>No se encontraron coincidencias con su búsqueda</h3>`, mostrarMuebles(busquedaArray)) 
    :
    (encontrado.innerHTML = "", mostrarMuebles(busquedaArray))

}

function ordenarMenorMayor(array){
        const menorMayor = [].concat(array)
        menorMayor.sort((a,b) => a.precio - b.precio)
        verMuebles(menorMayor)
}

function ordenarMayorMenor(arr){
    const mayorMenor = [].concat(arr)
    mayorMenor.sort((param1, param2)=>{
        return param2.precio - param1.precio
    })
    verMuebles(mayorMenor)
}

function ordenarAlfabeticamenteTipo(array){
    const ordenadoAlfabeticamente = [].concat(array)
     ordenadoAlfabeticamente.sort((a,b) => {
          if(a.tipo > b.tipo) {
            return 1
          }
          if (a.tipo < b.tipo) {
            return -1
          }
          return 0;
    })
    verMuebles(ordenadoAlfabeticamente)
}


function ordenarMenorMayor(array){
    const menorMayor = [].concat(array)
    menorMayor.sort((a,b) => a.precio - b.precio)
    mostrarMuebles(menorMayor)
}

function ordenarMayorMenor(arr){
    const mayorMenor = [].concat(arr)
    mayorMenor.sort((param1, param2)=>{
        return param2.precio - param1.precio
    })
    mostrarMuebles(mayorMenor)
}

function ordenarAlfabeticamenteTipo(array){
    const ordenadoAlfabeticamente = [].concat(array)
    ordenadoAlfabeticamente.sort((a,b) => {
        if(a.tipo > b.tipo) {
            return 1
        }
        if (a.tipo < b.tipo) {
            return -1
        }

        return 0;
    })
    mostrarMuebles(ordenadoAlfabeticamente)
}

mostrarMuebles(deposito)

function ordenar(array){
    let opcion = parseInt(prompt(`
    1 - Ordenar de menor a mayor
    2 - Ordenar de mayor a menor
    3 - Ordenar alfabeticamente `))
    switch(opcion){
        case 1:
            ordenarMenorMayor(array)
        break
        case 2:
            ordenarMayorMenor(array)
        break
        case 3:
            ordenarAlfabeticamenteTipo(array)
        break
        default:
            
        break    
    }
}

// Fecha
fecha.innerHTML = `${fechaHoy}`

// Formulario
async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
            this.reset()
            Swal.fire({
                title: 'Stuff',
                text: `Gracias por comunicarte con nosotros, en breve nos contactaremos.`,
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
            })
        }
    }  
