const content = document.querySelector('#content');
const container = content.querySelector('.container');
const selection = container.getElementsByTagName('button');

let sayang = true;

function del() {
    selection[1].classList.remove('clicked');
    selection[0].classList.add('clicked');
}

function del2() {
    content.getElementsByTagName('button')[2].classList.remove('clicked');
}

function dNone() {
    document.querySelector('.hore').style.display = 'none';
}

container.addEventListener('click', function (e) {
    for (let i = 0; i < selection.length; i++) {
        selection[i].classList.remove('clicked');
    }
    if (e.target.getAttribute('type') == 'menu') {
        if (e.target.value == 1) {
            selection[1].classList.add('clicked');
            setInterval(del, 1000);
        } else {
            e.target.classList.add('clicked');
        }
    }
    return sayang = true;
});

content.addEventListener('click', function (e) {
    if (e.target.getAttribute('type') == 'submit') {
        e.target.classList.add('clicked');
        setInterval(del2, 1000);
        document.querySelector('.hore').style.display = 'flex';
        setInterval(dNone, 1000);
    }
});