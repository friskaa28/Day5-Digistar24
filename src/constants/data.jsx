import AkunIcon from '../assets/icons/akun.webp';
import PembayaranIcon from '../assets/icons/pembayaran.webp';
import PemesananIcon from '../assets/icons/pemesanan.webp';
import Handphone from '../assets/images/handphone.webp';
import Kamera from '../assets/images/kamera.webp';
import Tripod from '../assets/images/tripod.webp';

export const navItems = [
  { path: '', name: 'Beranda' },
  { path: 'about-us', name: 'Tentang Kami' },
  { path: 'help', name: 'Bantuan' },
  { path: 'media', name: 'Media' },
  { path: 'contact', name: 'Kontak' },
];

export const VisionAndMission = [
  {
    title: 'Visi Kami',
    descriptions: ['Menjadi ekosistem digital unggulan UMKM di seluruh Indonesia.'],
  },
  {
    title: 'Misi Kami',
    descriptions: [
      'Menyediakan platform B2B Marketplace dengan fitur layanan global untuk UMKM di Indonesia.',
      'Menjadi pusat informasi pengadaan (eProcurement) BUMN dan Luar BUMN yang dapat dipantau Kementerian BUMN secara real time dan transparan.',
      'Menyajikan informasi mengenai indikator utama dari aktivitas transaksi yang lengkap melalui Control Tower Dashboard.',
      'Membangun sistem perdagangan elektronik yang stabil untuk memastikan kelangsungan program dan menjaga kedaulatan data transaksi PaDi UMKM.',
    ],
  },
];

export const helpTopic = [
  {
    logo: AkunIcon,
    title: 'Akun',
    descriptions: [
      'Cara Buyer Batalkan Penawaran Tender Kilat',
      'Cara Buyer Buat Tender Kilat',
      'Cara Login Akun Buyer B2B PaDi UMKM',
      'Cara Daftar Akun Admin Perusahaan',
    ],
  },
  {
    logo: PemesananIcon,
    title: 'Pemesanan',
    descriptions: [
      'Cara Terima dan Checkout Tender Kilat',
      'Cara Belanja B2B dengan Termin',
      'Bagaimana Cara Belanja B2B di PaDi UMKM',
      'Cara Menindaklanjuti Permintaan Pembelian oleh Manager',
    ],
  },
  {
    logo: PembayaranIcon,
    title: 'Pembayaran & Perpajakan',
    descriptions: [
      'Fitur Saldo Refund bagi Pembeli B2B PaDi UMKM',
      'Pembayaran Tempo',
      'Cara Revisi Pajak',
      'Pembayaran Langsung',
    ],
  },
];

export const MediaInformations = [
  {
    image: Tripod,
    title: 'Mengenal Jenis Tripod dan Masing-Masing Kelebihannya',
    description:
      'Tripod adalah komponen penting dalam dunia fotografi untuk memudahkan Anda untuk meletakkan kamera agar tidak mudah goyang terlebih untuk jangka waktu yang panjang',
  },
  {
    image: Handphone,
    title: '3 Rekomendasi Handphone yang Bisa Anda Beli dengan Spesifikasi',
    description:
      'Handphone menjadi kebutuhan penting untuk komunikasi. Dulunya handphone hanya bisa digunakan untuk telepon maupun SMS namun lambat laun fungsinya menjadi lebih kompleks',
  },
  {
    image: Kamera,
    title: 'Mengenal Jenis Kamera dan Masing-Masing Kelebihannya',
    description:
      'Kamera menjadi kebutuhan penting untuk menjepret gambar maupun merekam video dengan hasil yang mumpuni. Anda perlu tahu kalau kamera juga punya jenis yang beragam',
  },
  {
    image: Handphone,
    title: '3 Rekomendasi Handphone yang Bisa Anda Beli dengan Spesifikasi',
    description:
      'Handphone menjadi kebutuhan penting untuk komunikasi. Dulunya handphone hanya bisa digunakan untuk telepon maupun SMS namun lambat laun fungsinya menjadi lebih kompleks',
  },
  
];
