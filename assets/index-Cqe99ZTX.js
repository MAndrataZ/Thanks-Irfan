(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={nama:`Nama Dosen Pembimbing`,tanggalYudisium:`DD Bulan YYYY`,angkatan:`Angkatan 20XX`,fotoBersama:``},t=[{id:1,nama:`Muhammad Andrata Zharfan Mustika, S.Kom`,nim:`10122250`,judulSkripsi:`Implementasi Retrieval-Augmented Generation Menggunakan Generator Qwen 2.5 7B Instruct Pada Sistem Tanya`,pesan:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`,foto:`atta.jpeg`},{id:2,nama:`Syahrial Usman Farahani, S.Kom`,nim:`10122369`,judulSkripsi:`KLASIFIKASI DEEPFAKE BERDASARKAN CITRA WAJAH MENGGUNAKAN FINE-TUNING PADA MODEL CONVNEXT-TINY`,pesan:`Terima pakk, atas bimbingan, bantuannya, energinya, tenaganya selama satu tahun ini, Terima atas bekal yg bapak berikan yang pasti akan berguna untuk masa depan saya, terimakasih sudah selalu sabar untuk membimbing perjalanan saya🙏`,foto:`Zuzu.png`},{id:3,nama:`Panji Wijaya, S.Kom`,nim:`10122409`,judulSkripsi:`KLASIFIKASI JENIS BAKTERI PATOGEN PADA CITRA MIKROSKOPIS MENGGUNAKAN CONVOLUTIONAL NEURAL NETWORK DENGAN ARSITEKTUR RESNET-50`,pesan:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`,foto:`panji.jpeg`},{id:4,nama:`Muhammad Farid Nurrahman, S.Kom`,nim:`10122256`,judulSkripsi:`Klasifikasi Penyakit Daun Kopi Robusta Menggunakan Deep Learning ConvNeXt`,pesan:`Aku berterimakasih yang sebesar besarnya buat bapak karna udah ngembimbing, ngasih masukkan, saran, dan udah ngajarin banyak hal. Aku juga minta maaf karna banyak banget kesalahan selama ngerjain skripsi, apalagi saat seminar dan sidang. Dan terimakasih udah mempermudah aku dalam proses skrispi dari awal sampai selesai.`,foto:`parit.jpeg`},{id:5,nama:`Ganesha Duta Hanura, S.Kom`,nim:`10122423`,judulSkripsi:`Klasifikasi Panyakit Jantung Berbasis Sosiologi-Demografi dan Hipertensi menggunakan Weight of Evidence dan XGBoost di Jawa Barat`,pesan:`Terimakasih kasih pak atas waktu dan usaha bapak selama setahun terakhir ini, karena bapak saya bisa  menyelesaikan skripsi ini dengan baik, sempat ada masa-masa down sewaktu proposal, tapi karena pesan bapak yang jangan menyerah saya jadi bisa terus melanjutkan sampai akhir, sekali lagi terima kasih untuk semuanya`,foto:`ganesh.jpeg`},{id:6,nama:`Jan Kowalski`,nim:`10122006`,judulSkripsi:`Pengembangan Chatbot Berbasis Retrieval-Augmented Generation`,pesan:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`,foto:``},{id:7,nama:`Erika Mustermann`,nim:`10122007`,judulSkripsi:`Perbandingan Algoritma SVM dan Random Forest untuk Analisis Sentimen Ulasan Produk`,pesan:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`,foto:``},{id:8,nama:`Max Mustermann`,nim:`10122008`,judulSkripsi:`Segmentasi Citra Medis Menggunakan Arsitektur U-Net`,pesan:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`,foto:``},{id:9,nama:`Pierre Dupont`,nim:`10122009`,judulSkripsi:`Evaluasi Kinerja Model Bahasa Besar pada Tugas Peringkasan Teks Berbahasa Indonesia`,pesan:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`,foto:``},{id:10,nama:`Maria Silva`,nim:`10122010`,judulSkripsi:`Analisis Sentimen Berbasis Aspek pada Ulasan Layanan Transportasi Daring`,pesan:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`,foto:``}];function n(e){return`
    <section class="hero" id="hero">
      <div class="spektrum" aria-hidden="true">${Array.from({length:7},(e,t)=>`<span style="--i:${t}"></span>`).join(``)}</div>
      <h1 class="hero__title">Terima Kasih,<br />${e.nama}</h1>
      <p class="hero__subtitle">Dari kami, anak bimbingan, menjelang yudisium</p>
      <p class="hero__date">${e.tanggalYudisium}</p>
      <p class="hero__scroll">Gulir ke bawah</p>
    </section>
  `}function r(e){return`
    <section class="opening" id="pembuka">
      <p class="reveal">
        Bapak/Ibu yang kami hormati, perjalanan skripsi ini tidak mudah, dan kami
        tidak akan sampai di sini tanpa bimbingan, kesabaran, dan doa dari ${e.nama}.
        Menjelang yudisium, izinkan kami menyampaikan terima kasih kami masing-masing,
        satu per satu, dengan sepenuh hati.
      </p>
    </section>
    <hr class="garis" />
  `}function i(e){return`/Thanks-Irfan/`+e.replace(/^\//,``)}function a(e){return e.split(` `).filter(Boolean).slice(0,2).map(e=>e[0].toUpperCase()).join(``)}function o(e,t){let n=t%2==1?` reverse`:``,r=e.foto?`<img src="${i(`foto/`+e.foto)}" alt="Foto ${e.nama}" loading="lazy" />`:`<span class="ucapan__inisial" role="img" aria-label="Inisial ${e.nama}">${a(e.nama)}</span>`;return`
    <section class="ucapan${n}" id="ucapan-${e.id}" data-index="${t}">
      <article class="ucapan__inner reveal">
        <div class="ucapan__foto">${r}</div>
        <div class="ucapan__isi">
          <h2 class="ucapan__nama">${e.nama}</h2>
          <p class="ucapan__nim">${e.nim}</p>
          <p class="ucapan__judul">${e.judulSkripsi}</p>
          <p class="ucapan__pesan">${e.pesan}</p>
        </div>
      </article>
    </section>
  `}function s(e){return`
    <section class="closing" id="penutup">
      <div class="closing__card reveal">
        <h2 class="closing__title">Terima Kasih, Sekali Lagi</h2>
        ${e.fotoBersama?`<img class="closing__foto" src="${i(`foto/`+e.fotoBersama)}" alt="Foto bersama anak bimbingan" loading="lazy" />`:``}
        <p class="closing__text">
          Terima kasih atas ilmu, waktu, dan kesabaran yang telah diberikan.
          Semoga kebaikan Bapak/Ibu dibalas berlipat, dan semoga kami dapat
          menjadi kebanggaan di mana pun kami melangkah.
        </p>
        <p class="closing__ttd">
          Hormat kami,
          <strong>Anak Bimbingan ${e.angkatan}</strong>
        </p>
      </div>
    </section>
  `}function c(){return`
    <div class="progress" aria-hidden="true">
      <div class="progress__bar" id="progress-bar"></div>
    </div>
    <div class="progress__label" id="progress-label" aria-hidden="true"></div>
  `}function l(e,t,n){let r=document.getElementById(`progress-bar`),i=document.getElementById(`progress-label`);r&&i&&(r.style.width=`${e}%`,t>=0?(i.textContent=`${t+1}/${n}`,i.classList.add(`show`)):i.classList.remove(`show`))}function u(e){return`<nav class="dotnav" aria-label="Navigasi ucapan">${e.map(e=>`<a href="#ucapan-${e.id}" aria-label="Ke ucapan ${e.nama}" title="${e.nama}"></a>`).join(``)}</nav>`}function d(e){document.querySelectorAll(`.dotnav a`).forEach((t,n)=>{t.classList.toggle(`active`,n===e)})}function f(){let e=document.querySelectorAll(`.reveal`);if(!(`IntersectionObserver`in window)){e.forEach(e=>e.classList.add(`visible`));return}let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`visible`),t.unobserve(e.target))})},{threshold:.15});e.forEach(e=>t.observe(e))}document.querySelector(`#app`).innerHTML=`
  ${c()}
  ${u(t)}
  <main>
    ${n(e)}
    ${r(e)}
    ${t.map((e,t)=>o(e,t)).join(`<hr class="garis" />`)}
    ${s(e)}
  </main>
`,f();var p=document.querySelectorAll(`.ucapan`),m=!1;function h(){let e=window.innerHeight/2;for(let t=0;t<p.length;t++){let n=p[t].getBoundingClientRect();if(n.top<=e&&n.bottom>e)return t}return-1}function g(){let e=document.documentElement.scrollHeight-window.innerHeight,n=e>0?window.scrollY/e*100:0,r=h();l(n,r,t.length),d(r),m=!1}window.addEventListener(`scroll`,()=>{m||(m=!0,requestAnimationFrame(g))},{passive:!0}),window.addEventListener(`resize`,g),g();