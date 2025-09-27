import { generateAndPublishImage } from "./workflows/generateImage";
import { createVoiceFile } from "./workflows/createVoice";
import { findRelatedVideos } from "./workflows/pushToYouTube";
import { fetchGumroadSales } from "./workflows/sellOnGumroad";
import { createCharge } from "./workflows/chargeWithStripe";

(async () => {
  const prompt = "Créer une méditation guidée visuelle et vocale pour la sérénité";

  console.log("🧠 Génération de l'image IA...");
  const imageUrl = await generateAndPublishImage(prompt);
  console.log("✅ Image publiée sur Canva :", imageUrl);

  console.log("🎙️ Génération de la voix IA...");
  const voicePath = await createVoiceFile(prompt);
  console.log("✅ Fichier audio créé :", voicePath);

  console.log("📺 Recherche de vidéos YouTube associées...");
  const videos = await findRelatedVideos("méditation sérénité");
  console.log("✅ Suggestions YouTube :", videos);

  console.log("🛒 Vérification des ventes Gumroad...");
  const sales = await fetchGumroadSales();
  console.log("✅ Ventes Gumroad :", sales);

  console.log("💳 Création d’un paiement Stripe...");
  const paymentSecret = await createCharge(990); // 9.90€
  console.log("✅ Paiement prêt :", paymentSecret);

  console.log("🚀 Cockpit IA exécuté avec succès.");
})();
