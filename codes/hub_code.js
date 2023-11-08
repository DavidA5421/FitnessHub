document.addEventListener("DOMContentLoaded", function () {
    //------------ Inicio ----------------------------------------

    /* Saludo personalizado */
    const nombre = localStorage.getItem("nombre");
    const saludoUsuario = document.getElementById("saludo");

    if (nombre) {
        saludoUsuario.textContent = `${nombre}`;
    } else {
        saludoUsuario.textContent = "Usuario";
    }

    /* Verificar para ti */
    function verificarParaTi(objetivo) {
        if(objetivo == "aumentar_masa"){
            mostrarSlider(3);
        } else if(objetivo == "reducir_peso"){
            mostrarSlider(4);
        } else if(objetivo == "mantener_peso"){
            mostrarSlider(5);
        }
        }
    //------------Funciones
    
    // Cambiar Imagenes y Textos

    function agregarEventosClickImagenes() {
        const imagenes = document.querySelectorAll(".imagen");
        imagenes.forEach((imagen, indiceImagen) => {
            imagen.addEventListener("click", function () {
                // Obtener el índice de la sección actual
                const seccionActual = document.getElementById("descripcion-texto").textContent;
                let indiceSeccion = -1;

                for (let i = 0; i < secciones.length; i++) {
                    if (secciones[i].titulo === seccionActual) {
                        indiceSeccion = i;
                        break;
                    }
                }

                if (indiceSeccion !== -1) {
                    mostrarRutina(indiceSeccion, indiceImagen);
                }
            });
        });
    }

    function agregarEventosDietasClickImagenes() {
        console.log("Agregando eventos a imágenes de dietas...");
        const imagenes = document.querySelectorAll(".imagenD");
        imagenes.forEach((imagen, indiceImagen) => {
            imagen.addEventListener("click", function () {
                // Obtener el índice de la sección actual
                const seccionActual = document.getElementById("descripcion-textoD").textContent;
                let indiceSeccion = -1;
    
                for (let i = 0; i < dietasSecciones.length; i++) {
                    if (dietasSecciones[i].titulo === seccionActual) {
                        indiceSeccion = i;
                        break;
                    }
                }
    
                if (indiceSeccion !== -1) {
                    mostrarDieta(indiceSeccion, indiceImagen);
                }
            });
        });
    }

    function mostrarSlider(indiceSeccion) {
        const seccionActual = secciones[indiceSeccion];
        const descripcionTexto = document.getElementById("descripcion-texto");
        const slider = document.querySelector(".imagen-slider");
        const imagenTexto = document.getElementById("imagen-texto1");

        // Actualiza el título y el texto
        descripcionTexto.textContent = seccionActual.titulo;
        imagenTexto.textContent = seccionActual.imagenes[0].alt;

        // Limpia el contenido del slider
        slider.innerHTML = "";

        // Crea y agrega las imágenes
            seccionActual.imagenes.forEach((imagen, index) => {
                const slide = document.createElement("div");
                slide.className = "slide";
                slide.innerHTML = `<img class="imagen" src="${imagen.src}" alt="${imagen.alt}">
                <p id="${imagen.id}" class="imagen-texto">${imagen.txt}</p>`;
                slider.appendChild(slide);
            });

        agregarEventosClickImagenes();
    }

    function mostrarSlider2(indiceSeccion) {
        const seccionActual = dietasSecciones[indiceSeccion];
        const descripcionTexto = document.getElementById("descripcion-textoD");
        const slider = document.querySelector(".imagen-sliderD");
        const imagenTexto = document.getElementById("imagenD-texto1");

        // Actualiza el título y el texto
        descripcionTexto.textContent = seccionActual.titulo;
        imagenTexto.textContent = seccionActual.imagenes[0].alt;

        // Limpia el contenido del slider
        slider.innerHTML = "";

        // Crea y agrega las imágenes
            seccionActual.imagenes.forEach((imagen, index) => {
                const slide = document.createElement("div");
                slide.className = "slide";
                slide.innerHTML = `<img class="imagenD" src="${imagen.src}" alt="${imagen.alt}">
                <p id="${imagen.id}" class="imagen-texto">${imagen.txt}</p>`;
                slider.appendChild(slide);
            });

        agregarEventosDietasClickImagenes();
    }

    // Mostrar modal por Rutina y Dietas

    function mostrarRutina(indiceSeccion, indiceImagen) {
        const seccionActual = secciones[indiceSeccion];
        const imagenActual = seccionActual.imagenes[indiceImagen];

        const rutina = rutinas[imagenActual.alt];

        // Actualizar el contenido del modal
        const tituloModal = document.getElementById("tituloModal");
        const informacionModal = document.getElementById("informacionModal");

        if (rutina) {
            // Construir contenido dinámico
            let contenidoHTML = "";
            rutina.contenido.forEach((contenido, index) => {
                contenidoHTML += `<p class="modalInfo">${contenido.texto}</p>
                                <iframe width="560" height="315" src="${contenido.videoURL}" frameborder="0" allowfullscreen id="videorutina"></iframe>
                                <p class="modalInfo" id="ref">${contenido.ref}</p>`;
            });

            tituloModal.textContent = imagenActual.txt;
            informacionModal.innerHTML = contenidoHTML;
        }

        // Mostrar el modal
        const modal = document.getElementById("rutinaModal");
        modal.style.display = "block";
    }

    function mostrarDieta(indiceSeccion, indiceImagen) {
        console.log("Mostrando dieta...");
        const seccionActual = dietasSecciones[indiceSeccion];
        const imagenActual = seccionActual.imagenes[indiceImagen];
    
        const dieta = dietas[imagenActual.alt];
    
        // Actualizar el contenido del modal
        const tituloDModal = document.getElementById("tituloDModal");
        const informacionDModal = document.getElementById("informacionDModal");
    
        if (dieta) {
            // Construir contenido dinámico
            let contenidoHTML = "";
            dieta.contenido.forEach((contenido, index) => {
                contenidoHTML += `<p class="modalInfo">${contenido.texto}</p>
                                <img width="560" height="315" src="${contenido.img}" id="imgdieta"></img>
                                <p class="modalInfo" id="ref">${contenido.ref}</p>`;
            });
    
            tituloDModal.textContent = imagenActual.txt;
            informacionDModal.innerHTML = contenidoHTML;
        }
    
        // Mostrar el modal
        const modal = document.getElementById("dietaModal");
        modal.style.display = "block";
    }

    
    //-------------------Elementos de la pagina

    const tiendaButton = document.getElementById("tienda");
    const objetivo = localStorage.getItem("objetivo");
    console.log("Registro: "+objetivo);

    // Cambio de Slider
    const trenSuperiorElement = document.getElementById("tren-superior");
    const trenInferiorElement = document.getElementById("tren-inferior");
    const fullBodyElement = document.getElementById("full-body");
    const paraTiElement = document.getElementById("para-ti");


    const aumentarElement = document.getElementById("aumentar");
    const reducirElement = document.getElementById("reducir");
    const mantenerElement = document.getElementById("mantener");


    trenSuperiorElement.addEventListener("click", () => mostrarSlider(0));
    trenInferiorElement.addEventListener("click", () => mostrarSlider(1));
    fullBodyElement.addEventListener("click", () => mostrarSlider(2));
    paraTiElement.addEventListener("click", () => verificarParaTi(objetivo));


    aumentarElement.addEventListener("click", () => mostrarSlider2(0));
    reducirElement.addEventListener("click", () => mostrarSlider2(1));
    mantenerElement.addEventListener("click", () => mostrarSlider2(2));


    // Mostrar Rutinas
    const modal = document.getElementById("rutinaModal");
    const cerrarModal = document.getElementById("cerrarModal");
    const modalD = document.getElementById("dietaModal");
    const cerrarModalD = document.getElementById("cerrarDModal");

    // Agregar un evento de clic para cerrar el modal
    cerrarModal.addEventListener("click", function () {
        modal.style.display = "none";
    });
    // Agregar un evento de clic para cerrar el modal Dieta
    cerrarDModal.addEventListener("click", function () {
        modalD.style.display = "none";
    });

    agregarEventosClickImagenes();
    agregarEventosDietasClickImagenes()

});