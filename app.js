const convertButton = document.querySelector("#button")// Pega o botão "Converter" do HTML pelo id "button"
const selectMoedaConversao = document.querySelector("#select-moeda-conversao")// Pega o select (lista) da moeda que será convertida de (origem)
const selectMoedaConvertida = document.querySelector("#select-moeda-convertida")// Pega o select (lista) da moeda para qual será convertida (destino)

function valoresConvertidos() {
    const valorDoInput = document.querySelector(".valor-input").value// Pega o valor que o usuário digitou no input
    const valorDaMoeda = document.querySelector(".valor-moeda")// Pega o elemento HTML que mostra o valor original (antes da conversão)
    const valorDaMoedaConvertida = document.querySelector(".valor-moeda-convertida")// Pega o elemento HTML que mostra o valor convertido (resultado)
    const moedaOrigem = selectMoedaConversao.value// Pega qual moeda o usuário escolheu para converter (origem)
    const moedaDestino = selectMoedaConvertida.value// Pega qual moeda o usuário escolheu para converter para (destino)

    const valor = {
        Real: 1,
        Dolar: 5.69,
        Euro: 6.47,
        Libra: 7.69,
        Bitcoin: 598750
    }// Objeto com valores fixos de cada moeda em relação ao Real (BRL)

    const moedas = {
        Real: "BRL",
        Dolar: "USD",
        Euro: "EUR",
        Libra: "GBP",
        Bitcoin: "BTC"
    }// Objeto com os códigos oficiais de cada moeda para formatação

    const valorEmReais = valorDoInput * valor[moedaOrigem]// Converte o valor digitado para Reais (multiplica pelo valor da moeda origem)
    const valorConvertido = valorEmReais / valor[moedaDestino]// Converte o valor em Reais para a moeda destino (divide pelo valor da moeda destino)

    valorDaMoeda.innerHTML = (moedaOrigem === "Bitcoin" ? "₿ " : "") + new Intl.NumberFormat("pt-BR", {
        style: moedaOrigem === "Bitcoin" ? "decimal" : "currency", // Bitcoin não é moeda no Intl, então usa decimal
        currency: moedas[moedaOrigem], // Código da moeda para formatação
        minimumFractionDigits: moedaOrigem === "Bitcoin" ? 8 : 2 // Bitcoin usa mais casas decimais
    }).format(valorDoInput)// Atualiza o valor original na tela, formatando de acordo com a moeda escolhida

    valorDaMoedaConvertida.innerHTML = (moedaDestino === "Bitcoin" ? "₿ " : "") + new Intl.NumberFormat("pt-BR", {
        style: moedaDestino === "Bitcoin" ? "decimal" : "currency",
        currency: moedas[moedaDestino],
        minimumFractionDigits: moedaDestino === "Bitcoin" ? 8 : 2
    }).format(valorConvertido)// Atualiza o valor convertido na tela, formatando da mesma forma para a moeda destino

}// Função que faz a conversão das moedas e atualiza os valores na tela

function atualizarMoeda(moeda, nomeClasse, imgClasse) {
    const nome = document.querySelector(nomeClasse)// Seleciona o elemento que mostra o nome da moeda
    const img = document.querySelector(imgClasse)// Seleciona o elemento que mostra a imagem da moeda

    const dados = {
        Real: { nome: "Real", img: "./assets/real.png" },
        Dolar: { nome: "Dólar", img: "./assets/dolar.png" },
        Euro: { nome: "Euro", img: "./assets/euro.png" },
        Libra: { nome: "Libra", img: "./assets/libra.png" },
        Bitcoin: { nome: "Bitcoin", img: "./assets/bitcoin.png" }
    }// Objeto que guarda os nomes e caminhos das imagens de cada moeda

    nome.innerHTML = dados[moeda].nome// Atualiza o texto do nome da moeda com base na moeda escolhida
    img.src = dados[moeda].img // Atualiza a imagem da moeda com o caminho correto da moeda escolhida

}// Função para atualizar o nome e a imagem da moeda mostrada na interface
// recebe a moeda (string), o seletor do nome (classe CSS) e o seletor da imagem (classe CSS)

function atualizarInterface() {
    atualizarMoeda(selectMoedaConversao.value, ".nome-moeda-converter", ".bandeiras-converter")// Atualiza o nome e imagem da moeda que será convertida (origem)
    atualizarMoeda(selectMoedaConvertida.value, ".nome-moeda", ".bandeiras")// Atualiza o nome e imagem da moeda para qual será convertida (destino)
    valoresConvertidos()// Atualiza os valores convertidos na tela

}// Função que atualiza tudo na interface: nomes, imagens e valores convertidos

selectMoedaConvertida.addEventListener("change", atualizarInterface)// Quando o usuário mudar a moeda destino, atualiza a interface
selectMoedaConversao.addEventListener("change", atualizarInterface)// Quando o usuário mudar a moeda origem, atualiza a interface
convertButton.addEventListener("click", valoresConvertidos)// Quando o usuário clicar no botão, converte os valores