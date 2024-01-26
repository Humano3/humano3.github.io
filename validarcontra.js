function validarPassword() {
      var password = document.getElementById("password").value;
      if (password.length === 8) {
        alert("Contraseña validadá y almacenada :3");
      } 
      else {
        alert("||||Incorrect, debe de estasblecerse maximo con 8 caracteres||||");
      }
    }
