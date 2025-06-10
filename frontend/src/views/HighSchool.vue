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
  font-size: 1.5rem; /* antes 3rem */
  margin-bottom: 0.5rem;
  text-shadow: 0 0 4px #00ffe7, 1px 1px 0 #222;
}

.location-desc {
  font-size: 0.65rem; /* antes 1.3rem */
  max-width: 300px;
  margin-bottom: 1rem;
}

.lockers-row {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 900px; /* antes 1800px */
  width: 49vw;      /* antes 98vw */
}

.locker {
  width: 210px;      /* antes 420px */
  height: 340px;     /* antes 680px */
  background: #222;
  border: 1.5px solid #00ffe7;
  border-radius: 8px;
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
  border-radius: 7px;
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
  width: 42.5%;
  margin: 30px auto 0 auto;
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.locker-vent {
  height: 8px;
  background: #00ffe7;
  border-radius: 3.5px;
  opacity: 0.7;
}

/* Cuadro del candado */
.locker-lock {
  width: 40px;
  height: 40px;
  background: #111;
  border: 2px solid #00ffe7;
  border-radius: 7px;
  margin: 30px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.locker-lock::after {
  content: '';
  display: block;
  width: 18px;
  height: 18px;
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
  font-size: 2.5rem; /* antes 5rem */
  margin-bottom: 19px;
  text-shadow: 0 0 8px #00ffe7;
  font-family: monospace;
}

.locker-content {
  font-size: 1rem; /* antes 2rem */
  padding: 1.5em;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  box-sizing: border-box;
}

/* Estilos para el gráfico de habilidades */
.skills-chart {
  width: 100%;
  max-width: 210px;
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  margin-top: 1em;
  margin-bottom: 1em;
}

.skills-chart-horizontal {
  width: 100%;
  max-width: 210px;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin: 1em auto 0 auto;
}

.skill-row {
  display: flex;
  align-items: center;
  gap: 0.35em;
}

.skill-label {
  font-size: 0.6rem;
  color: #00ffe7;
  min-width: 60px;
  margin-right: 0.25em;
}

.skill-bar-bg {
  flex: 1;
  background: transparent;
  border: 1px solid #00ffe7;
  border-radius: 4px;
  height: 0.55em;
  max-width: 90px;
}

.skill-bar {
  background: #00ffe7;
  height: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  transition: width 0.7s cubic-bezier(.77,0,.18,1);
  position: relative;
}

.skill-bar-value {
  color: #fff;
  font-size: 0.5rem;
  font-weight: bold;
  width: 100%;
  text-align: center;
  text-shadow: 0 0 4px #222;
  letter-spacing: 0.5px;
  pointer-events: none;
}

.education-title {
  font-size: 1.1rem;
  color: #00ffe7;
  text-align: center;
  margin-bottom: 0.5em;
  font-weight: bold;
  text-shadow: 0 0 4px #00ffe7;
}

.skills-title {
  font-size: 1.1rem;
  color: #00ffe7;
  text-align: center;
  margin-bottom: 0.5em;
  font-weight: bold;
  text-shadow: 0 0 4px #00ffe7;
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
  gap: 0.6em;
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
  gap: 0.75em;
  width: 100%;
  justify-content: flex-start;
}

.education-logo {
  width: 45px;
  max-width: 15vw;
  border-radius: 6px;
  box-shadow: 0 1px 8px #00ffe744;
  background: #fff;
  object-fit: contain;
  margin-bottom: 0;
}

.education-desc {
  color: #fff;
  font-size: 0.6rem;
  text-align: left;
  margin-bottom: 0;
  max-width: 160px;
  text-shadow: 0 0 3px #00ffe7;
}

.languages-title {
  font-size: 1.1rem;
  color: #00ffe7;
  text-align: center;
  margin-bottom: 0.5em;
  font-weight: bold;
  text-shadow: 0 0 4px #00ffe7;
}

.languages-grid {
  display: flex;
  flex-direction: column;
  gap: 0.3em;
  margin-bottom: 0.5em;
}

.language-row {
  display: grid;
  grid-template-columns: 45px 45px 30px;
  gap: 0.35em;
  font-size: 0.55rem;
  padding: 0.2em 0.35em;
  max-width: 135px;
}

.language-name {
  color: #00ffe7;
  font-weight: bold;
  text-shadow: 0 0 3px #00ffe7;
}

.language-stars {
  font-size: 0.6rem;
  letter-spacing: 0.05em;
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
  font-size: 0.5rem;
}

.languages-desc {
  margin-top: 0.75em;
  font-size: 0.55rem;
  text-shadow: 0 0 3px #00ffe7;
}

.extras-title {
  font-size: 1.1rem;
  color: #00ffe7;
  text-align: center;
  margin-bottom: 0.5em;
  font-weight: bold;
  text-shadow: 0 0 4px #00ffe7;
}

.shelf-group {
  display: flex;
  flex-direction: column;
  gap: 0.15em;
  align-items: center;
}

.shelf {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 40px;
  margin: 0.1em 0 0.1em 0;
  gap: 0.5em;
}

.trophy {
  font-size: 1.15rem;
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
  height: 9px;
  background: #bfa76a;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 1px 5px #0004;
  z-index: 1;
}

.trophy-desc {
  margin: 0.5em auto 0 auto;
  background: #fffbe7;
  color: #222;
  border-radius: 6px;
  box-shadow: 0 1px 8px #00ffe744;
  padding: 0.5em 0.5em;
  max-width: 250px;
}

.trophy-title {
  font-size: 0.65rem;
  margin-bottom: 0.25em;
  text-shadow: 0 0 3px #00ffe7aa;
}

.trophy-text {
  font-size: 0.55rem;
  margin-bottom: 0.5em;
}

.trophy-close {
  background: #00ffe7;
  color: #222;
  border: none;
  border-radius: 4px;
  padding: 0.2em 0.6em;
  font-size: 0.5rem;
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
  top: 12px;
  left: 16px;
  font-size: 1.25rem; /* antes 2.5rem */
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
