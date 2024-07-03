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

const animais2 = document.querySelector('.animais');

console.log(animais2.attributes)
console.log(animais2.attributes.id)
console.log(animais2.attributes.class)

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

// Transversing e Manipulação

/**
 *  Transversing
 * 
 *  Como navegar pelo DOM, utilizando suas propriedades e métodos.
 */

const lista = document.querySelector('.animais-lista');

console.log(lista.parentElement); // retorna pai do elemento
console.log(lista.previousElementSibling); //retorna elemento acima
console.log(lista.nextElementSibling); //retorna elemento abaixo
console.log(lista.children) // HTMLCollection - acessa como se fosse um array [0]
console.log(lista.children[--lista.children.length]) // retorna o ultimo filho
console.log(lista.querySelector('li:last-child')) // selecionar o ultimo filho

/**
 * Element vs Node
 * 
 *  Element's representam um elemento html, ou seja, uma tag. Node
 *  representa um nó, e pode ser um elemento (Element), texto, comentário
 *  quebra de linha e mais.
 */

/**
 * Manipulando Elementos
 * 
 * É possível mover elementos no dom com métodos de Node
 * 
 */

const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

// lista.appendChild(titulo) // coloca o elemento selecionado como ultimo filho.

/**
 *  move a lista para dentro da sessão de contato e 
coloca ela antes do titulo de contato.
o segundo parametro tem que ser filho do pai
geral, no caso (contato).
*/

// contato.insertBefore(lista, titulo)

// contato.removeChild(titulo) // remove um filho

// contato.replaceChild(lista, titulo) // substitui o segundo parametro pelo primeiro.

/**
 * Novos Elementos
 * 
 * Podemos criar novos elementos com o método createElement()
 * 
 */

const animais = document.querySelector('.animais');
const mapa = document.querySelector('.mapa')

const novoH1 = document.createElement('h1');

novoH1.innerText = 'Novo Título'; // Substitui o título atual pelo título definido aqui.

novoH1.classList.add('titulo'); // Adiciona a classe titulo no novo titulo definido

mapa.appendChild(novoH1); // Adiciona o elemento novoH1 depois do ultimo filho de mapa

/**
 * Clonar Elementos
 * 
 * Todo elemento selecionado é único. Para criarmos um novo elemento
 * basedo no anterior, é necessário utilizar o método cloneNode();
 */

const faq = document.querySelector('.faq');
/**
 * clona o elemento selecionado e caso coloque true,
 * clona também todos os filhos do elemento selecionado.
 * se colocar false copia apenas a tag selecionada
 */
const cloneH1 = novoH1.cloneNode(true) 

faq.appendChild(cloneH1)

// Navegação por listas

const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
        tabContent.forEach((section) => {
            section.classList.remove('ativo');
        });
        tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index)
        })
    })
}

/**
 * Dataset
 * 
 * HTMLELEMENT
 * 
 * Todo elemento HTML do DOM herda propriedades e métodos do construtor HTMLElement.
 */

const H1 = document.querySelector('h1');
Object.prototype.toString.call(h1); // [object HTMLHeadingElement]
// HTMLHeadingElement > HTMLElement > Element > Node > EventTarget > Object

/**
 * DATASET
 * 
 * dataset é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap.
 * Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento html que começarem com data-.
 */

// Ambos os valores selecionam a mesma div acima.
let div = document.querySelector('div');
div = document.querySelector('[data-cor]');
div = document.querySelector('[data-cor="azul"]');

div.dataset;
// DOMStringMap {cor: "azul", width: "500"}
div.dataset.cor; // 'azul'
div.dataset.width; // '500'
div.dataset.tempo = 1000;
// DOMStringMap {cor: "azul", width: "500", tempo: "1000"}

/**
 * DATA ATRIBUTES
 * 
 * Os atributos e valores que começarem com data- poderão ser utilizados como forma de configuração de plugins e interações DOM / JS.
 */

const divs = document.querySelectorAll('[data-anima]');
divs.forEach((div) => {
  div.classList.add(div.dataset.anima);
});

// adiciona em cada div
// uma classe com o mesmo nome
// que o valor de data

/**
 * DATA VS CLASS
 * 
 * A vantagem de se utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos do CSS. 
 * Além de deixar a estrutura da tag mais organizada.
 */

/**
 * NOMENCLATURA
 * 
 * Por padrão o JavaScript não aceita - (traço) como caracter válido para nomear propriedades. 
 * Então qualquer traço será removido e a letra seguinte transformada em maiúscula.
 * 
 * <div data-anima-scroll="left">Div 1</div>
 */

const div = document.querySelector('[data-anima-scroll]');
div.dataset;
// {animaScroll: 'left'}
div.dataset.animaScroll; // left
div.dataset.tempoTotal = 1000;
// Na div vira data-tempo-total="1000"

delete div.dataset.animaScroll; // remove o atributo

/**
 * EXERCÍCIOS
 * 
 * // Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.
 */