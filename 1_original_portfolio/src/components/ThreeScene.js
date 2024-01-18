import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeScene = () => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  const containerRef = useRef();

  // Camera position
  camera.position.set(20, 5, 50);

  useEffect(() => {
    // Attach renderer to the ref element
    containerRef.current.appendChild(renderer.domElement);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Resize handling
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    // Create a 2x2x2 cube of spheres
    const cubeSize = 6;
    const spacing = 8;

    // Create axes
    const axisX = createAxis(new THREE.Vector3(1, 0, 0), 0xff0000);
    const axisY = createAxis(new THREE.Vector3(0, 1, 0), 0x00ff00);
    const axisZ = createAxis(new THREE.Vector3(0, 0, 1), 0x0000ff);

    scene.add(axisX, axisY, axisZ);

    // Create cube
    const cube = new THREE.Group();
    for (let x = 0; x < cubeSize; x++) {
      for (let y = 0; y < cubeSize; y++) {
        for (let z = 0; z < cubeSize; z++) {
          const geometry = new THREE.SphereGeometry(1, 20, 20);
          const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
          const sphere = new THREE.Mesh(geometry, material);

          // Position each sphere in a cube shape
          sphere.position.set(x * spacing, y * spacing, z * spacing);

          cube.add(sphere);
        }
      }
    }

    scene.add(cube);

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the entire cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      cube.rotation.z += 0.01;

      renderer.render(scene, camera);
    };

    // Start animation loop
    animate();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      // Reset the background color when the component is unmounted if needed
      document.body.style.background = ""; // Reset to default or another color
    };
  }, []); // Empty dependency array to ensure this effect runs only once during component mount

  const createAxis = (direction, color) => {
    const axisGeometry = new THREE.CylinderGeometry(0.1, 0.1, 10);
    const axisMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const axisMesh = new THREE.Mesh(axisGeometry, axisMaterial);
    axisMesh.position.copy(direction.clone().multiplyScalar(5));
    axisMesh.lookAt(0, 0, 0);
    return axisMesh;
  };

  return <div ref={containerRef}/>;
};

export default ThreeScene;
