import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-e91be.firebaseio.com/"
});

export default instance;
