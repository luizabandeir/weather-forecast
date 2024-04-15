let key = 'cebcd482eda57fa9a6714c1c2ba91885'

function showOnScreen(data) {
  console.log(data)
  document.querySelector('.city').innerHTML = 'Tempo em ' + data.name

  document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + '°C'

  document.querySelector('.icone').src =
    'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png'

  document.querySelector('.humidity').innerHTML =
    'Umidade do ar:' + data.main.humidity + '%'
}

async function searchCity(city) {
  let data = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      city +
      '&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric'
  ).then(response => response.json())

  showOnScreen(data)
}

function search() {
  let city = document.querySelector('.input-city').value

  searchCity(city)
}
