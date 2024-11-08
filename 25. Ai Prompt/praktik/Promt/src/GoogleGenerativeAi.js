import { GoogleGenerativeAI } from "@google/generative-ai";
import foodRecommendations from "./data/RekomendasiMakanan";

const genAI = new GoogleGenerativeAI("AIzaSyB4mmwpAYDiCVf0L_tCZuOVwfn4AHUL2Jw");

const generateContent = async (userInput) => {
  try {
    if (userInput.toLowerCase().includes("rekomendasi makanan berkuah yang murah")) {
      const recommendations = foodRecommendations
        .filter(item => item.type === "berkuah" && item.price <= 13000)
        .map(item => `${item.name} (Rp${item.price.toLocaleString("id-ID")})`)
        .join(", ");
      return `Berikut rekomendasi makanan berkuah yang murah: ${recommendations}`;
    }

    if (userInput.toLowerCase().includes("rekomendasi makanan kering yang murah")) {
      const recommendations = foodRecommendations
        .filter(item => item.type === "kering" && item.price <= 13000)
        .map(item => `${item.name} (Rp${item.price.toLocaleString("id-ID")})`)
        .join(", ");
      return `Berikut rekomendasi makanan kering yang murah: ${recommendations}`;
    }

    if (userInput.toLowerCase().includes("harga makanan")) {
      const recommendations = foodRecommendations
        .map(item => `${item.name} = Rp${item.price.toLocaleString("id-ID")}`)
        .join(", ");
      return `Berikut daftar harga makanan yang tersedia: ${recommendations}`;
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(userInput);

    return result.response.text(); 
  } catch (error) {
    console.error("Error generating content:", error);
    return "Terjadi kesalahan. Mohon coba lagi nanti.";
  }
};

export default generateContent;

