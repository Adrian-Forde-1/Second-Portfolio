//Adding onclick to hamburger to operate navbar

if (document.querySelector('.hamburger')) {
  document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-wrapper ul').classList.toggle('nav-open');
  });
}

//Decide which highlight color to use when page resizes
window.addEventListener('resize', () => {
  var vw = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  if (vw <= 567) {
    textHighlightColor = '#64ffda';
  } else if (textHighlightColor !== '#f15f79') textHighlightColor = '#f15f79';
});

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//Paralax Effect
window.addEventListener('scroll', (e) => {
  var headerGraphics = document.querySelectorAll('#scroll');

  var index = 0;
  var length = headerGraphics.length;

  for (index; index < length; index++) {
    var pos = window.pageYOffset * headerGraphics[index].dataset.parallaxRate;

    headerGraphics[index].style.transform = `translate3d(0px, ${pos}px, 0px)`;
  }
});
