export default class Fetch {
  constructor(){
    this.token = null
  }
  static assingToken(token){
    this.token = token
  }
  static createData(dataPatient) {
    document.querySelector(".main__form-btn").disabled = true;
    return fetch("https://ajax.test-danit.com/api/v2/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(dataPatient),
    });
  }

  static deleteCard(id) {
    return fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
       method: 'DELETE',
       headers: {
         'Authorization': `Bearer ${this.token}`
       },
     })
   }

  static getDataCards() {
    return fetch("https://ajax.test-danit.com/api/v2/cards", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    }).then((resolve) => resolve.json());
  }

  static putCard(newData,id) {
    return fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      },
      body: JSON.stringify(newData)
    })
    .then(resolve => resolve.json())
   }

  static getDataCard(card) {
    return fetch(`https://ajax.test-danit.com/api/v2/cards/${card}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  static getToken(email = null, password = null) {
    return fetch("https://ajax.test-danit.com/api/v2/cards/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => response.text())
      .then((token) => token);
  }
}
