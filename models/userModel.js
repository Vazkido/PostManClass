import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    unique: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("users", userSchema);
export default User;
