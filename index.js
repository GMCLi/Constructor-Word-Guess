var Word = require("./Word.js");
var inquirer = require("inquirer");

//words array to pick word
var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Republic of the Congo", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
//number of guesses
var guesses;
//Array of countries that have been played
var wordarray;
//Staged country
var pickedword;

var words;
console.log(Word.Word.Updating);

//function CONFIRMED OPERATIONAL
//opening title that initializes the game
function title() {
    wordarray = [];
    console.log("Word Guess Game!")
    console.log("..............................................")
    initialize();
}

//function CONFIRMED OPERATIONAL
//initialize the game, grab word from Choose function 
function initialize() {//
    console.log("game initialized");//CONFIRMED OPERATIONAL
    guesses = 10;//SET GUESSES TO 10 CONFIRMED OPERATIONAL
    //if the wordarray is less the the full number of countries, choose one
    if (wordarray.length < countries.length) {
        pickedword = Choose();//CONFIRMED OPERATIONAL
        // console.log("pickedword: " + pickedword);//TESTING
    }
    //otherwise the player wins
    else {
        console.log("You Win!!!")
        promptcontinued();
    }
    //if the word is guessed, get a new one
    if (pickedword) {
        words = new Word.Word(pickedword);//issue
        words.Createword();//issue
        makeguess();
    }
}

//function CONFIRMED OPERATIONAL
//choosing the word from countries at random and pushing it to pickedword
function Choose() {
    var random = Math.floor(Math.random() * countries.length);
    var randomchoose = countries[random].toLowerCase();
    if (wordarray.indexOf(randomchoose) === -1) {
        wordarray.push(randomchoose);
        return randomchoose;

    }
    else {
        return Choose();
    }
}

//function
//show progress, ask user for next letter, show guesses left 
function makeguess() {
    var check = [];
    inquirer.prompt([
        {
            name: "guessedletter",
            message: words.Updating() + "\nGuess a letter!" + "\nGuesses Left: " + guesses
        }
    ])
        .then(data => {
            !words.stagedword.includes(data.guessedletter.toLowerCase()) && guesses--;
            
            words.letters.forEach(letter => {//for each letter pressed
            //     var temp = letter.guesscheck(data.guessedletter.toLowerCase());
            //     console.log(temp);
            letter.guesscheck(data.guessedletter.toLowerCase());
                check.push(letter.Character());
            //         if (pickedword.split("").includes(temp)) {
            //             console.log(temp);//does not come up
            //         }
            });
            // var torf = words.Guessing();
            //if guesses are more than zero, make a guess
            if (guesses > 0 && check.indexOf("_") !== -1) {
                
                makeguess();
            }

            //win or lose game over comes up
            else {
                console.log("Game Over!!!");
                promptcontinued();
                // console.log("You guessed right!");
                // console.log(words.Updating());
                // initialize();
            }
            
        });
}

//function
//play again or quit
function promptcontinued() {
    inquirer.prompt([
        {
            name: "playagain",
            type: "list",
            message: "Do you want to play again?",
            choices: ["Yes", "No"]
        }
    ])
        .then(data => {
            if (data.playagain === "Yes") {
                title();
            }
            else {
                console.log("Hope you enjoyed it!");
            }
        })
}




title();