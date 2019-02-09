var Letter = require("./Letter.js");

//constructor
    //array of new letter objects representing the letters of the word
exports.Word = function(stagedword) {
    this.stagedword = stagedword;
    this.letters = [];

    //function Createword
    this.Createword = function () {
        //splits up the staged word and puts it into makeup
        var makeup = this.stagedword.split("");
        //create a new Word from Word constructor and push letters into letters array
        for (var i = 0; i < makeup.length; i++) {
            var word = new Letter(makeup[i]);
            this.letters.push(word);
        }
    }

    //function Guessing
        //takes character as argument, calls guesscheck function on each letter in letters array
    this.Guessing = function (guess) {
        this.letters.forEach(letter => {
            letter.Guesscheck(guess);
        });
    }

    this.Updating = function() {
        var displayword = "";
        this.letters.forEach(letter => {
            displayword += letter.Character() + " ";
        });
        return displayword;
    }
};

// //exporting Word
// module.exports = Word;