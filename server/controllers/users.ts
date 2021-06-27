import User from "../models/user";
import { Request, Response } from "express";

export const getUser = async (req: Request, res: Response) => {
  try {
    const userDetails = await User.findById(req.params.id);

    res.status(200).json(userDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { body: user } = req;

  const newUser = new User(user);

  try {
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
