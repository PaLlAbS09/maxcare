document.querySelectorAll('[data-bs-toggle="submenu"]').forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const parent = this.closest(".dropdown-submenu");

    parent.classList.toggle("show");
  });
});

const btn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  btn.classList.toggle("show", window.scrollY > 300);
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll(".filter-tab").forEach((tab) => {
  tab.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelectorAll(".filter-tab")
      .forEach((t) => t.classList.remove("active"));
    this.classList.add("active");
  });
});
//Swiper Js for Our Doctor Section
  const carouselEl = document.getElementById('teamCarousel');
  const carousel   = new bootstrap.Carousel(carouselEl, { interval: false, wrap: true });
  const dots       = document.querySelectorAll('#teamDots span');

  // Prev / Next buttons
  document.getElementById('teamNext').addEventListener('click', () => carousel.next());
  document.getElementById('teamPrev').addEventListener('click', () => carousel.prev());

  // Sync dots with slide
  carouselEl.addEventListener('slid.bs.carousel', (e) => {
    dots.forEach(d => d.classList.remove('active'));
    dots[e.to].classList.add('active');
  });

  // Click on dots
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      carousel.to(parseInt(dot.dataset.index));
    });
  });
