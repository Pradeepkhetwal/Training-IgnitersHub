const data = {
  id: 1,
  naam:"Pradeep"
}

const user = (data) => {
  console.log(data.id)
  console.log(data.naam)
}

// destructuring directly , here name must be same as key names.


const deUser = ({ id, naam })=>{
  console.log(id);
  console.log(naam);
}


user(data);
deUser(data);