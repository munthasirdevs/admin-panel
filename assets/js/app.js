// XenonOS Global Application Logic
// Handles component injection and shared interactions

document.addEventListener("DOMContentLoaded", () => {
  highlightActiveLink();
  setupGlobalInteractions();
});

function highlightActiveLink() {
  const currentPath = window.location.pathname;
  const links = document.querySelectorAll("aside a");
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href) {
      const cleanHref = href.replace("../", "");
      if (
        currentPath.endsWith(cleanHref) ||
        currentPath.includes("/" + cleanHref)
      ) {
        link.classList.add("active");
      }
    }
  });
}

function setupGlobalInteractions() {
  // Global interactions removed with sidebar
}
