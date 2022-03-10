import Visit from "./Visit.js";

export default class VisitDentist extends Visit {
  constructor({ className, id, purposeVisit, description, urgency, fullName, patientLastVisit, doctor }) {
    super({ className, id, purposeVisit, description, urgency, fullName, doctor })
    this.lastVisit = patientLastVisit.split('-').reverse().join('-');
  }
  render(elem, place) {
    this.createVisitDentist();
    this.addElement(elem, place)
    this.createCloseBtn()
    this.createBtnEdit()
  }
  createVisitDentist() {
    this.createVisit(`
      <li class="list-group-item">
      <a data-toggle="collapse" href="#collapseCard${this.id}" class="card-link">Показать больше</a>
      <ul class="card-text collapse" id="collapseCard${this.id}">
      <li class="modal-card__list list"><span class="list__title">Цель:</span><p class="list__text" data-patient="purposeVisit">${this.purposeVisit}</p></li>
      <li class="modal-card__list list"><span class="list__title">Описание:</span><p class="list__text" data-patient="description">${this.description}</p></li>
      <li class="modal-card__list list"><span class="list__title">Дата последнего визита:</span><p class="list__text" data-patient="patientLastVisit">${this.lastVisit}</p></li>
      <li class="modal-card__list list"><span class="list__title">Срочность:</span><p class="list__text" data-patient="urgency">${this.urgency}</p></li>
      </ul>
      </li>
  `)
  }
}