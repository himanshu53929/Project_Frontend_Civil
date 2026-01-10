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

const current_location = document.getElementById("current_location");
const firstSelectedValue = current_location.value;
current_location.addEventListener("change", () => {
  firstSelectedValue = current_location.value;
});

const final_location = document.getElementById("final_location");
const secondSelectedValue = final_location.value;
final_location.addEventListener("change", () => {
  secondSelectedValue = final_location.value;
});

const find_path_btn = document.getElementById("path_button");
find_path_btn.addEventListener("click", () => {
  //Transfer the first and secondvalue to the backend
});
