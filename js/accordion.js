function initializeAccordion() {
  const headings = document.querySelectorAll(".footer-heading");

  function toggleAccordion(event) {
    const heading = event.currentTarget;
    heading.classList.toggle("active");

    const targetId = heading.getAttribute("data-target");
    const targetContent = document.querySelector(targetId);
    const isOpen = heading.classList.contains("active");

    if (isOpen) {
      targetContent.style.maxHeight = targetContent.scrollHeight + "px";
    } else {
      targetContent.style.maxHeight = "0";
    }
  }

  headings.forEach((heading) => {
    heading.addEventListener("click", toggleAccordion);
  });
}

// agar fungsi berfungsi hanya pada lebar(width) => 600px
function checkScreenSize() {
  if (window.matchMedia("(max-width: 600px)").matches) {
    initializeAccordion();
  } else {
    document.querySelectorAll(".footer-heading").forEach((heading) => {
      heading.removeEventListener("click", toggleAccordion);
    });

    document.querySelectorAll(".footer-list").forEach((list) => {
      list.style.maxHeight = "none";
    });
  }
}

checkScreenSize();
window.addEventListener("resize", checkScreenSize);
