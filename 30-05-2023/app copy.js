import { createPost } from "./utils/fn";
import { GET } from "./utils/http.js";

const postBodyEl = document.querySelector(".post-contain");

const postDatas = async () => {
  const postList = await GET("/posts");

  const userList = await GET("/users");

  const newList = [];

  Object.values(postList).map((post) => {
    const users = Object.values(userList).find(
      (user) => user.id === post.userId
    );
    newList.push({ ...post, ...users });
    console.log(newList);

    newList.forEach((data) => console.log(data));
  });
};

postDatas().then((data) => {
  data.forEach((post) => {
    const postEl = createPost(Object.values(post));
    postBodyEl.append(postEl);
  });
});
