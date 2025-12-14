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
    <div class="content-wrapper">
      <div class="dreams-stack" @click="nextDream">
        <div
          v-for="(dream, i) in dreams"
          :key="i"
          class="dream-sheet"
          :class="{ active: i === currentDream }"
          :style="{ zIndex: dreams.length - i, left: (i - currentDream) * 8 + 'px', top: (i - currentDream) * 8 + 'px' }"
        >
          <div class="dream-image">
            <img v-if="dream.img" :src="dream.img" alt="Imagen del sueño" />
          </div>
          <div class="dream-content">
            {{ dream.text }}
          </div>
        </div>
        <div class="dreams-tip">Haz click para cambiar de hoja</div>
      </div>
      
      <div class="flux-capacitor-container">
        <div class="flux-capacitor">
          <div class="flux-arm arm1"></div>
          <div class="flux-arm arm2"></div>
          <div class="flux-arm arm3"></div>
          <div class="flux-center"></div>
        </div>
      </div>
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
  padding: 60px 20px 40px;
  overflow-x: hidden;
}

.location-title {
  color: #00ffe7;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 4px #00ffe7, 1px 1px 0 #222;
  text-align: center;
}

.location-desc {
  font-size: 0.8rem;
  max-width: 400px;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.4;
  padding: 0 10px;
}

.content-wrapper {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  min-height: 500px;
  gap: 100px;
  margin-top: 20px;
  padding: 0 40px;
}

.flux-capacitor-container {
  position: relative;
  width: 260px;
  height: 330px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.flux-capacitor {
  position: relative;
  width: 200px;
  height: 280px;
  background: #222;
  border: 4px solid #666;
  border-radius: 28px;
  box-shadow: 0 0 24px #00ffe7aa, 0 0 0 6px #111 inset;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flux-arm {
  position: absolute;
  width: 14px;
  background: #444;
  border-radius: 5px;
  left: 50%;
  top: 80px;
  transform-origin: top center;
  box-shadow: 0 0 12px #00ffe7aa, 0 0 24px #00ffe744;
  animation: flux-glow 2.2s infinite alternate;
}

.flux-arm.arm1 {
  height: 200px;
  transform: translateX(-50%) rotate(0deg);
}

.flux-arm.arm2 {
  height: 110px;
  transform: translateX(-50%) rotate(120deg);
}

.flux-arm.arm3 {
  height: 110px;
  transform: translateX(-50%) rotate(240deg);
}

.flux-center {
  position: absolute;
  left: 50%;
  top: 80px;
  width: 36px;
  height: 36px;
  background: #111;
  border: 4px solid #00ffe7;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 12px #00ffe7cc;
  z-index: 2;
}

@keyframes flux-glow {
  0% {
    box-shadow: 0 0 8px #00ffe7aa, 0 0 16px #00ffe744;
  }
  100% {
    box-shadow: 0 0 32px #00ffe7ff, 0 0 64px #00ffe744;
  }
}

.dreams-stack {
  position: relative;
  width: 300px;
  height: 170px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  flex-shrink: 0;
}

.dream-sheet {
  width: 300px;
  height: 170px;
  font-size: 0.75rem;
  padding: 1.25em;
  position: absolute;
  background: #fffbe7;
  border: 1px solid #e0c97a;
  border-radius: 9px;
  transition: all 0.4s cubic-bezier(.77,0,.18,1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #222;
  opacity: 0;
  pointer-events: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.dream-sheet.active {
  opacity: 1;
  pointer-events: auto;
  transform: scale(1.04) rotate(-2deg);
}

.dream-content {
  text-align: center;
  width: 100%;
  font-weight: 500;
}

.dream-image {
  width: 100%;
  height: 70px;
  margin-bottom: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5eecb;
  border-radius: 6px;
  overflow: hidden;
  border: 0.75px solid #e0c97a;
}

.dream-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
}

.dreams-tip {
  position: absolute;
  bottom: -70px;
  left: 50%;
  transform: translateX(-50%);
  width: 120%;
  text-align: center;
  color: #00ffe7;
  font-size: 0.65rem;
  opacity: 0.7;
  letter-spacing: 1px;
  white-space: nowrap;
}

.back-arrow {
  position: absolute;
  top: 12px;
  left: 16px;
  font-size: 1.25rem;
  color: #00ffe7;
  text-decoration: none;
  z-index: 200;
  transition: color 0.2s, transform 0.2s;
  user-select: none;
}

.back-arrow:hover {
  color: #00bfae;
  transform: scale(1.15) translateX(-3px);
}

/* Tablets grandes */
@media (max-width: 1024px) {
  .content-wrapper {
    gap: 70px;
    padding: 0 30px;
  }

  .flux-capacitor-container {
    width: 220px;
    height: 280px;
  }

  .flux-capacitor {
    width: 170px;
    height: 240px;
  }

  .flux-arm {
    width: 12px;
    top: 68px;
  }

  .flux-arm.arm1 {
    height: 170px;
  }

  .flux-arm.arm2,
  .flux-arm.arm3 {
    height: 94px;
  }

  .flux-center {
    width: 30px;
    height: 30px;
    top: 68px;
  }

  .dreams-stack {
    width: 270px;
    height: 150px;
  }

  .dream-sheet {
    width: 270px;
    height: 150px;
    font-size: 0.7rem;
    padding: 1.1em;
  }

  .dream-image {
    height: 60px;
  }
}

/* Tablets y móviles landscape */
@media (max-width: 900px) {
  .content-wrapper {
    flex-direction: column;
    gap: 50px;
    min-height: auto;
    padding: 0 20px;
  }

  .dreams-stack {
    order: 1;
  }

  .flux-capacitor-container {
    order: 2;
  }
}

/* Móviles grandes */
@media (max-width: 640px) {
  .location-container {
    padding-top: 50px;
  }

  .location-title {
    font-size: 1.3rem;
  }

  .location-desc {
    font-size: 0.75rem;
    max-width: 350px;
    margin-bottom: 1.5rem;
  }

  .content-wrapper {
    gap: 40px;
    padding: 0 15px;
  }

  .flux-capacitor-container {
    width: 190px;
    height: 240px;
  }

  .flux-capacitor {
    width: 150px;
    height: 210px;
    border-width: 3px;
  }

  .flux-arm {
    width: 10px;
    top: 60px;
  }

  .flux-arm.arm1 {
    height: 150px;
  }

  .flux-arm.arm2,
  .flux-arm.arm3 {
    height: 82px;
  }

  .flux-center {
    width: 26px;
    height: 26px;
    top: 60px;
    border-width: 3px;
  }

  .dreams-stack {
    width: 240px;
    height: 135px;
  }

  .dream-sheet {
    width: 240px;
    height: 135px;
    font-size: 0.65rem;
    padding: 1em;
  }

  .dream-image {
    height: 52px;
    margin-bottom: 0.4em;
  }

  .dreams-tip {
    font-size: 0.6rem;
    bottom: -60px;
  }
}

/* Móviles estándar */
@media (max-width: 480px) {
  .location-title {
    font-size: 1.2rem;
  }

  .location-desc {
    font-size: 0.7rem;
    max-width: 300px;
  }

  .back-arrow {
    font-size: 1.1rem;
    top: 10px;
    left: 12px;
  }

  .content-wrapper {
    gap: 35px;
    padding: 0 10px;
  }

  .flux-capacitor-container {
    width: 160px;
    height: 200px;
  }

  .flux-capacitor {
    width: 125px;
    height: 175px;
    border-width: 3px;
    border-radius: 20px;
  }

  .flux-arm {
    width: 9px;
    top: 50px;
  }

  .flux-arm.arm1 {
    height: 125px;
  }

  .flux-arm.arm2,
  .flux-arm.arm3 {
    height: 68px;
  }

  .flux-center {
    width: 22px;
    height: 22px;
    top: 50px;
  }

  .dreams-stack {
    width: 210px;
    height: 120px;
  }

  .dream-sheet {
    width: 210px;
    height: 120px;
    font-size: 0.6rem;
    padding: 0.9em;
    border-radius: 7px;
  }

  .dream-image {
    height: 46px;
  }

  .dreams-tip {
    font-size: 0.58rem;
    bottom: -55px;
  }
}

/* Móviles pequeños */
@media (max-width: 360px) {
  .location-title {
    font-size: 1.1rem;
  }

  .location-desc {
    font-size: 0.65rem;
    max-width: 270px;
  }

  .flux-capacitor-container {
    width: 140px;
    height: 175px;
  }

  .flux-capacitor {
    width: 110px;
    height: 155px;
  }

  .flux-arm {
    width: 8px;
    top: 44px;
  }

  .flux-arm.arm1 {
    height: 110px;
  }

  .flux-arm.arm2,
  .flux-arm.arm3 {
    height: 60px;
  }

  .flux-center {
    width: 20px;
    height: 20px;
    top: 44px;
  }

  .dreams-stack {
    width: 185px;
    height: 105px;
  }

  .dream-sheet {
    width: 185px;
    height: 105px;
    font-size: 0.55rem;
    padding: 0.8em;
  }

  .dream-image {
    height: 40px;
  }

  .dreams-tip {
    font-size: 0.55rem;
    bottom: -50px;
  }
}

/* Orientación horizontal */
@media (max-height: 600px) and (orientation: landscape) {
  .location-container {
    padding-top: 40px;
    padding-bottom: 30px;
  }

  .location-desc {
    margin-bottom: 1rem;
  }

  .content-wrapper {
    flex-direction: row;
    gap: 40px;
    min-height: 300px;
  }

  .dreams-stack {
    order: 0;
  }

  .flux-capacitor-container {
    order: 0;
    width: 140px;
    height: 180px;
  }

  .flux-capacitor {
    width: 110px;
    height: 155px;
  }

  .dreams-stack {
    width: 200px;
    height: 115px;
  }

  .dream-sheet {
    width: 200px;
    height: 115px;
    font-size: 0.6rem;
  }

  .dream-image {
    height: 45px;
  }

  .dreams-tip {
    bottom: -45px;
  }
}
</style>