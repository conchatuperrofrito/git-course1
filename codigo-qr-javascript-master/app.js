const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');

const QR = new QRCode(contenedorQR);

formulario.addEventListener('submit', (e) => {
	//la pagina no se refrescara con el click
	e.preventDefault();
	QR.makeCode(formulario.link.value);
});
