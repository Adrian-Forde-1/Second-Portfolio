barba.hooks.afterLeave(() => {
  document.querySelector('body').style.scrollBehavior = 'initial';
  window.scrollTo(0, 0);
  document.querySelector('body').style.scrollBehavior = 'smooth';
});

function projectTransition(path) {
  var tl = gsap.timeline({
    onComplete: removeStyles,
  });
  var pageName = null;
  var pageNamePath = null;

  path = path.split('/')[1].split('.')[0];
  if (path === 'cellphonerepair') {
    pageName = document.querySelector('#cellphone-repair-website-name');
    pageNamePath = document.querySelectorAll(
      '#cellphone-repair-website-name path'
    );

    pageNamePath.forEach((path) => {
      path.style.animation = `dash 1s ease-out 200ms`;
    });
  }
  // else if (path === 'bugtracker') {
  //   pageName = document.querySelector('#bug-tracker-website-name');

  //   pageName.style.animation = `dash 300ms ease-out 0.45`;
  // } else if (path === 'sortingalgorithmvisualizer') {
  //   pageName = document.querySelector(
  //     '#sortingalgorithmvisualizer-website-name'
  //   );

  //   pageName.style.animation = `dash 300ms ease-out 0.45`;
  // } else if (path === 'clothingwebsite') {
  //   pageName = document.querySelector('#clothing-website-name');

  //   pageName.style.animation = `dash 300ms ease-out 0.45`;
  // } else if (path === 'restaurantwebsite') {
  //   pageName = document.querySelector('#restaurant-website-name');

  //   pageName.style.animation = `dash 300ms ease-out 0.45`;
  // }

  tl.to('.transition', { duration: 0.4, scaleX: 1 });
  tl.to(pageName, {
    display: 'block',
    duration: 0,
  });
  tl.to(pageName, {
    delay: 1,
    duration: 0.3,
    fill: '#fff',
  });

  tl.to('.transition', {
    duration: 0.5,
    scaleY: 0,
    transformOrigin: 'top',
    delay: 0.6,
  });
  tl.set('.transition', { clearProps: 'all' });
  tl.set(pageName, { clearProps: 'all' });
}

function removeStyles() {
  document.querySelectorAll('.page-name svg path').forEach((path) => {
    path.style.animation = '';
    path.style.strokeDashoffset = 1;
  });
}
function projectPageEnter() {
  var tl = gsap.timeline();
  // var pageName = null;

  // else if (path === 'bugtracker') pageName = 'Bug Tracker Website';
  // else if (path === 'sortingalgorithmvisualizer')
  //   pageName = 'Sorting Algorithm Visualizer Website';
  // else if (path === 'clothingwebsite') pageName = 'Clothing Website';
  // else if (path === 'restaurantwebsite') pageName = 'Restaurant Website';
  // tl.set(pageName, { clearProps: 'all' });
}

const delay = (n) => {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
};

barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();
        sessionStorage.setItem('data', JSON.stringify(data));

        projectTransition(data.next.url.path);
        await delay(1500);
        done();
      },

      async enter(data) {
        projectPageEnter(data.next.url.path);
      },
    },
  ],
});
