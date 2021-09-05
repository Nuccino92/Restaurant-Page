function createHome() {
    const home = document.createElement('div');
    home.innerText = 'DSALPJASDKJDASKASDJK';

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('inside-restaurant-img');

    home.appendChild(imgContainer);

    return home;
}

function loadHome() {
    const main = document.getElementById('main');

    main.appendChild(createHome());
}

export default loadHome;