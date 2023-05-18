import {
  cE,
  qS,
  createProduct,
  qSA,
  createModal,
  createCartModal,
} from "./utils/index.js";

const rootEl = qS(".root");
const productList = cE("div");
const productListTitle = cE("h2");
const searchProductEl = qS(".input-search");
export const cartEl = qS(".btn-cart");
let productListData = [];
export let cartItems = [];

productList.className = "productList";
productListTitle.textContent = "Products";

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

    cartEl.addEventListener("click", () => {
      rootEl.append(createCartModal(cartItems, rootEl));
      const cartModal = qS(".cart-modal");

      cartEl.disabled = true;
      cartModal.classList.add("cart-active");
    });
  });

rootEl.append(productListTitle, productList);
