import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const userSchema = new Schema({
  firstName: {
    required: true,
    type:     String,
  }, 
  lastName: {
    required: true,
    type:     String, 
  },
  email: {
    required: true,
    type:     String, 
  },
  password: {
    required: true,
    type:     String, 
  },

  permissionLevel: {
    required: true,
    type:     Number, 
  },
});