// Open to extension, but close for modification

// This switch case violate the principle, because if we have to add a new quizz type,
// We have to add a new case, so the function is open and not close as expected

function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    switch (question.type) {
      case "boolean":
        console.log("1. True");
        console.log("2. False");
        break;
      case "multipleChoice":
        question.options.forEach((option, index) => {
          console.log(`${index + 1}. ${option}`);
        });
        break;
      case "text":
        console.log("Answer: _______");
        break;
    }
    console.log("");
  });
}

const questions = [
  {
    type: "boolean",
    description: "Is the sun yellow ?",
  },
  {
    type: "multipleChoice",
    description: "What is your favorite animal",
    options: ["Cat", "Dog", "Bird"],
  },
  {
    type: "text",
    description: "Describe your day",
  },
];

printQuiz(questions);
