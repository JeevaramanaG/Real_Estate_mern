import bcrypt from "bcrypt";
import User from "../models/user.model";

const UserRegister = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Email already in use" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    username,
    email,
    password: hashedPassword,
  });
  await user.save();
  res.json({ message: "User created successfully" });
};

export default { UserRegister };
