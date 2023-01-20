let word = prompt("Palavra: ");
let wordLength = word.length;

let reverseWord = word.charAt(wordLength-1).toUpperCase();

for (let i = wordLength-2; i >= 0; i--) {
    reverseWord += word.charAt(i).toLowerCase();
};

alert(`Palavra: ${word}\nIvertida: ${reverseWord}`);