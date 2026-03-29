// Slideshow
let slideIndex = 1;

// Wait for DOM to load before showing slides
document.addEventListener('DOMContentLoaded', function() {
  showSlides(slideIndex);
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// Slideshow

// Initialize Bootstrap tooltips
document.addEventListener('DOMContentLoaded', function() {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

// Toggle Contact Info
function toggleContact() {
    const contactInfo = document.getElementById('contactInfo');
    if (contactInfo.style.display === 'none') {
        contactInfo.style.display = 'block';
    } else {
        contactInfo.style.display = 'none';
    }
}

// AJAX Contact Form (no redirect)
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  if (!contactForm || !formMessage) return;

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const action = contactForm.action;

    fetch(action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        formMessage.style.display = 'block';
        formMessage.style.backgroundColor = '#d4edda';
        formMessage.style.color = '#155724';
        formMessage.innerHTML = 'Danke! Deine Nachricht wurde gesendet.';
        contactForm.reset();
      } else {
        return response.json().then(data => {
          throw new Error((data.errors && data.errors[0] && data.errors[0].message) || 'Fehler beim Senden.');
        });
      }
    })
    .catch(error => {
      formMessage.style.display = 'block';
      formMessage.style.backgroundColor = '#f8d7da';
      formMessage.style.color = '#721c24';
      formMessage.innerHTML = 'Beim Senden ist ein Fehler aufgetreten. Bitte probiere es später noch einmal.';
      console.error('Form send error:', error);
    });
  });
});