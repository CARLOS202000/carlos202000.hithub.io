// Obtener referencia al botón "No" y al botón "Sii!!"
const botonNo = document.querySelector('.button-2');
const botonSi = document.querySelector('.button-1');

// Contador de clics en el botón "No"
let contadorClics = 0;

// Función para manejar el clic en el botón "No"
botonNo.addEventListener('click', () => {
  contadorClics++;

  // Cambiar el texto y tamaño del botón "Sii!!" según el número de clics
  switch (contadorClics) {
    case 1:
        botonNo.textContent = 'Estas segura🙄?';
        break;
      case 2:
        botonNo.textContent = 'Estas completamente segura😒?';
        break;
      case 3:
        botonNo.textContent = 'Pero segura segura😟?';
        break;
      case 4:
        botonNo.textContent = 'Por favor?😑..';
        break;
      case 5:
        botonNo.textContent = 'Por favor, por favor?😩..';
        break;
      case 6:
        botonNo.textContent = 'Andale perdoname🫠';
        break;
      case 7:
        botonNo.textContent = 'Ya deja darle click aquí🙄';
        break;
      case 8:
        botonNo.textContent = 'Ya perdoname🙂';
        break;
      case 9:
        botonNo.textContent = 'Oye, ya dale al si, vale?🤧';
        break;
      case 10:
        botonNo.textContent = '¿De verdad me harás esto?😔';
        break;
      case 11:
        botonNo.textContent = '¡Qué cruel!😢';
        break;
      case 12:
        botonNo.textContent = '¡Aqui no lo quieren a uno es nada!🤨';
        break;
      case 13:
        botonNo.textContent = 'Estoy herido...💔';
        break;
      case 14:
        botonNo.textContent = 'Lo que haces no tiene precio...💔';
        break;
      case 15:
        botonNo.textContent = '¿Cómo puedes ser tan fría?❄️';
        break;
      case 16:
        botonNo.textContent = 'Como me va a bloquear oye, caes mal🫤..';
        break;
      case 17:
        botonNo.textContent = 'Esto es más doloroso que una patada en el estómago...😖';
        break;
      case 18:
        botonNo.textContent = 'Bueno, está bien...';
        break;
      case 19:
        botonNo.textContent = 'soy una persona triste😔..';
        break;
      case 20:
        botonNo.textContent = 'Vale no te preocupes😒';
        break;
      case 21:
      // Desaparecer el botón "No" al noveno clic
      botonNo.style.display = 'none';
      break;
    default:
      break;
  }

  // Hacer crecer un poco el botón "Sii!!" en cada clic
  botonSi.style.transform = `scale(${1 + contadorClics * 0.5})`;
});

// Función para manejar el clic en el botón "Sii!!"
botonSi.addEventListener('click', () => {
  window.location.href = 'si.html';
});

// Obtener referencia al botón y al audio
const playPauseBtn = document.getElementById('playPauseBtn');
const audio = new Audio('DC_files/cerenata.mp3');

// Agregar evento de clic al botón
playPauseBtn.addEventListener('click', function() {
  // Si el audio está pausado, reproducirlo y cambiar el botón a pausa
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = '⏸️';
  } else { // Si el audio está reproduciéndose, pausarlo y cambiar el botón a reproducir
    audio.pause();
    playPauseBtn.textContent = '▶️';
  }
});
