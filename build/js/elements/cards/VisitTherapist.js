import Visit from"./Visit.js";export default class VisitTherapist extends Visit{constructor({className:s,id:t,purposeVisit:i,description:a,urgency:l,fullName:e,patientAge:c,doctor:p}){super({className:s,id:t,purposeVisit:i,description:a,urgency:l,fullName:e,doctor:p}),this.age=c}render(s,t){this.createVisitTherapist(),this.addElement(s,t),this.createCloseBtn(),this.createBtnEdit()}createVisitTherapist(){this.createVisit(`\n  <li class="list-group-item">\n  <a data-toggle="collapse" href="#collapseCard${this.id}" class="card-link">Показать больше</a>\n  <ul class="card-text collapse" id="collapseCard${this.id}">\n          <li class="modal-card__list list"><span class="list__title">Цель:</span><p class="list__text" data-patient="purposeVisit">${this.purposeVisit}</p></li>\n          <li class="modal-card__list list"><span class="list__title">Описание:</span><p class="list__text" data-patient="description">${this.description}</p></li>\n          <li class="modal-card__list list"><span class="list__title">Возраст:</span><p class="list__text" data-patient="patientAge">${this.age}</p></li>\n          <li class="modal-card__list list"><span class="list__title">Срочность:</span><p class="list__text" data-patient="urgency">${this.urgency}</p></li>\n          </ul>\n  </li>\n  `)}}