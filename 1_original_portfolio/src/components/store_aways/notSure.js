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
  camera.position.set(-5, 45, 50);
  camera.lookAt(0, 0, 0); // Set the camera target to (0, 0, 0)

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
          const geometry = new THREE.SphereGeometry(1, 10, 10);
          const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });
          const sphere = new THREE.Mesh(geometry, material);

          // Position each sphere in a cube shape
          sphere.position.set(x * spacing, y * spacing, z * spacing);

          scene.add(sphere);

          // Wireframe creation for the sphere
          const wireframeGeometry = new THREE.WireframeGeometry(geometry);
          const wireframeMaterial = new THREE.LineBasicMaterial({
            color: 0x000000,
          });
          const wireframe = new THREE.LineSegments(
            wireframeGeometry,
            wireframeMaterial
          );
          sphere.add(wireframe);
        }
      }
    }

    // Cone Creation
    const geometry1 = new THREE.ConeGeometry(5, 10, 20);
    const material1 = new THREE.MeshBasicMaterial({ color: 0xabee00 });
    const cone = new THREE.Mesh(geometry1, material1);
    cone.position.set(12, 5, 0);
    scene.add(cone);

    // Wireframe creation for the cone
    const wireframeGeometry1 = new THREE.WireframeGeometry(geometry1);
    const wireframeMaterial1 = new THREE.LineBasicMaterial({ color: 0x000000 });
    const wireframe1 = new THREE.LineSegments(
      wireframeGeometry1,
      wireframeMaterial1
    );
    cone.add(wireframe1);

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate all spheres
      scene.children.forEach((child) => {
        if (child instanceof THREE.Mesh) {
          child.rotation.x += 0.01;
          child.rotation.y += 0.01;
        }
      });

      // Rotate the cone
      cone.rotation.x += 0.01;
      cone.rotation.y += 0.01;

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
