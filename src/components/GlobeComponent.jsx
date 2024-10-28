import React, { useRef, useEffect } from 'react';
import Globe from 'three-globe';
import * as THREE from 'three';

const GlobeComponent = () => {
  const globeContainerRef = useRef(null);

  useEffect(() => {
    // Create a scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 1000); // Aspect ratio set to 1 for square dimensions
    camera.position.z = 250; // Adjust this based on how you want to view the globe

    // Create a WebGL renderer with a transparent background
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(500, 500); // Set the size to 500x500
    globeContainerRef.current.appendChild(renderer.domElement);

    // Adding ambient light and directional light for better visibility
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // Initialize Globe
    const globe = new Globe()
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .showAtmosphere(false)
      .atmosphereAltitude(0.25);

    // Fetch country data for polygons
    fetch('//unpkg.com/three-globe/example/datasets/ne_110m_admin_0_countries.json')
      .then((res) => res.json())
      .then((countries) => {
        globe.polygonsData(countries.features)
          .polygonAltitude(0.01) // Slight elevation for visibility
          .polygonCapColor(() => '#ffffff') // Set country color to white
          .polygonStrokeColor(() => 'rgba(0, 0, 0, 0.2)') // Optional: Light stroke for borders
          .polygonStrokeWidth(1.5);
      });

    // Add arcs data for connecting locations
    globe.arcsData([
      { startLat: 37.7749, startLng: -122.4194, endLat: 48.8566, endLng: 2.3522, color: ['#ff0000', '#00ff00'] },
      { startLat: 40.7128, startLng: -74.0060, endLat: 51.5074, endLng: -0.1278, color: ['#ff0000', '#0000ff'] },
      { startLat: 34.0522, startLng: -118.2437, endLat: -33.8688, endLng: 151.2093, color: ['#00ffff', '#ff00ff'] }, // Los Angeles to Sydney
      { startLat: 35.6895, startLng: 139.6917, endLat: 55.7558, endLng: 37.6173, color: ['#ff00ff', '#00ffff'] }, // Tokyo to Moscow
      { startLat: 55.7558, startLng: 37.6173, endLat: 51.5074, endLng: -0.1278, color: ['#ffff00', '#ff0000'] }, // Moscow to London
      { startLat: 48.8566, startLng: 2.3522, endLat: 51.5074, endLng: -0.1278, color: ['#00ff00', '#0000ff'] }, // Paris to London
      { startLat: 39.9042, startLng: 116.4074, endLat: 34.0522, endLng: -118.2437, color: ['#ff0000', '#ffff00'] } // Beijing to Los Angeles
    ])
      .arcColor((d) => d.color)
      .arcDashLength(0.4)
      .arcDashGap(2)
      .arcDashInitialGap(() => Math.random() * 2)
      .arcDashAnimateTime(3000);

    scene.add(globe);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.002; // Continuous rotation
      renderer.render(scene, camera);
    };
    animate();

    // Window Resize Handler
    const onResize = () => {
      // Keep camera aspect ratio square
      camera.aspect = 1;
      camera.updateProjectionMatrix();
      renderer.setSize(500, 500); // Ensure it stays 500x500
    };

    window.addEventListener('resize', onResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', onResize);
      globeContainerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={globeContainerRef} className='glob' style={{ width: '500px', height: '500px', backgroundColor: '#0A2540', overflow: 'hidden' }}></div>
  );
};

export default GlobeComponent;
