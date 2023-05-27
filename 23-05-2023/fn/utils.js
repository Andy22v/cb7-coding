// import { GET } from "./http.js";
// import { productData } from "../script.js";
const cE = (el) => document.createElement(el);

export const cartGen = (product) => {
  console.log(product);
  const wrapperEl = cE("div");
  const titleEl = cE("h3");
  const quantEl = cE("p");
  const priceEl = cE("h4");

  wrapperEl.className = "cart";
  quantEl.className = "quant-cart";
  titleEl.className = "title";
  priceEl.className = "price";
  quantEl.textContent = "Quantity: " + product.quantity;
  titleEl.textContent = product.title;
  priceEl.textContent = product.price + " $";

  wrapperEl.append(titleEl, quantEl, priceEl);

  return wrapperEl;
};
