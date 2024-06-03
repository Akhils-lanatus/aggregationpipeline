import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();

app.use(cors());
app.use(express.json());

(async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb+srv://akhil1911:akhil1911@cluster0.hqail73.mongodb.net/aggregationpipeline`
    );
    console.log(
      `\n DB connected !! DB HOST : `,
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("MONGODB connection FAILED : ", error);
    process.exit(1);
  }
})();
app.listen(8000, () => {
  console.log(`Server running at port 8000`);
});
