import assets from "../assets/assets";

export const sideItems = [
  { name: "About", scrollTo: "#about" },
  { name: "Mechanism", scrollTo: "#mechanism" },
  { name: "Latest Update", scrollTo: "#latest-update" },
];

export const mechanismItems = [
  {
    title: "Registrasi",
    date: "1 - 30 Januari 2023",
    icon: assets.registrasi,
    steps: [
      "Calon peserta diminta untuk mengisi formulir pendaftaran online yang berisi informasi pribadi, kontak, dan rincian tim pada link berikut",
      "Selain itu, peserta juga diharapkan mengunggah ringkasan rencana bisnis mereka yang mencakup visi, misi, strategi, dan analisis pasar",
    ],
  },
  {
    title: "Seleksi Peserta",
    date: "1 - 7 Februari 2023",
    icon: assets.seleksi,
    steps: [
      "Tim seleksi akan meninjau setiap pendaftaran dan mengevaluasi kualitas dan kelayakan bisnis plan yang diajukan",
      "Kriteria evaluasi dapat mencakup inovasi, potensi pertumbuhan, kelayakan keuangan, dan kejelasan presentasi",
      " Peserta yang memenuhi persyaratan seleksi akan dipilih sebagai finalis dan berhak melanjutkan ke tahap berikutnya",
    ],
  },
  {
    title: "Pengumuman Peserta Terpilih",
    icon: assets.pengumuman,
    date: "8 Februari 2023",
    steps: [
      "Pengumuman finalis akan dilakukan melalui email",
      "Finalis akan diinformasikan tentang jadwal presentasi dan persiapan yang diperlukan",
      "Pada acara pengumuman pemenang, setiap finalis akan mempresentasikan rencana bisnis mereka di hadapan panel juri",

      "Setelah presentasi, panel juri akan melakukan evaluasi dan mengumumkan pemenang kompetisi business plan",
    ],
  },
];

export const sliderImages = [
  { image: assets.alpha, name: "alpha" },
  { image: assets.fiveHundred, name: "fiveHundred" },
  { image: assets.insignia, name: "insignia" },
  { image: assets.sequoia, name: "sequoia" },
  { image: assets.signovate, name: "signovate" },
  { image: assets.wafe, name: "wave" },
  { image: assets.gfc, name: "gfc" },
  { image: assets.golden, name: "golden" },
];
