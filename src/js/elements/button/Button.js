import CreateHTMLElement from '../CreateHTMLElement.js'
import Lisener from '../../Lisener/Lisener.js';
import Fetch from '../../api/Fetch.js';
import Valid from '../../functionForValid/Valid.js';
import showNoVisitText from '../../function/showNoVisitText.js';
import{
  getDataPatient,
}from '../../function/localStorage.js'

export default  class Button extends CreateHTMLElement {
  constructor({ className, id, type = '', text = '', "aria-label": ariaLabel = '', "data-dismiss": dataDismiss = "" }) {
    super(className, id);
    this.type = type;
    this.text = text;
    this.ariaLabel = ariaLabel
    this.dataDismiss = dataDismiss
  }
  render(elem, place, name = null) {
    this.createButton()
    this.addElement(elem, place)
    if (this.className.includes("close")) this.listenerBtnClose(name)
    if (this.className.includes("edit-btn")) this.lisenerBtnEdit(name)
  }
  createButton() {
    this.createElement({
      name: 'button',
      attributes: {
        type: this.type,
        innerHTML: this.text,
        "aria-label": this.ariaLabel,
        "data-dismiss": this.dataDismiss
      }
    })
  }


  stopScroll() {
    const body = document.querySelector('body');
    body.classList.add('stop-scroll');
    body.querySelector('.main__block-for-form').classList.remove("block-for-form")
  }

  removeWithLocalStorage(id){ 
  const newDataPatient = getDataPatient().filter(element=> element.id !== id )
  localStorage.setItem('patient',JSON.stringify(newDataPatient))
  if(newDataPatient.length === 0){
    showNoVisitText(document.querySelector(".cards-wrapper"));
  }
  }

  closeForm(name, linkBtn) {
    const element = linkBtn.closest(name)
    if (name === '.main__form' || name === '#exampleModalCenter') {
      const div = document.getElementById('exampleModalCenter')
      document.body.className = ''  
      div.classList.remove('show')
      div.style.cssText = ``
      document.querySelector('.modal-backdrop').remove()
      // this.stopScroll()
    }else if(element.id.includes('card')){
      const id = parseInt(element.id.split('-').reverse().join(' '))
      Fetch.deleteCard(id)
      .then(()=>{
        this.removeWithLocalStorage(id)
        element.remove()
      })
      
    }
    element.remove()
  }

  isValidNewData(value,name,element){
    const func = new Valid(value, element)
    func.render(name);
  }
  editWithLocalStorage(data){
     const newDataPatientLocalStorage = getDataPatient().map(element => element.id === data.id ? element = data : element)

    localStorage.setItem('patient',JSON.stringify(newDataPatientLocalStorage))
  }

  async saveEditCard(newData,arrElement, id){
   const data = await Fetch.putCard(newData,id)
   arrElement.forEach(this.removeAttribute);
    this.editWithLocalStorage(data)
  }
  removeAttribute(element){
    element.removeAttribute('contenteditable')
    element.classList.remove('border')
  }

  setAttribute(element){
    element.setAttribute('contenteditable', 'true')
    element.classList.add('border')
  }

  editTextCard(element,event) {
    if (element.classList.contains("edit-btn")){

      const parent = event.currentTarget
      const id = parseInt(parent.id.split('-').reverse().join(' '))
      const arrElementP = parent.querySelectorAll('p')
      let result = null;

      element.innerHTML = 'Сохранить'
      
      const newObjWithData = [...arrElementP].reduce((item,elem)=>{
        let name = elem.dataset.patient
        let value = elem.innerHTML
        if (!elem.getAttribute('contenteditable')) {
          this.setAttribute(elem)
          elem.classList.add('text')
        }else{
          this.isValidNewData(value,name,elem)
          result = true
        }
        item[name] = value
        return item
      },{})

      if (!parent.querySelector('.main__not-valid-input') && result) {
          element.innerHTML = 'Редактировать'
          this.saveEditCard(newObjWithData, arrElementP, id)
        }
      
    }
  }

  lisenerBtnEdit(name) {
    Lisener.render(name, 'click', this.editTextCard.bind(this))
  }

  listenerBtnClose(name) {

    const div = document.querySelector(name)
    div.addEventListener('click', (event) => {
      if (event.target.tagName === 'SPAN') {
        this.closeForm(name, event.target)
      }
    })
  }
}
