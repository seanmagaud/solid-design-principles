// Open to extension, but close for modification

// This switch case violate the principle, because if we have to add a new quizz type,
// We have to add a new case, so the function is open and not close as expected

class BooleanQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("1. True");
    console.log("2. False");
  }
}
class MultipleChoicesQuestion {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }

  printQuestionChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }
}
class TextQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("___________");
  }
}

function printQuiz(questions) {
  questions.forEach((question) => {
    console.log(question.description);
    question.printQuestionChoices();
    console.log("");
  });
}

const questions = [
  new BooleanQuestion("Is the sun yellow ?"),
  new MultipleChoicesQuestion("What is your favorite animal", [
    "Cat",
    "Dog",
    "Bird",
  ]),
  new TextQuestion("Describe your day"),
];

printQuiz(questions);
