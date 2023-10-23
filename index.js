// step 1 ;

const quizData = [
  {
    question: "What does HTML stand for?",
    option: [
      " Hyper Text Markup Language",
      " Hyper Transfer Markup Language",
      " Home Tool Markup Language",
      " Hyperlinks and Text Markup Language",
    ],
    correct: 0,
  },
  {
    question:
      "which css property is used to control the spacing between element?",
    option: ["margin", " pading", " spacing", " border-spacing"],
    correct: 1,
  },
  {
    question:
      "What is the javascript function used to select an Html element by its id?",
    option: [
      " document.qurey",
      " getElementById",
      " selectElement",
      " findElementById",
    ],
    correct: 1,
  },
  {
    question:
      "In react.js which hook is used to performed side effect in a function component?",
    option: ["useEffect", " useState", " useContext", " useReducer"],
    correct: 0,
  },
  {
    question: "which HTML tag is used to create order list ?",
    option: [" <ul>", " <li>", "<ol>", " <dl>"],
    correct: 2,
  },
];

const quiz = document.querySelector("#quiz");
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    "#question, #option_1, #option_2, #option_3, #option_4"
  );

const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
  const { question, option } = quizData[currentQuiz];
  questionElm.innerText = `${currentQuiz + 1}: ${question}`;
  option.forEach(
    (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
  );
};
// const loadQuiz: () => void

loadQuiz();

const getSelectedOption = () => {
  // let ans_index;
  // answerElm.forEach((curOption, index) => {
  //     if(curOption.checked){
  //         ans_index = index;
  //     }
  // });
  // return ans_index;

  let answerElement = Array.from(answerElm);
  return answerElement.findIndex((curElem) => curElem.checked);
};

const deselectedAnswers = () => {
  return answerElm.forEach((curElem) => (curElem.checked = false));
};

submitBtn.addEventListener("click", () => {
  const selectedOptionIndex = getSelectedOption();
  console.log(selectedOptionIndex);

  if (selectedOptionIndex === quizData[currentQuiz].correct) {
    score += 1;
  }

  currentQuiz++;
  if (currentQuiz < quizData.length) {
    deselectedAnswers();
    loadQuiz();
  } else {
    quiz.innerHTML = `
        <div class = "result">
        <h2> Your Score : ${score}/${quizData.length} Correct Answer</h2>
        <p> Congratulation on compeleting the quiz! </p>
        <button class = "reload-button" onClick="location.reload()" >Play Again</button>
        </div>
        `;
  }
});
