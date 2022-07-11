const bg = document.querySelector('.bg');
const loadingText = document.querySelector('.loading-text');

let load = 0;

const int = setInterval(blurry, 30);

function blurry() {
	load++;

	if (load > 99) {
		clearInterval(int);
	}

	loadingText.innerText = `${load}%`;
	loadingText.style.opacity = scale(load, 0, 100, 1, 0);
	bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
