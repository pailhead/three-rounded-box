# three-rounded-box
[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

See it [live](http://dusanbosnjak.com/test/webGL/three-rounded-box/).

A geometry class with filleted edges for [THREE.js](https://github.com/mrdoob/three.js/). Extends `THREE.BufferGeometry`.


## Constructor

**RoundedBoxGeometry( *width* , *height* , *depth* , *radius* , *radiusSegments* )**

```
width = Float           //size of box in x axis, default 1
height = Float          //size of box in y axis, default 1
depth = Float           //size of box in z axis, default 1
radius = Float          //radius of the fillet,  default 0.15
radiusSegments = Int    //segments along the fillet, default 1
```


## Usage

[![NPM](https://nodei.co/npm/three-rounded-box.png)](https://npmjs.org/package/three-rounded-box)

```javascript

var RoundedBoxGeometry = require('three-rounded-box')(THREE); //pass your instance of three

var myBox = new THREE.Mesh( new RoundedBoxGeometry( 10 , 10 , 10 , 2 , 5 ) );

myScene.add(myBox);

```


## Test

```
npm install
npm start
```

You should see a box with smooth edges spinning.


## TODO
- cleanup the weaving logic
- add segments along the sides


