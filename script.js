const model = document.getElementById("pcModel");
const text = document.getElementById("infoText");

/* Angle samping, CPU di tengah */
const SIDE_ANGLE = "90deg 75deg";

function resetButtons() {
  document.querySelectorAll("button").forEach(b => b.classList.remove("active"));
}

function showText(msg) {
  text.style.animation = "none";
  text.offsetHeight;
  text.style.animation = null;
  text.innerText = msg;
}

function zoom(radius, msg, btn) {
  resetButtons();
  btn.classList.add("active");

  model.cameraOrbit = `${SIDE_ANGLE} ${radius}m`;
  model.fieldOfView = "35deg"; // lebih natural, nggak terlalu zoom

  showText(msg);
}

/* KOMPONEN */
function focusCPU(btn) {
  zoom(2.0, "CPU (Central Processing Unit) adalah otak komputer yang memproses semua instruksi.", btn);
}

function focusGPU(btn) {
  zoom(2.1, "GPU atau VGA mengolah grafis dan tampilan visual.", btn);
}

function focusRAM(btn) {
  zoom(2.2, "RAM menyimpan data sementara agar sistem berjalan cepat.", btn);
}

function focusMB(btn) {
  zoom(2.3, "Motherboard menghubungkan seluruh komponen komputer.", btn);
}

function focusFan(btn) {
  zoom(2.4, "Fan menjaga suhu komponen tetap stabil.", btn);
}

function focusStorage(btn) {
  zoom(2.5, "Storage menyimpan sistem operasi dan data.", btn);
}

function focusPSU(btn) {
  zoom(2.6, "PSU menyuplai daya listrik ke seluruh komponen.", btn);
}
