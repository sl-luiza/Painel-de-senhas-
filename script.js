// RELÓGIO EM TEMPO REAL
function atualizarHora() {
  const agora = new Date();

  const hora = agora.toLocaleTimeString();
  const data = agora.toLocaleDateString();

  document.getElementById("hora").innerText = `${hora} - ${data}`;
}

// atualiza a cada segundo
setInterval(atualizarHora, 1000);


// CONTROLE DE SENHAS
let contador = 123; // começa de onde quiser

function novaSenha() {
  const letras = ["A", "B", "C"];

  // escolhe letra aleatória
  const letra = letras[Math.floor(Math.random() * letras.length)];

  // incrementa número
  contador++;

  const senha = letra + contador;

  // guichê aleatório
  const guiche = Math.floor(Math.random() * 5) + 1;

  // atualiza painel principal
  document.getElementById("senha").innerText = senha;
  document.getElementById("guiche").innerText = "GUICHÊ " + guiche;

  // adiciona na lista
  const tabela = document.getElementById("lista");

  const linha = tabela.insertRow(0);
  linha.insertCell(0).innerText = senha;
  linha.insertCell(1).innerText = guiche;

  // mantém só as últimas 6
  if (tabela.rows.length > 6) {
    tabela.deleteRow(6);
  }
}