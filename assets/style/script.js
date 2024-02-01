const button = document.querySelector('#btnFollow');
button.addEventListener('click', function () {
    const hidden = document.querySelector('div.social-media');
    hidden.classList.toggle('hidden');
})
const arrowUp = document.querySelector('#arrowUp');
arrowUp.addEventListener('click', function () {
    const hidden = document.querySelector('div.social-media');
    hidden.classList.add('hidden');
})