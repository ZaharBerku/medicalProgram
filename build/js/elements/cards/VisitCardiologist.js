import Visit from"./Visit.js";export default class VisitCardiologist extends Visit{constructor({className:s,id:t,purposeVisit:i,description:a,urgency:l,fullName:e,patientPressure:p,bodyMassIndex:c,lastDiseases:n,patientAge:d,doctor:r}){super({className:s,id:t,purposeVisit:i,description:a,urgency:l,fullName:e,doctor:r}),this.pressure=p,this.bodyMassIndex=c,this.lastDiseases=n,this.age=d}render(s,t){this.createVisitCardiologist(),this.addElement(s,t),this.createCloseBtn(),this.createBtnEdit()}createVisitCardiologist(){this.createVisit(`\n    <li class="list-group-item">\n    <a data-toggle="collapse" href="#collapseCard${this.id}" class="card-link">Показать больше</a>\n    <ul class="card-text collapse" id="collapseCard${this.id}">\n    <li class="modal-card__list list"><span class="list__title">Цель:</span><p class="list__text" data-patient="purposeVisit">${this.purposeVisit}</p></li>\n    <li class="modal-card__list list"><span class="list__title">Описание:</span><p class="list__text" data-patient="description">${this.description}</p></li>\n    <li class="modal-card__list list"><span class="list__title">Давление:</span><p class="list__text" data-patient="patientPressure">${this.pressure}</p></li>\n    <li class="modal-card__list list"><span class="list__title">Индекс массы тела:</span><p class="list__text" data-patient="bodyMassIndex">${this.bodyMassIndex}</p></li>\n    <li class="modal-card__list list"><span class="list__title">Возраст:</span><p class="list__text" data-patient="patientAge">${this.age}</p></li>\n    <li class="modal-card__list list"><span class="list__title">Перенесенные заболевания сердечно-сосудистой системы:</span><p class="list__text" data-patient="lastDiseases">${this.lastDiseases}</p></li>\n    <li class="modal-card__list list"><span class="list__title">Срочность:</span><p class="list__text" data-patient="urgency">${this.urgency}</p></li>\n    </ul>\n    </li>\n  `)}}