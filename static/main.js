function comentario(name) {
    // Preguntar el comentario al usuario
    let comentario = prompt(`Ingrese un comentario para ${name}:`);
    if (comentario !== null && comentario.trim() !== "") {
        // Recuperar los comentarios existentes del localStorage
        let comentarios = JSON.parse(localStorage.getItem('comentarios')) || {};
        // Guardar el comentario asociado al personaje
        if (!comentarios[name]) {
            comentarios[name] = [];
        }
        comentarios[name].push(comentario);
        localStorage.setItem('comentarios', JSON.stringify(comentarios));
        alert("Comentario guardado exitosamente.");
    }
}

window.onload = function() {
    // Obtener los comentarios almacenados
    let comentarios = JSON.parse(localStorage.getItem('comentarios')) || {};

    // Actualizar los comentarios en la tabla
    document.querySelectorAll("tr").forEach(row => {
        let nameCell = row.querySelector("td:nth-child(2)"); // Columna del nombre
        let comentarioCell = row.querySelector("td#comentarioTd"); // Columna de comentarios

        if (nameCell && comentarioCell) {
            let name = nameCell.innerText;
            // Si existen comentarios, mostrar los comentarios, de lo contrario no hacer nada
            if (comentarios[name]) {
                comentarioCell.innerText = comentarios[name].join(", ");
            }
        }
    });
};
