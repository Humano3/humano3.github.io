function validateEmail(){
 
  var emailField = document.getElementById('email');

  var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  if(validEmail.test(emailField.value)) {
    alert('El correo ha sido validado');
    return true;
  }else{
    alert('El correo no ha sido validado, vuelva a probar');
    return false;  
  }
}

    function validarpassword() {
      var passwordInput = document.getElementById("password");
      var password = passwordInput.value;

      // Verificar si la contraseña cumple con el límite de 8 caracteres
      if (password.length >= 8) {
        // La contraseña cumple con el límite
        console.log("Contraseña es válida");
      } else {
        // La contraseña no cumple con el límite
        console.log("La contraseña debe tener al menos 8 caracteres");
      }
    }
