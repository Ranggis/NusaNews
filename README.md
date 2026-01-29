<div align="center">

<!-- Hero Banner Luxury -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=E11D48&height=280&section=header&text=NUSA+NEWS&fontSize=80&fontAlignY=35&fontColor=ffffff" width="100%"/>

<!-- Typing Animation -->
<img src="https://readme-typing-svg.demolab.com?font=Inter&weight=700&size=35&pause=1000&color=E11D48&center=true&vCenter=true&width=600&lines=Portal+Berita+Terpercaya;Eksklusif+Universitas+Nusa+Putra;Aesthetic+Mobile+Interface" alt="Typing SVG" />

<p align="center">
  <img src="https://raw.githubusercontent.com/Ranggis/Api-Image/main/nusput.png" width="120" style="filter: drop-shadow(0 0 15px rgba(225, 29, 72, 0.4)); border-radius: 60px;" />
</p>

# NusaNews: Premium Mobile Portal
**Aplikasi Informasi Terpadu Mahasiswa Universitas Nusa Putra**

---

<p align="center">
  <a href="#-video-preview">
    <img src="https://img.shields.io/badge/PREVIEW_APP-0F172A?style=for-the-badge&logo=expo&logoColor=ffffff&labelColor=E11D48&color=0F172A" />
  </a>
  <a href="https://github.com/Ranggis/nusa-news/stargazers">
    <img src="https://img.shields.io/github/stars/Ranggis/nusa-news?style=for-the-badge&color=E11D48&labelColor=0F172A&logo=github" />
  </a>
</p>

<img src="https://img.shields.io/badge/React_Native-v0.7x-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/Expo-Router_v3-000000?style=for-the-badge&logo=expo&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-v5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Lucide_Icons-Aesthetic-E11D48?style=for-the-badge&logo=lucide&logoColor=white" />

</div>

## 📖 Intisari Proyek
**NusaNews** adalah aplikasi mobile berbasis **React Native** yang dirancang untuk memberikan pengalaman membaca berita yang modern dan seamless bagi civitas akademika Universitas Nusa Putra. Fokus utama pengembangan ini terletak pada **Estetika Visual (Aesthetic UI)**, **Optimasi Performa**, dan **Manajemen Kesalahan (Error Handling)** yang robust sesuai dengan standar industri.

---

## 📽️ Video Preview
Lihat bagaimana transisi halus dari Loading Screen hingga Dashboard System kami bekerja:

<div align="center">
  <a href="URL_VIDEO_YOUTUBE_KAMU_DISINI">
    <img src="https://img.youtube.com/vi/ID_VIDEO_YOUTUBE/maxresdefault.jpg" width="80%" alt="NusaNews Preview" style="border-radius: 20px; border: 3px solid #E11D48;">
  </a>
  <p><i>(Klik gambar untuk memutar video demo aplikasi)</i></p>
</div>

---

## 💎 Fitur Unggulan & Inovasi

| Fitur | Deskripsi | Status |
| :--- | :--- | :--- |
| ⚡ **Cinematic Loading** | Animasi typing logo dengan status sinkronisasi real-time. | `Stabil` |
| 🔍 **Smart Filter** | Pencarian berita dinamis menggunakan logika *useMemo*. | `Stabil` |
| 📑 **Dynamic Details** | Overlapping content layout dengan fitur share terintegrasi. | `Stabil` |
| 🛡️ **Integrity Check** | Dashboard pemantauan status API dan optimasi sistem. | `Stabil` |
| 🚀 **Onboarding Flow** | Alur penyambutan user yang aesthetic dan interaktif. | `Stabil` |

---

## 🛠️ Tech Stack & Ekosistem

<div align="center">
  <img src="https://skillicons.dev/icons?i=react,ts,js,vscode,git,github,figma" />
</div>

- **Framework:** React Native dengan SDK Expo (Managed Workflow)
- **Navigation:** Expo Router v3 (Native Stack Management)
- **State & Logic:** React Hooks (useMemo, useCallback, useRef)
- **Icons:** Lucide-React-Native Premium Set
- **Safe Zone:** React Native Safe Area Context

---

## 🛡️ Technical Debugging & Optimization (Session 14)
Proyek ini mengimplementasikan standar tinggi untuk penanganan bug dan performa aplikasi.

### 1. Perbaikan Bug (The Logic Fix)
Simulasi dilakukan dengan memicu *Null Pointer Exception*. Kami menggunakan teknik **Defensive Programming** untuk menanganinya.

**Sebelum (Crash):**
```typescript
const simulasikanError = () => {
  const data = null;
  return data.system.forceCrash(); // App langsung Crash
};
