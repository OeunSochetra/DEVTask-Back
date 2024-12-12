import express from "express";
import { connectDB } from "./services/mongodb";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";

import featureJobRoute from "./routes/featureJobRoute";
import spotlightRoute from "./routes/spotlightRoute";
import programLangRoute from "./routes/programLangRoute";
import BoardRoute from "./routes/boardRoute";
import privacyPolicyRoute from "./routes/privacyPolicyRoute";
import mediaRoute from "./controller/mediaController";

dotenv.config();
connectDB();
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve files from 'uploads'

app.use("/api", featureJobRoute);
app.use("/api", spotlightRoute);
app.use("/api", programLangRoute);
app.use("/api", BoardRoute);
app.use("/api", privacyPolicyRoute);
app.use("/api", mediaRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
