// Function to toggle the menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const hamburgerIcon = document.querySelector(".hamburger-icon");

  const isOpen = menu.classList.toggle("open");
  hamburgerIcon.classList.toggle("open", isOpen);

  // Toggle the visibility of the menu
  if (isOpen) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }

  // Define colors for menu and icon
  const black = "#000";
  const white = "#fff";

  // Update styles based on menu state
  updateStyles(menu, isOpen ? black : "", isOpen ? white : "");
  updateStyles(hamburgerIcon, isOpen ? white : "", isOpen ? black : "");
}

// Function to update styles
function updateStyles(element, backgroundColor, textColor) {
  element.style.backgroundColor = backgroundColor;
  element.style.color = textColor;
}