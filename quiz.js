const questions = [
    {
        question: "What year did Arsene Wenger become the manager of Arsenal?",
        answers: [
            { text: "1990", correct: false},
            { text: "2000", correct: false},
            { text: "1999", correct: false},
            { text: "1996", correct: true},
        ]
    },
    {
        question: "Which of these Arsenal players has a G/A against every EPL teams they've faced?",
        answers: [
            { text: "Robert Pires", correct: false},
            { text: "Theo Walcott", correct: false},
            { text: "Bukayo Saka", correct: true},
            { text: "Eduardo Da Silva", correct: false},
        ]
    },
    {
        question: "Which of these players have won the Arsenal player of the year more than once?",
        answers: [
            { text: "Robin Van Persie", correct: false},
            { text: "Aaron Ramsey", correct: true},
            { text: "Emmanuel Adebayor", correct: false},
            { text: "Theo Walcott", correct: false},
        ]
    },
    {
        question: "What was the first match to be played at Emirates stadium and what team was it against?",
        answers: [
            { text: "June 19, 2005, against Man U", correct: false},
            { text: "July 22, 2006, against Ajax", correct: true},
            { text: "May 10, 2007, against Liverpool", correct: false},
            { text: "April 17, 2006, against Chelsea", correct: false},
        ]
    },
    {
        question: "What year did Arteta become the head coach at Arsenal?",
        answers: [
            { text: "December 20, 2019", correct: true},
            { text: "December 21, 2019", correct: false},
            { text: "December 21, 2020", correct: false},
            { text: "December 26, 2019", correct: false},
        ]
    },
    {
        question: "What season was the invincible season?",
        answers: [
            { text: "2002-2003", correct: false},
            { text: "2001-2002", correct: false},
            { text: "2004-2005", correct: false},
            { text: "2003-2004", correct: true},
        ]
    },
    {
        question: "What was the first stadium of Arsenal?",
        answers: [
            { text: "Mann's Field", correct: true},
            { text: "Hyde Road", correct: false},
            { text: "Highbury", correct: false},
            { text: "North Road", correct: false},
        ]
    },
    {
        question: "What was the invicible season games?",
        answers: [
            { text: "P38, 24W 14D 0L", correct: false},
            { text: "P38, 28W 10D 0L ", correct: false},
            { text: "P38, 26W 12D 0L", correct: true},
            { text: "P38, 25W 13D 0L", correct: false},
        ]
    },
    {
        question: "How many league titles has Arsenal won?",
        answers: [
            { text: "14", correct: false},
            { text: "13", correct: true},
            { text: "12", correct: false},
            { text: "11", correct: false},
        ]
    },
    {
        question: "What was Bukayo Saka's first starting match for Arsenal?",
        answers: [
            { text: "January 21 2020, 5-1 win vs Bolton, League Cup", correct: false},
            { text: "April 15 2018, 1-0 win vs Leicester City, Premier league", correct: false},
            { text: "January 1 2019, 3-0 win vs Blackpool, FA Cup", correct: true},
            { text: "November 26 2019, 2-1 win vs Frankfurt, Europa League", correct: false},
        ]
    },
    {
       question: "Which of these players was signed on deadline day?",
        answers: [
            { text: "Mikel Arteta, 2011", correct: true},
            { text: "Eduardo Da Silva, 2007", correct: false},
            { text: "Laurent Koscielny, 2010", correct: false},
            { text: "Alex Olade-Chamberlaine, 2011", correct: false},
        ]  
    },
    {
        question: "Who was Arsenal's highest goal scorer in EPL in 08-09 season?",
        answers: [
            { text: "Emmanuel Adebayor, 10 goals", correct: false},
            { text: "Eduardo Da Silva, 13 goals", correct: false},
            { text: "Theo Walcott, 12 goals", correct: false},
            { text: "Robin Van Persie, 11 goals", correct: true},
        ]
    },
    {
        question: "How many goals did Bukayo Saka score in EPL in the 23-24 season?",
        answers: [
            { text: "17", correct: false},
            { text: "16", correct: true},
            { text: "15", correct: false},
            { text: "14", correct: false},
        ]
    },
    {
        question: "Which of these players has scored Arsenal's first goal in a UCL season?",
        answers: [
            { text: "Alex Iwobi, 2016-2017", correct: true},
            { text: "Alex Oxlade-Chamberlain, 2013-2014", correct: false},
            { text: "Theo Walcott, 2010-2011", correct: false},
            { text: "Patrick Vieira, 2005-2006", correct: false},
        ]
    },
    {
       question: "Which of these players hasn't scored a hat-trick for arsenal?",
        answers: [
            { text: "Eddie Nketiah", correct: false},
            { text: "Oliver Giroud", correct: false},
            { text: "Jack Wilshere", correct: true},
            { text: "Andrey Arshavin", correct: false},
        ] 
    },
    {
        question: "How many goals did Kai Havertz score in EPL in the 23-24 season?",
        answers: [
            { text: "19", correct: false},
            { text: "14", correct: false},
            { text: "13", correct: true},
            { text: "17", correct: false},
        ]
    },
    {
        question: "Who scored Arsenal's first goal in the EPL season 03/04?",
        answers: [
            { text: "Thierry Henry", correct: true},
            { text: "Sylvian Wiltord", correct: false},
            { text: "Sol Campbell", correct: false},
            { text: "Patrick Vieria", correct: false},
        ]
    },
    {
        question: "Who scored Arsenal's first goal in the EPL season 96/97 and what match was it?",
        answers: [
            { text: "Sol Campbell, Everton vs Arsenal", correct: false},
            { text: "Sylvian Wiltord, Arsenal vs Bolton", correct: false},
            { text: "Ian Wright, Arsenal vs Sunderland", correct: true},
            { text: "Nwankwo Kanu, Sunderland vs Arsenal", correct: false},
        ]
    },
    {
        question: "Who was Arsenal's Top Scorer in the EPL season 12/13?",
        answers: [
            { text: "Thierry Henry, 15 goals", correct: false},
            { text: "Robin Van Persie, 17 goals", correct: false},
            { text: "Samir Nasri, 12 goals", correct: false},
            { text: "Theo Walcott, 14 goals", correct: true},
        ]
    },
    {
        question: "Who was Arsenal's Top Scorer in the EPL season 17/18?",
        answers: [
            { text: "Theo Walcott, 16 goals", correct: false},
            { text: "Alexandre Lacazette, 14 goals", correct: true},
            { text: "Granit Xhaka, 12 goals", correct: false},
            { text: "Pierre Emerick Aubameyang, 17 goals", correct: false},
        ]
    }
];

const questionEL = document.getElementById("question");
const answerBtns= document.getElementById("answer");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionEL.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while(answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerBtns.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextBtn.style.display = "block";
}

function showScore() {
    resetState();
    questionEL.innerHTML = 'You scored ' + score + " out of " + questions.length + ' !' ;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

function handlenextBtn() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }else {
        showScore();
    }
}

nextBtn.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length) {
        handlenextBtn();
    } else {
        startQuiz();
    }
})

startQuiz();