import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
    75, //FOV
    window.innerWidth / innerHeight, //aspect Ratio
    0.1, //near
    2000 //far
);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
renderer.shadowMapType = THREE.PCFSoftShadowMap;
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(6.802,9.670,-6.5);

const light = new THREE.PointLight(0xffffff, 1, 50);
light.position.set(-26.834, 13.277, 0.6);
light.shadow.mapSize.width = 2048;
light.shadow.mapSize.height = 2048;
light.shadow.camera.near = 0.5;
light.shadow.camera.far = 500;
light.shadow.focus = 1
light.castShadow = true;
scene.add(light);

const light2 = new THREE.AmbientLight(0xffffff, 0.65);
light2.position.set(5.576, 13.634, 20.05);
scene.add(light2);



camera.position.set(6.789,9.910,19);

scene.add(camera);

let box = new THREE.BoxGeometry(1, 1, 1)
let cylinder = new THREE.CylinderGeometry(1, 1, 1)
let sphere = new THREE.SphereGeometry(1, 32, 16);
let slats = new THREE.MeshPhysicalMaterial({ color: 0x000000 });


//room

let wallMat = new THREE.MeshPhysicalMaterial({ color: 0xe6e6e6 });
let w1 = new THREE.Mesh(box, wallMat);
let w2 = new THREE.Mesh(box, wallMat);
let w3 = new THREE.Mesh(box, wallMat);
let w4 = new THREE.Mesh(box, wallMat);
let w5 = new THREE.Mesh(box, wallMat);
let w6 = new THREE.Mesh(box, wallMat);
let w7 = new THREE.Mesh(box, wallMat);
let w8 = new THREE.Mesh(box, wallMat);
let w9 = new THREE.Mesh(box,wallMat);
w9.receiveShadow = true
w1.receiveShadow = true;
w2.receiveShadow = true;
w3.receiveShadow = true;
w4.receiveShadow = true;
w5.receiveShadow = true;
w6.receiveShadow = true;
w7.receiveShadow = true;
w4.castShadow = true;
w5.castShadow = true;
w6.castShadow = true;
w7.castShadow = true;
w8.castShadow = true;
w1.scale.set(30, 1, 15);
w1.position.set(7.5, 0, 0);
w2.scale.set(30, 1, 23);
w2.position.set(7.5, 11, -7);
w3.scale.set(15, 2, 23);
w3.position.set(22, 11, 0);
w4.scale.set(15, 2, 5.611);
w4.position.set(-7, 2.328, 0);
w5.scale.set(2.55, 2, 20.7);
w5.position.set(-7, 12, 6.225);
w2.rotation.set(90 * Math.PI / 180, 0, 0);
w3.rotation.set(90 * Math.PI / 180, 0, 90 * Math.PI / 180);
w4.rotation.set(90 * Math.PI / 180, 0, 90 * Math.PI / 180);
w5.rotation.set(90 * Math.PI / 180, 0, 90 * Math.PI / 180);
w6.scale.set(2.55, 2, 20.7);
w6.position.set(-7, 12, -6.219);
w6.rotation.set(90 * Math.PI / 180, 0, 90 * Math.PI / 180);
w7.rotation.set(90 * Math.PI / 180, 0, 90 * Math.PI / 180);
w8.rotation.set(90 * Math.PI / 180, 0, 90 * Math.PI / 180);
w7.position.set(-7, 20.634, 0);
w7.scale.set(15, 2, 3.8);
w8.position.set(-7.199, 15.3, 0);
w8.scale.set(15, 1, 1);
w9.scale.set(31.076,1,15);
w9.position.set(7.5,22.972,0);

let walls = new THREE.Group();
walls.add(w1, w2, w3, w4, w5, w6, w7, w8,w9);
scene.add(walls);
light.target = w3;
light.angle = 70 * Math.PI / 180

let glass = new THREE.MeshLambertMaterial({ color: 0xd1f1f5, transmission: 0.5, opacity: 0.5, transparent: true });
let win = new THREE.Mesh(box, glass);
win.scale.set(0.15, 14.873, 12.082);
win.position.set(-7.9, 11.978, 0);

scene.add(win);

let wood1 = new THREE.MeshPhongMaterial({ color: 0x856f6a });
let b1 = new THREE.Mesh(box, wood1);
let b2 = new THREE.Mesh(box, wood1);
let b3 = new THREE.Mesh(box, wood1);
let b4 = new THREE.Mesh(box, wood1);
let b5 = new THREE.Mesh(box, wood1);
let b6 = new THREE.Mesh(box, wood1);
let b7 = new THREE.Mesh(box, wood1);
let b8 = new THREE.Mesh(box, wood1);
let s1 = new THREE.Mesh(box, slats);
let s2 = new THREE.Mesh(box, slats);
let s3 = new THREE.Mesh(box, slats);
let s4 = new THREE.Mesh(box, slats);
let s5 = new THREE.Mesh(box, slats);
let s6 = new THREE.Mesh(box, slats);
let s7 = new THREE.Mesh(box, slats);
b1.scale.set(1.5, 1.5, 15);
b2.scale.set(1.5, 1.5, 15);
b3.scale.set(1.5, 1.5, 15);
b4.scale.set(1.5, 1.5, 15);
b5.scale.set(1.5, 1.5, 15);
b6.scale.set(1.5, 1.5, 15);
b7.scale.set(1.5, 1.5, 15);
b8.scale.set(0.1, 1.5, 15);
b1.position.set(-5.793, 21.750, 0);
b2.position.set(-4.265, 21.750, 0);
b3.position.set(-2.739, 21.750, 0);
b4.position.set(-1.209, 21.750, 0);
b5.position.set(0.338, 21.750, 0);
b6.position.set(1.867, 21.750, 0);
b7.position.set(3.39, 21.75, 0);
b8.position.set(4.217, 21.750, 0);
s1.scale.set(0.02, 1.5, 15);
s2.scale.set(0.02, 1.5, 15);
s3.scale.set(0.02, 1.5, 15);
s4.scale.set(0.02, 1.5, 15);
s5.scale.set(0.02, 1.5, 15);
s6.scale.set(0.02, 1.5, 15);
s7.scale.set(0.02, 1.5, 15);
s1.position.set(-5.033, 21.75, 0);
s2.position.set(-3.501, 21.75, 0);
s3.position.set(-1.97, 21.75, 0);
s4.position.set(-0.437, 21.75, 0);
s5.position.set(1.094, 21.75, 0);
s6.position.set(2.629, 21.75, 0);
s7.position.set(4.145, 21.75, 0);
b1.receiveShadow = true;
b2.receiveShadow = true;
b3.receiveShadow = true;
b4.receiveShadow = true;
b5.receiveShadow = true;
b6.receiveShadow = true;
b7.receiveShadow = true;
b8.castShadow = true;
let beam = new THREE.Group();
beam.add(b1, b2, b3, b4, b5, b6, b7, b8, s1, s2, s3, s4, s5, s6, s7);
beam.position.set(0.485, 0, 0.435);
beam.scale.set(1, 1, 0.935);
scene.add(beam);

let woodMesh = new THREE.MeshPhysicalMaterial({ color: 0xab9a9b });
let woodWall1 = new THREE.Mesh(box, woodMesh);
let woodWall2 = new THREE.Mesh(box, woodMesh);
let woodWall3 = new THREE.Mesh(box, woodMesh);
let woodWall4 = new THREE.Mesh(box, woodMesh);
let woodWall5 = new THREE.Mesh(box, woodMesh);
let woodWall6 = new THREE.Mesh(box, woodMesh);
let woodWall7 = new THREE.Mesh(box, woodMesh);
let woodWall8 = new THREE.Mesh(box, woodMesh);
let woodWall9 = new THREE.Mesh(box, woodMesh);
let woodWall10 = new THREE.Mesh(box, woodMesh);
let woodWall11 = new THREE.Mesh(box, woodMesh);
let woodWall12 = new THREE.Mesh(box, woodMesh);
let woodWall13 = new THREE.Mesh(box, woodMesh);
let woodWall14 = new THREE.Mesh(box, woodMesh);
let woodWall15 = new THREE.Mesh(box, woodMesh);
let woodWall16 = new THREE.Mesh(box, woodMesh);
let woodWall17 = new THREE.Mesh(box, woodMesh);
let woodWall18 = new THREE.Mesh(box, woodMesh);
let woodWall19 = new THREE.Mesh(box, woodMesh);
let woodWall20 = new THREE.Mesh(box, woodMesh);
let woodWall21 = new THREE.Mesh(box, woodMesh);
let woodWall22 = new THREE.Mesh(box, woodMesh);
let woodWall23 = new THREE.Mesh(box, woodMesh);
let woodWall24 = new THREE.Mesh(box, woodMesh);
let woodWall25 = new THREE.Mesh(box, woodMesh);
let woodWall26 = new THREE.Mesh(box, woodMesh);
let woodWall27 = new THREE.Mesh(box, woodMesh);
let woodWall28 = new THREE.Mesh(box, woodMesh);
let woodWall29 = new THREE.Mesh(box, woodMesh);
woodWall1.scale.set(0.4, 16.88, 0.4);
woodWall2.scale.set(0.4, 16.88, 0.4);
woodWall3.scale.set(0.4, 16.88, 0.4);
woodWall4.scale.set(0.4, 16.88, 0.4);
woodWall5.scale.set(0.4, 16.88, 0.4);
woodWall6.scale.set(0.4, 16.88, 0.4);
woodWall7.scale.set(0.4, 16.88, 0.4);
woodWall8.scale.set(0.4, 16.88, 0.4);
woodWall9.scale.set(0.4, 16.88, 0.4);
woodWall10.scale.set(0.4, 16.88, 0.4);
woodWall11.scale.set(0.4, 16.88, 0.4);
woodWall12.scale.set(0.4, 16.88, 0.4);
woodWall13.scale.set(0.4, 16.88, 0.4);
woodWall14.scale.set(0.4, 16.88, 0.4);
woodWall15.scale.set(0.4, 16.88, 0.4);
woodWall16.scale.set(0.4, 16.88, 0.4);
woodWall17.scale.set(0.4, 16.88, 0.4);
woodWall18.scale.set(0.4, 16.88, 0.4);
woodWall19.scale.set(0.4, 16.88, 0.4);
woodWall20.scale.set(0.4, 16.88, 0.4);
woodWall21.scale.set(0.4, 16.88, 0.4);
woodWall22.scale.set(0.4, 16.88, 0.4);
woodWall23.scale.set(0.4, 16.88, 0.4);
woodWall24.scale.set(0.4, 16.88, 0.4);
woodWall25.scale.set(0.4, 16.88, 0.4);
woodWall26.scale.set(0.4, 16.88, 0.4);
woodWall27.scale.set(0.4, 16.88, 0.4);
woodWall28.scale.set(0.4, 16.88, 0.4);
woodWall29.scale.set(0.4, 16.88, 0.4);
woodWall1.position.set(17, 9, -2.3);
woodWall2.position.set(17, 9, -1.89);
woodWall3.position.set(17, 9, -1.486);
woodWall4.position.set(17, 9, -1.072);
woodWall5.position.set(17, 9, -0.661);
woodWall6.position.set(17, 9, -0.245);
woodWall7.position.set(17, 9, 0.176);
woodWall8.position.set(17, 9, 0.591);
woodWall9.position.set(17, 9, 1.009);
woodWall10.position.set(17, 9, 1.431);
woodWall11.position.set(17, 9, 1.839);
woodWall12.position.set(17, 9, 2.259);
woodWall13.position.set(17, 9, 2.671);
woodWall14.position.set(17, 9, 3.082);
woodWall15.position.set(17, 9, 3.492);
woodWall16.position.set(17, 9, 3.912);
woodWall17.position.set(17, 9, 4.323);
woodWall18.position.set(17, 9, 4.728);
woodWall19.position.set(17, 9, 5.149);
woodWall20.position.set(17, 9, 5.568);
woodWall21.position.set(17.416, 9, 5.568);
woodWall22.position.set(17.832, 9, 5.568);
woodWall23.position.set(18.244, 9, 5.568);
woodWall24.position.set(18.661, 9, 5.568);
woodWall25.position.set(19.075, 9, 5.568);
woodWall26.position.set(19.491, 9, 5.568);
woodWall27.position.set(19.913, 9, 5.568);
woodWall28.position.set(20.338, 9, 5.568);
woodWall29.position.set(20.757, 9, 5.568);

woodWall1.castShadow=true;
woodWall1.receiveShadow = true;
woodWall2.castShadow=true;
woodWall2.receiveShadow = true;
woodWall3.castShadow=true;
woodWall3.receiveShadow = true;
woodWall4.castShadow=true;
woodWall4.receiveShadow = true;
woodWall5.castShadow=true;
woodWall5.receiveShadow = true;
woodWall6.castShadow=true;
woodWall6.receiveShadow = true;
woodWall7.castShadow=true;
woodWall7.receiveShadow = true;
woodWall8.castShadow=true;
woodWall8.receiveShadow = true;
woodWall9.castShadow=true;
woodWall9.receiveShadow = true;
woodWall10.castShadow=true;
woodWall10.receiveShadow = true;
woodWall11.castShadow=true;
woodWall11.receiveShadow = true;
woodWall12.castShadow=true;
woodWall12.receiveShadow = true;
woodWall13.castShadow=true;
woodWall13.receiveShadow = true;
woodWall14.castShadow=true;
woodWall14.receiveShadow = true;
woodWall15.castShadow=true;
woodWall15.receiveShadow = true;
woodWall16.castShadow=true;
woodWall16.receiveShadow = true;
woodWall17.castShadow=true;
woodWall17.receiveShadow = true;
woodWall18.castShadow=true;
woodWall18.receiveShadow = true;
woodWall19.castShadow=true;
woodWall19.receiveShadow = true;
woodWall20.castShadow=true;
woodWall20.receiveShadow = true;
woodWall21.castShadow=true;
woodWall21.receiveShadow = true;
woodWall22.castShadow=true;
woodWall22.receiveShadow = true;
woodWall23.castShadow=true;
woodWall23.receiveShadow = true;
woodWall24.castShadow=true;
woodWall24.receiveShadow = true;
woodWall25.castShadow=true;
woodWall25.receiveShadow = true;
woodWall26.castShadow=true;
woodWall26.receiveShadow = true;
woodWall27.castShadow=true;
woodWall27.receiveShadow = true;
woodWall28.castShadow=true;
woodWall28.receiveShadow = true;
woodWall29.castShadow=true;
woodWall29.receiveShadow = true;

let wallSlats1 = new THREE.Mesh(box, slats);
let wallSlats2 = new THREE.Mesh(box, slats);
let wallSlats3 = new THREE.Mesh(box, slats);
let wallSlats4 = new THREE.Mesh(box, slats);
let wallSlats5 = new THREE.Mesh(box, slats);
let wallSlats6 = new THREE.Mesh(box, slats);
let wallSlats7 = new THREE.Mesh(box, slats);
let wallSlats8 = new THREE.Mesh(box, slats);
let wallSlats9 = new THREE.Mesh(box, slats);
let wallSlats10 = new THREE.Mesh(box, slats);
let wallSlats11 = new THREE.Mesh(box, slats);
let wallSlats12 = new THREE.Mesh(box, slats);
let wallSlats13 = new THREE.Mesh(box, slats);
let wallSlats14 = new THREE.Mesh(box, slats);
let wallSlats15 = new THREE.Mesh(box, slats);
let wallSlats16 = new THREE.Mesh(box, slats);
let wallSlats17 = new THREE.Mesh(box, slats);
let wallSlats18 = new THREE.Mesh(box, slats);
let wallSlats19 = new THREE.Mesh(box, slats);
let wallSlats20 = new THREE.Mesh(box, slats);
let wallSlats21 = new THREE.Mesh(box, slats);
let wallSlats22 = new THREE.Mesh(box, slats);
let wallSlats23 = new THREE.Mesh(box, slats);
let wallSlats24 = new THREE.Mesh(box, slats);
let wallSlats25 = new THREE.Mesh(box, slats);
let wallSlats26 = new THREE.Mesh(box, slats);
let wallSlats27 = new THREE.Mesh(box, slats);
let wallSlats28 = new THREE.Mesh(box, slats);

wallSlats1.scale.set(0.4, 16.880, 0.02);
wallSlats2.scale.set(0.4, 16.880, 0.02);
wallSlats3.scale.set(0.4, 16.880, 0.02);
wallSlats4.scale.set(0.4, 16.880, 0.02);
wallSlats5.scale.set(0.4, 16.880, 0.02);
wallSlats6.scale.set(0.4, 16.880, 0.02);
wallSlats7.scale.set(0.4, 16.880, 0.02);
wallSlats8.scale.set(0.4, 16.880, 0.02);
wallSlats9.scale.set(0.4, 16.880, 0.02);
wallSlats10.scale.set(0.4, 16.880, 0.02);
wallSlats11.scale.set(0.4, 16.880, 0.02);
wallSlats12.scale.set(0.4, 16.880, 0.02);
wallSlats13.scale.set(0.4, 16.880, 0.02);
wallSlats14.scale.set(0.4, 16.880, 0.02);
wallSlats15.scale.set(0.4, 16.880, 0.02);
wallSlats16.scale.set(0.4, 16.880, 0.02);
wallSlats17.scale.set(0.4, 16.880, 0.02);
wallSlats18.scale.set(0.4, 16.880, 0.02);
wallSlats19.scale.set(0.4, 16.880, 0.02);
wallSlats20.scale.set(0.4, 16.880, 0.02);
wallSlats21.scale.set(0.4, 16.880, 0.02);
wallSlats22.scale.set(0.4, 16.880, 0.02);
wallSlats23.scale.set(0.4, 16.880, 0.02);
wallSlats24.scale.set(0.4, 16.880, 0.02);
wallSlats25.scale.set(0.4, 16.880, 0.02);
wallSlats26.scale.set(0.4, 16.880, 0.02);
wallSlats27.scale.set(0.4, 16.880, 0.02);
wallSlats28.scale.set(0.4, 16.880, 0.02);

wallSlats21.rotation.set(0, 90 * Math.PI / 180, 0);
wallSlats22.rotation.set(0, 90 * Math.PI / 180, 0);
wallSlats23.rotation.set(0, 90 * Math.PI / 180, 0);
wallSlats24.rotation.set(0, 90 * Math.PI / 180, 0);
wallSlats25.rotation.set(0, 90 * Math.PI / 180, 0);
wallSlats26.rotation.set(0, 90 * Math.PI / 180, 0);
wallSlats27.rotation.set(0, 90 * Math.PI / 180, 0);
wallSlats28.rotation.set(0, 90 * Math.PI / 180, 0);

wallSlats1.position.set(17, 9, -2.091);
wallSlats2.position.set(17, 9, -1.686);
wallSlats3.position.set(17, 9, -1.279);
wallSlats4.position.set(17, 9, -0.865);
wallSlats5.position.set(17, 9, -0.451);
wallSlats6.position.set(17, 9, 0.030);
wallSlats7.position.set(17, 9, 0.383);
wallSlats8.position.set(17, 9, 0.795);
wallSlats9.position.set(17, 9, 1.218);
wallSlats10.position.set(17, 9, 1.639);
wallSlats11.position.set(17, 9, 2.049);
wallSlats12.position.set(17, 9, 2.469);
wallSlats13.position.set(17, 9, 2.881);
wallSlats14.position.set(17, 9, 3.292);
wallSlats15.position.set(17, 9, 3.707);
wallSlats16.position.set(17, 9, 4.115);
wallSlats17.position.set(17, 9, 4.525);
wallSlats18.position.set(17, 9, 4.939);
wallSlats19.position.set(17, 9, 5.355);
wallSlats20.position.set(17.203, 9, 5.557);
wallSlats21.position.set(17.619, 9, 5.557);
wallSlats22.position.set(18.042, 9, 5.557);
wallSlats23.position.set(18.45, 9, 5.557);
wallSlats24.position.set(18.861, 9, 5.557);
wallSlats25.position.set(19.287, 9, 5.557);
wallSlats26.position.set(19.704, 9, 5.557);
wallSlats27.position.set(20.131, 9, 5.557);
wallSlats28.position.set(20.550, 9, 5.557);

let woodWalls = new THREE.Group()
woodWalls.add(woodWall1, woodWall2, woodWall3, woodWall4, woodWall5, woodWall6, woodWall7, woodWall8, woodWall9, woodWall10, woodWall11, woodWall12, woodWall13, woodWall14, woodWall15, woodWall16, woodWall17, woodWall18, woodWall19, woodWall20, woodWall21, woodWall22, woodWall23, woodWall24, woodWall25, woodWall26, woodWall27, woodWall28, woodWall29, wallSlats1, wallSlats2, wallSlats3, wallSlats4, wallSlats5, wallSlats6, wallSlats7, wallSlats8, wallSlats9, wallSlats10, wallSlats11, wallSlats12, wallSlats13, wallSlats14, wallSlats15, wallSlats16, wallSlats17, wallSlats18, wallSlats19, wallSlats20, wallSlats21, wallSlats22, wallSlats23, wallSlats24, wallSlats25, wallSlats26, wallSlats27, wallSlats28);

scene.add(woodWalls)

let sideSlat = new THREE.MeshPhongMaterial({color: 0xb5aca1});
let sideWood1 = new THREE.Mesh(box,slats);
let sideWood2 = new THREE.Mesh(box,slats);
let sideWood3 = new THREE.Mesh(box,slats);
let sideWood4 = new THREE.Mesh(box,slats);
let sideWood5 = new THREE.Mesh(box,slats);
let sideSlat1 = new THREE.Mesh(box,sideSlat);
let sideSlat2 = new THREE.Mesh(box,sideSlat);
let sideSlat3 = new THREE.Mesh(box,sideSlat);
let sideSlat4 = new THREE.Mesh(box,sideSlat);
let sideSlat5 = new THREE.Mesh(box,sideSlat);
let sideSlat6 = new THREE.Mesh(box,sideSlat);

sideWood1.scale.set(0.01,3.5,10);
sideWood2.scale.set(0.01,3.5,10);
sideWood3.scale.set(0.01,3.5,10);
sideWood4.scale.set(0.01,3.5,10);
sideWood5.scale.set(0.01,3.5,10);
sideWood1.position.set(-6.385,2.250,-0.220);
sideWood2.position.set(-6.253,2.250,-0.220);
sideWood3.position.set(-6.125,2.250,-0.220);
sideWood4.position.set(-5.992,2.250,-0.220);
sideWood5.position.set(-5.843,2.250,-0.220);

sideSlat1.scale.set(0.125,3.5,10);
sideSlat2.scale.set(0.125,3.5,10);
sideSlat3.scale.set(0.125,3.5,10);
sideSlat4.scale.set(0.125,3.5,10);
sideSlat5.scale.set(0.125,3.5,10);
sideSlat6.scale.set(0.125,3.5,10);
sideSlat1.position.set(-6.450,2.250,-0.200);
sideSlat2.position.set(-6.317,2.250,-0.200);
sideSlat3.position.set(-6.188,2.250,-0.200);
sideSlat4.position.set(-5.920,2.250,-0.200);
sideSlat5.position.set(-6.058,2.250,-0.200);
sideSlat6.position.set(-5.777,2.250,-0.200);
sideSlat1.receiveShadow = true;
sideSlat1.castShadow = true;
sideSlat2.receiveShadow = true;
sideSlat2.castShadow = true;
sideSlat3.receiveShadow = true;
sideSlat3.castShadow = true;
sideSlat4.receiveShadow = true;
sideSlat4.castShadow = true;
sideSlat5.receiveShadow = true;
sideSlat5.castShadow = true;
sideSlat6.receiveShadow = true;
sideSlat6.castShadow = true;
let sideSlats = new THREE.Group()
sideSlats.add(sideSlat1,sideSlat2,sideSlat3,sideSlat4,sideSlat5,sideSlat6,sideWood1,sideWood2,sideWood3,sideWood4,sideWood5)
sideSlats.position.set(0.506,0.715,0)
scene.add(sideSlats);

//room stuff

let bulb = new THREE.MeshPhysicalMaterial({color: 0xffffff})
let wire = new THREE.MeshPhysicalMaterial({color: 0x000000})
let bulb1 = new THREE.Mesh(sphere,bulb);
let bulb2 = new THREE.Mesh(sphere,bulb);
let wire1 = new THREE.Mesh(cylinder, wire);
bulb1.position.set(3,17.906,0);
bulb1.scale.set(0.5,0.68,0.5);
bulb2.position.set(3,18.021,0);
bulb2.scale.set(0.5,0.5,0.5);
wire1.position.set(3,19.692,0);
wire1.scale.set(0.05,3,0.05);
bulb1.castShadow=true;
bulb1.receiveShadow = true;
bulb2.castShadow=true;
bulb2.receiveShadow = true;
wire1.castShadow=true;
wire1.receiveShadow = true;
scene.add(bulb1,bulb2,wire1);

let plate = new THREE.MeshPhysicalMaterial({color: 0x525150});
let cupBlack = new THREE.MeshPhysicalMaterial({color: 0x999087});
let cupWhite = new THREE.MeshPhysicalMaterial({color: 0xbdae9f});
let cup1 = new THREE.Mesh(cylinder,cupWhite);
let cup2 = new THREE.Mesh(cylinder,cupBlack);
let plate1 = new THREE.Mesh(box,plate);
let plate2 = new THREE.Mesh(box,plate);
let plate3 = new THREE.Mesh(box,plate)
let plate4 = new THREE.Mesh(box,plate)
let plate5 = new THREE.Mesh(box,plate)
cup1.position.set(12.231,3.072,-0.275);
cup1.scale.set (0.1,0.25,0.1);
cup2.position.set(12.540,3.072,-0.545);
cup2.scale.set(0.1,0.25,0.1);
plate1.position.set(12.526,2.927,-0.279);
plate1.rotation.set(0,-22.71*Math.PI/180,0);
plate1.scale.set(1.2,0.1,1.2);
plate2.position.set(11.990,2.975,-0.503);
plate2.rotation.set(0,-22.71*Math.PI/180,0);
plate2.scale.set(0.05,0.2,1.2);
plate3.position.set(13.055,2.975,-0.058);
plate3.rotation.set(0,-22.71*Math.PI/180,0);
plate3.scale.set(0.05,0.2,1.2);
plate4.position.set(12.295,2.975,0.247);
plate4.rotation.set(0,-22.71*Math.PI/180,0);
plate4.scale.set(1.2,0.2,0.05);
plate5.position.set(12.728,2.972,-0.816);
plate5.rotation.set(0,-22.71*Math.PI/180,0);
plate5.scale.set(1.2,0.2,0.05);
cup1.castShadow = true;
cup1.receiveShadow=true;
cup2.castShadow = true;
cup2.receiveShadow=true;
plate1.castShadow=true;
plate1.receiveShadow=true;
plate2.castShadow=true;
plate2.receiveShadow=true;
plate3.castShadow=true;
plate3.receiveShadow=true;
plate4.castShadow=true;
plate4.receiveShadow=true;
plate5.castShadow=true;
plate5.receiveShadow=true;

scene.add(plate1,plate2,plate3,plate4,plate5,cup1,cup2);

let dish = new THREE.MeshPhysicalMaterial({color:0xeb9b4b});
let dish1 = new THREE.Mesh(cylinder,dish);
dish1.position.set(-6.105,13.7,5.7);
dish1.rotation.set (0,0,90*Math.PI/180);
dish1.scale.set (0.5,0.25,0.5);
let button = new THREE.Mesh(sphere,sideSlat);
button.position.set(-5.923,13.7,5.7);
button.scale.set(0.15,0.15,0.15);
scene.add(dish1,button);

//window plant
let planter1 = new THREE.MeshPhysicalMaterial({color:0xb8a491});
let planter2 = new THREE.MeshPhysicalMaterial({color: 0xffbf82});
let stem = new THREE.MeshPhysicalMaterial({color:0xff9938})
let bot = new THREE.Mesh(box, planter1);
let top = new THREE.Mesh(box,planter2);
let stem1 = new THREE.Mesh(cylinder,stem);
let stem2 = new THREE.Mesh(cylinder,stem);
let stem3 = new THREE.Mesh(cylinder,stem);
let stem4 = new THREE.Mesh(cylinder,stem);
let stem5 = new THREE.Mesh(cylinder,stem);
let stem6 = new THREE.Mesh(cylinder,stem);

bot.position.set(-6.833,5.313,2.525);
top.position.set(-6.833,5.995,2.525);
top.scale.set(1,0.375,1);
bot.receiveShadow = true;
bot.castShadow = true;
top.receiveShadow = true;
top.castShadow = true;
stem1.position.set(-6.833,6.902,2.525);
stem1.scale.set(0.02,1.573,0.025);
stem2.position.set(-6.647,7.573,2.525);
stem2.scale.set(0.02,0.703,0.025);
stem2.rotation.set(0,0,-29.41*Math.PI/180);
stem3.rotation.set(0,-60.38*Math.PI/180,-29.41*Math.PI/180);
stem3.position.set(-6.746,7.373,2.669);
stem3.scale.set(0.020,0.703,0.025);
stem4.position.set(-7.079,6.995,2.471);
stem4.rotation.set( -175.42*Math.PI/180, 15.2*Math.PI/180,133.6*Math.PI/180);
stem4.scale.set(0.02,0.703,0.025);
stem5.position.set(-6.891,6.995,2.383);
stem5.rotation.set(135.37*Math.PI/180,23.732*Math.PI/180,159.95*Math.PI/180);
stem5.scale.set(0.02,0.393,0.025);
stem6.position.set(-6.673,6.697,2.552);
stem6.scale.set(0.02,0.393,0.025);
stem6.rotation.set(42.83*Math.PI/180,18.90*Math.PI/180,-58.43*Math.PI/180);
stem1.receiveShadow = true;
stem1.castShadow = true;
stem2.receiveShadow = true;
stem2.castShadow = true;
stem3.receiveShadow = true;
stem3.castShadow = true;
stem4.receiveShadow = true;
stem4.castShadow = true;
stem5.receiveShadow = true;
stem5.castShadow = true;
stem6.receiveShadow = true;
stem6.castShadow = true;

scene.add(stem1,stem2,stem3,stem4,stem5,stem6,top,bot);

let leaf = new THREE.MeshPhysicalMaterial({color:0x64bf5c});
let l1 = new THREE.Mesh(sphere,leaf);
let l2 = new THREE.Mesh(sphere,leaf);
let l3 = new THREE.Mesh(sphere,leaf);
let l4 = new THREE.Mesh(sphere,leaf);
let l5 = new THREE.Mesh(sphere,leaf);
let l6 = new THREE.Mesh(sphere,leaf);
let l7 = new THREE.Mesh(sphere,leaf);
let l8 = new THREE.Mesh(sphere,leaf);
let l9 = new THREE.Mesh(sphere,leaf);
let l10 = new THREE.Mesh(sphere,leaf);
let l11 = new THREE.Mesh(sphere,leaf);
let l12 = new THREE.Mesh(sphere,leaf);
let l13 = new THREE.Mesh(sphere,leaf);
let l14 = new THREE.Mesh(sphere,leaf);
let l15 = new THREE.Mesh(sphere,leaf);
let l16 = new THREE.Mesh(sphere,leaf);
let l17 = new THREE.Mesh(sphere,leaf);
let l18 = new THREE.Mesh(sphere,leaf);
let l19 = new THREE.Mesh(sphere,leaf);

l1.position.set(-6.457,6.806,2.585);
l1.scale.set(0.122,0.037,0.046);
l2.position.set(-6.524,6.748,2.648);
l2.scale.set(0.122,0.037,0.046);
l2.rotation.set(0,-54.91*Math.PI/180,0);
l3.position.set(-6.423,7.872,2.596);
l3.rotation.set(0.-54.91*Math.PI/180,0);
l3.scale.set(0.122,0.037,0.046);
l4.position.set(-6.536,7.674,2.570);
l4.rotation.set(34.46*Math.PI/180,-54.91*Math.PI/180,0);
l4.scale.set(0.055,0.037,0.018);
l5.position.set(-6.885,7.679,2.452);
l5.rotation.set(0,-54.91*Math.PI/180,0);
l5.scale.set(0.122,0.037,0.046);
l6.position.set(-6.609,7.723,2.761);
l6.rotation.set(-27*Math.PI/180,35.36*Math.PI/180,41.35*Math.PI/180);
l6.scale.set(0.122,0.037,0.046);
l7.position.set(-7.367,7.202,2.470);
l7.rotation.set(-27*Math.PI/180,35.36*Math.PI/180,41.35*Math.PI/180);
l7.scale.set(0.122,0.037,0.046);
l8.position.set(-7.118,7.151,2.517);
l8.rotation.set(-50*Math.PI/180,-61.11*Math.PI/180,-21.32*Math.PI/180);
l8.scale.set(0.122,0.037,0.046);
l9.rotation.set(-50.02*Math.PI/180,-61.11*Math.PI/180,-21.32*Math.PI/180);
l9.scale.set(0.122,0.037,0.046);
l9.position.set(-6.977,7.068,2.179);
l10.rotation.set(-146.64*Math.PI/180,-47.69*Math.PI/180,-129.12*Math.PI/180);
l10.position.set(-6.793,7.228,2.434);
l10.scale.set(0.122,0.037,0.046);
l11.position.set(-6.801,7.350,2.761);
l11.rotation.set(-27*Math.PI/180,35.36*Math.PI/180,41.35*Math.PI/180);
l11.scale.set(0.122,0.037,0.046);
l12.rotation.set(-27*Math.PI/180,35.36*Math.PI/180,41.35*Math.PI/180);
l12.position.set(-6.897,6.705,2.614);
l12.scale.set(0.122,0.037,0.046);
l13.position.set(-6.507,7.546,2.790);
l13.rotation.set(2.88*Math.PI/180,4.88*Math.PI/180,-30.57*Math.PI/180);
l13.scale.set(0.203,0.022,0.031);
l14.rotation.set(3.41*Math.PI/180,-32.84*Math.PI/180,-28.47*Math.PI/180);
l14.position.set(-6.675,7.002,2.630);
l14.scale.set(0.203,0.022,0.031);
l15.position.set(-7.251,7.002,2.620);
l15.rotation.set(172.74*Math.PI/180,-66.69*Math.PI/180,143.01*Math.PI/180);
l15.scale.set(0.203,0.022,0.031);
l16.position.set(-6.903,7.515,2.620);
l16.rotation.set(-167.18*Math.PI/180,-57.71*Math.PI/180,148.55*Math.PI/180);
l16.scale.set(0.204,0.022,0.031);
l17.position.set(-6.660,7.453,2.326);
l17.rotation.set(9.57*Math.PI/180,80.13*Math.PI/180,-26.51*Math.PI/180);
l17.scale.set(0.203,0.022,0.031);
l18.position.set(-6.789,6.484,2.332);
l18.rotation.set(9.57*Math.PI/180,80.13*Math.PI/180,-26.51*Math.PI/180);
l18.scale.set(0.203,0.022,0.031);
l19.position.set(-6.423,7.872,2.596);
l19.rotation.set(0,-54.91*Math.PI/180,0);
l19.scale.set(0.122,0.037,0.046);
l19.receiveShadow = true;
l19.castShadow = true;
l1.receiveShadow = true;
l1.castShadow = true;
l2.receiveShadow = true;
l2.castShadow = true;
l3.receiveShadow = true;
l3.castShadow = true;
l4.receiveShadow = true;
l4.castShadow = true;
l5.receiveShadow = true;
l5.castShadow = true;
l6.receiveShadow = true;
l6.castShadow = true;
l7.receiveShadow = true;
l7.castShadow = true;
l8.receiveShadow = true;
l8.castShadow = true;
l9.receiveShadow = true;
l9.castShadow = true;
l10.receiveShadow = true;
l10.castShadow = true;
l11.receiveShadow = true;
l11.castShadow = true;
l12.receiveShadow = true;
l12.castShadow = true;
l13.receiveShadow = true;
l13.castShadow = true;
l14.receiveShadow = true;
l14.castShadow = true;
l15.receiveShadow = true;
l15.castShadow = true;
l16.receiveShadow = true;
l16.castShadow = true;
l17.receiveShadow = true;
l17.castShadow = true;
l18.receiveShadow = true;
l18.castShadow = true;

scene.add(l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17,l18,l19)

let small1 = new THREE.MeshPhysicalMaterial({color: 0xcfd1cf});
let small2 = new THREE.MeshPhysicalMaterial({color: 0xb5985e});

let sp1 = new THREE.Mesh(cylinder,small1);
let sp2 = new THREE.Mesh(cylinder,small2);
let sp3 = new THREE.Mesh(cylinder,small1);

sp1.position.set(15.785,2.887,-0.909);
sp1.scale.set(0.3,0.05,0.3);
sp2.position.set(15.785,2.965,-0.909);
sp2.scale.set(0.2,0.111,0.2);
sp3.position.set(15.785,3.046,-0.910);
sp3.scale.set(0.2,0.046,0.2);

let smallStem1 = new THREE.Mesh(cylinder,stem);
let smallStem2 = new THREE.Mesh(cylinder,stem);
let smallStem3 = new THREE.Mesh(cylinder,stem);
let smallStem4 = new THREE.Mesh(cylinder,stem);
let smallStem5 = new THREE.Mesh(cylinder,stem);
let smallStem6 = new THREE.Mesh(cylinder,stem);
let smallStem7 = new THREE.Mesh(cylinder,stem);
let smallStem8 = new THREE.Mesh(cylinder,stem);
let smallStem9 = new THREE.Mesh(cylinder,stem);
let smallStem10 = new THREE.Mesh(cylinder,stem);

smallStem1.position.set(15.785,3.084,-0.910);
smallStem1.scale.set(0.008,0.245,0.009);
smallStem2.position.set(15.756,3.242,-0.916);
smallStem2.rotation.set(169.56*Math.PI/180,14.32*Math.PI/180,137.16*Math.PI/180);
smallStem2.scale.set(0.008,0.033,0.009);
smallStem3.position.set(15.8,3.266,-0.915);
smallStem3.rotation.set(169.58*Math.PI/180,14.32*Math.PI/180,137.16*Math.PI/180);
smallStem3.scale.set(0.008,0.033,0.009);
smallStem4.position.set(15.730,3.307,-0.914);
smallStem4.rotation.set(169.58*Math.PI/180,14.32*Math.PI/180,137.16*Math.PI/180);
smallStem4.scale.set(0.008,0.033,0.009);
smallStem5.position.set(15.831,3.299,-0.922);
smallStem5.rotation.set(136.78*Math.PI/180,75.17*Math.PI/180,176.81*Math.PI/180);
smallStem5.scale.set(0.008,0.033,0.009);
smallStem6.position.set(15.754,3.281,-0.893);
smallStem6.rotation.set(42.25*Math.PI/180,-75.71*Math.PI/180,-1.10*Math.PI/180);
smallStem6.scale.set(0.008,0.033,0.009);
smallStem7.position.set(15.751,3.281,-0.921);
smallStem7.rotation.set(145.03*Math.PI/180,72.19*Math.PI/180,168.22*Math.PI/180);
smallStem7.scale.set(0.008,0.033,0.009);
smallStem8.position.set(15.825,3.281,-0.897);
smallStem8.rotation.set(19.25*Math.PI/180,-57.88*Math.PI/180,-28.97*Math.PI/180);
smallStem8.scale.set(0.008,0.033,0.009);
smallStem9.position.set(15.761,3.252,-0.910);
smallStem9.rotation.set(0,0,25.86*Math.PI/180);
smallStem9.scale.set(0.008,0.105,0.009);
smallStem10.position.set(15.810,3.252,-0.910);
smallStem10.rotation.set (0,0,-28.97*Math.PI/180);
smallStem10.scale.set(0.008,0.105,0.009);

smallStem1.receiveShadow = true;
smallStem1.castShadow = true;
smallStem2.receiveShadow = true;
smallStem2.castShadow = true;
smallStem3.receiveShadow = true;
smallStem3.castShadow = true;
smallStem4.receiveShadow = true;
smallStem4.castShadow = true;
smallStem5.receiveShadow = true;
smallStem5.castShadow = true;
smallStem6.receiveShadow = true;
smallStem6.castShadow = true;
smallStem7.receiveShadow = true;
smallStem7.castShadow = true;
smallStem8.receiveShadow = true;
smallStem8.castShadow = true;
smallStem9.receiveShadow = true;
smallStem9.castShadow = true;
smallStem10.receiveShadow = true;
smallStem10.castShadow = true;

scene.add(sp1,sp2,sp3,smallStem1,smallStem2,smallStem3,smallStem4,smallStem5,smallStem6,smallStem7,smallStem8,smallStem9,smallStem10);

//stairs

let stairs = new THREE.MeshPhysicalMaterial({ color: 0xffe6b3 });
let stBase = new THREE.Mesh(box, stairs);
let st1 = new THREE.Mesh(box, stairs);
let st2 = new THREE.Mesh(box, stairs);
let st3 = new THREE.Mesh(box, stairs);
let st4 = new THREE.Mesh(box, stairs);
let st5 = new THREE.Mesh(box, stairs);
let st6 = new THREE.Mesh(box, stairs);
let st7 = new THREE.Mesh(box, stairs);
let st8 = new THREE.Mesh(box, stairs);
let st9 = new THREE.Mesh(box, stairs);
let st10 = new THREE.Mesh(box, stairs);
let st11 = new THREE.Mesh(box, stairs);
let st12 = new THREE.Mesh(box,stairs);
st12.receiveShadow = true;
st12.castShadow = true;
stBase.receiveShadow = true;
st1.receiveShadow = true;
st1.castShadow = true;
st2.receiveShadow = true;
st2.castShadow = true;
st3.receiveShadow = true;
st3.castShadow = true;
st4.receiveShadow = true;
st4.castShadow = true;
st5.receiveShadow = true;
st5.castShadow = true;
st6.receiveShadow = true;
st6.castShadow = true;
st7.receiveShadow = true;
st7.castShadow = true;
st8.receiveShadow = true;
st8.castShadow = true;
st9.receiveShadow = true;
st9.castShadow = true;
st10.receiveShadow = true;
st10.castShadow = true;
st11.receiveShadow = true;
st11.castShadow = true;
st12.scale.set(12.415,9,4.295);
st12.position.set(19.111,7.050,-0.615)
st12.rotation.set(0,90*Math.PI/180,0)
stBase.scale.set(18.3, 2, 4);
st1.scale.set(4, 1, 6);
st2.scale.set(4, 2, 5);
st3.scale.set(4, 1, 4);
st4.scale.set(4, 2, 2);
st5.scale.set(4, 3, 4);
st6.scale.set(4, 4, 2);
st7.scale.set(4, 5, 4);
st8.scale.set(4, 6, 2);
st9.scale.set(4, 7, 4);
st10.scale.set(4, 8, 2);
st11.scale.set(4, 9, 2);
stBase.position.set(6.625, 1.5, -4.5)
st1.position.set(-4.5, 1, -3);
st2.position.set(-4.5, 1.5, -4);
st3.position.set(-0.5, 3.050, -4.5);
st4.position.set(0.5, 3.550, -4.5);
st5.position.set(3.550, 4.050, -4.5);
st6.position.set(4.550, 4.550, -4.5);
st7.position.set(7.6, 5.050, -4.5);
st8.position.set(8.65, 5.55, -4.5);
st9.position.set(11.7, 6.050, -4.5);
st10.position.set(12.75, 6.550, -4.5);
st11.position.set(14.8, 7.050, -4.5);
st4.rotation.set(0, 90 * Math.PI / 180, 0);
st6.rotation.set(0, 90 * Math.PI / 180, 0);
st8.rotation.set(0, 90 * Math.PI / 180, 0);
st10.rotation.set(0, 90 * Math.PI / 180, 0);
st11.rotation.set(0, 90 * Math.PI / 180, 0);
let sl1 = new THREE.Mesh(box, slats);
let sl2 = new THREE.Mesh(box, slats);
let sl3 = new THREE.Mesh(box, slats);
let sl4 = new THREE.Mesh(box, slats);
let sl5 = new THREE.Mesh(box, slats);
sl1.scale.set(18.3, 0.05, 4);
sl2.scale.set(4, 2.02, 0.05);
sl3.scale.set(4, 4, 0.050);
sl4.scale.set(4, 6, 0.050);
sl5.scale.set(4, 8, 0.050);
sl1.position.set(6.634, 2.5, -4.5);
sl2.position.set(1.525, 3.550, -4.5);
sl3.position.set(5.575, 4.550, -4.5);
sl4.position.set(9.675, 5.550, -4.5);
sl5.position.set(13.775, 6.550, -4.50);
sl2.rotation.set(0, 90 * Math.PI / 180, 0);
sl3.rotation.set(0, 90 * Math.PI / 180, 0);
sl4.rotation.set(0, 90 * Math.PI / 180, 0);
sl5.rotation.set(0, 90 * Math.PI / 180, 0);


let stairsAll = new THREE.Group();
stairsAll.add(stBase, st1, st2, st3, st4, st5, st6, st7, st8, st9, st10, st11, sl1, sl2, sl3, sl4, sl5);
stairsAll.position.set(1.55, 0, 0);
scene.add(stairsAll,st12);

let hh1 = new THREE.Mesh (box,stairs);
let hh2 = new THREE.Mesh(box,stairs);
let hh3= new THREE.Mesh(box,stairs);
hh1.receiveShadow = true;
hh1.castShadow = true;
hh2.receiveShadow = true;
hh2.castShadow = true;
hh3.receiveShadow = true;
hh3.castShadow = true; 
hh1.scale.set (14.717,0.194,0.091);
hh1.position.set (5.849,9.892,-6.377);
hh1.rotation.set (0,0,25.82*Math.PI/180);
hh2.scale.set(0.087,0.194,0.187);
hh2.position.set(12.171,12.951,-6.498);
hh2.rotation.set(0,0,25.82*Math.PI/182);
hh3.position.set(-0.427,6.856,-6.498);
hh3.scale.set(0.087,0.194,0.187);
hh3.rotation.set(0,0,25.82*Math.PI/180)

scene.add(hh1,hh2,hh3)

//table
let tableTop = new THREE.Mesh(box,glass);
tableTop.scale.set(8,0.1,3.616);
tableTop.position.set(12.563,2.820,-0.490);
scene.add(tableTop);


let tWood = new THREE.MeshPhysicalMaterial({color: 0xfcc37c});
let t1 = new THREE.Mesh(box,tWood);
let t2 = new THREE.Mesh(box,tWood);
let t3 = new THREE.Mesh(box,tWood);
let t4 = new THREE.Mesh(box,tWood);
let t5 = new THREE.Mesh(box,tWood);
let t6 = new THREE.Mesh(box,tWood);
let t7 = new THREE.Mesh(box,tWood);
let t8 = new THREE.Mesh(box,tWood);
let t9 = new THREE.Mesh(box,tWood);

t1.scale.set(0.099,2.365,0.091);
t2.scale.set(0.099,2.365,0.091);
t3.scale.set(0.202,0.128,0.091);
t4.scale.set(7.795,0.040,0.091);
t5.scale.set(7.7680,0.046,0.091);
t6.scale.set(0.143,3.035,0.054);
t7.scale.set(8.111,0.040,0.091);
t8.scale.set(8.111,0.040,0.091);
t9.scale.set(0.17,3.111,0.054);

t1.position.set(16.486,1.595,-0.503);
t2.position.set(8.7,1.595,-0.503);
t3.position.set(8.754,2.707,-0.503);
t4.position.set(12.627,0.516,-0.503);
t5.position.set(12.670,2.622,-0.503);
t6.position.set(16.469,2.7356,-0.503);
t6.rotation.set(90 *Math.PI/180 ,12.5 * Math.PI/180,0);
t7.position.set(12.554,1.869,1.006);
t7.rotation.set(0,0,12.50 * Math.PI/180);
t8.position.set(12.554,1.869,-2.004)
t8.rotation.set(0,0,12.50 * Math.PI/180);
t9.position.set(8.601,0.991,-0.503);
t9.rotation.set(90 * Math.PI/180, 12.5 * Math.PI/180, 0);

t1.castShadow=true;
t1.receiveShadow = true;
t2.castShadow=true;
t2.receiveShadow = true;
t3.castShadow=true;
t3.receiveShadow = true;
t4.castShadow=true;
t4.receiveShadow = true;
t5.castShadow=true;
t5.receiveShadow = true;
t6.castShadow=true;
t6.receiveShadow = true;
t7.castShadow=true;
t7.receiveShadow = true;
t8.castShadow=true;
t8.receiveShadow = true;
t9.castShadow=true;
t9.receiveShadow = true;

let tS = new THREE.Group();
tS.add(t6,t7,t8,t9);
tS.position.set(0.2,-0.06,0)
tS.rotation.set (0,0,1.89 * Math.PI/180)

scene.add (t1,t2,t3,t4,t5,t6,t7,t8,t9)
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}


animate();