// Step 1: Define Quiz Data
const quizData = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hypertext Markup Language",
        "Hyper Transfer Markup Language",
        "Hypertext Machine Language",
        "Hyperlink and Text Markup Language"
      ],
      correct: 0
    },
    {
      question: "Which CSS property is used to control the spacing between elements?",
      options: ["margin", "padding", "spacing", "border-spacing"],
      correct: 1
    },
    {
      question: "What is the JavaScript function used to select an HTML element by its id?",
      options: [
        "document.querySelector",
        "getElementById",
        "selectElement",
        "findElementById"
      ],
      correct: 1
    },
    {
      question: "In React.js, which hook is used to perform side effects in a function component?",
      options: ["useEffect", "useState", "useContext", "useReducer"],
      correct: 0
    },
    {
      question: "Which HTML tag is used to create an ordered list?",
      options: ["<ul>", "<li>", "<ol>", "<dl>"],
      correct: 2
    }
  ];
  
  // Step 2: JavaScript Initialization
  const quiz = document.querySelector("#quiz");
  const scores = document.querySelector(".score");
  const answerElm = document.querySelectorAll(".answer");
  const [questionElm, option1, option2, option3, option4] = document.querySelectorAll(
    "#question, .option_1, .option_2, .option_3, .option_4"
  );
  const submitBtn = document.querySelector("#submit");
  
  let currentQuiz = 0;
  let score = 0;
  
// Step 3: Load Quiz Function
const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];
    questionElm.innerText = `${currentQuiz + 1}: ${question}`;
    scores.innerText = `Score: ${score}/${quizData.length}`;
    
    const optionLabels = document.querySelectorAll(".answers label");
    
    options.forEach((curOption, index) => {
      optionLabels[index].setAttribute("for", `option_${String.fromCharCode(97 + index)}`);
      optionLabels[index].textContent = curOption;
    });
  };
  
  loadQuiz();
  
  
  // Step 4: Get Selected Answer Function on Button click
  const getSelectedOption = () => {
    const selectedOptionIndex = answerElm.findIndex((curElem) => curElem.checked);
    return selectedOptionIndex;
  };
  
  const deselectedAnswers = () => {
    answerElm.forEach((curElem) => (curElem.checked = false));
  };
  
  submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
    if (selectedOptionIndex === quizData[currentQuiz].correct) {
      score++;
    }
  
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      deselectedAnswers();
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <div class="result">
          <h2>Your Score: ${score}/${quizData.length} Correct Answers</h2>
          <p>Congratulations on completing the quiz!</p>
          <button class="reload-button">Play Again</button>
        </div>
      `;
    }
  });
  