/*menu show*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav_toggle','nav_menu')

/*remove menu mobile*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*scroll section active link
const sections = document.querySelector('section [id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })


}

*/

  // Add active class to the current button (highlight it)
  var header = document.getElementById('nav-list');
  var btns = header.getElementsByClassName('nav_link');
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }


  /*scroll reveal*/
  const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true
  })

  /*scroll home*/
  sr.reveal('.home-title', {})
  sr.reveal('.home-scroll', {delay: 200})
  sr.reveal('.home-img', {origin:'right', delay:400})


  /*scroll-about*/
  sr.reveal('.about-image', {delay: 500})
  sr.reveal('.about-subtitle', {delay: 300})
  sr.reveal('.about-profession', {delay: 400})
  sr.reveal('.about-text', {delay: 500})
  sr.reveal('.about-social-icon', {delay: 600, interval: 200})


  /*scroll skills*/
  sr.reveal('.skills-subtitle', {})
  sr.reveal('.skills-name', {distance: '20px', delay: 50, interval: 100})
  sr.reveal('.skills-image', {delay: 400})
  sr.reveal('.skills-box p', {})

  /*scroll portfolio*/
  sr.reveal('.portfolio-container h3', {interval: 200})
  sr.reveal('.portfolio-container p', {interval: 200})

  /*scroll contact*/
 

