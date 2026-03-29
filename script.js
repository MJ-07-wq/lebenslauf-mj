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
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('dot');

  if (!slides.length || !dots.length) {
    return;
  }

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
// Slideshow

// Initialize Bootstrap tooltips
document.addEventListener('DOMContentLoaded', function() {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

// Toggle Contact Info
function toggleContact() {
  const contactInfo = document.getElementById('contactInfo');

  if (!contactInfo) {
    return;
  }

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

  if (!contactForm || !formMessage) {
    return;
  }

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const submitUrl = contactForm.dataset.endpoint;
    const submitButton = contactForm.querySelector('input[type="submit"]');

    if (!submitUrl) {
      formMessage.style.display = 'block';
      formMessage.style.backgroundColor = '#f8d7da';
      formMessage.style.color = '#721c24';
      formMessage.textContent = 'Die Formular-Konfiguration fehlt.';
      return;
    }

    formData.append('_replyto', formData.get('email'));

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.value = 'Wird gesendet...';
    }

    formMessage.style.display = 'none';

    fetch(submitUrl, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json'
      }
    })
      .then(function(response) {
        if (response.ok) {
          formMessage.style.display = 'block';
          formMessage.style.backgroundColor = '#d4edda';
          formMessage.style.color = '#155724';
          formMessage.textContent = 'Danke! Deine Nachricht wurde gesendet.';
          contactForm.reset();
          return null;
        }

        return response
          .json()
          .then(function(data) {
            const errorMessage = data.errors && data.errors[0] && data.errors[0].message;
            throw new Error(errorMessage || `Fehler beim Senden. Status: ${response.status}`);
          })
          .catch(function() {
            throw new Error(`Fehler beim Senden. Status: ${response.status}`);
          });
      })
      .catch(function(error) {
        formMessage.style.display = 'block';
        formMessage.style.backgroundColor = '#f8d7da';
        formMessage.style.color = '#721c24';
        formMessage.textContent = `Beim Senden ist ein Fehler aufgetreten: ${error.message}`;
        console.error('Form send error:', error);
      })
      .finally(function() {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.value = 'Senden';
        }
      });
  });
});
