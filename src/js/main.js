document.addEventListener("DOMContentLoaded", function () {
  const headerSearchOpen = document.querySelector("#search-open");
  const headerSearchForm = document.querySelector("#header-search-form");

  headerSearchOpen.addEventListener("click", () => {
    headerSearchForm.classList.toggle("search-form-open");
  });

  // Mobile Menu

  const menuToggle = document.querySelector("#menu-toggle");
  const mobileMenu = document.querySelector("#header-menu");

  const bodyEl = document.body;
  if (menuToggle) {
    // Open mobile menu

    menuToggle.addEventListener("click", () => {
      if (menuToggle.classList.contains("active")) {
        menuToggle.classList.remove("active");
        mobileMenu.classList.remove("active");
        bodyEl.classList.remove("lock");
      } else {
        menuToggle.classList.add("active");
        mobileMenu.classList.add("active");
        bodyEl.classList.add("lock");
      }
    });

    // Close mobile menu when click on menu item
    mobileMenu.addEventListener("click", (e) => {
      menuToggle.classList.remove("active");
      mobileMenu.classList.remove("active");
      bodyEl.classList.remove("lock");
    });
  }

  // Slider top

  const headerSwiper = new Swiper(".header-slider", {
    loop: true,
    speed: 1000,
    effect: "fade",
    lazy: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Slider cta

  const ctaSwiper = new Swiper(".cta-slider", {
    loop: true,
    speed: 1000,
    effect: "fade",
    lazy: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
