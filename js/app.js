// Navbar transparent effect
const navbar = document.getElementById('navbar');

let scrolled = false;//this is for hidding scrolled effect *-

//Scrol Event
window.onscroll = function(){
  if(window.pageYOffset > 100){
    navbar.classList.remove('top');

    if(!scrolled){
      navbar.style.transform = 'translateY(-70px)';
    }// I want when i scrolled the navigation go top to dissapear -70 px in Y access *-

    //
    setTimeout(function(){
      navbar.style.transform = 'translateY(0)';
      scrolled = true;
    },200);
  }else{
    navbar.classList.add('top');
    scrolled = false;////this is for hidding scrolled effect again as a loop effect *-
  }
}





// Smooth Scrolling
$('#navbar a, .btn').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});



