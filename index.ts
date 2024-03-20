import inquirer from 'inquirer';
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    {
      message: "select one of operator to perform action",
      type: "list",
      name: "operator",
      choices: ["Addition", "Substraction", "Division", "Multiplication"],
    },
  ]);
  
  // conditional statements
  
  if (answer.operator === "Addition"){
      console.log(answer.firstNumber + answer.secondNumber);
  } else if (answer.operator === "Substraction"){
      console.log(answer.firstNumber - answer.secondNumber);
  } else if (answer.operator === "Division"){
      console.log(answer.firstNumber / answer.secondNumber);
  } else if (answer.operator === "Multiplication"){
      console.log(answer.firstNumber * answer.secondNumber);
  } 
  else {"Please select valid operator"}