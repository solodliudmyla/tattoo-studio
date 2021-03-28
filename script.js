const galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  loop: true,
  freeMode: true,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true
});
const galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  loop: true,
  loopedSlides: 5, //looped slides should be the same
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  thumbs: {
    swiper: galleryThumbs
  }
});
const video = document.getElementById('myVideo');
video.play();

// close the nav dropdown menu after user selected

const triggerTabList = [].slice.call(document.querySelectorAll('.nav-item a'));
const triggerNavbar = document.querySelector('#navbarSupportedContent');
triggerTabList.forEach(function(triggerEl) {
  triggerEl.addEventListener('click', function(event) {
    triggerNavbar.classList.remove('show');
  });
});
