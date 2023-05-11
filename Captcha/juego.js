 document.addEventListener('DOMContentLoaded', function() {
    // Código a ejecutar cuando el documento se ha cargado completamente
    // Aquí puedes realizar acciones como manipular el DOM, agregar eventos, etc.
    console.log("El documento HTML ha sido completamente cargado");
    document.querySelector('.imagen01').addEventListener('click', clickimagen);


    //ESTO ES NUEVO 
    document.querySelector('.imagen01').addEventListener('mousemove',escapar);

   imagen.addEventListener('mouseleave', escapar);

});


function escapar(escapar) {
  // imagen = document.querySelector('.imagen01')
   //var desplazamientoX = (window.innerWidth / 2 - escapar.clientX) / 10;
   //var desplazamientoY = (window.innerHeight / 2 - escapar.clientY) / 10;
   //imagen.style.transform = 'translate(' + desplazamientoX + 'px, ' + desplazamientoY + 'px)';
   moverImagen();
}


function moverImagen() {
   var imagen = document.querySelector('.imagen01')
   
   var maxX = window.innerWidth - imagen.clientWidth;
   var maxY = window.innerHeight - imagen.clientHeight;

   var randomX = Math.floor(Math.random() * maxX);
   var randomY = Math.floor(Math.random() * maxY);

   imagen.style.position = "absolute";
   imagen.style.margin = 0 + "px";
   imagen.style.left = randomX + "px";
   imagen.style.top = randomY + "px";
}


function clickimagen() {
   alert("Conseguido!!!!");
}
