  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");

  
    const isExpanded = navMenu.classList.contains("show");
    hamburger.setAttribute("aria-expanded", isExpanded);
  });
