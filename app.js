const quizForm = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')

const correctAnswers = ['A', 'B', 'B', 'C']

let score = 0

const getUserAnswers = () => {
  const userAnswers = correctAnswers.map((_, index) => 
    quizForm[`inputQuestion${index + 1}`].value)

  return userAnswers
}

const calculateFinalUserScore = userAnswers => {
  score = userAnswers.reduce((currentScore, userAnswer, index) => {
    const isUserAnswerCorrect = userAnswer === correctAnswers[index]

    if (isUserAnswerCorrect) {
      currentScore += 100 / correctAnswers.length
    }

    return currentScore
  }, 0)
}

const showFinalScore = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })

  finalScoreContainer.classList.remove('d-none')
}

const animateFinalScore = () => {
  let counter = 0

  const counterID = setInterval(() => {
    if (counter === score) {
      clearInterval(counterID)
    }

    finalScoreContainer.querySelector('span').textContent = `${counter++}%`
  }, 10)
}

const submitUserAnswers = event => {
  event.preventDefault()

  score = 0

  const userAnswers = getUserAnswers()

  calculateFinalUserScore(userAnswers)
  showFinalScore()
  animateFinalScore()
}

quizForm.addEventListener('submit', submitUserAnswers)