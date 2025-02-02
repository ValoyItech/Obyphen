document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Handling
  const menuBtn = document.getElementById('menu-btn');
  const navMobile = document.getElementById('nav-mobile');
  const closeMenu = document.getElementById('close-menu');

  function toggleMenu() {
    navMobile.classList.toggle('active');
    document.body.style.overflow = navMobile.classList.contains('active') ? 'hidden' : 'auto';
  }

  menuBtn.addEventListener('click', toggleMenu);
  closeMenu.addEventListener('click', toggleMenu);

  document.addEventListener('click', (e) => {
    if (navMobile.classList.contains('active') && 
        !e.target.closest('.nav-mobile') && 
        !e.target.closest('#menu-btn')) {
      toggleMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMobile.classList.contains('active')) {
      toggleMenu();
    }
  });

  // Slideshow Functionality
  const slides = document.querySelectorAll(".slide");
  const track = document.querySelector(".slideshow-track");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const dots = document.querySelectorAll(".dot");

  let currentIndex = 0;
  let autoSlideInterval;

  function updateSlidePosition() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
    // Add animation to current slide
    slides[currentIndex].style.animation = 'slideFade 0.5s ease-in-out';
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
  }

  function jumpToSlide(index) {
    currentIndex = index;
    updateSlidePosition();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      jumpToSlide(index);
      resetAutoSlide();
    });
  });

  startAutoSlide();
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (navMobile.classList.contains('active') && !e.target.closest('.nav-mobile') && !e.target.closest('#menu-btn')) {
    toggleMenu();
  }
});
// Toggle the full-screen menu
document.querySelector('.menu-icon').addEventListener('click', function() {
  document.querySelector('.full-screen-menu').classList.toggle('active');
});
document.addEventListener("DOMContentLoaded", () => {
  // ... existing mobile menu code ...

  // Add this to close menu when clicking menu items
  document.querySelectorAll('.nav-mobile a').forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  // Update existing click handler
  document.addEventListener('click', (e) => {
    if (navMobile.classList.contains('active') && 
        !e.target.closest('.nav-mobile') && 
        !e.target.closest('#menu-btn')) {
      toggleMenu();
    }
  });

  // ... rest of existing code ...
});
