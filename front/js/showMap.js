function initMap() {
	var myLatLng = {lat: latitude, lng: longitude};
	var map = new google.maps.Map(document.getElementById('map'), {
	  center: myLatLng,
	  zoom: 14
	});
	var marker = new google.maps.Marker({
	  map: map,
	  position: myLatLng,
	  title: 'Hello World!'
	});
}

function initialize() {
	var markers = [];
	var map = new google.maps.Map(document.getElementById('map-canvas'), {
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	  panControl: false,
	  gestureHandling: 'greedy',
});

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

var styles = [
	{
	  featureType: 'all',
	  elementType: 'labels',
	  stylers: [{ visibility: 'off' }],
	}
];

map.setOptions({ styles: styles }); 

let x = document.getElementById("demo");
let latitude;
let longitude;

