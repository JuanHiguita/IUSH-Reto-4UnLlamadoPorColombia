$(document).ready(function() {
  let user = "";

  //animación botón inicio sesión
  $(".button-copy").click(function() {
    $(this).fadeOut("slow");
    setTimeout(function() {
      $(".form-content")
        .removeClass("d-none")
        .fadeIn(600);
    }, 600);
  });
  //evento del boton "Inicio de sesion"
  $("#submit-button").click(() => {
    var name = $("#userName").val();
    var pass = $("#password").val();

    fetch("../../data/usersData.json")
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        //autenticacion de los datos ingresados con la data base
        let loginData = data.users;
        for (let i = 0; i < loginData.length; i++) {
          const element = loginData[i];
          if (name == element.id && pass == element.password) {
            console.log("loggeo exitoso");
            user = element;
            console.log(user);
            localStorage.setItem("user", JSON.stringify(element));
            //redireccion al perfil del usuario correspondiente
            window.location = "../../views/viewProfile.html";
            break;
          } else {
            console.log("uno de los campos ingresados es erroneo");
          }

          console.log(element.id);
          console.log(name);
        }
      })
      .catch(error => {
        console.log(error);
      });
  });

  //validación formulario
  $("#userName, #password").blur(function() {
    var name = $("#userName").val();
    var pass = $("#password").val();

    if (name == "") {
      $("#alert-box-1")
        .html("Debes ingresar tu nombre completo.")
        .slideDown(500);
      $("#userName");
      return false;
    } else {
      $("#alert-box-1")
        .html("")
        .slideUp(500);
    }

    if (pass == "") {
      $("#alert-box-1")
        .html("Tu Contraseña es de 4 números.")
        .slideDown(500);
      $("#password");
      return false;
    } else {
      $("#alert-box-1")
        .html("")
        .slideUp(500);
    }
  });
});
