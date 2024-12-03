import express from "express";
import { connectDB } from "../src/services/mongodb";
import featureJobRoute from "../src/routes/featureJobRoute";
import spotlightRoute from "../src/routes/spotlightRoute";
import programLangRoute from "../src/routes/programLangRoute";
import BoardRoute from "../src/routes/boardRoute";
import mediaRoute from "../src/routes/mediaRoute";
import privacyPolicyRoute from "../src/routes/privacyPolicyRoute";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors()); // Use CORS middleware

// app.use("/api", featureJobRoute);
// app.use("/api", spotlightRoute);
// app.use("/api", programLangRoute);
// app.use("/api", BoardRoute);
// app.use("/api", mediaRoute);
// app.use("/api", privacyPolicyRoute);

app.get("/", (req: any, res: any) => res.send("Express on Vercel"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
