document.addEventListener("DOMContentLoaded", () => {
  const pista = document.querySelector(".pistaSlider");
  const anterior = document.querySelector(".botonSlider.anterior");
  const siguiente = document.querySelector(".botonSlider.siguiente");
  const diapositivas = document.querySelectorAll(".diapositiva");

  let indice = 0;
  const total = diapositivas.length;
  const mostrar = 3; 
  const anchoSlide = diapositivas[0].offsetWidth + 30; 

  function actualizarSlider() {
    pista.style.transform = `translateX(-${indice * anchoSlide}px)`;
  }

  siguiente.addEventListener("click", () => {
    if (indice < total - mostrar) {
      indice++;
      actualizarSlider();
    }
  });

  anterior.addEventListener("click", () => {
    if (indice > 0) {
      indice--;
      actualizarSlider();
    }
  });

  window.addEventListener("resize", () => {
    actualizarSlider();
  });
});
