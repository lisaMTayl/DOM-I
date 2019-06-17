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

navLinks.forEach(function (currentValue, index) {
  currentValue.innerHTML = siteContent.nav[`nav-item-${index +1}`];
});


// cta
let ctaText = document.querySelector('h1');
ctaText.textContent = siteContent.cta.h1;

let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent.cta.button;

let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

// Main Content
// Top Content
//Features
let mainContent = document.querySelector('main-content');
mainContent = siteContent["main-content"];

// Top Content
let topContent = document.querySelectorAll('top-content');
topContent = document["topContent"];



// Top Content Headers
let featuresHeader = document.getElementsByTagName('h4')[0];
featuresHeader.textContent = siteContent["main-content"]["features-h4"];
let aboutHeader = document.getElementsByTagName('h4')[1];
aboutHeader.textContent = siteContent["main-content"]["about-h4"];

// Top Content Paragraphs
let featuresText = document.getElementsByTagName('p')[0];
featuresText.textContent = siteContent["main-content"]["features-content"];
let aboutText = document.getElementsByTagName('p')[1];
aboutText.textContent = siteContent["main-content"]["about-content"];

// Middle Image
//let middleImage = document.getElementById('middle-img');
//ctaImage.setAttribute('src', siteContent["main-content"]['middle-img-src']);

// Bottom Content Headers
let servicesHeader = document.getElementsByTagName('h4')[0];
servicesHeader.textContent = siteContent["main-content"]["services-h4"];
let productHeader = document.getElementsByTagName('h4')[1];
productHeader.textContent = siteContent["main-content"]["product-h4"];
let visionHeader = document.getElementsByTagName('h4')[2];
visionHeader.textContent = siteContent["main-content"]["vision-h4"];

// Bottom Content Paragraphs
let servicesText = document.getElementsByTagName('p')[0];
servicesText.textContent = siteContent["main-content"]["services-content"];
let productText = document.getElementsByTagName('p')[1];
productText.textContent = siteContent["main-content"]["product-content"];
let visionText = document.getElementsByTagName('p')[2];
visionText.textContent = siteContent["main-content"]["vision-content"];