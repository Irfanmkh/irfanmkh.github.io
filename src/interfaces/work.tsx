export interface WorkExperience {
  company: string;
  position: string;
  startDate: string; // contoh: '2022-01-01' atau 'Jan 2022'
  endDate?: string; // opsional, jika kosong dianggap "Present" / "Sekarang"
  description: string;
  logo?: string; // dibuat optional (?)
  skills?: string[]; // dibuat optional (?)
  link?: string; // dibuat optional (?)
}
