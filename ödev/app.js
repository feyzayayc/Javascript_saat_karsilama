const zaman = document.querySelector('.clock');
const myName = document.querySelector('#myName');

const isim = prompt('Lütfen isminizi giriniz');
myName.textContent = isim;

setInterval(() => {
    const saat = new Date().getHours();
    const dakika = new Date().getMinutes();
    const saniye = new Date().getSeconds();
    const day = new Date().getDay().toLocaleString('tr-TR');
    const gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    toplam = saat +":"+dakika+":"+saniye + " - " + gunler[day];
    // zaman = zaman.toLocaleDateString();
    zaman.innerHTML = toplam ;
    // zaman.innerHTML = zaman.toLocaleString('tr-TR');
}, 1000);

