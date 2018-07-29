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

let urlAtual = (window.location).toString();
if( urlAtual.includes("created=t") ) {
	let cadastradoSucesso = document.getElementById("cadastradoSucesso").hidden = false;
}

function logout() {
	document.cookie = "logged=false";
	window.location.href = "index.html";
}


function andaPersonagem() {

}