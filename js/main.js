(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
   /* 
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });*/

    //whatapp
    document.addEventListener("DOMContentLoaded", function () {
    const whatsappButton = document.getElementById("whatsapp-button");
    const heroSection = document.querySelector("#home");

    if (!heroSection || !whatsappButton) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        whatsappButton.style.display = entry.isIntersecting ? "none" : "block";
        });
    }, {
        root: null,
        threshold: 0.1
    });

    observer.observe(heroSection);
    });



    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

// Dark theme toggle
 function toggleTheme() {
    const html = document.documentElement;
    const icon = document.getElementById('theme-icon');
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);

    // Update the icon
    icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }

  // Set the initial icon when the page loads
  document.addEventListener("DOMContentLoaded", function () {
    const icon = document.getElementById('theme-icon');
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
  });

  /* Scroll-hide all buttons
let lastScrollTop = 0;
const whatsappBtn = document.getElementById('whatsapp-button');
const backToTopBtn = document.querySelector('.back-to-top');
const toggleThemeBtn = document.querySelector('.toggle-theme');

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    whatsappBtn && (whatsappBtn.style.opacity = "0");
    backToTopBtn && (backToTopBtn.style.opacity = "0");
    toggleThemeBtn && (toggleThemeBtn.style.opacity = "0");
  } else {
    // Scrolling up
    whatsappBtn && (whatsappBtn.style.opacity = "1");
    backToTopBtn && (backToTopBtn.style.opacity = "1");
    toggleThemeBtn && (toggleThemeBtn.style.opacity = "1");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});*/
