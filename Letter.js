//constructor to work through whether or not a guessed letter is correct
//string value to store character for letter
//boolean - letter guessed true or false
function Letter(storedletter, guesscorrect) {
    this.storedletter = storedletter;
    this.guesscorrect = false;

    //function Character
        //takes character and returns it as _ if not guessed, returns the letter if guessed
    this.Character = function() {
        if(!this.guesscorrect) {
            return "_";
        }
        else {
            return this.storedletter;
        }
    }

    //function guesscheck
        //if guessed correct, guesscorrect is made true
    this.guesscheck = function (guessingletter) {
        if (guessingletter === this.storedletter) {
            this.guesscorrect = true;
        }
    };
};

//exporting Letter
module.exports = Letter;