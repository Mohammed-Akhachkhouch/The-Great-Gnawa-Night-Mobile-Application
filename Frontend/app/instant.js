import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.11.108:5000/api", 
});

export default api;

