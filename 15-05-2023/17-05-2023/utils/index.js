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

  return wrapperEl;
};
