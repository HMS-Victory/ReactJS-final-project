import express from "express";
import mongoose from "mongoose";

import Server from "../models/server.js";
const router = express.Router();

export const showServers = async (req, res) => {
  try {
    const response = await Server.find();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const showServer = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No server with id: ${id}`);

  const response = await Server.findById(id);

  res.status(200).json(response);
};
export const newServer = async (req, res) => {
  const { title, version, description, rules, screenshots } = req.body;
  const newServer = new Server({
    title: title,
    version: version,
    description: description,
    rules: rules,
    screenshots: screenshots,
  });
  try {
    await newServer.save();

    res.status(201).json(newServer);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updateRules = async (req, res) => {
  const { id } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No server with id: ${id}`);
  const  [rules]  = req.body;
  const updatedServer = [ rules ];
  await Server.findByIdAndUpdate(id, updatedServer, { new: true });
  res.json(updatedServer);
};
export const updateServer=async(req,res)=>{
  const {id}=req.params;
  const {title, description, rules, version}=req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
  const updatedServer = { title, description, rules, version, _id: id };

  await Server.findByIdAndUpdate(id, updatedServer, { new: true });
  res.json(updatedServer);
}

export const deleteServer = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Server.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};

export default router;
