<template>
  <div class="map-container">
    <router-link to="/" class="back-arrow" title="Regresar a inicio">
      <span>⬅</span>
    </router-link>
    <h1 class="map-title">BIENVENIDO A HILL VALLEY</h1>
    <div class="map-content">
      <p>Cada ubicación representa una categoría diferente ¡Explora con libertad!</p>
    </div>
    <div class="map-images">
      <div
        v-for="(img, i) in images"
        :key="i"
        class="map-img-wrapper"
        :class="`location-${i}`"
      >
        <img
          :src="img.src"
          :alt="img.alt"
          class="map-img"
          @click="goTo(img.route)"
          @mouseenter="hovered = i"
          @mouseleave="hovered = null"
          style="cursor:pointer;"
        />
        <span
          v-if="hovered === i"
          class="map-tooltip"
        >
          {{ img.alt }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Map',
  data() {
    return {
      hovered: null,
      images: [
        {
          src: '/CourthouseSquare.png',
          alt: 'Courthouse Square',
          route: '/courthouse'
        },
        {
          src: '/DocBrownHouse.png',
          alt: 'Doc Brown House',
          route: '/docbrown'
        },
        {
          src: '/HillValleyHighSchool.png',
          alt: 'Hill Valley High School',
          route: '/highschool'
        },
        {
          src: '/MartyHouse.png',
          alt: 'Marty House',
          route: '/martyhouse'
        },
        {
          src: '/TimeMachine.png',
          alt: 'Time Machine',
          route: '/timemachine'
        }
      ]
    }
  },
  methods: {
    goTo(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.map-container {
  min-height: 100vh;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  position: relative;
  overflow-x: hidden;
}

.back-arrow {
  position: absolute;
  top: 24px;
  left: 32px;
  font-size: 2.5rem;
  color: #00ffe7;
  text-decoration: none;
  z-index: 20;
  transition: color 0.2s, transform 0.2s;
  user-select: none;
}

.back-arrow:hover {
  color: #00bfae;
  transform: scale(1.15) translateX(-6px);
}

.map-title {
  color: #00ffe7;
  font-size: 3rem;
  margin-top: 40px;
  margin-bottom: 2px;
  text-align: center;
  letter-spacing: 2px;
  text-shadow:
    0 0 8px #00ffe7,
    0 0 16px #00ffe7,
    2px 2px 0 #222;
  position: relative;
  animation: neon-flicker 2s linear forwards;
  overflow: hidden;
  padding: 0 20px;
}

@keyframes neon-flicker {
  0% {
    opacity: 0;
    text-shadow: none;
  }
  10% {
    opacity: 1;
    text-shadow: 0 0 2px #00ffe7;
  }
  15% {
    opacity: 0.4;
    text-shadow: none;
  }
  20% {
    opacity: 1;
    text-shadow: 0 0 8px #00ffe7, 0 0 16px #00ffe7;
  }
  25% {
    opacity: 0.6;
    text-shadow: none;
  }
  30% {
    opacity: 1;
    text-shadow: 0 0 8px #00ffe7, 0 0 16px #00ffe7;
  }
  35% {
    opacity: 0.7;
    text-shadow: none;
  }
  40% {
    opacity: 1;
    text-shadow: 0 0 8px #00ffe7, 0 0 16px #00ffe7;
  }
  100% {
    opacity: 1;
    text-shadow:
      0 0 8px #00ffe7,
      0 0 16px #00ffe7,
      2px 2px 0 #222;
  }
}

.map-content {
  color: #fff;
  text-align: center;
  font-size: 1.5rem;
  padding: 0 20px;
  margin-bottom: 20px;
}

.map-images {
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 40px;
  min-height: 500px;
}

.map-img-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Posicionamiento específico para desktop */
.location-0 {
  grid-column: 1;
  grid-row: 1;
}

.location-1 {
  grid-column: 2;
  grid-row: 1;
}

.location-2 {
  grid-column: 3;
  grid-row: 1;
}

.location-3 {
  grid-column: 1;
  grid-row: 2;
}

.location-4 {
  grid-column: 3;
  grid-row: 2;
}

.map-img {
  display: block;
  width: 100%;
  max-width: 200px;
  height: auto;
  transition: transform 0.2s;
}

.map-img:hover {
  transform: scale(1.1);
  z-index: 2;
}

.map-tooltip {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(8px);
  background: transparent;
  color: #00ffe7;
  padding: 0.7em 2em;
  border: 2px solid #00ffe7;
  border-radius: 10px;
  white-space: nowrap;
  font-size: 1rem;
  font-weight: bold;
  pointer-events: none;
  box-shadow: 0 2px 16px #00ffe7;
  z-index: 10;
  text-shadow: 0 1px 4px #fff, 0 0 2px #00ffe7;
  animation: tooltip-fade 0.2s;
}

/* Tablets y pantallas medianas */
@media (max-width: 1024px) {
  .map-title {
    font-size: 2.5rem;
    margin-top: 30px;
  }

  .map-content {
    font-size: 1.3rem;
  }

  .back-arrow {
    font-size: 2rem;
    top: 20px;
    left: 20px;
  }

  .map-images {
    gap: 30px;
    padding: 15px;
  }

  .map-img {
    max-width: 160px;
  }
}

/* Tablets pequeñas */
@media (max-width: 768px) {
  .map-title {
    font-size: 2rem;
    margin-top: 20px;
  }

  .map-content {
    font-size: 1.1rem;
  }

  .back-arrow {
    font-size: 1.8rem;
    top: 15px;
    left: 15px;
  }

  .map-images {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 25px;
    padding: 10px;
  }

  /* Reorganizar en 2 columnas */
  .location-0 {
    grid-column: 1;
    grid-row: 1;
  }

  .location-1 {
    grid-column: 2;
    grid-row: 1;
  }

  .location-2 {
    grid-column: 1;
    grid-row: 2;
  }

  .location-3 {
    grid-column: 2;
    grid-row: 2;
  }

  .location-4 {
    grid-column: 1 / 3;
    grid-row: 3;
    justify-self: center;
  }

  .map-img {
    max-width: 140px;
  }

  .map-tooltip {
    font-size: 0.9rem;
    padding: 0.5em 1.5em;
    transform: translateX(-50%) translateY(8px);
  }
}

/* Móviles */
@media (max-width: 480px) {
  .map-title {
    font-size: 1.5rem;
    letter-spacing: 1px;
    margin-top: 60px;
  }

  .map-content {
    font-size: 0.95rem;
    margin-bottom: 10px;
  }

  .back-arrow {
    font-size: 1.5rem;
    top: 12px;
    left: 12px;
  }

  .map-images {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 10px;
    min-height: auto;
  }

  .location-0,
  .location-1,
  .location-2,
  .location-3,
  .location-4 {
    grid-column: 1;
    grid-row: auto;
  }

  .map-img {
    max-width: 180px;
  }

  .map-tooltip {
    font-size: 0.85rem;
    padding: 0.4em 1em;
    transform: translateX(-50%) translateY(5px);
  }
}

@media (max-width: 360px) {
  .map-title {
    font-size: 1.3rem;
  }

  .map-content {
    font-size: 0.85rem;
  }

  .map-img {
    max-width: 150px;
  }
}
</style>