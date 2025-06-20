
    const botonAbrir = document.getElementById('contenedorMenuIcono');
    const botonCerrar = document.getElementById('contenedorCerrar');
    const menu = document.getElementById('menu');

    botonAbrir.addEventListener('click', () => {
        menu.classList.add('mostrar');
    });

    botonCerrar.addEventListener('click', () => {
        menu.classList.remove('mostrar');
    });
