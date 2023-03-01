import mongoose from 'mongoose';

const homePageSchema=mongoose.Schema({
    navImage: String,
    title: String,
    hook: String,
    description: String,
    ip:String,
})

let homePage=mongoose.model('HomePage', homePageSchema);
export default homePage;

// user schema
const newUser=mongoose.Schema({
    username: String,
    userPassword: String,
    authKey: String
})
export let users=mongoose.model('user', newUser);