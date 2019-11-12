status = 1;
function changeColor() {
	x = document.getElementById("text");
	if(status==1) {
		x.style.color = 'red';
		status = 2;
	}
	else if(status==2) {
		x.style.color = 'black';
		status = 1;
	}
}