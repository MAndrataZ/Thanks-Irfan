export function hero(dosen) {
  const titik = Array.from({ length: 7 }, (_, i) => `<span style="--i:${i}"></span>`).join("");

  return `
    <section class="hero" id="hero">
      <div class="spektrum" aria-hidden="true">${titik}</div>
      <h1 class="hero__title">Terima Kasih,<br />${dosen.nama}</h1>
      <p class="hero__subtitle">Dari kami, anak bimbingan, menjelang yudisium</p>
      <p class="hero__date">${dosen.tanggalYudisium}</p>
      <p class="hero__scroll">Gulir ke bawah</p>
    </section>
  `;
}