import UserLoyalty from '../src/userLoyalty'

const onSuccess = function(e) {
  document.getElementById('response').innerHTML = this.response
}
const onError = function(e) {
  document.getElementById('response').innerHTML = e
}

const fetch = () => {
  //const url = 'https://api.github.com/repos/dunckr/email-obfuscate'
  const url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
  const request = new XMLHttpRequest()
  request.error = onError
  request.onload = onSuccess
  request.open('get', url, true)
  request.send()
}

document.getElementById('startButton').onclick = () => {
  UserLoyalty.start()
}

document.getElementById('stopButton').onclick = () => {
  UserLoyalty.stop()
}

document.getElementById('refreshButton').onclick = () => {
  location.reload()
}

const refresh = () => {
  fetch()
  document.getElementById('activeResult').innerHTML = UserLoyalty.active()
  document.getElementById('counterResult').innerHTML = UserLoyalty.results()
}

refresh()
