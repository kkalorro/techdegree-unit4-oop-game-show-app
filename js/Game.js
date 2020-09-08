// The class should include a constructor that initializes the following properties:
class Game {
    constructor() {
        // missed: used to track the number of missed guesses by the player. The initial value is 0, since no guesses have been made at the start of the game.
        this.missed = 0;
        // phrases: an array of five Phrase objects to use with the game. A phrase should only include letters and spaces— no numbers, punctuation or other special characters.
        this.phrases = ['make it rain', 'get off your high horse', 'he who laughs last laughs longest', 'out of sight out of mind', 'curiosity killed the cat', 'swinging for the fences'];
        // activePhrase: This is the Phrase object that’s currently in play. The initial value is null. Within the startGame() method, this property will be set to the Phrase object returned from a call to the getRandomPhrase() method.
        this.activePhrase = null;
    }

    // startGame(): hides the start screen overlay, calls the getRandomPhrase() method, and sets the activePhrase property with the chosen phrase. It also adds that phrase to the board by calling the addPhraseToDisplay() method on the active Phrase object.
    startGame() {
        // Reset misses
        this.missed = 0;

        // Phrase list DOM element
        document.querySelector('#phrase > ul').innerHTML = '';

        // Enable all of the onscreen keyboard buttons and update each to use the key CSS class, and not use the chosen or wrong CSS classes.
        document.querySelectorAll('.key').forEach(key => key.classList.remove('chosen', 'wrong'));

        // Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of the gameboard to display the liveHeart.png image.
        // document.querySelector('#scoreboard').firstElementChild.children.forEach(heart => {
        for (let heart of document.querySelector('#scoreboard').firstElementChild.children) {
            heart.classList.add('tries');
            heart.firstElementChild.src = 'images/liveHeart.png';
        };

        // Reset phrase list
        document.querySelector('#overlay').classList.add('hide');
        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
    }

    // getRandomPhrase(): this method randomly retrieves one of the phrases stored in the phrases array and returns it.
    getRandomPhrase() {
        const randNum = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randNum];
    }

    // handleInteraction(): this method controls most of the game logic. It checks to see if the button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess. This method should:
    handleInteraction(selectedKey) {
        // If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the game, also call the gameOver() method.
        if (this.activePhrase.checkLetter(selectedKey.textContent).length) {
            // Disable the selected letter’s onscreen keyboard button.
            selectedKey.classList.add('chosen');
            this.activePhrase.showMatchedLetter(selectedKey.textContent);
            // Call gameOver() with a true parameter if checkForWin() returns true
            if (this.checkForWin()) this.gameOver(true);
            
        // If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button and call the removeLife() method.
        } else {
            selectedKey.classList.add('wrong');
            this.removeLife();
        }
    }
    
    // removeLife(): this method removes a life from the scoreboard, by replacing one of the liveHeart.png images with a lostHeart.png image (found in the images folder) and increments the missed property. If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method.
    removeLife() {
        // Heart DOM images
        const selectHearts = document.querySelectorAll('.tries');
        // Last DOM heart
        const selectedHeart = selectHearts[selectHearts.length - 1];

        // Remove tries class from last heart
        selectedHeart.classList.remove('tries');
        // Increment missed by 1
        this.missed++;
        // Replace last heart image with lost heart image
        selectedHeart.firstChild.src = 'images/lostHeart.png';

        // Check for if out of lives
        if (this.missed === 5) this.gameOver(false);
    }

    // checkForWin(): this method checks to see if the player has revealed all of the letters in the active phrase.
    checkForWin() {
        // Filter out all shown letters
        const selectHiddenLetters = Array.from(this.activePhrase.lettersDOM).filter(match => !match.classList.contains('show'));
        
        // Return true if there are no remaining hidden letters, otherwise return false
        return (!selectHiddenLetters.length) ? true : false;
    }

    // gameOver(): this method displays the original start screen overlay, and depending on the outcome of the game, updates the overlay h1 element with a friendly win or loss message, and replaces the overlay’s start CSS class with either the win or lose CSS class.
    gameOver(bool) {
        // Show overlay
        document.querySelector('#overlay').classList.remove('hide');

        // Gameover DOM element
        const overlay = document.querySelector('#overlay');

        // Reset overlay's classes
        overlay.classList.remove('start', 'win', 'lose');

        // Change starting overlay based on win or loss
        if (bool) {
            overlay.querySelector('#game-over-message').textContent = 'YOU WIN!';
            overlay.classList.add('win');
        } else {
            overlay.querySelector('#game-over-message').textContent = 'YOU LOSE.  Please try again.';
            overlay.classList.add('lose');
        }
    }
}

