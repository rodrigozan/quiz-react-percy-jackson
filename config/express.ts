import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import quizRoutes from "../src/routes";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/quizdb")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log('Not connected :/', err.message));  

// Load routes
app.use("/quiz", quizRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
