import axios from "axios";

export default axios.create({
  baseURL: "https://79903fe17b01.ngrok.io",
  headers: {
    "Content-type": "application/json"
  }
});
