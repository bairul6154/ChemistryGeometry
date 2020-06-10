$(function() {
    var canvas = document.getElementById("renderCanvas");
    var engine = new BABYLON.Engine(canvas, true);
    var createScene = function() {
        var scene = new BABYLON.Scene(engine);
        //scene.ambientColor = new BABYLON.Color3(1, 0, 1);
        var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0, 0, 5), scene);
        camera.attachControl(canvas, true);
        camera.lowerRadiusLimit = 2; // min radius of zooming in
        camera.upperRadiusLimit = 10; // max radius of zooming out
        camera.wheelDeltaPercentage = 0.01; // sets the scroll sensitivity

        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);

        // create a color
        var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
        myMaterial.diffuseColor = new BABYLON.Color3(1, 0, 1);
        var myMaterial2 = new BABYLON.StandardMaterial("myMaterial2", scene);
        myMaterial2.diffuseColor = new BABYLON.Color3(0, 0.5, 1);




        // shapes
        //var aniSphere = BABYLON.MeshBuilder.CreateSphere("aniSphere", { diameter: 2}, scene);
        var aniBox = BABYLON.MeshBuilder.CreateBox("aniBox", {height: 1, width: 1, depth: 1} , scene);
        // var alpha = 0;
        // scene.registerBeforeRender(function () {
        //     aniBox.position.x = 5 * Math.cos(alpha);
        //     aniBox.position.y = -1;
        //     aniBox.position.z = 5 * Math.sin(alpha);
        //     alpha += 0.01;
        // });
        // aniSphere.material = myMaterial;
        aniBox.material = myMaterial2;
        aniBox.position.x -= 5;
        aniBox.rotation.x += 10;

        // var animation = new BABYLON.Animation("animation", "rotation.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        // var keyFrames = [];
        // keyFrames.push({frame:0, value:0});
        // keyFrames.push({frame:200, value: 5});
        // animation.setKeys(keyFrames);
        // aniBox.animations = [];
        // aniBox.animations.push(animation);
        // scene.beginAnimation(aniBox, 0, 200, false);




        // var animationSphere = new BABYLON.Animation("myAnimation", "rotation.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        //                                                                 ^-this is time of how fast the animation loops
        // var keys = [];

        // //At the animation key 0, the value of scaling is "1"
        // keys.push({
        //     frame: 0, diameter: 2
        // });

        // //At the animation key 20, the value of scaling is "0.2"
        // keys.push({
        //     frame: 20, diameter: 0.2
        // });

        // //At the animation key 100, the value of scaling is "1"
        // keys.push({
        //     frame: 100, diameter: 2
        // });
        // animationSphere.setKeys(keys);
        // aniSphere.animations = [];
        // aniSphere.animations.push(animationSphere);
        // scene.beginAnimation(aniSphere, 0, 100, true);

        // var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2}, scene);
        // sphere.position.x = -5;
        // var shape2 = BABYLON.MeshBuilder.CreatePlane("name", {height: 2,width: 2}, scene);
        return scene;
    }


    var scene = createScene();
    engine.runRenderLoop(function() {
        scene.render();
    });


    window.addEventListener("resize", function() {
        engine.resize();
    });
});
