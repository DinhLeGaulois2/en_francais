# QUIZ Using HTML, CSS and jQuery
### [We have a quiz ready for test. Replace it with your own by following instructions below]

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
> Disadvantages:
>    * Create **Quiz** manually (but we could easily replace it with data from a database);
>    * To update code (logical), we need to replace for each existing **Quizzes**;

## Construction My New Quiz
> 1. Copy the content of "**quiz_construction/model/myQuiz.js**"
> 2. Paste the copied content to the "**quiz_construction/playingQuizzes.js**"

## How to fill data
```javascript
const playingQuizzes = [ // we could put several quizzes in this Array ...
    { // start a quiz
        title: "",     // It would be nice to have a title for this Quiz
        deweyCode: -1, // Optional: if Any...
        deweyName: "", // Optional: if Any...
        comment: "",   // Optional: if Any...
        ref: "",       // Optional: if Any...
        questions: [ // All questions (with its proposed answers) of a quiz
            { // start a question
                txt: "",     // question in "text"
                img: "",     // Optional: if Any... (an URL of an image for this question)
                subject: "", // Optional: if Any...
                ref: "",     // Optional: if Any...
                p_ans: [  // --> proposed answers
                    { // start prop-answer
                        txt: "",   // proposed answer in "text"
                        img: "",   // Optional: if Any...  (an URL of an image for this proposed answer)
                        isGood: false,
                    }, // end prop-answer
                ]
            }, // end a question
        ]
    }, // end a quiz
];
```

## Execution
> Click on **myQuiz.html** (you could rename it)

## Note
> * On "**Replay**" mode, the order of ***proposed answers*** is mixed very time to avoid our brain to memorize the order. The goal is to improve the learning process ;-)
>
> * We have "**autoplay**" as well.

---------------

## Author
* Dinh HUYNH - All Rights Reserved!
* dinh.hu19@yahoo.com