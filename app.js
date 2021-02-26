const form = document.querySelector('.quiz-form')

const correctAnswers = ['A', 'B', 'B', 'A']

const userScoreMessage = document.createElement('p')
userScoreMessage.setAttribute('class', 'my-3 text-dark')

form.addEventListener('submit', event => {
  event.preventDefault()

  let score = 0

  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
  ]

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 25
    }
  })
  
  userScoreMessage.textContent = `Você acertou ${score}% das questões`

  form.insertAdjacentElement('afterend', userScoreMessage)
})