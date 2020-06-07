// barba.hooks.leave(() => {
//   gsap.set(document.body, {
//     pointerEvents: 'none',
//   });
// });
// barba.hooks.afterEnter(() => {
//   gsap.set(document.body, {
//     pointerEvents: 'all',
//   });
// });

// barba.hooks.afterLeave(() => {
//   // document.querySelector('body').style.scrollBehavior = 'initial';
//   gsap.set('body', { scrollBehavior: 'initial' });
//   window.scrollTo(0, 0);
//   gsap.set('body', { scrollBehavior: 'smooth' });
//   // document.querySelector('body').style.scrollBehavior = 'smooth';
// });

// function projectTransition(path) {
//   var tl = gsap.timeline({
//     onComplete: removeStyles,
//   });
//   var pageName = null;
//   var pageNamePath = null;

//   path = path.split('/')[1].split('.')[0];
//   if (path === 'cellphonerepair') {
//     pageName = document.querySelector('#cellphone-repair-website-name');

//     pageNamePath = document
//       .querySelectorAll('#cellphone-repair-website-name path')
//       .forEach((path) => {
//         gsap.to(path, {
//           duration: 1,
//           strokeDashoffset: 0,
//         });
//       });
//   } else if (path === 'restaurantwebsite') {
//     pageName = document.querySelector('#restaurant-website-name');

//     pageNamePath = document.querySelectorAll('#restaurant-website-name path');

//     pageNamePath.forEach((path) => {
//       path.style.animation = `dash 1s ease-out 200ms`;
//     });
//   } else if (path === 'bugtracker') {
//     pageName = document.querySelector('#bug-tracker-website-name');

//     pageNamePath = document.querySelectorAll('#bug-tracker-website-name path');

//     pageNamePath.forEach((path) => {
//       path.style.animation = `dash 1s ease-out 200ms`;
//     });
//   } else if (path === 'sortingalgorithmvisualizer') {
//     pageName = document.querySelector(
//       '#sortingalgorithmvisualizer-website-name'
//     );

//     pageNamePath = document.querySelectorAll(
//       '#sortingalgorithmvisualizer-website-name path'
//     );

//     pageNamePath.forEach((path) => {
//       path.style.animation = `dash 1s ease-out 200ms`;
//     });
//   } else if (path === 'clothingwebsite') {
//     pageName = document.querySelector('#clothing-website-name');

//     pageNamePath = document.querySelectorAll('#clothing-website-name path');

//     pageNamePath.forEach((path) => {
//       path.style.animation = `dash 1s ease-out 200ms`;
//     });
//   }

//   tl.to('.transition', { duration: 0.4, scaleX: 1 });
//   tl.to(pageName, {
//     display: 'block',
//     duration: 0,
//   });
//   tl.to(pageName, {
//     delay: 1,
//     duration: 0.3,
//     fill: '#fff',
//   });
//   tl.to(pageName, {
//     delay: 0.5,
//     opacity: 0,
//     duration: 0.3,
//     ease: 'power1.inOut',
//   });
//   tl.to('.transition', {
//     duration: 0.5,
//     scaleY: 0,
//     transformOrigin: 'top',
//   });
//   tl.set('.transition', { clearProps: 'all' });
//   tl.set(pageName, { clearProps: 'all' });
// }

// function projectPageEnter() {
//   var tl = gsap.timeline();
// }

// function homeTransition() {
//   var tl = gsap.timeline();

//   tl.set('.transition-2', { display: 'block' });
//   tl.to('.transition-2 ul li', { duration: 0.4, scaleX: 1, stagger: 0.2 });
// }

// function homePageEnter() {
//   var tl = gsap.timeline();

//   tl.to('.transition-2 ul li', {
//     duration: 0.4,
//     scaleX: 0,
//     stagger: 0.2,
//     direction: 'reverse',
//   });
//   tl.to('.transition-2 ul', { clearProps: 'all' });
//   tl.to('.transition-2 ul li', { clearProps: 'all' });
// }

// function removeStyles() {
//   document.querySelectorAll('.page-name svg path').forEach((path) => {
//     path.style.animation = '';
//     path.style.strokeDashoffset = 1;
//   });
// }

// const delay = (n) => {
//   n = n || 2000;
//   return new Promise((done) => {
//     setTimeout(() => {
//       done();
//     }, n);
//   });
// };

// barba.init({
//   sync: true,
//   preventRunning: true,
//   views: [
//     {
//       namespace: 'home',
//       afterEnter() {
//         document.querySelectorAll('script').forEach((script, index) => {
//           if (index === 7) {
//             console.log(script.innerHTML);
//             var old_src = 'JS/script.js';
//             document.body.removeChild(script);
//             const newScript = document.createElement('script');
//             newScript.type = 'text/javascript';
//             newScript.src = old_src;
//             document.body.appendChild(newScript);
//           }
//           if (index === 8) {
//             var old_src = 'JS/gsap.js';
//             document.body.removeChild(script);
//             const newScript = document.createElement('script');
//             newScript.type = 'text/javascript';
//             newScript.src = old_src;
//             document.body.appendChild(newScript);
//           }
//         });
//       },
//     },
//   ],
//   transitions: [
//     {
//       name: 'Home To Projects',
//       from: {
//         namespace: ['home'],
//       },
//       async leave(data) {
//         const done = this.async();
//         projectTransition(data.next.url.path);
//         await delay(1500);
//         done();
//       },
//       async after(data) {
//         const done = this.async();
//         projectPageEnter(data.next.url.path);
//         await delay(1500);
//         done();
//       },
//     },
//     {
//       name: 'Projects To Home',
//       from: {
//         namespace: ['project'],
//       },
//       async leave(data) {
//         const done = this.async();
//         homeTransition();
//         await delay(1500);
//         done();
//       },
//       async after(data) {
//         const done = this.async();
//         homePageEnter();
//         await delay(1500);
//         done();
//       },
//     },
//   ],
// });
