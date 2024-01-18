// This is to be your own .css file
import "./style.css";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Setup

// Must declare a scene/environment
const scene = new THREE.Scene();
// must define a camera, remember 3d has the 3 following: camera-perspective, light,scene/render

// constant variable and setting up the camera planes dimensions
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// basically this runs at all time because its for querySelector being activate,mouse moving
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

// 2D dimension layout of the field
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

// This renders scene and camera, but no light so you technically can't see anything up to here
renderer.render(scene, camera);

// Torus - donut object
// all callouts apart from arc my understanding which is default 3.14(pi),
// first two numbers are radius and size of donut tube
const geometry = new THREE.TorusGeometry(14, 5, 7, 100);
// skin of material, and color denoted
const material = new THREE.MeshStandardMaterial({ color: 0xff8c00 });
// this merges the geometry with the material to create the shape
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

// Lights
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);
// This is the function for the stars in the background, he multiplied them and spaned them

// to make an object, have to create the geometry,and the material and then merge in a mesh
function addStar() {
  // geometry and then material for the object
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  // This is the function to create the locations in space
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

// Background

const spaceTexture = new THREE.TextureLoader().load("space.jpg");
scene.background = spaceTexture;

// Avatar

const jeffTexture = new THREE.TextureLoader().load("jeff.png");

const jeff = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: jeffTexture })
);

scene.add(jeff);

// Moon

const moonTexture = new THREE.TextureLoader().load("moon.jpg");
const normalTexture = new THREE.TextureLoader().load("normal.jpg");

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

scene.add(moon);

moon.position.z = 30;
moon.position.setX(-10);

jeff.position.z = -5;
jeff.position.x = 2;

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  // Moon rotation parameters
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;
  // Jeff Rotation
  jeff.rotation.y += 0.01;
  jeff.rotation.z += 0.01;
  // Camera Position
  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  moon.rotation.x += 0.005;

  // controls.update();

  renderer.render(scene, camera);
}

animate();
