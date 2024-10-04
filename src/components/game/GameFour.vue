<template>
  <div class="row">
    <div class="col">
      <button type="button" title="Eraser" onclick="erase()" class="btn">
        <i class="fa-solid fa-eraser"></i>
      </button>
      <button type="button" title="Save Sketch" onclick="onSave()" class="btn">
        <i class="fa-solid fa-floppy-disk"></i>
      </button>
    </div>
  </div>
  <div class="row">
    <div class="col"><canvas id="canvas"></canvas></div>
  </div>
</template>
<script setup>
import { dom } from "quasar";

var canvas = dom.getElementById("draw");
var ctx = canvas.getContext("2d");
let color = "#000";
let brushthickness = 7;
dom.querySelector(".color-btn div").style.backgroundColor = color;

//
//https://github.com/AnshikaG0219/web-paint-final
//
//*************************************************************************************************
//******************************************* RESIZE CANVAS ***************************************
//*************************************************************************************************

function draw(e) {
  if (e.buttons !== 1) return; // if mouse is not clicked, do not go further

  ctx.beginPath(); // begin the drawing path
  ctx.lineWidth = brushthickness; // width of line
  ctx.lineCap = "round"; // rounded end cap
  ctx.strokeStyle = color; // hex color of line
  ctx.moveTo(pos.x, pos.y); // from position
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to position
  ctx.closePath();
  ctx.stroke(); // draw it!
}

function resize() {
  ctx.canvas.width = window.innerWidth - 20;
  ctx.canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);
</script>
