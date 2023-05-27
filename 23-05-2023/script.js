import { cartGen } from "./fn/utils.js";
import { usersList } from "./fn/users.js";

const cE = (el) => document.createElement(el);

const formEl = cE("form");
const loginEl = cE("h1");
const usernameEl = cE("input");
const passwordEl = cE("input");
const submitEl = cE("input");

formEl.className = "login-container";
loginEl.textContent = "Login 👤";
usernameEl.className = "user-input";
usernameEl.type = "text";
usernameEl.placeholder = "Username";
passwordEl.className = "user-name";
passwordEl.type = "password";
passwordEl.placeholder = "password";
submitEl.type = "submit";
submitEl.className = "submit";

formEl.append(loginEl, usernameEl, passwordEl, submitEl);
document.body.append(formEl);

submitEl.addEventListener("click", (e) => {
  e.preventDefault();

  const userId = usersList.find(
    (user) =>
      user.username === usernameEl.value && user.password === passwordEl.value
  );

  if (userId) {
    document.body.textContent = "";

    const userEl = cE("h1");
    const cartListEl = cE("div");

    userEl.textContent = `${userId.username} benvenuto al tuo carrello!`;
    userEl.className = "cart-title";
    cartListEl.className = "cart__cartList";

    fetch(`https://dummyjson.com/carts/${userId.id}`)
      .then((res) => res.json())
      .then((data) =>
        data.products.forEach((product) => cartListEl.append(cartGen(product)))
      )
      .then(() => document.body.append(userEl, cartListEl));
  } else {
    alert("Credenziali non corrette");

    usernameEl.value = "";
    passwordEl.value = "";
  }
});
