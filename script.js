const model = document.getElementById("pcModel");
const text = document.getElementById("infoText");

const BASE_ANGLE = "90deg 75deg"; // SAMPING TETAP

function setActive(btn) {
  document.querySelectorAll("button").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  // reset animasi teks
  text.style.animation = "none";
  text.offsetHeight;
  text.style.animation = null;
}

function updateView(radius, message, btn) {
  setActive(btn);
  model.cameraOrbit = `${BASE_ANGLE} ${radius}m`;
  model.fieldOfView = "30deg";
  text.innerText = message;
}

/* KOMPONEN */
function focusCPU(btn) {
  updateView(1.6, "CPU (Central Processing Unit) adalah otak komputer yang mengolah semua instruksi.", btn);
}

function focusGPU(btn) {
  updateView(1.7, "GPU atau VGA bertugas memproses grafis dan tampilan visual.", btn);
}

function focusRAM(btn) {
  updateView(1.8, "RAM menyimpan data sementara agar program berjalan cepat.", btn);
}

function focusMB(btn) {
  updateView(2.0, "Motherboard adalah papan utama penghubung semua komponen.", btn);
}

function focusFan(btn) {
  updateView(2.1, "Fan berfungsi menjaga suhu komponen agar tetap stabil.", btn);
}

function focusStorage(btn) {
  updateView(2.2, "Storage menyimpan sistem operasi, aplikasi, dan data.", btn);
}

function focusPSU(btn) {
  updateView(2.3, "PSU menyuplai daya listrik ke seluruh komponen komputer.", btn);
}
