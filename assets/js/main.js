const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");

toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const sectionHeight = current.offsetHeight;
  const sectionTop = current.offsetTop - 50;
  sectionid = current.getAttribute("id");

  if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    document
      .querySelector("nav__menu a[herf*=" + sectionid + "]")
      .classList.add("active");
  } else {
    document
      .querySelector("nav__menu a[herf*=" + sectionid + "]")
      .classList.remove("active");
  }
}

function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_lz4qz9f","template_9ykep5m",params).then(alert("sent message!!"))
}
