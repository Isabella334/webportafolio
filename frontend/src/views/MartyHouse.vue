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
  name: 'MartyRoom',
  data() {
    return {
      posters: [
        { img: '/posters/interes1.jpg', alt: 'Back To The Future', desc: 'Back to the Future es mi trilogía favorita' },
        { img: '/posters/interes2.jpg', alt: '¿Cómo entrenar a tu dragón?', desc: 'Es mi película animada favorita porque mezcla aventura y creatividad.' },
        { img: '/posters/interes3.jpg', alt: 'Orcas', desc: 'Las orcas son mi animal favorito porque son seres muy inteligentes y bellos.' },
        { img: '/posters/interes4.jpg', alt: 'Nadar', desc: 'Nadar es una de mis pasiones; lo practico desde hace años.' },
        { img: '/posters/interes5.jpg', alt: 'Cine', desc: 'Me fascina el cine y todo lo que hay detrás de la industria cinematográfica.' },
        { img: '/posters/interes6.jpg', alt: 'Robótica', desc: 'Me encanta trabajar en proyectos de robótica porque me permiten construir y dar vida a ideas tangibles.' },
        { img: '/posters/interes7.jpg', alt: 'Videojuegos', desc: 'Me apasionan los videojuegos porque permiten conectar creativamente con distintos públicos, Me gustaría crear juegos educativos.' },
        { img: '/posters/interes8.jpg', alt: 'Viajar', desc: 'Viajar me gusta mucho; conocer nuevos lugares y culturas me llena de energía y nuevas ideas.' }
      ],
      flippedPoster: null
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
  margin-bottom: 1rem;
  line-height: 1.4;
  padding: 0 10px;
}

.room {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1400px;
  min-height: 400px;
  margin-top: 2em;
  overflow: visible;
  align-items: center;
  justify-content: center;
  gap: 40px;
}

.room-left {
  position: relative;
  width: 350px;
  min-width: 260px;
  height: 260px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-shrink: 0;
}

.room-right {
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  min-width: 0;
}

.bed-bookshelf {
  position: absolute;
  left: 20px;
  bottom: 100px;
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

.bed-pillow {
  position: absolute;
  left: 50px;
  bottom: 80px;
  width: 160px;
  height: 55px;
  background: #fff;
  border-radius: 32px 32px 40px 40px;
  box-shadow: 0 2px 12px #0003;
  border: 4px solid #e0e0e0;
  z-index: 2;
}

.bed {
  position: absolute;
  left: 30px;
  bottom: 0;
  width: 240px;
  height: 100px;
  background: #bfa76a;
  border-radius: 48px 48px 0 0;
  box-shadow: 0 8px 32px #0007;
  border: 8px solid #8c6e3f;
  z-index: 3;
}

.nightstand {
  position: absolute;
  left: 285px;
  bottom: 0;
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

.posters-grid {
  display: flex;
  flex-direction: column;
  gap: 3em;
  align-items: flex-start;
  margin-left: 10px;
  z-index: 10;
  position: relative;
  width: 100%;
  max-width: 900px;
}

.posters-row {
  display: flex;
  gap: 7em;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
}

.poster {
  width: 140px;
  height: 200px;
  perspective: 900px;
  background: transparent;
  border: none;
  box-shadow: none;
  position: relative;
  cursor: pointer;
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
  background: transparent;
  padding: 0;
}

.poster-back {
  background: #222;
  color: #00ffe7;
  transform: rotateY(180deg);
  justify-content: center;
  padding: 1em 0.6em;
  font-size: 0.75rem;
  text-align: center;
  line-height: 1.4;
}

.poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sleep-zs {
  position: absolute;
  left: 110px;
  bottom: 120px;
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

.rot0 { transform: rotate(-4deg); }
.rot1 { transform: rotate(2deg); }
.rot2 { transform: rotate(-2.5deg); }
.rot3 { transform: rotate(3.5deg); }
.rot4 { transform: rotate(-1.5deg); }
.rot5 { transform: rotate(2.5deg); }
.rot6 { transform: rotate(-3deg); }
.rot7 { transform: rotate(4deg); }

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
  transform: scale(1.15) translateX(-6px);
}

/* Tablets grandes */
@media (max-width: 1024px) {
  .room {
    gap: 30px;
  }

  .posters-row {
    gap: 4em;
  }

  .poster {
    width: 125px;
    height: 178px;
  }
}

/* Tablets y móviles landscape */
@media (max-width: 900px) {
  .room {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }

  .room-left {
    width: 300px;
    height: 220px;
    order: 2;
  }

  .room-right {
    order: 1;
  }

  .bed-bookshelf {
    width: 220px;
    height: 75px;
    left: 15px;
    bottom: 85px;
  }

  .bed-pillow {
    width: 135px;
    height: 46px;
    left: 40px;
    bottom: 68px;
  }

  .bed {
    width: 200px;
    height: 85px;
    left: 25px;
  }

  .nightstand {
    left: 240px;
    width: 45px;
    height: 55px;
  }

  .sleep-zs {
    left: 95px;
    bottom: 102px;
  }

  .posters-grid {
    margin-left: 0;
    align-items: center;
  }

  .posters-row {
    gap: 2.5em;
    justify-content: center;
  }

  .poster {
    width: 130px;
    height: 185px;
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
  }

  .room-left {
    width: 260px;
    height: 190px;
  }

  .bed-bookshelf {
    width: 190px;
    height: 65px;
    left: 12px;
    bottom: 73px;
    border-width: 3px;
  }

  .bed-bookshelf::before {
    margin-top: 25px;
  }

  .bed-bookshelf::after {
    margin-bottom: 25px;
  }

  .bed-pillow {
    width: 115px;
    height: 40px;
    left: 35px;
    bottom: 58px;
    border-width: 3px;
  }

  .bed {
    width: 170px;
    height: 73px;
    left: 22px;
    border-width: 6px;
  }

  .nightstand {
    left: 205px;
    width: 38px;
    height: 48px;
  }

  .nightstand-table {
    width: 38px;
    height: 7px;
    border-width: 2px;
  }

  .nightstand-leg {
    width: 5px;
    height: 38px;
    border-width: 2px;
    top: 15px;
  }

  .sleep-zs {
    left: 80px;
    bottom: 88px;
  }

  .sleep-z {
    font-size: 0.95rem;
  }

  .sleep-z.z2 {
    font-size: 1.15rem;
  }

  .sleep-z.z3 {
    font-size: 1.35rem;
  }

  .posters-row {
    gap: 2em;
  }

  .poster {
    width: 110px;
    height: 157px;
  }

  .poster-back {
    font-size: 0.68rem;
    padding: 0.8em 0.5em;
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

  .room-left {
    width: 220px;
    height: 160px;
  }

  .bed-bookshelf {
    width: 160px;
    height: 55px;
    left: 10px;
    bottom: 62px;
  }

  .bed-bookshelf::before {
    margin-top: 20px;
  }

  .bed-bookshelf::after {
    margin-bottom: 20px;
  }

  .bed-pillow {
    width: 95px;
    height: 33px;
    left: 28px;
    bottom: 48px;
  }

  .bed {
    width: 140px;
    height: 60px;
    left: 18px;
    border-width: 5px;
  }

  .nightstand {
    left: 170px;
    width: 32px;
    height: 40px;
  }

  .nightstand-table {
    width: 32px;
    height: 6px;
  }

  .nightstand-leg {
    width: 4px;
    height: 32px;
    top: 12px;
  }

  .sleep-zs {
    left: 65px;
    bottom: 73px;
  }

  .sleep-z {
    font-size: 0.85rem;
  }

  .sleep-z.z2 {
    font-size: 1rem;
    left: 12px;
  }

  .sleep-z.z3 {
    font-size: 1.2rem;
    left: 25px;
  }

  .posters-grid {
    gap: 2em;
  }

  .posters-row {
    gap: 1.5em;
  }

  .poster {
    width: 95px;
    height: 136px;
  }

  .poster-back {
    font-size: 0.62rem;
    padding: 0.7em 0.4em;
  }
}

/* Móviles pequeños */
@media (max-width: 360px) {
  .location-title {
    font-size: 1.1rem;
  }

  .location-desc {
    font-size: 0.65rem;
    max-width: 260px;
  }

  .room-left {
    width: 190px;
    height: 140px;
  }

  .bed-bookshelf {
    width: 140px;
    height: 48px;
    left: 8px;
    bottom: 54px;
  }

  .bed-pillow {
    width: 82px;
    height: 28px;
    left: 24px;
    bottom: 42px;
  }

  .bed {
    width: 120px;
    height: 52px;
    left: 15px;
    border-width: 4px;
  }

  .nightstand {
    left: 148px;
    width: 28px;
    height: 35px;
  }

  .nightstand-table {
    width: 28px;
    height: 5px;
  }

  .nightstand-leg {
    width: 3px;
    height: 28px;
    top: 10px;
  }

  .sleep-zs {
    left: 56px;
    bottom: 63px;
  }

  .poster {
    width: 85px;
    height: 121px;
  }

  .poster-back {
    font-size: 0.58rem;
    padding: 0.6em 0.4em;
  }
}
</style>