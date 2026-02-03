function showInfo(hardware) {
  const info = document.getElementById("info");

  if (hardware === "cpu") {
    info.innerHTML =
      "<h2>CPU</h2><p>CPU adalah otak komputer yang bertugas memproses instruksi dan perhitungan.</p>";
  } 
  else if (hardware === "gpu") {
    info.innerHTML =
      "<h2>GPU</h2><p>GPU berfungsi mengolah grafis dan tampilan visual agar lebih halus.</p>";
  } 
  else if (hardware === "ram") {
    info.innerHTML =
      "<h2>RAM</h2><p>RAM menyimpan data sementara agar aplikasi berjalan lebih cepat.</p>";
  }
}
