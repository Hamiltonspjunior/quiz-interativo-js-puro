const quizForm = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')

const correctAnswers = ['A', 'B', 'B', 'C']

let score = 0

const getUserAnswers = () => {
  const userAnswers = []

  correctAnswers.forEach((_, index) => {
    const userAnswer = quizForm[`inputQuestion${index + 1}`].value

    userAnswers.push(userAnswer)
  })

  return userAnswers
}

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

const submitUserAnswers = event => {
  event.preventDefault()

  score = 0

  const userAnswers = getUserAnswers()

  calculateFinalUserScore(userAnswers)
  showFinalScore()
  animateFinalScore()
}

quizForm.addEventListener('submit', submitUserAnswers)