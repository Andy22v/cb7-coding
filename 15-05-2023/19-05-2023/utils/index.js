import {
  cartItems,
  rootEl,
  cartEl,
  navbarEl,
  heroEl,
  topProducts,
  productListTitle,
  productList,
} from "../script.js";
import { usersList } from "./usersProfile.js";

export const cE = (el) => document.createElement(el);

export const qS = (el) => document.querySelector(el);

export const qSA = (els) => document.querySelectorAll(els);

export const formatDescriptionText = (str) =>
  str.split(" ").splice(0, 5).join(" ") + " ...";

//   function card
export const createProduct = (data) => {
  const wrapperEl = cE("div");
  const textWrapperEl = cE("div");
  const imageEl = cE("img");
  const titleEl = cE("h3");
  const descriptionEl = cE("p");
  const ratingEl = cE("p");
  const priceEl = cE("h4");
  const buttonEl = cE("button");

  wrapperEl.className = "productCard";
  wrapperEl.setAttribute("id", data.id);
  textWrapperEl.className = "productCardText";
  buttonEl.className = "btn-card";
  imageEl.src = data.thumbnail;
  imageEl.alt = data.title;
  titleEl.textContent = data.title;
  descriptionEl.textContent = formatDescriptionText(data.description);
  ratingEl.textContent = "rating: " + data.rating + " 🌟";
  priceEl.textContent = data.price + " $";
  buttonEl.textContent = "Add to Cart 🛒";

  textWrapperEl.append(titleEl, descriptionEl, ratingEl, priceEl, buttonEl);

  wrapperEl.append(imageEl, textWrapperEl);

  return wrapperEl;
};

//   function modal

export const createModal = (product, parent = null) => {
  const wrapperEl = cE("div");
  const overlayEl = cE("div");
  const galleryModEl = cE("div");
  const imgModalEl = cE("img");
  const textContainlEl = cE("div");
  const textModalEl = cE("div");
  const titleModalEl = cE("h1");
  const descModalEl = cE("p");
  const rateModalEl = cE("p");
  const buyModalEl = cE("div");
  const buyBtnlEl = cE("button");
  const cancBtnlEl = cE("button");

  wrapperEl.className = "modal-container";
  overlayEl.className = "modal-overlay";
  galleryModEl.className = "modal-gallery";
  imgModalEl.className = "img-modal";
  imgModalEl.src = product.thumbnail;
  imgModalEl.alt = product.title;

  textContainlEl.className = "text-container";
  textModalEl.className = "text-modal";
  titleModalEl.textContent = product.title;
  descModalEl.textContent = product.description;
  rateModalEl.textContent = product.rating;

  buyModalEl.className = "btn-contain";
  buyBtnlEl.textContent = "Buy";
  cancBtnlEl.textContent = "X";

  buyModalEl.append(buyBtnlEl, cancBtnlEl);
  textModalEl.append(titleModalEl, descModalEl, rateModalEl);
  textContainlEl.append(textModalEl, buyModalEl);
  galleryModEl.append(imgModalEl);
  wrapperEl.append(overlayEl, galleryModEl, textContainlEl);

  if (parent) {
    cancBtnlEl.addEventListener("click", () => parent.removeChild(wrapperEl));
  }

  buyBtnlEl.addEventListener("click", () => {
    alert("Add to cart!");
    cartItems.push(product);
    parent.removeChild(wrapperEl);

    if (cartItems.length >= 1) {
      cartEl.classList.add("itemsInCart");
    }
  });

  return wrapperEl;
};

// Cart modal

export const createCartModal = (parent = null) => {
  const wrapperEl = cE("div");
  const totalItemsEl = cE("h2");
  const priceEl = cE("p");
  const closeBtnEl = cE("button");

  wrapperEl.className = "cart-modal";
  totalItemsEl.textContent = `Product on cart: ${cartItems.length}`;
  closeBtnEl.className = "close-cart";
  closeBtnEl.textContent = "X";
  priceEl.textContent = `Total: ${cartItems.reduce(
    (acc, item) => acc + item.price,
    0
  )}`;

  closeBtnEl.addEventListener("click", () => {
    wrapperEl.parentNode.removeChild(wrapperEl);
    cartEl.disabled = false;
  });

  cartItems.forEach((item) => {
    wrapperEl.append(createProduct(item));
  });

  wrapperEl.append(closeBtnEl, totalItemsEl, priceEl);

  return wrapperEl;
};

// Login Form

export const createLoginForm = () => {
  const wrapperEl = cE("form");
  const usernameEl = cE("input");
  const passwordEl = cE("input");
  const submitEl = cE("input");

  wrapperEl.className = "login-container";
  usernameEl.className = "user-input";
  usernameEl.type = "text";
  usernameEl.placeholder = "Username";
  passwordEl.className = "user-name";
  passwordEl.type = "password";
  passwordEl.placeholder = "password";
  submitEl.type = "submit";

  wrapperEl.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Forn send");
    console.log("username:", event.srcElement[0].value);
    console.log("password:", event.srcElement[1].value);
    if (
      usersList.find(
        (user) =>
          user.username === event.srcElement[0].value &&
          user.password === event.srcElement[1].value
      )
    ) {
      navbarEl.style.display = "flex";
      heroEl.style.display = "flex";
      topProducts.style.display = "flex";
      rootEl.append(productListTitle, productList);
      rootEl.removeChild(wrapperEl);
    } else alert("username or passwoerd is wrong");
  });
  wrapperEl.append(usernameEl, passwordEl, submitEl);

  return wrapperEl;
};
