$(function(){
  // WebGL
  var mainView = document.getElementById('mainView');
  
  // Criar a tela
  var scene = new THREE.Scene();
  
  //Criar a camera
  var camera = new THREE.PerspectiveCamera(75, mainView.offsetWidth / mainView.offsetHeight, 0.1, 1000);

  // Create the place to render
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(mainView.offsetWidth, mainView.offsetHeight);
  mainView.appendChild(renderer.domElement);

  // Extra viewports
  var shape;
  var material = new THREE.MeshBasicMaterial({ color: 0xffffff });

  // Posição da camera
  camera.position.z = 5;
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  renderer.render(scene, camera);

  // Set do modo para solido
  var mode = function(geometry){
      var mode;
      material.side = THREE.SingleSide;
      mode = new THREE.Mesh(geometry, material);
      return mode;
  }

  var $body = $('body');

  // NUMERAÇÃO DA TECLA
    var upArrow = 38;
    var downArrow = 40;
    var leftArrow = 37;
    var rightArrow = 39;

    // TRANSLATION HANDLERS
    var Akey = 65;
    var Dkey = 68;
    var Wkey = 87;
    var Skey = 83;

    // BOTOES DE ROTAÇÃO
    var Ukey = 85;
    var Okey = 79;

    $body.keydown(function (event){
        event.preventDefault();
        switch (event.which) {
          // Translate
          case Wkey:
            shape.position.y += 0.1;
            renderer.render(scene, camera);
            break;
          case Skey:
            shape.position.y += -0.1;
            renderer.render(scene, camera);
            break;
          case Akey:
            shape.position.x -= 0.1;
            renderer.render(scene, camera);
            break;
          case Dkey:
            shape.position.x += 0.1;
           renderer.render(scene, camera);
            break;
          // Rotate
          case Ukey:
            shape.rotation.z += 0.1;
           renderer.render(scene, camera);
            break;
          case Okey:
            shape.rotation.z += -0.1;
            renderer.render(scene, camera);
            break;
          // Scale
          case leftArrow:
            shape.scale.x += -0.1;
           renderer.render(scene, camera);
            break;
          case rightArrow:
            shape.scale.x += 0.1;
           renderer.render(scene, camera);
            break;
          case upArrow:
            shape.scale.y += 0.1;
            renderer.render(scene, camera);
            break;
          case downArrow:
            shape.scale.y -= 0.1;
          renderer.render(scene, camera);
            break;
          default:
            break;
        }
    });

    // COLOR BUTTONS HANDLERS
    var $brancoBtn = $('.branco');
    var $cinzaBtn = $(".cinza");
    var $pretoBtn = $(".preto");
    var $azulBtn = $(".azul");
    var $amareloBtn = $(".amarelo");
    var $verdeBtn = $(".verde");
    var $rosaBtn = $(".rosa");
    var $cianoBtn = $(".ciano");
    var $vermelhoBtn = $(".vermelho");

    $brancoBtn.click(function(){
        material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
    });

    $cinzaBtn.click(function() {
      material = new THREE.MeshBasicMaterial({ color: 0x808080 });
    });

    $pretoBtn.click(function() {
       material = new THREE.MeshBasicMaterial({ color: 0x000000 });
    });

    $azulBtn.click(function() {
       material = new THREE.MeshBasicMaterial({ color: 0x0000FF });
    });

    $amareloBtn.click(function() {
      material = new THREE.MeshBasicMaterial({ color: 0xFFFF00 });
    });

    $verdeBtn.click(function() {
      material = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
    });

    $rosaBtn.click(function() {
      material = new THREE.MeshBasicMaterial({ color: 0xFF00FF });
    });

    $cianoBtn.click(function() {
      material = new THREE.MeshBasicMaterial({ color: 0x00FFFF });
    });

    $vermelhoBtn.click(function() {
      material = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
    });

    // SHAPE BUTTON HANDLERS

    var $retaBtn = $(".reta");
    var $trianguloBtn = $(".triangulo");
    var $quadradoBtn = $(".quadrado");
    var $trapezioBtn = $(".trapezio");
    var $pentagonoBtn = $(".pentagono");
    var $circuloBtn = $(".circulo");


    $retaBtn.click(function() {
        var geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(-2, 0, 0));
        geometry.vertices.push(new THREE.Vector3( 2, 0, 0));
        shape = new THREE.LineSegments(geometry,material);
        scene.add(shape);
        renderer.render(scene, camera);
    });

    $trianguloBtn.click(function() {
      var geometry = new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3(-2, -2, 0));
      geometry.vertices.push(new THREE.Vector3(2, -2, 0));
      geometry.vertices.push(new THREE.Vector3(0, 2, 0));
      geometry.faces.push(new THREE.Face3(0, 1, 2));
      geometry.computeFaceNormals();
      shape = mode(geometry)
      scene.add(shape);
      renderer.render(scene, camera);
    });

    $quadradoBtn.click(function() {
      var geometry = new THREE.BoxGeometry(1, 1, 0);
      shape = mode(geometry);
      scene.add(shape);
      renderer.render(scene, camera);
    });

    $trapezioBtn.click(function() {
        var geometry = new THREE.Geometry();
       geometry.vertices.push(new THREE.Vector3(-2, 0, 0));
       geometry.vertices.push(new THREE.Vector3(2, 0, 0));
       geometry.vertices.push(new THREE.Vector3(1, 2, 0));
       geometry.vertices.push(new THREE.Vector3(-1, 2, 0));
       geometry.faces.push(new THREE.Face3(0, 1, 2));
       geometry.faces.push(new THREE.Face3(0, 2, 3));
       geometry.computeFaceNormals();
       shape = mode(geometry);
       scene.add(shape);
      renderer.render(scene, camera);
    });

    $pentagonoBtn.click(function() {
      var geometry = new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3(0, 2, 0));
      geometry.vertices.push(new THREE.Vector3(-2, .5, 0));
      geometry.vertices.push(new THREE.Vector3(-1, -2, 0));
      geometry.vertices.push(new THREE.Vector3(1, -2, 0));
      geometry.vertices.push(new THREE.Vector3(2, .5, 0));
      geometry.faces.push(new THREE.Face3(1, 2, 3));
      geometry.faces.push(new THREE.Face3(1, 3, 4));
       geometry.faces.push(new THREE.Face3(1, 4, 0));
      geometry.computeFaceNormals();
      shape = mode(geometry);
      scene.add(shape);
      renderer.render(scene, camera);
    });

    $circuloBtn.click(function() {
      var geometry = new THREE.CircleGeometry(2,100);
      shape = mode(geometry);
      scene.add(shape);
      renderer.render(scene, camera);
    });

});