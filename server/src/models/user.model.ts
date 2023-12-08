import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/user.interface.ts";

const userSchema = new Schema<IUser>({
    
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: false,
  },
},
{
    timestamps:true
}
);

export const User = model<IUser>("User", userSchema)

