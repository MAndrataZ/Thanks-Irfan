import { assetUrl } from "../utils/assetUrl.js";

// posisi bintang tetap supaya tampilan konsisten tiap dimuat
const BINTANG = [
  { x: "8%", y: "12%", s: "14px", d: "0s" },
  { x: "88%", y: "9%", s: "10px", d: "0.8s" },
  { x: "20%", y: "30%", s: "8px", d: "1.6s" },
  { x: "78%", y: "26%", s: "16px", d: "0.4s" },
  { x: "6%", y: "52%", s: "12px", d: "2.2s" },
  { x: "93%", y: "48%", s: "9px", d: "1.2s" },
  { x: "14%", y: "76%", s: "15px", d: "0.6s" },
  { x: "85%", y: "72%", s: "11px", d: "2s" },
  { x: "30%", y: "90%", s: "9px", d: "1.4s" },
  { x: "66%", y: "92%", s: "13px", d: "0.2s" },
];

function inisial(nama) {
  return nama
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((k) => k[0].toUpperCase())
    .join("");
}

export function closing(dosen, daftar = []) {
  const sapaan = dosen.sapaan ?? dosen.nama;

  const bintang = BINTANG.map(
    (b) =>
      `<span class="bintang" style="--x:${b.x};--y:${b.y};--s:${b.s};--d:${b.d}"></span>`
  ).join("");

  const titik = Array.from({ length: 7 }, (_, i) => `<span style="--i:${i}"></span>`).join("");

  const fotoBersama = dosen.fotoBersama
    ? `<img class="closing__foto" src="${assetUrl("foto/" + dosen.fotoBersama)}" alt="Foto bersama anak bimbingan" loading="lazy" />`
    : "";

  const avatar = daftar
    .map((u, i) => {
      const isi = u.foto
        ? `<img src="${assetUrl("foto/" + u.foto)}" alt="" loading="lazy" />`
        : inisial(u.nama);
      return `<span class="closing__avatar" style="--i:${i}" title="${u.nama}">${isi}</span>`;
    })
    .join("");

  const tim = daftar.length
    ? `<div class="closing__tim" role="img" aria-label="Ditandatangani oleh ${daftar.length} anak bimbingan">${avatar}</div>
       <p class="closing__tim-ket">${daftar.length} anak bimbingan, satu terima kasih</p>`
    : "";

  return `
    <section class="closing" id="penutup">
      <div class="closing__bintang" aria-hidden="true">${bintang}</div>

      <div class="closing__panggung">

        <div class="amplop-wrap">
          <div class="amplop-judul">
            <p class="amplop-judul__label">Satu surat terakhir</p>
            <h2 class="amplop-judul__teks">Ada pesan untuk ${sapaan}</h2>
          </div>

          <div class="amplop-kotak">
            <button
              class="amplop"
              id="amplop"
              type="button"
              aria-expanded="false"
              aria-controls="surat"
              aria-label="Buka amplop, ucapan penutup untuk ${sapaan}"
            >
              <span class="amplop__belakang"></span>
              <span class="amplop__surat" aria-hidden="true"><span>Untuk ${sapaan},</span></span>
              <span class="amplop__depan"></span>
              <span class="amplop__alamat" aria-hidden="true">Untuk ${sapaan}</span>
              <span class="amplop__perangko" aria-hidden="true">♥</span>
              <span class="amplop__tutup"></span>
              <span class="amplop__segel" aria-hidden="true">♥</span>
            </button>
          </div>

          <p class="amplop__petunjuk">Ketuk amplop untuk membuka</p>
        </div>

        <div class="closing__card" id="surat" tabindex="-1">
          <div class="spektrum" aria-hidden="true">${titik}</div>
          <p class="closing__label">Dari kami, dengan sepenuh hati</p>
          <h2 class="closing__title">Terima Kasih Pak, Doakan Kami Ya!</h2>
          ${fotoBersama}
          <p class="closing__text closing__text--awal">
            Terima kasih atas ilmu, waktu, dan kesabaran yang telah Bapak berikan
            selama kami menyusun skripsi. Setiap koreksi, setiap diskusi, dan
            setiap dorongan kecil sangat berarti bagi kami.
          </p>
          <p class="closing__text">
            Semoga kebaikan Bapak dibalas berlipat, dan semoga kami dapat
            menjadi kebanggaan di mana pun kami melangkah, mohon doa dan restunya dalam perjalanan selanjutnya kami.
          </p>
          <p class="closing__ttd">
            Hormat kami,
            <strong>Anak Bimbingan ${dosen.angkatan}</strong>
          </p>
          ${tim}
          <span class="closing__segel" aria-hidden="true">♥</span>
        </div>

      </div>
    </section>
  `;
}

export function initAmplop() {
  const section = document.getElementById("penutup");
  const amplop = document.getElementById("amplop");
  const surat = document.getElementById("surat");
  if (!section || !amplop || !surat) return;

  const kurangGerak = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  amplop.addEventListener(
    "click",
    () => {
      amplop.disabled = true;
      amplop.setAttribute("aria-expanded", "true");
      section.classList.add("buka");

      setTimeout(() => {
        section.classList.add("tampil");
        surat.focus({ preventScroll: true });
      }, kurangGerak ? 0 : 1300);
    },
    { once: true }
  );
}