gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.section-name-decoration').forEach((decoration) => {
  gsap.to(decoration, {
    scrollTrigger: {
      trigger: decoration,
      start: 'top center',
      toggleActions: 'play restart resume reverse',
    },
    scaleX: 1,
    duration: 0.4,
  });
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

const headerGraphicLeft = document.querySelector('.header-graphic-left');
// gsap.to(headerGraphicLeft, 10, {
//   direction: 'alternate',
//   transformOrigin: 'top left',
//   rotateZ: 360,
//   repeat: '-1',
// });
