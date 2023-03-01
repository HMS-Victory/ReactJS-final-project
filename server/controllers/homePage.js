import express from "express";
import mongoose from "mongoose";

import homePage, { users } from "../models/homePage.js";
const router = express.Router();
export const fetchHomePage = async (req, res) => {
  try {
    const response = await homePage.find();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const updateHomePage = async (req, res) => {
  const { title, hook, ip, description, id} = req.body;

  const updatePage = { title:title, hook:hook, ip:ip, description:description, id:id };

  await homePage.findByIdAndUpdate( id,updatePage, { new: true });
  res.json(updatePage);
};

export const signIn = async (req, res) => {
  try {
    const { username, password } = req.params;
    const response = await users.find();
    
      response.map((user) => {
        if (user.userPassword === password && user.username === username) {
          res.status(200).json({
            loggedIn: true,
            authKey: user.authKey,
          });
        }
      })
      
  } catch (error) {
    res.send(error.message);
  }
};

export default router;
