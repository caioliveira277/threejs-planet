import * as THREE from 'three';
import { APP } from './app';
import { VRButton } from './VRButton';
import appData from "./app.json";

window.THREE = THREE;
window.VRButton = VRButton;

let player = new APP.Player();
player.load(appData);
player.setSize(window.innerWidth, window.innerHeight);
player.play();

document.body.appendChild(player.dom);

window.addEventListener('resize', function () {

  player.setSize(window.innerWidth, window.innerHeight);

});
