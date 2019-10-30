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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//header
let nav = document.querySelectorAll('a');
let nav_info = Object.values(siteContent.nav);//converts nav into an array so i can get the value using the index allowing me to do it all in one for loop.
for(i = 0; i < nav.length; i++){
  nav[i].textContent = nav_info[i];
  nav[i].style.color = "green"; 
}

//main
let main = document.querySelector(".cta-text").children;
let main_info = Object.values(siteContent.cta);
for(i = 0; i < main.length; i++){
  if(main_info[i] === siteContent.cta.h1){
    main[i].innerHTML = "DOM <br /> Is <br /> Awesome";
  }//this is to fix the text break seen in the origional but not done in the index
  else{
    main[i].textContent = main_info[i];
  }
}
let main_logo = document.getElementById("cta-img");
main_logo.setAttribute("src", siteContent.cta["img-src"]);

//content/info
let content = document.querySelectorAll(".main-content > div > div > h4, .main-content > div > div > p, .main-content > img");
let info = Object.values(siteContent["main-content"]);
for(i = 0; i < content.length; i++){
  if(content[i].tagName.toLocaleLowerCase() === "img"){
    content[i].setAttribute("src", info[i]);
  }
  else{
    content[i].textContent = info[i];
  }
}

//contact
let contact = document.querySelector(".contact").children;
let contact_info = Object.values(siteContent.contact);
for(i = 0; i < contact.length; i++){
  if(contact_info[i] === siteContent.contact.address){
    contact[i].innerHTML = "123 Way 456 Street <br /> Somewhere, USA"
  } //this is to fix the text break seen in the origional but not done in the index
  else{
    contact[i].textContent = contact_info[i];
  }
}
let testing = document.getElementsByClassName("main-content");
console.log(testing);
//footer
document.querySelector("footer > p").textContent = siteContent.footer.copyright;

//appending
let navbar = document.querySelector("nav");

let new_link = document.createElement('a');
let text_node = document.createTextNode("Append");


let new_link2 = document.createElement('a');
let text_node2 = document.createTextNode("Prepend");

new_link.style.color = "green";
new_link2.style.color = "green";
new_link.href = "#";
new_link2.href ="#";

new_link.appendChild(text_node);
new_link2.appendChild(text_node2);

navbar.appendChild(new_link);
navbar.prepend(new_link2);