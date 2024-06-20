// Retorne no console todas as imagens do site

const imgs1 = document.querySelectorAll('img');

console.log(imgs1)

imgs1.forEach(item => console.log(item));


// Retorne no console apenas as imagens que começaram com a palavra imagem

const imgs2 = document.querySelectorAll('img[src^="img/imagem"')

console.log(imgs2)

// Selecione todos os links internos (onde o href começa com #)

const link4 = document.querySelectorAll("a[href^='#']");

console.log(link4)

// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector('.animais-descricao h2')

console.log(primeiroH2)

// Selecione o último p do site

const ultimoP = document.querySelectorAll('p')

console.log(ultimoP[6].innerHTML)

// Mostre no console cada parágrado do site

const paragrafos = document.querySelectorAll('p')

paragrafos.forEach(item => console.log(item));

// Mostre o texto dos parágrafos no console

paragrafos.forEach(item => console.log(item.innerText));

// Como corrigir os erros abaixo:
const imgs3 = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(i => {
  console.log(i++);
});

imgs.forEach(() => i++);

// ------------ Aula sobre Classes e Atributos -----------------

const menu = document.querySelector('.menu');

console.log(menu.classList.add('ativo'))
console.log(menu.classList)

if (menu.classList.contains('ativo')) {
    menu.classList.add('possui-ativo')
}

console.log(menu.className)

const animais = document.querySelector('.animais');

console.log(animais.attributes)
console.log(animais.attributes.id)
console.log(animais.attributes.class)

const img = document.querySelector('img');

img.getAttribute('src'); // busca um atributo existente
// img.setAttribute('alt') // seta um novo atributo
img.hasAttribute('alt') // verifica se existe o atributo definido
img.removeAttribute('') // remove atributo

// Adicione a classe ativo a todos os itens do menu

    const itensMenu = document.querySelectorAll('.menu a');

    itensMenu.forEach((item) => {
        item.classList.add('ativo');
    })

    

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item) => {
    item.classList.remove('ativo');
})

itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt

    const imgs = document.querySelectorAll('img');

    imgs.forEach((img) => {
        const possuiAtributo = img.hasAttribute('alt')
        console.log(possuiAtributo)
    })
// Modifique o href do link externo no menu

const link = document.querySelector('a[href^="http"]')

link.setAttribute('href', 'https://www.google.com/')
console.log(link)

// -------------------- Dimensões e Distâncias ----------------------

const listaAnimais = document.querySelector('.animais-lista');

listaAnimais.clientHeight // height + padding
listaAnimais.clientWidth // width + padding
listaAnimais.scrollHeight // height total, mesmo dentro de scroll
listaAnimais.scrollWidth // width total, mesmo dentro de scroll

const topAnimais = listaAnimais.offsetTop; // distância entre topo do elemento e topo da página
const leftAnimais = listaAnimais.offsetLeft; // distância da esquerda do elemento
const rect = listaAnimais.getBoundingClientRect();

console.log(
    window.innerWidth, // width do janela
    window.innerHeight, // height da janela
    window.outerWidth, // soma dev tools também
    window.outerHeight, //soma a barra de endereço
    window.scrollY, // traz a distância do scroll do topo da página
    window.scrollX // traz a distância do scroll do eixo X 
);

const small = window.matchMedia('(max-width: 600px)').matches; 

if (small) {
    console.log('usuário mobile')
} else {
    console.log('usuário desktop')
}

// --------- Exercicio ----------

// Verifique a distância da primeira imagem
// em relação ao topo da página

    const imagem1 = document.querySelector('img')

    console.log(imagem1.offsetTop);

// Retorne a soma da largura de todas as imagens

    function somaImagens() {
        const imagens = document.querySelectorAll('img');
        let soma = 0;
        imagens.forEach((imagem) => {
            soma = soma + imagem.offsetWidth;
            console.log(imagem.offsetWidth);
        })    
    }

window.onload = function() {
    somaImagens();
}


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

    const links = document.querySelectorAll('a');

    links.forEach((link) => {
        const linkWidth = link.offsetWidth;
        const linkHeight = link.offsetHeight;

        if (linkWidth >= 48 && linkHeight >= 48) {
            console.log(" Possui boa acessibilidade ")
        } else {
            console.log(' Não possui boa acessibilidade')
        }
    })

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu


    const browserSmall = window.matchMedia('(max-width: 720px)').matches;
    

    if (browserSmall) {
        const menu = document.querySelector('.menu');
        menu.classList.add('menu-mobile')
    }

    console.log(browserSmall)

// ----------------- EVENTOS --------------------

/**
 * 
 *  addEventListener
 * 
 *  Adiciona uma função ao elemento, esta chamada de "callback",
 *  que será ativada assim que certo evento ocorrer neste elemento.
 * 
 */

const img0 = document.querySelector('img');

// elemento.addEventListener(event, function, options)
img.addEventListener('click', () => {
    console.log('clicou')
})

/**
 * Callback
 * 
 *  É boa prática separar a função de callback do addEventListener, ou
 *  seja, declarar uma função antes ao invés de passar uma função 
 *  anônima.
 * 
 */

// function callback() {
//     console.log('clicou');
// }

img.addEventListener('click', callback);

/**
 * 
 *  Event
 * 
 *  O primeiro parâmetro do callback é referente ao evento que ocorreu.
 * 
 */

function callback(e) {
    console.log(e)
}

img.addEventListener('click', callback);

/**
 * Propiedades do Event
 */

const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
   const currentTarget = event.currentTarget; // this
   const target = event.target; // onde ocorreu o clique
   const type = event.type;  // tipo do evento
   const path = event.path; 

   console.log(currentTarget, target, type, path)
}

animaisLista.addEventListener('click', executarCallback)

/**
 * event.prevent.Default()
 * 
 *  Previne o comportamento padrão do evento no browser. No caso
 *  de um link externo, por exemplo, irá previnir que o link seja
 *  ativado.
 */

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
    event.preventDefault();
}

linkExterno.addEventListener('click', handleLinkExterno);

/**
 * this
 * 
 * A palavra chave "this" é uma palavra especial do JavaScript, que
 * pode fazer referência a diferentes objetos dependendo do contexto.
 * No caso de eventos, ele fará referência ao elemento em que 
 * addEventListener foi adicionado.
 * 
 */

function callbackImg(event) {
    console.log(this);
}

img.addEventListener('click', callbackImg);

/**
 * Diferentes Eventos
 * 
 * Existem diversos eventos como click, scroll, resize,
 * keydown, keyup, mouseenter e mais. Eventos podem ser
 * adicionados a diferentes elementos, como window e document também.
 */

const h1 = document.querySelector('h1')

function callbackh1(event) {
    console.log(event.type, event);
}

h1.addEventListener('mouseenter', callbackh1)
window.addEventListener('scroll', callbackh1)

/**
 * forEach e Eventos
 * 
 *  O método addEventListener é adicionado à um único
 *  elemento, então é necessário um loop entre elementos de uma
 *  lista, para adicionarmos à cada um deles.
 */

const imgs5 = document.querySelectorAll('img');

function imgSrc(event) {
    const src = event.currentTarget.getAttribute('src');
    console.log(src);
}

imgs5.forEach((img) => {
    img.addEventListener('click', imgSrc);
})

/**
 *  -------------- EXERCICIO -----------------
 */

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

    const links2 = document.querySelectorAll('a[href^="#"]');   

    function callbackLink(event) {
        event.preventDefault();

        links.forEach((link) => {
            link.classList.remove('ativo')
        })
        
        event.currentTarget.classList.add('ativo')
    }

    links.forEach((link) => {
        link.addEventListener('click', callbackLink)    
    })

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll('body *')

function retornaElemento(event) {
    console.log(event.currentTarget);
}

    todosElementos.forEach((elemento) => {
        elemento.addEventListener('click', retornaElemento)
    })
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function retornaElemento2(event) {
    console.log(event.currentTarget.remove());
}

todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', retornaElemento2)
})

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function apertaT(event) {
    
    if(event.key === 't') {
        document.body.classList.add('letraMaior')
    } else if (event.key === 'm') {
        document.body.classList.remove('letraMaior')
    }
}

window.addEventListener('keydown', apertaT)