function showInfo(hardware) {
  const info = document.getElementById("info");

  // reset animasi
  info.classList.remove("show");

  let content = "";

  if (hardware === "cpu") {
    content =
      "<h2>CPU</h2><p>CPU adalah otak komputer yang bertugas memproses instruksi dan perhitungan.</p>";
  } 
  else if (hardware === "gpu") {
    content =
      "<h2>GPU</h2><p>GPU berfungsi mengolah grafis dan tampilan visual agar lebih halus.</p>";
  } 
  else if (hardware === "ram") {
    content =
      "<h2>RAM</h2><p>RAM menyimpan data sementara agar aplikasi berjalan lebih cepat.</p>";
  }

  info.innerHTML = content;

  // trigger animasi
  setTimeout(() => {
    info.classList.add("show");
  }, 50);
