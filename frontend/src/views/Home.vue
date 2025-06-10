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
import '../styles/home.css'

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