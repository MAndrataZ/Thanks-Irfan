import "./style.css";
import { dosen, ucapan } from "./data/ucapan.js";
import { hero } from "./components/hero.js";
import { opening } from "./components/opening.js";
import { renderUcapan } from "./components/ucapan.js";
import { closing, initAmplop } from "./components/closing.js";
import { progressBar, updateProgress } from "./components/progressBar.js";
import { dotNav, setActiveDot } from "./components/dotNav.js";
import { initReveal } from "./utils/reveal.js";

document.querySelector("#app").innerHTML = `
  ${progressBar()}
  ${dotNav(ucapan)}
  <main>
    ${hero(dosen)}
    ${opening(dosen)}
    ${ucapan.map((u, i) => renderUcapan(u, i)).join('<hr class="garis" />')}
    ${closing(dosen, ucapan)}
  </main>
`;

initReveal();
initAmplop();

// ---- Progress bar + titik navigasi aktif ----
const kartu = document.querySelectorAll(".ucapan");
let menunggu = false;

function cariAktif() {
  const tengah = window.innerHeight / 2;
  for (let i = 0; i < kartu.length; i++) {
    const r = kartu[i].getBoundingClientRect();
    if (r.top <= tengah && r.bottom > tengah) return i;
  }
  return -1;
}

function perbarui() {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const persen = total > 0 ? (window.scrollY / total) * 100 : 0;
  const aktif = cariAktif();

  updateProgress(persen, aktif, ucapan.length);
  setActiveDot(aktif);
  menunggu = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!menunggu) {
      menunggu = true;
      requestAnimationFrame(perbarui);
    }
  },
  { passive: true }
);
window.addEventListener("resize", perbarui);
perbarui();