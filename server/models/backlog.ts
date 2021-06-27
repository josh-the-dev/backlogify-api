import { Schema, model, connect } from "mongoose";

export interface Backlog {
  name: string;
}

export const backlogSchema = new Schema<Backlog>({
  name: { type: String, required: true },
});

const BacklogModel = model<Backlog>("Backlog", backlogSchema);

export default BacklogModel;
