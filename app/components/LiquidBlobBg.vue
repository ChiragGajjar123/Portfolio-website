<template>
  <div class="liquid-bg-canvas" aria-hidden="true">
    <!-- Grid overlay pattern -->
    <div class="grid-mesh-overlay"></div>

    <!-- Animated fluid orbs -->
    <div class="liquid-orb orb-cyan"></div>
    <div class="liquid-orb orb-indigo"></div>
    <div class="liquid-orb orb-violet"></div>
    <div class="liquid-orb orb-rose"></div>
  </div>
</template>

<style scoped>
.liquid-bg-canvas {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
  background-color: #050711;
  background-image: 
    radial-gradient(at 0% 0%, rgba(13, 22, 48, 0.6) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(18, 10, 36, 0.7) 0px, transparent 50%),
    radial-gradient(at 50% 50%, rgba(4, 30, 38, 0.3) 0px, transparent 50%);
}

.grid-mesh-overlay {
  position: absolute;
  inset: 0;
  background-size: 40px 40px;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  mask-image: radial-gradient(ellipse at center, black 40%, transparent 85%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 40%, transparent 85%);
}

.liquid-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.45;
  mix-blend-mode: screen;
}

.orb-cyan {
  width: 520px;
  height: 520px;
  top: -120px;
  left: 15%;
  background: radial-gradient(circle, #00f5d4 0%, rgba(0, 245, 212, 0) 70%);
  animation: floatSlow 20s infinite ease-in-out;
}

.orb-indigo {
  width: 600px;
  height: 600px;
  top: 25%;
  right: -100px;
  background: radial-gradient(circle, #6366f1 0%, rgba(99, 102, 241, 0) 70%);
  animation: floatReverse 24s infinite ease-in-out;
}

.orb-violet {
  width: 500px;
  height: 500px;
  bottom: -100px;
  left: 10%;
  background: radial-gradient(circle, #8b5cf6 0%, rgba(139, 92, 246, 0) 70%);
  animation: floatSlow 22s infinite ease-in-out 4s;
}

.orb-rose {
  width: 450px;
  height: 450px;
  bottom: 20%;
  right: 25%;
  background: radial-gradient(circle, #f43f5e 0%, rgba(244, 63, 94, 0) 70%);
  opacity: 0.3;
  animation: floatReverse 28s infinite ease-in-out 2s;
}

@keyframes floatSlow {
  0%, 100% {
    transform: translate(0px, 0px) scale(1);
  }
  50% {
    transform: translate(60px, -45px) scale(1.1);
  }
}

@keyframes floatReverse {
  0%, 100% {
    transform: translate(0px, 0px) scale(1);
  }
  50% {
    transform: translate(-50px, 50px) scale(0.95);
  }
}

</style>
