import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Crear la escena
const scene = new THREE.Scene();
scene.background = null; // Hacer el fondo transparente

// Crear la cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(3, 1, 3);

// Renderizador con transparencia
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); 
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Luz ambiental
const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

// Variable global para almacenar el modelo
let bottle = null;

// Cargar el modelo 3D
const loader = new GLTFLoader();
loader.load(
    "./Public/models/bottle.glb",
    (gltf) => {
        bottle = gltf.scene;
        bottle.scale.set(3, 3, 3); // Ajusta tamaño
        scene.add(bottle);
    },
    undefined,
    (error) => {
        console.error("Error al cargar el modelo:", error);
    }
);

// Evento de scroll
window.addEventListener("scroll", () => {
    if (bottle) {
        let scrollY = window.scrollY;
        
        // Rotación en Y (sigue girando)
        bottle.rotation.y = scrollY * 0.005;
        
        // Rotación en X (sigue inclinándose sin límite)
        bottle.rotation.x += 0.03;
    }
});
// Animación
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
