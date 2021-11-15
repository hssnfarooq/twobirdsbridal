const filterHeading = document.querySelector('.filter-heading');
const accordionItem = document.querySelectorAll('.accordion-item');

filterHeading.addEventListener('click', () => {
  console.log('Hello');
  accordionItem.forEach(el => {
    if (el.classList.contains('active')) {
      el.classList.remove('active');
    } else {
      el.classList.add('active');
    }
  });
});

$('a.like-button').on('click', function (e) {
  $(this).toggleClass('liked');

  setTimeout(() => {
    $(e.target).removeClass('liked');
  }, 1000);
});

// Get the modal
const modal = document.querySelector('#myModal');

// Get the button that opens the modal
const btn12 = document.querySelectorAll('.filter-mobile-menu');

// Get the <span> element that closes the modal
const closeModal = document.getElementsByClassName('close')[0];
const body1 = document.querySelector('body');

for (let i = 0; i < btn12.length; i++) {
  btn12[i].addEventListener('click', function () {
    modal.style.display = 'block';
    body1.style.overflowY = 'hidden';
  });
}

// When the user clicks the button, open the modal
btn12.onclick = function () {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function () {
  modal.style.display = 'none';
  body1.style.overflowY = 'auto';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
