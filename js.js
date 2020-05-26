var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

function encrypt(){

	var text = "";
	var str = document.getElementById("notencrypted_text").value;
	var n = document.getElementById("key").value * 1;
	var char = str.split("");
	var length = str.length;

	for (var i = 0; i < length; i++){
		var letter = str.charAt(i);
		
		if (alphabet.includes(letter)){
			var pos = alphabet.indexOf(letter);
			var letter_changed = alphabet.charAt(pos + n);
		} else {
			letter_changed = letter;
		}

		text = text + letter_changed;
	}

	document.getElementById("encrypted_text").value = text;
}

function decrypt(){

	var text = "";
	var str = document.getElementById("encrypted_text").value;
	var n = document.getElementById("key").value * 1;
	var char = str.split("");
	var length = str.length;

	for (var i = 0; i < length; i++){
		var letter = str.charAt(i);
		
		if (alphabet.includes(letter)){
			var pos = alphabet.indexOf(letter);
			var letter_changed = alphabet.charAt(pos - n);
		} else {
			letter_changed = letter;
		}

		text = text + letter_changed;
	}
	
	document.getElementById("notencrypted_text").value = text;
}