const skillContents = document.querySelectorAll('.skills-content');

let options = {};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      gsap.to(entry.target, {
        right: '-50%',
        duration: 0.4,
        delay: 0.2,
        ease: 'power3.inOut',
      });
    } else {
      gsap.set(entry.target, {
        clearProps: 'all',
      });
    }
  });
}, options);

skillContents.forEach((skillContent) => {
  observer.observe(skillContent);
});
