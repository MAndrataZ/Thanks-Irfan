import { assetUrl } from "../utils/assetUrl.js";

export function hero(dosen) {
  const titik = Array.from({ length: 7 }, (_, i) => `<span style="--i:${i}"></span>`).join("");

  const foto = dosen.foto
    ? `<div class="hero__foto">
         <div class="hero__foto-klip">
           <img
             src="${assetUrl("foto/" + dosen.foto)}"
             alt="Foto ${dosen.nama}"
             width="230"
             height="288"
           />
         </div>
       </div>`
    : "";

  return `
    <section class="hero" id="hero">
      ${foto}
      <div class="spektrum" aria-hidden="true">${titik}</div>
      <h1 class="hero__title">
        Terima kasih,<br />
        <span class="hero__sapaan">Irfan Maliki, S.T., M.T., CITPM</span>
      </h1>
      <p class="hero__subtitle">Dari kami, anak bimbingan yang akhirnya sampai di garis finish</p>
      <p class="hero__date">Skripsi · ${dosen.tanggalYudisium}</p>
      <p class="hero__scroll">Gulir ke bawah</p>
    </section>
  `;
}