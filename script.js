let display = document.getElementById('display');

function adicionar(valor) {
  display.value += valor;
}

function limpar() {
  display.value = '';
}

function calcular() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Erro';
  }
}
function adicionarHistorico(item) {
    const li = document.createElement('li');
    li.textContent = item;
    listaHistorico.appendChild(li);
  }
