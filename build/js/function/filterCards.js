export default function filterCards(){let e="Не заданно",t="Не заданно",r="";document.querySelector(".nav-wrapper").addEventListener("input",(a=>{"doctorSearch"===a.target.id&&(e=a.target.value),"prioritySearch"===a.target.id&&(t=a.target.value),"searchInput"===a.target.id&&(r=a.target.value),e||(e="Не заданно"),t||(t="Не заданно");let d=document.querySelectorAll(".card"),n=null;function i(){n.forEach((e=>{let t=[...e.querySelectorAll(".card-text p"),e.querySelector(".list__text")].map((e=>e.innerText)).join(" ").toLowerCase().includes(`${r.toLowerCase()}`);t?e.classList.remove("hidden"):e.classList.add("hidden")}))}"Не заданно"===e&&"Не заданно"===t||""===e&&""===t?(n=[...d],i()):"Не заданно"!=e&&"Не заданно"!=t?(n=[],d.forEach((r=>{r.querySelector('[data-patient="doctor"]').innerText===e&&r.querySelector('[data-patient="urgency"]').innerText===t?(r.classList.remove("hidden"),n.push(r)):r.classList.add("hidden")})),i()):(n=[],d.forEach((r=>{r.querySelector('[data-patient="doctor"]').innerText===e||r.querySelector('[data-patient="urgency"]').innerText===t?(r.classList.remove("hidden"),n.push(r)):r.classList.add("hidden")})),i())}))}