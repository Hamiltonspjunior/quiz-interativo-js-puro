const quizForm = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const correctAnswers = ['A', 'B', 'B', 'C']

let score = 0

const checkUserAnswers = (userAnswer, index) => {
  const isCorrectAnswer = userAnswer.value === correctAnswers[index]
  const scoreIncrement = 100 / correctAnswers.length
  
  if (isCorrectAnswer) {
    score += scoreIncrement
  }
}

const showResult = () => {
  finalResult.classList.remove('d-none')
  finalResult.querySelector('span').textContent = `${score}%`

  scrollTo(0, 0)

  animateScore()
}

const animateScore = () => {
  let counter = 0

  const counterID = setInterval(() => {
    if (counter === score) {
      clearInterval(counterID)
    }

    finalResult.querySelector('span').textContent = `${counter++}%`
  }, 10)
}

const submitUserAnswers = event => {
  event.preventDefault()

  score = 0

  const userAnswers = quizForm.querySelectorAll('input[type="radio"]:checked')

  userAnswers.forEach(checkUserAnswers)

  showResult()
}

quizForm.addEventListener('submit', submitUserAnswers)