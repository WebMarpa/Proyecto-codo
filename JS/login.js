function login(){
    var username = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;
  
    if (!username || !password)
    return;
  
    if(!(username == "Admin@test.com" && password == "123456")){
      document.getElementById('alertId').classList.remove('hide');
      setTimeout(() => {
        const box = document.getElementById('alertId');
            
        
        // Limpia el Formulario
        clear();
  
       
  
      }, 5000); // tiempo en milisegundos
      return false;
    } else {
         // Redirecciona a dashboard.html después de iniciar sesión correctamente
    window.location.href = './productos.html';
      var closeButton = document.getElementById('close-modal-btn');
      closeButton.click();
    }
    // Para evitar submit
    return false;
  }
   
    //Manejador de evento de cierre modal
    var loginModal = document.getElementById('loginModal')
  loginModal.addEventListener('hidden.bs.modal',function (event) {
  clear();
  })
  
  function clear(){
  document.getElementById('inputEmail').value='';
  document.getElementById('inputPassword').value='';
  document.getElementById('loginForm').reset();
  document.getElementsByClassName('needs-validation')[0].classList.remove('was-validated');
  }
 
  
  
 