//Hamburger menu 

function toggleMenu() {

    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}




//O'Clock

document.addEventListener("DOMContentLoaded", function () {
    // Initialisez AOS
    AOS.init({
      once: true, // Animation ne se reproduit qu'une fois
    });
  });
  

  function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    var location ="PARIS"
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = location + " → " + h + ":" + m + ":" + s + " " + session;
    
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();





let imagee = document.querySelectorAll('  .image');
function showImage(e) {
  for(var i = 0; i < imagee.length; i++){
    x = e.pageX;
    y = e.pageY;
imagee[i].style.transform = `translate(${x}px, ${y}px)`;

  }
}
document.addEventListener('mousemove', showImage);





// Tweenmax effect for body


TweenMax.staggerFrom(
  "body ",
  1,
  {
    opacity: 2,
    duration: 10,
    ease: Expo.easeInOut,
  },
  0.06
);



     

      gsap.to(" #about-me h2", {
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom center",
          scrub: true,
          scrub: 1,

        },
        rotation: 1060,



      });
      

      gsap.to(".logo", {
        y: "10%",
        scale: 0.8,
        ease: "none",
        scrollTrigger: {
          trigger: "#profile",
          start: "top top",
          end: "100vh top",
          scrub: 1,
        },
      });




      gsap.to("#three-container", {
        y: "10%",
        opacity:1,

        ease: "none",
        scrollTrigger: {
          trigger: "#profile",
          start: "top -140%",
          end: "100vh top",
          scrub: 5,
        },
      });


      gsap.to("#image-source", {
        x: "-85%",
        ease: "none",
        scrollTrigger: {
          trigger: ".presentation",
          start: "top %",
          end: "100vh top",
          scrub: 1,
          opacity: 0,
        },
      });


      gsap.to(".presentation", {
        x: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: "#profile",
          start: "top top",
          end: "100vh top",
          scrub: 1,
        },
      });




      gsap.to(".text-wrapperr", {
        y: "-50%",
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "100vh top",
          scrub: 1,
        },
      });
    
    
    
      gsap.to(" #profile", {
        scrollTrigger: "#profile",
        y: -10,
        duration: 0.6,
      });

     
      gsap.to(" .slides", {
        scrollTrigger: ".slides",
        y: 60,
        duration: 2,
      });



      gsap.to(" #contact", {
        scrollTrigger: "#contact",
        y: -80,
        duration: 1,
      });






      gsap.to(" #about-me", {
        scrollTrigger: "#about-me",
        duration: 1,
        opacity: 1,
        y: -300,
            });

   
      gsap.to(" #about-me h1", {
        scrollTrigger: "#about-me h1",
        y: 5,
        duration: 2,
        opacity: 1,
      });







      gsap.to(" #contact", {
        scrollTrigger: "#contact",
        duration: 2,
        opacity: 1,
      });


      gsap.from(" .contact-info-upper-container", {
        x: -360,
      });

      gsap.to(" .contact-info-upper-container", {
        scrollTrigger: ".contact-info-upper-container",
        duration: 1,
        x: 0,
        ease:"sine",

      });

      gsap.to(" .details-container2 ", {
        scrollTrigger: {
          trigger: "#profile ",
          start: "bottom top " ,
          end: "bottom bottom",
          scrub: true,
opacity:1,
        },
      scale: 1.1,
      delay:3,
      opacity:1,
        
      });


      gsap.to("  .image-container img ", {
        scrollTrigger: {
          trigger: ".about-me-details ",
          start: "bottom top " ,
          end: "bottom bottom",
          scrub: true,
scale: 0,
        },
      scale: 1.2,
      opacity:1,
        
      });


      gsap.to(" #about-me h2 ", {
        scrollTrigger: "body ",
        rotation: 360,
      });
      
      gsap.to(" #about-me h1", {
        scrollTrigger: "#about-me h1",
        duration: 3,
        y: 40,
        opacity: 1,
      });


      const words = document.querySelectorAll(".about-me-details span");

      gsap.fromTo(
        words,
        {
          opacity: 0,
          y: 20, // Légèrement décalé vers le bas
          filter: "blur(40px)", // État initial : flou
        },
        {
          opacity: 1,
          y: 0, // Le mot remonte à sa position initiale
          filter: "blur(0px)", // Retire le flou
          scrollTrigger: {
            trigger: "#about-me .title1 ",
            start: "top 100%%", // Début de l'animation quand le h1 est au centre de la vue
            end: "bottom top",
            scrub: 3, // Augmentez la valeur pour un effet de défilement plus fluide
          },
          stagger: 0.4, // Augmentez le décalage entre chaque mot
          duration: 3, // Augmentez la durée pour ralentir l'animation
        }
      );
      
      const words2 = document.querySelectorAll("#about-me h1 span");

      gsap.fromTo(
        words2,
        {
          opacity: 0,
          y: 20, // Légèrement décalé vers le bas
          filter: "blur(10px)", // État initial : flou
        },
        {
          opacity: 1,
          y: 0, // Le mot remonte à sa position initiale
          filter: "blur(0px)", // Retire le flou
          scrollTrigger: {
            trigger: "#image-source", // Déclencheur sur le h1
            start: "bottom 10%", // Début de l'animation quand le h1 est au centre de la vue
            end: "bottom top", // Fin de l'animation quand le h1 sort de la vue
            scrub: 1, // Augmentez la valeur pour un effet de défilement plus fluide
          },
          stagger: 0.2, // Augmentez le décalage entre chaque mot
          duration: 3, // Augmentez la durée pour ralentir l'animation
        }
      );
      


      gsap.to(" .image-point", {
        scrollTrigger: ".image-point",
        duration: 2,
        opacity: 1,
      });


      gsap.to(" #hobies-phone", {
        scrollTrigger: "#hobies-phone",
        duration: 2,
        opacity: 1,

      });

      gsap.set("#experience .title1", {
        scale:0,
       

      });
      
      // Animation au défilement
      gsap.to("#experience .title1", {
        scrollTrigger: {
          trigger: ".image-point",
          start: "bottom center",
          end: "bottom  ",
          scrub: true,

        },
        scrub : 5,
        scale:1,
        

        duration: 1,
        ease: "power4.inOut"
      });




            
          
   





            // Script pour la barre de progression du scroll
            window.addEventListener('scroll', function() {
              const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
              const scrollPercentage = (scrollTop / scrollHeight) * 100;
    
              document.getElementById('progress-bar').style.width = scrollPercentage + '%';
          });
    
          // Script pour le scroll infini
          document.addEventListener('DOMContentLoaded', function() {
              const scrollContainer = document.body;
              const content = document.querySelector('.scroll-content');
    
              // Clone the content for infinite scrolling
              const clone = content.cloneNode(true);
              scrollContainer.appendChild(clone);
    
              window.addEventListener('scroll', () => {
                  if (window.scrollY >= content.scrollHeight) {
                      window.scrollTo({
                          top:100,
                        
                          behavior: 'none' // Scroll instantly to create a seamless loop
                      });
                  }
              });
          });





          const button = document.querySelector('#image-source');
      const image = document.querySelector('#image-source');
      
      button.addEventListener('mousemove', (e) => {
          const { left, top, width, height } = button.getBoundingClientRect();
          const x = (e.clientX - left) / width - 0.5;
          const y = (e.clientY - top) / height - 0.5;
      
          const moveX = x * 200; // Ajuste la valeur pour augmenter ou diminuer le mouvement horizontal
          const moveY = y * 200; // Ajuste la valeur pour augmenter ou diminuer le mouvement vertical
      
          image.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
      
      button.addEventListener('mouseleave', () => {
          image.style.transform = 'translate(0, 0)'; // Réinitialise la position de l'image lorsqu'on quitte la zone
      });




      const buttoon = document.querySelector('#profile .btn');
      const iimage = document.querySelector('#profile .btn');
      
      buttoon.addEventListener('mousemove', (e) => {
          const { left, top, width, height } = buttoon.getBoundingClientRect();
          const x = (e.clientX - left) / width - 0.5;
          const y = (e.clientY - top) / height - 0.5;
      
          const moveX = x * 400; // Ajuste la valeur pour augmenter ou diminuer le mouvement horizontal
          const moveY = y * 400; // Ajuste la valeur pour augmenter ou diminuer le mouvement vertical
      
          iimage.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
      
      buttoon.addEventListener('mouseleave', () => {
          iimage.style.transform = 'translate(0, 0)'; // Réinitialise la position de l'image lorsqu'on quitte la zone
      });








        document.addEventListener("DOMContentLoaded", function () {
          // Créer un effet sticky avec ScrollTrigger pour la section complète
          ScrollTrigger.create({
            trigger: "#project-phone",
            start: "top top", // Commence quand le haut de la section atteint le haut de la page
            end: "bottom top", // Termine quand le bas de la section atteint le haut de la page
            pinSpacing: false // Supprime l'espacement entre le contenu épinglé et le suivant
          });
    
          // Animation pour chaque image
          gsap.utils.toArray('.project-image').forEach(function (image) {
            gsap.fromTo(image, 
              {
                opacity: 0,
                y: 10,
                scale: 0,
                rotation:10,
              },
              {
                scale:1,
                opacity: 1,
                y: 0,
                x:0,                 
                rotation:0,
              

                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: image,
                  start: "top 80%", // Animation commence quand le haut de l'image atteint 80% de la fenêtre
                  end: "top 50%", // Animation se termine quand le haut de l'image atteint 50% de la fenêtre
                  scrub: true // Animation fluide liée au scroll
                }
              });
          });
        });





// Initialisation de la scène
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('three-container').appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Charger la texture de base
const loader = new THREE.TextureLoader();
const baseTexture = loader.load('https://images.unsplash.com/photo-1595418917831-ef942bd9f9ec?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
baseTexture.wrapS = THREE.RepeatWrapping;
baseTexture.wrapT = THREE.RepeatWrapping;
baseTexture.repeat.set(1, 6);

// Créer le matériau pour l'effet de verre net
const material = new THREE.MeshPhysicalMaterial({
  map: baseTexture,
  roughness: 0.5, // Réduit la rugosité pour un aspect plus lisse
  metalness: 0.6, // Un peu de métal pour améliorer le rendu
  clearcoat: 0.1, // Augmente la brillance
  clearcoatRoughness: 0.1,
  reflectivity: 10, // Maximise la réflexion
  transmission: 0.8, // Permet une plus grande transparence
  ior: 15,
  side: THREE.DoubleSide,
  transparent: true,
  opacity: 6,
});

// Fonction pour créer une géométrie avec des coins arrondis
function createRoundedBox(width, height, depth, radius, smoothness) {
  const shape = new THREE.Shape();
  shape.absarc(0, 0, radius, -Math.PI / 2, -Math.PI, true);
  shape.absarc(0, height - radius * 2, radius, Math.PI, Math.PI / 2, true);
  shape.absarc(width - radius * 2, height - radius * 2, radius, Math.PI / 2, 0, true);
  shape.absarc(width - radius * 2, 0, radius, 0, -Math.PI / 2, true);

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: depth - radius * 2,
    bevelEnabled: true,
    bevelSegments: smoothness * 2,
    steps: 1,
    bevelSize: radius,
    bevelThickness: radius,
    curveSegments: smoothness,
  });

  geometry.center();
  return geometry;
}

// Créer un cube arrondi
const geometry = createRoundedBox(2.3, 2.3, 2.3, 0.5, 50);
const cube = new THREE.Mesh(geometry, material);
cube.castShadow = true;
cube.receiveShadow = true;
scene.add(cube);

// Ajouter une lumière ambiante douce
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Ajouter plusieurs lumières directionnelles pour des reflets et ombres
const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight1.position.set(5, 5, 5);
directionalLight1.castShadow = true;
scene.add(directionalLight1);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.7);
directionalLight2.position.set(-5, -5, 5);
scene.add(directionalLight2);

const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight3.position.set(5, -5, -5);
scene.add(directionalLight3);

// Ajouter une lumière ponctuelle pour des reflets plus intenses
const pointLight = new THREE.PointLight(0xffffff, 1.2, 50);
pointLight.position.set(0, 5, 5);
scene.add(pointLight);

// Position de la caméra
camera.position.set(0, 0, 10);

// Variables pour une rotation lissée
let targetRotationY = 0;
let targetRotationX = 0;
let currentRotationY = 0;
let currentRotationX = 0;

// Fonction pour animer le rendu
function animate() {
  currentRotationY += (targetRotationY - currentRotationY) * 0.05;
  currentRotationX += (targetRotationX - currentRotationX) * 0.05;

  cube.rotation.y = currentRotationY;
  cube.rotation.x = currentRotationX;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

// Fonction de gestion du scroll pour définir les cibles de rotation
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const rotationSpeed = 0.004;
  targetRotationY = scrollPosition * rotationSpeed;
  targetRotationX = scrollPosition * rotationSpeed / 1;
});

// Ajuster la taille du canvas au redimensionnement de la fenêtre
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Ajuster la rotation en fonction de la position de la souris
window.addEventListener('mousemove', (event) => {
  const mouseX = (event.clientX / window.innerWidth) * 6 - 1;
  const mouseY = (event.clientY / window.innerHeight) * 6 - 1;
  targetRotationY = mouseX * Math.PI; // Utilise un angle pour la rotation
  targetRotationX = mouseY * Math.PI; // Utilise un angle pour la rotation
});









const tl = gsap.timeline({
  defaults: {
    ease: "none",
    // ease: 'power3.out',
    repeat: -10,
    yoyo: true,
    duration: 4
  }
});

tl.to("#feturbulence", {
  attr: { baseFrequency: "0.01" }
});














const ctx = canvas.getContext("2d");

const Vec = (x, y) => ({x, y});
const setStyle = (ctx,style) => {    Object.keys(style).forEach(key => ctx[key] = style[key]) }
const createImage = (w,h) => {var i=document.createElement("canvas");i.width=w;i.height=h;i.ctx=i.getContext("2d");return i}
const textList = ["mohsine"];
var textPos = 0;
var w = canvas.width;
var h = canvas.height;
var cw = w / 2;  // center 
var ch = h / 2;
var globalTime;
var started = false;
requestAnimationFrame(update);

const mouse  = {x : 0, y : 0, button : false}
function mouseEvents(e){
	mouse.x = e.pageX;
	mouse.y = e.pageY;
	mouse.button = e.type === "mousedown" ? true : e.type === "mouseup" ? false : mouse.button;
}
["down","up","move"].forEach(name => document.addEventListener("mouse"+name,mouseEvents));

function onResize(){ 
	cw = (w = canvas.width = innerWidth) / 1;
	ch = (h = canvas.height = innerHeight) / 1;
    if (!started) { startIt() }
}

function update(timer){
    globalTime = timer;
    ctx.setTransform(1,0,0,1,0,0); // reset transform
    ctx.globalAlpha = 1;           // reset alpha
	if (w !== innerWidth || h !== innerHeight){ onResize() }
	else { ctx.clearRect(0,0,w,h) }
    particles.update();
  particles.draw();	
    requestAnimationFrame(update);
}


function createParticles(text){
    createTextMap(
        text, 110 , "TheFont", 
        {   fillStyle : "#f4ed6c", strokeStyle : "#c73bc5", lineWidth : 7, lineJoin : "round", },
        { top : 0, left : 0, width : canvas.width, height : canvas.height }
    )
}
// This function starts the animations
function startIt(){
    started = true;
    const next = ()=>{
        var text = textList[(textPos++ ) % textList.length];
        createParticles(text);
        setTimeout(moveOut,text.length * 100 + 100000);
    }
    const moveOut = ()=>{
        particles.moveOut();
        setTimeout(next,2000);
    }
    setTimeout(next,0);
}



// the following function create the particles from text using a canvas
// the canvas used is displayed on the main canvas top left fro reference.
var tCan = createImage(100, 100); // canvas used to draw text
function createTextMap(text,size,font,style,fit){
    const hex = (v)=> (v < 16 ? "0" : "") + v.toString(16);
    tCan.ctx.font = size + "px " + font;
    var width = Math.ceil(tCan.ctx.measureText(text).width + size);
    tCan.width = width;
    tCan.height = Math.ceil(size * 1);
    var c = tCan.ctx;
    c.font = size + "px " + font;
    c.textAlign = "center";
    c.textBaseline = "middle";
    setStyle(c,style);
    if (style.strokeStyle) { c.strokeText(text, width / 2, tCan.height / 2) }
    if (style.fillStyle) { c.fillText(text, width / 2, tCan.height/ 2) }
    particles.empty();
    var data = c.getImageData(0,0,width,tCan.height).data;
    var x,y,ind,rgb,a;
    for(y = 0; y < tCan.height; y += 1){
        for(x = 0; x < width; x += 1){
            ind = (y * width + x) << 2;  // << 2 is equiv to * 4
            if(data[ind - 3 ] > 128){  // is alpha above half
                rgb = `#${hex(data[ind ++])}${hex(data[ind ++])}${hex(data[ind ++])}`;
                particles.add(Vec(x, y), Vec(x, y), rgb);
            }
        }
    }
    particles.sortByCol
    var scale = Math.min(fit.width / width, fit.height / tCan.height);
    particles.each(p=>{
        p.home.x = ((fit.left + fit.width) / 2) + (p.home.x - (width / 2)) * scale;
        p.home.y = ((fit.top + fit.height) / 2) + (p.home.y - (tCan.height / 2)) * scale;

    })
        .findCenter() // get center used to move particles on and off of screen
        .moveOffscreen()  // moves particles off the screen
        .moveIn();        // set the particles to move into view.

}

// basic particle
const particle = { pos : null,  delta : null, home : null, col : "black", }
// array of particles
const particles = {
    items : [], // actual array of particles
    mouseFX : {  power : 12, dist :110, curve : 2, on : true },
    fx : { speed : 0.2, drag : 0.6, size : 2, jiggle : 1 },
    // direction 1 move in -1 move out
    direction : 1,
    moveOut () {this.direction = -1; return this},
    moveIn () {this.direction = 1; return this},
    length : 0, 
    each(callback){ // custom iteration 
        for(var i = 0; i < this.length; i++){   callback(this.items[i],i) }
        return this;
    },
    empty() { this.length = 0; return this },
    deRef(){  this.items.length = 0; this.length = 0 },
    sortByCol() {  this.items.sort((a,b) => a.col === b.col ? 0 : a.col < b.col ? 1 : -1 ) },
    add(pos, home, col){  // adds a particle
        var p;
        if(this.length < this.items.length){
            p = this.items[this.length++];
            p.home.x = home.x;
			p.home.y = home.y;
            p.delta.x = 0;
            p.delta.y = 0;
            p.col = col;
        }else{
            this.items.push( Object.assign({}, particle,{ pos, home, col, delta : Vec(0,0) } ) );
            this.length = this.items.length
        }
        return this;
    },
    draw(){ // draws all
        var p, size, sizeh;
        sizeh = (size = this.fx.size) / 2;
        for(var i = 0; i < this.length; i++){
            p = this.items[i];
            ctx.fillStyle = p.col;
            ctx.fillRect(p.pos.x - sizeh, p.pos.y - sizeh, size, size);
        }
    },
    update(){ // update all particles
        var p,x,y,d;
        const mP = this.mouseFX.power;
        const mD = this.mouseFX.dist;
        const mC = this.mouseFX.curve;
        const fxJ = this.fx.jiggle;
        const fxD = this.fx.drag;
        const fxS = this.fx.speed;

        for(var i = 0; i < this.length; i++){
            p = this.items[i];
            p.delta.x += (p.home.x - p.pos.x ) * fxS + (Math.random() - 0.5) * fxJ;
            p.delta.y += (p.home.y - p.pos.y ) * fxS + (Math.random() - 0.5) * fxJ;
            p.delta.x *= fxD;
            p.delta.y *= fxD;
            p.pos.x += p.delta.x * this.direction;
            p.pos.y += p.delta.y * this.direction;
            if(this.mouseFX.on){
                x = p.pos.x - mouse.x;
                y = p.pos.y - mouse.y;
                d = Math.sqrt(x * x + y * y);
                if(d < mD){
                    x /= d;
                    y /= d;
                    d /= mD;
                    d = (1-Math.pow(d, mC)) * mP;
                    p.pos.x += x * d;
                    p.pos.y += y * d;        
                }
            }
        }
        return this;
    },
    findCenter(){  // find the center of particles maybe could do without
        var x,y;
        y = x = 0;
        this.each(p => { x += p.home.x; y += p.home.y });
        this.center = Vec(x / this.length, y / this.length);
        return this;
    },
    moveOffscreen(){  // move start pos offscreen
        var dist,x,y;
        dist = Math.sqrt(this.center.x * this.center.x + this.center.y * this.center.y);
        
        this.each(p => {
            var d;
            x = p.home.x - this.center.x;
            y = p.home.y - this.center.y;
            d =  Math.max(0.0001,Math.sqrt(x * x + y * y)); // max to make sure no zeros
            p.pos.x = p.home.x + (x / d)  * dist;
            p.pos.y = p.home.y + (y / d)  * dist;
        });
        return this;
    },
}





