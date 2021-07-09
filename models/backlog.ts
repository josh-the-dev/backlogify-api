import { Schema, model } from "mongoose";

export interface Backlog {
  name: string;
  user: string;
}

export const backlogSchema = new Schema<Backlog>({
  name: { type: String, required: true },
  user: { type: String, requred: true },
});

const BacklogModel = model<Backlog>("Backlog", backlogSchema);

export default BacklogModel;
