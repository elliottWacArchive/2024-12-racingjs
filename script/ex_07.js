document.addEventListener("DOMContentLoaded", function (){
    let canvas = document.getElementsByTagName('canvas')[0];
	let pauseButton = document.getElementsByTagName('button')[0];
	let stopButton = document.getElementsByTagName('button')[1];
	let muteButton = document.getElementsByTagName('button')[2];
	let audio = new Audio('./triangle.ogg');

    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(6, 6);
        ctx.lineTo(14, 10);
        ctx.lineTo(6, 14);
        ctx.closePath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#FFFFFF';
        ctx.stroke();
    }

	canvas.addEventListener('click', function () {
		audio.play();
	});

	pauseButton.addEventListener('click', function () {
		audio.pause();
	});

	stopButton.addEventListener('click', function () {
		audio.pause();
		audio.currentTime = 0;
	});

	muteButton.addEventListener('click', function () {
		if (audio.muted) {
			audio.muted = false;
		} else {
			audio.muted = true;
		}
	});
});