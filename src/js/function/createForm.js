import createFormForCreateCards from "./createFormForCreateCards/createFormForCreateCards.js";


const createForm = () => {
    const form = createFormForCreateCards()
    form.render(".cards-wrapper", "afterbegin");
    setTimeout(() => {
      document
        .querySelector(`.${form.element.classList[0]}`)
        .classList.remove("form");
    }, 0);
    const div = document.getElementById('exampleModalCenter')
    const createDiv = document.createElement('div')
    createDiv.className = "modal-backdrop fade show"
        document.body.className = 'modal-open'  
        div.classList.add('show')
        div.style.cssText = `display:block`
      document.body.append(createDiv)
      document.querySelector('#exampleModalCenter').addEventListener('click',(event)=>{
        if (event.target.id === 'exampleModalCenter') {
          document.body.className = ''  
          div.classList.remove('show')
          div.style.cssText = ``
          document.querySelector('.modal-backdrop').remove()
          document.querySelector('.main__form').remove()
        }})
  };

  export default createForm