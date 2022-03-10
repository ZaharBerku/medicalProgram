import ModalLogin from "./elements/modal/ModalLogin.js";
import createForm from "./function/createForm.js"
import loginBtn from './function/loginBtn.js'
import contentLoaded from './function/DOMContentLoaded.js'

const callForm = document.querySelector(".main__btn");
const logInBtn = document.querySelector("#loginBtn");

$("#exampleModalCenter").on("hidden.bs.modal", (event) => {
  ModalLogin.clearModal(event.target);
});


callForm.addEventListener("click", createForm);
logInBtn.addEventListener("click",loginBtn)
document.addEventListener("DOMContentLoaded", contentLoaded)























