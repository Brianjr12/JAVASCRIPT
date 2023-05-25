import { Router } from "express";
import fetch from "node-fetch";
import underscore from "underscore";
const user = Router();
const _ = underscore;

const url = "https://jsonplaceholder.typicode.com/users";
const showUsers = async () => {
  try {
    const response = await fetch(url);
    const usersJson = await response.json();
    return usersJson;
  } catch (error) {
    throw error;
  }
};

user.get("/", async (req, res) => {
  try {
    const users = await showUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
});

export default user;
