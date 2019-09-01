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

// Helper functions:

// use query selector to update DOM from siteContent object
function textUpdate(target, newStr) {
  document.querySelector(target).textContent = newStr;
  newStr = siteContent.cta[newStr];
}

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// 1. update navbar content

const navItems = document.querySelectorAll('nav a');

const navContent = Object.values(siteContent.nav);

navContent.pop();

for (let i = 0; i < navItems.length; i++) {
  navItems[i].textContent = navContent[i];
}

// 2. update cta section


document.querySelector('.cta-text h1').textContent = siteContent.cta["h1"];
document.querySelector('.cta-text button').textContent = siteContent.cta["button"];
document.querySelector("#cta-img").setAttribute("src", siteContent.cta["img-src"]);

//3. update main content section

document.querySelector('.text-content h4').textContent = siteContent["main-content"]["features-h4"];
document.querySelector('.text-content p').textContent = siteContent["main-content"]["features-content"];

textContentClassElements = document.getElementsByClassName("text-content");

textContentClassElements[1].querySelector('h4').textContent = siteContent["main-content"]["about-h4"];
textContentClassElements[1].querySelector('p').textContent = siteContent["main-content"]["about-content"];

document.querySelector('#middle-img').setAttribute("src", siteContent["main-content"]["middle-img-src"]);

textContentClassElements[2].querySelector('h4').textContent = siteContent["main-content"]["services-h4"];
textContentClassElements[2].querySelector('p').textContent = siteContent["main-content"]["services-content"];
textContentClassElements[3].querySelector('h4').textContent = siteContent["main-content"]["product-h4"];
textContentClassElements[3].querySelector('p').textContent = siteContent["main-content"]["product-content"];
textContentClassElements[4].querySelector('h4').textContent = siteContent["main-content"]["vision-h4"];
textContentClassElements[4].querySelector('p').textContent = siteContent["main-content"]["vision-content"];

// 4. update contact section

contactSectionElements = document.getElementsByClassName('contact')[0].children;

contactSectionElements[0].textContent = siteContent["contact"]["contact-h4"];
contactSectionElements[1].textContent = siteContent["contact"]["address"];
contactSectionElements[2].textContent = siteContent["contact"]["phone"];
contactSectionElements[2].textContent = siteContent["contact"]["email"];