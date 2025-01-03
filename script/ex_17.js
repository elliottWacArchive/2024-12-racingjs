function combineImage(urls)
{
    let canvas = document.createElement('canvas');
    canvas.id = 'combinedCanvas';
    canvas.style.height = '100%';
    canvas.style.width = '100%';
	canvas.style.background = 'transparent';
    let ctx = canvas.getContext('2d');
    let whiteSpace = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
    let i = 0;

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    function randomPos(width, height) {
        return {
            x: Math.floor(Math.random() * (canvas.width - width)),
            y: Math.floor(Math.random() * (canvas.height - height))
        };
    }

    urls.forEach(function(url) {
        let img = new Image();
        img.onload = function(){
            let imgWidth = img.width;
            let imgHeight = img.height;
			if (imgHeight > canvas.height) {
                let ratio = canvas.height / imgHeight;
                imgHeight = canvas.height;
				imgWidth = imgWidth * ratio;
            }

            let pos = randomPos(imgWidth, imgHeight);
            ctx.drawImage(img, pos.x, pos.y, imgWidth, imgHeight);
        };
        img.src = url;
        i++;
        if (i === urls.length) {
            whiteSpace.appendChild(canvas);
        };
    });
}