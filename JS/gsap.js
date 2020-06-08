console.log(window.location.pathname);

gsap.registerPlugin(ScrollTrigger);

//Animate the stroke of the section name
//Add the fill
//Animate the decoration's scale
document.querySelectorAll('section').forEach((section) => {
  const sectionName = section.querySelector('#section-name');
  const sectionNameDecoration = section.querySelector(
    '.section-name-decoration'
  );

  //Create a timeline with a scrollTrigger
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top center',
      toggleActions: 'play restart resume reverse',
    },
  });

  //Animate the secion name stroke
  tl.to(sectionName, {
    duration: 1,
    strokeDashoffset: 0,
  });
  //Animate decoration's scale
  tl.to(sectionName, {
    duration: 0.3,
    fill: '#fff',
  });
  tl.to(
    sectionNameDecoration,
    {
      scaleX: 1,
      duration: 0.4,
    },
    '-=0.3'
  );
});

document.querySelectorAll('.skills-content').forEach((skillContent) => {
  gsap.to(skillContent, {
    scrollTrigger: {
      trigger: skillContent,
      start: 'top center',
      toggleActions: 'play restart resume reverse',
    },
    right: '-50%',
    skewX: '-15',
    skewType: 'simple',
    duration: 1,
    ease: 'power4.out',
  });

  const skillInfo = skillContent.querySelector('.skill-group-information');

  gsap.to(skillInfo, {
    scrollTrigger: {
      trigger: skillContent,
      start: 'top center',
      toggleActions: 'play restart resume reverse',
    },
    skewX: 15,
    duration: 0.3,
  });
});

gsap.from('.about-me-graphic-right, .about-me-graphic-left', {
  scrollTrigger: {
    trigger: '.about-me',
    start: 'top center',
    toggleActions: 'play restart resume reverse',
  },
  scale: 0,
  duration: 1,
  ease: 'back',
});

document.querySelector('.about-me').addEventListener('mouseenter', () => {
  gsap.to('.about-me-graphic-left, .about-me-graphic-right', {
    scale: 1.2,
    duration: 0.4,
  });
});
document.querySelector('.about-me').addEventListener('mouseleave', () => {
  gsap.to('.about-me-graphic-left, .about-me-graphic-right', {
    scale: 1,
    duration: 0.4,
  });
});

gsap.to('#frontend-projects #project', {
  scrollTrigger: {
    trigger: '#frontend-projects',
    start: 'top bottom',
    toggleActions: 'play restart resume reverse',
  },
  duration: 0.4,
  scale: 1,
  opacity: 1,
  stagger: 0.2,
});

gsap.to('#fullstack-projects #project', {
  scrollTrigger: {
    trigger: '#fullstack-projects',
    start: 'top bottom',
    toggleActions: 'play restart resume reverse',
  },
  duration: 0.4,
  scale: 1,
  opacity: 1,
  stagger: 0.2,
});

//Set highlight color for span letters
var textHighlightColor = '#f15f79';

//Decide which highlight color to use when page loads
window.onload = () => {
  var vw = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );

  if (vw <= 567) {
    textHighlightColor = '#64ffda';
  } else {
    textHighlightColor = '#f15f79';
  }
};

document.querySelectorAll('.name span').forEach((span, index) => {
  const tl = gsap.timeline();
  tl.to(span, {
    duration: 0.5,
    delay: () => {
      return 0.5 * index;
    },
    color: textHighlightColor,
  });

  tl.to(span, {
    clearProps: 'all',
  });
});

setInterval(() => {
  document.querySelectorAll('.name span').forEach((span, index) => {
    const tl = gsap.timeline();
    tl.to(span, {
      duration: 0.5,
      delay: () => {
        return 0.5 * index;
      },
      color: textHighlightColor,
    });

    tl.to(span, {
      clearProps: 'all',
    });
  });
}, document.querySelectorAll('.name span').length * 500);
