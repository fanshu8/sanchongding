'use client';

import React, { useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';

interface PortalParams {
  portalComplexity: number;
  crystalCount: number;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  vortexColor: string;
  rotationSpeed: number;
  bloomStrength: number;
  bloomRadius: number;
  bloomThreshold: number;
  dimensionShift: number;
}

interface CosmicPortalProps extends Partial<PortalParams> {
  className?: string;
  containerClass?: string;
}

export interface CosmicPortalRef {
  activatePortal: () => void;
  shiftDimensions: () => void;
}

export const CosmicPortal = forwardRef<CosmicPortalRef, CosmicPortalProps>((props, ref) => {
  const {
    portalComplexity = 4,
    crystalCount = 12,
    primaryColor = '#9b59b6',
    secondaryColor = '#3498db',
    accentColor = '#e74c3c',
    vortexColor = '#2ecc71',
    rotationSpeed = 0.3,
    bloomStrength = 1.2,
    bloomRadius = 0.7,
    bloomThreshold = 0.2,
    dimensionShift = 4,
    className = '',
    containerClass = '',
  } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Three.js core objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const composerRef = useRef<EffectComposer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const bloomPassRef = useRef<UnrealBloomPass | null>(null);
  const fxaaPassRef = useRef<ShaderPass | null>(null);
  const clockRef = useRef<THREE.Clock | null>(null);

  // Portal objects
  const meshesRef = useRef<THREE.Object3D[]>([]);
  const materialsRef = useRef<THREE.Material[]>([]);
  const portalMaterialsRef = useRef<any[]>([]);
  const portalLightsRef = useRef<THREE.Light[]>([]);
  const animationIdRef = useRef<number>(0);
  const timeRef = useRef<number>(0);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  const paramsRef = useRef<PortalParams>({
    portalComplexity,
    crystalCount,
    primaryColor,
    secondaryColor,
    accentColor,
    vortexColor,
    rotationSpeed,
    bloomStrength,
    bloomRadius,
    bloomThreshold,
    dimensionShift,
  });

  // Update params when props change
  useEffect(() => {
    paramsRef.current = {
      portalComplexity,
      crystalCount,
      primaryColor,
      secondaryColor,
      accentColor,
      vortexColor,
      rotationSpeed,
      bloomStrength,
      bloomRadius,
      bloomThreshold,
      dimensionShift,
    };
  }, [
    portalComplexity,
    crystalCount,
    primaryColor,
    secondaryColor,
    accentColor,
    vortexColor,
    rotationSpeed,
    bloomStrength,
    bloomRadius,
    bloomThreshold,
    dimensionShift,
  ]);

  function addPortalShader(material: any) {
    material.onBeforeCompile = (shader: any) => {
      shader.uniforms.time = { value: 0 };
      shader.uniforms.pulseTime = { value: -1000 };
      shader.uniforms.portalSpeed = { value: 8.0 };
      shader.uniforms.portalColor = { value: new THREE.Color(paramsRef.current.accentColor) };
      shader.uniforms.dimensionShift = { value: 0 };

      shader.vertexShader = `varying vec3 vWorldPosition;\n` + shader.vertexShader;

      shader.fragmentShader =
        `
        uniform float time;
        uniform float pulseTime;
        uniform float portalSpeed;
        uniform vec3 portalColor;
        uniform float dimensionShift;
        varying vec3 vWorldPosition;\n` + shader.fragmentShader;

      shader.vertexShader = shader.vertexShader.replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
       vWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;`,
      );

      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <emissivemap_fragment>',
        `#include <emissivemap_fragment>
       float timeSincePortal = time - pulseTime;
       if(timeSincePortal > 0.0 && timeSincePortal < 3.0) {
         float portalRadius = timeSincePortal * portalSpeed;
         float currentRadius = length(vWorldPosition);
         float portalWidth = 1.5;
         float portalEffect = smoothstep(portalRadius - portalWidth, portalRadius, currentRadius) -
                             smoothstep(portalRadius, portalRadius + portalWidth, currentRadius);
         vec3 dimensionalColor = mix(portalColor, vec3(1.0, 0.5, 1.0), sin(dimensionShift * 3.14159) * 0.5 + 0.5);
         totalEmissiveRadiance += dimensionalColor * portalEffect * 4.0;
       }`,
      );
      portalMaterialsRef.current.push(shader);
    };
  }

  function createCosmicBackground(scene: THREE.Scene) {
    const count = 4000;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = 80 + Math.random() * 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      const temp = Math.random();
      const color = new THREE.Color();
      if (temp < 0.15) color.setHSL(0.8, 0.8, 0.9);
      else if (temp < 0.4) color.setHSL(0.6, 0.6, 0.8);
      else if (temp < 0.7) color.setHSL(0.1, 0.3, 0.9);
      else color.setHSL(0.3, 0.7, 0.6);

      color.toArray(colors, i3);
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.3,
      vertexColors: true,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
    });

    const stars = new THREE.Points(geo, mat);
    scene.add(stars);
    meshesRef.current.push(stars);
    materialsRef.current.push(mat);
  }

  function createPortalCore(scene: THREE.Scene) {
    const geo = new THREE.SphereGeometry(0.8, 32, 32);
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        pulseTime: { value: -1000 },
        dimensionShift: { value: 0 },
        color1: { value: new THREE.Color(paramsRef.current.primaryColor) },
        color2: { value: new THREE.Color(paramsRef.current.secondaryColor) },
        color3: { value: new THREE.Color(paramsRef.current.accentColor) },
      },
      vertexShader: `
      uniform float time;
      uniform float dimensionShift;
      varying vec3 vPos;
      varying vec3 vNorm;
      void main() {
        vPos = position;
        vNorm = normal;
        float warp = sin(position.x * 10.0 + time * 3.0) * 0.1;
        float shift = sin(dimensionShift * 6.28318) * 0.3;
        vec3 p = position * (1.0 + warp + shift);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,
      fragmentShader: `
      uniform float time;
      uniform float pulseTime;
      uniform float dimensionShift;
      uniform vec3 color1;
      uniform vec3 color2;
      uniform vec3 color3;
      varying vec3 vPos;
      varying vec3 vNorm;
      void main() {
        float noise = sin(vPos.x * 20.0 + time * 4.0) * cos(vPos.z * 15.0 + time * 3.0);
        vec3 baseColor = mix(color1, color2, 0.5 + 0.5 * sin(time * 2.0 + dimensionShift));
        vec3 finalColor = mix(baseColor, color3, noise * 0.3);

        float fresnel = pow(1.0 - abs(dot(vNorm, normalize(cameraPosition - vPos))), 3.0);
        finalColor = mix(finalColor, vec3(1.0), fresnel * 0.5);

        float timeSincePortal = time - pulseTime;
        if(timeSincePortal > 0.0 && timeSincePortal < 1.0) {
          float burst = 1.0 - timeSincePortal;
          finalColor += vec3(1.0) * burst * 3.0;
        }

        gl_FragColor = vec4(finalColor, 0.9);
      }
    `,
      transparent: true,
    });

    portalMaterialsRef.current.push(mat);
    materialsRef.current.push(mat);
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);
    meshesRef.current.push(mesh);
  }

  function createVortexRings(scene: THREE.Scene) {
    const colors = [
      paramsRef.current.primaryColor,
      paramsRef.current.secondaryColor,
      paramsRef.current.accentColor,
      paramsRef.current.vortexColor,
    ];

    for (let ring = 0; ring < 5; ring++) {
      const radius = 2 + ring * 0.8;
      const geo = new THREE.TorusGeometry(radius, 0.05, 16, 64);
      const mat = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(colors[ring % colors.length]),
        transparent: true,
        opacity: 0.7,
        metalness: 0.8,
        roughness: 0.2,
        clearcoat: 0.8,
        clearcoatRoughness: 0.1,
        emissive: new THREE.Color(colors[ring % colors.length]).multiplyScalar(0.2),
      });

      addPortalShader(mat);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = Math.PI * 0.1 * ring;
      mesh.rotation.z = Math.PI * 0.15 * ring;
      scene.add(mesh);
      meshesRef.current.push(mesh);
    }
  }

  function createFloatingCrystals(scene: THREE.Scene) {
    const colors = [
      paramsRef.current.accentColor,
      paramsRef.current.vortexColor,
      paramsRef.current.primaryColor,
      paramsRef.current.secondaryColor,
    ];

    for (let i = 0; i < paramsRef.current.crystalCount; i++) {
      const geo = new THREE.OctahedronGeometry(0.3 + Math.random() * 0.4, 1);
      const mat = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(colors[i % colors.length]),
        transparent: true,
        opacity: 0.8,
        metalness: 0.9,
        roughness: 0.1,
        clearcoat: 1.0,
        clearcoatRoughness: 0.0,
        emissive: new THREE.Color(colors[i % colors.length]).multiplyScalar(0.3),
      });

      addPortalShader(mat);
      const mesh = new THREE.Mesh(geo, mat);
      const angle = (i / paramsRef.current.crystalCount) * Math.PI * 2;
      const radius = 6 + Math.random() * 4;
      mesh.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 8,
        Math.sin(angle) * radius,
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      scene.add(mesh);
      meshesRef.current.push(mesh);
    }
  }

  function createDimensionalStreams(scene: THREE.Scene) {
    const colors = [
      paramsRef.current.vortexColor,
      paramsRef.current.primaryColor,
      paramsRef.current.secondaryColor,
    ];

    for (let i = 0; i < 8; i++) {
      const points = [];
      const segments = 120;

      for (let j = 0; j <= segments; j++) {
        const t = j / segments;
        const angle = t * Math.PI * 12 + i * Math.PI * 0.25;
        const radius = 3 + Math.sin(t * Math.PI * 6) * 1.5;
        const height = (t - 0.5) * 15;

        points.push(new THREE.Vector3(Math.cos(angle) * radius, height, Math.sin(angle) * radius));
      }

      const curve = new THREE.CatmullRomCurve3(points);
      const geo = new THREE.TubeGeometry(curve, segments, 0.02, 8, false);
      const mat = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(colors[i % colors.length]),
        transparent: true,
        opacity: 0.6,
        metalness: 1.0,
        roughness: 0.0,
        emissive: new THREE.Color(colors[i % colors.length]).multiplyScalar(0.4),
      });

      addPortalShader(mat);
      const stream = new THREE.Mesh(geo, mat);
      scene.add(stream);
      meshesRef.current.push(stream);
    }
  }

  function createPortalFrame(scene: THREE.Scene) {
    const frameGeo = new THREE.TorusGeometry(7, 0.2, 16, 64);
    const frameMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(paramsRef.current.primaryColor),
      transparent: true,
      opacity: 0.4,
      metalness: 1.0,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.0,
      emissive: new THREE.Color(paramsRef.current.primaryColor).multiplyScalar(0.5),
    });

    addPortalShader(frameMat);
    const frame = new THREE.Mesh(frameGeo, frameMat);
    scene.add(frame);
    meshesRef.current.push(frame);
  }

  function createEnergyParticles(scene: THREE.Scene) {
    const count = 1500;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const r = 2 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.08,
      color: paramsRef.current.vortexColor,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(geo, mat);
    scene.add(particles);
    meshesRef.current.push(particles);
    materialsRef.current.push(mat);
  }

  function createSpaceDistortion(scene: THREE.Scene) {
    const geo = new THREE.SphereGeometry(12, 64, 64);
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        dimensionShift: { value: 0 },
        color1: { value: new THREE.Color(paramsRef.current.primaryColor) },
        color2: { value: new THREE.Color(paramsRef.current.vortexColor) },
      },
      vertexShader: `
      uniform float time;
      uniform float dimensionShift;
      varying vec3 vNorm;
      varying vec3 vPos;
      void main() {
        vNorm = normal;
        vPos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
      fragmentShader: `
      uniform float time;
      uniform float dimensionShift;
      uniform vec3 color1;
      uniform vec3 color2;
      varying vec3 vNorm;
      varying vec3 vPos;
      void main() {
        vec3 viewDir = normalize(cameraPosition - vPos);
        float fresnel = pow(1.0 - abs(dot(vNorm, viewDir)), 4.0);

        float distortion = sin(vPos.x * 0.5 + time * 2.0) * cos(vPos.y * 0.7 + time * 1.5);
        vec3 color = mix(color1, color2, distortion * 0.5 + 0.5 + dimensionShift * 0.3);

        gl_FragColor = vec4(color, fresnel * 0.3);
      }
    `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const distortion = new THREE.Mesh(geo, mat);
    scene.add(distortion);
    meshesRef.current.push(distortion);
    materialsRef.current.push(mat);
  }

  function createPortalScene() {
    const scene = sceneRef.current;
    if (!scene) return;

    // Clean up existing meshes
    meshesRef.current.forEach((mesh) => scene.remove(mesh));
    materialsRef.current.forEach((mat) => mat.dispose());
    meshesRef.current = [];
    materialsRef.current = [];
    portalMaterialsRef.current = [];

    // Create portal components
    createCosmicBackground(scene);
    createPortalCore(scene);
    createVortexRings(scene);
    createFloatingCrystals(scene);
    createDimensionalStreams(scene);
    createPortalFrame(scene);
    createEnergyParticles(scene);
    createSpaceDistortion(scene);
  }

  const activatePortal = () => {
    portalMaterialsRef.current.forEach((mat) => {
      if (mat.uniforms && mat.uniforms.pulseTime) {
        mat.uniforms.pulseTime.value = timeRef.current;
      }
    });
  };

  const shiftDimensions = () => {
    const colors = [
      '#9b59b6',
      '#3498db',
      '#e74c3c',
      '#2ecc71',
      '#f39c12',
      '#e67e22',
      '#1abc9c',
      '#34495e',
    ];
    paramsRef.current.primaryColor = colors[Math.floor(Math.random() * colors.length)];
    paramsRef.current.secondaryColor = colors[Math.floor(Math.random() * colors.length)];
    paramsRef.current.accentColor = colors[Math.floor(Math.random() * colors.length)];
    paramsRef.current.vortexColor = colors[Math.floor(Math.random() * colors.length)];
    paramsRef.current.dimensionShift = Math.random();
    createPortalScene();
  };

  useImperativeHandle(ref, () => ({
    activatePortal,
    shiftDimensions,
  }));

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0015);
    scene.fog = new THREE.FogExp2(0x1a0033, 0.001);
    sceneRef.current = scene;

    // Camera setup
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 15);
    cameraRef.current = camera;

    // Lighting
    scene.add(new THREE.AmbientLight(0x330066, 0.2));
    const mainLight = new THREE.DirectionalLight(0xffffff, 0.6);
    mainLight.position.set(10, 10, 5);
    scene.add(mainLight);

    // Portal lights
    const lightColors = [
      paramsRef.current.primaryColor,
      paramsRef.current.secondaryColor,
      paramsRef.current.accentColor,
      paramsRef.current.vortexColor,
    ];
    for (let i = 0; i < 6; i++) {
      const light = new THREE.PointLight(new THREE.Color(lightColors[i % 4]), 0.8, 20);
      scene.add(light);
      portalLightsRef.current.push(light);
    }

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;

    // Controls
    const controls = new OrbitControls(camera, canvasRef.current);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.minDistance = 8;
    controls.maxDistance = 40;
    controlsRef.current = controls;

    // Post-processing
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      paramsRef.current.bloomStrength,
      paramsRef.current.bloomRadius,
      paramsRef.current.bloomThreshold,
    );
    composer.addPass(bloomPass);
    bloomPassRef.current = bloomPass;

    const fxaaPass = new ShaderPass(FXAAShader);
    const pixelRatio = renderer.getPixelRatio();
    fxaaPass.material.uniforms['resolution'].value.set(
      1 / (width * pixelRatio),
      1 / (height * pixelRatio),
    );
    composer.addPass(fxaaPass);
    fxaaPassRef.current = fxaaPass;
    composerRef.current = composer;

    const clock = new THREE.Clock();
    clockRef.current = clock;

    // Create portal scene
    createPortalScene();

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      timeRef.current = clock.getElapsedTime();
      const time = timeRef.current;

      // Update shader uniforms
      portalMaterialsRef.current.forEach((shader) => {
        if (shader.uniforms) {
          if (shader.uniforms.time) shader.uniforms.time.value = time;
          if (shader.uniforms.dimensionShift)
            shader.uniforms.dimensionShift.value = paramsRef.current.dimensionShift;
        }
      });

      materialsRef.current.forEach((mat: any) => {
        if (mat.uniforms) {
          if (mat.uniforms.time) mat.uniforms.time.value = time;
          if (mat.uniforms.dimensionShift)
            mat.uniforms.dimensionShift.value = paramsRef.current.dimensionShift;
        }
      });

      // Animate portal lights
      portalLightsRef.current.forEach((light, i) => {
        const angle = time * 0.3 + (i / 6) * Math.PI * 2;
        const radius = 10 + Math.sin(time * 0.5 + i) * 3;
        light.position.x = Math.cos(angle) * radius;
        light.position.z = Math.sin(angle) * radius;
        light.position.y = Math.sin(time * 0.4 + i * 0.7) * 5;
      });

      // Animate meshes
      meshesRef.current.forEach((mesh, i) => {
        if (!mesh.rotation) return;
        const speed = paramsRef.current.rotationSpeed;
        mesh.rotation.y += delta * speed * (i % 2 ? -1 : 1) * 0.3;
        mesh.rotation.x += delta * speed * 0.1;

        // Animate particle positions
        if ((mesh as any).material && (mesh as any).material.type === 'PointsMaterial') {
          const positions = (mesh as any).geometry.attributes.position.array;
          for (let j = 0; j < positions.length; j += 3) {
            positions[j] += Math.sin(time + j) * 0.001;
            positions[j + 1] += Math.cos(time + j) * 0.001;
            positions[j + 2] += Math.sin(time * 0.7 + j) * 0.001;
          }
          (mesh as any).geometry.attributes.position.needsUpdate = true;
        }
      });

      controls.update();
      composer.render();
    };

    animate();

    // Handle resize with ResizeObserver
    const handleResize = () => {
      if (!camera || !renderer || !composer || !canvasRef.current || !containerRef.current) return;

      const container = containerRef.current;
      const width = container.clientWidth;
      const height = container.clientHeight;

      // Update camera
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      // Update renderer and composer
      renderer.setSize(width, height);
      composer.setSize(width, height);

      // Update FXAA pass
      const pixelRatio = renderer.getPixelRatio();
      if (fxaaPassRef.current) {
        fxaaPassRef.current.material.uniforms['resolution'].value.set(
          1 / (width * pixelRatio),
          1 / (height * pixelRatio),
        );
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);
    resizeObserverRef.current = resizeObserver;

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      // Dispose of Three.js objects
      meshesRef.current.forEach((mesh) => {
        if ((mesh as any).geometry) (mesh as any).geometry.dispose();
        if ((mesh as any).material) {
          if (Array.isArray((mesh as any).material)) {
            (mesh as any).material.forEach((mat: any) => mat.dispose());
          } else {
            (mesh as any).material.dispose();
          }
        }
      });

      materialsRef.current.forEach((mat) => mat.dispose());

      if (renderer) {
        renderer.dispose();
      }

      if (controls) {
        controls.dispose();
      }

      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden h-full w-full ${containerClass}`}>
      <canvas ref={canvasRef} className={`absolute inset-0 h-full w-full block ${className}`} />
    </div>
  );
});

CosmicPortal.displayName = 'CosmicPortal';
