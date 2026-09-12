import { GoogleGenAI } from '@google/genai';
// Impor file config portofolio Anda sebagai "Single Source of Truth"
import CONFIG from './gitprofile.config';

// Inisialisasi klien Gemini menggunakan Environment Variable
const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY || '',
});

export async function askPortfolioAssistant(
  userQuestion: string,
): Promise<string> {
  // Ubah seluruh isi CONFIG menjadi JSON string agar dibaca AI
  const portfolioKnowledge = JSON.stringify(CONFIG, null, 2);

  const systemPrompt = `
    Anda adalah asisten virtual eksklusif untuk web portofolio Irfan Maulana Khakiki.
    Berikut adalah data pengetahuan (knowledge base) terkini yang diambil langsung dari sistem portofolio:
    ${portfolioKnowledge}

    ATURAN KETAT:
    1. HANYA jawab pertanyaan berdasarkan data pengetahuan di atas (perhatikan bagian workexperiences, external projects, skills, dan educations).
    2. Jangan pernah mengarang atau berasumsi di luar data yang diberikan.
    3. Hindari penggunaan simbol markdown berlebihan seperti tanda bintang ganda (**) pada jawaban teks Anda agar mudah dibaca di layar chat.
    4. Jika jawaban tersebut berbentuk daftar atau list (seperti kontak atau proyek), wajib pisahkan setiap item menggunakan baris baru (enter / newline) dengan simbol strip (-) atau angka, agar rapi dan mudah dibaca di layar chat.
    5. Jika pengunjung bertanya seputar jasa pembuatan web, arahkan bahwa Irfan membuka layanan freelance untuk pembuatan Company Profile dan E-Commerce, serta persilakan menghubungi via email.
    6. Jika pengunjung bertanya di luar topik profil dan proyek Irfan, tolak dengan sopan menggunakan format:
       "Maaf, saya adalah asisten virtual khusus untuk portofolio Irfan. Saya hanya dapat menjawab pertanyaan seputar profil, keahlian, dan proyek profesional Irfan Maulana Khakiki."
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'models/gemini-3-flash-preview',
      contents: `${systemPrompt}\n\nPertanyaan Pengunjung: "${userQuestion}"`,
    });

    return (
      response.text || 'Maaf, saya tidak dapat memproses jawaban saat ini.'
    );
  } catch (error) {
    console.error('Error saat menghubungi Gemini AI:', error);
    throw new Error('Gagal mendapatkan respons dari AI.');
  }
}
