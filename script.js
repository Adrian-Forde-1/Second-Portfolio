//Get all span letters
const nameSpans = document.querySelectorAll('.name span');

//Set highlight color for span letters
var textHighlightColor;

//Adding onclick to hamburger to operate navbar
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-wrapper ul').classList.toggle('nav-open');
});

//Decide which highlight color to use when page loads
window.onload = () => {
  const vw = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );

  if (vw <= 567) {
    textHighlightColor = '#64ffda';
  } else {
    textHighlightColor = '#f15f79';
  }
};

//Decide which highlight color to use when page resizes
window.addEventListener('resize', () => {
  const vw = Math.max(
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

//Loops through all span letters and change their color to the highlight color and
//change them back after a period of time. Do this continuously
nameSpans.forEach((span, index) => {
  setTimeout(() => {
    span.style.color = textHighlightColor;
    setTimeout(() => {
      span.style.color = 'white';
    }, 500);
  }, 500 * index + 1);
});
setInterval(() => {
  nameSpans.forEach((span, index) => {
    setTimeout(() => {
      span.style.color = textHighlightColor;
      setTimeout(() => {
        span.style.color = 'white';
      }, 500);
    }, 500 * index + 1);
  });
}, 500 * nameSpans.length);

//Paralax Effect
window.addEventListener('scroll', (e) => {
  const headerGraphics = document.querySelectorAll('#scroll');

  var index = 0;
  var length = headerGraphics.length;

  for (index; index < length; index++) {
    var pos = window.pageYOffset * headerGraphics[index].dataset.parallaxRate;

    headerGraphics[index].style.transform = `translate3d(0px, ${pos}px, 0px)`;
  }

  // nameSpans.forEach((span) => {
  //   var spanRate = scrolled * getRandomArbitrary(0.5, 2);
  //   console.log(spanRate);
  //   span.style.transform = `translate3d(0px, ${rate}px, 0px)`;
  // });
});
