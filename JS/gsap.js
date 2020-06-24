gsap.registerPlugin(ScrollTrigger);

window.onload = () => {};

window.addEventListener('scroll', () => {
  var homeNavbar = document.querySelector('.home-navbar');
  homeNavbar.classList.toggle('sticky', window.scrollY > 0);
});

if (sessionStorage.getItem('loadingScreen') !== 'played') {
  const tl1 = gsap.timeline({
    onComplete: () => {
      document.body.style.overflowY = 'auto';
      document.querySelector('.home-navbar').style.zIndex = '2000';
    },
  });

  document.body.style.overflowY = 'hidden';

  tl1
    .to('.logo svg path', {
      opacity: 1,
      stagger: 0.15,
    })
    .to('.logo svg', {
      duration: 1.5,
      scale: 0.8,
    })
    .to('.logo', {
      duration: 1.5,
      top: '45%',
    })
    .to(
      '.loading-screen',
      {
        duration: 2.5,
        top: '-110%',
        ease: 'expo.inOut',
      },
      '-=2'
    )
    .to(
      '.logo .information',
      {
        duration: 2,
        y: 0,
        opacity: 1,
      },
      '-=2'
    )
    .to(
      '.cta',
      {
        duration: 2,
        opacity: 1,
      },
      '-=1.5'
    );

  sessionStorage.setItem('loadingScreen', 'played');
} else {
  gsap.set('.logo svg path', { opacity: 1 });
  gsap.set('.logo svg', { scale: 0.8 });
  gsap.set('.logo', { top: '45%' });
  gsap.set('.logo .information', { y: 0, opacity: 1 });
  gsap.set('.loading-screen', { top: '-110%' });
  gsap.set('.cta', { opacity: 1 });
  document.querySelector('.home-navbar').style.zIndex = '2000';
}

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
  tl.to(
    sectionName,
    {
      duration: 0.3,
      fill: '#fff',
    },
    '-=0.5'
  );
  tl.to(
    sectionNameDecoration,
    {
      scaleX: 1,
      duration: 0.4,
    },
    '-=0.8'
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
    z: 0.1,
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
    z: 0.1,
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
  z: 0.1,
  ease: 'back',
});

document.querySelector('.about-me').addEventListener('mouseenter', () => {
  gsap.to('.about-me-graphic-left, .about-me-graphic-right', {
    scale: 1.2,
    duration: 0.4,
    z: 0.1,
  });
});
document.querySelector('.about-me').addEventListener('mouseleave', () => {
  gsap.to('.about-me-graphic-left, .about-me-graphic-right', {
    scale: 1,
    duration: 0.4,
    z: 0.1,
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
  z: 0.1,
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
  z: 0.1,
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
