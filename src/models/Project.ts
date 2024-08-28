import mongoose, { Schema } from "mongoose";


const schema= new Schema({
  title : { type: String, required: true },
  description : { type: String, required : true },
  thumbnail : { type: String, required : true },
  technology : { type: [String] },
  github : { type : String },
  livelink : { type : String },
})

export const Project = mongoose.models.Project || mongoose.model('Project', schema)