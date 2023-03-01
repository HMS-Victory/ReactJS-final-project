import mongoose from 'mongoose';
import express from 'express';
import Server from '../models/server.js';
const router=express.Router();

export const showScreenshots=async(req,res)=>{
    try{
        const Servers=await Server.find();

        res.status(200).json(Servers);
    }catch(error){
        res.status(404).json({message: error});
    }
}
export const newScreenshot=async(req,res)=>{
    const {id}=req.params;
    const {screenshots}=req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No server with id: ${id}`);
    const updatedServer={screenshots}=req.body;

    await Server.findByIdAndUpdate(id, updatedServer, {new:true});

    res.json(updatedServer);
}
export const deleteScreenshot=async()=>{
    const {id}=req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Server.findByIdAndUpdate(id, );
}
export default router;