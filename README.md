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

## Intisari Proyek
**NusaNews** adalah aplikasi mobile berbasis **React Native** yang dirancang untuk memberikan pengalaman membaca berita yang modern dan seamless bagi civitas akademika Universitas Nusa Putra. Fokus utama pengembangan ini terletak pada **Estetika Visual (Aesthetic UI)**, **Optimasi Performa**, dan **Manajemen Kesalahan (Error Handling)** yang robust sesuai dengan standar industri.

---

## Cuplikan Pengalaman Pengguna
Transisi antar layar yang mulus mencerminkan kualitas kode dan efisiensi *rendering* sistem.

<div align="center">
  <br/>
  <p align="center">
    <img 
      src="https://raw.githubusercontent.com/Ranggis/Api-Image/main/NusaNews.gif" 
      width="320" 
      style="border-radius: 40px; border: 8px solid #0F172A; filter: drop-shadow(0 20px 50px rgba(225, 29, 72, 0.4));"
    />
  </p>
  <br/>
  <kbd><b>Sistem Terverifikasi (Session 14 Standard)</b></kbd>
</div>

---

## Fitur Unggulan & Inovasi

| Fitur | Deskripsi | Status |
| :--- | :--- | :--- |
| ⚡ **Cinematic Loading** | Animasi typing logo dengan status sinkronisasi real-time. | `Stabil` |
| 🔍 **Smart Filter** | Pencarian berita dinamis menggunakan logika *useMemo*. | `Stabil` |
| 📑 **Dynamic Details** | Overlapping content layout dengan fitur share terintegrasi. | `Stabil` |
| 🛡️ **Integrity Check** | Dashboard pemantauan status API dan optimasi sistem. | `Stabil` |
| 🚀 **Onboarding Flow** | Alur penyambutan user yang aesthetic dan interaktif. | `Stabil` |

---

## Tech Stack & Ekosistem

<div align="center">
  <img src="https://skillicons.dev/icons?i=react,ts,js,vscode,git,github,figma" />
</div>

- **Framework:** React Native dengan SDK Expo (Managed Workflow)
- **Navigation:** Expo Router v3 (Native Stack Management)
- **State & Logic:** React Hooks (useMemo, useCallback, useRef)
- **Icons:** Lucide-React-Native Premium Set
- **Safe Zone:** React Native Safe Area Context

---

## Technical Debugging & Optimization (Session 14)
Proyek ini mengimplementasikan standar tinggi untuk penanganan bug dan performa aplikasi.

### 1. Perbaikan Bug (The Logic Fix)
Simulasi dilakukan dengan memicu *Null Pointer Exception*. Kami menggunakan teknik **Defensive Programming** untuk menanganinya.

**Sebelum (Crash):**
```typescript
const simulasikanError = () => {
  const data = null;
  return data.system.forceCrash(); // App langsung Crash
};
```

**Sesudah (Fixed with Optional Chaining):**
```TypeScript
const simulasikanError = () => {
  const data = null;
  // Menggunakan Optional Chaining (?.) agar aplikasi tetap berjalan
  const checkData = data?.system?.forceCrash(); 

  if (!checkData) {
    setModalVisible(true); // Memunculkan Custom Aesthetic Modal
  }
};
```

**2. Strategi Optimasi Performa**
1. React.memo: Digunakan pada NewsCard untuk mencegah re-render list yang tidak perlu.
2. useMemo: Memastikan filter pencarian tidak membebani prosesor setiap kali user mengetik.
3. FlatList Tuning: Menggunakan initialNumToRender dan windowSize untuk efisiensi RAM.

**Instalasi Lokal**
```Bash
# 1. Kloning Repository
git clone https://github.com/Ranggis/nusa-news.git

# 2. Instalasi Dependensi
npm install

# 3. Jalankan Aplikasi
npx expo start
```

## Sole System Architect

Seluruh aspek perancangan UI/UX dan arsitektur kode dikerjakan secara mandiri oleh:
<div align="center">
<table border="0">
<tr>
<td align="center" width="600">
<img src="https://raw.githubusercontent.com/Ranggis/Api-Image/main/ranggisss.jpg" width="150" style="border-radius: 50%; border: 4px solid #E11D48; padding: 5px;" /><br>
<br>
<img src="https://img.shields.io/badge/SOLE_DEVELOPER-0F172A?style=for-the-badge&labelColor=E11D48&color=0F172A" /><br>
<font size="5" color="#E11D48"><strong>Ranggis</strong></font><br>
<font size="3"><i>NIM: 20230040197 • Universitas Nusa Putra</i></font><br>
<br>
<p align="center">
<a href="https://github.com/Ranggis">
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
</a>
<a href="https://instagram.com/ranggiss">
<img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
</a>
</p>
</td>
</tr>
</table>
</div>
<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=E11D48&height=100&section=footer" width="100%"/>
<p><i>"Membangun Masa Depan Informasi Kampus, Satu Baris Kode Sekaligus."</i></p>
</div>
