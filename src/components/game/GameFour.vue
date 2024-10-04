<template>
  <div>
    <canvas ref="myCanvas" id="draw"></canvas>
    <div class="color-controls">
      <button class="color-btn" @click="changeColor">
        <div :style="{ backgroundColor: color }" />
      </button>
      <div class="size-list">
        <button
          v-for="size in brushSizes"
          :key="size"
          class="size"
          :style="{ width: size + 'px' }"
          @click="setBrushSize(size)"
        ></button>
      </div>
      <input
        type="color"
        id="color-picker"
        v-model="color"
        @change="changeColor"
      />
      <button @click="downloadCanvas">Descargar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const canvas = ref(null);
const ctx = ref(null);
let color = ref("#000");
let offsetX = 0;
let offsetY = 0;
const brushSizes = [5, 10, 15];
const brushThickness = ref(7);

const erase = () => (ctx.value.globalCompositeOperation = "destination-out");

const resizeCanvas = () => {
  if (canvas.value) {
    canvas.value.width = window.innerWidth - 20;
    canvas.value.height = window.innerHeight;
  }
};

const setBrushSize = (size) => {
  brushThickness.value = size;
};

const changeColor = () => {
  ctx.value.strokeStyle = color.value;
  ctx.value.globalCompositeOperation = "source-over";
};

const downloadCanvas = () => {
  const link = document.createElement("a");
  link.download = "sketch.png";
  link.href = canvas.value.toDataURL();
  link.click();
};

const setPosition = (e) => {
  if (e.type === "touchstart" || e.type === "touchmove") {
    offsetX = e.touches[0].clientX - canvas.value.offsetLeft;
    offsetY = e.touches[0].clientY - canvas.value.offsetTop;
  } else {
    offsetX = e.clientX - canvas.value.offsetLeft;
    offsetY = e.clientY - canvas.value.offsetTop;
  }
  pos.x = parseInt(offsetX);
  pos.y = parseInt(offsetY);
};

let pos = { x: 0, y: 0 };

const draw = (e) => {
  if (!e.buttons) return; // if mouse is not clicked, do not go further

  ctx.value.beginPath();
  ctx.value.lineWidth = brushThickness.value;
  ctx.value.lineCap = "round";
  ctx.value.strokeStyle = color.value;
  ctx.value.moveTo(pos.x, pos.y);
  setPosition(e);
  ctx.value.lineTo(pos.x, pos.y);
  ctx.value.closePath();
  ctx.value.stroke();
};

onMounted(() => {
  canvas.value = document.getElementById("draw");
  ctx.value = canvas.value.getContext("2d");
  resizeCanvas();

  window.addEventListener("resize", resizeCanvas);
  document.addEventListener("mousemove", draw);
  document.addEventListener("mousedown", setPosition);
  document.addEventListener("mouseenter", setPosition);
  document.addEventListener("touchmove", draw);
  document.addEventListener("touchend", setPosition);
  document.addEventListener("touchstart", setPosition);
  document
    .getElementById("color-picker")
    .addEventListener("change", changeColor);
});

onUnmounted(() => {
  window.removeEventListener("resize", resizeCanvas);
  document.removeEventListener("mousemove", draw);
  document.removeEventListener("mousedown", setPosition);
  document.removeEventListener("mouseenter", setPosition);
  document.removeEventListener("touchmove", draw);
  document.removeEventListener("touchend", setPosition);
  document.removeEventListener("touchstart", setPosition);
});
</script>
