// Function to make collapsible menu work
function burgerList() {
  let x = document.getElementById("navbar__list");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Global variables. Their name is self explanatory
const mainHead = document.querySelector("head");

const navList = document.querySelector("#navbar__list");

const sections = document.querySelectorAll("section");

let bigList = document.querySelector("ul");

let listItem;

let links;

// For loop to add list and anchor tags 
for (let i = 0; i < sections.length; i++) {
  listItem = document.createElement("li");
  bigList.append(listItem);
  links = `<a href="#section${i + 1}">section ${i + 1}</a>`;
  listItem.insertAdjacentHTML("beforeend", links);
}

let anchors = document.querySelectorAll("a");
let list = document.querySelectorAll("li");

for (let i = 0; i < anchors.length; i++) {
  anchors[i].classList.add("menu__link");
}

// Adds the collapsible menu button the document
const burger = `<li><a href="javascript:void(0);" class="icon" onclick="burgerList()">&#9776;</a></li>`;
bigList.insertAdjacentHTML("beforeend", burger);


let mainNavLinks = document.querySelectorAll(".page-link");
let mainSections = document.querySelectorAll("main section");

// Sets the active section and nav bar button
window.addEventListener("scroll", event => {
  let fromTop = window.scrollY - 50;

  for (let i = 0; i < sections.length; i++) {
    if (sections[i].offsetTop <= fromTop + 70 &&
      sections[i].offsetTop + sections[i].offsetHeight > fromTop + 70) {
      sections[i].classList.add("active");
      list[i].classList.add("act");
    } else {
      sections[i].classList.remove("active");
      list[i].classList.remove("act")
    }
  }
})

// Scroll smoothly to the section instead of showing it immeditley. using "JS" this time ;)
anchors.forEach(function scroll(anchor, i) {
  anchor.addEventListener('click', event => {
    sections[i].scrollIntoView({ behavior: "smooth" });
    event.preventDefault();
  })
})
