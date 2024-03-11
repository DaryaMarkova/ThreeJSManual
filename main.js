import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

if (WebGL.isWebGLAvailable()) {
  console.log("webgl available");
} else {
  console.log("webgl permitted");
}
