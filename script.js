// Función para editar la información del CV
function editar() {
    let nombre = prompt("Editar Nombre:", document.getElementById("nombre").textContent);
    let semestre = prompt("Editar Semestre:", document.getElementById("semestre").textContent);
    let github = prompt("Editar GitHub:", document.getElementById("github").href);
    let telefono = prompt("Editar Teléfono:", document.getElementById("telefono").textContent);

    if (nombre) document.getElementById("nombre").textContent = nombre;
    if (semestre) document.getElementById("semestre").textContent = semestre;
    if (github) {
        document.getElementById("github").textContent = github;
        document.getElementById("github").href = github;
    }
    if (telefono) document.getElementById("telefono").textContent = telefono;
}

// Función para editar la educación
function editarEducacion() {
    let educacion = prompt("Editar Educación:", document.getElementById("educacion").textContent);
    if (educacion) document.getElementById("educacion").textContent = educacion;
}

// Función para agregar una nueva habilidad
function agregarHabilidad() {
    let nuevaHabilidad = document.getElementById("nuevaHabilidad").value.trim();
    if (nuevaHabilidad === "") {
        alert("Por favor ingresa una habilidad válida.");
        return;
    }

    let lista = document.getElementById("habilidades");
    let nuevaHabilidadElemento = document.createElement("li");
    nuevaHabilidadElemento.className = "list-group-item d-flex justify-content-between align-items-center";
    nuevaHabilidadElemento.innerHTML = `
        ${nuevaHabilidad} 
        <button class="btn btn-danger btn-sm" onclick="eliminarHabilidad(this)">
            <i class="bi bi-trash"></i>
        </button>
    `;

    lista.appendChild(nuevaHabilidadElemento);
    document.getElementById("nuevaHabilidad").value = "";
}

// Función para eliminar una habilidad
function eliminarHabilidad(boton) {
    let li = boton.parentElement;
    li.remove();
}
// Función para editar la descripción
function editarDescripcion() {
    let descripcion = prompt("Editar Descripción:", document.getElementById("descripcion").textContent);
    if (descripcion) document.getElementById("descripcion").textContent = descripcion;
}

// Función para agregar elementos a una lista
function agregarElemento(listaId, inputId) {
    let valor = document.getElementById(inputId).value.trim();
    if (valor === "") {
        alert("Por favor ingresa un valor válido.");
        return;
    }

    let lista = document.getElementById(listaId);
    let nuevoElemento = document.createElement("li");
    nuevoElemento.className = "list-group-item d-flex justify-content-between align-items-center";
    nuevoElemento.innerHTML = `
        ${valor} 
        <button class="btn btn-danger btn-sm" onclick="eliminarElemento(this)">
            <i class="bi bi-trash"></i>
        </button>
    `;

    lista.appendChild(nuevoElemento);
    document.getElementById(inputId).value = "";
}

// Función para eliminar elementos de una lista
function eliminarElemento(boton) {
    let li = boton.parentElement;
    li.remove();
}
