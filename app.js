const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote');
const shareQuoteBtn = document.getElementById('share-quote');

const quotes = [
  { text: "Kesuksesan tidak datang kepada Anda, Anda harus pergi kepada kesuksesan.", author: "Marva Collins" },
  { text: "Hidup bukan tentang menunggu badai berlalu, tetapi tentang belajar menari di tengah hujan.", author: "Vivian Greene" },
  { text: "Jangan menunggu; waktu tidak akan pernah tepat. Mulailah dari tempat Anda berdiri dan kerjakan alat yang Anda miliki, dan alat yang lebih baik akan ditemukan saat Anda pergi.", author: "Napoleon Hill" },
  { text: "Keberhasilan adalah kemampuan untuk pergi dari kegagalan ke kegagalan tanpa kehilangan semangat.", author: "Winston Churchill" },
  { text: "Satu-satunya cara untuk melakukan pekerjaan besar adalah dengan mencintai apa yang Anda lakukan.", author: "Steve Jobs" },
  { text: "Kemampuan terbesar dari manusia adalah kemampuannya untuk berubah.", author: "John C. Maxwell" },
  { text: "Apa yang Anda lakukan hari ini dapat meningkatkan semua hari esok Anda.", author: "Ralph Marston" },
  { text: "Jangan menyerah, kemarin sulit. Hari ini lebih sulit, tetapi besok akan ada sinar matahari.", author: "Jack Ma" },
  { text: "Kesalahan adalah kesempatan untuk memulai lagi dengan lebih bijaksana.", author: "Henry Ford" },
  { text: "Hidup adalah 10% dari apa yang terjadi pada kita dan 90% dari bagaimana kita menanggapinya.", author: "Charles R. Swindoll" }
];

// Backgrounds Array
const backgrounds = [
  'linear-gradient(135deg, #ff7e5f, #feb47b)',
  'linear-gradient(135deg, #6a0572, #b04191)',
  'linear-gradient(135deg, #1e3c72, #2a5298)',
  'linear-gradient(135deg, #f7f8f8, #e2e2e2)',
  'linear-gradient(135deg, #ff6f61, #d4a5a5)',
  'linear-gradient(135deg, #00c6ff, #0072ff)',
  'linear-gradient(135deg, #f2c94c, #f2994a)',
  'linear-gradient(135deg, #ff9a9e, #fad0c4)',
  'linear-gradient(135deg, #ff758c, #ff7eb3)',
  'linear-gradient(135deg, #00d2ff, #3a7bd5)'
];

// Fungsi untuk mendapatkan quote acak dari array
function getNewQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteText.textContent = quote.text;
  quoteAuthor.textContent = quote.author ? `— ${quote.author}` : '— Tidak Diketahui';
  changeBackground();
}

// Fungsi untuk mengubah background warna secara dinamis dan menyesuaikan warna teks
function changeBackground() {
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const background = backgrounds[randomIndex];
  document.body.style.background = background;

  // Menyesuaikan warna teks berdasarkan background
  const isLightBackground = background.includes('f7f8f8') || background.includes('e2e2e2') || background.includes('ff6f61');
  document.body.style.color = isLightBackground ? '#000' : '#fff';
}

// Fungsi untuk berbagi quote di Twitter
function shareOnTwitter() {
  const tweetText = `${quoteText.textContent} — ${quoteAuthor.textContent}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
  window.open(twitterUrl, '_blank');
}

newQuoteBtn.addEventListener('click', getNewQuote);
shareQuoteBtn.addEventListener('click', shareOnTwitter);

getNewQuote();

