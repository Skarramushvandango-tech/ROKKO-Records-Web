const $ = (q, el=document) => el.querySelector(q);
const $$ = (q, el=document) => Array.from(el.querySelectorAll(q));

// Mobile menu
const tgl = $(".nav-toggle");
const mob = $(".mobile-menu");
if (tgl) tgl.addEventListener("click", () => {
  const open = mob.classList.toggle("open");
  tgl.setAttribute("aria-expanded", open ? "true" : "false");
});

// Smooth scroll
$$('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const dest = $(id);
    if (dest) { e.preventDefault(); dest.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});
