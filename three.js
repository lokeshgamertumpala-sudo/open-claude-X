<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Black Hole Simulation</title>
    <style>
        html, body {
            margin: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: #050509;
        }

        canvas {
            display: block;
            width: 100%;
            height: 100%;
        }
    </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
</head>
<body>
    <canvas id="blackHole"></canvas>
    <script>
        const canvas = document.getElementById("blackHole");
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        camera.position.z = 4;

        const renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true,
            alpha: true
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const blackHoleGeometry = new THREE.SphereGeometry(1, 60, 60);
        const blackHoleMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const blackHoleMesh = new THREE.Mesh(blackHoleGeometry, blackHoleMaterial);
        scene.add(blackHoleMesh);

        // Generate a valid procedural texture instead of using an incomplete base64 image.
        const textureCanvas = document.createElement("canvas");
        textureCanvas.width = textureCanvas.height = 256;
        const textureContext = textureCanvas.getContext("2d");
        const gradient = textureContext.createRadialGradient(128, 128, 8, 128, 128, 128);
        gradient.addColorStop(0, "#000000");
        gradient.addColorStop(0.45, "#261008");
        gradient.addColorStop(0.72, "#e05a16");
        gradient.addColorStop(1, "#080309");
        textureContext.fillStyle = gradient;
        textureContext.fillRect(0, 0, 256, 256);

        const texture = new THREE.CanvasTexture(textureCanvas);
        const diskMaterial = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            side: THREE.DoubleSide
        });
        const disk = new THREE.Mesh(
            new THREE.RingGeometry(1.15, 2.2, 128),
            diskMaterial
        );
        disk.rotation.x = Math.PI / 2;
        scene.add(disk);

        const starGeometry = new THREE.SphereGeometry(0.1, 24, 24);
        const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const starMesh = new THREE.Mesh(starGeometry, starMaterial);
        starMesh.position.set(2, 2, 2);
        scene.add(starMesh);

        function resize() {
            const width = window.innerWidth;
            const height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height, false);
        }

        function update() {
            disk.rotation.z += 0.003;
            renderer.render(scene, camera);
            requestAnimationFrame(update);
        }

        window.addEventListener("resize", resize);
        document.addEventListener("keydown", (event) => {
            if (event.key === "ArrowUp") {
                camera.position.z = Math.max(1.5, camera.position.z - 0.25);
            } else if (event.key === "ArrowDown") {
                camera.position.z += 0.25;
            }
        });

        resize();
        update();
    </script>
</body>
</html>
