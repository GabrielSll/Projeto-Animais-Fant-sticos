/**
 * TRASVERSING E MANIPULAÇÃO
 * 
 * Como navegar pelo DOM, utilizando suas propriedades e métodos.
 */

const lista = document.querySelector('.animais-lista');

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho

/**
 * ELEMENT VS NODE
 * 
 * Element's represetam um elemento html, ou seja, uma tag. 
 * Node representa um nó, e pode ser um elemento (Element), 
 * texto, comentário, quebra de linha e mais.
 */

const lista2 = document.querySelector('.animais-lista');

lista2.previousElementSibling; // elemento acima
lista2.previousSibling; // node acima

lista2.firstChild; // primeiro node child
lista2.childNodes; // todos os node child

/**
 * MANIPULANDO ELEMENTOS
 * 
 * É possível mover elementos no dom com métodos de Node.
 */

const lista3 = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.appendChild(lista3); // move lista para o final de contato
contato.insertBefore(lista3, titulo); // insere a lista antes de titulo
contato.removeChild(titulo); // remove titulo de contato
contato.replaceChild(lista3, titulo); // substitui titulo por lista

/**
 * NOVOS ELEMENTOS
 * 
 * Podemos criar novos elementos com o método createElement()
 */

const animais = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');

animais.appendChild(novoH1);

/**
 * CLONAR ELEMENTOS
 * 
 * Todo elemento selecionado é único. Para criarmos um novo 
 * elemento baseado no anterior, é necessário 
 * utilizar o método cloneNode()
 */

const titulo2 = document.querySelector('h1');
const titulo3 = document.querySelector('h1');
const novoTitulo = titulo;
// titulo, titulo2 e novoTitulo são iguais

const cloneTitulo = titulo.cloneNode(true); // true sinaliza para incluir os filhos
const contato2 = document.querySelector('.contato');
contato.appendChild(cloneTitulo);

// ---------- EXERCÍCIO ---------------

// Duplique o menu e adicione ele em copy

// Selecione o primeiro DT da dl de Faq

// Selecione o DD referente ao primeiro DT

// Substitua o conteúdo html de .faq pelo de .animais