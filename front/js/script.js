
let urlAtual = (window.location).toString();
if( urlAtual.includes("created=t") ) {
	let cadastradoSucesso = document.getElementById("cadastradoSucesso").hidden = false;
}

function logout() {
	document.cookie = "logged=false";
	window.location.href = "index.html";
}
