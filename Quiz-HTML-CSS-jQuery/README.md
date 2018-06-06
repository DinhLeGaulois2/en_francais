# QUIZ Using HTML, CSS and jQuery

## Aim
> To create a **Quiz** quickly without using any database (for a lesson, a chapter, a book, a document, etc.) which could work any where without any installation nor compilation.
>
> Advantages:
>    * Work on any device (computer, smartphone);
>    * Work with any Operating System (Windows, Linux, etc.);
>    * No need any installation;
>    * No need any compilation;
>    * We could combine as much **quizzes** (to form a giant one) by **copy/paste**;
>    * etc.
>
> Disadvantes:
>    * Create **Quiz** manually (but we could easily replace it with data from a database);
>    * To update code (logical), we need to replace for each existing **Quizzes**;

## Construction My New Quiz
> 1. Copy the content of "**quiz_construction/model/myQuiz.js**"
> 2. Paste the copied content to the "**quiz_construction/playingQuizzes.js**"

## How to fill data
```javascript
const playingQuizzes = [
    { // start a quiz
        title: "",     // Mandatory
        deweyCode: -1, // Optional: if Any...
        deweyName: "", // Optional: if Any...
        comment: "",   // Optional: if Any...
        ref: "",       // Optional: if Any...
        questions: [ // All questions (with its proposed answers) of a quiz
            { // start a question
                txt: "",     // Mandatory
                img: "",     // Optional: if Any...
                subject: "", // Optional: if Any...
                ref: "",     // Optional: if Any...
                p_ans: [  // --> proposed answers
                    { // start prop-answer
                        txt: "",   // Mandatory
                        img: "",   // Optional: if Any...
                        isGood: false,
                    }, // end prop-answer
                ]
            }, // end a question
        ]
    }, // end a quiz
];
```