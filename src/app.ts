import express from "express";
import { connectDB } from "./services/mongodb";
import featureJobRoute from "./routes/featureJobRoute";
import { VercelRequest, VercelResponse } from "@vercel/node";
import spotlightRoute from "./routes/spotlightRoute";
import programLangRoute from "./routes/programLangRoute";
import BoardRoute from "./routes/boardRoute";
import mediaRoute from "./routes/mediaRoute";
import privacyPolicyRoute from "./routes/privacyPolicyRoute";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors()); // Use CORS middleware

app.use("/", featureJobRoute);
app.use("/", spotlightRoute);
app.use("/", programLangRoute);
app.use("/", BoardRoute);
app.use("/", mediaRoute);
app.use("/", privacyPolicyRoute);

app.get("/", (req: any, res: any) => res.send("Express on Vercel"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
