function log(data){
  console.log(data);
}
const chalk = require('chalk');
var read = require("readline-sync");
var userName = read.question("May I ask your name? ");
var welcome = console.log("Welcome to the game," + userName + "!");
score=0;
function play(question,answer){
  var userAnswer= read.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    log(chalk.green("You are right"));
    score++;
  }else{
    log(chalk.red("Sorry, you are wrong!"))
  }
  log("Your current score is: "+score);
  log("---------")
}
var questionnaire = [{
  question : "Where was I born? ",
  answer : "Jodhpur"
},
{
  question : "Where do I live? ",
  answer : "Sumerpur" 
},
{
  question : "What is my favourite food? ",
  answer : "Dal Bati"
},
{
  question : "Which college do I study in? ",
  answer : "BITS Pilani"
},
{
  question : "What is my mother's name? ",
  answer : "Shaili Mehta"
},
{
  question : "What is my father's name? ",
  answer : "Kailash Mehta"
},{
  question : "Last movie series I watched? ",
  answer : "Harry Potter"
},{
  question : "We recently got a car, which is it? ",
  answer : "Baleno"
}];
for(var i=0; i<questionnaire.length; i++){
  play(questionnaire[i].question,questionnaire[i].answer);
}
log("Your final score: "+score);
log("Check out the high scores!");
var highscores = [{
  who : "Naman",
  score : 8
},{
  who : "Shaili Mehta",
  score : 8
},{
  who : "Anu Sis",
  score : 8
},{
  who : "Rishit",
  score : 7
}]
for(i=0;i<highscores.length;i++){
  log(highscores[i].who);
  log(highscores[i].score);
  log("--------");
}
for(i=0;i<highscores.length;i++){
  if(highscores[i].score<score){
    log("you have beaten the high score of " + highscores[i].who);
    log("--------");
  }
}