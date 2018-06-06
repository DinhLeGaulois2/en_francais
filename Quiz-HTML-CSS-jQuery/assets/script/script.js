let quizVars = {
    indexList: [], // [{ quiz_num, question_num }]
    randList: [],  // [integer]
    playingIndex: -1,
    isRandom: true,
};

let playingQuestion = {
    quizTitle: "",
    deweyCode: -1,
    deweyName: "",
    comment: "",
    ref: "",
    isAnswersChecked: true, // to start new question...
    question: {
        txt: "",
        img: "",
        subject: "",
        ref: "",
        pA: [] // mixed up with "isSelected" added
    }
}

const selectAPA = (num, val) => {
    playingQuestion.question.pA[num].isSelected = val;
}

const showQuestionNP_Ans = () => {
    let display = "";
    $("#titleDiv").html("<div class='title'><font ='cyan'>" + playingQuestion.quizTitle + "</font></div>");
    if (playingQuestion.question.txt.length) display = "<div class='question'><b><u>Question:</u></b> " + playingQuestion.question.txt + "</div>";
    if (playingQuestion.question.img.length) display += "<p align='center'><img src='" + playingQuestion.question.img + " border='1'/></p>";
    $("#questionDiv").html("<br/>" + display + "<hr/>");
    if (playingQuestion.question.pA.length > 0) {
        display = "<table>"
        for (let i = 0; i < playingQuestion.question.pA.length; i++) {
            // a proposed answer with/without image
            let pa = "<span id='pa" + i + "'>" + playingQuestion.question.pA[i].txt + "</span>";
            if(playingQuestion.question.pA[i].img.length)
                pa += "<p align='center'><img src='" + playingQuestion.question.pA[i].img + "' border='1' /></p>";

            display += "<tr><td style='padding: 5px; vertical-align:top'><input type='checkbox' id='myCB" + i + 
                "' onclick=selectPA_num(myCB" + i + ") value=" + i + 
                "></td><td class='propAns'>" + pa + "</td><tr>";
        }
        display += "</table>"
        $("#propAnsDiv").html("<span class='question'><b><u>Proposed Answer(s):</u></b></span><br/><br/>" + display);
    }
}

const showCheckedAnswer = () => {
    for (let i = 0; i < playingQuestion.question.pA.length; i++) {
        const ans = playingQuestion.question.pA[i];
        if (ans.isGood)
            $("#pa" + i).html("<font color='#00ff33'><b>" + ans.txt + "</b></font>");
        else {
            if (ans.isSelected)
                $("#pa" + i).html("<font color='red'><b><del>" + ans.txt + "</del></b></font>");
            else
                $("#pa" + i).html(ans.txt);
        }
    }
}

/* 
    -------------------------------------------------------------------------
            NOW         |                   NEXT STEP
    -------------------------------------------------------------------------
        (button) -->    |     BACKWARD      |    REPLAY     |    FORWARD    
    -------------------------------------------------------------------------
    Question (no PA)    | Previous Question |      N/A      | Next Question 
    -------------------------------------------------------------------------
    Question & PA       | Previous Question |  [No Change]  | Check Answers 
    -------------------------------------------------------------------------
    Answers             | Previous Question | Question (PA) | Next Question 
    -------------------------------------------------------------------------
*/
const play = (type) => {
    if (!quizVars.indexList.length)
        setIndexList();

    // to be sure that we have at least a question to play...
    if (quizVars.indexList.length > 0) {
        if (type == quizConstants.FORWARD) {
            if(playingQuestion.isAnswersChecked){
                setNewQuestion(quizConstants.FORWARD);
                showQuestionNP_Ans();
            }
            else{
                playingQuestion.isAnswersChecked = true;
                showCheckedAnswer()
            }
        }
        else if (type == quizConstants.BACKWARD) {
            setNewQuestion(quizConstants.BACKWARD);
            showQuestionNP_Ans();
        }
        else { // Replay
            if(playingQuestion.isAnswersChecked){
                resetPlayingQuestion();
                showQuestionNP_Ans();
            }
            else{
                playingQuestion.isAnswersChecked = true;
                showCheckedAnswer()
            }
        }
    }
}

const resetPlayingQuestion = () => {
    playingQuestion.isAnswersChecked = false;
    let listPA = playingQuestion.question.pA;
    for (let i = 0; i < listPA.length; i++) {
        listPA[i].isSelected = false;
    }
}

const setNewQuestion = (direction) => {
    if (direction == quizConstants.BACKWARD)
        quizVars.playingIndex = (quizVars.playingIndex - 1) % quizVars.indexList.length
    else if (direction == quizConstants.FORWARD)
        quizVars.playingIndex = (quizVars.playingIndex + 1) % quizVars.indexList.length
    let o = quizVars.indexList[quizVars.randList[quizVars.playingIndex]];
    const quizIndex = o.quiz_num;
    const questionNumber = o.question_num;

    let quiz = playingQuizzes[quizIndex]
    let ques = quiz.questions[questionNumber];
    playingQuestion.quizTitle = quiz.title;
    playingQuestion.deweyCode = quiz.deweyCode;
    playingQuestion.deweyName = quiz.deweyName;
    playingQuestion.comment = quiz.comment;
    playingQuestion.ref = quiz.ref;
    playingQuestion.isAnswersChecked = ques.p_ans.length > 0 ? false : true;
    playingQuestion.question = {
        txt: ques.txt,
        img: ques.img,
        subject: ques.subject,
        ref: ques.ref,
        pA: ques.p_ans.length > 0 ? mixPA(ques.p_ans) : []
    };
    if (ques.p_ans.length == 0) // no proposed answers --> No REPLAY
        $("#btn_replay").prop("disabled", true);
    else
        $("#btn_replay").prop("disabled", false);
}

const mixPA = (pa) => {
    let result = [];
    let ind = getRandListWithSize(pa.length);
    for (let i = 0; i < ind.length; i++) {
        let o = Object.assign({}, pa[ind[i]])
        // add new field "isSelected"
        o.isSelected = false;
        result.push(o);
        o = {};
    }
    return result;
}

const getRandListWithSize = (size) => {
    let isTaken = [], result = [];
    for (let i = 0; i < size; i++)
        isTaken.push(false);
    for (let i = 0; i < size; i++) {
        let num = Math.floor(Math.random() * size);
        for (let j = 0; j < size; j++) {
            if (!isTaken[num]) {
                result.push(num);
                isTaken[num] = true;
                break;
            }
            else num = (num + 1) % size;
        }
    }
    return result;
}

const setIndexList = () => {
    for (let i = 0; i < playingQuizzes.length; i++) {
        let aQuiz = playingQuizzes[i];
        for (let j = 0; j < aQuiz.questions.length; j++) {
            let obj = {
                quiz_num: i,
                question_num: j
            }
            quizVars.indexList.push(obj)
        }
    }
    quizVars.randList = getRandListWithSize(quizVars.indexList.length);
}