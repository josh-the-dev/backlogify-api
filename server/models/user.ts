import { Schema, model, connect } from "mongoose";
import { Backlog, backlogSchema } from "./backlog";

interface User {
  name: string;
  backlogs: Backlog[];
}

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  backlogs: [backlogSchema],
});

const UserModel = model<User>("User", userSchema);

export default UserModel;
