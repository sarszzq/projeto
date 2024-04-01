function tooggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelectorAll("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("scr", "./assets/avatar-light.png")
  } else {
    img.setAttribute("scr", "./assets/avatar.png")
  }
}
