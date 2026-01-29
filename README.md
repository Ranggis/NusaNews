<div align="center">

  <!-- Hero Banner Luxury -->
  <img src="https://capsule-render.vercel.app/api?type=waving&color=E11D48&height=280&section=header&text=NUSA+NEWS&fontSize=80&fontAlignY=35&fontColor=ffffff" width="100%" />

  <!-- Typing Animation -->
  <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=700&size=35&pause=1000&color=E11D48&center=true&vCenter=true&width=600&lines=Portal+Berita+Terpercaya;Eksklusif+Universitas+Nusa+Putra;Aesthetic+Mobile+Interface" alt="Typing SVG" />

  <!-- Logo -->
  <p>
    <img src="https://raw.githubusercontent.com/Ranggis/Api-Image/main/nusput.png" width="120" 
      style="filter: drop-shadow(0 0 15px rgba(225, 29, 72, 0.4)); border-radius: 60px;" />
  </p>

  <!-- Title -->
  <h1>NusaNews: Premium Mobile Portal</h1>
  <p><b>Aplikasi Informasi Terpadu Mahasiswa Universitas Nusa Putra</b></p>

  <!-- Badges -->
  <p>
    <a href="#-video-preview">
      <img src="https://img.shields.io/badge/PREVIEW_APP-0F172A?style=for-the-badge&logo=expo&logoColor=ffffff&labelColor=E11D48&color=0F172A" />
    </a>
    <a href="https://github.com/Ranggis/nusa-news/stargazers">
      <img src="https://img.shields.io/github/stars/Ranggis/nusa-news?style=for-the-badge&color=E11D48&labelColor=0F172A&logo=github" />
    </a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React_Native-v0.7x-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
    <img src="https://img.shields.io/badge/Expo_Router-v3-000000?style=for-the-badge&logo=expo&logoColor=white" />
    <img src="https://img.shields.io/badge/TypeScript-v5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/Lucide_Icons-Aesthetic-E11D48?style=for-the-badge&logo=lucide&logoColor=white" />
  </p>

</div>

---

## 📖 Intisari Proyek
**NusaNews** adalah aplikasi mobile berbasis **React Native** yang dirancang untuk memberikan pengalaman membaca berita yang modern dan seamless bagi civitas akademika Universitas Nusa Putra. Aplikasi ini berfokus pada:

- **Estetika Visual (Aesthetic UI)**
- **Optimasi Performa**
- **Robust Error Handling**
- **Smooth Transition Experience**

---

## 📽️ Video Preview
Melihat bagaimana transisi halus dari Loading Screen hingga Dashboard bekerja:

<div align="center">
  <a href="URL_VIDEO_YOUTUBE_KAMU">
    <img src="https://img.youtube.com/vi/ID_VIDEO_YOUTUBE/maxresdefault.jpg" 
         width="80%" 
         alt="NusaNews Preview" 
         style="border-radius: 20px; border: 3px solid #E11D48;">
  </a>
  <p><i>(Klik gambar untuk memutar video demo aplikasi)</i></p>
</div>

---

## 💎 Fitur Unggulan & Inovasi

| Fitur | Deskripsi | Status |
| :--- | :--- | :--- |
| ⚡ **Cinematic Loading** | Animasi typing logo dengan status sinkronisasi real-time. | `Stabil` |
| 🔍 **Smart Filter** | Pencarian berita dinamis menggunakan logika *useMemo*. | `Stabil` |
| 📑 **Dynamic Details** | Overlapping content layout dengan fitur share. | `Stabil` |
| 🛡️ **Integrity Check** | Dashboard pemantauan status API & sistem. | `Stabil` |
| 🚀 **Onboarding Flow** | Alur penyambutan aesthetic & interaktif. | `Stabil` |

---

## 🛠️ Tech Stack & Ekosistem

<div align="center">
  <img src="https://skillicons.dev/icons?i=react,ts,js,vscode,git,github,figma" />
</div>

- **Framework:** React Native (Expo SDK)
- **Routing:** Expo Router v3
- **State Logic:** React Hooks (useMemo, useCallback, useRef)
- **Icons:** Lucide Icons (Premium)
- **Safe Zone:** react-native-safe-area-context

---

## 🛡️ Debugging & Optimization (Session 14)

### **1. Fix Error Logic**

**Sebelum (Crash):**
```ts
const simulasikanError = () => {
  const data = null;
  return data.system.forceCrash(); 
};
Sesudah (Stabil):

const simulasikanError = () => {
  const data = null;
  const checkData = data?.system?.forceCrash();

  if (!checkData) {
    setModalVisible(true);
  }
};
```

2. Strategi Optimasi Performa
React.memo → mencegah re-render list tidak perlu

useMemo → optimasi filter pencarian

FlatList tuning → efisiensi RAM & GPU

🚀 Instalasi Lokal
```
# 1. Clone repo
git clone https://github.com/Ranggis/nusa-news.git

# 2. Install dependencies
npm install

# 3. Jalankan aplikasi
npx expo start
```

💎 Sosok Dibalik Layar (Sole Architect)
<div align="center"> <table border="0" style="border-collapse: collapse;"> <tr> <td align="center" width="600" style="background-color:#ffffff; border-radius:30px; padding:40px; border:1px solid #F1F5F9;">
    <!-- Avatar -->
    <a href="https://github.com/Ranggis">
      <img 
        src="https://raw.githubusercontent.com/Ranggis/Api-Image/main/ranggisss.jpg"
        width="180"
        style="border-radius:50%; border:5px solid #E11D48; padding:5px; filter:drop-shadow(0 0 15px rgba(225,29,72,0.4));"
      />
    </a>

    <br/><br/>

    <!-- Badges -->
    <p>
      <img src="https://img.shields.io/badge/FULLSTACK_MOBILE-0F172A?style=for-the-badge&labelColor=E11D48&color=0F172A" />
      <img src="https://img.shields.io/badge/UI/UX_ENGINEER-0F172A?style=for-the-badge&labelColor=334155&color=0F172A" />
    </p>

    <!-- Identity -->
    <h2 style="color:#0F172A; font-family:Inter, sans-serif;">Ranggis</h2>
    <p style="color:#64748B; font-size:16px; margin-top:-10px;">
      <b>NIM: 20230040197</b><br/>
      Teknik Informatika • Universitas Nusa Putra
    </p>

    <!-- Skills -->
    <p>
      <img src="https://img.shields.io/badge/React_Native-61DAFB?style=flat-square&logo=react&logoColor=black" />
      <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
      <img src="https://img.shields.io/badge/Expo-000020?style=flat-square&logo=expo&logoColor=white" />
      <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white" />
    </p>

    <!-- Social -->
    <p>
      <a href="https://github.com/Ranggis">
        <img src="https://img.shields.io/badge/Connect_on_GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
      </a>
      <a href="https://instagram.com/ranggiss">
        <img src="https://img.shields.io/badge/Follow_on_Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
      </a>
    </p>

    <!-- Quote -->
    <p style="color:#94A3B8; font-style:italic; font-size:14px; max-width:450px; margin:auto;">
      "Mengintegrasikan logika pemrograman yang presisi dengan estetika visual untuk menciptakan solusi mobile yang bermakna."
    </p>

  </td>
</tr>
</table> </div>
<div align="center"> <img src="https://capsule-render.vercel.app/api?type=waving&color=E11D48&height=100&section=footer" width="100%" /> <p><i>"Membangun Masa Depan Informasi Kampus, Satu Baris Kode Sekaligus."</i></p> </div> ```
