const form = document.querySelector('.quiz-form')
const correctAnswers = ['A', 'B', 'B', 'A']
let score = 0

const scoreMessage = document.createElement('p')

scoreMessage.setAttribute('class', 'my-3 text-dark')

const checkUserAnswer = (userAnswer, index) => {
  const isCorrectAnswer = userAnswer === correctAnswers[index]

  if (isCorrectAnswer) {
    score += 25 / userAnswer.length
  }
}

const insertScoreIntoScreen = () => {
  scoreMessage.textContent = `Você acertou ${score}% das questões`

  form.insertAdjacentElement('afterend', scoreMessage)
}

const getQuizResult = event => {
  event.preventDefault()

  score = 0

  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
  ]

  userAnswers.forEach(checkUserAnswer)
  
  insertScoreIntoScreen()
}

form.addEventListener('submit', getQuizResult)