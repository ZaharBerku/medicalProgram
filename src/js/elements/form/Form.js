import CreateHTMLElement from '../CreateHTMLElement.js'
import VisitCardiologist from '../cards/VisitCardiologist.js'
import VisitDentist from '../cards/VisitDentist.js'
import VisitTherapist from '../cards/VisitTherapist.js'
import Fetch from '../../api/Fetch.js'
import Valid from '../../functionForValid/Valid.js'
import Lisener from '../../Lisener/Lisener.js'
import{
  addLocalStorageData,
}from '../../function/localStorage.js'





export default class Form extends CreateHTMLElement {
    constructor({ className, id , formData:{ inputsAndSelect, labels, btnSubmit},ariaLabelledby, ariaHidden, tabindex ='', role ='',text }) {
      super(className, id);
      this.inputsAndSelect = inputsAndSelect;
      this.btnSubmit = btnSubmit;
      this.labels = labels;
      this.tabindex =tabindex;
      this.role = role
      this.ariaLabel = ariaLabelledby;
      this.ariaHidden = ariaHidden;
      this.text = text;
    }
    render(elem, place) {
      this.createForm();
      this.addElement(elem, place);
      this.addFields();
      this.listenerSubmit();
    }
    createForm() {
      this.createElement({
        name: 'form',
        attributes: {
          innerHTML: this.text,
          name: 'registration-form',
          tabindex: this.tabindex,
          role: this.role,
          "aria-labelledby":this.ariaLabel,
          "aria-hidden":this.ariaHidden,
        }
      })
    }
    addFields() {
      this.labels.forEach(element => element.render(`.${this.className[0]} .modal-body`, 'beforeend'));
      this.btnSubmit.forEach(element => {
        if (element.className[0] === 'main__form-btn-close') {
          element.render(`.${this.className[0]} .modal-header`, 'beforeend',`.${this.className[0]}`)
        }else{
          element.render(`.${this.className[0]} .modal-footer`, 'beforeend')
        }
      });
      this.inputsAndSelect.forEach((element,index) => element.render(`.${this.labels[index].className[1]}`,'beforeend'));
    }
  
    isValidValue(event, arr){
      arr.forEach((elem)=>{
      const func = new Valid(event.target.elements[elem].value, event.target.elements[elem])
      func.render(elem);
      })
    }

    getValue(event, arr){
      const data = {}
      let mass = null
      let growth = null
      arr.forEach(element => {
        const value = event.target.elements[element].value
        if(element === "patientMass"){
          mass = value
        }else if (element === "patientGrowth") {
          growth = value
        }else if(element.includes('Name')){
          data["fullName"] =  data["fullName"] ? data["fullName"] + value + ' ' : value + ' ' 
        }else{
          data[element] = value
        }
        if(mass && growth) {
          data["bodyMassIndex"] = (mass / ((growth * 0.01)**2)).toFixed(2)
        }
     });
     return data
    }

    static renderModalCard(data){
      const {id, ...another} = data
      const readyData = {id:`card-${id}`, className: ['card', 'm-1'], style:"width: 70rem", ...another}
      let renderCardDoctor = null;
      if(data.doctor === 'Кардиолог'){
        renderCardDoctor = new VisitCardiologist(readyData)
      }else if(data.doctor === 'Терапевт'){
        renderCardDoctor = new VisitTherapist(readyData)
      }else if(data.doctor === 'Стоматолог'){
        renderCardDoctor = new VisitDentist(readyData)
      }
      renderCardDoctor.render('.cards-wrapper', 'beforeend')

    }

    postAndCreateData(event,arrName){
      Fetch.createData(this.getValue(event,arrName))
          .then(resolve => resolve.json())
          .then(data => {
            Form.renderModalCard(data)
            addLocalStorageData(data)
          })
          .then(() => {
            const div = document.getElementById('exampleModalCenter')
            document.body.className = ''  
            div.classList.remove('show')
            div.style.cssText = ``
            document.querySelector('.modal-backdrop').remove()
            const form = document.querySelector('.main__form')
            form.remove();
            document.querySelector('.text-danger').remove()
          })
    }

    getAndValidDataWithForm(element,event){
      event.preventDefault();
      const arrName = [...element.elements].filter(elem => elem.name).map(elem => elem.name)
      this.isValidValue(event, arrName)
      if(!element.querySelector('.main__not-valid-input')){
        this.postAndCreateData(event,arrName)
      }
    }

    listenerSubmit(){
      if(this.className[0] === 'main__form'){
        Lisener.render(`.${this.className[0]}`,'submit',this.getAndValidDataWithForm.bind(this))
      }
    }
  
  }