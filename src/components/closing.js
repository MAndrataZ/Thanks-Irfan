import { assetUrl } from "../utils/assetUrl.js";

export function closing(dosen) {
  const fotoBersama = dosen.fotoBersama
    ? `<img class="closing__foto" src="${assetUrl("foto/" + dosen.fotoBersama)}" alt="Foto bersama anak bimbingan" loading="lazy" />`
    : "";

  return `
    <section class="closing" id="penutup">
      <div class="closing__card reveal">
        <h2 class="closing__title">Terima Kasih, Sekali Lagi</h2>
        ${fotoBersama}
        <p class="closing__text">
          Terima kasih atas ilmu, waktu, dan kesabaran yang telah diberikan.
          Semoga kebaikan Bapak/Ibu dibalas berlipat, dan semoga kami dapat
          menjadi kebanggaan di mana pun kami melangkah.
        </p>
        <p class="closing__ttd">
          Hormat kami,
          <strong>Anak Bimbingan ${dosen.angkatan}</strong>
        </p>
      </div>
    </section>
  `;
}