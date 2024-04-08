/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onClick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
/*==================== scroll sections active link ====================*/

/*==================== sticky navbar ====================*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {orgin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .contact-form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});
/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Engineer', 'Backend Engineer', 'Fullstack Engineer'],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
/*const body = document.querySelector('body');
const pic = document.querySelector('personal-portfolio-pic.png');
console.log(body);
const header = document.createElement('header');
header.setAttribute('class', 'header');
body.prepend(header);
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
body.prepend(section);
const contentDiv = document.createElement('div');
contentDiv.setAttribute('class', 'home-content');
section.appendChild(contentDiv);

const hello = document.createElement('h3');
hello.textContent = "Hello, It's Me";
contentDiv.appendChild(hello);

const myName = document.createElement('h1');
myName.textContent = 'Tevin Crite';
contentDiv.appendChild(myName);

const whatIAm = document.createElement('h3');
const job = document.createElement('span');
job.textContent = 'Frontend Engineer';
contentDiv.append(job);
whatIAm.textContent = `And I'm a `;
whatIAm.append(job);
contentDiv.appendChild(whatIAm);

const randomText = document.createElement('p');
randomText.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus aut quos commodi ex dignissimos praesentium enim harum';
contentDiv.appendChild(randomText);

const socialDiv = document.createElement('div');
socialDiv.setAttribute('class', 'social-media');
contentDiv.appendChild(socialDiv);

const facebook = document.createElement('a');
facebook.setAttribute('href', '#');
const fb = document.createElement('i');
fb.setAttribute('class', 'bx bxl-facebook');
facebook.appendChild(fb);
socialDiv.appendChild(facebook);

const twitter = document.createElement('a');
twitter.setAttribute('href', '#');
const tweet = document.createElement('i');
tweet.setAttribute('class', 'bx bxl-twitter');
twitter.appendChild(tweet);
socialDiv.appendChild(twitter);

const instagram = document.createElement('a');
instagram.setAttribute('href', '#');
const insta = document.createElement('i');
insta.setAttribute('class', 'bx bxl-instagram');
instagram.appendChild(insta);
socialDiv.appendChild(instagram);

const linkedIn = document.createElement('a');
linkedIn.setAttribute('href', '#');
const link = document.createElement('i');
link.setAttribute('class', 'bx bxl-linkedin');
linkedIn.appendChild(link);
socialDiv.appendChild(linkedIn);

const btn = document.createElement('a');
btn.setAttribute('href', '#');
btn.setAttribute('class', 'btn');
btn.textContent = 'Download CV';
contentDiv.appendChild(btn);

const imgDiv = documemt.createElement('div');
imgDiv.setAttribute('class', 'home-img');
section.appendChild(imgDiv);

const img = document.createElement('img');
img.src = './images/personal-portfolio-pic.png';

imgDiv.appendChild(img);*/