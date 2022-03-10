function addLocalStorageData(data){
    const all = getDataPatient()
    all.push(data)
    localStorage.setItem('patient',JSON.stringify(all))
}

function getTokenFromStorage() {
  return localStorage.getItem("token")
}

function getDataPatient(){
  return JSON.parse(localStorage.getItem('patient') || '[]')
}


function writeTokenToStorage(token) {
	localStorage.setItem('token', token);
}

export {
  getDataPatient,
  addLocalStorageData,
  writeTokenToStorage,
  getTokenFromStorage,
}