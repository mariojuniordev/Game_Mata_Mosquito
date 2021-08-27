
// é necessário criar as variáveis
//dentro do escopo glogal

var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

//o método window.location.href retorna a URL do 
//arquivo referente à página atual

var nivel = window.location.search

//o método .replace(x, y) faz a substituição de 
//determinados caracteres na variavel selecionada
//(x) para os caracteres descritos em y

if (nivel === 'normal') {
	//1500
	criaMosquitoTempo = 1500
} else if (nivel === 'dificil') {
	//1000
	criaMosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
	//750
	criaMosquitoTempo = 750
}

//a função ajustaTamanhoPalcoJogo() é
//usada para ajustar o tamanho da tela
//de jogo de acordo com a tela do
//navegador

function ajustaTamanhoPalcoJogo() {

	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

//o método setInterval() segue a seguinte estrutura
//setInterval(<ação>, tempo em milisegundos), ou seja,
//nesse caso, ele executará a função function() a cada
//1000 milisegundos


var cronometro = setInterval(function () {

	//o elemento innerHTML é o elemento que vai entre
	//as tags, ou seja, <tag>innerHTML</tag>
	//nesse caso dentro da tag <span></span> 
	//que está presente no body do app.html dentro
	//da div cronometro
	tempo -=1

	if(tempo < 0) {
		//claerInterval remove a função setInterval
		//da memória da aplicação
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo

	}
	
}, 1000)

function posicaoRandomica()  {

	//remover o mosquito anterior (caso exista)

	//É necessário verificar se o elemento existe
	//primeiro, para isso, é necessário criar uma
	//condicional para verificar a existência do
	//elemento antes de removê-lo

	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		//Seleciona os corações e substitui o
		//valor atribuido ao source (src)
		
		//a concatenção de v + vidas seleciona o id
		//correspondente ao elemento desejado:
		//(v1, v2 ou v3)
		if(vidas > 3) {
			//window.locatio.href = 'x.html'
			//redireciona o usuário para o html
			//desejado após a condição do if ser
			//satisfeita
			window.location.href = 'fim_de_jogo.html'
		} else{
		document.getElementById('v' + vidas).src="imagens/coracao_vazio.png" 
		}

		vidas++
	}

	//as variáveis abaixo são usadas
	//para colocar objetos em posições
	//randômicas na tela

	//o comando Math.floor arredonda para
	//baixo os números 

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	//Operador ternário, modelo:
	// x = x < float ? valor p/ true : valor p/ false 

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	// <!-- MOSQUITO INÍCIO

	//CRIAR O ELEMENTO HTML
	//a variavel mosquito "engloba" o
	//elemento desejado a partir do 
	//método document.createElement('img')

	var mosquito = document.createElement('img')

	//x.src = 'imagens/x.png' recebe a
	//variavel selecionada (nessa caso mosquito)
	//para atribuir a imagem desejada à
	//variável criada

	mosquito.src = 'imagens/mosquito.png'

	//Atribuindo a classe mosquitoX à variável mosquito
	//Atribuindo a classe ladoX à variável mosquito
	//O uso do espaço ' ' é necessário para que o
	//interpretador saiba q se tratam de classes
	//diferentes
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
		
	//atribuindo posições à variável mosquito
	mosquito.style.left = 0 + posicaoX + 'px'
	mosquito.style.top = 0 + posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		//o this faz referência ao próprio elemento
		//html que executa a função
		this.remove()
	}


	// MOSQUITO FIM -->

	//Acessa o body da página e inlcui
	//um "filho" ao body, usando o parâmetro
	//desejado 

	document.body.appendChild(mosquito)


}

function tamanhoAleatorio() {

	//o Math.random() gera um número de 0
	//até um valor próximo de 1 ("de 0 a 1")
	//o método Math.floor() vai arredondar para baixo
	//o valor gerado por Math.random() * 3
	//dessa forma gerando valores de 0 e muito próximo
	//de 2

	var classe = Math.floor(Math.random() * 3)
	
	//o método switch() é parecido com a condicional
	//if else, porém, se usa os cases (de 0 a n)
	//ao invés de if else

	switch(classe) {
		case 0: 
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
	}
}

function ladoAleatorio() {

	var classe = Math.floor(Math.random() * 2)

	switch(classe) {
		case 0: 
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
}