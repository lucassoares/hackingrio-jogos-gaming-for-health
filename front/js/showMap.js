var pontosTuristicos = [
	['Prainha',-23.040382, -43.505337, 4, 'Verdadeiro santuário natural, a praia fica na zona oeste do <br> Rio de Janeiro, na região do Recreio dos Bandeirantes.'],
	['Praia de Ipanema', -22.986719, -43.196855, 4, 'A praia de Ipanema, localizada na Zona Sul do Rio de Janeiro, entre o Arpoador e o Jardim de Alah,<br> é uma das praias mais famosas do país e uma das mais movimentadas da cidade.'],
	['Praia de Copacabana', -22.973688, -43.185300, 4, 'Uma das praias mais conhecidas e frequentada do Brasil no mundo. <br> Praia que se localiza na zona sul da cidade do Rio de Janeiro, onde temos como freqüentadores uma grande diversidade de pessoas do Brasil e do mundo inteiro.'],
	['Praia do Arpoador',-22.988928, -43.192037,4, 'O local é famoso por causa da da bela vista do oceano e algumas ilhas, <br> e também pela vista da praia de Ipanema e praia do Leblon, tendo como fundo deste cenário, atrás do Leblon, o Morro Dois Irmãos e Pedra da Gávea.'],
	['Forte de Copacabana', -22.985787, -43.186588, 4, 'Considerado uma área militar, o Forte de Copacabana foi criado no começo do século XX <br> para impedir que navios inimigos invadissem a entrada da Baía de Guanabara,<br> e está localizado sobre uma ponta de pedra encravada no mar.'],
	['Jardim Botânico', -22.967740, -43.224998, 4, 'Criado em 1808 por D. João VI, o Jardim Botânico é um dos mais bonitos espaços verdes do Rio de Janeiro,  <br> com mais de 40 mil plantas de 6.500 espécies diferentes.'],
	['Pedra da Gávea', -22.996608, -43.284765, 4, ' A Pedra da Gávea é o maior bloco de pedra à beira mar do mundo, chamado assim pela semelhança com a gávea,  <br> cesto para observação situado no mastro das caravelas portuguesas.'],
	['Mirante Dona Marta', -22.940756, -43.201108, 4, 'Localizado a 360 metros de altitude,  <br> o Mirante Dona Marta é um dos mirantes mais bonitos do Rio de Janeiro.'],
	['Cristo Redentor', -22.951659, -43.210455, 4, 'No alto do morro do Corcovado está instalado o Cristo Redentor, <br> um dos pontos turísticos mais procurados do Rio de Janeiro.'],
	['Bondinho Pão de Açúcar', -22.955316, -43.166940, 4, 'O Bondinho do Pão de Açúcar é um teleférico localizado no bairro da Urca, <br> no município do Rio de Janeiro.'],
	['Lapa', -22.913021, -43.182633, 4, 'A Lapa é um bairro de boêmio da Zona Central do município do Rio de Janeiro, no Brasil. <br> Possui uma grande variedade de bares, restaurantes, boates e pubs temáticos, que atendem a todos os gostos ao longo de suas treze ruas.'],
	['Estádio Maracanã', -22.911763, -43.230167, 4, 'O Estádio Jornalista Mário Filho, <br> mais conhecido como Maracanã, o popular Maraca.'],
	['Theatro Municipal', -22.908890, -43.176568, 4, 'A Cachoeira do Horto é uma boa opção para quem deseja uma atração natural no Rio de Janeiro. <br> Ela se situa no Parque Nacional da Tijuca.'],
	['Paço Imperial', -22.902361, -43.174412, 4, 'Erguido em 1743, o prédio colonial serviu como sede do reinado <br> e do império brasileiro depois da chegada de Dom João VI ao país e em 1938 foi tombado pelo Patrimônio Histórico e Artístico Nacional.'],
	['Museu Histórico Nacional', -22.905641, -43.169492, 4,'É um museu dedicado à História do Brasil. Foi criado em 1922  <br> pelo presidente Epitácio Pessoa como parte das comemorações do Centenário da Independência do Brasil. Com um acervo de mais de 287.000 itens'],
];

function initialize() {
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
			var infowindow = new google.maps.InfoWindow();

    		var content = pontosTuristicos[i][4];

		    var marker = new google.maps.Marker({
			    position: new google.maps.LatLng(pontosTuristicos[i][1], pontosTuristicos[i][2]),
			    title: pontosTuristicos[i][0],
			    map: map
		    });

    		google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
			    return function() {
			        infowindow.setContent(content);
			        infowindow.open(map,marker);
			    };
			})(marker,content,infowindow)); 
    	}
	}
}

initialize();

function andaPersonagem() {
	//Verificando a cada 6 segundos localização do usuário
	setInterval(function(){ 
		//initialize();
	}, 60000);
}


