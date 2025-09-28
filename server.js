import express from "express";
import { generateAndPublishImage } from "./dist/workflows/generateImage.js";
import { createVoiceFile } from "./dist/workflows/createVoice.js";
import { findRelatedVideos } from "./dist/workflows/pushToYouTube.js";
import { fetchGumroadSales } from "./dist/workflows/sellOnGumroad.js";
import { createCharge } from "./dist/workflows/chargeWithStripe.js";

const app = express();
app.get("/", (_req, res) => {
  res.json({ status: "ok", message: "IAZ Cockpit Lite running" });
});

app.get("/run", async (_req, res) => {
  try {
    const prompt = "Créer une méditation guidée visuelle et vocale pour la sérénité";
    const image = await generateAndPublishImage(prompt);
    const voice = await createVoiceFile(prompt);
    const videos = await findRelatedVideos("méditation sérénité");
    const sales = await fetchGumroadSales();
    const payment = await createCharge(990);
    res.json({ success: true, image, voice, videos, sales, payment });
  } catch (e) {
    res.status(500).json({ success: false, error: e?.message || String(e) });
  }
});

const port = process.env.PORT ? Number(process.env.PORT) : 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
