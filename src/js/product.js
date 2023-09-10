// header
const header = document.querySelector("header");
let lastPosition = 60;

document.addEventListener("scroll", (e) => {
  const newPosition = window.scrollY;

  if (lastPosition < newPosition) {
    header.style.transform = "translateY(-65px)";
  } else {
    header.style.transform = "translateY(0px)";
  }

  lastPosition = newPosition <= 60 ? 60 : newPosition;
});

// path
const dummyPath = new URL(
  "/all-products/haircare/restorative-hair-mask",
  window.location.origin
);

const locationElement = document.getElementById("location");

const currentLocationArray = dummyPath.pathname.slice(1).split("/");
let currentLocation = "";

currentLocationArray.forEach((p) => {
  const loaction = p.replaceAll("-", " ");
  currentLocation += `/<a class="location-part" href="#">${loaction}</a>`;
});

locationElement.innerHTML = currentLocation.slice(1);

// menu icon
let menuActive = false;
const menu = document.getElementById("categories-icon");

function toggleMenu() {
  if (menuActive) {
    menu.classList.remove("menu-active");
  } else {
    menu.classList.add("menu-active");
  }
  menuActive = !menuActive;
}

menu.addEventListener("click", toggleMenu);

document.addEventListener("mousedown", (e) => {
  e.stopPropagation();
  if (!menu.contains(e.target) && menuActive) {
    toggleMenu();
  }
});

// search icon
let searchActive = false;
const search = document.getElementById("search");

function toggleSearch() {
  if (!searchActive) {
    search.classList.add("search-active");
    setTimeout(() => search.classList.remove("search-active"), 600);
  }
  menuActive = !menuActive;
}

search.addEventListener("click", toggleSearch);

// form
const buyingForm = document.getElementById("buying-details");
const buyingOptions = document.getElementsByClassName("radio");
const buyingLabels = document.getElementsByClassName("buying-labels");
const quantityInput = document.getElementById("quantity-input");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const button = document.getElementById("add");
const bag = document.getElementById("items");
let quantity = 1;

buyingForm.addEventListener("change", () => {
  if (buyingForm["buying-option"].value !== buyingOptions[0].value) {
    buyingLabels[0].classList.add("unselected");
    buyingLabels[1].classList.remove("unselected");
  } else {
    buyingLabels[0].classList.remove("unselected");
    buyingLabels[1].classList.add("unselected");
  }
});

minus.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    quantityInput.value = quantity;
  }
});

plus.addEventListener("click", () => {
  if (quantity < 999) {
    quantity++;
    quantityInput.value = quantity;
  }
});

quantityInput.addEventListener("change", () => {
  quantity = Number(quantityInput.value);
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.classList.add("button-flip");
  e.target.innerText = "Added";
  const previousCount = Number(bag.innerText);
  bag.innerText = previousCount + quantity > 99 ? 99 : previousCount + quantity;
  setTimeout(() => {
    e.target.classList.remove("button-flip");
  }, 1000);
  setTimeout(() => {
    e.target.innerText = "Add to cart";
    quantity = 1;
    quantityInput.value = quantity;
  }, 400);
});

// ingredients
const sections = document.querySelectorAll(".ingredients");

sections.forEach((s) => {
  const classes = s.classList;
  s.children[2].addEventListener("click", () => {
    if (classes.contains("expanded")) {
      s.classList.remove("expanded");
      s.children[2].innerText = "+";
    } else {
      s.classList.add("expanded");
      s.children[2].innerText = "-";
    }
  });
});

// carusel
const leftArrow = document.getElementById("slide-left");
const rightArrow = document.getElementById("slide-right");
const carousel = document.getElementById("products-carousel");
const viewport = document.getElementById("carousel-viewport");
const deviceWidth = window.innerWidth;
const condition = 3;
const width =
  deviceWidth > 700 ? viewport.offsetWidth / 3 : viewport.offsetWidth;
let position = 0;

leftArrow.addEventListener("click", () => {
  if (position === 0) {
    position = condition;
    carousel.style.transform = `translateX(${position * -width}px)`;
  } else {
    position--;
    carousel.style.transform = `translateX(${position * -width}px)`;
  }
});

rightArrow.addEventListener("click", () => {
  if (position === condition) {
    position = 0;
    carousel.style.transform = `translateX(${position * width}px)`;
  } else {
    position++;
    carousel.style.transform = `translateX(${position * -width}px)`;
  }
});
