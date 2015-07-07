/**
 * Created by Samuel Stephen & Patrick Carlton on 7/7/15.
 */


// The user is presented an alert() with a multiple choice question

var count = 0;
var score = 0;
var answer;




var question1 = {   question: "What are you?",
                    possibleAnswers: "(a) human, (b) robot, (c) unicorn, (d) chicken",
                    rightAnswer: "a"};
var question2 = {   question: "Where is OCS?",
                    possibleAnswers: "(a) Omaha, (b) Elmwood, (c) Nehawka, (d) Lincoln",
                    rightAnswer: "a"};
var question3 = {   question: "What's the right answer?",
                    possibleAnswers: "(a) this one, (b) not this one, (c) not this one, (d) not this one",
                    rightAnswer: "a"};
var question4 = {   question: "Pick something.",
                    possibleAnswers: "(a) Stop picking a, (b) I'm bored, (c) yup, (d) Chicken-Wang",
                    rightAnswer: "a"};


var questionsArray = [question1,question2,question3,question4];

for (score,count; questionsArray[count]; count++) {
    alert(questionsArray[count].question);
    answer = prompt(questionsArray[count].possibleAnswers);
    if (answer == questionsArray[count].rightAnswer) {
        score++;
    }
}
alert("You got a " + (score/9*100) + "%");



// answer alerts
//document.write("Of course you are a human. DUH!");
//document.write("Omaha - tagline goes here.");
//document.write("You're a modern, Sherlock!");
//document.write("Good choice!");

