const getMenu = document.getElementById("hamburger-menu")

console.log(getMenu)

getMenu.addEventListener("click", () => {
  console.log("hamburger clicked")

 getMenu.classList.toggle("open")
})

