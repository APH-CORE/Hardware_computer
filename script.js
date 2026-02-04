<script>
  alert("JS HIDUP");

  const container = document.getElementById("viewer");

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x00ff00);

  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    100
  );
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
  );
  scene.add(cube);

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
</script>
