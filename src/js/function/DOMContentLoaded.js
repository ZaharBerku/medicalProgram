import renderCards from "./renderCards.js";
import { getTokenFromStorage } from "./localStorage.js";
import Fetch from "../api/Fetch.js";
import createFilter from "./createFilter.js";
import filterCards from "./filterCards.js";

async function contentLoaded() {
  const token = getTokenFromStorage();
  Fetch.assingToken(token);

  const newVisitBtn = document.querySelector("#createVisitBtn");
  const logInBtn = document.querySelector("#loginBtn");

  createFilter();

  if (!!token) {
    logInBtn.classList.add("hidden");
    newVisitBtn.classList.remove("hidden");
    await renderCards();
    filterCards()

  } else {
    newVisitBtn.classList.add("hidden");
    logInBtn.classList.remove("hidden");
  }

  // filterCards('#searchInput', '#statusSearch', '#prioritySearch', '.card', '.card-text')
}

export default contentLoaded;

