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

// Header

// Navigation
let headerNavigation = document.querySelectorAll("header nav a")
headerNavigation.forEach((item, index) => item.innerText = siteContent["nav"][`nav-item-${index + 1}`])

// TODO
// let newNavigation = document.querySelector("header nav")
// newNavigation.appendChild()

// Logo Image
let logo = document.getElementById("logo-img")
logo.setAttribute("src", siteContent["nav"]["img-src"])

// Call to Action

let ctaHeading = document.querySelector(".cta-text h1")
ctaHeading.innerText = siteContent["cta"]["h1"]

let ctaButton = document.querySelector(".cta-text button")
ctaButton.innerText = siteContent["cta"]["button"]

// CTA Header Image
let ctaHeaderImage = document.getElementById("cta-img")
ctaHeaderImage.setAttribute("src", siteContent["cta"]["img-src"])

// Main Content
const contentMapper = ["features", "about", "product", "services", "vision"]

let mainHeadings = document.querySelectorAll(".text-content h4")
mainHeadings.forEach((item, index) => item.innerText = siteContent["main-content"][`${contentMapper[index]}-h4`])

let textContent = document.querySelectorAll(".text-content p")
textContent.forEach((item, index) => item.innerText = siteContent["main-content"][`${contentMapper[index]}-content`])

// Middle Image
let middleImage = document.getElementById("middle-img")
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"])

// Contact
// TODO

// Footer
let footerCopyright = document.querySelector("footer p")
footerCopyright.innerText = siteContent["footer"]["copyright"]
