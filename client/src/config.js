import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/",
});

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const userRequest = axios.create({
  baseURL: "http://localhost:5000/api/",
  header: { token: `Bearer ${TOKEN}` },
});
