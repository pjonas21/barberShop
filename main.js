/* open and close nav menu - show icons hamburger and x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')


for (const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}


/* when click menu link close nav*/

const links = document.querySelectorAll('nav ul li a')

for (const link of links){
  link.addEventListener('click', function(){
    nav.classList.remove('show')
  })
}

/* change header on scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll(){
  if(window.scrollY >= navHeight){
    //scroll maior que header
    header.classList.add('scroll')
  }else{
    // scroll menor que header
    header.classList.remove('scroll')
  }
}

/* show arrowUp - back-to-top */
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if(window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* active links */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if(checkpointStart && checkpointEnd) {
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.add('active')
    } else {
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.remove('active')
    }


  }
}

/* when scroll */
window.addEventListener('scroll', function(){
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})

/* TESTIMONIALS SWIPER */

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

/* scrollReveal show elements on page */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social`,
{interval:100})




