const siteContent = {

  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
},
"cta": {
  "h1": "DOM Is Awesome",
      "button": "Get Started",
      "img-src": "img/header-img.png"
},
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
//
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Navigation
const navLinks = document.querySelectorAll('nav a');

// Rename nav links
navLinks.forEach(function (currentValue, index) {
  currentValue.innerHTML= siteContent.nav[`nav-item-${index +1}`];
});

// turn nav links green
navLinks.forEach(function(currentValue, index) {
  currentValue.element = currentValue.style.color = "green";
});

// cta section

let ctaText = document.querySelector('h1');
ctaText.textContent = siteContent.cta.h1;

let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent.cta.button;

let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

// main content
let contHeaders = document.getElementsByTagName('h4');
let contText = document.getElementsByTagName('p');

// top-content
const contBlocks = siteContent['top-content'];
contHeaders[0].textContent = siteContent["main-content"]["features-h4"];
contText[0].textContent = siteContent["main-content"]["features-content"];
contHeaders[1].textContent = siteContent["main-content"]["about-h4"];
contText[1].textContent = siteContent["main-content"]["about-content"];

// middle-image
const middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

