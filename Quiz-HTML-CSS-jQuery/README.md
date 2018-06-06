# QUIZZES

## Construction My New Quiz
> 1. Copy the content of "**quiz_construction/model/myQuiz.js**"
> 2. Paste the copied content to the "**quiz_construction/playingQuizzes.js**"

## How to fill data
```javascript
const playingQuizzes = [
    { // start a quiz
        title: "",     // Mendatory
        deweyCode: -1, // Optional: if Any...
        deweyName: "", // Optional: if Any...
        comment: "",   // Optional: if Any...
        ref: "",       // Optional: if Any...
        questions: [
            { // start a question
                txt: "",     // Mendatory
                img: "",     // Optional: if Any...
                subject: "", // Optional: if Any...
                ref: "",     // Optional: if Any...
                p_ans: [
                    { // start prop-answer
                        txt: "",   // Mendatory
                        img: "",   // Optional: if Any...
                        isGood: false,
                    }, // end prop-answer
                ]
            }, // end a question
        ]
    }, // end a quiz
];
```