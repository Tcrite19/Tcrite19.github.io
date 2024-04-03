/*==================== toggle icon navbar ====================*/
/*==================== scroll sections active link ====================*/

/*==================== sticky navbar ====================*/
/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/

/*==================== scroll reveal ====================*/
/*==================== typed js ====================*/
const body = document.querySelector('body');
console.log(body);
const header = document.createElement('header');
header.setAttribute('class', 'header');
body.appendChild(header);
const logo = document.createElement('a');
logo.setAttribute('class', 'logo');
logo.setAttribute('href', '#');
logo.textContent = 'Portfolio';
header.appendChild(logo);
const menuIcon = document.createElement('i');
menuIcon.setAttribute('class', 'bx bx-menu');
menuIcon.setAttribute('id', 'menu-icon');
header.appendChild(menuIcon);
const navbar = document.createElement('nav');
navbar.setAttribute('class', 'navbar');
header.appendChild(navbar);
const home = document.createElement('a');
home.setAttribute('href', '#home');
home.setAttribute('class', 'active');
home.textContent = 'Home';
navbar.appendChild(home);
const about = document.createElement('a');
about.setAttribute('href', '#about');
about.textContent = 'About';
navbar.appendChild(about);
const services = document.createElement('a');
services.setAttribute('href', '#services');
services.textContent = 'Services';
navbar.appendChild(services);
const portfolio = document.createElement('a');
portfolio.setAttribute('href', '#portfolio');
portfolio.textContent = 'Portfolio'
navbar.appendChild(portfolio);
const contact = document.createElement('a');
contact.setAttribute('href', '#contact');
contact.textContent = 'Contact';
navbar.appendChild(contact);
console.log(header);

const section = document.createElement('section');
section.setAttribute('class', 'home');
section.setAttribute('id', 'home');
body.appendChild(section);
const contentDiv = document.createElement('div');

const hello = document.createElement('h3');

const name = document.createElement('h1');

const whatIAm = document.createElement('h3');
const job = document.createElement('span');

const randomText = document.createElement('p');

const socialDiv = document.createElement('div');

const = document.createElement('a');