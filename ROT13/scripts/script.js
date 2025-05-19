document.addEventListener('DOMContentLoaded', function() {
  let alphabetLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let alphabetUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  let input = document.getElementById('inputText');
  let output = document.getElementById('outputText');
  let variantInput = document.getElementById('variant');
  let debug = document.getElementById('debug');
  let button = document.getElementById('button');

  function rot13(text, isEncrypt) {
    let result = '';
    let shift_script = 13; 
    let shift_enscript = -13; 

    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      let found = false;

      for (let j = 0; j < 26; j++) {
        if (char === alphabetLower[j]) {
			if (isEncrypt === 0) {
				let newIndex = (j + shift_script) % 26;
				result += alphabetLower[newIndex];
				found = true;
				break;
			}
			if (isEncrypt != 0) {
				let newIndex = (j + shift_enscript) % 26;
				result += alphabetLower[newIndex];
				found = true;
				break;
			}
        } else if (char === alphabetUpper[j]) {
			if (isEncrypt === 0) {
				let newIndex = (j + shift_script) % 26;
				result += alphabetUpper[newIndex];
				found = true;
				break;
			}
			if (isEncrypt != 0) {
				let newIndex = (j + shift_enscript) % 26;
				result += alphabetUpper[newIndex];
				found = true;
				break;
			}
        }
      }

      if (!found) {
        result += char;
      }
    }

    return result;
  }

  function update() {
    let text = input.value;
    let variant = parseInt(variantInput.value);
    if (isNaN(variant)) {
      output.value = '';
      return;
    }
    let isEncrypt = variant % 2;
    let result = rot13(text, isEncrypt);
    output.value = result;
  }

  button.addEventListener('click', update);
});