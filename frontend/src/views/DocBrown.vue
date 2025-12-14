<template>
  <div class="location-container">
    <router-link to="/mapa" class="back-arrow" title="Regresar al mapa">
      <span>⬅</span>
    </router-link>
    <h1 class="location-title">Laboratorio del Doc</h1>
    <p class="location-desc">
      ¡Cuidado! Estás en el laboratorio del Doc.
Sobre la computadora hay enlaces que conducen a inventos modernos: proyectos web creados por la desarrolladora. Explora cada uno y viaja por sus creaciones digitales.
    </p>
    <div class="monitor-80s">
      <div class="monitor-frame">
        <div class="monitor-screen">
          <div class="monitor-glow"></div>
          <div class="monitor-reflection"></div>
          <div class="monitor-text">
            <h2>Proyectos</h2>
            <div class="projects-scroll">
              <ul>
                <li v-for="project in projects" :key="project.name">
                  <a
                    :href="project.url"
                    target="_blank"
                    @mouseover="hovered = project.name"
                    @mouseleave="hovered = null"
                    :class="{ 'hovered': hovered === project.name }"
                  >
                    {{ project.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="monitor-bezel"></div>
        <div class="monitor-buttons">
          <div class="monitor-btn red"></div>
          <div class="monitor-btn yellow"></div>
          <div class="monitor-btn green"></div>
        </div>
        <div class="monitor-base"></div>
        <div class="monitor-foot"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocBrown',
  data() {
    return {
      hovered: null,
      projects: [
        { name: "Página de Taq Balam: Vehículos eficientes", url: "https://taqbalamgt.netlify.app/" },
        { name: "Repositorio de github", url: "https://github.com/Isabella334" }
      ]
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
  padding: 60px 20px 100px;
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

.monitor-80s {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 20px;
  width: 100%;
  max-width: 900px;
}

.monitor-frame {
  position: relative;
  width: 90vw;
  max-width: 850px;
  height: 50vh;
  max-height: 680px;
  min-height: 400px;
  background: #bcbcbc;
  border-radius: 9px 9px 6px 6px;
  box-shadow: 0 6px 24px #000a, 0 1px 0 #888;
  border: 4px solid #888;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.monitor-screen {
  position: absolute;
  top: 19px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 80px);
  max-width: 700px;
  height: calc(100% - 80px);
  max-height: 490px;
  background: #222e1e;
  border-radius: 8px;
  box-shadow: 0 0 32px #00ffe744 inset, 0 0 0 6px #222;
  overflow: hidden;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.monitor-glow {
  position: absolute;
  left: 0; top: 0; right: 0; bottom: 0;
  border-radius: 5px;
  box-shadow: 0 0 24px 6px #00ffe733 inset;
  pointer-events: none;
  z-index: 1;
}

.monitor-reflection {
  position: absolute;
  left: 9px; top: 9px;
  width: 30px; height: 20px;
  border-radius: 4px;
  background: linear-gradient(120deg, #fff5 60%, transparent 100%);
  opacity: 0.4;
  pointer-events: none;
  z-index: 1;
}

.monitor-text {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  z-index: 2;
}

.monitor-text h2 {
  color: #00ffe7;
  margin-bottom: 15px;
  font-size: 2rem;
  text-shadow: 0 0 4px #00ffe7, 0 0 1px #fff;
  font-family: 'VT323', 'Fira Mono', 'Consolas', monospace;
  text-align: center;
}

.projects-scroll {
  width: 100%;
  max-width: 600px;
  max-height: calc(100% - 60px);
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 10px;
}

/* Estilo de scrollbar estilo años 80 */
.projects-scroll::-webkit-scrollbar {
  width: 12px;
}

.projects-scroll::-webkit-scrollbar-track {
  background: #111;
  border-radius: 6px;
  border: 2px solid #00ffe733;
}

.projects-scroll::-webkit-scrollbar-thumb {
  background: #00ffe7;
  border-radius: 6px;
  border: 2px solid #222e1e;
}

.projects-scroll::-webkit-scrollbar-thumb:hover {
  background: #00bfae;
}

.projects-scroll ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.projects-scroll li {
  margin-bottom: 15px;
}

.projects-scroll a {
  display: block;
  padding: 14px 20px;
  background: #111;
  border-radius: 10px;
  color: #00ffe7;
  font-size: 0.9rem;
  text-decoration: none;
  box-shadow: 0 2px 12px #00ffe733;
  font-family: 'Fira Mono', monospace;
  font-weight: bold;
  transition: all 0.2s;
  text-align: center;
  border: 2px solid transparent;
}

.projects-scroll a:hover,
.projects-scroll a.hovered {
  background: #00ffe7;
  color: #111;
  transform: translateY(-2px);
  box-shadow: 0 4px 16px #00ffe799;
  border-color: #00ffe7;
}

.monitor-bezel {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 19px;
  background: #bcbcbc;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 1px 4px #0005 inset;
  z-index: 4;
}

.monitor-buttons {
  position: absolute;
  right: 12px;
  bottom: 6px;
  display: flex;
  gap: 4px;
  z-index: 5;
}

.monitor-btn {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: 1px solid #888;
  box-shadow: 0 1px 2px #0007 inset;
}

.monitor-btn.red { background: #e74c3c; }
.monitor-btn.yellow { background: #f1c40f; }
.monitor-btn.green { background: #2ecc40; }

.monitor-base {
  position: absolute;
  left: 50%;
  bottom: -19px;
  transform: translateX(-50%);
  width: 160px;
  height: 30px;
  background: #bcbcbc;
  border-radius: 0 0 9px 9px;
  box-shadow: 0 4px 8px #0005;
  z-index: 1;
}

.monitor-foot {
  position: absolute;
  left: 50%;
  bottom: -29px;
  transform: translateX(-50%);
  width: 60px;
  height: 14px;
  background: #bcbcbc;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 1px 4px #0008;
  z-index: 0;
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
  transform: scale(1.15) translateX(-6px);
}

/* Tablets */
@media (max-width: 768px) {
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

  .monitor-frame {
    min-height: 350px;
  }

  .monitor-screen {
    width: calc(100% - 60px);
    height: calc(100% - 60px);
  }

  .monitor-text {
    padding: 15px;
  }

  .monitor-text h2 {
    font-size: 1.8rem;
    margin-bottom: 12px;
  }

  .projects-scroll {
    max-width: 500px;
  }

  .projects-scroll a {
    font-size: 0.85rem;
    padding: 12px 18px;
  }

  .monitor-base {
    width: 140px;
    height: 26px;
    bottom: -17px;
  }

  .monitor-foot {
    width: 52px;
    height: 12px;
    bottom: -25px;
  }
}

/* Móviles grandes */
@media (max-width: 640px) {
  .location-title {
    font-size: 1.2rem;
  }

  .location-desc {
    font-size: 0.7rem;
    max-width: 320px;
  }

  .monitor-frame {
    min-height: 320px;
    border-width: 3px;
  }

  .monitor-screen {
    width: calc(100% - 50px);
    height: calc(100% - 50px);
    top: 15px;
    box-shadow: 0 0 24px #00ffe744 inset, 0 0 0 4px #222;
  }

  .monitor-text {
    padding: 12px;
  }

  .monitor-text h2 {
    font-size: 1.6rem;
    margin-bottom: 10px;
  }

  .projects-scroll {
    max-width: 100%;
    padding-right: 8px;
  }

  .projects-scroll::-webkit-scrollbar {
    width: 10px;
  }

  .projects-scroll li {
    margin-bottom: 12px;
  }

  .projects-scroll a {
    font-size: 0.8rem;
    padding: 11px 16px;
  }

  .monitor-bezel {
    height: 16px;
  }

  .monitor-buttons {
    right: 10px;
    bottom: 5px;
    gap: 3px;
  }

  .monitor-btn {
    width: 8px;
    height: 8px;
  }

  .monitor-base {
    width: 120px;
    height: 22px;
    bottom: -14px;
  }

  .monitor-foot {
    width: 48px;
    height: 10px;
    bottom: -21px;
  }
}

/* Móviles estándar */
@media (max-width: 480px) {
  .location-container {
    padding-top: 45px;
    padding-bottom: 80px;
  }

  .location-title {
    font-size: 1.1rem;
  }

  .location-desc {
    font-size: 0.65rem;
    max-width: 280px;
  }

  .back-arrow {
    font-size: 1.1rem;
    top: 10px;
    left: 12px;
  }

  .monitor-frame {
    min-height: 280px;
  }

  .monitor-screen {
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    top: 12px;
  }

  .monitor-text {
    padding: 10px;
  }

  .monitor-text h2 {
    font-size: 1.4rem;
    margin-bottom: 8px;
  }

  .projects-scroll {
    padding-right: 6px;
  }

  .projects-scroll::-webkit-scrollbar {
    width: 8px;
  }

  .projects-scroll li {
    margin-bottom: 10px;
  }

  .projects-scroll a {
    font-size: 0.75rem;
    padding: 10px 14px;
    border-radius: 8px;
  }

  .monitor-bezel {
    height: 14px;
  }

  .monitor-buttons {
    right: 8px;
    bottom: 4px;
  }

  .monitor-btn {
    width: 7px;
    height: 7px;
  }

  .monitor-base {
    width: 100px;
    height: 20px;
    bottom: -12px;
  }

  .monitor-foot {
    width: 40px;
    height: 9px;
    bottom: -18px;
  }
}

/* Móviles pequeños */
@media (max-width: 360px) {
  .location-title {
    font-size: 1rem;
  }

  .location-desc {
    font-size: 0.6rem;
    max-width: 250px;
  }

  .monitor-frame {
    min-height: 260px;
  }

  .monitor-text h2 {
    font-size: 1.2rem;
  }

  .projects-scroll a {
    font-size: 0.7rem;
    padding: 9px 12px;
  }

  .monitor-base {
    width: 90px;
    height: 18px;
    bottom: -11px;
  }

  .monitor-foot {
    width: 36px;
    height: 8px;
    bottom: -16px;
  }
}

/* Orientación horizontal */
@media (max-height: 600px) and (orientation: landscape) {
  .location-container {
    padding-top: 40px;
    padding-bottom: 60px;
  }

  .monitor-frame {
    max-height: 70vh;
    min-height: 240px;
  }

  .monitor-text h2 {
    font-size: 1.3rem;
    margin-bottom: 6px;
  }

  .projects-scroll li {
    margin-bottom: 8px;
  }

  .projects-scroll a {
    padding: 8px 12px;
    font-size: 0.7rem;
  }
}
</style>