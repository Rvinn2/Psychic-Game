

var letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",'p',"q","r","s","t","u","v","w","x","y","z"]

var wins = 0;

var losses = 0;

var guesses = 9;

// // Generate random letter.
// Math.floor(Math.random()* letter.length);

var computerChoice = letter[ Math.floor(Math.random() * letter.length)
];
console.log(computerChoice)
