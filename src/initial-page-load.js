import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');
    header.textContent = 'Restaurante!';

    header.appendChild(createNav());
    return header;
}

function createNav() {
    const nav = document.createElement('nav');

    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-button');
    homeButton.id = 'home-button'
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveButton(homeButton);
        loadHome();
    })


    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button');
    menuButton.id = 'menu-button'
    menuButton.textContent = 'Menu';


    const contactButton = document.createElement('button');
    contactButton.classList.add('nav-button');
    contactButton.id = 'contact-button'
    contactButton.textContent = 'Contact';


    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);
    
    return nav;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.textContent = 'est 1987';

    return footer;
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');

    return main;
}

function appendPage() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    loadHome();
}

export default appendPage;