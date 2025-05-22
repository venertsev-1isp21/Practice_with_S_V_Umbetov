let alphabetLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let alphabetUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let input = document.getElementById('inputText');
let output = document.getElementById('outputText');
let button = document.getElementById('button');

function rot13(text) {
  let result = '';
  let shift = 13;

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    let found = false;

    for (let j = 0; j < 26; j++) {
      if (char === alphabetLower[j]) {
        let newIndex = (j + shift) % 26;
        result += alphabetLower[newIndex];
        found = true;
        break;
      } else if (char === alphabetUpper[j]) {
        let newIndex = (j + shift) % 26;
        result += alphabetUpper[newIndex];
        found = true;
        break;
      }
    }

    if (!found) {
      result += char;
    }
  }
  output.value = result;
}

button.addEventListener('click', function () {
  let text = input.value;
  rot13(text);
});
