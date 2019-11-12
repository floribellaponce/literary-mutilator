var button = document. createElement('button');
button.innerHTML = 'Black or Red';

document.body.appendChild(button);
var state = 0;

button.addEventListener('click', function() {
	var demo = document.getElementById("demo");

	if (state === 1) {
		demo.style.color = 'black';
		state = 0
	} else {
		demo.style.color = 'red';
		state = 1;
	}
})