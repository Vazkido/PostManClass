import USer from "../models/userModel";
import { sendMail } from "../utils/emailFunction";

export const signin = (req, res) => {
  const { email, password } = req.body;
};

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).send("This email is already linked to an account");
    }
    await User.create({ email, password, name });
    sendMail();
    return res.status(200).send("User Created Successfully");
  } catch (error) {
    res.status(500).send(Error.message);
  }
};
export const verifyEmail = async (req, res) => {
  const user = await User.findById(req.params.id);
  try {
    if (!user) {
      return res.status(404).send("User not found");
    }
    console.log(user);

    user.emailVerified = true;
    await user.save();
    res.send("Email verified successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
