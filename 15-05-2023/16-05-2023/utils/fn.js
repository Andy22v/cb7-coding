import { cE, formatDescriptionText } from "./index.js";

const productData = [
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: "rating" + 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },
  {
    id: 2,
    title: "iPhone X",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    ],
  },
];

export const topProduct = () => {
  productData.forEach((datas) => {
    const wrapperTopEl = cE("div");
    const textTopEl = cE("div");
    const imgTopEl = cE("img");
    const titleTopEl = cE("h3");
    const descriptionTopEl = "p";
    const ratingTopEl = cE("p");
    const priceTopEl = cE("h4");
    const buttonTopEl = cE("button");

    wrapperTopEl.className = "productCard";
    textTopEl.className = "productCardText";
    buttonTopEl.className = "btn-card";
    imgTopEl.scr = datas.thumbnail;
    imgTopEl.alt = datas.title;
    titleTopEl.textContent = datas.title;
    descriptionTopEl.textContent = formatDescriptionText(datas.description);

    ratingTopEl.textContent = "rating: " + datas.rating + " 🌟";
    priceTopEl.textContent = datas.price + " $";
    buttonTopEl.textContent = "Add to Cart 🛒";
  });
  return wrapperTopEl;
};

topProduct();

textTopEl.append(
  titleTopEl,
  descriptionTopEl,
  ratingTopEl,
  priceTopEl,
  buttonTopEl
);

wrapperTopEl.append(imgTopEl, textTopEl);
