export default class Fetch{constructor(){this.token=null}static assingToken(t){this.token=t}static createData(t){return document.querySelector(".main__form-btn").disabled=!0,fetch("https://ajax.test-danit.com/api/v2/cards",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token}`},body:JSON.stringify(t)})}static deleteCard(t){return fetch(`https://ajax.test-danit.com/api/v2/cards/${t}`,{method:"DELETE",headers:{Authorization:`Bearer ${this.token}`}})}static getDataCards(){return fetch("https://ajax.test-danit.com/api/v2/cards",{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token}`}}).then((t=>t.json()))}static putCard(t,e){return fetch(`https://ajax.test-danit.com/api/v2/cards/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token}`},body:JSON.stringify(t)}).then((t=>t.json()))}static getDataCard(t){return fetch(`https://ajax.test-danit.com/api/v2/cards/${t}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token}`}})}static getToken(t=null,e=null){return fetch("https://ajax.test-danit.com/api/v2/cards/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:e})}).then((t=>t.text())).then((t=>t))}}