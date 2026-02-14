
document.querySelectorAll('[data-bs-toggle="submenu"]').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    const parent = this.closest('.dropdown-submenu');

    parent.classList.toggle('show');
  });
});

const btn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  btn.classList.toggle("show", window.scrollY > 300);
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
