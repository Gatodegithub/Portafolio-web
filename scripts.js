"use strict";
// https://github.com/mattboldt/typed.js/
var typed2 = new Typed("#logo", {
  strings: ["<i>Aldo</i>^700 <i>Saavedra</i>"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// Sidebar
const d = document;
d.addEventListener("DOMContentLoaded", () => {
  d.querySelector(".menu-toggle").addEventListener("click", () => {
    d.querySelector("nav").classList.toggle("active");
  });

  const lista = Array.from(d.querySelectorAll(".list li"));
  lista.forEach((el) => {
    el.addEventListener("click", (e) => {
      d.querySelector("nav").classList.remove("active");
    });
  });
});

// EMAIL JS
const btn = document.getElementById("button");
const form = document.getElementById("form");
const alerta = document.getElementById("alerta");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_dk4c6sw";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alerta.classList.add("show");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );

  form.reset();
});

// scroll
const headerNav = d.querySelector("header");
const title1 = d.querySelector(".title-1");

window.addEventListener("scroll", (e) => {
  let scroll = this.scrollY;

  scroll >= title1.offsetHeight + 60
    ? headerNav.classList.add("navEffect")
    : headerNav.classList.remove("navEffect");
});
