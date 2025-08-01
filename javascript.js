document.addEventListener('DOMContentLoaded', function() {
  const corazon = document.querySelector('.corazon');
  const sobre = document.querySelector('.sobre');
  const solapaSuperior = document.querySelector('.sobre::before');
  const solapaDerecha = document.querySelector('.solapa-derecha');
  const solapaIzquierda = document.querySelector('.solapa-izquierda');
  const carta = document.querySelector('.carta');
  
  // Estado inicial
  let cartaAbierta = false;

  corazon.addEventListener('click', function() {
    if (cartaAbierta) {
      // CERRAR LA CARTA
      sobre.style.setProperty('--solapa-rotacion', 'rotateX(0deg)');
      solapaDerecha.style.zIndex = '6';
      solapaIzquierda.style.zIndex = '6';
      carta.style.transform = 'translateY(0)';
      
      setTimeout(() => {
        solapaDerecha.style.transform = 'rotateY(0deg)';
        solapaIzquierda.style.transform = 'rotateY(0deg)';
        carta.style.zIndex = '2';
      }, 50);
      
    } else {
      // ABRIR LA CARTA - CON EFECTO CONFETI
      carta.style.zIndex = '5';
      sobre.style.setProperty('--solapa-rotacion', 'rotateX(180deg)');
      solapaDerecha.style.transform = 'rotateY(-30deg)';
      solapaIzquierda.style.transform = 'rotateY(30deg)';
      carta.style.transform = 'translateY(-120px)';
      
      solapaDerecha.style.zIndex = '3';
      solapaIzquierda.style.zIndex = '3';
      
      // LANZAR CONFETI
      lanzarConfeti();
    }
    
    cartaAbierta = !cartaAbierta;
  });

  // Función para el efecto confeti
  function lanzarConfeti() {
    confetti({
      particleCount: 200, // Cantidad de partículas
      spread: 70, // Ángulo de dispersión
      origin: { y: 0.6 }, // Posición de origen (0.6 = 60% desde arriba)
      colors: ['#ff0000', '#ff69b4', '#ffb6c1', '#ffffff', '#C8AD7F'], // Colores rosados/rojos
      shapes: ['circle', 'heart'], // Formas incluyendo corazones
      scalar: 2.8, // Tamaño de las partículas
      gravity: 0.8, // Velocidad de caída
    });
  }
});