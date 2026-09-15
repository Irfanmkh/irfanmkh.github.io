import { GoogleGenAI } from '@google/genai';
// import config file
import CONFIG from './gitprofile.config';

// Inisialisasi gemini
const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY || '',
});

function askLocalAssistant(question: string): string {
  const query = question.toLowerCase();

  // intro
  if (query.match(/hi|halo|pagi|siang|sore|malam|pundek|siapa kamu|asisten/)) {
    return 'Halo! Selamat datang di web portofolio Irfan Maulana Khakiki. Saya adalah asisten virtual milik Irfan yang siap membantu Anda mengenal lebih jauh mengenai profil profesional Irfan.';
  }
  // if (query.match(/tes/)) {
  //   return 'lokal .';
  // }

  // Kontak / Email / Sosmed / Freelance
  if (
    query.match(
      /kontak|email|linkedin|instagram|github|website|hubungi|freelance/,
    )
  ) {
    const social = CONFIG.social;
    return `Anda dapat menghubungi Irfan Maulana Khakiki melalui beberapa saluran berikut:
- Email: ${social.email || 'irfankhakiki17@gmail.com'}
- LinkedIn: ${social?.linkedin || 'linkedin.com/in/irfan-maulana-khakiki'}
- Instagram: @${social?.instagram || 'irfanmkh_'}
- GitHub: ${CONFIG?.github || 'Irfanmkh'}
- Website: ${social.website || 'https://www.imaka.my.id'}

Jika Anda tertarik untuk menggunakan jasa layanan freelance pembuatan Company Profile atau E-Commerce, silakan langsung menghubungi melalui email yang tertera di atas.`;
  }

  // Keahlian Teknis (Skills)
  if (query.match(/keahlian|skill|stack|teknologi|bisa apa|kemampuan/)) {
    const skillsList = CONFIG.skills
      ? CONFIG.skills.join(', ')
      : 'JavaScript, TypeScript, React, Vite, Tailwind CSS';
    return `Irfan memiliki keahlian dan penguasaan teknologi di bidang pengembangan web, di antaranya:
- ${skillsList}`;
  }

  // Pengalaman Kerja
  if (query.match(/pengalaman|kerja|work|perusahaan|karier/)) {
    return `Irfan memiliki pengalaman profesional dalam pengembangan aplikasi web dan proyek-proyek teknologi. Anda dapat melihat detail lengkapnya pada bagian Experience di halaman ini.`;
  }

  // Proyek
  if (query.match(/proyek|project|portofolio|karya/)) {
    return `Irfan telah mengerjakan berbagai proyek pengembangan web. Anda dapat melihat daftar lengkap proyeknya langsung pada bagian Projects di halaman utama website ini.`;
  }

  // Default fallback lokal jika pertanyaan di luar data
  return `Maaf, saya adalah asisten virtual khusus untuk portofolio Irfan. Saya hanya dapat menjawab pertanyaan seputar profil, keahlian, layanan freelance, dan proyek profesional Irfan Maulana Khakiki.`;
}

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
    3. ATURAN SALAM/INTRO: Jika pengguna menyapa (seperti "hi", "halo", "pagi", dll) atau menanyakan siapa Anda/kamu, WAJIB jawab PERSIS dengan kalimat ini:
       "Halo! Selamat datang di web portofolio Irfan Maulana Khakiki. Saya adalah asisten virtual milik Irfan yang siap membantu Anda mengenal lebih jauh mengenai profil profesional Irfan."
    4. Hindari penggunaan simbol markdown berlebihan seperti tanda bintang ganda (**) pada jawaban teks Anda agar mudah dibaca di layar chat.
    5. Jika jawaban tersebut berbentuk daftar atau list (seperti kontak atau proyek), wajib pisahkan setiap item menggunakan baris baru (enter / newline) dengan simbol strip (-) atau angka, agar rapi dan mudah dibaca di layar chat.
    6. Jika pengunjung bertanya seputar jasa pembuatan web, arahkan bahwa Irfan membuka layanan freelance untuk pembuatan Company Profile dan E-Commerce, serta persilakan menghubungi via email.
    7. Jika pengunjung bertanya di luar topik profil dan proyek Irfan, tolak dengan sopan menggunakan format:
       "Maaf, saya adalah asisten virtual khusus untuk portofolio Irfan. Saya hanya dapat menjawab pertanyaan seputar profil, keahlian, dan proyek profesional Irfan Maulana Khakiki."
       `;

  //  8. jika hanya mengirim pesan "tes", jawab, ini menggunakan "ai"
  try {
    const response = await ai.models.generateContent({
      model: 'models/gemini-3.1-flash-lite',
      contents: `${systemPrompt}\n\nPertanyaan Pengunjung: "${userQuestion}"`,
    });

    return (
      response.text || 'Maaf, saya tidak dapat memproses jawaban saat ini.'
    );
  } catch (error: any) {
    // Deteksi error limit (429) atau gangguan kuota/jaringan lainnya
    const isRateLimit =
      error?.status === 429 ||
      error?.message?.includes('429') ||
      error?.message?.includes('quota') ||
      error?.message?.includes('Resource has been exhausted');

    if (isRateLimit) {
      console.warn(
        ' API terkena limit (429). Dialihkan otomatis ke asisten lokal.',
      );
    } else {
      console.warn(
        ' Terkendala koneksi AI, menggunakan sistem cadangan lokal:',
        error?.message,
      );
    }

    // Eksekusi fallback lokal
    return askLocalAssistant(userQuestion);
  }
}
