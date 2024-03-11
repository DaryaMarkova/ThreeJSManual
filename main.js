import * as THREE from "three";
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, // field of view
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 2;

function animate() {
  // cube.rotation.x += 0.01;
  cube.rotation.z += 0.01;
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
