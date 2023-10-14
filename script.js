function toggleSobreMi() {
    var menu = document.querySelector('.menuSobreMi');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

function irAEnlace(enlace) {
    if(enlace == 'Proyectos') window.location.href = "proyectos.html";
    if(enlace == 'Index') window.location.href = "index.html";

    if(enlace == 'GitHub') window.location.href = "https://github.com/DiegoEvangeliste";
    if(enlace == 'Linkedin') window.location.href = "https://www.linkedin.com/in/diego-evangeliste";
}

const botonVolver = document.getElementById('volver');
botonVolver.addEventListener('click', function() { window.history.back(); });
