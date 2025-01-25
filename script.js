//Função que calcula o imc e determina a categoria 
function calcularIMC() {
    //Obtém os valores de peso e altura dos campos de entrada
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    //Valida a entrada 
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Insira valores válidos para peso e altura!");
        return;
    } 

    //Calcula o IMC 
    const imc = peso / (altura * altura)

    //Determina a categoria com base no IMC 
    let categoria = '';
    if (imc < 18.5) {
        categoria = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <24.9) {
        categoria = "Peso normal";
    } else if (imc >=25 && imc <29.9) {
        categoria = "Sobrepeso";
    } else if (imc >=30 && imc <34.9) {
        categoria = "Obesidade grau 1";
    } else if (imc >=35 && imc <39.9) {
        categoria = "Obesidade grau 2";
    } else {
        categoria = "Obesidade grau 3";
    }

    //exibe o imc e a categoria no html 
    document.getElementById('imc').textContent = `IMC: ${imc.toFixed(2)}`;
    document.getElementById('categoria').textContent = `Categoria: ${categoria}`;   
}

const pesoInput = document.getElementById("peso");
            const alturaInput = document.getElementById("altura");
            const calcularBtn = document.getElementById("calcular-btn");

//enter 
pesoInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        alturaInput.focus(); // Move para o próximo campo
        }
});