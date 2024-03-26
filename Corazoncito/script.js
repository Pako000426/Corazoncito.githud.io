document.body.onkeypress = function(){document.body.classList.toggle('liked')}

function toggleLiked() {
    document.body.classList.toggle('liked');
    document.getElementById('mensajeFlotante').style.display = 'block'; // Mostrar el mensaje flotante
    setTimeout(function() {
      document.getElementById('mensajeFlotante').style.display = 'none'; // Ocultar el mensaje después de un tiempo
    }, 2000); // Cambia el tiempo (en milisegundos) según sea necesario
  }
  
  document.body.onkeypress = function() {
    toggleLiked();
  }
  