var alphabet = "abcdefghijklmnopqrstuvwxyz" //alfabeto per il cifrario

function encrypt(){

	var text = "";
	var str = document.getElementById("notencrypted_text").value;	//prendo la stringa da cifrare da html
	var n = document.getElementById("key").value * 1;		//prendo la chiave da html
	var char = str.split("");					//splitto la stringa in un array di caratteri
	var length = str.length;					//ricavo la lunghezza

	for (var i = 0; i < length; i++){

		var letter = str.charAt(i);

		if (alphabet.includes(letter)){

			var pos = alphabet.indexOf(letter); //trovo un numero corrispondente alla lettera da processare

			if ((n+pos)>25){		//cambia le posizioni in base alla chiave inserita
				n = (n+pos) - 25; 
				pos = -1;
			}

			var letter_changed = alphabet.charAt(pos + n); 	//cambio le lettere in base all' alfabeto soprascritto e alla posizione

		} else {letter_changed = letter;}

		text = text + letter_changed;		//ricrea la frase dai caratteri cifrati singolarmente
	}

	document.getElementById("encrypted_text").value = text;	//restituisco la stringa cifrata nell`html
}

function decrypt(){

	var text = "";
	var str = document.getElementById("encrypted_text").value;	//prendo la stringa da decifrare da html
	var n = document.getElementById("key").value * 1;		//prendo la chiave da html
	var char = str.split("");					//splitto la stringa in un array di caratteri
	var length = str.length;					//ricavo la lunghezza

	for (var i = 0; i < length; i++){ //cicla l'intera frase

		var letter = str.charAt(i);
		
		if (alphabet.includes(letter)){

			var pos = alphabet.indexOf(letter);

			if ((pos-n)<0){
				n = (pos+n);
				pos = 26;
			}

			var letter_changed = alphabet.charAt(pos - n);
			
		} else {letter_changed = letter;}

		text = text + letter_changed; //ricrea la frase dai caratteri decifrati singolarmente
	}
	
	document.getElementById("notencrypted_text").value = text; //restituisco la stringa decifrata
}
