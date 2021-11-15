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

// Image Upload

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();

      $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    removeUpload();
  }
}

function removeUpload() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
  $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
  $('.image-upload-wrap').removeClass('image-dropping');
});

// Testimonial Slider

var testim = document.getElementById('testim'),
  testimDots = Array.prototype.slice.call(
    document.getElementById('testim-dots').children
  ),
  testimContent = Array.prototype.slice.call(
    document.getElementById('testim-content').children
  ),
  testimleftArrow = document.getElementById('left-arrow'),
  testimRightArrow = document.getElementById('right-arrow'),
  testimSpeed = 4500,
  currentSlide = 0,
  currentActive = 0,
  testimTimer;

window.onload = function () {
  // Testim Script
  function playSlide(slide) {
    for (var k = 0; k < testimDots.length; k++) {
      testimContent[k].classList.remove('active');
      testimContent[k].classList.remove('inactive');
      testimDots[k].classList.remove('active');
    }
    if (slide < 0) {
      slide = currentSlide = testimContent.length - 1;
    }
    if (slide > testimContent.length - 1) {
      slide = currentSlide = 0;
    }
    if (currentActive != currentSlide) {
      testimContent[currentActive].classList.add('inactive');
    }
    testimContent[slide].classList.add('active');
    testimDots[slide].classList.add('active');

    currentActive = currentSlide;

    clearTimeout(testimTimer);
    testimTimer = setTimeout(function () {
      playSlide((currentSlide += 1));
    }, testimSpeed);
  }

  testimleftArrow.addEventListener('click', function () {
    playSlide((currentSlide -= 1));
  });
  testimRightArrow.addEventListener('click', function () {
    playSlide((currentSlide += 1));
  });

  for (var l = 0; l < testimDots.length; l++) {
    testimDots[l].addEventListener('click', function () {
      playSlide((currentSlide = testimDots.indexOf(this)));
    });
  }
  playSlide(currentSlide);
};
