import { cE, qS, createProduct, qSA, createModal } from "./utils/index.js";

const rootEl = qS(".root");
const productList = cE("div");
const productListTitle = cE("h2");
const searchProductEl = qS(".input-search");
let productListData = [];

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
  });

rootEl.append(productListTitle, productList);
