import {
  cE,
  qS,
  qSA,
  createProduct,
  createModal,
  createCartModal,
  createLoginForm,
} from "./utils/index.js";

// SYNC
export const rootEl = qS(".root");
export const productList = cE("div");
export const productListTitle = cE("h2");
export const searchProductEl = qS(".input-search");
export const navbarEl = qS(".navbar");
export const heroEl = qS(".hero");
export const topProducts = qS(".options-container");
export const cartEl = qS(".btn-cart");
export let productListData = [];
export let cartItems = [];

productList.className = "productList";
productListTitle.textContent = "Products";
navbarEl.style.display = "none";
heroEl.style.display = "none";
topProducts.style.display = "none";
rootEl.append(createLoginForm());

// ASYNC

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    productListData.push(...data.products);

    productListData.forEach((product) => {
      const productCard = createProduct(product);
      productList.append(productCard);

      productCard.addEventListener("click", () => {
        const modal = createModal(product, rootEl);
        rootEl.append(modal);
      });
    });

    searchProductEl.addEventListener("input", (event) => {
      const searchText = event.target.value.toLowerCase();
      const filteredProducts = productListData.filter((product) => {
        return product.title.toLowerCase().includes(searchText);
      });

      productList.textContent = "";

      filteredProducts.forEach((product) => {
        const productCard = createProduct(product);
        productList.append(productCard);

        productCard.addEventListener("click", () => {
          const modal = createModal(product, rootEl);
          rootEl.append(modal);
        });
      });
    });

    // EVENT

    cartEl.addEventListener("click", () => {
      rootEl.append(createCartModal(cartItems, rootEl));
      const cartModal = qS(".cart-modal");

      cartEl.disabled = true;
      cartModal.classList.add("cart-active");
    });
  });

heroEl.append(productListTitle, productList);
rootEl.append(heroEl);
