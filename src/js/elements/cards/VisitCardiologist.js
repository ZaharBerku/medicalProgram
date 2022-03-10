import Visit from "./Visit.js";

export default class VisitCardiologist extends Visit {
    constructor({ className, id, purposeVisit, description, urgency, fullName, patientPressure, bodyMassIndex, lastDiseases, patientAge,doctor}) {
      super({ className, id, purposeVisit, description, urgency, fullName,doctor })
      this.pressure = patientPressure;
      this.bodyMassIndex = bodyMassIndex;
      this.lastDiseases = lastDiseases;
      this.age = patientAge;
    }
    render(elem, place) {
      this.createVisitCardiologist();
      this.addElement(elem, place)
      this.createCloseBtn()
      this.createBtnEdit()
    }
    createVisitCardiologist() {
      this.createVisit(`
    <li class="list-group-item">
    <a data-toggle="collapse" href="#collapseCard${this.id}" class="card-link">Показать больше</a>
    <ul class="card-text collapse" id="collapseCard${this.id}">
    <li class="modal-card__list list"><span class="list__title">Цель:</span><p class="list__text" data-patient="purposeVisit">${this.purposeVisit}</p></li>
    <li class="modal-card__list list"><span class="list__title">Описание:</span><p class="list__text" data-patient="description">${this.description}</p></li>
    <li class="modal-card__list list"><span class="list__title">Давление:</span><p class="list__text" data-patient="patientPressure">${this.pressure}</p></li>
    <li class="modal-card__list list"><span class="list__title">Индекс массы тела:</span><p class="list__text" data-patient="bodyMassIndex">${this.bodyMassIndex}</p></li>
    <li class="modal-card__list list"><span class="list__title">Возраст:</span><p class="list__text" data-patient="patientAge">${this.age}</p></li>
    <li class="modal-card__list list"><span class="list__title">Перенесенные заболевания сердечно-сосудистой системы:</span><p class="list__text" data-patient="lastDiseases">${this.lastDiseases}</p></li>
    <li class="modal-card__list list"><span class="list__title">Срочность:</span><p class="list__text" data-patient="urgency">${this.urgency}</p></li>
    </ul>
    </li>
  `)
    }
  }