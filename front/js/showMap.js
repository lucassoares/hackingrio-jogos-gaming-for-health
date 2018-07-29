var pontosTuristicos = [
	['Prainha',-23.040382, -43.505337, 4],
	['Praia de Ipanema', -22.986719, -43.196855, 4],
	['Praia de Copacabana', -22.973688, -43.185300, 4],
	['Praia do Arpoador',-22.988928, -43.192037,4],
	['Forte de Copacabana', -22.985787, -43.186588, 4],
	['Jardim Botânico', -22.967740, -43.224998, 4],
	['Pedra da Gávea', -22.996608, -43.284765, 4],
	['Mirante Dona Marta', -22.940756, -43.201108, 4],
	['Cristo Redentor', -22.951659, -43.210455, 4],
	['Bondinho Pão de Açúcar', -22.955316, -43.166940, 4],
	['Lapa', -22.913021, -43.182633, 4],
	['Estádio Maracanã', -22.911763, -43.230167, 4],
	['Theatro Municipal', -22.908890, -43.176568, 4],
	['Museu Histórico Nacional', -22.905641, -43.169492, 4],
	['Paço Imperial' -22.903395, -43.174420, 4]
];

function initialize() {
	var map
	var markers = [];
	var map = new google.maps.Map(document.getElementById('map'), {
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  panControl: false,
	  gestureHandling: 'greedy',
	});

	var styles = [
		{
		  featureType: 'all',
		  elementType: 'labels',
		  stylers: [{ visibility: 'off' }],
		}
	];

	map.setOptions({ styles: styles });


	var x = document.getElementById("demo");
	var latitude;
	var longitude;

	getLocation();

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
	  initMap();
	}

	function initMap() {
		var myLatLng = {lat: latitude, lng: longitude};
		var map = new google.maps.Map(document.getElementById('map'), {
		  center: myLatLng,
		  zoom: 14
		});
		var marker = new google.maps.Marker({
		  map: map,
		  position: myLatLng,
		  title: 'Eu!',
		  icon: 'img/localizacao_personagem.png'
		});

	    for (i = 0; i < pontosTuristicos.length; i++) {  
		    var marker = new google.maps.Marker({
			    position: new google.maps.LatLng(pontosTuristicos[i][1], pontosTuristicos[i][2]),
			    title: pontosTuristicos[i][0],
			    map: map
		    });
    	}
	}
}

initialize();

