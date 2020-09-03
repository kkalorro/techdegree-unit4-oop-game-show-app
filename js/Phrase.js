 class Phrase {
    constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    }

    // Returns all DOM letters
    get lettersDOM() {
        return document.querySelectorAll('.letter');
    }

    // Adds letter placeholders to the display when the game starts
    addPhraseToDisplay() {
        // Go through phrase and build elements based on the character
        for (let char of this.phrase) {
            // Create a list element
            const li = document.createElement('li');
            // Give space and non-space characters appropriate classes
            // (char === ' ') ? li.classList.add('space') : li.classList.add('hide', 'letter', char);
            (char === ' ') ? li.classList.add('space') : li.classList.add('letter', char);
            // This should be refactored out to prevent cheating
            li.textContent = char;
            // Append to DOM phrase
            document.querySelector('#phrase > ul').appendChild(li);
        }
    }

    // Checks if chosen letter is in the phrase
    checkLetter(targetLetter) {
        // PLACEHOLDER: Selected letter
        // const selectedLetter = 'o';

        // Array.from() learned from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
        // Discovered by: https://stackoverflow.com/questions/32765157/filter-or-map-nodelists-in-es6
        // Returns matches
        // return Array.from(this.lettersDOM).filter(match => match.textContent === selectedLetter);
        return Array.from(this.lettersDOM).filter(match => match.textContent === targetLetter);
    }
        
    // Reveals matched letter(s) on the board
    showMatchedLetter(targetLetter) {
        // Go through matching letters then swap hide class with show
        this.checkLetter(targetLetter).forEach(letter => {
            // letter.classList.remove('hide');
            letter.classList.add('show');
        });
    }
 }