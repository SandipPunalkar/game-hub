import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "89e63b3ab37c41f78207cd871bc281ab",
  },
});
