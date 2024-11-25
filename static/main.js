// Función para añadir comentario al agregar favorito:
function agregarComentario(nombre) {
    let comentario = prompt(`Ingrese un comentario para ${nombre}:`);
    let celda = document.getElementById(`comentario${nombre}`);
    celda.innerText = comentario; 
}
