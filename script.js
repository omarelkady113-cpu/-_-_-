// بنمسك العناصر
const cardContainer = document.getElementById('cardContainer');
const card = document.getElementById('eidiyaCard');
const video = document.getElementById('eidVideo');

// إضافة حدث الضغط لقلب الكارت
cardContainer.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
});

// منع الكارت من القلب لو الدوسة كانت على الفيديو
// عشان تقدر تتحكم في الفيديو (تشغيل/إيقاف) براحتها
video.addEventListener('click', (event) => {
    event.stopPropagation();
});
