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
  currentValue.innerHTML= siteContent.nav[`nav-item-${index +1}`];
});
// navLinks[0].textContent = `Services`;
// navLinks[1].textContent = `Product`;
// navLinks[2].textContent = `Vision`;
// navLinks[3].textContent = `Features`;
// navLinks[4].textContent = `About`;
// navLinks[5].textContent = `Contact`;
//

// let navBlog = document.createElement("nav");
// navBlog.href = `#`;
// navBlog.textContent = `Blog`;
//navLinks.prepend(navBlog);


// let navFaq = document.createElement("nav");
// navFaq.href = `#`;
// navFaq.textContent = "FAQ";
const addLink = document.querySelector('nav');

const navFaqLink = document.createElement('a');
navFaqLink.textContent = 'FAQ';
navFaqLink.href = '#';
navFaqLink.style.color = 'green';
addLink.appendChild(navFaqLink);

const navBlogLink = document.createElement('a');
navBlogLink.textContent = 'Blog';
navBlogLink.style.color = 'green';
addLink.prepend(navBlogLink);

// turn nav links green
navLinks.forEach(function(currentValue) {
  currentValue.element = currentValue.style.color = "green";
});


// cta section
const ctaText = document.querySelector('h1');

// formatted h1 for line breaks
ctaText.textContent = `DOM\r\nIs\r\nAwesome`;
ctaText.setAttribute('style', 'white-space: pre-line');
//ctaText.textContent = siteContent.cta.h1;

const ctaBtn = document.querySelector('button');
ctaBtn.textContent = siteContent.cta.button;

const ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

// main content
const contentH4 = document.getElementsByTagName('h4');
const contentP = document.getElementsByTagName('p');

// top-content
// features
contentH4[0].textContent = siteContent["main-content"]["features-h4"];
contentP[0].textContent = siteContent["main-content"]["features-content"];

// about
contentH4[1].textContent = siteContent["main-content"]["about-h4"];
contentP[1].textContent = siteContent["main-content"]["about-content"];

// services
contentH4[2].textContent = siteContent["main-content"]["services-h4"];
contentP[2].textContent = siteContent["main-content"]["services-content"];

// product
contentH4[3].textContent = siteContent["main-content"]["product-h4"];
contentP[3].textContent = siteContent["main-content"]["product-content"];

// vision
contentH4[4].textContent = siteContent["main-content"]["vision-h4"];
contentP[4].textContent = siteContent["main-content"]["vision-content"];

// middle-image
const middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// contact
contentH4[5].textContent = siteContent["contact"]["contact-h4"];
contentP[5].textContent = `123 Way 456 Street\r\nSomewhere, USA`; // to force line breaks
contentP[5].setAttribute('style', 'white-space: pre-line'); // to force line breaks
//contentP[5].textContent = siteContent["contact"]["address"];
contentP[6].textContent = siteContent["contact"]["phone"];
contentP[7].textContent = siteContent["contact"]["email"];


// footer
let footerTxt = document.querySelector("footer");
footerTxt.textContent= siteContent["footer"]["copyright"];