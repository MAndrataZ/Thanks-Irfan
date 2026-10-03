import { assetUrl } from "../utils/assetUrl.js";

function inisial(nama) {
  return nama
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((k) => k[0].toUpperCase())
    .join("");
}

// index dimulai dari 0; kartu ke-2, ke-4, dst. dibalik (foto di kanan) di desktop
export function renderUcapan(item, index) {
  const reverse = index % 2 === 1 ? " reverse" : "";

  const foto = item.foto
    ? `<img src="${assetUrl("foto/" + item.foto)}" alt="Foto ${item.nama}" loading="lazy" />`
    : `<span class="ucapan__inisial" role="img" aria-label="Inisial ${item.nama}">${inisial(item.nama)}</span>`;

  return `
    <section class="ucapan${reverse}" id="ucapan-${item.id}" data-index="${index}">
      <article class="ucapan__inner reveal">
        <div class="ucapan__foto">${foto}</div>
        <div class="ucapan__isi">
          <h2 class="ucapan__nama">${item.nama}</h2>
          <p class="ucapan__nim">${item.nim}</p>
          <p class="ucapan__judul">${item.judulSkripsi}</p>
          <p class="ucapan__pesan">${item.pesan}</p>
        </div>
      </article>
    </section>
  `;
}