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



