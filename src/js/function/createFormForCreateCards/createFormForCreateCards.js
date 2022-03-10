import Form from "../../elements/form/Form.js"
import Select from "../../elements/form/select/Select.js"
import Button from "../../elements/button/Button.js"
import Input from "../../elements/form/input/Input.js"
import Label from "../../elements/form/label/Label.js"


function createFormForCreateCards (){
    const form = new Form({
        className:['main__form', 'form','modal', 'fade'],
        id: 'exampleModalCenter',
        formData:{
          labels:[
            new Label({
              className: ['form-group__label', 'form-label-purpose-visit'],
              attribut: '#',
              text: 'Цель визита'
            }),
            new Label({
              className: ['form-group__label', 'form-label-name-description'],
              attribut: '#',
              text: 'Краткое описание визита'
            }),
            new Label({
              className: ['form-group__label', 'form-label-urgency'],
              attribut: '#',
              text: 'Cрочность'
            }),
            new Label({
              className: ['form-group__label', 'form-label-last-name'],
              attribut: '#',
              text: 'Фамилия'
            }),
            new Label({
              className: ['form-group__label', 'form-label-name'],
              attribut: '#',
              text: 'Имя'
            }),
            new Label({
              className: ['form-group__label', 'form-label-patronymic'],
              attribut: '#',
              text: 'Отчество'
                }),
            new Label({
              className: ['form-group__label', 'form-label-doctor'],
              attribut: '#',
              text: 'Выберите доктора'
                }),
          ],
          inputsAndSelect:[
            new Input({
              className: ['form-control', 'form-input-purpose-visit'],
              type: 'text',
              name: 'purposeVisit',
            }),
            new Input({
              className: ['form-control', 'form-input-description'],
              type: 'text',
              name: 'description',
            }),
            new Select({
              className: ['main__form-select','form-control', 'form-select-urgency'],
              name: 'urgency',
              content:`
              <option value="Обычная">Обычная</option>
              <option value="Приоритетная">Приоритетная</option>
              <option value="Неотложная">Неотложная</option>
              `,
            }),
            new Input({
              className: ['form-control', 'form-input-last-name'],
              type: 'text',
              name: 'patientLastName',
              placeholder: 'Иванов'
            }),
             new Input({
               className: ['form-control', 'form-input-name'],
               type: 'text',
               name: 'patientName',
               placeholder: 'Иван'
             }),
             new Input({
              className: ['form-control', 'form-input-patronymic'],
              type: 'text',
              name: 'patientPatronymicName',
              placeholder: 'Иванович'
            }),
            new Select({
              className: ['main__form-select','form-control', 'form-select-patronymic'],
              name: 'doctor',
              content:`
              <option selected="selected" value="Кардиолог">Кардиолог</option>
              <option value="Стоматолог">Стоматолог</option>
              <option value="Терапевт">Терапевт</option>
              `,
              additionalDataForForm:{
                therapist:{
                  labels:[
                    new Label({
                      className: ['form-group__label', 'form-label-age'],
                      attribut: '#',
                      text: 'Полных лет'
                     }),
                    ],
                    inputs:[
                      new Input({
                      className: ['form-control', 'form-input-age'],
                      type: 'number',
                      name: 'patientAge',
                        }),
                    ]
                },
                cardiologist:{
                  labels:[
                    new Label({
                      className: ['form-group__label', 'form-label-pressure'],
                      attribut: '#',
                      text: 'Обычное давление'
                     }),
                     new Label({
                      className: ['form-group__label', 'form-label-weight'],
                      attribut: '#',
                      text: 'Вес'
                     }),
                     new Label({
                      className: ['form-group__label', 'form-label-growth'],
                      attribut: '#',
                      text: 'Рост'
                     }),
                     new Label({
                      className: ['form-group__label', 'form-label-age'],
                      attribut: '#',
                      text: 'Полных лет'
                     }),
                     new Label({
                      className: ['form-group__label', 'form-label-last-diseases'],
                      attribut: '#',
                      text: 'Перенесенные заболевания сердечно-сосудистой системы'
                     }),
                    ],
                    inputs:[
                      new Input({
                      className: ['form-control', 'form-input-pressure'],
                      type: 'number',
                      name: 'patientPressure',
                        }),
                      new Input({
                      className: ['form-control', 'form-input-weight'],
                      type: 'number',
                      name: 'patientMass',
                        }),
                      new Input({
                      className: ['form-control', 'form-input-growth'],
                      type: 'number',
                      name: 'patientGrowth',
                        }),
                      new Input({
                        className: ['form-control', 'form-input-age'],
                        type: 'number',
                        name: 'patientAge',
                          }),
                      new Input({
                      className: ['form-control', 'form-input-last-diseases'],
                      type: 'text',
                      name: 'lastDiseases',
                        }),    
                    ]
                },
                dentist:{
                  labels:[
                    new Label({
                      className: ['form-group__label', 'form-label-date-last-visit'],
                      attribut: '#',
                      text: 'Дата последнего посещения'
                     }),
                    ],
                    inputs:[
                      new Input({
                      className: ['form-control', 'form-input-last-visit'],
                      type: 'date',
                      name: 'patientLastVisit',
                        }),
                    ]
                },
                }
            })
             ],
             btnSubmit:[
              new Button({
                className: ['main__form-btn','btn', 'btn-primary'],
                type: 'submit',
                text: 'Записать',
              }),
              new Button({
                className: ['main__form-btn-close', 'close'],
                type: 'button',
                text:'<span aria-hidden="true">&times;</span>',
              })
              ],
        },
        text:`
        <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header" id="loginHeader">
            <h5 class="modal-title" id="exampleModalLongTitle">Создать карточку</h5>
          </div>
          <div class="modal-body" id="LoginModalBody">
          </div>
          <div class="modal-footer" id="loginFooter">
          </div>
        </div>
      </div>
      </div>
        `,
        role:"dialog",
        ariaLabelledby: "exampleModalCenterTitle",
        ariaHidden: "true",
        tabindex: "-1",
      })
      return form
}


export default createFormForCreateCards