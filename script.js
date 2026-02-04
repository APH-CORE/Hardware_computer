const pc = new THREE.Group();
scene.add(pc);

// CASE
const caseBody = new THREE.Mesh(
  new THREE.BoxGeometry(1, 4, 2),
  new THREE.MeshStandardMaterial({ color: 0x9e9e9e })
);
caseBody.position.y = 2;
pc.add(caseBody);

// MOTHERBOARD
const mb = new THREE.Mesh(
  new THREE.BoxGeometry(0.05, 3, 1.8),
  new THREE.MeshStandardMaterial({ color: 0x424242 })
);
mb.position.set(0.55, 2, 0);
pc.add(mb);

// CPU
const cpu = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 0.2, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffc107 })
);
cpu.position.set(0.58, 2.5, 0);
pc.add(cpu);

// GPU
const gpu = new THREE.Mesh(
  new THREE.BoxGeometry(0.8, 0.2, 0.4),
  new THREE.MeshStandardMaterial({ color: 0x4caf50 })
);
gpu.position.set(0.9, 1.4, 0);
pc.add(gpu);

// PSU
const psu = new THREE.Mesh(
  new THREE.BoxGeometry(0.6, 0.5, 0.6),
  new THREE.MeshStandardMaterial({ color: 0x616161 })
);
psu.position.set(0.9, 0.5, 0);
pc.add(psu);
