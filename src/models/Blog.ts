import mongoose, { Schema } from "mongoose";


const schema= new Schema({
  title : { type: String, required: true },
  description : { type: String, required : true },
  thumbnail : { type: String },

}, {timestamps : true})

export const Blog = mongoose.models.Blog || mongoose.model('Blog', schema)