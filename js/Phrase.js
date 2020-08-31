/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    }

    // Returns all DOM letters
    get lettersDOM() {
        return document.querySelectorAll('.letter');
    }

    // addPhraseToDisplay(): this adds letter placeholders to the display when the game starts. Each letter is presented by an empty box, one li element for each letter. See the example_phrase_html.txt file for an example of what the rendered HTML for a phrase should look like when the game starts, including any id or class attributes needed. When the player correctly guesses a letter, the empty box is replaced with the matched letter (see the showMatchedLetter() method below). Make sure the phrase displayed on the screen uses the letter CSS class for letters and the space CSS class for spaces.

    // <div id="phrase" class="section">
    //     <ul>
    //         <li class="hide letter h">h</li>
    //         <li class="hide letter o">o</li>
    //         <li class="hide letter w">w</li>
    //         <li class="space"> </li>
    //         <li class="hide letter a">a</li>
    //         <li class="hide letter r">r</li>
    //         <li class="hide letter e">e</li>
    //         <li class="space"> </li>
    //         <li class="hide letter y">y</li>
    //         <li class="hide letter o">o</li>
    //         <li class="hide letter u">u</li>
    //     </ul>
    // </div>

    addPhraseToDisplay() {
        // // Go through active phrase and build elements based on the string
        // for (let i = 0; i < this.phrase.length; i++) {
        //     const li = document.createElement('li');
        //     (this.phrase[i] === ' ') ?
        //         li.classList.add('space') :
        //         li.classList.add('hide', 'letter', this.phrase[i]);
        //     // This should be refactored out to prevent cheating
        //     li.textContent = this.phrase[i];
        //     selectPhrase.appendChild(li);
        // }

        // Go through phrase and build elements based on the character
        for (let char of this.phrase) {
            // Create a list element
            const li = document.createElement('li');
            // Give space and non-space characters appropriate classes
            (char === ' ') ? li.classList.add('space') : li.classList.add('hide', 'letter', char);
            // This should be refactored out to prevent cheating
            li.textContent = char;
            // Append to DOM phrase
            document.querySelector('#phrase > ul').appendChild(li);
        }
    }

    // checkLetter(): checks to see if the letter selected by the player matches a letter in the phrase.
    checkletter() {
        // PLACEHOLDER: Selected letter
        const selectedLetter = 'o';

        // // Matches
        // const matches = [];

        // // Go through letters and check for selected letter match
        // for (let i = 0; i < this.letters.length; i++) {
        //     // Should be refactored to go through classlist instead of textcontent
        //     if (this.letters[i].textContent === selectedLetter) {
        //         // PLACEHOLDER: Found match
        //         matches.push(this.letters[i]);
        //     }
        // }

        // Matches
        // Array.from() learned from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
        // Discovered by: https://stackoverflow.com/questions/32765157/filter-or-map-nodelists-in-es6
        return Array.from(this.lettersDOM).filter(match => match.textContent === selectedLetter);

        // return matches;
    }
        
    // showMatchedLetter(): reveals the letter(s) on the board that matches the player's selection. To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected element's hide CSS class with the show CSS class.

    showMatchedLetter() {
        // // Go through matching letters then swap hide class with show
        // for (let i = 0; i < this.checkletter().length; i++) {
        //     this.checkletter()[i].classList.remove('hide');
        //     this.checkletter()[i].classList.add('show');
        // }

        // Go through matching letters then swap hide class with show
        this.checkletter().forEach(letter => {
            letter.classList.remove('hide');
            letter.classList.add('show');
        });
    }

    test() {
        const test = 'test';

        return Array.from(test);
    }

 }