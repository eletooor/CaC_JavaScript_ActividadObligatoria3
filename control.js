document.addEventListener("DOMContentLoaded", function() {    //garantiza que el DOM esté completamente cargado
let form= document.getElementById("form")
form.addEventListener('submit', validateForm);  //ejecuta validateForm si ocurre un evento submit
});

function validateForm(event) {  //funcion principal
  event.preventDefault();  //detiene el envio del formulario
  
  if (isSubmit()) {
  
    this.submit(); //envia el formulario validado
  }
}


///////funciones secundarias//////////////////////////////////////////////////////
function validateUser(){
   let messageUser= document.getElementById('errUser'); //se recupera un <p> invisible
   

   let user = document.getElementById('user').value; //se recupera el dato del formulario
   if(user.length < 3) {
      messageUser.textContent='Usuario debe contener al menos tres caracteres'; //se carga un texto en el elmento <p> recuperado
      return false; //si está vacio
  
  }else{

    let i=1;
    do{

      if(user[i]=='@'){
           messageUser.textContent= '';   //resetea el elemento <p>
          return true;  //si hay arroba
      }
      i++;
    }while(i<user.length-1);

    messageUser.textContent= 'Usuario debe contener un @ intermedio'; 
    return false; //si no hay arroba         
  }
}

///////////////////////////////////////////////////////////////////////////////

function validatePassword(){
  let messagePassword= document.getElementById('errPassword');
  let clave = document.getElementById('password').value;
   if (clave.length == 0) {
    
     messagePassword.textContent= 'La contraseña es incorrecta'; 
    return false;
  }else{
    return true;
  }
}

///////////////////////////////////////////////////////////////////////////////
function isSubmit(){    //verifica que ambos campos estén corresctos 
  if(validateUser()&&validatePassword()){
        return true;
  }else{return false;}
}