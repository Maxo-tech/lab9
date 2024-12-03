function init(){
	//add your javascrip between these two lines of code
	
	const entryButton = document.getElementById('entrybutton');
	const entryInput = document.getElementById('entryinput');
	const textoutput = document.getElementById('textoutput');
	


entryButton.addEventListener('click', function() {
	const inputText = entryInput.value;

	
	alert('Maxwell Onyemaruche: ' + 'This is a test');


	textoutput.textContent = 'This is a test';
});

}

window.addEventListener('load', init);