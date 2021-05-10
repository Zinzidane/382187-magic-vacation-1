import * as THREE from 'three';

import {colors} from '../common';

export const bubblesParams = {
  duration: 2100,
  glareOffset: 0.8,
  startRadianAngle: 1.96,
  endRadianAngle: 2.75
};

export const getBubblesConfig = (centerCoords, ww, wh) => ([
  {
    radius: 80.0,
    initialPosition: [centerCoords.x - centerCoords.x / 10, -100],
    position: [centerCoords.x - centerCoords.x / 10, -100],
    finalOffset: [0, wh + 200],
    positionAmplitude: 60,
    glareOffset: bubblesParams.glareOffset,
    glareAngleStart: bubblesParams.startRadianAngle,
    glareAngleEnd: bubblesParams.endRadianAngle,
    timeout: 0.05
  },
  {
    radius: 60.0,
    initialPosition: [centerCoords.x - ww / 6, -100],
    position: [centerCoords.x - ww / 6, -100],
    finalOffset: [0, wh + 200],
    positionAmplitude: 40,
    glareOffset: bubblesParams.glareOffset,
    glareAngleStart: bubblesParams.startRadianAngle,
    glareAngleEnd: bubblesParams.endRadianAngle,
    timeout: 0.70
  },
  {
    radius: 40.0,
    initialPosition: [centerCoords.x + 150, -100],
    position: [centerCoords.x + 150, -100],
    finalOffset: [0, wh + 200],
    positionAmplitude: 30,
    glareOffset: bubblesParams.glareOffset,
    glareAngleStart: bubblesParams.startRadianAngle,
    glareAngleEnd: bubblesParams.endRadianAngle,
    timeout: 0.90
  },
]);

export const getLightsConfig = (sceneParams) => ([
  {
    id: `DirectionalLight1`,
    type: `DirectionalLight`,
    light: new THREE.DirectionalLight(new THREE.Color(colors.White), 0.84),
    position: {x: 0, y: sceneParams.position.z * Math.tan(-15 * THREE.Math.DEG2RAD), z: sceneParams.position.z},
  },
  {
    id: `DirectionalLight2`,
    type: `DirectionalLight`,
    light: new THREE.DirectionalLight(new THREE.Color(colors.White), 0.7),
    position: {x: 0, y: 500, z: 0},
  },
  {
    id: `PointLight1`,
    type: `PointLight`,
    light: new THREE.PointLight(new THREE.Color(`rgb(246,242,255)`), 0.6, 975, 2.0),
    position: {x: -785, y: -350, z: 710},
  },
  {
    id: `PointLight2`,
    type: `PointLight`,
    light: new THREE.PointLight(new THREE.Color(`rgb(245,254,255)`), 0.95, 975, 2.0),
    position: {x: 730, y: 800, z: 985},
  },
]);

export const getTexturesConfig = (storyModels) => (
  [
    {
      // src: `./img/scene-1.png`,
      options: {hueShift: 0.0, distort: false},
      models: storyModels.first
    },
    {
      // src: `./img/scene-2.png`,
      options: {hueShift: -0.25, distort: true},
      animations: {
        hue: {
          initial: -0.1,
          final: -0.25,
          duration: 2000,
          variation: 0.4,
        },
      },
      models: storyModels.second
    },
    {
      // src: `./img/scene-3.png`,
      options: {hueShift: 0.0, distort: false},
      models: storyModels.third
    },
    {
      // src: `./img/scene-4.png`,
      options: {hueShift: 0.0, distort: false},
      models: storyModels.fourth
    }
  ]
);

export const firstStoryConfig = {
  models: [
    {
      name: `static`,
      type: `gltf`,
      path: `3d/gltf/scene1-static-output-1.gltf`,
      scale: 1,
      position: {x: 0, y: 1, z: 5},
      rotate: {x: 0, y: -45, z: 0},
      castShadow: true,
      receiveShadow: true,
    },
  ],
  flower: {
    position: {x: -270, y: 380, z: 350},
    rotate: {x: 0, y: 45, z: 0},
    scale: {x: 0.9, y: -0.9, z: 0.9},
    castShadow: true,
    receiveShadow: true,
  },
  carpet: {
    scale: 1,
    position: {x: 0, y: 8, z: 0},
    rotate: {x: 0, y: 45, z: 180},
  },
  saturn: {
    scale: 1,
    position: {x: 50, y: 550, z: 300},
    rotate: {x: -15, y: 0, z: 0},
    castShadow: true,
    receiveShadow: true,
  }
};

export const secondStoryConfig = {
  models: [
    {
      name: `static`,
      type: `gltf`,
      path: `3d/gltf/scene2-static-output-1.gltf`,
      scale: 1,
      position: {x: 0, y: 0, z: 5},
      rotate: {x: 0, y: -45, z: 0},
      castShadow: true,
      receiveShadow: true,
    },
    {
      name: `suitcase`,
      type: `gltf`,
      path: `3d/gltf/suitcase.gltf`,
      scale: 1,
      position: {x: -360, y: 1, z: 790},
      rotate: {x: 0, y: -20, z: 0},
      castShadow: true,
      receiveShadow: true,
    },
  ],
  bigLeaf: {
    scale: {x: 2.5, y: 2.5, z: 2.5},
    position: {x: -210, y: 260, z: 350},
    rotate: {x: 0, y: 45, z: 0},
    castShadow: true,
    receiveShadow: true,
  },
  smallLeaf: {
    scale: {x: 1.4, y: 1.4, z: 1.4},
    position: {x: -240, y: 145, z: 340},
    rotate: {x: -15, y: 45, z: 15},
    castShadow: true,
    receiveShadow: true,
  },
  pyramid: {
    scale: 1,
    position: {x: 0, y: 145, z: 330},
    rotate: {x: 0, y: 0, z: 0},
    castShadow: true,
    receiveShadow: true,
  },
  lantern: {
    scale: 1,
    position: {x: 390, y: 60, z: 540},
    rotate: {x: 0, y: 45, z: 0},
    castShadow: true,
    receiveShadow: true,
  },
};

export const thirdStoryConfig = {
  models: [
    {
      name: `static`,
      type: `gltf`,
      path: `3d/gltf/scene3-static-output-1.gltf`,
      scale: 1,
      position: {x: 0, y: 1, z: 5},
      rotate: {x: 0, y: -45, z: 0},
      castShadow: true,
      receiveShadow: true,
    },
  ],
  snowman: {
    scale: 1,
    position: {x: -140, y: 130, z: 450},
    rotate: {x: 10, y: 40, z: 0},
    castShadow: true,
    receiveShadow: true,
  },
  fencing: {
    scale: 1,
    position: {x: 0, y: 100, z: 20},
    rotate: {x: 0, y: -45, z: 0},
    castShadow: true,
    receiveShadow: true,
  },
  road: {
    scale: 1,
    position: {x: 0, y: 8, z: 30},
    rotate: {x: 0, y: 45, z: 180}
  }
};

export const fourthStoryConfig = {
  models: [
    {
      name: `static`,
      type: `gltf`,
      path: `3d/gltf/scene4-static-output-1.gltf`,
      scale: 1,
      position: {x: 0, y: 0, z: 5},
      rotate: {x: 0, y: -45, z: 0},
    },
    {
      name: `suitcase`,
      type: `gltf`,
      path: `3d/gltf/suitcase.gltf`,
      castShadow: true,
      receiveShadow: true,
      scale: 1,
      position: {x: -400, y: 5, z: 775},
      rotate: {x: 0, y: -25, z: 0},
    },
  ],
  flower: {
    position: {x: -270, y: 380, z: 350},
    rotate: {x: 0, y: 45, z: 0},
    scale: {x: 0.9, y: -0.9, z: 0.9},
  },
  carpet: {
    scale: 1,
    position: {x: 0, y: 8, z: 0},
    rotate: {x: 0, y: 45, z: 180}
  },
  saturn: {
    scale: 1,
    position: {x: 50, y: 550, z: 300},
    rotate: {x: -15, y: 0, z: 0}
  }
};

export const objectsToAdd = {
  suitcase: {
    name: `suitcase`,
    type: `gltf`,
    path: `3d/gltf/suitcase.gltf`,
    castShadow: true,
    receiveShadow: true,
    scale: {x: 1, y: 1.02, z: 1},
    finalScale: {x: 1, y: 1, z: 1},
    position: {x: -280, y: 550, z: 800},
    finalPosition: {x: -280, y: 510, z: 800},
    rotate: {x: 0, y: -20, z: 0},
  },
  dog: {
    name: `dog`,
    type: `gltf`,
    path: `3d/gltf/dog.gltf`,
    castShadow: true,
    receiveShadow: true,
    scale: {x: 1, y: 1, z: 1},
    position: {x: 40, y: 2, z: 680},
    rotate: {x: 0, y: 15, z: 0},
  },
  compass: {
    name: `compass`,
    type: `gltf`,
    path: `3d/gltf/compass.gltf`,
    castShadow: true,
    receiveShadow: true,
    scale: 1,
    position: {x: -10, y: 0, z: 10},
    rotate: {x: 0, y: -45, z: 0},
  },
  sonya: {
    name: `sonya`,
    type: `gltf`,
    path: `3d/gltf/sonya.gltf`,
    castShadow: true,
    receiveShadow: true,
    scale: 1,
    position: {x: 150, y: 120, z: 550},
    rotate: {x: 0, y: -45, z: 0},
  }
};
