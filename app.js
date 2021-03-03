const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const correctAnswers = ['A', 'B', 'B', 'A']
const totalQuestions = correctAnswers.length

let score = null

const incrementScore = () => {
  score += 100 / totalQuestions
}

const checkUserAnswers = (userAnswer, index) => {
  const isCorrectAnswer = userAnswer === correctAnswers[index]

  if (isCorrectAnswer) {
    incrementScore()
  }
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
  
  scrollTo(0, 0)

  finalResult.classList.remove('d-none')
  
  let counter = 0
  
  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer)
    }
    
    finalResult.querySelector('span').textContent = `${counter}%`
    counter++
  }, 10)
}

form.addEventListener('submit', submitUserAnswers)