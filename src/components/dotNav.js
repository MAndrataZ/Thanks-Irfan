export function dotNav(daftar) {
  const titik = daftar
    .map(
      (u) =>
        `<a href="#ucapan-${u.id}" aria-label="Ke ucapan ${u.nama}" title="${u.nama}"></a>`
    )
    .join("");

  return `<nav class="dotnav" aria-label="Navigasi ucapan">${titik}</nav>`;
}

export function setActiveDot(aktif) {
  document.querySelectorAll(".dotnav a").forEach((a, i) => {
    a.classList.toggle("active", i === aktif);
  });
}