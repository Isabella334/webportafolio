<template>
  <div class="location-container">
    <router-link to="/mapa" class="back-arrow" title="Regresar al mapa">
      <span>⬅</span>
    </router-link>
    <h1 class="location-title">Secundaria de Hill Valley</h1>
    <p class="location-desc">
      ¡Hora de clases en Hill Valley Highschool! 
Los casilleros esconden más que libros: en ellos están las habilidades técnicas, certificaciones y conocimientos que forman a la desarrolladora. Haz clic y descubre su preparación académica y profesional.
    </p>
    <div class="lockers-row">
      <div
        v-for="(locker, i) in lockers"
        :key="i"
        class="locker"
        :class="{ open: openLocker === i }"
        @click="toggleLocker(i)"
      >
        <div class="locker-door">
          <div class="locker-vents">
            <div class="locker-vent"></div>
            <div class="locker-vent"></div>
            <div class="locker-vent"></div>
          </div>
          <div class="locker-lock"></div>
          <span class="locker-number">{{ i + 1 }}</span>
        </div>
        <!-- Contenido único por casillero -->
        <div class="locker-content" v-if="openLocker === 0 && i === 0">
          <div class="skills-title">Dominio de Lenguajes</div>
          <div class="skills-chart-horizontal">
            <div class="skill-row" v-for="skill in skills" :key="skill.name">
              <span class="skill-label">{{ skill.name }}</span>
              <div class="skill-bar-bg">
                <div class="skill-bar" :style="{ width: skill.percent + '%' }">
                  <span class="skill-bar-value">{{ skill.percent }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="locker-content" v-if="openLocker === 1 && i === 1">
          <div class="education-title">Formación Académica</div>
          <div class="education-logos-row">
            <div class="education-item-row">
              <img src="/logos_educacion/suizo.png" alt="Colegio Suizo" class="education-logo" />
              <div class="education-desc">Graduada en bachillerato de ciencias y letras con orientación a computación</div>
            </div>
            <div class="education-item-row">
              <img src="/logos_educacion/uvg.jpg" alt="UVG" class="education-logo" />
              <div class="education-desc">Estudiante de ingeniería en ciencias de la computación y tecnologías de la información</div>
            </div>
          </div>
        </div>
        <div class="locker-content" v-if="openLocker === 2 && i === 2">
          <div class="languages-title">Idiomas</div>
          <div class="languages-grid">
            <div class="language-row">
              <span class="language-name">Español</span>
              <span class="language-stars">
                <span class="star filled">★</span>
                <span class="star filled">★</span>
                <span class="star filled">★</span>
                <span class="star filled">★</span>
                <span class="star filled">★</span>
              </span>
              <span class="language-level">Nativo</span>
            </div>
            <div class="language-row">
              <span class="language-name">Inglés</span>
              <span class="language-stars">
                <span class="star filled">★</span>
                <span class="star filled">★</span>
                <span class="star filled">★</span>
                <span class="star filled">★</span>
                <span class="star">★</span>
              </span>
              <span class="language-level">B2–C1</span>
            </div>
            <div class="language-row">
              <span class="language-name">Alemán</span>
              <span class="language-stars">
                <span class="star filled">★</span>
                <span class="star filled">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
                <span class="star">★</span>
              </span>
              <span class="language-level">A2</span>
            </div>
          </div>
          <div class="languages-desc">
            <span class="star filled">★</span> = Nivel alcanzado &nbsp;&nbsp;|&nbsp;&nbsp;
            <span class="star">★</span> = Nivel no alcanzado
          </div>
        </div>
        <div class="locker-content" v-if="openLocker === 3 && i === 3">
          <div class="extras-title">Extracurriculares</div>
          <div class="shelf-group">
            <div class="shelf">
              <div
                v-for="(curso, idx) in cursos.slice(0, 3)"
                :key="curso.titulo"
                class="trophy"
                @mouseenter="selectedTrophy = idx"
                @mouseleave="selectedTrophy = null"
                :title="curso.titulo"
              >🏅</div>
              <div class="shelf-board"></div>
            </div>
            <div class="shelf">
              <div
                v-for="(curso, idx) in cursos.slice(3, 5)"
                :key="curso.titulo"
                class="trophy"
                @mouseenter="selectedTrophy = idx + 3"
                @mouseleave="selectedTrophy = null"
                :title="curso.titulo"
              >🏅</div>
              <div class="shelf-board"></div>
            </div>
          </div>
          <transition name="fade">
            <div class="trophy-desc" v-if="selectedTrophy !== null">
              <div class="trophy-title">{{ cursos[selectedTrophy].titulo }}</div>
              <div class="trophy-text">{{ cursos[selectedTrophy].descripcion }}</div>
            </div>
          </transition>
        </div>
        <!-- ...y así sucesivamente... -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HighSchool',
  data() {
    return {
      lockers: Array(4).fill({}),
      openLocker: null,
      selectedTrophy: null,
      skills: [
        { name: 'Python', percent: 90 },
        { name: 'JavaScript', percent: 20 },
        { name: 'C', percent: 20 },
        { name: 'C++', percent: 40 },
        { name: 'SQL', percent: 45 },
        { name: 'Vue', percent: 50 },
        { name: 'Rust', percent: 10 },
        { name: 'Laravel', percent: 10 }
      ],
      cursos: [
        { titulo: 'Mundial CanSat 2025', descripcion: 'Miembro del único equipo centroamericano clasificado a la final del curso-concurso CanSat 2025' },
        { titulo: 'Quetzal-2', descripcion: 'Miembro del equipo de ciberseguridad para el CubeSat Quetzal-2' },
        { titulo: 'Auxiliar docente', descripcion: 'Auxiliar docente del curso de Algoritmos y Programación básica en la UVG' },
        { titulo: 'Mujeres en computación', descripcion: 'Miembro activo del club de Mujeres en Computación en la UVG' }
      ]
    }
  },
  methods: {
    toggleLocker(i) {
      this.openLocker = this.openLocker === i ? null : i
    }
  }
}
</script>

<style scoped>
.location-container {
  min-height: 100vh;
  background: #000000; 
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

.lockers-row {
  display: flex;
  gap: 1rem; 
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1800px; 
  width: 98vw;
}

.locker {
  width: 420px;      
  height: 680px;    
  background: #222;
  border: 3px solid #00ffe7;
  border-radius: 16px;
  position: relative;
  cursor: pointer;
  perspective: 1000px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transition: box-shadow 0.2s;
  box-shadow: 0 6px 40px #00ffe744;
  margin: 0;
}

.locker-door {
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, #222 70%, #00ffe7 100%);
  border-radius: 14px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  transition: transform 0.5s cubic-bezier(.77,0,.18,1);
  transform-origin: left center;
  overflow: hidden;
}

/* Detalles de ventilación */
.locker-vents {
  width: 85%;
  margin: 60px auto 0 auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.locker-vent {
  height: 16px;
  background: #00ffe7;
  border-radius: 7px;
  opacity: 0.7;
}

/* Cuadro del candado */
.locker-lock {
  width: 80px;
  height: 80px;
  background: #111;
  border: 4px solid #00ffe7;
  border-radius: 14px;
  margin: 60px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.locker-lock::after {
  content: '';
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #00ffe7;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.7;
}

.locker.open .locker-door {
  transform: rotateY(-100deg);
}

.locker-number {
  color: #00ffe7;
  font-size: 5rem;
  margin-bottom: 38px;
  text-shadow: 0 0 16px #00ffe7;
  font-family: monospace;
}

.locker-content {
  font-size: 2rem;
  padding: 3em;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  box-sizing: border-box;
}

/* Estilos para el gráfico de habilidades */
.skills-chart {
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 0.1em;
  margin-top: 2em; /* Antes 4em */
  margin-bottom: 2em;
}

.skills-chart-horizontal {
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin: 1em auto 0 auto;
}

.skill-row {
  display: flex;
  align-items: center;
  gap: 0.7em;
}

.skill-label {
  font-size: 1.2rem;
  color: #00ffe7;
  min-width: 120px;
  text-align: right;
  font-weight: bold;
  text-shadow: 0 0 6px #00ffe7;
   margin-right: 0.5em;
}

.skill-bar-bg {
  flex: 1;
  background: transparent;
  border: 2px solid #00ffe7;
  border-radius: 8px;
  height: 1.1em;           /* Más delgada */
  max-width: 180px;        /* Más corta */
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.skill-bar {
  background: #00ffe7;
  height: 100%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  transition: width 0.7s cubic-bezier(.77,0,.18,1);
  position: relative;
}

.skill-bar-value {
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  text-align: center;
  text-shadow: 0 0 8px #222;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  letter-spacing: 1px;
  pointer-events: none;
}

.education-title {
  font-size: 2.2rem;
  color: #00ffe7;
  text-align: center;
  margin-bottom: 1em;
  font-weight: bold;
  text-shadow: 0 0 8px #00ffe7;
}

.skills-title {
  font-size: 2.2rem;
  color: #00ffe7;
  text-align: center;
  margin-bottom: 1em;
  font-weight: bold;
  text-shadow: 0 0 8px #00ffe7;
}

.education-logos {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
}

.education-logos-row {
  display: flex;
  flex-direction: column;
  gap: 1.2em;
  width: 100%;
  align-items: flex-start;
}

.education-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.education-item-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5em;
  width: 100%;
  justify-content: flex-start;
}

.education-logo {
  width: 90px;
  max-width: 30vw;
  border-radius: 12px;
  box-shadow: 0 2px 16px #00ffe744;
  background: #fff;
  object-fit: contain;
  margin-bottom: 0;
}

.education-desc {
  color: #fff;
  font-size: 1.2rem;
  text-align: left;
  margin-bottom: 0;
  max-width: 320px;
  text-shadow: 0 0 6px #00ffe7;
}

.languages-title {
  font-size: 2.2rem;
  color: #00ffe7;
  text-align: center;
  margin-bottom: 1em;
  font-weight: bold;
  text-shadow: 0 0 8px #00ffe7;
}

.languages-grid {
  display: flex;
  flex-direction: column;
  gap: 0.6em;              /* Menos espacio entre filas */
  margin-bottom: 1em;
}

.language-row {
  display: grid;
  grid-template-columns: 90px 90px 60px; /* Columnas más angostas */
  align-items: center;
  gap: 0.7em;                            /* Menos espacio entre columnas */
  font-size: 1.1rem;                     /* Texto más pequeño */
  padding: 0.4em 0.7em;                  /* Menos padding */
  max-width: 270px;                      /* Menos ancho */
}

.language-name {
  color: #00ffe7;
  font-weight: bold;
  text-shadow: 0 0 6px #00ffe7;
}

.language-stars {
  font-size: 1.2rem;
  letter-spacing: 0.1em;
}

.star {
  color: #222;
  text-shadow: 0 0 6px #00ffe7;
  opacity: 0.4;
}

.star.filled {
  color: #00ffe7;
  opacity: 1;
  text-shadow: 0 0 8px #00ffe7;
}

.language-level {
  font-size: 1rem;
  color: #fff;
  text-shadow: 0 0 6px #00ffe7;
}

.languages-desc {
  margin-top: 1.5em;
  color: #fff;
  font-size: 1.1rem;
  text-align: center;
  text-shadow: 0 0 6px #00ffe7;
}

.extras-title {
  font-size: 2.2rem;
  color: #00ffe7;
  text-align: center;
  margin-bottom: 1em;
  font-weight: bold;
  text-shadow: 0 0 8px #00ffe7;
}

.shelf-group {
  display: flex;
  flex-direction: column;
  gap: 0.3em; /* antes 1em, ahora más juntas */
  align-items: center;
}

.shelf {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 80px;
  margin: 0.2em 0 0.2em 0; /* menos espacio arriba y abajo */
  gap: 1em; /* puedes reducir más si lo deseas */
}

.trophy {
  font-size: 2.3rem;
  cursor: pointer;
  transition: transform 0.2s, filter 0.2s;
  filter: grayscale(0.5) brightness(0.8);
  z-index: 2;
}
.trophy:hover {
  transform: scale(1.18) translateY(-10px) rotate(-6deg);
  filter: none;
  z-index: 3;
}

.shelf-board {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 18px;
  background: #bfa76a;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 2px 10px #0004;
  z-index: 1;
}

.trophy-desc {
  margin: 1em auto 0 auto;
  background: #fffbe7;
  color: #222;
  border-radius: 12px;
  box-shadow: 0 2px 16px #00ffe744;
  padding: 1em 1em;
  max-width: 500px;
  text-align: center;
  position: relative;
  animation: fadein 0.4s;
}

.trophy-title {
  font-size: 1.3rem;
  font-weight: bold;
  color: #00bfae;
  margin-bottom: 0.5em;
  text-shadow: 0 0 6px #00ffe7aa;
}

.trophy-text {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 1em;
}

.trophy-close {
  background: #00ffe7;
  color: #222;
  border: none;
  border-radius: 8px;
  padding: 0.4em 1.2em;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
.trophy-close:hover {
  background: #00bfae;
  color: #fff;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.back-arrow {
  position: absolute;
  top: 24px;
  left: 32px;
  font-size: 2.5rem;
  color: #00ffe7;
  text-decoration: none;
  z-index: 10;
  transition: color 0.2s, transform 0.2s;
  user-select: none;
}
.back-arrow:hover {
  color: #00bfae;
  transform: scale(1.15) translateX(-6px);
}
</style>
