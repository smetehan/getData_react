//? ÖDEV 1
import axios from "axios";

const getUsers = (userId) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + userId
    );
    resolve(data);
  });
};

const getPost = (id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts?userId=" + id
    );

    resolve(data);
  });
};
(async () => {
  try {
    const users = await getUsers(1);
    const post = await getPost(1);

    console.log(users);
    console.log(post[0]);
  } catch (e) {
    console.log(e);
  }
})();
export default app;
