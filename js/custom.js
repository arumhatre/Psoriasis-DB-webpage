$(document).ready(function() {
    // Popup initialization
    $('.popup-youtube, .popup-vimeo').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: true
    });
// Select all accordion headers
const togglers = document.querySelectorAll('[data-bs-toggle]');

// Iterate over each toggler
togglers.forEach((btn) => {
  const targetBlock = document.querySelector(btn.dataset.bsToggle);

  // Initialize expanded items on page load
  if (btn.classList.contains('active')) {
    targetBlock.style.maxHeight = targetBlock.scrollHeight + 'px';
    btn.closest('.accordion__item').classList.add('active');
  }

  // Add click event listener for toggling
  btn.addEventListener('click', (e) => {
    const block = document.querySelector(e.currentTarget.dataset.bsToggle);

    // If clicked item is already active, collapse it
    if (e.currentTarget.classList.contains('active')) {
      block.style.maxHeight = '';
      e.currentTarget.classList.remove('active');
      e.currentTarget.closest('.accordion__item').classList.remove('active');
    } else {
      // Close other items
      togglers.forEach((header) => {
        if (header !== e.currentTarget) {
          const otherBlock = document.querySelector(header.dataset.bsToggle);
          otherBlock.style.maxHeight = '';
          header.classList.remove('active');
          header.closest('.accordion__item').classList.remove('active');
        }
      });

      // Expand the clicked item
      block.style.maxHeight = block.scrollHeight + 'px';
      e.currentTarget.classList.add('active');
      e.currentTarget.closest('.accordion__item').classList.add('active');
    }
  });
});


    // Hidden menu toggle
    $('#show-hidden-menu').click(function() {
      $('.hidden-menu').slideToggle("slow");
    });

    // Form focus styling
    $('input,textarea').val("");
    $('.form-group input, .form-group textarea, .form-group select').focusout(function() {
      var text_val = $(this).val();
      if (text_val === "") {
        $(this).removeClass('has-value');
      } else {
        $(this).addClass('has-value');
      }
    });

  
    // Initialize carousel for screenshots and Google rating
    $(".screenshot_slider").owlCarousel({
      loop: true,
      responsiveClass: true,
      nav: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 6000,
      smartSpeed: 400,
      navText: [
        "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />", 
        "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />"
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        768: { items: 2 },
        1024: { items: 2 },
        1200: { items: 3 }
      }
    });

    // Initialize carousel for testimonials
    $("#testimonilas_slider").owlCarousel({
      loop: false,
      responsiveClass: true,
      nav: true,
      margin: 20,
      autoplay: false,
      autoplayTimeout: 4000,
      smartSpeed: 400,
      navText: [
        "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />", 
        "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />"
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 },
        1200: { items: 3 }
      }
    });



    // Video item click handler
    $(".vid-item").each(function(index) {
      $(this).on("click", function() {
        $(".vid-item .thumb").removeClass("active");
        $(`.vid-item:nth-child(${index + 1}) .thumb`).addClass("active");
      });
    });
  });