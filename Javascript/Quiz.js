
let questions = [
  {
    question: "What is 10/2 ?",
    answers: {
      a: '3',
      b: '5',
      c: '115',
    },
    correctAnswer: 'b',
  },
  {
    question: "What is 30/3 ?",
    answers: {
      a: '3',
      b: '10',
      c: '5',
    },
    correctAnswer: 'b',
  },
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

quiz(questions, quizContainer, resultsContainer, submitButton);

function quiz(questions, quizContainer, resultsContainer, submitButton) {

  // Show questions
  function showQuestions(questions, quizContainer) {
    let output = [];

    for (let i = 0; i < questions.length; i++) {
      let answers = [];

      for (let letter in questions[i].answers) {
        answers.push(
          `<label>
            <input type="radio" name="question${i}" value="${letter}"> 
            ${letter}: ${questions[i].answers[letter]}
          </label>`
        );
      }

      output.push(
        `<div class="question">${questions[i].question}</div>
         <div class="answers">${answers.join('')}</div>`
      );
    }

    quizContainer.innerHTML = output.join('');
  }

  // Show results
  function showResults(questions, quizContainer, resultsContainer) {
    var answerContainers = quizContainer.querySelectorAll('.answers');
    var numCorrect = 0;

    for (var i = 0; i < questions.length; i++) {
      var userAnswer = (answerContainers[i].querySelector(`input[name=question${i}]:checked`) || {}).value;

      if (userAnswer === questions[i].correctAnswer) {
        numCorrect++;
        answerContainers[i].style.color = 'lightgreen';
      } else {
        answerContainers[i].style.color = 'red';
      }
    }

    resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
  }

  // Initial display
  showQuestions(questions, quizContainer);

  // On submit, show results
  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };
}