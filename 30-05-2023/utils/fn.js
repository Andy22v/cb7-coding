const cE = (element) => document.createElement(element);

export const createPost = (post) => {
  const wrapperEl = cE("div");
  const imgEl = cE("img");
  const postEl = cE("div");
  const nameEl = cE("p");
  const userNameEl = cE("p");
  const textEl = cE("p");
  const reactEl = cE("p");

  wrapperEl.className = "contain-card";
  imgEl.className = "user-img";
  postEl.className = "text-contain";
  nameEl.className = "name-user";
  userNameEl.className = "userNeme";
  textEl.className = "text-post";
  reactEl.className = "react-post";
  const imgPost =
    "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";

  imgEl.src = post.user?.image || imgPost;
  nameEl.textContent = post.user?.firstname || "Pippo";
  userNameEl.textContent = post.user?.username;

  postEl.append(nameEl, userNameEl);
  wrapperEl.append(imgEl, postEl);

  return wrapperEl;
};
