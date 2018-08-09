let quizVars = {
    indexList: [], // [{ quiz_num, question_num }]
    randList: [],  // [integer]
    playingIndex: -1,
    isRandom: true,
    lastPlayingType: quizConstants.FORWARD,
    autoplayInterval: -1,
    autoplayNumSeconds: 5,
    autoplayRemainingTime: 0,
    isAutoplay: false
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
        img: "", // OPTIONAL
        subject: "", // OPTIONAL
        ref: "", // OPTIONAL
        pA: [] // OPTIONAL
    }
}

const selectAPA = (num, val) => {
    playingQuestion.question.pA[num].isSelected = val;
}

const popup4quiz = () => {
    let result = "";
    if (playingQuestion.deweyCode != undefined && playingQuestion.deweyCode > -1)
        result = "DEWEY: " + playingQuestion.deweyCode + " - " + playingQuestion.deweyName;

    if (playingQuestion.comment != undefined && playingQuestion.comment.length > 0)
        result += "\n\nCOMMENT: " + playingQuestion.comment;

    if (playingQuestion.ref != undefined && playingQuestion.ref.length > 0)
        result += "\n\nREFERENCE(S): " + playingQuestion.ref;

    return result;
}

const showQuestionNP_Ans = () => {
    let display = "";
    let quizTitle = "";
    $("#propAnsDiv").html("");

    let t = popup4quiz();
    //>>>>>>>>>>>> Quiz's infos >>>>>>>>>>>>
    if (t.length > 0)
        quizTitle = playingQuestion.quizTitle + "<font color='red'><sup title='" + t + "'>(*)</sup></font>";
    else quizTitle = playingQuestion.quizTitle;

    // Quiz's References
    if (playingQuestion.ref != undefined && playingQuestion.ref.length > 0)
        quizTitle += "<br/>[" + playingQuestion.ref + "]";

    $("#titleDiv").html("<div class='title'>" + quizTitle + "</div>");
    //<<<<<<<<<<<<<<< Quiz's Infos <<<<<<<<<<<<<<<

    //>>>>>>>>>>>> A Question's infos >>>>>>>>>>>>
    if (playingQuestion.question.subject != undefined && playingQuestion.question.subject.length)
        display = "<p align='center'><font size='+3'>" + playingQuestion.question.subject + "</font></p>";
    if (playingQuestion.question.txt != undefined && playingQuestion.question.txt.length) {
        display += "<div class='question'>" + playingQuestion.question.txt + "</div>";
    }
    if (playingQuestion.question.img != undefined && playingQuestion.question.img.length)
        display += "<p align='center'><img src='" + playingQuestion.question.img + "' border='1'/></p>";

    // Question's references
    if (playingQuestion.question.ref != undefined && playingQuestion.question.ref.length)
        display += "<div class='quizRef'><b><u>Refs:</u></b><div style='width:100%; background-color:#bcbdbe; padding: 10px'>" + playingQuestion.question.ref + "</div></div>";

    if (playingQuestion.question.pA != undefined && playingQuestion.question.pA.length)
        $("#questionDiv").html("<br/>" + display + "<hr style='width:99%'/>");
    else $("#questionDiv").html("<br/>" + display);
    //<<<<<<<<<<<<<<< A Question's Infos <<<<<<<<<<<<<<<

    if (playingQuestion.question.pA != undefined && playingQuestion.question.pA.length > 0) {
        display = "<table style='width:100%'>"
        for (let i = 0; i < playingQuestion.question.pA.length; i++) {
            // a proposed answer with/without image
            let pa = "";
            if (pALength() == 1)
                pa = "<div id='pa" + i + "' class='propAns' hidden='hidden'></div>";
            else {
                if (playingQuestion.question.pA[i].txt != undefined && playingQuestion.question.pA[i].txt.length)
                    pa = "<div id='pa" + i + "'>" + playingQuestion.question.pA[i].txt + "</div>";
                if (playingQuestion.question.pA[i].img != undefined && playingQuestion.question.pA[i].img.length)
                    pa += "<p align='center'><img src='" + playingQuestion.question.pA[i].img + "' border='1' /></p>";
            }
            if (playingQuestion.question.pA != undefined && playingQuestion.question.pA.length > 1)
                display += "<tr><td style='padding: 5px; vertical-align:top'><input type='checkbox' id='myCB" + i +
                    "' onclick=selectPA_num(myCB" + i + ") value=" + i +
                    "></td><td id='tdPATxt " + i + "' class='propAns'>" + pa + "</td><tr>";
            else if (pALength() == 1)
                display += "<tr><td id='tdPATxt" + i + "' colspan='2' hidden='hidden'>" + pa + "</td><tr>";
        }
        display += "</table>"
        if (pALength() > 1)
            $("#propAnsDiv").html("<br/><div class='question'><b><u>Proposed Answer(s):</u></b> " +
                "<span id='autoplayRemainingTime'></span></div>" +
                display);
        else
            $("#propAnsDiv").html("<br/>" + display);
    }
    else // If we don't have proposed answer for this question, we need to clear the previous ones
        $("#propAnsDiv").html();
}

const showCheckedAnswer = () => {
    if (playingQuestion.question.pA != undefined) {
        for (let i = 0; i < playingQuestion.question.pA.length; i++) {
            const ans = playingQuestion.question.pA[i];
            if (playingQuestion.question.pA.length > 1) {
                $("#myCB" + i).prop("disabled", true);
                if (ans.isGood) {
                    if (ans.txt != undefined)
                        $("#pa" + i).html("<font color='green'><b>" + ans.txt + "</b></font>");
                    else $("#pa" + i).html("<font color='green'><b>[Good Answer]</b></font>");
                }
                else {
                    if (ans.txt != undefined) {
                        if (ans.isSelected)
                            $("#pa" + i).html("<font color='red'><b><del>" + ans.txt + "</del></b></font>");
                        else
                            $("#pa" + i).html(ans.txt);
                    }
                    else {
                        if (ans.isSelected)
                            $("#pa" + i).html("[<font color='red'><b><del>Wrong Answer</del></b></font>]");
                        else
                            $("#pa" + i).html("");
                    }
                }
            }
            else {
                $("#pa" + i).show();
                $("#tdPATxt" + i).show();
                if (playingQuestion.question.pA[0].img != undefined && playingQuestion.question.pA[0].img.length > 0) {
                    if (ans.txt == undefined)
                        $("#pa" + i).html("<p align='center'><img src='" +
                            playingQuestion.question.pA[0].img + "' border='1' /></p>");
                    else
                        $("#pa" + i).html(ans.txt + "<p align='center'><img src='" +
                            playingQuestion.question.pA[0].img + "' border='1' /></p>");
                }
                else {
                    if (ans.txt != undefined)
                        $("#pa" + i).html(ans.txt);
                    else $("#pa" + i).html("");
                }
            }
        }
    }
}

const initAutoplayDelay = (num_seconds) => {
    if (pALength() <= 1) $("#btn_replay").prop("disabled", true);
    quizVars.autoplayNumSeconds = num_seconds;
    quizVars.autoplayRemainingTime = num_seconds;
}

const pALength = () => {
    if (playingQuestion.question.pA != undefined)
        return playingQuestion.question.pA.length;
    else return 0;
}

const setAutoplayTime = (num_seconds) => {
    quizVars.autoplayNumSeconds = num_seconds;
    quizVars.autoplayRemainingTime = num_seconds;
    clearInterval(quizVars.autoplayInterval);
    if (pALength() > 1) $("#autoplayRemainingTime").html("(" + num_seconds + "s remaining)");
    quizVars.autoplayInterval = setInterval(() => {
        quizVars.autoplayRemainingTime--;
        if (quizVars.autoplayRemainingTime == 0) {
            if (pALength() > 1)
                $("#autoplayRemainingTime").html("");
            quizVars.autoplayRemainingTime = quizVars.autoplayNumSeconds;
            if (playingQuestion.question.pA == undefined) {
                playingQuestion.isAnswersChecked == true
                setNewQuestion(quizConstants.FORWARD);
            }
            play(quizVars.lastPlayingType);
        }
        if (pALength() > 1) $("#autoplayRemainingTime").html("(" + quizVars.autoplayRemainingTime + "s remaining)");
    }, 1000)
}

// Handler for a button: On/Off action...
const autoplay = () => {
    quizVars.isAutoplay = !quizVars.isAutoplay;
    $("#autoplayRemainingTime").show();
    if (quizVars.isAutoplay) {
        $("#autoplaySeconds").show();
        if (pALength() > 1) $("#autoplayRemainingTime").show();
    }
    else {
        $("#autoplaySeconds").hide();
        if (pALength() > 1) $("#autoplayRemainingTime").hide();
    }
    if (quizVars.autoplayInterval > 0) {
        clearInterval(quizVars.autoplayInterval);
        quizVars.autoplayInterval = -1;
        $("#btn_backward").prop("disabled", false);
        if (pALength() <= 1) $("#btn_replay").prop("disabled", true);
        else $("#btn_replay").prop("disabled", false);
        $("#btn_forward").prop("disabled", false);
    }
    else {
        $("#btn_backward").prop("disabled", true);
        $("#btn_replay").prop("disabled", true);
        $("#btn_forward").prop("disabled", true);
        if (pALength()) $("#autoplayRemainingTime").html("(" + quizVars.autoplayNumSeconds + "s remaining)");
        quizVars.autoplayInterval = setInterval(() => {
            quizVars.autoplayRemainingTime--;
            if (quizVars.autoplayRemainingTime == 0) {
                if (pALength() > 1)
                    $("#autoplayRemainingTime").html("");
                quizVars.autoplayRemainingTime = quizVars.autoplayNumSeconds;
                if (playingQuestion.question.pA == undefined) {
                    playingQuestion.isAnswersChecked == true
                    setNewQuestion(quizConstants.FORWARD);
                }
                play(quizVars.lastPlayingType);
            }
            if (pALength() > 1) $("#autoplayRemainingTime").html("(" + quizVars.autoplayRemainingTime + "s remaining)");
        }, 1000)
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
    quizVars.lastPlayingType = type;
    if (!quizVars.indexList.length)
        setIndexList();

    // to be sure that we have at least a question to play...
    if (quizVars.indexList.length > 0) {
        if (type == quizConstants.FORWARD) {
            if (playingQuestion.isAnswersChecked) {
                setNewQuestion(quizConstants.FORWARD);
                showQuestionNP_Ans();
            }
            else {
                playingQuestion.isAnswersChecked = true;
                showCheckedAnswer()
            }
        }
        else if (type == quizConstants.BACKWARD) {
            setNewQuestion(quizConstants.BACKWARD);
            showQuestionNP_Ans();
        }
        else { // Replay
            if (playingQuestion.isAnswersChecked) {
                resetPlayingQuestion();
                showQuestionNP_Ans();
            }
            else {
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
    playingQuestion.question.pA = mixPA(playingQuestion.question.pA);
}

const setNewQuestion = (direction) => {
    if (direction == quizConstants.BACKWARD) {
        // we re-mix the list of question again
        if (quizVars.playingIndex == 0)
            quizVars.randList = getRandListWithSize(quizVars.indexList.length);
        quizVars.playingIndex = ((quizVars.playingIndex - 1) + quizVars.randList.length) % quizVars.randList.length
    }
    else if (direction == quizConstants.FORWARD) {
        // we re-mix the list of question again
        if (quizVars.playingIndex == (quizVars.randList.length - 1))
            quizVars.randList = getRandListWithSize(quizVars.indexList.length);
        quizVars.playingIndex = ((quizVars.playingIndex + 1) % quizVars.randList.length)
    }
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
    if (ques.p_ans != undefined)
        playingQuestion.isAnswersChecked = ques.p_ans.length > 0 ? false : true;
    else playingQuestion.isAnswersChecked = false
    let pa_tempo = [];

    if (ques.p_ans != undefined) {
        if (ques.p_ans.length == 0)
            pa_tempo = [];
        else if (ques.p_ans.length == 1)
            pa_tempo.push(ques.p_ans[0]);
        else pa_tempo = mixPA(ques.p_ans);
    }

    playingQuestion.question = {
        txt: ques.txt,
        img: ques.img,
        subject: ques.subject,
        ref: ques.ref,
        pA: pa_tempo
    };
    if (quizVars.autoplayInterval < 1) {
        if (ques.p_ans != undefined && ques.p_ans.length == 0) // no proposed answers --> No REPLAY
            $("#btn_replay").prop("disabled", true);
        else
            $("#btn_replay").prop("disabled", false);
    }
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