
let num1 = prompt("შეიყვანეთ პირველი რიცხვი:");
num1 = Number(num1);

let num2 = prompt("შეიყვანეთ მეორე რიცხვი:");
num2 = Number(num2);

let operation = prompt("აირჩიეთ ოპერაცია (+ - * /):");

let result;

if (operation === "+") {
  result = num1 + num2;
} else if (operation === "-") {
  result = num1 - num2;
} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  if (num2 === 0) {
    result = "ნულზე გაყოფა არ შეიძლება!";
  } else {
    result = num1 / num2;
  }
} else {
  result = "არასწორი ოპერაციაა!";
}

console.log("შედეგი: " + result);
