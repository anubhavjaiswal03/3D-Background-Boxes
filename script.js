const btn = document.getElementById('btn');
const boxes = document.getElementById('boxes');

let size = 500;
let length = 4;
let boxCount = 16;

createBoxes();
splitImage();

function createBoxes() {
	for (let i = 0; i < boxCount; i++) {
		const box = document.createElement('div');
		box.classList.add('box');
		boxes.appendChild(box);
	}
}

function splitImage() {
	const boxList = document.querySelectorAll('.boxes .box');
	boxList.forEach((box, idx) => {
		box.style.backgroundPosition = `${-1 * (size / length) * (idx % 4)}px ${
			-1 * (size / length) * Math.floor(idx / 4)
		}px`;
	});
}

btn.addEventListener('click', () => {
	boxes.classList.toggle('big');
});

//We can allso add all the 16 boxes programatically
