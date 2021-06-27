import { Schema, model, connect } from "mongoose";

interface Backlog {
  name: string;
}

const backlogSchema = new Schema<Backlog>({
  name: { type: String, required: true },
});

const BacklogModel = model<Backlog>("Backlog", backlogSchema);

export default BacklogModel;
