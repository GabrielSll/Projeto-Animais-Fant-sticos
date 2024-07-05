export default function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside'

    if(!element.hasAttribute(outside)) {
        events.forEach((userEvent) => {
            setTimeout(() => {html.addEventListener(userEvent, handleOutsideClcik)});
        })  
        element.setAttribute(outside, '')
    }

    function handleOutsideClcik(event) {
        if (!element.contains(event.target)) {
            element.removeAttribute(outside);
            events.forEach((userEvent) => {
                html.removeEventListener(userEvent, handleOutsideClcik)
            })
            callback();
        }
    }
}