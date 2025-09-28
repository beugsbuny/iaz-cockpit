export function createVoiceFile(prompt: string) {
  console.log("🎙️ Création de voix pour :", prompt);
  return {
    success: true,
    audioPath: "output/voice.mp3"
  };
}