import showNoVisitText from './showNoVisitText.js'
import Form from '../elements/form/Form.js';
import Fetch from '../api/Fetch.js';

async function renderCards() {
    const response = await Fetch.getDataCards();
    if (response.length === 0) {
      showNoVisitText(document.querySelector(".cards-wrapper"));
    }
    if(response){
      response.forEach((item) => {
        Form.renderModalCard(item)
      });
    }else{
      showNoVisitText(document.querySelector(".cards-wrapper"));
    }
  }


  export default renderCards
