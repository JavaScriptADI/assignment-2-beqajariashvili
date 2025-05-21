
let num1 = Number(prompt("შეიყვანეთ რიცხვი:"));

let num2 = Number(prompt("შეიყვანეთ რიცხვი:"));
if (num1 > num2) {
    document.write("პირველი რიცხვი მეტია");
}
else if (num1 < num2) {
    document.write("მეორე რიცხვი მეტია");
}
else if (num1 == num2) {
    document.write("ორივე რიცხვი თანაბარია");
}
else {
    document.write("შეიყვანეთ მხოლოდ ციფრები");
}