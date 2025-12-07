const sections = document.querySelectorAll("section");

function reveal() {
  const trigger = window.innerHeight * 0.85;

  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;

    if(top < trigger) {
      sec.style.opacity = "1";
      sec.style.transform = "translateY(0)";
      sec.style.transition = "1.4s ease";
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();