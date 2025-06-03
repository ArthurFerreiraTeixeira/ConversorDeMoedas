const convertButton = document.querySelector("#button") //Puxa no html o id do button e cria uma variavel
const selectMoedaConversao = document.querySelector("#select-moeda-conversao") //Puxa no html o id no select das moedas que serao convertidas de: ,e cria uma variavel
const selectMoedaConvertida = document.querySelector("#select-moeda-convertida") //Puxa no html o id no select das moedas que seram convertidas para: ,e cria uma variavel

function valoresConvertidos() {
    const valorDoIput = document.querySelector(".valor-input").value //Cria uma variavel para o valor que foi colocado no input
    const valorDaMoeda = document.querySelector(".valor-moeda") //Cria uma variavel para colocar na ilustraçao o valor que foi colocado nbo input
    const valorDaMoedaConvertida = document.querySelector(".valor-moeda-convertida") //Cria uma variavel para colocar na ilustraçao de cada moeda o valor convertido

    const valorDolar = 5.69 //Valor fixo do Dolar
    const valorEuro = 6.47 //Valor fixo do Euro
    const valorLibra = 7.69 //Valor fixo da Libra
    const valorBitcoin = 598750 //Valor fixo do Bitcoin

    valorDaMoeda.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", //Coloca o style identificando com uma moeda
        currency: "BRL" //Sigla para identicar a moeda Real
    }).format(valorDoIput) //Coloca na ilustraçao o valor que foi colocado em real no input

    if (selectMoedaConvertida.value == "Dolar") {
        valorDaMoedaConvertida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", //Coloca o style identificando com uma moeda
            currency: "USD" //Sigla para identicar a moeda Dolar
        }).format(valorDoIput / valorDolar) //Se for selecionado o Dolar divide o valor do Iput com o valor da moeda Dolar
    }

    if (selectMoedaConvertida.value == "Euro") {
        valorDaMoedaConvertida.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency", //Coloca o style identificando com uma moeda
            currency: "EUR" //Sigla para identicar a moeda Euro
        }).format(valorDoIput / valorEuro) //Se for selecionado o euro divide o valor do Iput com o valor da moeda Euro
    }

    if (selectMoedaConvertida.value == "Libra") {
        valorDaMoedaConvertida.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency", //Coloca o style identificando um decimal pois o Bitcoin nao e uma moeda oficial
            currency: "GBP" //Sigla para identicar a moeda Libra
        }).format(valorDoIput / valorLibra) //Se for selecionado a Libra divide o valor do Iput com o valor da moeda Libra
    }

    if (selectMoedaConvertida.value == "Bitcoin") {
        valorDaMoedaConvertida.innerHTML = "₿ " + new Intl.NumberFormat("en-US", {
            style: 'decimal', //Coloca com um valor decimal, pois o bitcoin nao e considerado uma moeda no iso
            minimumFractionDigits: 8, //minimo de numeros da fraçao
            maximumFractionDigits: 8 //maximo de numeros da fraçao
        }).format(valorDoIput / valorBitcoin) //Se for selecionado Bitcoin divide o valor do Iput com o valor do Bitcoin
    }

// Intl.NumberFormat formata números de acordo com a localização e opções definidas (como estilo de moeda, número de casas decimais, etc.)
}//Uma funçao para converter os valores das moedas

function modeloMoeda() {
    const NomeDaMoeda = document.querySelector(".nome-moeda") //Cria uma variavel para o nome das moedas
    const ImgMoeda = document.querySelector(".bandeiras") //Cria uma variavel para as imagens das moedas

    if (selectMoedaConvertida.value == "Dolar") {
        NomeDaMoeda.innerHTML = "Dolar" //Troca o nome da moeda
        ImgMoeda.src = "./assets/dolar.png" //Troca a imagem da moeda
    } //Se for selecionado o value Dolar sera realizado esses procedimentos

    if (selectMoedaConvertida.value == "Euro") {
        NomeDaMoeda.innerHTML = "Euro" //Troca o nome da moeda
        ImgMoeda.src = "./assets/euro.png"//Troca a imagem da moeda
    } //Se for selecionado o value Euro sera realizado esses procedimentos

    if (selectMoedaConvertida.value == "Libra") {
        NomeDaMoeda.innerHTML = "Libra" //Troca o nome da moeda
        ImgMoeda.src = "./assets/libra.png"//Troca a imagem da moeda
    } //Se for selecionado o Libra Bitcoin sera realizado esses procedimentos

    if (selectMoedaConvertida.value == "Bitcoin") {
        NomeDaMoeda.innerHTML = "Bitcoin" //Troca o nome da moeda
        ImgMoeda.src = "./assets/bitcoin.png"//Troca a imagem da moeda
    } //Se for selecionado o value Bitcoin sera realizado esses procedimentos


valoresConvertidos() //Coloca a funçao da conversao de valores, quando houver a troca de moedas ja faz a conversao de valores
} //Uma funçao para converter o texto e a imagem da moeda selecionada para ser convertida

selectMoedaConvertida.addEventListener("change", modeloMoeda) // Quando o usuário muda a moeda selecionada, chama a função que atualiza o nome e a imagem da moeda
convertButton.addEventListener("click", valoresConvertidos) //Toda vez que clicar no butao converte os valores das moedas