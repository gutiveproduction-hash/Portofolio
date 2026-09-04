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

  // 7. X-FRONTIER (AI Strategy & Ideation Engine)
  if (projectId === 'x-frontier') {
    return (
      <div className="w-full h-full bg-[#050608] text-white flex flex-col select-none overflow-hidden font-sans border-b border-white/10">
        {/* ===== TOP NAV ===== */}
        <div className="px-1.5 py-1 border-b border-white/10 flex items-center justify-between gap-1 flex-shrink-0">
          <div className="flex items-center gap-1 min-w-0">
            <div className="w-3.5 h-3.5 rounded-full bg-[#12203a] border border-[#2563eb]/50 flex items-center justify-center text-[6px] text-[#3b82f6] flex-shrink-0">
              &#9678;
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-white text-[6.5px] tracking-tight">X-VISION</span>
                <span className="font-extrabold text-[#3b82f6] text-[6.5px] tracking-tight">FRONTIER</span>
                <span className="px-0.5 rounded-full bg-[#2563eb] text-white text-[3.5px] font-bold whitespace-nowrap">BENTO FRONTIER</span>
              </div>
              <div className="text-[3.5px] text-white/35 tracking-[0.12em] uppercase truncate">
                First Principles Software &#8226; Deeptech Markets
              </div>
            </div>
          </div>

          <div className="flex items-center gap-0.5 flex-shrink-0">
            <span className="px-1 py-0.5 rounded-full bg-[#2563eb] text-white text-[4px] font-bold whitespace-nowrap">X-Vision</span>
            <span className="px-1 py-0.5 rounded-full text-white/45 text-[4px] whitespace-nowrap hidden sm:inline">Pitch Evaluator</span>
            <span className="px-1 py-0.5 rounded-full text-white/45 text-[4px] whitespace-nowrap hidden sm:inline">Synthesizer</span>
            <span className="px-1 py-0.5 rounded-full text-white/45 text-[4px] whitespace-nowrap hidden sm:inline">Tech Tree &amp; TAM</span>
            <span className="px-1 py-0.5 rounded-full text-white/45 text-[4px] whitespace-nowrap">Ask Elon</span>
          </div>
        </div>

        {/* ===== BENTO GRID ===== */}
        <div className="flex-1 p-1.5 flex flex-col gap-1 overflow-hidden">
          {/* Row 1 */}
          <div className="grid grid-cols-[1.55fr_0.75fr_0.75fr] gap-1 flex-[1.35] min-h-0">
            {/* Hero card */}
            <div className="rounded-lg bg-[#0c0e12] border border-white/10 p-1.5 flex flex-col justify-between overflow-hidden">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <span className="px-1 py-0.3 rounded bg-[#2563eb] text-white text-[3.5px] font-bold">PRIORITY ALPHA</span>
                  <span className="text-[3.5px] text-white/35 tracking-[0.12em] uppercase">Frontier Horizon</span>
                </div>
                <div className="text-[9px] font-black leading-[1.1] text-white">SaaS Konvensional Akan Mati.</div>
                <div className="text-[9px] font-black leading-[1.1] text-[#3b82f6] mb-1">
                  Software Frontier Mengatur Atom &amp; Energi.
                </div>
                <div className="text-[4px] text-white/45 leading-snug">
                  Software bukan lagi sekadar formulir database atau bot perantara CRUD. Ledakan nilai ekonomi terjadi di persimpangan{' '}
                  <span className="text-white/75 font-semibold">Physical AI</span>,{' '}
                  <span className="text-white/75 font-semibold">Arbitrase Energi Grid</span>, dan{' '}
                  <span className="text-white/75 font-semibold">Komputasi Orbital LEO</span>.
                </div>
              </div>

              <div className="pt-1 border-t border-white/10 flex items-center justify-between gap-1">
                <div className="flex items-center gap-1 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-[#12203a] border border-[#2563eb]/60 flex-shrink-0" />
                  <span className="text-[4px] text-[#3b82f6] font-mono-code truncate">&lt; 0.04ms Actuator Latency</span>
                </div>
                <span className="text-[3.5px] text-white/30 tracking-[0.1em] font-mono-code whitespace-nowrap flex-shrink-0">
                  STARBASE VERIFIED
                </span>
              </div>
            </div>

            {/* Blue TAM card */}
            <div className="rounded-lg bg-[#2554eb] p-1.5 flex flex-col items-center justify-center text-center overflow-hidden">
              <span className="text-[13px] font-black italic text-white leading-none">$14.2T</span>
              <span className="text-[4px] font-bold text-white tracking-[0.1em] mt-0.5">EST. DEEPTECH TAM</span>
              <div className="w-full border-t border-white/25 my-1" />
              <span className="text-[3.5px] text-white/80 font-mono-code leading-tight">Physical AI + Grid VPP Arbitrage</span>
            </div>

            {/* Optimus card */}
            <div className="rounded-lg bg-[#0c0e12] border border-white/10 p-1.5 flex flex-col items-center justify-center text-center overflow-hidden">
              <div className="w-4 h-4 rounded bg-[#15181d] border border-white/10 flex items-center justify-center text-[8px] mb-1">
                &#129302;
              </div>
              <span className="text-[5px] font-bold text-white leading-tight">OPTIMUS-FLEET OS</span>
              <span className="text-[3.5px] text-white/40 tracking-[0.1em] uppercase">Mass Fleet Deployment</span>
              <span className="mt-1 px-1 py-0.3 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[3.5px] font-bold">
                Deployment Phase 2
              </span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-[1fr_1.15fr] gap-1 flex-1 min-h-0">
            {/* White manifesto card */}
            <div className="rounded-lg bg-[#f5f5f3] text-[#0c0e12] p-1.5 flex flex-col justify-center overflow-hidden">
              <span className="text-[3.5px] text-neutral-500 tracking-[0.12em] uppercase font-mono-code">First Principles Manifesto</span>
              <div className="flex items-start justify-between gap-1 mt-0.5">
                <div className="min-w-0">
                  <div className="text-[6px] font-black leading-tight">
                    "Jangan Mengoptimalkan Hal yang Seharusnya Dihapus."
                  </div>
                  <div className="text-[3.5px] text-neutral-500 leading-snug mt-0.5">
                    Setiap baris kode harus dijustifikasi oleh hukum termodinamika.
                  </div>
                </div>
                <span className="px-1 py-0.5 rounded bg-[#0c0e12] text-white text-[3.5px] font-bold whitespace-nowrap flex-shrink-0 font-mono-code">
                  LAUNCH ALPHA &#8594;
                </span>
              </div>
            </div>

            {/* VPP Grid card */}
            <div className="rounded-lg bg-[#0c0e12] border border-white/10 p-1.5 flex flex-col justify-center overflow-hidden">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[4.5px] font-bold text-white tracking-wide truncate">&#9889; VPP GRID POWER ARBITRAGE</span>
                <span className="px-1 py-0.3 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[3.5px] font-mono-code flex-shrink-0">
                  Live Feed
                </span>
              </div>

              <div className="flex items-center justify-between text-[3.5px] font-mono-code">
                <span className="text-white/70">Megapack Cluster Sync</span>
                <span className="text-emerald-400 font-bold">88%</span>
              </div>
              <div className="h-[2px] rounded-full bg-white/10 overflow-hidden mb-1 mt-0.5">
                <div className="h-full w-[88%] bg-emerald-400" />
              </div>

              <div className="flex items-center justify-between text-[3.5px] font-mono-code">
                <span className="text-white/70">EV Fleet V2G Reserve</span>
                <span className="text-[#3b82f6] font-bold">64%</span>
              </div>
              <div className="h-[2px] rounded-full bg-white/10 overflow-hidden mt-0.5">
                <div className="h-full w-[64%] bg-[#3b82f6]" />
              </div>

              <div className="text-[3.5px] text-white/35 font-mono-code leading-tight mt-1 truncate">
                Arbitrase daya 250MW via Starlink mesh routing.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 8. LUMINAL (Enterprise Agent Control Plane)
  if (projectId === 'luminal') {
    return (
      <div className="w-full h-full bg-[#080808] text-[#D1D1D1] flex select-none overflow-hidden font-sans border-b border-white/10">
        {/* ===== SIDEBAR ===== */}
        <div className="w-[76px] sm:w-[86px] bg-[#0a0a0a] border-r border-white/10 flex flex-col justify-between flex-shrink-0">
          <div>
            {/* Logo block */}
            <div className="px-1.5 py-1.5 border-b border-white/10">
              <div className="flex items-center gap-1">
                <div className="w-3.5 h-3.5 rounded bg-[#C5A059]/15 border border-[#C5A059]/40 flex items-center justify-center text-[6px] text-[#C5A059] flex-shrink-0">
                  &#9672;
                </div>
                <span className="text-white font-bold text-[6.5px] tracking-[0.14em]">LUMINAL</span>
                <span className="px-0.5 rounded bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#C5A059] text-[3.5px] font-bold">V2.4</span>
              </div>
              <div className="text-[3.5px] text-white/35 tracking-[0.16em] uppercase mt-0.5 ml-4.5">Agent Control Plane</div>
            </div>

            {/* Nav */}
            <div className="p-1.5 space-y-[3px]">
              <div className="text-[3.5px] text-white/30 font-bold tracking-[0.12em] uppercase">Utama</div>
              <div className="px-1 py-0.5 rounded border border-[#C5A059]/40 bg-[#C5A059]/10 text-[#C5A059] text-[4.5px] font-bold truncate">
                Ikhtisar Postur
              </div>

              <div className="text-[3.5px] text-white/30 font-bold tracking-[0.12em] uppercase pt-0.5">Temukan</div>
              <div className="flex items-center justify-between gap-0.5 text-[4.5px] text-white/55">
                <span className="truncate">Registri &amp; Topologi</span>
                <span className="px-0.5 rounded bg-white/10 text-white/40 text-[3.5px] flex-shrink-0">9</span>
              </div>

              <div className="text-[3.5px] text-white/30 font-bold tracking-[0.12em] uppercase pt-0.5">Kendalikan</div>
              <div className="flex items-center justify-between gap-0.5 text-[4.5px] text-white/55">
                <span className="truncate">Otorisasi Runtime</span>
                <span className="px-0.5 rounded bg-[#C5A059]/15 text-[#C5A059] text-[3.5px] flex-shrink-0">2</span>
              </div>
              <div className="flex items-center justify-between gap-0.5 text-[4.5px] text-white/55">
                <span className="truncate">Studio Kebijakan</span>
                <span className="px-0.5 rounded bg-white/10 text-white/40 text-[3.5px] flex-shrink-0">7</span>
              </div>
              <div className="flex items-center justify-between gap-0.5 text-[4.5px] text-white/55">
                <span className="truncate">Deteksi &amp; Respons</span>
                <span className="px-0.5 rounded bg-red-500/20 text-red-400 text-[3.5px] flex-shrink-0">3</span>
              </div>

              <div className="text-[3.5px] text-white/30 font-bold tracking-[0.12em] uppercase pt-0.5">Tata Kelola</div>
              <div className="flex items-center justify-between gap-0.5 text-[4.5px] text-white/55">
                <span className="truncate">Kewajiban &amp; Bukti</span>
                <span className="px-0.5 rounded bg-[#C5A059]/15 text-[#C5A059] text-[3.5px] flex-shrink-0">PADK</span>
              </div>
              <div className="flex items-center justify-between gap-0.5 text-[4.5px] text-white/55">
                <span className="truncate">Titik Penegakan</span>
                <span className="px-0.5 rounded bg-white/10 text-white/40 text-[3.5px] flex-shrink-0">8</span>
              </div>
            </div>
          </div>

          {/* Environment panel */}
          <div className="m-1.5 p-1 rounded border border-white/10 bg-[#0c0c0c]">
            <div className="flex items-center justify-between text-[3.5px] mb-0.5">
              <span className="text-white/35 tracking-wider uppercase">Lingkungan</span>
              <span className="text-emerald-400">&#9679; id-jkt-1</span>
            </div>
            <div className="flex items-center justify-between text-[4px]">
              <span className="text-white/55 truncate">Enforcer Cluster</span>
              <span className="text-white/40 flex-shrink-0">99.99% Up</span>
            </div>
            <div className="flex items-center justify-between text-[4px]">
              <span className="text-white/55 truncate">Latency Otorisasi</span>
              <span className="text-[#C5A059] font-bold flex-shrink-0">1.8 ms</span>
            </div>
          </div>
        </div>

        {/* ===== MAIN ===== */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top bar */}
          <div className="px-1.5 py-1 border-b border-white/10 flex items-center justify-between gap-1">
            <div className="min-w-0">
              <div className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-emerald-400 flex-shrink-0" />
                <span className="text-emerald-400 text-[4px] font-bold tracking-[0.1em]">LIVE ENFORCING</span>
                <span className="text-white/30 text-[4px] truncate">/ PT Sinar Penda&#8230;</span>
                <span className="px-0.5 rounded border border-[#C5A059]/40 text-[#C5A059] text-[3.5px] font-bold flex-shrink-0">
                  LPBBTI BERIZIN
                </span>
              </div>
              <div className="text-white font-bold text-[6.5px] truncate leading-tight mt-0.5">
                Konsol Kendali Otorisasi &amp; Kepatuhan Regulator
              </div>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              <span className="px-1 py-0.5 rounded border border-[#C5A059]/40 text-[#C5A059] text-[4px] font-bold whitespace-nowrap">
                2 PERSETUJUAN
              </span>
              <span className="px-1 py-0.5 rounded border border-red-500/40 bg-red-500/10 text-red-400 text-[4px] font-bold whitespace-nowrap">
                HENTIKAN DARURAT
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="p-1.5 flex flex-col gap-1 flex-1 overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-[4px] text-white/40 font-bold uppercase tracking-[0.1em]">Tiga Pilar Arsitektur Kendali Agent</span>
              <span className="text-[3.5px] text-white/25 uppercase tracking-[0.1em]">Standar Sektoral</span>
            </div>

            {/* 3 pillars */}
            <div className="grid grid-cols-3 gap-1">
              <div className="p-1 rounded bg-[#0c0c0c] border border-white/10">
                <div className="flex items-center justify-between gap-0.5">
                  <span className="text-[4.5px] text-white truncate">1. Temukan</span>
                  <span className="text-[4.5px] font-bold text-[#C5A059] flex-shrink-0">74%</span>
                </div>
                <div className="text-[3.5px] text-white/40 leading-tight truncate">Inventarisasi agent &amp; topologi</div>
                <div className="h-[2px] rounded-full bg-white/10 overflow-hidden my-0.5">
                  <div className="h-full w-[74%] bg-[#C5A059]" />
                </div>
                <div className="flex items-center justify-between text-[3.5px]">
                  <span className="text-white/40 truncate">9 Agent</span>
                  <span className="text-[#C5A059] flex-shrink-0">1 Shadow &#8594;</span>
                </div>
              </div>

              <div className="p-1 rounded bg-[#0c0c0c] border border-white/10">
                <div className="flex items-center justify-between gap-0.5">
                  <span className="text-[4.5px] text-white truncate">2. Kendalikan</span>
                  <span className="text-[4.5px] font-bold text-red-400 flex-shrink-0">41%</span>
                </div>
                <div className="text-[3.5px] text-white/40 leading-tight truncate">Otorisasi per tindakan</div>
                <div className="h-[2px] rounded-full bg-white/10 overflow-hidden my-0.5">
                  <div className="h-full w-[41%] bg-red-400" />
                </div>
                <div className="flex items-center justify-between text-[3.5px]">
                  <span className="text-white/40 truncate">7 Kebijakan</span>
                  <span className="text-red-400 flex-shrink-0">11 Hak &#8594;</span>
                </div>
              </div>

              <div className="p-1 rounded bg-[#0c0c0c] border border-white/10">
                <div className="flex items-center justify-between gap-0.5">
                  <span className="text-[4.5px] text-white truncate">3. Tata Kelola</span>
                  <span className="text-[4.5px] font-bold text-emerald-400 flex-shrink-0">58%</span>
                </div>
                <div className="text-[3.5px] text-white/40 leading-tight truncate">Pemetaan PADK &amp; UU PDP</div>
                <div className="h-[2px] rounded-full bg-white/10 overflow-hidden my-0.5">
                  <div className="h-full w-[58%] bg-emerald-400" />
                </div>
                <div className="flex items-center justify-between text-[3.5px]">
                  <span className="text-white/40 truncate">10 Bukti</span>
                  <span className="text-emerald-400 flex-shrink-0">Dossier &#8594;</span>
                </div>
              </div>
            </div>

            {/* Bottom: runtime table + approvals */}
            <div className="grid grid-cols-[1.4fr_1fr] gap-1 flex-1 overflow-hidden">
              {/* Runtime decision table */}
              <div className="rounded bg-[#0c0c0c] border border-white/10 overflow-hidden flex flex-col">
                <div className="px-1 py-0.5 border-b border-white/10 flex items-center justify-between">
                  <span className="text-[4px] text-white/50 font-bold uppercase tracking-[0.08em] truncate">
                    Aliran Putusan Otorisasi Runtime
                  </span>
                  <span className="text-[3.5px] text-[#C5A059] flex-shrink-0">Lengkap &#8594;</span>
                </div>
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-[3.5px] text-white/30 border-b border-white/10">
                      <th className="px-1 py-0.5 font-medium">WAKTU</th>
                      <th className="px-1 py-0.5 font-medium">AGENT</th>
                      <th className="px-1 py-0.5 font-medium">TINDAKAN</th>
                      <th className="px-1 py-0.5 font-medium text-right">PUTUSAN</th>
                    </tr>
                  </thead>
                  <tbody className="text-[4px]">
                    <tr className="border-b border-white/5">
                      <td className="px-1 py-0.5 text-white/40">16:11:22</td>
                      <td className="px-1 py-0.5 text-white/80 truncate">Rekonsiliasi Bayar</td>
                      <td className="px-1 py-0.5 text-white/50 truncate">pengetahuan:read</td>
                      <td className="px-1 py-0.5 text-right">
                        <span className="px-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[3.5px] font-bold">IZINKAN</span>
                      </td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="px-1 py-0.5 text-white/40">16:29:56</td>
                      <td className="px-1 py-0.5 text-white/80 truncate">Penagihan WA</td>
                      <td className="px-1 py-0.5 text-white/50 truncate">core.nasabah:read</td>
                      <td className="px-1 py-0.5 text-right">
                        <span className="px-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[3.5px] font-bold">IZINKAN</span>
                      </td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="px-1 py-0.5 text-white/40">18:42:37</td>
                      <td className="px-1 py-0.5 text-white/80 truncate">Deteksi Fraud</td>
                      <td className="px-1 py-0.5 text-white/50 truncate">core.nasabah:read</td>
                      <td className="px-1 py-0.5 text-right">
                        <span className="px-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[3.5px] font-bold">IZINKAN</span>
                      </td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="px-1 py-0.5 text-white/40">18:46:03</td>
                      <td className="px-1 py-0.5 text-white/80 truncate">Chatbot Nasabah</td>
                      <td className="px-1 py-0.5 text-white/50 truncate">pesan.keluar:send</td>
                      <td className="px-1 py-0.5 text-right">
                        <span className="px-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[3.5px] font-bold">IZINKAN</span>
                      </td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="px-1 py-0.5 text-white/40">19:02:34</td>
                      <td className="px-1 py-0.5 text-white/80 truncate">Skoring Kredit</td>
                      <td className="px-1 py-0.5 text-white/50 truncate">refund:execute</td>
                      <td className="px-1 py-0.5 text-right">
                        <span className="px-0.5 rounded bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/30 text-[3.5px] font-bold">BERTINGKAT</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-1 py-0.5 text-white/40">19:02:33</td>
                      <td className="px-1 py-0.5 text-white/80 truncate">Prospek Pemasaran</td>
                      <td className="px-1 py-0.5 text-white/50 truncate">core.nasabah:read</td>
                      <td className="px-1 py-0.5 text-right">
                        <span className="px-0.5 rounded bg-red-500/15 text-red-400 border border-red-500/30 text-[3.5px] font-bold">TOLAK</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Approvals panel */}
              <div className="rounded bg-[#0c0c0c] border border-white/10 p-1 flex flex-col">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[4px] text-white/50 font-bold uppercase tracking-[0.08em] truncate">Perlu Persetujuan (2)</span>
                  <span className="text-[3.5px] text-[#C5A059] flex-shrink-0">SLA 15&#8242;</span>
                </div>
                <div className="rounded border border-white/10 p-1 mb-0.5">
                  <div className="flex items-start justify-between gap-0.5">
                    <span className="text-[4px] text-white font-semibold leading-tight">transaksi:block (Pemblokiran Rekening)</span>
                    <span className="px-0.5 rounded bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#C5A059] text-[3.5px] font-bold whitespace-nowrap flex-shrink-0">
                      Rp 48,9jt
                    </span>
                  </div>
                  <div className="text-[3.5px] text-[#C5A059] truncate">Deteksi Fraud Lintas Transaksi (AGT-005)</div>
                  <div className="text-[3.5px] text-white/40 leading-tight">Pola anomali penarikan tunai di 4 ATM.</div>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    <span className="px-1 py-0.3 rounded bg-emerald-500/20 text-emerald-400 text-[3.5px] font-bold">SETUJUI</span>
                    <span className="px-1 py-0.3 rounded border border-red-500/40 text-red-400 text-[3.5px] font-bold">TOLAK</span>
                  </div>
                </div>
                <div className="flex items-center gap-0.5 text-[3.5px] text-red-400">
                  <span className="w-1 h-1 rounded-full bg-red-400 flex-shrink-0" />
                  <span className="font-bold">DET-02</span>
                  <span className="text-white/40 truncate">Shadow Agent kirim data sensitif</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Fallback
  return null;
};
