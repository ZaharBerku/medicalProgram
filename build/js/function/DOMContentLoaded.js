import renderCards from"./renderCards.js";import{getTokenFromStorage}from"./localStorage.js";import Fetch from"../api/Fetch.js";import createFilter from"./createFilter.js";import filterCards from"./filterCards.js";async function contentLoaded(){const e=getTokenFromStorage();Fetch.assingToken(e);const r=document.querySelector("#createVisitBtn"),t=document.querySelector("#loginBtn");createFilter(),e?(t.classList.add("hidden"),r.classList.remove("hidden"),await renderCards(),filterCards()):(r.classList.add("hidden"),t.classList.remove("hidden"))}export default contentLoaded;