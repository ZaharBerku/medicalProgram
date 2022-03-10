 import renderCards from "./renderCards.js";
 import ModalLogin from "../elements/modal/ModalLogin.js";
 import Fetch from "../api/Fetch.js";
 import {writeTokenToStorage} from './localStorage.js'
 
 
 function loginBtn() {
  
    const loginForm = new ModalLogin( {
      className: ['modal', 'fade'],
      id: 'exampleModalCenter',
      tabindex: "-1",
      role: "dialog",
      title: 'Войти',
      "aria-labelledby": 'exampleModalCenterTitle',
      'aria-hidden': 'true',
    })
    
      loginForm.render('#header', 'beforebegin');
      document.querySelector('#exampleModalCenter').addEventListener('click',(event)=>{
        if (event.target.id === 'exampleModalCenter') {
          event.target.remove()
        }
       
      })
      document.getElementById("enterBtn").addEventListener("click", async () => {
          let email =  document.querySelector("#userEmail").value;
          let password =  document.querySelector("#userPasswod").value;
          let token = await Fetch.getToken(email, password);
          Fetch.assingToken(token)
    
          if (token.includes("Incorrect")) {
            const text = document.querySelector('.text-danger')
            if(text){
              text.remove()
            }
            const msg = document.createElement("p");
            msg.innerText = "Неправильно введён пароль или почта";
            msg.classList.add("text-danger");
            document.querySelector(".modal-body").append(msg);
          } else {
            renderCards()
            writeTokenToStorage(token);
            $("#exampleModalCenter").modal("hide");
            const logInBtn = document.querySelector("#loginBtn")
            logInBtn.remove()
            document.querySelector('.modal').remove()
            document.querySelector("#createVisitBtn").classList.remove("hidden");
          }
      });
    };

    export default loginBtn