import { createPost } from "./utils/fn.js";
import { GET } from "./utils/http.js";

const postBodyEl = document.querySelector(".post-contain");
let userList = [];
let postList = [];

const dataList = Promise.all([GET("/posts"), GET("/users")]);

dataList
  .then((data) => {
    postList = data[0].posts;
    userList = data[1].users;
  })
  .then(() => {
    postList
      .map((post) => {
        post.user = userList.find((user) => user.id === post.userId);
        return post;
      })
      .forEach((post) => postBodyEl.append(createPost(post)));
  });
