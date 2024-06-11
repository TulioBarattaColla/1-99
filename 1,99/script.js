function calcularValorCompra() {
    const nome = document.getElementById('nome').value;
    const codigo = document.getElementById('codigo').value;
    const qtd = parseInt(document.getElementById('qtd').value);
    const valorUnitario = 1.99;
    const resultElement = document.getElementById('result');

    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    const valorCompra = qtd * valorUnitario;

    resultElement.innerHTML = `
        <p>------------------------------------------------------------</p>
        <p>Cliente: <span>${nome}</span></p>
        <p>Código do produto: <span>${codigo}</span></p>
        <p>Valor Total da Compra: <span>R$ ${valorCompra.toFixed(2)}</span></p>
    `;
}
