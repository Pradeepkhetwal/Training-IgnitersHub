const API_KEY=`a04dbe03b9e5f908285bee88db6355c9`

// const API=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

// const IMG_URL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const form = document.querySelector("form")

const search = document.querySelector("#search")

const weather = document.querySelector("#row2")


// function to getweather.

const getWeather = async (city) => {
  // until response is received we will show loading...
  weather.innerHTML = `<h2>Loading...</h2>`
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  const response = await fetch(url);

  // .json() is used to convert the json reponse to a js object.
  // .json() always returns promise so await ensures ki first promise resolve ho jaye aur uski resolved value fir data mein store ho jaye.
  // data is the js object.
  const data = await response.json();
  return showWeather(data);
}


const showWeather = (data) => {
  if (data.code == "404") {
    weather.innerHTML = `<h2>City not found</h2>`
    return;
  }

  weather.innerHTML = `
  <div>
   <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="no image" />
   </div>
   <div><h2>${data.main.temp}&degC</h2>
   <h4>${data.weather[0].main}</h4>
   </div>

  
  `
}


// adding event listener to form .

form.addEventListener("submit", (event) => {
  getWeather(search.value);
  event.preventDefault();
})






