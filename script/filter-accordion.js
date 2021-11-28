const accordionItem = document.querySelectorAll('.accordion-item');
const filterItems = document.querySelector('.filters-items');

accordionItem.forEach(el =>
  el.addEventListener('click', () => {
    accordionItem.forEach(el2 => el2.classList.remove('active'));
    el.classList.add('active');
  })
);

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
