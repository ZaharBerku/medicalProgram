import CreateHTMLElement from '../CreateHTMLElement.js'
import Button from '../button/Button.js'

export default class Visit extends CreateHTMLElement {
    constructor({ className, id, purposeVisit, description, urgency, fullName, doctor }) {
      super(className, id);
      this.purposeVisit = purposeVisit;
      this.description = description;
      this.urgency = urgency;
      this.fullName = fullName;
      this.doctor = doctor;
    }
    render(elem, place) {
      this.createVisit()
      this.addElement(elem, place)
      this.createCloseBtn()
      this.createBtnEdit()
    }
    createVisit(string){
      this.createElement({
        name: 'div',
        attributes: {
          innerHTML: `
          <div class="card-header">
          <h5 class="card-title"><span class="list__title">ФИО:</span><p class="list__text" data-patient="fullName">${this.fullName}</p></h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item"><span class="list__title">Врач:</span><p class="list__text" data-patient="doctor">${this.doctor}</p></li>
        ${string}
        </ul>
        <div class="card-footer"></div>
      `
        }
      });
    }
    createCloseBtn() {
      new Button({
        className: ['close'],
        type: 'button',
        text:  '<span aria-hidden="true">&times;</span>',
        "aria-label": "Close",
      }).render(`#${this.id} .card-header`, 'afterbegin', `#${this.id}`)
    }
    createBtnEdit() {
      new Button({
        className: ['btn', 'btn-primary','edit-btn'],
        type: 'button',
        text: 'Редактирова'
      }).render(`#${this.id} .card-footer`, 'beforeend', `#${this.id}`)
    }
  }