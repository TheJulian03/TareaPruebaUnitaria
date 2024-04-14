const { type } = require("os");

const $submit = document.getElementById("submit"),
      $password = document.getElementById("password"),
      $username = document.getElementById("username"),
      $visible = document.getElementById("visible");

      document.addEventListener("change", (e)=>{

        if(e.target === $visible){

            if($visible.checked === false) $password.type = "password"
            else $password.type = "text";

        }
      } 
    );
    
    

document.addEventListener("click", (e)=>{

    if(e.target === $submit){
        if($password.value !== "" && $username.value !== ""){
            e.preventDefault();
            window.location.href = "Home.html";
        }
    }
} )

describe('document.addEventListener', () => {
    test('', () => {
      // Arrange (Preparación del escenario de prueba)
      // Act (Ejecución del código que se desea probar)
      // Assert (Verificación del resultado esperado)
    });
  });