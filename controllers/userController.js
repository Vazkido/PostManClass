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
    sendMail()
    return res.status(200).send("User Created Successfully");
  } catch (error) {
    res.status(500).send(Error.message);
  }
};
