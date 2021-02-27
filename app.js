const form = document.querySelector('.quiz-form')
const button = document.querySelector('.btn')
const correctAnswers = ['A', 'B', 'B', 'A']
const totalQuestions = correctAnswers.length
const scoreMessageEl = document.createElement('p')

let score = 0

const checkUserAnswers = (userAnswer, index) => {
  const isCorrectAnswer = userAnswer === correctAnswers[index]

  if (isCorrectAnswer) {
    score += 100 / totalQuestions
  }
}

const insertScoreIntoScreen = () => {
  scoreMessageEl.setAttribute('class', 'my-3 text-dark text-left lead font-weight-bold')
  scoreMessageEl.textContent = `Você acertou ${score}% das questões`

  button.insertAdjacentElement('beforebegin', scoreMessageEl)
}

const submitUserAnswers = event => {
  event.preventDefault()

  score = 0

  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
  ]

  userAnswers.forEach(checkUserAnswers)
  
  insertScoreIntoScreen()
}

form.addEventListener('submit', submitUserAnswers)