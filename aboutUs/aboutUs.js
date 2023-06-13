function parallaxEffect() {
  var scrollPosition = window.pageYOffset;

  var backgroundLayer = document.getElementById('background-layer');
  var foregroundLayer = document.getElementById('foreground-layer');
  var text1 = document.querySelector('.humanText');
  var text2 = document.querySelector('.humanText2');

  backgroundLayer.style.transform = `translateY(${scrollPosition * 0.05}px)`;
  foregroundLayer.style.transform = `translateY(-${scrollPosition * 0.3}px)`;
  text1.style.transform = `translateY(-${scrollPosition * 1.0}px)`;
  text2.style.transform = `translateY(-${scrollPosition * 1.0}px)`;
}

window.addEventListener('scroll', parallaxEffect);
