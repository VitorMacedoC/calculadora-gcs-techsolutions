let display = document.getElementById('display');

function adicionar(valor) {
  display.value += valor;
}

function limpar() {
  display.value = '';
}

function calcular() {
    display.value = "Resultado: " + eval(display.value);
  }
