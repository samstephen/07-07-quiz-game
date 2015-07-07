##Here's How It Works:

* Your user loads the page in question.
* The user is presented (using either console.log() or alert() with a multiple choice question
* The user is prompted (using prompt()) for an answer
* Upon answer, the user sees an alert() or console.log() telling them whether they answered correctly or incorrectly. Then they see the next question (in a new alert() or console.log()), and steps 2-4 repeat until there are no more questions.
* Once the user has answered all questions, they see an alert() telling them how many they answered correctly (out of however many questions there were), and something that looks like a percentage. E.g. You answered 7 of 10 questions correctly, good for 70.0%

###Here are the Rules:
* Questions should be multiple choice. You'll have the stem (question), 4 answer choices, and only one of those answers should be correct. Every question should follow this format.
* Each question should be represented as a Javascript object. Thus, the collection of questions will be an array of those objects.
* Go ahead and hard-code the questions. There's no database backing behind this (yet).
* Don't worry about storing the user's answers or scores anywhere permanent -- once they move on to the next question, their previous answers should no longer matter, and once they either finish the game or refresh the page, their scores should no longer be relevant.
* Don't worry about putting any content on the page -- we'll worry about DOM manipulation later this week.
* Your program should start with at least 3-4 questions, but should be able to easily handle as many questions as you want.

###Rules for Collaboration:
* One repository per pair. One person owns it and the other is a collaborator.
* Switch whose GitHub account you're using every 22 minutes. Set a timer! This is important. (The easiest way to switch whose GitHub account you're using is to switch computers entirely.)
* Finish one feature before starting on the next. Do only one thing at a time!
* Be nice. Collaboration is hard sometimes.