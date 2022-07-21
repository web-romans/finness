const acardion = document.querySelectorAll("[data-acardion]");

if (acardion) {
  acardion.forEach((el) => {
    const btn = el.querySelector("[data-acardion-btn]");
    const content = el.querySelector("[data-acardion-content]");

    if (btn) {
      btn.addEventListener("click", (e) => {
        closeAll();
        btn.classList.toggle("close");
        if (content) content.classList.toggle("hide");
      });
    }

    function closeAll() {
      acardion.forEach((el) => {
        const btn = el.querySelector("[data-acardion-btn]");
        const content = el.querySelector("[data-acardion-content]");
        if (el.getAttribute('data-acardion') === "closeAll") {
          if (btn) btn.classList.add("close");
          if (content) content.classList.add("hide");
        }

      });
    }
  });
}
