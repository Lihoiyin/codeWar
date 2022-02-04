//https://www.codewars.com/kata/57356c55867b9b7a60000bd7

const operation = (oper, num1, num2) => {
  switch (oper) {
    case '+':
      return num1 + num2
    case "-":
      return num1 - num2
    case '*':
      return num1 * num2
    case '/':
      return num1 / num2
    default:
      break;
  }
}

console.log(operation('/', 12, 2));
