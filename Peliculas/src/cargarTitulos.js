const cargarTitulos = (resultados) => {
    const contenedor = document.querySelector("#populares .main__grid");

     contenedor.innerHTML = "";

    resultados.forEach((resultado) => {
        const plantilla = `
        <div class="main__media" data-id="${resultado.id}">
            <a href="#" class="main__media-thumb">
            ${
                resultado.poster_path &&
                ( 
                 `<img 
                class="main__media-img" src="https://image.tmdb.org/t/p/w500/${resultado.poster_path}" alt=""
                />`
                  )
            }
            </a>
            <p class="main__media-titulo">${resultado.title || resultado.name}</p>
            <p class="main__media-fecha">${resultado.genero}</p>
        </div> `;

        contenedor.insertAdjacentHTML("beforeend", plantilla);
    });
}

export default cargarTitulos;
