import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export async function uploadImageToCanva(imageBuffer: Buffer) {
  const res = await axios.post("https://api.canva.com/v1/media", imageBuffer, {
    headers: {
      Authorization: `Bearer ${process.env.CANVA_CLIENT_SECRET}`,
      "Content-Type": "image/jpeg",
    },
  });
  return res.data.url;
}
