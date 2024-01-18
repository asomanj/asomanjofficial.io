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
  const sphereRef = useRef();

  // Camera position
  camera.position.set(20, 5, 50);

  useEffect(() => {
    // Attach renderer to the ref element
    sphereRef.current.appendChild(renderer.domElement);
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
    const cubeSize = 10;
    const spacing = 8;
    for (let x = 0; x < cubeSize; x++) {
      for (let y = 0; y < cubeSize; y++) {
        for (let z = 0; z < cubeSize; z++) {
          const geometry = new THREE.SphereGeometry(1, 20, 20);
          const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
          const sphere = new THREE.Mesh(geometry, material);

          // Position each sphere in a cube shape
          sphere.position.set(x * spacing, y * spacing, z * spacing);

          scene.add(sphere);
        }
      }
    }

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate all spheres
      scene.children.forEach((child) => {
        if (child instanceof THREE.Mesh) {
          child.rotation.x += 0.01;
          child.rotation.y += 0.01;
        }
      });

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
    };
  }, []); // Empty dependency array to ensure this effect runs only once during component mount

  return <div ref={sphereRef} />;
};

export default ThreeScene;
