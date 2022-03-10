import Visit from "./Visit.js";

export default class VisitTherapist extends Visit {
    constructor({ className, id, purposeVisit, description, urgency, fullName, patientAge,doctor }) {
      super({ className, id, purposeVisit, description, urgency, fullName,doctor })
      this.age = patientAge;
    }
    render(elem, place) {
      this.createVisitTherapist();
      this.addElement(elem, place)
      this.createCloseBtn()
      this.createBtnEdit()
    }
    createVisitTherapist() {
      this.createVisit(`
  <li class="list-group-item">
  <a data-toggle="collapse" href="#collapseCard${this.id}" class="card-link">Показать больше</a>
  <ul class="card-text collapse" id="collapseCard${this.id}">
          <li class="modal-card__list list"><span class="list__title">Цель:</span><p class="list__text" data-patient="purposeVisit">${this.purposeVisit}</p></li>
          <li class="modal-card__list list"><span class="list__title">Описание:</span><p class="list__text" data-patient="description">${this.description}</p></li>
          <li class="modal-card__list list"><span class="list__title">Возраст:</span><p class="list__text" data-patient="patientAge">${this.age}</p></li>
          <li class="modal-card__list list"><span class="list__title">Срочность:</span><p class="list__text" data-patient="urgency">${this.urgency}</p></li>
          </ul>
  </li>
  `)
    }
  }