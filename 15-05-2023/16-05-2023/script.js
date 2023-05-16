import { cE, qS, createProduct, qSA, createModal } from "./utils/index.js";

const rootEl = qS(".root");
const productList = cE("div");
const productListTitle = cE("h2");

productList.className = "productList";
productListTitle.textContent = "Products";

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.products.forEach((product) =>
      productList.append(createProduct(product))
    );
  })
  .then(() => {
    const modalCardEls = qSA(".productCard");

    modalCardEls.forEach((product) =>
      product.addEventListener("click", () =>
        fetch(`https://dummyjson.com/products/${product.id}`)
          .then((res) => res.json())
          .then((data) => rootEl.append(createModal(data, rootEl)))
      )
    );
  });

rootEl.append(productListTitle, productList);
