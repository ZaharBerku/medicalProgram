import CreateHTMLElement from '../../CreateHTMLElement.js'
import Lisener from '../../../Lisener/Lisener.js';

 class Select extends CreateHTMLElement{
    constructor({className, id, name = '', additionalDataForForm:{therapist,cardiologist,dentist} = '',content}){
    super(className, id)
    this.name = name;
    this.content = content;
    this.therapist = therapist;
    this.cardiologist = cardiologist;
    this.dentist = dentist;
    this.arrClassName = null
}
render(elem, place){
    this.createSelect()
    this.addElement(elem, place)
    this.lisenerSelect()
}
createSelect(){
    this.createElement({
        name: 'select',
        attributes: {
          name: this.name,
          innerHTML:this.content,
        }
    })
}
saveData(labels){
   return labels.map(element =>{
      const{className} = element
      return className[1]
    })
}
removeLabelWithForm(arr){
arr.forEach(element=>{
    document.querySelector(`.${element}`).remove()
})
}
renderInputLabel(element,obj){
    const {labels, inputs} = obj[element.value]
    labels.forEach(element => element.render(`.form-label-doctor`, 'afterend'));
    inputs.forEach((element,index) => element.render(`.${labels[index].className[1]}`,'beforeend'));
    this.arrClassName = this.saveData(labels);
}
getValueSelect(element){
     if(element.name === 'doctor'){
        const obj = {
            'Кардиолог': this.cardiologist,
            'Стоматолог': this.dentist,
            'Терапевт': this.therapist,
        }
        if (this.arrClassName) {
            this.removeLabelWithForm(this.arrClassName)
        }
        this.renderInputLabel(element,obj)
     }
    
}
lisenerSelect(){
    this.arrClassName = null
    const select = document.querySelector(`.${this.className[2]}`)
    this.getValueSelect(select)
    Lisener.render(`.${this.className[2]}`,'change', this.getValueSelect.bind(this))
}
}

export default Select