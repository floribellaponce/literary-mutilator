status = 1;

function changeColor() {
	x = document.getElementById("text");
	if(status == 1) {
		x.style.color = 'red';
		status = 2;
	} else if(status == 2) {
		x.style.color = 'black';
		status = 1;
	}
}

status = 1;

function changeFont() {
	x = document.getElementById("text");
	if(status == 1) {
		x.style.fontFamily = "verdana";
		status = 2;
	} else if(status == 2) {
		x.style.fontFamily = "arial";
		status = 3;
	} else if(status == 3) {
		x.style.fontFamily = "times";
		status = 1;
	}
}


function shuffledWord (word){
	var shuffledWord = '';
	word = word.split('');
	while (word.length > 0) {
		shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
	}
	return shuffledWord;
}

	function myFunction() {
		document.getElementById("page").style.backgroundColor = "gray";
	}