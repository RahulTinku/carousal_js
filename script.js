const imgSrc = [
  'assets/1.PNG',
  'assets/2.PNG',
  'assets/3.PNG',
  'assets/4.PNG',
  'assets/5.PNG',
];

/** Automatic  */
// document.addEventListener('DOMContentLoaded', function () {
let count = 0;
let slides = document.getElementsByClassName('content');

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  count++;
  if (count > slides.length) count = 1;

  slides[count - 1].style.display = 'block';
  //setTimeout(showSlide, 2000);
}
//setInterval(showSlide, 2000);
//showSlide()
//});

/** Manual carousal */
let manualCount = 1;
showSlidsManual(manualCount);

plusSlide = (index) => {
  manualCount += index;
  showSlidsManual(manualCount);
};

function showSlidsManual(index) {
  if (index > slides.length) manualCount = 1;
  if (index < 1) manualCount = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  manualCount;
  slides[manualCount - 1].style.display = 'block';
  if (manualCount > slides.length) manualCount = 1;
}
