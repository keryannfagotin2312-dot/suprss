import axios from "axios";

const API_URL = "http://localhost:3000/api"; // backend

export const getUsers = () => axios.get(`${API_URL}/users`);
export const createUser = (user) => axios.post(`${API_URL}/users`, user);

export const getFeeds = () => axios.get(`${API_URL}/feeds`);
export const getFavorites = () => axios.get(`${API_URL}/favorites`);
export const getComments = () => axios.get(`${API_URL}/comments`);


