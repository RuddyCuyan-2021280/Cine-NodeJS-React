import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { username, email, password, phone } = req.body;

  try {
    const userFound = await User.findOne({ email });

    if (userFound) return res.status(400).json(["The email is already exists"]);

    const passwordHash = await bcryptjs.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: passwordHash,
      phone,
    });
    const userSave = await newUser.save();
    const token = await createAccessToken({ id: userSave._id });

    res.cookie("token", token);
    res.json({
      id: userSave._id,
      user: userSave.username,
      email: userSave.email,
      phone: userSave.phone,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });

    if (!userFound) return res.status(400).json({ msg: "user not found" });

    const isMatch = await bcryptjs.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json([
         "Incorrect password",
      ]);
    const token = await createAccessToken({ id: userFound._id });

    res.cookie("token", token);
    res.json({
      id: userFound._id,
      user: userFound.username,
      email: userFound.email,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.payload.id);
  console.log(req.user.payload.id);
  if (!userFound) return res.status(404).json({ msg: "User not found" });

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    phone: userFound.phone,
  });
};
