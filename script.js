//Get all span letters
const nameSpans = document.querySelectorAll('.name span');

//Set highlight color for span letters
var textHighlightColor;

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

// function getRandomArbitrary(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

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
