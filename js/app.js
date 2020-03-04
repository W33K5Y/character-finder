

let userButton   =	document.querySelector('.getResult');
let message 	 =  '';
let counter = 0;

const print = message => {
	let display = document.querySelector('.message');
	display.innerHTML = message;
}

userButton.addEventListener("click", () => {
	let userChar 	 = 	document.querySelector('input.character').value;
	let userSentence =  document.querySelector('input.sentence').value;
	

	const charCount = (letter, sentence) => {
		 
	for (let i = 0; i < sentence.length; i+=1) {
		if (sentence.charAt(i) === letter) {
			counter ++;
		
		}
	}   
}
charCount(userChar,userSentence);
	message += `<h1>The character was: ${userChar}</h1> 
	<h2>The amount of characters found in this instance: ${counter}</h2>
	<p>The sentence was ${userSentence}. </p>`;
	print(message);
});


