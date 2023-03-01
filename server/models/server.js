import mongoose from 'mongoose';

const serverSchema=mongoose.Schema({
    title: String,
    version: String,
    description: String,
    rules: [String],
    screenshots:[String]
})

let Server=mongoose.model('Server', serverSchema);
export default Server;