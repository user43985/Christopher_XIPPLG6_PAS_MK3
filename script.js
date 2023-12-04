const quizData = [
    {
        question: "Tag apa yang digunakan untuk membuat daftar terurut di HTML?",
        a: "<ul>",
        b: "<list>",
        c: "<li>",
        d: "<ol>",
        correct: "d",
    },
    {
        question: "Bagaimana cara menetapkan batas luar pada elemen CSS?",
        a: "margin",
        b: "padding",
        c: "border",
        d: "spacing",
        correct: "c",
    },
    {
        question: "Kepanjangan dari HTML adalah...",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Bagaimana cara mengaplikasikan CSS internal di HTML?",
        a: "Dengan tag <script>",
        b: "Dengan tag <link>",
        c: "Dengan tag <css>",
        d: "Dengan tag <style>",
        correct: "d",
    },
    {
        question: "Apa tag yang digunakan untuk membuat hyperlink di HTML?",
        a: "<link>",
        b: "<a>",
        c: "<href>",
        d: "<url>",
        correct: "a",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>hasil jawabanmu ${score}/${quizData.length} benar</h2>

           <button onclick="location.reload()">ULANGI</button>
           `
       }
    }
})