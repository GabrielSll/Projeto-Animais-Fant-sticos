// Retorne no console todas as imagens do site

const imgs1 = document.querySelectorAll('img');

console.log(imgs1)

imgs1.forEach(item => console.log(item));


// Retorne no console apenas as imagens que começaram com a palavra imagem

const imgs2 = document.querySelectorAll('img[src^="img/imagem"')

console.log(imgs2)

// Selecione todos os links internos (onde o href começa com #)

const link = document.querySelectorAll("a[href^='#']");

console.log(link)

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
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(i => {
  console.log(i++);
});

imgs.forEach(() => i++);

