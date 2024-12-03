function init(){
	//add your javascrip between these two lines of code
	//Here grabbed HTML Elements
	const entryButton = document.getElementById('entrybutton');
	const entryInput = document.getElementById('entryinput');
	const textoutput = document.getElementById('textoutput');
	
//Here Added Event Listener
entryButton.addEventListener('click', function() {
	const inputText = entryInput.value;

//Here Added Alert
	alert('Maxwell Onyemaruche: ' + 'This is a test');

	//Here Added changed h2 text
	textoutput.textContent = 'This is a test';
});

}

window.addEventListener('load', init);