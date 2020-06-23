const tl = gsap.timeline();
var projectName = document.querySelectorAll(
  '.individual-project-information h3 span'
);

tl.from('.individual-project-img-container', {
  duration: 1.25,
  delay: 0.2,
  yPercent: '-50',
  opacity: 0,
  ease: 'power1.inOut',
})
  .to(projectName, {
    y: 0,
    opacity: 1,
    duration: 2,
    ease: 'power3.out',
  })
  .from(
    '.individual-project-made-with',
    {
      duration: 0.5,
      opacity: 0,
    },
    '-=1'
  );
tl.to(
  '.individual-project-description-links-container',
  {
    duration: 0.5,
    opacity: 1,
  },
  '-=0.5'
);
