let currentIndex = 0;
  const testimonials = document.querySelectorAll('.testimonial');

  function showNextTestimonial() {
      testimonials[currentIndex].classList.remove('active'); // Hide current testimonial
      currentIndex = (currentIndex + 1) % testimonials.length; // Move to the next index
      testimonials[currentIndex].classList.add('active'); // Show next testimonial
  }

  // Start the slideshow
  setInterval(showNextTestimonial, 3000); // Change every second

  function toggleAccordion(id) {
      const content = document.getElementById(id);
      content.classList.toggle('active'); // Toggle the active class
  }