import Backlog from "../models/backlog";
import { Request, Response } from "express";

export const getBacklogs = async (req: Request, res: Response) => {
  try {
    const backlogs = await Backlog.find();

    res.status(200).json(backlogs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createBacklog = async (req: Request, res: Response) => {
  const { body: backlog } = req;

  const newBacklog = new Backlog(backlog);

  try {
    await newBacklog.save();

    res.status(201).json(newBacklog);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
