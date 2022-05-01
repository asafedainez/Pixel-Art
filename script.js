function insertElement(element, local) {
	local.appendChild(element);
}

function rgbDynamic() {
	return Math.round(Math.random() * 256 + 1);
}

function gridPaletaDeCores() {
	const paleta = document.querySelector('#color-palette');

	for (let i = 0; i < 4; i += 1) {
		const box = document.createElement('div');
		box.classList = 'color';
		if (i === 0) {
			box.style.backgroundColor = 'black';
			box.classList += ' selected';
		} else {
			const r = rgbDynamic();
			const g = rgbDynamic();
			const b = rgbDynamic();

			box.style.backgroundColor = `rgb(${r},${g},${b})`;
		}
		insertElement(box, paleta);
	}

	document.addEventListener('click', (event) => {
		if (event.target.classList.contains('color')) {
			const classSelected = document.querySelector('.selected').classList;
			document.querySelector('.selected').classList = classSelected[0];
			event.target.classList += ' selected';
		}
	}, false);
}

function gridPixels(coluna = 5) {
	const board = document.querySelector('#pixel-board');
	board.innerHTML = '';

	board.style.gridTemplateColumns = '40px '.repeat(coluna);

	for (let x = 0; x < coluna; x += 1) {
		for (let y = 0; y < coluna; y += 1) {
			const pixel = document.createElement('div');
			pixel.className = 'pixel';
			insertElement(pixel, board);
		}
	}

	document.addEventListener('click', (event) => {
		if (event.target.classList.contains('pixel')) {
			const colorSelected = document.querySelector('.selected').style.backgroundColor;
			console.log(colorSelected);
			event.target.style.backgroundColor = colorSelected;
		}
	}, false);
}

// eslint-disable-next-line no-unused-vars
function btnGrid() {
	const coluna = document.querySelector('#board-size');

	if (coluna.value < 1) {
		alert('Board inválido!');
		return;
	}

	if (coluna.value < 5) {
		coluna.value = 5;
	}

	if (coluna.value > 50) {
		coluna.value = 50;
	}

	gridPixels(coluna.value);
}

// eslint-disable-next-line no-unused-vars
function cleanBoard() {
	const pixels = document.querySelectorAll('.pixel');
	for (const pixel of pixels) {
		pixel.style.backgroundColor = 'white';
	}
}

window.onload = () => {
	gridPaletaDeCores();
	gridPixels();
};