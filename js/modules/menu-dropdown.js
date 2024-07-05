import outsideClick from './outsideClick.js';

export default function initMenuDropDown() {

    const dropDownMenus = document.querySelectorAll('[data-dropdown]');

    dropDownMenus.forEach((menu) => {
        ['touchstart', 'click'].forEach((userEvent) => {
            menu.addEventListener(userEvent, handleClick)
        })
    })

    function handleClick(event) {
        event.preventDefault();
        this.classList.add('ativo');
        outsideClick(this, ['touchstart', 'click'], () => {
            this.classList.remove('ativo');
        })
    }
}