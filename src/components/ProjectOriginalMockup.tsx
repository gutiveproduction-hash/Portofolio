import React from 'react';
import { Project } from '../types';

interface ProjectOriginalMockupProps {
  projectId: string;
}

export const ProjectOriginalMockup: React.FC<ProjectOriginalMockupProps> = ({ projectId }) => {
  // 1. GOED SERVICE (Website & 3D Product View)
  if (projectId === 'goed-service') {
    return (
      <div className="w-full h-full bg-[#050505] text-white p-3 sm:p-3.5 flex flex-col justify-between select-none overflow-hidden font-sans border-b border-white/10">
        {/* Navbar */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[9px] sm:text-[10px]">
          <div className="flex items-center gap-2">
            <span className="font-extrabold tracking-wider text-white">GÖED</span>
            <div className="hidden sm:flex items-center gap-2 text-white/50 text-[8px]">
              <span className="text-white font-semibold">HOME</span>
              <span>KONTAK CABANG</span>
              <span>LOKASI CABANG</span>
              <span>MEDIA SOSIAL</span>
              <span>QUALITY SPAREPART</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span className="px-1.5 py-0.5 rounded bg-white/10 text-[8px] text-white/80 border border-white/20">BATTERY 250k</span>
            <span className="px-1.5 py-0.5 rounded bg-white/10 text-[8px] text-white/80 border border-white/20">LCD 250k</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="my-auto py-2 flex items-center justify-between">
          <div className="max-w-[65%] space-y-1.5 text-left">
            <h1 className="text-xl sm:text-2xl font-black tracking-tight leading-none text-white">
              GOED<br />SERVICE
            </h1>
            <p className="text-[9px] sm:text-[10px] text-white/60 leading-tight">
              Perbaikan iPhone berkualitas dan bergaransi hingga 2 tahun. Melayani perbaikan LCD, Battery, Flexible, Backglass, Housing dan lain-lain.
            </p>
            <div className="pt-1 flex items-center gap-1.5">
              <span className="px-2.5 py-1 rounded bg-[#ff4d2d] text-white text-[9px] font-bold shadow-sm">
                BOOKING SEKARANG +
              </span>
              <span className="text-[8px] text-white/50 border border-white/20 px-1.5 py-0.5 rounded">
                GARANSI HINGGA 2 TAHUN
              </span>
            </div>
          </div>

          <div className="text-right max-w-[32%] space-y-1">
            <span className="text-[8px] sm:text-[9px] font-bold text-white/40 tracking-widest uppercase block leading-tight">
              PREMIUM<br />GADGET<br />SERVICE AND<br />ACCESSORIES
            </span>
            <div className="w-10 h-10 rounded-full border border-dashed border-[#39FF14]/60 mx-auto flex items-center justify-center bg-[#39FF14]/10">
              <span className="text-[7px] text-[#39FF14] font-mono-code font-bold">3D 60FPS</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-1.5 border-t border-white/10 flex items-center justify-between text-[8px] text-white/40">
          <span>we do Goed Service</span>
          <span className="text-[#39FF14]">Model 3D Viewer Active</span>
        </div>
      </div>
    );
  }

  // 2. GOED ACSESS (iServis Pro) - POS & Business App
  if (projectId === 'goed-acsess') {
    return (
      <div className="w-full h-full bg-[#1e2229] text-white flex select-none overflow-hidden font-sans border-b border-white/10 text-[9px]">
        {/* Dark Sidebar */}
        <div className="w-24 sm:w-28 bg-[#15181e] p-2 border-r border-white/10 flex flex-col justify-between flex-shrink-0">
          <div>
            <div className="font-bold text-white text-[10px] mb-1.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Goed Acsess
            </div>
            <div className="text-[8px] text-white/40 mb-2 truncate">cabang Dicoba ▾</div>

            <div className="space-y-0.5 text-[8px]">
              <div className="px-1.5 py-1 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                Dashboard
              </div>
              <div className="px-1.5 py-0.5 text-white/60">Kasir / Servis</div>
              <div className="px-1.5 py-0.5 text-white/60">Data Stok</div>
              <div className="px-1.5 py-0.5 text-white/60">Stock Audit</div>
              <div className="px-1.5 py-0.5 text-white/60">Pengeluaran</div>
              <div className="px-1.5 py-0.5 text-white/60">AI Review</div>
              <div className="px-1.5 py-0.5 text-white/60">Absensi</div>
            </div>
          </div>
          <div className="text-[7px] text-white/30">v2.4 Pro</div>
        </div>

        {/* Main Dashboard Area */}
        <div className="flex-1 bg-[#f4f6f9] text-neutral-900 p-2 sm:p-2.5 overflow-hidden flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-neutral-300">
              <span className="font-bold text-[10px] text-neutral-800">Dashboard</span>
              <span className="text-[8px] text-neutral-500">Rabu, 26 Agustus 2026</span>
            </div>

            {/* 4 Stat Cards */}
            <div className="grid grid-cols-4 gap-1 mb-2">
              <div className="p-1 rounded bg-white border border-neutral-200 shadow-2xs">
                <div className="text-[7px] text-neutral-500 uppercase">Total Pendapatan</div>
                <div className="text-[9px] font-bold text-neutral-900">Rp 3.350.000</div>
                <div className="text-[6px] text-neutral-400">5 servis</div>
              </div>
              <div className="p-1 rounded bg-white border border-neutral-200 shadow-2xs">
                <div className="text-[7px] text-neutral-500 uppercase">Profit Kotor</div>
                <div className="text-[9px] font-bold text-neutral-900">Rp 3.350.000</div>
                <div className="text-[6px] text-neutral-400">setelah modal part</div>
              </div>
              <div className="p-1 rounded bg-white border border-neutral-200 shadow-2xs">
                <div className="text-[7px] text-neutral-500 uppercase">Pengeluaran</div>
                <div className="text-[9px] font-bold text-red-600">Rp 3.000</div>
                <div className="text-[6px] text-neutral-400">operasional</div>
              </div>
              <div className="p-1 rounded bg-white border border-neutral-200 shadow-2xs">
                <div className="text-[7px] text-neutral-500 uppercase">Profit Bersih</div>
                <div className="text-[9px] font-bold text-emerald-600">Rp 3.347.000</div>
                <div className="text-[6px] text-neutral-400">profit kotor - pengeluaran</div>
              </div>
            </div>

            {/* Table */}
            <div className="rounded bg-white border border-neutral-200 shadow-2xs overflow-hidden">
              <div className="bg-neutral-100 px-1.5 py-0.5 text-[7px] font-bold text-neutral-600 border-b border-neutral-200">
                Transaksi Servis Terakhir
              </div>
              <table className="w-full text-[7px] text-left">
                <thead>
                  <tr className="text-neutral-400 border-b border-neutral-100">
                    <th className="px-1 py-0.5">INVOICE</th>
                    <th className="px-1 py-0.5">CUSTOMER</th>
                    <th className="px-1 py-0.5">SERVIS</th>
                    <th className="px-1 py-0.5">STATUS</th>
                    <th className="px-1 py-0.5 text-right">PROFIT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="px-1 py-0.5 text-blue-600 font-mono">INV1548944</td>
                    <td className="px-1 py-0.5 font-medium">Asep</td>
                    <td className="px-1 py-0.5 text-neutral-600">Service Mesin</td>
                    <td className="px-1 py-0.5"><span className="bg-emerald-100 text-emerald-700 px-1 rounded text-[6px]">Diambil</span></td>
                    <td className="px-1 py-0.5 text-right font-bold">Rp 2.500.000</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="px-1 py-0.5 text-blue-600 font-mono">INV981007</td>
                    <td className="px-1 py-0.5 font-medium">gilang</td>
                    <td className="px-1 py-0.5 text-neutral-600">-</td>
                    <td className="px-1 py-0.5"><span className="bg-yellow-100 text-yellow-700 px-1 rounded text-[6px]">Antri</span></td>
                    <td className="px-1 py-0.5 text-right font-bold">Rp 0</td>
                  </tr>
                  <tr>
                    <td className="px-1 py-0.5 text-blue-600 font-mono">INV9903567</td>
                    <td className="px-1 py-0.5 font-medium">nanda</td>
                    <td className="px-1 py-0.5 text-neutral-600">ganti LCD diag.</td>
                    <td className="px-1 py-0.5"><span className="bg-emerald-100 text-emerald-700 px-1 rounded text-[6px]">Diambil</span></td>
                    <td className="px-1 py-0.5 text-right font-bold">Rp 300.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. E-PROCUREMENT PLN (Enterprise Dashboard)
  if (projectId === 'pln-eprocurement') {
    return (
      <div className="w-full h-full bg-[#edf3f8] text-neutral-800 p-2 sm:p-2.5 flex flex-col justify-start gap-1.5 select-none overflow-hidden font-sans border-b border-white/10 text-[8px] sm:text-[9px]">
        {/* Blue Enterprise Header Card */}
        <div className="bg-gradient-to-r from-[#003868] to-[#0c4e85] text-white px-2.5 py-2 rounded-xl flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-[#f59e0b] text-[#002f57] font-black flex items-center justify-center text-[11px] shadow-inner">
              E
            </div>
            <div>
              <div className="font-bold text-[10px] sm:text-[11px] leading-tight tracking-tight text-white">E-Procurement</div>
              <div className="text-[6.5px] sm:text-[7.5px] text-blue-100/80 leading-tight">Sistem Pengadaan Digital — PT PLN Indonesia Power</div>
            </div>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-white/15 border border-white/20 text-white text-[7px] font-medium backdrop-blur-xs">
            Prototype Demo
          </span>
        </div>

        {/* Card: Koneksi Backend */}
        <div className="bg-white rounded-xl p-2 border border-neutral-200/80 shadow-2xs">
          <div className="flex items-baseline justify-between mb-0.5">
            <span className="font-bold text-[8px] text-neutral-900">Koneksi Backend</span>
          </div>
          <div className="text-[6.5px] text-neutral-500 leading-tight mb-1.5 truncate">
            Belum terhubung — Import Excel, Export Word/PDF, dan penyimpanan permanen butuh login ke backend.
          </div>
          <div className="grid grid-cols-4 gap-1 items-center">
            <div className="px-1.5 py-0.5 rounded border border-neutral-300 bg-neutral-50 text-[6.5px] text-neutral-700 truncate font-mono">
              http://localhost:4000
            </div>
            <div className="px-1.5 py-0.5 rounded border border-neutral-300 bg-neutral-50 text-[6.5px] text-neutral-700 truncate font-mono">
              officer1
            </div>
            <div className="px-1.5 py-0.5 rounded border border-neutral-300 bg-neutral-50 text-[6.5px] text-neutral-700 truncate font-mono tracking-widest">
              ••••••••••••
            </div>
            <button className="px-2 py-0.5 rounded bg-[#0b548b] text-white text-[7px] font-bold text-center">
              Login
            </button>
          </div>
        </div>

        {/* Stepper Pills */}
        <div className="flex items-center gap-1 overflow-hidden py-0.5">
          <span className="px-2 py-0.5 rounded-full bg-[#0b548b] text-white text-[6.5px] font-bold whitespace-nowrap shadow-2xs">
            1 · Input Data
          </span>
          <span className="px-2 py-0.5 rounded-full bg-white border border-neutral-200 text-neutral-600 text-[6.5px] whitespace-nowrap truncate">
            2 · Nomor & Jadwal Dokumen
          </span>
          <span className="px-2 py-0.5 rounded-full bg-white border border-neutral-200 text-neutral-600 text-[6.5px] whitespace-nowrap hidden sm:inline truncate">
            3 · Dokumen Pengadaan
          </span>
          <span className="px-2 py-0.5 rounded-full bg-white border border-neutral-200 text-neutral-600 text-[6.5px] whitespace-nowrap hidden sm:inline truncate">
            4 · Output Proses
          </span>
          <span className="px-2 py-0.5 rounded-full bg-white border border-neutral-200 text-neutral-600 text-[6.5px] whitespace-nowrap truncate">
            5 · Dashboard
          </span>
        </div>

        {/* Card: Identitas Pengadaan */}
        <div className="bg-white rounded-xl p-2 border border-neutral-200/80 shadow-2xs flex-1 flex flex-col justify-between">
          <div>
            <div className="font-bold text-[8.5px] text-[#003868] leading-tight">Identitas Pengadaan</div>
            <div className="text-[6.5px] text-neutral-500 leading-tight mb-1.5">
              Data dasar paket pekerjaan yang akan diproses.
            </div>

            {/* Nama Pekerjaan Field */}
            <div className="mb-1">
              <span className="text-[6px] text-neutral-500 uppercase block mb-0.5">Nama Pekerjaan / Judul Pengadaan</span>
              <div className="px-1.5 py-1 rounded-lg bg-[#fefce8] border border-[#fef08a] text-[6.5px] sm:text-[7px] font-medium text-neutral-800 leading-tight truncate">
                PEKERJAAN JASA CLEANING SERVICE RUMAH JABATAN PT PLN INDONESIA POWER HEAD OFFICE
              </div>
            </div>

            {/* Metode & Tahun Anggaran */}
            <div className="grid grid-cols-2 gap-1.5 text-[6px]">
              <div>
                <span className="text-neutral-500 block mb-0.5">Metode Pengadaan</span>
                <div className="px-1.5 py-0.5 rounded border border-neutral-300 bg-white flex items-center justify-between text-neutral-800">
                  <span className="truncate">Pengadaan Langsung</span>
                  <span className="text-neutral-400">⇅</span>
                </div>
              </div>
              <div>
                <span className="text-neutral-500 block mb-0.5">Tahun Anggaran</span>
                <div className="px-1.5 py-0.5 rounded border border-neutral-300 bg-white flex items-center justify-between text-neutral-800">
                  <span>2026</span>
                  <span className="text-neutral-400">⇅</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Notice: Kode & Nomor Referensi preview */}
          <div className="pt-1 border-t border-neutral-100 flex items-center justify-between text-[6px] text-neutral-500">
            <span className="font-semibold text-neutral-700">Kode & Nomor Referensi</span>
            <div className="flex items-center gap-1.5">
              <span className="flex items-center gap-0.5"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400" /> Manual</span>
              <span className="flex items-center gap-0.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Pilihan</span>
              <span className="flex items-center gap-0.5"><span className="w-1.5 h-1.5 rounded-full bg-neutral-300" /> Otomatis</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. AMANAH (Healthcare Platform)
  if (projectId === 'amanah-consent') {
    return (
      <div className="w-full h-full bg-[#fafafa] text-neutral-900 flex select-none overflow-hidden font-sans border-b border-white/10 text-[9px]">
        {/* Sidebar */}
        <div className="w-24 sm:w-28 bg-white p-2 border-r border-neutral-200 flex flex-col justify-between flex-shrink-0">
          <div>
            <div className="font-bold text-emerald-700 text-[10px] mb-2 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> Amanah
            </div>
            <div className="text-[7px] text-neutral-400 uppercase font-semibold mb-1">Peran:</div>
            <div className="space-y-0.5 text-[8px]">
              <div className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                Pasien
              </div>
              <div className="px-1.5 py-0.5 text-neutral-600">Nakes / RS</div>
              <div className="px-1.5 py-0.5 text-neutral-600">Audit Log</div>
            </div>
          </div>
          <div className="text-[6px] text-neutral-400">Zero-Knowledge Enclave</div>
        </div>

        {/* Main Area */}
        <div className="flex-1 p-2 sm:p-2.5 overflow-hidden flex flex-col justify-between bg-[#f8fafc]">
          <div>
            {/* Header Notice */}
            <div className="p-1.5 rounded bg-white border border-neutral-200 shadow-2xs mb-1.5">
              <div className="text-[8px] font-bold text-neutral-800">PANEL PASIEN: Kelola izin akses rekam medis Anda</div>
              <div className="text-[6px] text-neutral-500 leading-tight mt-0.5">
                Setiap izin ditandatangani dengan kunci privat yang tersimpan di perangkat Anda sendiri — tidak pernah dikirim ke server mana pun.
              </div>
            </div>

            {/* 4 Counter Pills */}
            <div className="grid grid-cols-4 gap-1 mb-1.5 text-center">
              <div className="p-1 rounded bg-white border border-neutral-200">
                <div className="text-[10px] font-bold text-emerald-600">0</div>
                <div className="text-[6px] text-neutral-400">Izin aktif</div>
              </div>
              <div className="p-1 rounded bg-white border border-neutral-200">
                <div className="text-[10px] font-bold text-neutral-700">0</div>
                <div className="text-[6px] text-neutral-400">Segera berakhir</div>
              </div>
              <div className="p-1 rounded bg-white border border-neutral-200">
                <div className="text-[10px] font-bold text-neutral-700">0</div>
                <div className="text-[6px] text-neutral-400">Akses darurat</div>
              </div>
              <div className="p-1 rounded bg-white border border-neutral-200">
                <div className="text-[10px] font-bold text-neutral-700">0</div>
                <div className="text-[6px] text-neutral-400">Aktivitas</div>
              </div>
            </div>

            {/* Wallet Box */}
            <div className="p-1.5 rounded bg-white border border-emerald-200 shadow-2xs">
              <div className="text-[7px] font-bold text-neutral-800">Wallet Anda</div>
              <div className="text-[6px] text-neutral-500 mb-1">
                Identitas digital yang menandatangani setiap izin. Kunci privat tidak pernah meninggalkan perangkat ini.
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[7px] inline-block">
                + Buat wallet baru
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 5. WHATSAPP AI BOT (Training Ground UI)
  if (projectId === 'whatsapp-ai-bot') {
    return (
      <div className="w-full h-full bg-[#f4f6f8] text-neutral-900 p-2 sm:p-2.5 select-none overflow-hidden font-sans border-b border-white/10 text-[9px] flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="mb-1.5">
            <div className="text-[8px] font-bold text-neutral-800 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" /> Training Ground
            </div>
            <div className="text-[6px] text-neutral-500 leading-tight">
              Latih gaya balasan bot: simulasikan pesan masuk, edit balasan AI sampai persis gaya kamu, lalu simpan sebagai contoh baru.
            </div>
          </div>

          {/* Status Box */}
          <div className="p-1 rounded bg-white border border-neutral-200 text-[6px] mb-1 flex items-center justify-between">
            <span className="text-neutral-500">Status bot:</span>
            <span className="text-neutral-400 italic">Siap simulasi</span>
          </div>

          {/* Prompt Simulation Area */}
          <div className="p-1.5 rounded bg-white border border-neutral-200 space-y-1">
            <div>
              <span className="text-[6px] text-neutral-400 block uppercase">Konteks chat asli (opsional):</span>
              <div className="px-1.5 py-0.5 rounded bg-neutral-100 text-[6px] text-neutral-500 font-mono truncate">
                --- tanpa konteks, cuma pesan tunggal ---
              </div>
            </div>

            <div>
              <span className="text-[6px] text-neutral-400 block uppercase">Pesan masuk (simulasi):</span>
              <div className="px-1.5 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-[7px] text-neutral-800 font-medium">
                cth: kak, jadi jam berapa ketemunya?
              </div>
            </div>

            <div className="pt-0.5 flex items-center justify-between">
              <span className="px-2 py-0.5 rounded bg-neutral-900 text-white font-bold text-[7px]">
                Generate balasan
              </span>
              <span className="text-[6px] text-neutral-400">Claude AI Engine</span>
            </div>
          </div>
        </div>

        <div className="text-[6px] text-neutral-400 pt-1 border-t border-neutral-200 flex items-center justify-between">
          <span>Contoh gaya tersimpan: 12 dialog</span>
          <span className="text-[#25D366] font-bold">OpenWA Sync</span>
        </div>
      </div>
    );
  }

  // 6. SEHAT LANSIA (Elderly Health & Blockchain Consent)
  if (projectId === 'sehat-lansia') {
    return (
      <div className="w-full h-full bg-[#f4faf7] text-neutral-800 p-2 sm:p-2.5 flex flex-col justify-between select-none overflow-hidden font-sans border-b border-white/10 text-[8px]">
        {/* Top Header Bar */}
        <div>
          <div className="flex items-center justify-between pb-1.5 border-b border-emerald-100">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-[#00875a] text-white flex items-center justify-center font-bold text-[9px] shadow-xs">
                💚
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-black text-[9.5px] text-[#006644] leading-tight">SehatLansia</span>
                  <span className="px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 text-[6px] font-bold">
                    Asisten Sehat Keluarga
                  </span>
                </div>
                <div className="text-[6px] text-neutral-500 leading-tight">
                  Untuk: Bapak Hartono & Ibu Siti (67 th)
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <span className="px-1.5 py-0.5 rounded-full border border-amber-400 bg-amber-50 text-amber-900 text-[6px] font-bold flex items-center gap-0.5">
                👁 Mode Lansia: AKTIF
              </span>
              <span className="px-1.5 py-0.5 rounded-full border border-red-200 bg-red-50 text-red-700 text-[6px] font-bold flex items-center gap-0.5">
                🚨 Darurat
              </span>
            </div>
          </div>

          {/* Sub Navigation Pills */}
          <div className="flex items-center gap-1 py-1 overflow-hidden border-b border-emerald-100 text-[6.5px]">
            <span className="px-2 py-0.5 rounded-full bg-[#00875a] text-white font-bold flex items-center gap-1 whitespace-nowrap shadow-2xs">
              💊 Jadwal Obat <span className="bg-red-500 text-white rounded-full px-1 py-0.2 text-[5.5px]">4 Perlu</span>
            </span>
            <span className="px-1.5 py-0.5 rounded-full bg-white border border-emerald-200 text-neutral-600 whitespace-nowrap">
              🌙 Tidur
            </span>
            <span className="px-1.5 py-0.5 rounded-full bg-white border border-emerald-200 text-neutral-600 whitespace-nowrap">
              👟 Jalan & Kalori
            </span>
            <span className="px-1.5 py-0.5 rounded-full bg-white border border-emerald-200 text-emerald-800 font-medium whitespace-nowrap hidden sm:inline">
              📷 Foto Makanan <span className="bg-emerald-600 text-white text-[5px] px-0.5 rounded">AI Vision</span>
            </span>
            <span className="px-1.5 py-0.5 rounded-full bg-white border border-purple-200 text-purple-800 font-medium whitespace-nowrap truncate">
              🛡 Izin Rekam Medis <span className="bg-purple-600 text-white text-[5px] px-0.5 rounded">Web3</span>
            </span>
          </div>
        </div>

        {/* Hero Green Card: Jadwal Minum Obat */}
        <div className="rounded-xl bg-gradient-to-r from-[#00875a] to-[#059669] text-white p-2 shadow-xs my-0.5">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[5.5px] px-1.5 py-0.2 rounded-full bg-white/20 text-white font-medium inline-block mb-0.5">
                Pengingat Minum Obat Lansia
              </span>
              <div className="font-bold text-[9px] leading-tight">Jadwal Minum Obat Hari Ini</div>
              <div className="text-[6px] text-emerald-100">0 dari 4 obat telah diminum</div>
            </div>
            <div className="flex items-center gap-1">
              <span className="px-1.5 py-0.5 rounded-full bg-white text-[#006644] font-bold text-[6px] shadow-2xs flex items-center gap-0.5">
                🔊 Suara
              </span>
              <span className="px-1.5 py-0.5 rounded-full bg-[#004d33] text-white font-bold text-[6px]">
                + Tambah
              </span>
            </div>
          </div>

          <div className="mt-1 pt-1 border-t border-white/20 flex items-center justify-between text-[6px]">
            <span>Kepatuhan Minum Obat</span>
            <span className="font-bold">0%</span>
          </div>
        </div>

        {/* Medicine list item preview */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[6px] text-neutral-500 font-semibold px-0.5">
            <span className="bg-amber-100 text-amber-900 px-1 rounded">Pagi Hari · 06:00 - 10:00</span>
            <span>2 Jenis Obat</span>
          </div>
          <div className="grid grid-cols-2 gap-1 text-[6.5px]">
            <div className="p-1 rounded-lg bg-white border border-emerald-200 flex items-center justify-between shadow-2xs">
              <div className="truncate">
                <span className="font-bold text-neutral-800 block truncate">Amlodipine</span>
                <span className="text-neutral-500 text-[5.5px] block truncate">1 Tab · Sesudah Makan</span>
              </div>
              <span className="text-neutral-400">🔊</span>
            </div>
            <div className="p-1 rounded-lg bg-white border border-emerald-200 flex items-center justify-between shadow-2xs">
              <div className="truncate">
                <span className="font-bold text-neutral-800 block truncate">Vitamin D3 1000 IU</span>
                <span className="text-neutral-500 text-[5.5px] block truncate">1 Tab · Bersama Makan</span>
              </div>
              <span className="text-neutral-400">🔊</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Fallback
  return null;
};
