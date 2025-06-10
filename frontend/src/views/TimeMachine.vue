<template>
  <div class="location-container">
    <router-link to="/mapa" class="back-arrow" title="Regresar al mapa">
      <span>⬅</span>
    </router-link>
    <h1 class="location-title">Máquina del tiempo</h1>
    <p class="location-desc">
      ¡Estás dentro del DeLorean! 
El condensador de flujo brilla intensamente. A tu izquierda están las hojas del sueño original del Doc, ¡pero ahora muestran los sueños y metas del futuro de quien creó este portafolio! Haz clic y viaja por sus aspiraciones.
    </p>
    <!-- Puedes agregar más contenido aquí -->
    <div class="flux-capacitor-container">
      <div class="flux-capacitor">
        <div class="flux-arm arm1"></div>
        <div class="flux-arm arm2"></div>
        <div class="flux-arm arm3"></div>
        <div class="flux-center"></div>
      </div>
    </div>
    <div class="dreams-stack" @click="nextDream">
      <div
        v-for="(dream, i) in dreams"
        :key="i"
        class="dream-sheet"
        :class="{ active: i === currentDream }"
        :style="{ zIndex: dreams.length - i, left: (i - currentDream) * 8 + 'px', top: (i - currentDream) * 8 + 'px' }"
      >
        <div class="dream-image">
          <!-- Cuando tengas la imagen, pon la ruta en dream.img -->
          <img v-if="dream.img" :src="dream.img" alt="Imagen del sueño" />
        </div>
        <div class="dream-content">
          {{ dream.text }}
        </div>
      </div>
      <div class="dreams-tip">Haz click para cambiar de hoja</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeMachine',
  data() {
    return {
      dreams: [
        { text: 'Estudiar un MBA en Harvard', img: '/futuro/sueno1.png' },
        { text: 'Estudiar una maestría en MIT', img: '/futuro/sueno2.png' },
        { text: 'Crear una startup tecnológica', img: '/futuro/sueno3.jpg' },
        { text: 'Participar en proyectos de robótica', img: '/futuro/sueno4.jpg' },
        { text: 'Crear una aplicación educativa', img: '/futuro/sueno5.jpg' },
        { text: 'Ayudar a inspirar a más mujeres en tecnología', img: '/futuro/sueno6.jpg' },
        { text: 'Vivir una temporada en Suiza', img: '/futuro/sueno7.jpg' },
        { text: 'Contribuir a un avance científico importante', img: '/futuro/sueno8.jpg' }
      ],
      currentDream: 0
    }
  },
  methods: {
    nextDream() {
      this.currentDream = (this.currentDream + 1) % this.dreams.length;
    }
  }
}
</script>

<style scoped>
.location-container {
  min-height: 100vh;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 60px;
}

.location-title {
  color: #00ffe7;
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 8px #00ffe7, 2px 2px 0 #222;
}

.location-desc {
  font-size: 1.3rem;
  max-width: 600px;
  text-align: center;
  margin-bottom: 2rem;
}

.flux-capacitor-container {
  position: absolute;
  right: 14vw;           /* más cerca del centro */
  top: 50%;
  transform: translateY(-50%);
  width: 520px;          /* antes 420px */
  height: 660px;         /* antes 540px */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.flux-capacitor {
  position: relative;
  width: 400px;          /* antes 320px */
  height: 560px;         /* antes 440px */
  background: #222;
  border: 8px solid #666;
  border-radius: 56px;
  box-shadow: 0 0 48px #00ffe7aa, 0 0 0 12px #111 inset;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flux-arm {
  position: absolute;
  width: 28px;
  background: #444;
  border-radius: 10px;
  left: 50%;
  top: 160px; /* más abajo para el nuevo tamaño */
  transform-origin: top center;
  box-shadow: 0 0 24px #00ffe7aa, 0 0 48px #00ffe744;
  animation: flux-glow 2.2s infinite alternate;
}

.flux-arm.arm1 {
  height: 400px; /* vertical, más largo */
  transform: translateX(-50%) rotate(0deg);
}
.flux-arm.arm2 {
  height: 220px;
  transform: translateX(-50%) rotate(120deg); /* diagonal izquierda */
}
.flux-arm.arm3 {
  height: 220px;
  transform: translateX(-50%) rotate(240deg); /* diagonal derecha */
}

.flux-center {
  position: absolute;
  left: 50%;
  top: 160px;
  width: 72px;
  height: 72px;
  background: #111;
  border: 8px solid #00ffe7;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 24px #00ffe7cc;
  z-index: 2;
}

@keyframes flux-zap {
  0% { transform: scale(1) rotate(0deg);}
  100% { transform: scale(1.08) rotate(20deg);}
}

.dreams-stack {
  position: absolute;
  left: 14vw;            /* más cerca del centro */
  top: 50%;
  transform: translateY(-50%);
  width: 420px;          /* más grande */
  height: 340px;
  cursor: pointer;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}

.dream-sheet {
  width: 600px;          /* más grande */
  height: 340px;         /* más grande */
  font-size: 1.5rem;
  padding: 2.5em;
  position: absolute;
  background: #fffbe7;
  border: 2px solid #e0c97a;
  border-radius: 18px;
  transition: all 0.4s cubic-bezier(.77,0,.18,1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: #222;
  padding: 2em;
  opacity: 0;
  pointer-events: none;
}

.dream-sheet.active {
  opacity: 1;
  pointer-events: auto;
  transform: scale(1.04) rotate(-2deg);
}

.dream-content {
  text-align: center;
  width: 100%;
}

.dream-image {
  width: 100%;
  height: 140px;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5eecb;
  border-radius: 12px;
  overflow: hidden;
  border: 1.5px solid #e0c97a;
}

.dream-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
}

.dreams-tip {
  position: absolute;
  bottom: -190px;
  left: 90px;
  width: 100%;
  text-align: center;
  color: #00ffe7;
  font-size: 1.3rem;
  opacity: 0.7;
  letter-spacing: 1px;
  z-index: 10;
}

@keyframes ray-flicker {
  0% { stroke-dashoffset: 0; opacity: 1; }
  50% { stroke-dashoffset: 10; opacity: 0.7; }
  100% { stroke-dashoffset: 20; opacity: 1; }
}

@keyframes flux-glow {
  0% {
    box-shadow: 0 0 16px #00ffe7aa, 0 0 32px #00ffe744;
  }
  50% {
    box-shadow: 0 0 48px #00ffe7ff, 0 0 96px #00ffe799;
  }
  100% {
    box-shadow: 0 0 16px #00ffe7aa, 0 0 32px #00ffe744;
  }
}

.back-arrow {
  position: absolute;
  top: 24px;
  left: 32px;
  font-size: 2.5rem;
  color: #00ffe7;
  text-decoration: none;
  z-index: 30;
  transition: color 0.2s, transform 0.2s;
  user-select: none;
}
.back-arrow:hover {
  color: #00bfae;
  transform: scale(1.15) translateX(-6px);
}
</style>