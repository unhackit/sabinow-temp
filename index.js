
let tab = document.querySelectorAll('.user');
let dropdown = document.querySelector('.user-dropdown');


document.querySelector('body').addEventListener('click', () => {
  dropdown.classList.add('hidden');
})

tab[0].addEventListener('click', (e) => {
  e.stopPropagation();
  if(dropdown.classList.contains('hidden')) return dropdown.classList.remove('hidden')
  
  dropdown.classList.add('hidden');
})

tab[1].addEventListener('click', (e) => {
  e.stopPropagation();
  if(dropdown.classList.contains('hidden')) return dropdown.classList.remove('hidden')
  
  dropdown.classList.add('hidden');
})


//Js to trigger animations
document.addEventListener('scroll', function (e) {
  var top  = window.pageYOffset + window.innerHeight,
      isVisible = top > document.querySelector('.category__content').offsetTop;

  var top2 = window.pageYOffset + window.innerHeight,
      isVisible2 = top2 > document.querySelector('.category__content__flex').offsetTop;

  var top3 = window.pageYOffset + window.innerHeight,
    isVisible3 = top3 > document.querySelector('.instructors__content').offsetTop;

   if (isVisible) {
     document.querySelector('.category__content').classList.add('category__content__animation');
   }
   
   if(isVisible2){
    document.querySelector('.category__content__flex').classList.add('category__content__animation');
   }

   if(isVisible3){
    document.querySelector('.instructors__content').classList.add('instructors__animation');
   }
});

console.log('all animations')

particlesJS("particles-js", {
    particles: {
      number: { value: 25, density: { enable: true, value_area: 800 } },
      color: { value: "#003bde" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#003bde" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 80 }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 10,
        random: true,
        anim: { enable: false, speed: 20, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 500,
        color: "#ffffff",
        opacity: 0.4,
        width: 2
      },
      move: {
        enable: true,
        speed: 2,
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "bubble" },
        onclick: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 0.5 } },
        bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });

  console.log('hello')
  