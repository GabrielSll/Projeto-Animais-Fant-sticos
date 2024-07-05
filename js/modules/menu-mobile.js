import outsideClick from './outsideClick.js'

export default function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const eventos = ['click', 'touchstart']

    function openMenu(event) {
        menuList.classList.add('ativo');
        menuButton.classList.add('ativo');
        outsideClick(menuList, ['click', 'touchstart'], () => {
            menuList.classList.remove('ativo');
            menuButton.classList.remove('ativo');
        })
    }

    eventos.forEach((evento) => {
        menuButton.addEventListener(evento, openMenu);
    })
}