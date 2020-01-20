import axios from "axios";
const instance = axios.create({
  baseURL: "https://burger-king-db.firebaseio.com/"
});
export default instance;
