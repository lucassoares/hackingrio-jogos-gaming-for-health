
let urlAtual = (window.location).toString();
if( urlAtual.includes("created=t") ) {
	let cadastradoSucesso = document.getElementById("cadastradoSucesso").hidden = false;
}

function logout() {
	document.cookie = "logged=false";
	window.location.href = "index.html";
}

function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
  } else {
      x.innerHTML = "Localização não é suportada pelo navegador!";
      x.hidden = false;
  }
}

function showPosition(position) {
  latitude  = position.coords.latitude;
  longitude = position.coords.longitude;
}

var primeiraLatitude = ;
var segundaLatitude = ;

function andaPersonagem() {
	//Verificando a cada 6 segundos localização do usuário
	setInterval(function(){ 
	
	}, 6000);
}