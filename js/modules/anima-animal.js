export default function initAnimaAnimal() {
    function animaNumeros() {
        const dataNumero = document.querySelectorAll('[data-numero]');

        dataNumero.forEach((numero) => {
            const valorLimpo = +numero.innerText;
            const incremento = Math.floor(valorLimpo / 100)
            let start = 0;
            const timer = setInterval(() => {
                start += incremento;
                numero.innerText = start;
                if(start > valorLimpo) {
                    numero.innerText = valorLimpo;
                    clearInterval(timer);
                }
            }, 30 * Math.random());
        })
    }
   
    function handleMutation(mutation) {
        if (mutation[0].target.classList.contains('ativo')) {
            observer.disconnect();
            animaNumeros();
        }
    }

    const observer = new MutationObserver(handleMutation);
    const oberserTarget = document.querySelector('.numeros');

    observer.observe(oberserTarget, {attributes: true});
}