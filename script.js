console.log("running")

const getMenu = document.querySelector(".hamburger-icon")
const navMenu = document.querySelector(".nav-links")


getMenu.addEventListener("click", () => {
  console.log("hamburger clicked")
  getMenu.classList.toggle("open")
  navMenu.classList.toggle("open")
})

