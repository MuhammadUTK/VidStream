import connectDB from "./Database/index.js";
import * as dotenv from "dotenv";
import express from "express";

const app = express();

dotenv.config({ path: ".env" });
connectDB().then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running at Port ${process.env.PORT || 8000}`);
  })
}).catch((error) => {
  console.log("MongoDB Connection Failed: src/", error);
})





/*
// Connect Database Approach 1
import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DATABASE_NAME}`)
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    })
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port: ${process.env.PORT}`);
    })
  }
  catch(error) {
    console.error("Error", error);
    throw error;
  }
})()

*/