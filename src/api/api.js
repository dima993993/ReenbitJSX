import axios from "axios";

export const messageAPI = () =>
  axios
    .get("https://api.chucknorris.io/jokes/random")
    .then((response) => response.data);
