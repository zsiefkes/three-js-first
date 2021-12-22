import './style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();

// Scene will have three objects: Scene, Camera, Renderer.

// First arg is number of degrees in view
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// Run renderer with scene and camera.
renderer.render(scene, camera);

// Time to add an object. 

// Start with a geometry (set of vectors that define the object). Threejs has some built in geometries.
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);

// Next, choose a material. Most require a light source, but a basic material here doesn't. Give it a color and set wireframe to true so we can see the geometry
const material = new THREE.MeshBasicMaterial({
  color: 0xFF6347,
  wireframe: true
});

// Then, create a mesh using the geometry and material.
const torus = new THREE.Mesh(geometry, material);

// Add the mesh to the scene.
scene.add(torus);

// Game loop to repeatedly rerender the scene
function animate() {
  requestAnimationFrame(animate);

  // Rotate on each frame update
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  renderer.render(scene, camera);
}

animate();
