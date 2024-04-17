let key = 'cebcd482eda57fa9a6714c1c2ba91885'

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    var lat = position.coords.latitude
    var lon = position.coords.longitude

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=pt_br`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data)
        showOnScreen(data)
      })
      .catch(error => {
        console.error('Erro ao buscar dados da API:', error)
      })
  })
} else {
  console.log('Geolocalização não está disponível')
}

function showOnScreen(data) {
  console.log(data)
  document.querySelector('.city').innerHTML = 'Tempo em ' + data.name

  document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + '°C'

  document.querySelector('.icone').src =
    'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png'

  document.querySelector('.description').innerHTML = data.weather[0].description

  document.querySelector('.humidity').innerHTML =
    'Umidade do ar: ' + data.main.humidity + '%'
}

async function searchCity(city) {
  let data = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      city +
      '&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric&lang=pt_br'
  ).then(response => response.json())

  showOnScreen(data)
}

function search() {
  let city = document.querySelector('.input-city').value

  searchCity(city)
}
