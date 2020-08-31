/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
        this.phrase = phrase.toLowerCase();
     }

    // addPhraseToDisplay(): this adds letter placeholders to the display when the game starts. Each letter is presented by an empty box, one li element for each letter. See the example_phrase_html.txt file for an example of what the rendered HTML for a phrase should look like when the game starts, including any id or class attributes needed. When the player correctly guesses a letter, the empty box is replaced with the matched letter (see the showMatchedLetter() method below). Make sure the phrase displayed on the screen uses the letter CSS class for letters and the space CSS class for spaces.

    // <div id="phrase" class="section">
    //     <ul></ul>
    // </div>

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
        const selectPhrase = document.querySelector('#phrase > ul');
        const activePhrase = this.phrase;

        // Go through active phrase and build elements based on the string
        for (let i = 0; i < activePhrase.length; i++) {
            if (activePhrase[i] === ' ') {
                const space = document.createElement('li');
                space.classList.add('space');
                space.textContent = activePhrase[i];
    
                selectPhrase.appendChild(space);
            } else {
                const letter = document.createElement('li');
                letter.classList.add('hide', 'letter', activePhrase[i]);
                letter.textContent = activePhrase[i];
    
                selectPhrase.appendChild(letter);
            }
        }
    }

    // checkLetter(): checks to see if the letter selected by the player matches a letter in the phrase.

    // showMatchedLetter(): reveals the letter(s) on the board that matches the player's selection. To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected element's hide CSS class with the show CSS class.
 }