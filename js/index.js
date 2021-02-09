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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let theNav = document.querySelector("nav")
let last = document.createElement("a")
let first = document.createElement("a")

last.setAttribute("href", "#")
first.setAttribute("href", "#")
theNav.appendChild(last)
theNav.prepend(first)


let theNavA = document.querySelectorAll("nav a")
theNavA.forEach( (item,index )=> {
  item.innerText = siteContent["nav"][Object.keys(siteContent["nav"])[index - 1]]
  item.style.color = "green"
})

last.innerText = "Hula Hoops"
first.innerText = "No hoops"



let theHeader = document.querySelector("h1")
theHeader.textContent = siteContent["cta"]["h1"]

let ctaImg = document.querySelector(".cta img")
ctaImg.setAttribute("src", siteContent["cta"]["img-src"])

let ctaButton = document.querySelector("button")
ctaButton.innerText = siteContent["cta"]["button"]

let mainContent = Object.entries(siteContent["main-content"])
let bottomTopH4 = document.querySelectorAll(".main-content h4")
let bottomTopContent = document.querySelectorAll(".main-content p")
let middleImg = document.querySelector(".main-content img")
let mainContentH4 = []
let theMainContent = []

mainContent.forEach( (item) => {
  item[0].includes("h4") ? mainContentH4.push(item[1]) : item[0].includes("content") ? theMainContent.push(item[1]) : null
})

bottomTopH4.forEach((item, index) => {
  item.innerText = mainContentH4[index]
})
bottomTopContent.forEach((item,index) => {
  item.innerText = theMainContent[index]
})

middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"])

let contactH4 = document.querySelector(".contact h4")
contactH4.innerText = siteContent["contact"]["contact-h4"]

let contactP = document.querySelectorAll(".contact p")
contactP.forEach((item, index) => {
  item.innerText = Object.values(siteContent["contact"])[index+1]
})

let footerP = document.querySelector("footer p")
footerP.innerText = siteContent["footer"]["copyright"]


