const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener("click", function(){
    const imageId = card.getAttribute('id');
    modalOverlay.classList.add('active')
    modalOverlay.querySelector('img').src= `img/${imageId}`
    const h2Card = card.querySelector('h2').innerHTML
    modalOverlay.querySelector('h2').innerHTML = h2Card
    const pCard = card.querySelector('p').innerHTML 
    modalOverlay.querySelector('p').innerHTML  = pCard
  })
}

document.querySelector(".close-modal").addEventListener('click', function(){
  modalOverlay.classList.remove('active')
})