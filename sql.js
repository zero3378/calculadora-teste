const number1 = document.getElementById("numb")
const number2 = document.getElementById("numb2")
const number3 = document.getElementById("Paragrafo")

function SomaElementos() {
    const valor1 = parseFloat(number1.value);
    const valor2 = parseFloat(number2.value);
    const total = valor1 + valor2;
        
    number3.innerText = total
}

function SubtrairElementos() {
    const valor1 = parseFloat(number1.value);
    const valor2 = parseFloat(number2.value);
    const total = valor1 - valor2;

    number3.innerText = total

}

function MultiplicarElementos() {
    const valor1 = parseFloat(number1.value);
    const valor2 = parseFloat(number2.value);
    const total = valor1 * valor2;

    number3.innerText = total

}

function DividirElementos() {
    const valor1 = parseFloat(number1.value);
    const valor2 = parseFloat(number2.value);
    const total = valor1 / valor2;

    number3.innerText = total

}