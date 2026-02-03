const model = document.getElementById("pcModel");
const text = document.getElementById("infoText");

const btnCPU = document.getElementById("btnCPU");
const btnGPU = document.getElementById("btnGPU");

function resetButton() {
  btnCPU.classList.remove("active");
  btnGPU.classList.remove("active");
}

btnCPU.addEventListener("click", () => {
  resetButton();
  btnCPU.classList.add("active");

  model.cameraOrbit = "30deg 70deg 1.5m";
  model.fieldOfView = "30deg";
  text.innerText = "CPU (Central Processing Unit) adalah otak komputer.";
});

btnGPU.addEventListener("click", () => {
  resetButton();
  btnGPU.classList.add("active");

  model.cameraOrbit = "-40deg 75deg 1.6m";
  model.fieldOfView = "30deg";
  text.innerText = "GPU (Graphics Processing Unit) mengolah grafis.";
});
