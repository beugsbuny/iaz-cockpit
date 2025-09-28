export function createVoiceFile(prompt) {
    console.log("🎙️ Création de voix pour :", prompt);
    return {
        success: true,
        audioPath: "output/voice.mp3"
    };
}
