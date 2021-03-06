const keys = document.querySelectorAll('.key');
const white_keys = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const black_keys = ['s', 'd', 'g', 'h', 'j'];

const whiteKeys = document.querySelectorAll('.key.white');
console.log(whiteKeys);
const blackKeys = document.querySelectorAll('.key.black');

document.addEventListener('keydown', (e) => {
	const key = e.key;

	if (e.repeat) return;

	// don't repeat sounds if repeat key

	const whiteKeyIndex = white_keys.indexOf(key);

	const blackKeyIndex = black_keys.indexOf(key);

	console.log(whiteKeys[whiteKeyIndex]);

	if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);

	console.log(whiteKeys[whiteKeyIndex]);

	// play note()
	if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});

keys.forEach((key) => {
	key.addEventListener('click', () => playNote(key));
});

function playNote(key) {
	const noteAudio = document.getElementById(key.dataset.note);
	noteAudio.currentTime = 0;
	noteAudio.play();

	key.classList.add('active');
	noteAudio.addEventListener('ended', () => {
		key.classList.remove('active');
	});
}
