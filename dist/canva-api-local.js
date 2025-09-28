import axios from "axios";
export async function generateDesign() {
    try {
        const res = await axios.post("https://api.canva.com/v1/designs", {
            templateId: "demo-template",
            data: { title: "Cockpit IA" }
        });
        // ✅ Correction ici
        return res.data.url;
    }
    catch (error) {
        console.error("Erreur Canva API :", error);
        return null;
    }
}
