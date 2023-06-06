function rotate360(imageUrl, slideId) {
  const renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(window.innerWidth, window.innerHeight);

  const canvas = renderer.domElement;
  canvas.style.width = '100%';
  canvas.style.height = 'auto'; 

  document.getElementById(slideId).appendChild(canvas);

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 0);

  const scene = new THREE.Scene();

  const geometry = new THREE.SphereGeometry(5, 32, 32);
  const material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(imageUrl),
      side: THREE.DoubleSide
  });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  const animate = function () {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.003;
      renderer.render(scene, camera);
  };
  animate();
}

rotate360("https://upload.wikimedia.org/wikipedia/commons/5/50/Uster%2C_Switzerland%2C_panorama%2C_Brennweite_10.26_mm%2C_%2821_Mai_2020%29_-_Janick_Wartmann.jpg", "slide-1");
rotate360("https://upload.wikimedia.org/wikipedia/commons/2/2c/K%C3%B6ln_Wallraffplatz_%E2%80%93_360%C2%B0_Panorama_aus_der_Luft_%E2%80%93_Dezember_2020.jpg", "slide-2");
rotate360("https://upload.wikimedia.org/wikipedia/commons/0/0a/Cologne_Cathedral_at_Night_%E2%80%93_360%C2%B0_panorama_from_high_up_%E2%80%93_June_2021.jpg", "slide-3");