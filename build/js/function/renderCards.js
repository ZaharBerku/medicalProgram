import showNoVisitText from"./showNoVisitText.js";import Form from"../elements/form/Form.js";import Fetch from"../api/Fetch.js";async function renderCards(){const r=await Fetch.getDataCards();0===r.length&&showNoVisitText(document.querySelector(".cards-wrapper")),r?r.forEach((r=>{Form.renderModalCard(r)})):showNoVisitText(document.querySelector(".cards-wrapper"))}export default renderCards;