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
                  style="display:block;padding:12px 18px;background:#111;border-radius:10px;color:#00ffe7;font-size:0.7rem;text-decoration:none;box-shadow:0 2px 12px #00ffe733;font-family:'Fira Mono',monospace;font-weight:bold;transition:background 0.2s, color 0.2s;"
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
  font-size: 1.5rem; /* antes 3rem */
  margin-bottom: 0.5rem;
  text-shadow: 0 0 4px #00ffe7, 1px 1px 0 #222;
}

.location-desc {
  font-size: 0.8rem; /* antes 1.3rem */
  max-width: 300px;
  margin-bottom: 1rem;
}

.monitor-80s {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 20px;
  min-height: 210px;
}

.monitor-frame {
  position: relative;
  width: 49vw;
  max-width: 850px;
  height: 50vh;        /* antes 37.5vh */
  max-height: 680px;   /* antes 475px */
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
  width: 40vw;
  max-width: 700px;
  height: 32vh;        /* antes 25vh */
  max-height: 490px;   /* antes 350px */
  background: #222e1e;
  border-radius: 8px;
  box-shadow: 0 0 32px #00ffe744 inset, 0 0 0 6px #222;
  overflow: hidden;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}

.monitor-glow {
  position: absolute;
  left: 0; top: 0; right: 0; bottom: 0;
  border-radius: 5px;
  box-shadow: 0 0 24px 6px #00ffe733 inset;
  pointer-events: none;
}

.monitor-reflection {
  position: absolute;
  left: 9px; top: 9px;
  width: 30px; height: 20px;
  border-radius: 4px;
  background: linear-gradient(120deg, #fff5 60%, transparent 100%);
  opacity: 0.4;
  pointer-events: none;
}

.monitor-text {
  position: absolute;
  left: 16px;
  bottom: 12px;
  color: #00ffe7;
  font-family: 'VT323', 'Fira Mono', 'Consolas', monospace;
  font-size: 1rem; /* antes 2rem */
  letter-spacing: 1px;
  text-shadow: 0 0 4px #00ffe7, 0 0 1px #fff;
  z-index: 3;
  white-space: pre-line;
  user-select: none;
}
.monitor-text h2 {
  font-size: 1.05rem !important; /* antes 2.1rem */
  margin-bottom: 5px !important;
}

.monitor-text ul {
  max-width: 350px !important; /* antes 700px */
  width: 100%;
}

.monitor-text li {
  margin-bottom: 9px !important; /* antes 18px */
}

.monitor-text a {
  padding: 12px 19px !important; 
  font-size: 0.6rem !important;
  border-radius: 5px !important;
  box-shadow: 0 1px 6px #00ffe733 !important;
  display: block;
  text-align: center;
}

.monitor-bezel {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 19px;
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
  border-radius: 0 0 6px 6px;
  box-shadow: 0 1px 4px #0008;
  z-index: 0;
}

.back-arrow {
  position: absolute;
  top: 12px;
  left: 16px;
  font-size: 1.25rem; /* antes 2.5rem */
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