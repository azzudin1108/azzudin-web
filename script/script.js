const img = document.querySelectorAll('#project .carousel .carousel-img .img-project img');
const btn = document.querySelectorAll('#project .carousel-btn a');

const gameRev = img[0];
const next = btn[1];
const prev = btn[0];

next.addEventListener('click', function (e) {
    if (gameRev.classList.contains('slide-2') == false) {
        if (gameRev.classList.contains('slide-3') == false) {
            gameRev.classList.add('slide-2');
            gameRev.classList.remove('slide-3');
            gameRev.classList.remove('slide-1');
            gameRev.parentElement.setAttribute('href', 'https://azzudin1108.github.io/portfolio/');
        }
    } else {
        gameRev.classList.add('slide-3');
        gameRev.classList.remove('slide-2');
        gameRev.classList.remove('slide-1');
        gameRev.parentElement.setAttribute('href', 'https://azzudin1108.github.io/invitation/');
    }
    e.preventDefault();
});

prev.addEventListener('click', function (e) {
    if (gameRev.classList.contains('slide-2') == true) {
        gameRev.classList.add('slide-1');
        gameRev.classList.remove('slide-2');
        gameRev.classList.remove('slide-3');
        gameRev.parentElement.setAttribute('href', 'https://azzudin1108.github.io/game/');
    } else if (gameRev.classList.contains('slide-3') == true) {
        gameRev.classList.add('slide-2');
        gameRev.classList.remove('slide-1');
        gameRev.classList.remove('slide-3');
        gameRev.parentElement.setAttribute('href', 'https://azzudin1108.github.io/portfolio/');
    }
    e.preventDefault();
});