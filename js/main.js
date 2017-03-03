function mostrarMensaje(){
  var clases= document.getElementsByClassName("mensaje").length;
  if(clases>=4){
    alert("Son muchos");
  }if(clases > 2 && clases<4){
    alert("No está mal");
  }if(clases==1){
    alert("Es muy poco");
  }
}
mostrarMensaje();
