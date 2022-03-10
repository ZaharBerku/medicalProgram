export default class Valid {
  constructor(value, element) {
    this.value = value;
    this.element = element;
  }
  render(nameFunction) {
    switch (nameFunction) {
      case 'fullName':
      case 'purposeVisit':
      case 'description':
      case 'lastDiseases':
        return this.isValidText()
      case 'patientTel':
        return this.isValidTel()
      case 'patientEmail':
        return this.isValidEmail()
      case 'patientAge':
      case 'patientPressure':
      case 'patientPressure':
      case 'patientMass':
      case 'patientGrowth':
        return this.isValidAge()
      case 'doctor':
        return this.isValidDoctot()
    }
  }
  isValidDoctot(){
    if(this.value === 'Кардиолог' || this.value === 'Терапевт' || this.value === 'Стоматолог'){
      this.element.classList.remove('main__not-valid-input')
    }else{
      this.element.classList.add('main__not-valid-input')
    }
  }
  isValidText() {
    const arr = this.value.split('').filter(element=> element !== ' ')
    const lettersEng = element => (element.charCodeAt() >= 97 && element.charCodeAt() <= 122) || (element.charCodeAt() >= 65 && element.charCodeAt() <= 90);
    const letterRussAndUk = element => element.charCodeAt() >= 1040 && element.charCodeAt() <= 1111;
    if (this.value !== '' && (arr.every(lettersEng) || arr.every(letterRussAndUk))) {
      this.element.classList.remove('main__not-valid-input')
      return true
    } else {
      this.element.classList.add('main__not-valid-input')
    }
  }
  isValidTel() {
    if (this.value.length === 13 && !Number.isNaN(+this.value) && this.value[0] === '+') {
      this.element.classList.remove('main__not-valid-input')
      return true
    } else {
      this.element.classList.add('main__not-valid-input')
    }
  }
  isValidAge() {
    if (!Number.isNaN(+this.value) && this.value !== '') {
      this.element.classList.remove('main__not-valid-input')
      return true
    } else {
      this.element.classList.add('main__not-valid-input')
    }
  }
  isValidEmail() {
    if (this.value.includes('@')) {
      this.element.classList.remove('main__not-valid-input')
      return true
    } else {
      this.element.classList.add('main__not-valid-input')
    }
  }
}