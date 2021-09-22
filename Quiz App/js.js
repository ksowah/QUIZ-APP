const quizData = [
    {
        question : "Which of the following is the correct syntax of including a user defined header files in C++?",
               a : "#include <userdefined.h>",
               b : "#include <userdefined>",
               c : "#include “userdefined”",
               d : "#include [userdefined]",
               correct : "c"   
    },
    {
        question : "Which of the following is a correct identifier in C++?",
               a : " 7var_name",
               b : "7VARNAME",
               c : "VAR_1234",
               d : "$var_name",
        correct  : "c"
    },
    {
        question : " Which of the following is called address operator?",
               a : " *",
               b : "&",
               c : "_",
               d : "%",
        correct  : "b"
    },
    {
        question : "Which of the following is used for comments in C++?",
               a : "// comment",
               b : "/* comment */",
               c : " both // comment or /* comment */",
               d : "// comment *",
        correct  : "c"
    },
    {
        question : "Which function is used to read a single character from the console in C++?",
               a : "cin.get(ch)",
               b : "getline(ch)",
               c : "read(ch)",
               d : "$scanf(ch)",
        correct  : "a"
    },
    // new set
    {
        question : " Which of the following is not a fundamental type, is not present in C but present in C++?",
               a : "int",
               b : " float",
               c : "bool",
               d : "void",
        correct  : "c"
    },
    {
        question : "What is the size of a boolean variable in C++?",
               a : "1 bit",
               b : "1 byte",
               c : "4 bytes",
               d : "2 bytes",
        correct  : "a"
    },
    {
        question : "Which of the following is C++ equivalent for scanf()?",
               a : "cin",
               b : "cout",
               c : "print",
               d : "input",
        correct  : "a"
    },
    {
        question : "Which of the following is C++ equivalent for printf()?",
               a : "cin",
               b : "cout",
               c : "print",
               d : " input",
        correct  : "b"
    },
    {
        question : "Which of the following is an entry-controlled loop?",
               a : "for",
               b : "while",
               c : "do-while",
               d : " both while and for",
        correct  : "d"
    },
    // new set
    {
        question : "What is the range of short data type in Java?",
               a : "-128 to 127",
               b : "-32768 to 32767",
               c : "-2147483648 to 2147483647",
               d : "None of the mentioned",
        correct  : "b"
    },
    {
        question : " What is the range of byte data type in Java?",
                a : "-128 to 127",
                b : "-32768 to 32767",
                c : "-2147483648 to 2147483647",
                d : "None of the mentioned",
        correct  : "a"
    },
    {
        question : "An expression involving byte, int, and literal numbers is promoted to which of these?",
               a : "int",
               b : "long",
               c : "byte",
               d : " float",
        correct  : "a"
    },
    {
        question : "Which of these literals can be contained in float data type variable?",
               a : "-1.7e+308",
               b : "-3.4e+038",
               c : "+1.7e+308",
               d : "-3.4e+050",
        correct  : "b"
    },
    {
        question : "Which data type value is returned by all transcendental math functions?",
               a : "int",
               b : "float",
               c : "double",
               d : "long",
        correct  : "c"
    },
    // new set
    {
        question : "What is the numerical range of a char data type in Java?",
               a : "-128 to 127",
               b : "0 to 256",
               c : " 0 to 32767",
               d : "0 to 65535",
        correct  : "d"
    },
    {
        question : "Which of these coding types is used for data type characters in Java?",
               a : "ASCII",
               b : "ISO-LATIN-1",
               c : "UNICODE",
               d : "None of the mentioned",
        correct  : "c"
    },
    {
        question : "Which of these values can a boolean variable contain?",
               a : "True & False",
               b : "0 & 1",
               c : "Any integer value",
               d : "true",
        correct  : "a"
    },
    {
        question : "Which one is a valid declaration of a boolean?",
               a : "boolean b1 = 1;",
               b : "boolean b2 = ‘false’;",
               c : "boolean b3 = false;",
               d : "boolean b4 = ‘true’",
        correct  : "c"
    },
    {
        question : "What is the order of variables in Enum?",
               a : "Ascending order",
               b : "Descending order",
               c : "Random order",
               d : "Depends on the order() method",
        correct  : "a"
    },

]
let score = 0
let currentQuestion = 0

let questionEl = document.getElementById("question")
const quiz = document.getElementById("quiz")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")
let answerEls = document.querySelectorAll(".answer")

loadQuiz()
//this function loads the quiz data or questions
function loadQuiz(){
    unselect()
    const currentQuizData = quizData[currentQuestion]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a 
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c 
    d_text.innerText = currentQuizData.d 

}

// This function points to the selected option
function getSelected(){
    let answer = undefined

    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer
}

/*prevents the occurance of radio input bein acive on a new slide unless user selects*/
function unselect(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false
        })
}

// button to submit answer and move to next question
submitBtn.addEventListener("click", ()=>{
    const answer = getSelected()

    if(answer === quizData[currentQuestion].correct){
        score++
    }

    if(answer){
        currentQuestion++
        if(currentQuestion < quizData.length){
            loadQuiz()
        }else{
           quiz.innerHTML = `<h2>
                                Quiz complete! You answered correctly, ${score}/${quizData.length} questions
                            </h2>
                            <span>
                            <button onclick = "location.reload()">Restart</button>
                            </span>
                            `
        }
    }

   
})
