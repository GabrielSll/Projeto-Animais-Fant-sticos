export default function initModal() {

    const abrir = document.querySelector('[data-modal="abrir"]');
    const fechar = document.querySelector('[data-modal="fechar"]');
    const modal = document.querySelector('[data-modal="container"]');


    if (abrir && fechar && modal ) {
        function toggleModal(event) {
            event.preventDefault();
            modal.classList.toggle('ativo')
        }

        abrir.addEventListener('click', toggleModal);
        fechar.addEventListener('click', toggleModal);

        function cliqueForaModal(event) {
            if(event.target === this) {
                toggleModal(event);
            }
        }

        modal.addEventListener('click', cliqueForaModal);
    }
}