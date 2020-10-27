var alphabet = "abcdefghijklmnopqrstuvwxyz" //Alfabeto per il cifrario

function encrypt(){

	var text = "";
	var str = document.getElementById("notencrypted_text").value;	//Prendo la stringa da cifrare da html
	var n = document.getElementById("key").value * 1;		//Prendo la chiave da html
	var char = str.split("");					//Splitto la stringa in un array di caratteri
	var length = str.length;					//Ricavo la lunghezza

	for (var i = 0; i < length; i++){

		var letter = str.charAt(i);

		if (alphabet.includes(letter)){

			var pos = alphabet.indexOf(letter); //Trovo un numero corrispondente alla lettera da processare

			if ((n+pos)>25){		//Cambia le posizioni in base alla chiave inserita
				n = (n+pos) - 25; 
				pos = -1;
			}

			var letter_changed = alphabet.charAt(pos + n); 	//Cambio le lettere in base all' alfabeto soprascritto e alla posizione

		} else {letter_changed = letter;}

		text = text + letter_changed;		//Ricrea la frase dai caratteri cifrati singolarmente
	}

	document.getElementById("encrypted_text").value = text;	//Restituisco la stringa cifrata nell`html
}

function decrypt(){

	var text = "";
	var str = document.getElementById("encrypted_text").value;	//Prendo la stringa da decifrare da html
	var n = document.getElementById("key").value * 1;		//Prendo la chiave da html
	var char = str.split("");					//Splitto la stringa in un array di caratteri
	var length = str.length;					//Ricavo la lunghezza

	for (var i = 0; i < length; i++){ //Cicla l'intera frase

		var letter = str.charAt(i);
		
		if (alphabet.includes(letter)){

			var pos = alphabet.indexOf(letter);

			if ((pos-n)<0){
				n = (pos+n);
				pos = 26;
			}

			var letter_changed = alphabet.charAt(pos - n);
			
		} else {letter_changed = letter;}

		text = text + letter_changed; //Ricrea la frase dai caratteri decifrati singolarmente
	}
	
	document.getElementById("notencrypted_text").value = text; //Restituisco la stringa decifrata
}
