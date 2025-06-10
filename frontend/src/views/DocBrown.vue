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
    <!-- Puedes agregar más contenido aquí -->
    <div class="monitor-80s">
      <div class="monitor-frame">
        <div class="monitor-screen">
          <div class="monitor-glow"></div>
          <div class="monitor-reflection"></div>
          <div class="monitor-text" style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;">
            <h2 style="color:#00ffe7;margin-bottom:10px;font-size:2.1rem;">Proyectos</h2>
            <ul style="list-style:none;padding:0;margin:0;width:100%;max-width:700px;">
              <li v-for="project in projects" :key="project.name" style="margin-bottom:18px;">
                <a
                  :href="project.url"
                  target="_blank"
                  style="display:block;padding:18px 24px;background:#111;border-radius:10px;color:#00ffe7;font-size:1.3rem;text-decoration:none;box-shadow:0 2px 12px #00ffe733;font-family:'Fira Mono',monospace;font-weight:bold;transition:background 0.2s, color 0.2s;"
                  @mouseover="hovered = project.name"
                  @mouseleave="hovered = null"
                  :style="hovered === project.name ? 'background:#00ffe7;color:#111;' : ''"
                >
                  {{ project.name }}
                </a>
              </li>
            </ul>
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
  name: 'TimeMachine',
  data() {
    return {
      hovered: null,
      projects: [
        { name: "Página de Taq Balam: Vehículos eficientes", url: "https://taqbalamgt.netlify.app/" },
        { name: "CSS only: Dibujando Omnom", url: "https://calicheoficial.lat/23003/omnom/" },
        { name: "JS only: Chat", url: "https://calicheoficial.lat/23003/chat/" },
        { name: "HTML only: Aventura temática de Back to the Future", url: "https://calicheoficial.lat/23003/HTML/" }
      ]
    }
  },
  methods: {
    prevProject() {
      if (this.currentProject > 0) this.currentProject--;
    },
    nextProject() {
      if (this.currentProject < this.projects.length - 1) this.currentProject++;
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

.monitor-80s {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 40px;
  min-height: 420px;
}

.monitor-frame {
  position: relative;
  width: 98vw;
  max-width: 1700px;
  height: 75vh;
  max-height: 950px;
  background: #bcbcbc;
  border-radius: 18px 18px 12px 12px;
  box-shadow: 0 12px 48px #000a, 0 2px 0 #888;
  border: 8px solid #888;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.monitor-screen {
  position: absolute;
  top: 38px;
  left: 50%;
  transform: translateX(-50%);
  width: 80vw;
  max-width: 1400px;
  height: 50vh;
  max-height: 700px;
  background: #222e1e;
  border-radius: 16px;
  box-shadow: 0 0 64px #00ffe744 inset, 0 0 0 12px #222;
  overflow: hidden;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}

.monitor-glow {
  position: absolute;
  left: 0; top: 0; right: 0; bottom: 0;
  border-radius: 10px;
  box-shadow: 0 0 48px 12px #00ffe733 inset;
  pointer-events: none;
}

.monitor-reflection {
  position: absolute;
  left: 18px; top: 18px;
  width: 60px; height: 40px;
  background: linear-gradient(120deg, #fff5 60%, transparent 100%);
  border-radius: 8px;
  opacity: 0.4;
  pointer-events: none;
}

.monitor-text {
  position: absolute;
  left: 32px;
  bottom: 24px;
  color: #00ffe7;
  font-family: 'VT323', 'Fira Mono', 'Consolas', monospace;
  font-size: 2rem;
  letter-spacing: 2px;
  text-shadow: 0 0 8px #00ffe7, 0 0 2px #fff;
  z-index: 3;
  white-space: pre-line;
  user-select: none;
}

.monitor-bezel {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 38px;
  background: #a0a0a0;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 2px 8px #0005 inset;
  z-index: 4;
}

.monitor-buttons {
  position: absolute;
  right: 24px;
  bottom: 12px;
  display: flex;
  gap: 8px;
  z-index: 5;
}
.monitor-btn {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #444;
  border: 2px solid #888;
  box-shadow: 0 2px 4px #0007 inset;
}
.monitor-btn.red { background: #e74c3c; }
.monitor-btn.yellow { background: #f1c40f; }
.monitor-btn.green { background: #2ecc40; }

.monitor-base {
  position: absolute;
  left: 50%;
  bottom: -38px;
  transform: translateX(-50%);
  width: 320px;
  height: 60px;
  background: #888;
  border-radius: 0 0 18px 18px;
  box-shadow: 0 8px 16px #0005;
  z-index: 1;
}
.monitor-foot {
  position: absolute;
  left: 50%;
  bottom: -58px;
  transform: translateX(-50%);
  width: 120px;
  height: 28px;
  background: #444;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 2px 8px #0008;
  z-index: 0;
}

.back-arrow {
  position: absolute;
  top: 24px;
  left: 32px;
  font-size: 2.5rem;
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
</style>