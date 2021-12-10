const lis = Array.from(document.querySelectorAll('[data-duration]'));

let li = lis.filter(li => li.textContent.includes('JAVASCRIPT LANJUTAN | '))
    .map(waktu => waktu.dataset.duration.split(':').map(item => parseFloat(item)))
    .map(waktu => waktu[0] * 60 + waktu[1])
    .reduce((acc, item) => acc + item);

let jam = Math.floor(li / 3600);

li = li - (jam * 3600);

const menit = Math.floor(li / 60);

const detik = li - menit * 60;

const jumlahVideo = Array.from(document.querySelectorAll('[data-duration]')).filter(item => item.textContent.includes('JAVASCRIPT LANJUTAN | '));

const total = jumlahVideo.length;

// DOM
const durasi = document.querySelector('.total-durasi');
durasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

const hasil = document.querySelector('.jumlah-video');
hasil.textContent = `${total} video`;