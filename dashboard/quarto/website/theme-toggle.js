<script>
document.addEventListener("DOMContentLoaded", function() {
  // Scroll effect voor navbar
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Dark/light mode toggle
  const toggleButton = document.createElement("button");
  toggleButton.id = "theme-toggle";
  toggleButton.innerText = "🌞 / 🌙";
  document.querySelector(".navbar").appendChild(toggleButton);

  toggleButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });

  // Behoud voorkeur bij refresh
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
});
</script>