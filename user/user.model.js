import mongoose from "mongoose";
import mongoosse from "mongoose";
import { string } from "yup";

//set rule
const usreSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
    maxlength: 30,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
    maxlength: 30,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    maxlength: 60,
    lowercase: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
});

//create table
const User = mongoose.model("User", usreSchema);
export default User;
