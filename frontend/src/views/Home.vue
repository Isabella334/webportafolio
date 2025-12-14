<template>
  <div class="home">
    <transition name="fade-in">
      <img
        v-if="showLogo"
        src="/BackToThePortafolio.png"
        alt="Logo"
        class="logo"
      />
    </transition>
    <button
      v-if="showLogo"
      class="start-btn"
      @click="goToMap"
    >
      Empezar
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLogo: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.showLogo = true
    }, 500)
  },
  methods: {
    goToMap() {
      this.$router.push('/mapa')
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000;
  padding: 20px;
  overflow: hidden;
}

.logo {
  max-width: 800px;
  width: 90%;
  height: auto;
  margin-bottom: 40px;
  filter: drop-shadow(0 0 20px rgba(0, 255, 231, 0.5));
  animation: glow-pulse 2s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% {
    filter: drop-shadow(0 0 20px rgba(0, 255, 231, 0.5));
  }
  50% {
    filter: drop-shadow(0 0 30px rgba(0, 255, 231, 0.8));
  }
}

.start-btn {
  padding: 18px 60px;
  font-size: 1.8rem;
  font-weight: bold;
  color: #000;
  background: #00ffe7;
  border: 3px solid #00ffe7;
  border-radius: 12px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: all 0.3s ease;
  box-shadow: 
    0 0 20px rgba(0, 255, 231, 0.6),
    0 0 40px rgba(0, 255, 231, 0.4),
    inset 0 0 10px rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.start-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.start-btn:hover::before {
  width: 300px;
  height: 300px;
}

.start-btn:hover {
  background: #00bfae;
  border-color: #00bfae;
  transform: scale(1.05);
  box-shadow: 
    0 0 30px rgba(0, 255, 231, 0.8),
    0 0 60px rgba(0, 255, 231, 0.6),
    inset 0 0 20px rgba(255, 255, 255, 0.3);
}

.start-btn:active {
  transform: scale(0.98);
}

/* Animación de entrada */
.fade-in-enter-active {
  animation: fadeInScale 1.5s ease-out;
}

@keyframes fadeInScale {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Tablets grandes y pantallas medianas */
@media (max-width: 1024px) {
  .logo {
    max-width: 700px;
    margin-bottom: 35px;
  }

  .start-btn {
    padding: 16px 50px;
    font-size: 1.6rem;
    letter-spacing: 2px;
  }
}

/* Tablets */
@media (max-width: 768px) {
  .home {
    padding: 15px;
  }

  .logo {
    max-width: 600px;
    margin-bottom: 30px;
  }

  .start-btn {
    padding: 14px 45px;
    font-size: 1.4rem;
    letter-spacing: 2px;
    border-width: 2px;
  }
}

/* Móviles grandes */
@media (max-width: 640px) {
  .logo {
    max-width: 500px;
    width: 95%;
    margin-bottom: 25px;
  }

  .start-btn {
    padding: 12px 40px;
    font-size: 1.3rem;
    letter-spacing: 1.5px;
  }
}

/* Móviles estándar */
@media (max-width: 480px) {
  .home {
    padding: 10px;
  }

  .logo {
    max-width: 100%;
    width: 95%;
    margin-bottom: 20px;
  }

  .start-btn {
    padding: 12px 35px;
    font-size: 1.2rem;
    letter-spacing: 1px;
    border-radius: 10px;
  }

  .start-btn:hover::before {
    width: 200px;
    height: 200px;
  }
}

/* Móviles pequeños */
@media (max-width: 360px) {
  .logo {
    margin-bottom: 15px;
  }

  .start-btn {
    padding: 10px 30px;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
  }
}

/* Orientación horizontal en móviles */
@media (max-height: 500px) and (orientation: landscape) {
  .home {
    padding: 10px;
  }

  .logo {
    max-width: 400px;
    margin-bottom: 15px;
  }

  .start-btn {
    padding: 10px 30px;
    font-size: 1.1rem;
  }
}
</style>