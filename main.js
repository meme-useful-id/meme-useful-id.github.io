// apa yang kamu lakukan di sini kawan? mencuri code ku? jangan lupa ijin ya!
// what are you doing here buddy? steal my code? don't forget to permission eh!

// menampilkan konten lalu kembali seperti semula (group button)

const sosial = document.getElementById('sosial');
const media = document.getElementById('media');
const all = document.getElementById('all');

const more = document.getElementById('more-information');
const textAktif = document.getElementById('aktifkan-text');

function tampilkanKonten() {
  var konten = document.getElementById('konten');
  var tombolMuncul = document.getElementById('tombol-muncul');
  var tombolKembali = document.getElementById('tombol-kembali');
  konten.style.display = 'block';
  tombolMuncul.style.display = 'none';
  tombolKembali.style.display = 'block';
}

function sembunyikanKonten() {
  var konten = document.getElementById('konten');
  var tombolMuncul = document.getElementById('tombol-muncul');
  var tombolKembali = document.getElementById('tombol-kembali');
  konten.style.display = 'none';
  tombolMuncul.style.display = 'block';
  tombolKembali.style.display = 'none';
}

// info paid promote tombol

function tampilkanKonten2() {
  var konten2 = document.getElementById('konten2');
  var tombolMuncul2 = document.getElementById('tombol-muncul2');
  var tombolKembali2 = document.getElementById('tombol-kembali2');
  konten2.style.display = 'block';
  tombolMuncul2.style.display = 'none';
  tombolKembali2.style.display = 'block';
}

function tampilkanKembali2() {
  var konten2 = document.getElementById('konten2');
  var tombolMuncul2 = document.getElementById('tombol-muncul2');
  var tombolKembali2 = document.getElementById('tombol-kembali2');
  konten2.style.display = 'none';
  tombolMuncul2.style.display = 'block';
  tombolKembali2.style.display = 'none';
}

function tombolMunculpp() {
  var kontenpp = document.getElementById('konten-pp');
  var tombolMunculpp = document.getElementById('tombol-muncul-pp');
  var backpp = document.getElementById('back-pp');
  kontenpp.style.display = 'block';
  tombolMunculpp.style.display = 'none';
  backpp.style.display = 'block';
}

function backPp() {
  var backpp = document.getElementById('back-pp');
  var kontenpp = document.getElementById('konten-pp');
  var tombolMunculpp = document.getElementById('tombol-muncul-pp');
  kontenpp.style.display = 'none';
  tombolMunculpp.style.display = 'block';
  backpp.style.display = 'none';
}

let what = document.getElementById('what');
let dis = document.getElementById('dis');

function whatsapp() {
  what.style.display = 'block';
}

function whatsapp() {
  alert('belom ada group whatsapp');
}

function discord() {
  alert('belum ada group discord');
}

sosial.addEventListener('click', function () {
  if (media.style.display === 'none') {
    // ini berpengaruh
    media.style.display = 'block';
    sosial.textContent = 'kembali'; //saat sudah di pencet
    all.style.display = 'none';
  } else {
    media.style.display = 'none';
    sosial.textContent = 'sosial media'; // saat belum di pencet
    all.style.display = 'block';
  }
});

// scroll berubah warna
window.addEventListener('scroll', function () {
  var body = document.querySelector('body');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 250) {
    body.classList.add('scroll');
    body.classList.remove('warna-awal');
  } else {
    body.classList.add('warna-awal');
    body.classList.remove('scroll');
  }
});
