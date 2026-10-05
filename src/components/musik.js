import { assetUrl } from "../utils/assetUrl.js";

const VOLUME = 0.35;

export function musikToggle(dosen) {
  if (!dosen.musik) return "";

  return `
    <button class="musik baru" id="musik" type="button" aria-pressed="false" aria-label="Putar musik latar">
      <svg class="musik__ikon musik__ikon--mati" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M3 10v4h4l5 4V6L7 10H3z" />
        <path d="M16 9l5 6M21 9l-5 6" />
      </svg>
      <svg class="musik__ikon musik__ikon--nyala" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M3 10v4h4l5 4V6L7 10H3z" />
        <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
      </svg>
    </button>
  `;
}

export function initMusik(dosen) {
  const tombol = document.getElementById("musik");
  if (!tombol || !dosen.musik) return;

  const audio = new Audio(assetUrl("musik/" + dosen.musik));
  audio.loop = true;
  audio.preload = "none"; // file baru diunduh saat pertama kali diputar
  audio.volume = 0;

  let sedangMain = false;
  let fade = null;

  // naik/turun volume perlahan (di iOS volume tidak bisa diatur, tapi aman)
  function ubahVolume(target, selesai) {
    clearInterval(fade);
    const awal = audio.volume;
    let langkah = 0;
    fade = setInterval(() => {
      langkah++;
      const v = awal + (target - awal) * (langkah / 12);
      audio.volume = Math.min(1, Math.max(0, v));
      if (langkah >= 12) {
        clearInterval(fade);
        if (selesai) selesai();
      }
    }, 60);
  }

  function tampilan(nyala) {
    tombol.classList.toggle("nyala", nyala);
    tombol.classList.remove("baru");
    tombol.setAttribute("aria-pressed", String(nyala));
    tombol.setAttribute("aria-label", nyala ? "Jeda musik latar" : "Putar musik latar");
  }

  async function putar() {
    try {
      await audio.play();
      sedangMain = true;
      tampilan(true);
      ubahVolume(VOLUME);
    } catch {
      tampilan(false);
    }
  }

  function jeda() {
    sedangMain = false;
    tampilan(false);
    ubahVolume(0, () => audio.pause());
  }

  tombol.addEventListener("click", () => (sedangMain ? jeda() : putar()));

  // file tidak ditemukan: sembunyikan tombol
  audio.addEventListener("error", () => {
    tombol.hidden = true;
  });

  // jeda otomatis saat tab disembunyikan, lanjut saat kembali
  document.addEventListener("visibilitychange", () => {
    if (!sedangMain) return;
    if (document.hidden) audio.pause();
    else audio.play().catch(() => {});
  });
}