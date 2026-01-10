const backgroundDecor = document.createElement("div");
backgroundDecor.classList.add("decorative-shapes");
document.body.appendChild(backgroundDecor);

const decoTypes = ["small-circle", "small-square", "small-triangle"];
for (let i = 0; i < 150; i++) {
  const s = document.createElement("div");
  const type = decoTypes[Math.floor(Math.random() * decoTypes.length)];
  s.classList.add("small-shape", type);

  const top = Math.random() * 100;
  const left = Math.random() * 100;

  s.style.top = top + "%";
  s.style.left = left + "%";
  s.style.opacity = 0.05 + Math.random() * 0.2;
  s.style.transform = `scale(${0.2 + Math.random() * 0.8})`;
  backgroundDecor.appendChild(s);
}

// Assume data represent the value of accident an is true if there is an accident
const magic_button = document.createElement("button");
magic_button.textContent = "Make Accident";
magic_button.style.position = "relative";
magic_button.style.zIndex = "10";
magic_button.id = "magic-button";
data = false;
magic_button.addEventListener("click", () => {
  data = true;
  alert("Accident detected!!!, calling to 100.");
});

document.querySelector("main").appendChild(magic_button);

// if (data) {
//   console.log("Accident detected!!!, calling to 100.");
// }
