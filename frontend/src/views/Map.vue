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
        :style="img.style"
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
          route: '/courthouse',
          style: 'top: 30vh; left: 15vw; width: 18vw;'
        },
        {
          src: '/DocBrownHouse.png',
          alt: 'Doc Brown House',
          route: '/docbrown',
          style: 'top: 30vh; left: 40vw; width: 18vw;'
        },
        {
          src: '/HillValleyHighSchool.png',
          alt: 'Hill Valley High School',
          route: '/highschool',
          style: 'top: 30vh; left: 65vw; width: 18vw;'
        },
        {
          src: '/MartyHouse.png',
          alt: 'Marty House',
          route: '/martyhouse',
          style: 'top: 60vh; left: 25vw; width: 18vw;'
        },
        {
          src: '/TimeMachine.png',
          alt: 'Time Machine',
          route: '/timemachine',
          style: 'top: 60vh; left: 55vw; width: 18vw;'
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
}

.map-images {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
}

.map-img-wrapper {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: auto;
}

.map-img {
  display: block;
  height: auto;
  transition: transform 0.2s;
  max-width: 200px; /* antes 400px */
}

.map-img:hover {
  transform: scale(1.1);
  z-index: 2;
}

.map-tooltip {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
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
</style>
