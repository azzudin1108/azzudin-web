const score = document.querySelector('.point-score');
const soal = document.querySelectorAll('.soal');
const ekspresi = document.querySelector('#ekspresi');
const tryAgain = document.getElementById('tryAgain');
const nomor = document.getElementById('nomor');


let point = 0;
let noSoal = 1;
score.innerHTML = '<h2>' + point + '</h2>';
nomor.innerHTML = noSoal;

for (let i = 0; i < soal.length; i++) {
    soal[i].addEventListener('click', function (e) {
        if (e.target.getAttribute('type') == 'menu') {
            for (let btnIndex = 0; btnIndex < soal[0].getElementsByTagName('button').length; btnIndex++) {
                soal[i].getElementsByTagName('button')[btnIndex].classList.remove('clicked');
            }
            if (e.target.value == 1) {
                point += 10;
            } else {
                point += 0;
            }
            e.target.classList.add('clicked');
        } else if (e.target.getAttribute('type') == 'submit') {
            if (e.target.parentElement.classList.contains('last')) {
                ekspresi.parentElement.style.display = 'flex';
                if (point <= 30) {
                    ekspresi.innerHTML = 'Silitttt!!!!!'
                } else if (point <= 50) {
                    ekspresi.innerHTML = 'Huuuuu!!!!!';
                } else if (point <= 90) {
                    ekspresi.innerHTML = 'Belajar lagi, dekkkk!!!!!';
                } else {
                    ekspresi.innerHTML = 'Waduh, Tumbennnn!!!!!';
                }
            } else {
                e.target.parentElement.nextElementSibling.style.display = 'flex';
            }
            e.target.parentElement.style.display = 'none';
            score.innerHTML = '<h2>' + point + '</h2>';
            noSoal += 1;
            nomor.innerHTML = noSoal;
            for (let a = 0; a < soal[i].querySelectorAll('button[type=menu]').length; a++) {
                soal[i].querySelectorAll('button[type=menu]')[a].classList.remove('clicked');
            }
        }
    });
}

tryAgain.addEventListener('click', function () {
    soal[0].style.display = 'flex';
    ekspresi.parentElement.style.display = 'none';
    point = 0;
    score.innerHTML = '<h2>' + point + '</h2>';
    noSoal = 1;
    nomor.innerHTML = noSoal;
});