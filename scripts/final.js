$(function() {
    var canvas = document.getElementById("renderCanvas");
    var engine = new BABYLON.Engine(canvas, true);
    var createScene = function() {
        var scene = new BABYLON.Scene(engine);
        var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0, 0, 5), scene);
        camera.attachControl(canvas, true);
        camera.setPosition(new BABYLON.Vector3(0, 0, 5));
        camera.wheelDeltaPercentage = 0.01;
        camera.lowerRadiusLimit = 2; // min radius of zooming in
        camera.upperRadiusLimit = 8; // max radius of zooming out
        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(50, 5, 0), scene);
        var egeometry = [1, 0]; //octahedral,bipyramidal

        var create = function(button, cylinder, bond, color, bX, bY, bZ, cX, cY, cZ, sX, sY, sZ) {
            button.material = color;
            cylinder.material = color;
            cylinder.position.x = cX;
            cylinder.position.y = cY;
            cylinder.position.z = cZ;
            button.position.y = bY;
            button.position.x = bX;
            button.position.z = bZ;
            bond.position.x = sX;
            bond.position.y = sY;
            bond.position.z = sZ;
        };

        var sp1 = BABYLON.MeshBuilder.CreateSphere("sp1", { diameter: 0.4 }, scene); //creates the small blue clickable
        var bo1 = BABYLON.MeshBuilder.CreateSphere("sp1", { diameter: 1 }, scene); //creates the bbig one
        var cy1 = BABYLON.MeshBuilder.CreateCylinder("cy1", { diameter: 0.2, height: 1 }, scene); //creates the clyinder
        cy1.rotation.z = Math.PI / 2;
        var blue1 = new BABYLON.StandardMaterial("blue1", scene);
        blue1.diffuseColor = new BABYLON.Color3.Blue();
        //create(sp1, cy1, bo1, blue1, 1, 0, 0, 1, 0, 0, 2, 0, 0);


        var sp2 = BABYLON.MeshBuilder.CreateSphere("sp2", { diameter: 0.4 }, scene);
        var bo2 = BABYLON.MeshBuilder.CreateSphere("sp1", { diameter: 1 }, scene);
        var cy2 = BABYLON.MeshBuilder.CreateCylinder("cy2", { diameter: 0.2, height: 1 }, scene);
        cy2.rotation.z = Math.PI / 2;
        var blue2 = new BABYLON.StandardMaterial("blue2", scene);
        blue2.diffuseColor = new BABYLON.Color3.Red();
        //create(sp2, cy2, bo2, blue2, -1, 0, 0, -1, 0, 0, -2, 0, 0);

        var sp3 = BABYLON.MeshBuilder.CreateSphere("sp3", { diameter: 0.4 }, scene);
        var bo3 = BABYLON.MeshBuilder.CreateSphere("sp1", { diameter: 1 }, scene);
        var cy3 = BABYLON.MeshBuilder.CreateCylinder("cy3", { diameter: 0.2, height: 1 }, scene);
        cy3.rotation.x = Math.PI / 2;
        var blue3 = new BABYLON.StandardMaterial("blue3", scene);
        blue3.diffuseColor = new BABYLON.Color3.Green();
        //create(sp3, cy3, bo3, blue3, 0, 0, 1, 0, 0, 1, 0, 0, 2);

        var sp4 = BABYLON.MeshBuilder.CreateSphere("sp4", { diameter: 0.4 }, scene);
        var bo4 = BABYLON.MeshBuilder.CreateSphere("sp1", { diameter: 1 }, scene);
        var cy4 = BABYLON.MeshBuilder.CreateCylinder("cy4", { diameter: 0.2, height: 1 }, scene);
        cy4.rotation.x = Math.PI / 2;
        var blue4 = new BABYLON.StandardMaterial("blue4", scene);
        blue4.diffuseColor = new BABYLON.Color3(0, 0.5, 1);
        //create(sp4, cy4, bo4, blue4, 0, 0, -1, 0, 0, -1, 0, 0, -2);

        var sp5 = BABYLON.MeshBuilder.CreateSphere("sp5", { diameter: 0.4 }, scene);
        var bo5 = BABYLON.MeshBuilder.CreateSphere("sp1", { diameter: 1 }, scene);
        var cy5 = BABYLON.MeshBuilder.CreateCylinder("cy5", { diameter: 0.2, height: 1 }, scene);
        var blue5 = new BABYLON.StandardMaterial("blue5", scene);
        blue5.diffuseColor = new BABYLON.Color3.Yellow();
        //create(sp5, cy5, bo5, blue5, 0, 1, 0, 0, 1, 0, 0, 2, 0);

        var sp6 = BABYLON.MeshBuilder.CreateSphere("sp6", { diameter: 0.4 }, scene);
        var bo6 = BABYLON.MeshBuilder.CreateSphere("sp1", { diameter: 1 }, scene);
        var cy6 = BABYLON.MeshBuilder.CreateCylinder("cy6", { diameter: 0.2, height: 1 }, scene);
        var blue6 = new BABYLON.StandardMaterial("blue6", scene);
        blue6.diffuseColor = new BABYLON.Color3(0, 0.5, 1);
        //create(sp6, cy6, bo6, blue6, 0, -1, 0, 0, -1, 0, 0, -2, 0);


        var sp7 = BABYLON.MeshBuilder.CreateSphere("sp2", { diameter: 0.4 }, scene);
        var bo7 = BABYLON.MeshBuilder.CreateSphere("sp1", { diameter: 1 }, scene);
        var cy7 = BABYLON.MeshBuilder.CreateCylinder("cy2", { diameter: 0.2, height: 2 }, scene);
        cy7.rotation.z = Math.PI / 2;
        cy7.rotation.y = Math.PI / 3;
        var blue7 = new BABYLON.StandardMaterial("blue2", scene);
        blue7.diffuseColor = new BABYLON.Color3(0, 0.5, 1);
        //create(sp7, cy7, bo7, blue7, -0.5, 0, Math.sqrt(3) / 2, -0.5, 0, Math.sqrt(3) / 2, -1, 0, Math.sqrt(3));

        var sp8 = BABYLON.MeshBuilder.CreateSphere("sp2", { diameter: 0.4 }, scene);
        var bo8 = BABYLON.MeshBuilder.CreateSphere("sp1", { diameter: 1 }, scene);
        var cy8 = BABYLON.MeshBuilder.CreateCylinder("cy2", { diameter: 0.2, height: 2 }, scene);
        cy8.rotation.z = Math.PI / 2;
        cy8.rotation.y = Math.PI * 2 / 3;
        var blue8 = new BABYLON.StandardMaterial("blue2", scene);
        blue8.diffuseColor = new BABYLON.Color3(0, 0.5, 1);
        //create(sp8, cy8, bo8, blue8, -0.5, 0, -Math.sqrt(3) / 2, -0.5, 0, -Math.sqrt(3) / 2, -1, 0, -Math.sqrt(3));

        var Mainsphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);

        var list = [];
        //opposite is 3
        //adjacent same level is 2
        var on = false,
            gOn = true;

        var setAction = function(mesh, mesh2, mesh3, y, y2, y3) {
            mesh.actionManager = new BABYLON.ActionManager(scene);
            mesh2.actionManager = new BABYLON.ActionManager(scene);


            mesh2.position.y = -1000;
            mesh3.position.y = -1000;

            mesh.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, mesh.material, "emissiveColor", mesh.material.emissiveColor));
            mesh.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, mesh.material, "emissiveColor", BABYLON.Color3.Red()));

            mesh2.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, mesh.material, "emissiveColor", mesh.material.emissiveColor));
            mesh2.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, mesh.material, "emissiveColor", BABYLON.Color3.Red()));

            mesh.actionManager.registerAction(new BABYLON.CombineAction(BABYLON.ActionManager.OnPickTrigger, [
                new BABYLON.SetValueAction(BABYLON.ActionManager.OnPickDownTrigger, mesh, 'position.y', -1000),
                new BABYLON.SetValueAction(BABYLON.ActionManager.OnPickDownTrigger, mesh2, 'position.y', y2),
                new BABYLON.SetValueAction(BABYLON.ActionManager.OnPickDownTrigger, mesh3, 'position.y', y3),
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, function() {
                    list.push(mesh3);
                    on = true;

                })
            ]));
            mesh2.actionManager.registerAction(new BABYLON.CombineAction(BABYLON.ActionManager.OnPickTrigger, [
                new BABYLON.SetValueAction(BABYLON.ActionManager.OnPickDownTrigger, mesh, 'position.y', y),
                new BABYLON.SetValueAction(BABYLON.ActionManager.OnPickDownTrigger, mesh3, 'position.y', -1000),
                new BABYLON.SetValueAction(BABYLON.ActionManager.OnPickDownTrigger, mesh2, 'position.y', -1000),
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, function() {
                    list.splice(list.indexOf(mesh3), 1);
                    on = true;
                })
            ]));

        };



        var reset = function() {
            create(sp1, cy1, bo1, blue1, 1, 0, 0, 1, 0, 0, 2, 0, 0);
            create(sp2, cy2, bo2, blue2, -1, 0, 0, -1, 0, 0, -2, 0, 0);
            create(sp3, cy3, bo3, blue3, 0, 0, 1, 0, 0, 1, 0, 0, 2);
            create(sp4, cy4, bo4, blue4, 0, 0, -1, 0, 0, -1, 0, 0, -2);
            create(sp5, cy5, bo5, blue5, 0, 1, 0, 0, 1, 0, 0, 2, 0);
            create(sp6, cy6, bo6, blue6, 0, -1, 0, 0, -1, 0, 0, -2, 0);
            create(sp7, cy7, bo7, blue7, -0.5, 0, Math.sqrt(3) / 2, -0.5, 0, Math.sqrt(3) / 2, -1, 0, Math.sqrt(3));
            create(sp8, cy8, bo8, blue8, -0.5, 0, -Math.sqrt(3) / 2, -0.5, 0, -Math.sqrt(3) / 2, -1, 0, -Math.sqrt(3));
            setAction(sp1, cy1, bo1, 0, 0, 0);
            setAction(sp2, cy2, bo2, 0, 0, 0);
            setAction(sp3, cy3, bo3, 0, 0, 0);
            setAction(sp4, cy4, bo4, 0, 0, 0);
            setAction(sp5, cy5, bo5, 1, 1, 2);
            setAction(sp6, cy6, bo6, -1, -1, -2);
            setAction(sp7, cy7, bo7, 0, 0, 0);
            setAction(sp8, cy8, bo8, 0, 0, 0);
        }



        var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("myUI");
        var left = "500px";

        var rectangle = new BABYLON.GUI.Rectangle("rect");
        rectangle.background = "darkBlue";
        rectangle.color = "white";
        rectangle.width = "17%";
        rectangle.height = "40%";
        rectangle.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        rectangle.verticalAlignment = BABYLON.GUI.Control.Vertical_ALIGNMENT_TOP;

        rectangle.top = "60px";
        scene.registerBeforeRender(function() {
            rectangle.left = left;
        });
        advancedTexture.addControl(rectangle);

        var text = "Make some shapes by clicking on the blue spheres or blue cylinders";
        var text1 = new BABYLON.GUI.TextBlock();
        text1.color = "white";
        text1.text = text;
        text1.lineSpacing = "7px";
        text1.textWrapping = true;
        text1.fontSize = "13px";
        rectangle.addControl(text1);


        var but1 = BABYLON.GUI.Button.CreateSimpleButton("but1", "Shape Info");
        but1.width = "17%"
        but1.height = "40px";
        but1.color = "white";
        but1.cornerRadius = 20;
        but1.background = "darkBlue";
        but1.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        but1.verticalAlignment = BABYLON.GUI.Control.Vertical_ALIGNMENT_TOP;
        but1.top = "10px";
        but1.left = "-15px";
        var but1on = false;
        but1.onPointerUpObservable.add(function() {
            if (!but1on) {
                left = "-15px";
                but1on = true;
            }
            else {
                left = "500px";
                but1on = false;
            }
        });
        advancedTexture.addControl(but1);

        var but2 = BABYLON.GUI.Button.CreateSimpleButton("but2", "6 e- clouds");
        but2.width = "60px";
        but2.height = "60px";
        but2.color = "white";
        but2.cornerRadius = 100;
        but2.background = "darkBlue";
        but2.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        but2.verticalAlignment = BABYLON.GUI.Control.Vertical_ALIGNMENT_TOP;
        but2.top = "10px";
        but2.left = "15px";
        but2.onPointerUpObservable.add(function() {
            egeometry = [1, 0];
            list = [];
            gOn = true;
        });
        advancedTexture.addControl(but2);

        var but3 = BABYLON.GUI.Button.CreateSimpleButton("but3", "4 e- clouds");
        but3.width = "60px";
        but3.height = "60px";
        but3.color = "white";
        but3.cornerRadius = 100;
        but3.background = "darkBlue";
        but3.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        but3.verticalAlignment = BABYLON.GUI.Control.Vertical_ALIGNMENT_TOP;
        but3.top = "80px";
        but3.left = "15px";
        but3.onPointerUpObservable.add(function() {
            egeometry = [0, 1];
            list = [];
            gOn = true;
        });

        advancedTexture.addControl(but3);

        scene.registerBeforeRender(function() {
            if (gOn) {
                if (egeometry[0] == 1) {
                    reset();
                    sp7.position.y = -1000;
                    sp8.position.y = -1000;
                }
                else if (egeometry[1] == 1) {
                    reset();
                    sp2.position.y = -1000;
                    sp3.position.y = -1000;
                    sp4.position.y = -1000;
                }
                gOn = false;
                //console.log(egeometry)
            }
            if (on) {
                var total = 0;
                for (var i = 0; i < list.length; i++) {
                    for (var k = 0; k < list.length; k++) {
                        total += Math.floor(list[k].position.subtract(list[i].position).length());
                    }
                }
                if (total == 48) {
                    text = "This molecular geometry is called Square Pyramidal. There are 5 bonding electrons and 1 lone pair surrounding the central atom. The lone pair pushes the closest 4 atoms slightly more resulting in each bonding angles slightly less than 90 degrees. An example of Square Pryamidal molecule is Chlorine Pentafluoride. It extremely reactive towards water and toxic to humans";
                }
                else if (total == 32) {
                    text = "This molecular geometry is called Square Planar. There are 4 bonding electrons and 2 lone pairs opposite from each other. Bond angles bewtween each bond is 90 degrees. An example of a Square Planar molecule is Cisplatin. It is a medication used to treat a number of different cancers such as lung cancer and breast cancer";
                }
                else if (total == 72) {
                    text = "This molecular geometry is called Octahedral. There are 6 bonding electrons and no lone pairs surrounding the central atom. Bond angles between each bond is 90 degrees. An example of a Octahedral molecule is Sulfur Hexafluoride. It is a greenhouse gas and a good electrical insulator";
                }
                else if (total == 50) {
                    text = "This molecular geometry is called Trigonal Bipyramidal. There are 5 bonding electrons and no lone pairs surrounding the central atom. Bond angles between the equatorial bonds is 120 degrees, between the axial bonds is 180 degrees, and between the axial and equatorial bonds are 90 degrees. An example of a Trigonal Bipyramidal is Iron Pentacarbonyl. It is used in the manufacture of powdered iron cores for high-frequency coils used in the radio and television industries";
                }
                else if (total == 30 && bo5.position.y == 2 && bo6.position.y == -2) {
                    text = "This molecular geometry is called Seesaw. There are 4 bonding electrons and 1 lone pair surrounding the central atom. The lone pair pushes the axial and equatorial bonds slightly more resulting in the axial bonds slightly less than 180 degrees, equatorial bonds slightly less than 120 degrees, and between axial and equatorial bonds slightly less than 90 degrees. An example of a Seesaw molecule is Sulfur Tetrafluoride. It reacts vigorously with water and acids and it is heavier than air";
                }
                else if (total == 16 && egeometry[1] == 1) {
                    text = "This molecular geometry is called T-Shaped. There are 3 bonding electrons and 2 lone pairs surrounding the central atom. The 2 lone pairs pushes the axial and equatorial bonds slightly more resulting in the axial bonds slightly less than 180 degrees, and between axial and equatorial bonds slightly less than 90 degrees. An example of a T-Shaped molecule is Chlorine Trifluoride. It is a colorless, poisonous, corrosive, and extremely reactive gas";
                }
                else if (total == 8 && egeometry[1] == 1) {
                    text = "This molecular geometry is called Linear. There are 2 bonding electrons and 3 lone pairs on the equator surrounding the central atom. Bond angles between the bonds (axial bonds) is 180 degrees. An example of a Linear molecule is Xenon Difluoride. It is used to kill bacteria, and power lasers. It is preferred to power spacecraft in deep space as fuel for ion engines";
                }
                else {
                    text = "Make some shapes by clicking on the blue spheres or blue cylinders";
                }
                text1.text = text;
                on = false;

                console.log(total);
            }
        });


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
