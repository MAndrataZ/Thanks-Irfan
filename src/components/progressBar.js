export function progressBar() {
  return `
    <div class="progress" aria-hidden="true">
      <div class="progress__bar" id="progress-bar"></div>
    </div>
    <div class="progress__label" id="progress-label" aria-hidden="true"></div>
  `;
}

// persen: 0-100, aktif: indeks kartu (0-based) atau -1, total: jumlah ucapan
export function updateProgress(persen, aktif, total) {
  const bar = document.getElementById("progress-bar");
  const label = document.getElementById("progress-label");
  if (!bar || !label) return;

  bar.style.width = `${persen}%`;

  if (aktif >= 0) {
    label.textContent = `${aktif + 1}/${total}`;
    label.classList.add("show");
  } else {
    label.classList.remove("show");
  }
}