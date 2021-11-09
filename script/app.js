$('.btn').click(function () {
  $(this).toggleClass('click');
  $('.sidebar').toggleClass('show');
});

// FAQ Section
const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  console.log('Hello');
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

// Faq-Page-Section

$(document).ready(function () {
  $('.accordion-list > li > .answer').hide();

  $('.accordion-list > li').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active').find('.answer').slideUp();
    } else {
      $('.accordion-list > li.active .answer').slideUp();
      $('.accordion-list > li.active').removeClass('active');
      $(this).addClass('active').find('.answer').slideDown();
    }
    return false;
  });
});

// Product-Detail-Slider

const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach(imgItem => {
  imgItem.addEventListener('click', event => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    '.img-showcase img:first-child'
  ).clientWidth;

  document.querySelector('.img-showcase').style.transform = `translateX(${
    -(imgId - 1) * (displayWidth + 5)
  }px)`;
}

window.addEventListener('resize', slideImage);

var swiper = new Swiper('.home-slider', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
