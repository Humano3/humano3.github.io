function validaremail(){
 
  var emailField = document.getElementById('email');

  var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  if(validEmail.test(emailField.value)) {
    alert('El correo ha sido validado');
          return true;  } 
  else{
    alert('El correo no ha sido validado, vuelva a probar');
          return false;  }
}
