import CreateHTMLElement from "../CreateHTMLElement.js";
import Button from "../button/Button.js";
import Label from "../form/label/Label.js";
import Input from "../form/input/Input.js";

export default class ModalLogin extends CreateHTMLElement {
  constructor({ className, id, "aria-labelledby": ariaLabel = '', "aria-hidden": ariaHidden = "", tabindex ='', role ='' }) {
    super(className, id);
    this.ariaLabel = ariaLabel
    this.ariaHidden = ariaHidden
    this.tabindex = tabindex;
    this.role = role
  }

 render(elem, place) {
    this.createModalDiv();
    this.addElement(elem, place);
    this.createEmailLabel();
    this.createEmailInput();
    this.createPasswordlLabel();
    this.createPasswordInput();
    this.createCloseBtn();
    this.createEnterBtn();
  }

  createModalDiv() {
    this.createElement({
      name: "div",
      attributes: {
          type: this.type,
          tabindex: this.tabindex,
          role: this.role,
          "aria-labelledby":this.ariaLabel,
          "aria-hidden":this.ariaHidden,
        innerHTML: `
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header" id="loginHeader">
          <h5 class="modal-title" id="exampleModalLongTitle">Войти</h5>
        </div>
        <div class="modal-body" id="LoginModalBody">
        </div>
        <div class="modal-footer" id="loginFooter">
        </div>
      </div>
    </div>
  </div>
  `
      }
    });
  }

  createEmailLabel() {
    new Label({
      className: ["form-group__label", "form-label-email"],
      attribut: "#",
      text: '<span class="form-group__title">Email адрес</span>',
    }).render("#LoginModalBody", "beforeend");
  }
  createEmailInput() {
    new Input({
      id: "userEmail",
      className: ["form-control", "main__form-input", "form-input-email"],
      type: "email",
      name: "email",
      placeholder: "email@gmail.com",
    }).render(".form-label-email", "beforeend");
  }

  createPasswordlLabel() {
    new Label({
      className: ["form-group__label", "form-label-password"],
      attribut: "#",
      text: '<span class="form-group__title">Пароль</span>',
    }).render("#LoginModalBody", "beforeend");
  }
  createPasswordInput() {
    new Input({
      id: "userPasswod",
      className: ["form-control", "main__form-input", "form-input-password"],
      type: "password",
      name: "password",
      placeholder: "password",
    }).render(".form-label-password", "beforeend");
  }

  createCloseBtn() {
    new Button({
      className: ["close"],
      "aria-label": "Close",
      "data-dismiss": "modal",
      type: "button",
      text: '<span aria-hidden="true">×</span>',
    }).render(`.modal-header`, "beforeend",`#${this.id}`);
  }

  createEnterBtn() {
    new Button({
      id: "enterBtn",
      className: ["btn", "btn-primary", "btn-lg"],
      type: "submit",
      text: "Войти",
    }).render('.modal-footer', "beforeend");
  }

  static clearModal(modalToBeClosed) {
    console.log(modalToBeClosed);
    document.querySelector("#LoginModalBody").innerHTML = "";
    document.querySelector("#loginHeader").innerHTML = "";
    document.querySelector("loginFooter").innerHTML = "";
  }
}
