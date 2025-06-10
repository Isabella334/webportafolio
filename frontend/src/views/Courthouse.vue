<template>
  <div class="location-container">
    <router-link to="/mapa" class="back-arrow" title="Regresar al mapa">
      <span>⬅</span>
    </router-link>
    <h1 class="location-title">Courthouse Square</h1>
    <p class="location-desc">
      ¡El reloj aún funciona!
Explora el corazón de Hill Valley. En la mesa encontrarás objetos que guardan secretos de contacto. Haz clic en cada uno: el sobre, el teléfono, la libreta... ¡Descubre todas las formas de conectar con la desarrolladora detrás de este portafolio!.
    </p>
    <div class="clock-analog">
      <div class="clock-face">
        <div class="hand hour" :style="hourStyle"></div>
        <div class="hand minute" :style="minuteStyle"></div>
        <div class="hand second" :style="secondStyle"></div>
        <div class="clock-center"></div>
        <div v-for="n in 12" :key="n" class="clock-mark" :style="{ transform: `rotate(${n*30}deg)` }"></div>
        <div
          v-for="n in 12"
          :key="'num'+n"
          class="clock-number"
          :style="{
            '--angle': `${n*30}deg`
          }"
        >
          {{ n }}
        </div>
      </div>
    </div>
    <!-- Puedes agregar más contenido aquí -->
    <!-- Puedes poner esto en tu template, donde quieras la mesa -->
    <div class="table-container">
      <div class="table-top"></div>
      <div class="table-edge"></div>
      <!-- Objetos sobre la mesa -->
      <img src="/contacto/correo.png" class="mesa-obj obj-correo" alt="Correo" @click="showContact('correo')" />
      <img src="/contacto/cv.png" class="mesa-obj obj-cv" alt="CV" @click="showContact('cv')" />
      <img src="/contacto/linkedin.png" class="mesa-obj obj-linkedin" alt="LinkedIn" @click="showContact('linkedin')" />
      <img src="/contacto/telefono.png" class="mesa-obj obj-telefono" alt="Teléfono" @click="showContact('telefono')" />
      <div class="table-leg left"></div>
      <div class="table-leg right"></div>
    </div>
    <div v-if="contactMessage" class="contact-message">
      {{ contactMessage }}
      <div v-if="showDownload" style="margin-top: 24px;">
        <a
          href="/contacto/CV_Isabella_Recinos.pdf"
          download
          class="download-btn"
        >Descargar CV</a>
      </div>
      <div v-if="showLinkedin" style="margin-top: 24px;">
        <a
          href="https://www.linkedin.com/in/isabella-recinos-98600419b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener"
          class="download-btn"
        >Ir a LinkedIn</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Courthouse',
  data() {
    return {
      now: new Date(),
      contactMessage: '',
      showDownload: false,
      showLinkedin: false
    }
  },
  computed: {
    hourStyle() {
      const h = this.now.getHours() % 12;
      const m = this.now.getMinutes();
      return {
        transform: `rotate(${(h * 30) + (m / 2)}deg)`
      };
    },
    minuteStyle() {
      const m = this.now.getMinutes();
      const s = this.now.getSeconds();
      return {
        transform: `rotate(${(m * 6) + (s / 10)}deg)`
      };
    },
    secondStyle() {
      const s = this.now.getSeconds();
      return {
        transform: `rotate(${s * 6}deg)`
      };
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.now = new Date();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    showContact(type) {
      this.showDownload = false;
      this.showLinkedin = false;
      if (type === 'correo') {
        this.contactMessage = 'Puedes escribirme a: isabellarecinos@gmail.com';
      } else if (type === 'cv') {
        this.contactMessage = 'Esta opción descarga el CV en PDF de Isabella Recinos ¿Desea continuar?';
        this.showDownload = true;
      } else if (type === 'linkedin') {
        this.contactMessage = 'Visita mi perfil de LinkedIn:';
        this.showLinkedin = true;
      } else if (type === 'telefono') {
        this.contactMessage = 'Mi número de contacto es: +502 5755-5555';
      }
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
  font-size: 0.75rem;
  max-width: 400px;
  text-align: center;
  margin-bottom: 1rem;
}

.clock-analog {
  margin: 1rem 0 1.25rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.clock-face {
  position: relative;
  width: 110px;   /* antes 220px */
  height: 110px;  /* antes 220px */
  background: #222;
  border: 4px solid #00ffe7;
  border-radius: 50%;
  box-shadow: 0 0 12px #00ffe799;
}

.hand {
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform-origin: bottom center;
  border-radius: 4px;
}

.hand.hour {
  width: 5px;
  height: 30px;
  background: #00ffe7;
  z-index: 3;
}

.hand.minute {
  width: 3px;
  height: 40px;
  background: #fff;
  z-index: 2;
}

.hand.second {
  width: 1.5px;
  height: 47.5px;
  background: #ff0044;
  z-index: 4;
}

.clock-center {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 9px;
  height: 9px;
  background: #fff;
  border: 1.5px solid #00ffe7;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.clock-mark {
  position: absolute;
  left: 50%;
  top: 6px;
  width: 2px;
  height: 9px;
  background: transparent;
  border-radius: 1px;
  transform-origin: bottom center;
}

.clock-number {
  position: absolute;
  left: 50%;
  top: 50%;
  font-size: 0.6rem;
  color: #00ffe7;
  font-weight: bold;
  text-shadow: 0 0 3px #000, 0 0 1px #00ffe7;
  transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-41px) rotate(calc(-1 * var(--angle)));
  transform-origin: center center;
  pointer-events: none;
  user-select: none;
  z-index: 20;
}

/* Estilos para la mesa */
.table-container {
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 700px;      /* antes 1400px */
  height: 210px;     /* antes 420px */
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 50;
  pointer-events: none;
}

.table-top {
  width: 650px;
  height: 70px;
  background: #c9a87a;
  position: absolute;
  bottom: 59px;
  left: 50%;
  transform: translateX(-50%);
  clip-path: polygon(8% 0, 92% 0, 100% 100%, 0% 100%);
  box-shadow: 0 9px 24px #0005;
  z-index: 2;
}

.table-edge {
  width: 650px;
  height: 24px;
  background: #a67c52;
  position: absolute;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0 0 14px 14px;
  z-index: 3;
  box-shadow: 0 3px 12px #0003;
}

.table-leg {
  width: 30px;
  height: 35px;
  background: #7a5c3a;
  position: absolute;
  bottom: 0;
  border-radius: 8px;
  border: 3.5px solid #c9a87a;
  z-index: 1;
}
.table-leg.left {
  left: 60px;
}
.table-leg.right {
  right: 60px;
}

.mesa-obj {
  position: absolute;
  z-index: 10;
  width: 110px;   /* antes 220px */
  height: 110px;  /* antes 220px */
  object-fit: contain;
  filter: drop-shadow(0 2px 6px #0008);
  transition: transform 0.2s;
  pointer-events: auto;
}

/* Ajusta estos valores para distribuir los objetos como prefieras */
.obj-correo {
  top: 50px;
  left: 110px;
  transform: rotate(-8deg);
}
.obj-cv {
  top: 60px;
  left: 260px;
  transform: rotate(6deg);
}
.obj-linkedin {
  top: 49px;
  right: 210px;
  transform: rotate(-4deg);
}
.obj-telefono {
  top: 65px;
  right: 90px;
  transform: rotate(10deg);
}

.mesa-obj:hover {
  transform: scale(1.13) rotate(-2deg);
  filter: drop-shadow(0 4px 12px #00ffe7cc);
}

.contact-message {
  margin: 20px 0 12px 0;
  padding: 16px 20px;
  background: #fffbe7;
  color: #222;
  border-radius: 11px;
  font-size: 0.85rem;
  box-shadow: 0 2px 16px #00ffe733;
  text-align: center;
  min-width: 190px;
  max-width: 350px;
  z-index: 100;
}

.download-btn {
  display: inline-block;
  margin-top: 9px;
  padding: 8px 18px;
  font-size: 0.65rem;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(90deg, #00ffe7 60%, #00bfae 100%);
  border: none;
  border-radius: 6px;
  text-decoration: none;
  box-shadow: 0 1px 6px #00ffe799;
  transition: background 0.2s, transform 0.2s;
  cursor: pointer;
}
.download-btn:hover {
  background: linear-gradient(90deg, #00bfae 60%, #00ffe7 100%);
  transform: scale(1.07);
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
</style>