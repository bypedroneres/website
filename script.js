document.querySelectorAll(".accordion-header").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    const isOpen = content.style.display === "block";

    // toggle only this one
    content.style.display = isOpen ? "none" : "block";
  });
});