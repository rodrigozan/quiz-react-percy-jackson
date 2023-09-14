import dotenv from 'dotenv'
import app from "./config/express";

dotenv.config();

const port = process.env.PORT || 3700;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
