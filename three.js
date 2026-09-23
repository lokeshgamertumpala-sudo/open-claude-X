<!DOCTYPE html>
<html>
<head>
    <title>Black Hole Simulation</title>
    <style>
        body {
            background-color: #f0f0f0;
        }
    </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
</head>
<body>
    <canvas id="blackHole" width="800" height="600"></canvas>
    <script>
        // Create scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById("blackHole"),
            displayContainer: document.body
        });

        // Add ambient and directional lighting
        const ambientLight = new THREE.AmbientLight(0x444444);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        // Add black hole mesh
        const blackHoleGeometry = new THREE.SphereGeometry(1, 60, 60);
        const blackHoleMaterial = new THREE.MeshBasicMaterial({
            color: 0x000000,
            mapping: THREE.TextureMapping
        });
        const blackHoleMesh = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial);
        scene.add(blackHoleMesh);

        // Add texture and material to black hole mesh
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load("data:image/png;base64,iVBORw0KGg...".replace(/\\/g, ''));
        blackHoleMaterial.map = texture;

        // Procedural generation of black hole's texture and material
        const noiseTexture = new THREE.Texture();
        noiseTexture.wrapS = noiseTexture.wrapT = THREE.RepeatWrapping;
        noiseTexture.repeat.set(10, 10);
        noiseTexture.needsUpdate = true;
        const noiseMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            map: noiseTexture,
            transparent: true,
            opacity: 0.5
        });
        const noiseMesh = new THREE.Mesh(blackHoleGeometry, noiseMaterial);
        scene.add(noiseMesh);

        // Addition of other celestial bodies
        const starGeometry = new THREE.SphereGeometry(0.1, 60, 60);
        const starMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.5
        });
        const starMesh = new THREE.Mesh(starGeometry, starMaterial);
        starMesh.position.set(2, 2, 2);
        scene.add(starMesh);

        // Implementation of gravity and motion
        function update() {
            camera.position.z += 0.01;
            camera.lookAt(scene.position);
            renderer.setSize(window.innerWidth, window.innerHeight);
            requestAnimationFrame(update);
        }
        update();

        // Creation of a user interface to control the simulation
        document.addEventListener("keydown", (event) => {
            if (event.key === "ArrowUp") {
                camera.position.z += 1;
            } else if (event.key === "ArrowDown") {
                camera.position.z -= 1;
            }
        });
    </script>
</body>
</html>