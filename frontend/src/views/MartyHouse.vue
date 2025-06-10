<template>
  <div class="location-container">
    <router-link to="/mapa" class="back-arrow" title="Regresar al mapa">
      <span>⬅</span>
    </router-link>
    <h1 class="location-title">Habitación de Marty</h1>
    <p class="location-desc">
      Bienvenido a la habitación de Marty 
Echa un vistazo a los pósters colgados por todo el cuarto. Cada uno revela un gusto, una pasión, una parte especial de la personalidad de la desarrolladora. Haz clic y sumérgete en su mundo personal.
    </p>
    <div class="room">
      <div class="room-left">
        <div class="bed-bookshelf"></div>
        <div class="bed-pillow"></div>
        <div class="bed"></div>
        <div class="nightstand">
          <div class="nightstand-table"></div>
          <div class="nightstand-leg left"></div>
          <div class="nightstand-leg right"></div>
        </div>
        <div class="sleep-zs">
          <span class="sleep-z z1">Z</span>
          <span class="sleep-z z2">Z</span>
          <span class="sleep-z z3">Z</span>
        </div>
      </div>
      <div class="room-right">
        <div class="posters-grid">
          <div class="posters-row">
            <div
              class="poster"
              v-for="(poster, i) in posters.slice(0, 4)"
              :key="'row1-' + i"
              :class="[{ flipped: flippedPoster === i }, 'rot' + i]"
              @click="flippedPoster = flippedPoster === i ? null : i"
            >
              <div class="poster-inner">
                <div class="poster-front">
                  <img :src="poster.img" :alt="poster.alt" />
                </div>
                <div class="poster-back">
                  {{ poster.desc }}
                </div>
              </div>
            </div>
          </div>
          <div class="posters-row">
            <div
              class="poster"
              v-for="(poster, i) in posters.slice(4, 8)"
              :key="'row2-' + i"
              :class="[{ flipped: flippedPoster === i + 4 }, 'rot' + (i + 4)]"
              @click="flippedPoster = flippedPoster === i + 4 ? null : i + 4"
            >
              <div class="poster-inner">
                <div class="poster-front">
                  <img :src="poster.img" :alt="poster.alt" />
                </div>
                <div class="poster-back">
                  {{ poster.desc }}
                </div>
              </div>
            </div>
          </div>
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
      posters: [
        { img: '/posters/interes1.jpg', alt: 'Back To The Future', desc: 'Back to the Future es mi trilogía favorita' },
        { img: '/posters/interes2.jpg', alt: '¿Cómo entrenar a tu dragón?', desc: 'Es mi película animada favorita porque mezcla aventura y creatividad.' },
        { img: '/posters/interes3.jpg', alt: 'Orcas', desc: 'Las orcas son mi animal favorito porque son seres muy inteligentes y bellos.' },
        { img: '/posters/interes4.jpg', alt: 'Nadar', desc: 'Nadar es una de mis pasiones; lo practico desde hace años.' },
        { img: '/posters/interes5.jpg', alt: 'Cine', desc: 'Me fascina el mundo del cine y estoy muy interesada en todo lo que hay detrás de la industria cinematográfica.' },
        { img: '/posters/interes6.jpg', alt: 'Robótica', desc: 'Me encanta trabajar en proyectos de robótica porque me permiten construir y dar vida a ideas tangibles.' },
        { img: '/posters/interes7.jpg', alt: 'Ciberseguridad', desc: 'Me atrae mucho la ciberseguridad y me gustaría especializarme en ella para ayudar a proteger sistemas y personas.' },
        { img: '/posters/interes8.jpg', alt: 'Viajar', desc: 'Viajar me gusta mucho; conocer nuevos lugares y culturas me llena de energía y nuevas ideas.' }
      ],
      flippedPoster: null
    }
  },
  methods: {
    flipPoster(index) {
      this.flippedPoster = this.flippedPoster === index ? null : index;
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
  font-size: 1.5rem; /* antes 3rem */
  margin-bottom: 0.5rem;
  text-shadow: 0 0 4px #00ffe7, 1px 1px 0 #222;
}

.location-desc {
  font-size: 0.65rem; /* antes 1.3rem */
  max-width: 300px;
  text-align: center;
  margin-bottom: 1rem;
}

.room {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80vh;
  min-height: 600px;
  margin-top: 2em;
  overflow: visible;
  align-items: flex-start;
  justify-content: center;
}

.room-left {
  position: relative;
  width: 350px; /* Ajusta según el tamaño de la cama y muebles */
  min-width: 260px;
  height: 100%;
}

.room-right {
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
}

/* Estantería detrás de la cama */
.bed-bookshelf {
  position: absolute;
  left: 20px;
  bottom: 160px; /* antes 430px, ahora más baja y detrás de la almohada */
  width: 260px;
  height: 90px;
  background: #7a5c3a;
  border: 4px solid #c9a87a;
  border-radius: 10px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.bed-bookshelf::before,
.bed-bookshelf::after {
  content: '';
  display: block;
  height: 0;
  border-top: 4px solid #c9a87a;
  width: 100%;
}
.bed-bookshelf::before {
  margin-top: 30px;
}
.bed-bookshelf::after {
  margin-bottom: 30px;
}

/* Almohada */
.bed-pillow {
  position: absolute;
  left: 50px;
  bottom: 125px; /* súbela un poco para que quede sobre la cama */
  width: 160px;
  height: 55px;      /* antes 70px */
  background: #fff;
  border-radius: 32px 32px 40px 40px;
  box-shadow: 0 2px 12px #0003;
  border: 4px solid #e0e0e0;
  z-index: 2;
}

/* Cama vista de frente */
.bed {
  position: absolute;
  left: 30px;
  bottom: 60px;
  width: 240px;
  height: 100px;
  background: #bfa76a;
  border-radius: 48px 48px 0 0; /* antes: 0 0 48px 48px */
  box-shadow: 0 8px 32px #0007;
  border: 8px solid #8c6e3f;
  z-index: 3;
}

/* Mesita de noche vista de frente */
.nightstand {
  position: absolute;
  left: 285px;
  bottom: 70px;
  width: 50px;
  height: 60px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
.nightstand-table {
  width: 50px;
  height: 9px;
  background: #7a5c3a;
  border-radius: 8px;
  border: 3px solid #c9a87a;
  position: absolute;
  top: 0;
  left: 0;
}
.nightstand-leg {
  width: 6px;
  height: 45px;
  background: #7a5c3a;
  border-radius: 6px;
  border: 3px solid #c9a87a;
  position: absolute;
  top: 18px;
}
.nightstand-leg.left {
  left: 5px;
}
.nightstand-leg.right {
  right: 5px;
}

/* Posters grid */
.posters-grid {
  display: flex;
  flex-direction: column;
  gap: 6em;
  align-items: flex-start;
  margin-left: 0; /* Elimina el margen grande */
  margin-top: 8px;
  z-index: 10;
  position: relative;
  width: 100%;
  max-width: 700px; /* Limita el ancho de los posters */
}
.posters-row {
  display: flex;
  gap: 7em; /* Ajusta este valor para la separación horizontal deseada */
  justify-content: flex-start; /* Los posters se agrupan a la izquierda del grid */
  width: 100%;
}

.poster {
  width: 200px;
  height: 140px;
  perspective: 900px;
  background: transparent;
  border: none;
  box-shadow: none;
  position: relative;
}

.poster-inner {
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(.77,0,.18,1);
  transform-style: preserve-3d;
  position: relative;
}

.poster.flipped .poster-inner {
  transform: rotateY(180deg);
}

.poster-front, .poster-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  box-shadow: 0 2px 16px #00ffe744;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.poster-front {
  background: transparent; /* Quita el fondo blanco */
  padding: 0;
}

.poster-back {
  background: #222;
  color: #00ffe7;
  transform: rotateY(180deg);
  justify-content: center;
  padding: 0.5em;
  font-size: 0.5rem;
  text-align: center;
}

.poster img {
  width: 100%;
  height: 100%;      /* Ocupa todo el alto del poster */
  object-fit: cover;
  border-bottom: none; /* Quita la línea inferior */
}

.poster-title {
  font-size: 1rem;
  color: #00bfae;
  text-align: center;
  padding: 0.5em 0.2em;
  font-weight: bold;
  width: 100%;
}

.sleep-zs {
  position: absolute;
  left: 110px;   /* Ajusta según la posición de la almohada */
  bottom: 185px; /* Ajusta para que salga de la almohada */
  z-index: 10;
  pointer-events: none;
}

.sleep-z {
  position: absolute;
  color: #00bfff;
  font-size: 1.1rem;
  font-family: 'Comic Sans MS', 'Comic Sans', cursive, sans-serif;
  opacity: 0.7;
  animation: sleep-z-float 2.5s linear infinite;
}

.sleep-z.z2 {
  left: 14px;
  font-size: 1.35rem;
  animation-delay: 0.7s;
  opacity: 0.6;
}
.sleep-z.z3 {
  left: 30px;
  font-size: 1.6rem;
  animation-delay: 1.4s;
  opacity: 0.5;
}

@keyframes sleep-z-float {
  0% {
    transform: translateY(0) scale(1) rotate(-10deg);
    opacity: 0.7;
  }
  60% {
    opacity: 1;
  }
  100% {
    transform: translateY(-70px) scale(1.2) rotate(10deg);
    opacity: 0;
  }
}

@keyframes sleep {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Rotaciones para simular posters mal pegados */
.rot0 { transform: rotate(-4deg); }
.rot1 { transform: rotate(2deg); }
.rot2 { transform: rotate(-2.5deg); }
.rot3 { transform: rotate(3.5deg); }
.rot4 { transform: rotate(-1.5deg); }
.rot5 { transform: rotate(2.5deg); }
.rot6 { transform: rotate(-3deg); }
.rot7 { transform: rotate(4deg); }

/* Estilos para el botón de regresar */
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
</style>