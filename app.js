const quizForm = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')

const correctAnswers = ['A', 'B', 'B', 'C']

let score = 0

const getUserAnswers = () => correctAnswers.map((_, index) => 
  quizForm[`inputQuestion${index + 1}`].value)

const calculateFinalUserScore = userAnswers => {
  userAnswers.forEach((userAnswer, index) => {
    const isUserAnswerCorrect = userAnswer === correctAnswers[index]

    if (isUserAnswerCorrect) {
      score += 100 / correctAnswers.length
    }
  })
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

const resetUserScore = () => {
  score = 0
}

const submitUserAnswers = event => {
  event.preventDefault()

  const userAnswers = getUserAnswers()

  resetUserScore()
  calculateFinalUserScore(userAnswers)
  showFinalScore()
  animateFinalScore()
}

quizForm.addEventListener('submit', submitUserAnswers)