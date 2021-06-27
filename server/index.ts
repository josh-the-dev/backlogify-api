import path from "path";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import backlogRoutes from "./routes/backlogs";
import { config } from "dotenv";
// Run dotenv/config
config();

const app = express();
const router = express.Router();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.json());
app.use(cors());

const CONNECTION_URL = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASS}@cluster0.53pl0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 3001;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((error) => {
    console.log(error.message);
  });

mongoose.set("useFindAndModify", false);

app.use("/backlogs", backlogRoutes);

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
