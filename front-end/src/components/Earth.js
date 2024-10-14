import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { getEarthData } from '../api/api'; 

const Earth = () => {
    const [earthData, setEarthData] = useState(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const geometry = new THREE.SphereGeometry(5, 32, 32);
        const texture = new THREE.TextureLoader().load('/images/earth.jpg'); // Dünya dokusunu ekleyin
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const earth = new THREE.Mesh(geometry, material);
        scene.add(earth);

        camera.position.z = 10;

        const fetchData = async () => {
            try {
                const data = await getEarthData(); // API'den veriyi çekin
                console.log(data);
                setEarthData(data); // Veriyi state'e kaydedin
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        const animate = () => {
            requestAnimationFrame(animate);
            earth.rotation.y += 0.01; // Dünya'nın dönüşü
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            renderer.dispose();
        };
    }, []);

    return (
        <div>
            {earthData && (
                <div style={{ position: 'absolute', top: 10, left: 10, color: 'white' }}>
                    <h2>Dünya Verileri</h2>
                    <p>Nüfus: {earthData.population}</p>
                    <p>Alan: {earthData.area} km²</p>
                    <p>Ağırlık: {earthData.gravity} m/s²</p>
                    <p>Dönüş Süresi: {earthData.rotation_period} saat</p>
                    <p>Dönüş Süresi: {earthData.revolution_period} gün</p>
                </div>
            )}
        </div>
    );
};

export default Earth;
