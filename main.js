let number;
let number2;
let result;
let i;

document.querySelector("#enter").addEventListener("click", multiplier);

function multiplier() {
    number = Number(document.querySelector("#integer").value);
    number2 = Number(document.querySelector("#integer2").value);
    i = 0;
    result = 0;
    if (number2 < 0) {
        while (i < -number2) {
            result = Number(result) + Number(number);
            i++;
        }
        result = -result;
    } else {
        while (i < number2) {
        result = Number(result) + Number(number);
        i++;
        }
    }
    console.log(result);
    document.querySelector("#answer").textContent = "Answer: " + result;
}