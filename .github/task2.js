let number1 = Number(prompt("შეიყვანეთ გამოცდის ქულა:"));
if (number1 >= 90 && number1 <= 100) {
    alert("თქვენ მიიღეთ A");
}
else if (number1 >= 80 && number1 < 90) {
alert("თქვენ მიიღეთ B");
}
else if (number1 >= 70 && number1 < 80) {
    alert("თქვენ მიიღეთ C");
}
else if (number1 >= 60 && number1 < 70) {
    alert("თქვენ მიიღეთ D");
}
else if (number1 >= 50 && number1 < 60) {
    alert("თქვენ მიიღეთ E");
}
else if (number1 >= 0 && number1 < 50) {
    alert("თქვენ მაგრად არ გაგიმართლათ, კიდევ სცადეთ");
}
