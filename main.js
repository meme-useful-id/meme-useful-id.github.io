// apa yang kamu lakukan di sini kawan? mencuri code ku? jangan lupa ijin ya!
// what are you doing here buddy? steal my code? don't forget to permission eh!

// menampilkan konten lalu kembali seperti semula (group button)

const sosial = document.getElementById('sosial');
const media = document.getElementById('media');
const all = document.getElementById('all');

sosial.addEventListener('click', function () {
  if (media.style.display === 'none') {
    // ini berpengaruh
    media.style.display = 'block';
    sosial.innerHTML = '<i class="bi bi-instagram"></i>'; //saat sudah di pencet
    sosial.style.color = 'white';
    all.style.display = 'none';
  } else {
    media.style.display = 'none';
    sosial.innerHTML = '<i class="bi bi-instagram"></i>'; // saat belum di pencet
    all.style.display = 'block';
  }
});
