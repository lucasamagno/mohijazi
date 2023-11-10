<template>
  <div v-if="$route.path !== '/'">
    <button class="hamburger-button" @click="toggleMenu">
      <div class="hamburger-icon" :class="{ 'active': menuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>

    <transition name="fade">
      <div v-show="menuOpen" class="full-page-menu">
        <router-link to="/" class="menu-item" @click="toggleMenu">Home</router-link>
        <router-link to="/work" class="menu-item" @click="toggleMenu">Work</router-link>
        <router-link to="/education" class="menu-item" @click="toggleMenu">Education</router-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      if (this.menuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
  },
};
</script>

<style scoped>
.hamburger-button {
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 100;
  background: none;
  border: none;
  cursor: pointer;
  padding: 12px;
}

.hamburger-icon {
  width: 30px;
  height: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.hamburger-icon span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: #000;
  transition: all 0.3s ease;
}

.hamburger-icon.active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.hamburger-icon.active span:nth-child(2) {
  opacity: 0;
}

.hamburger-icon.active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.full-page-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99;
}

.menu-item {
  color: white;
  font-size: 24px;
  padding: 15px;
  text-decoration: none;
  border: none;
  margin-bottom: 15px;
  transition: color 0.3s ease;
}

.menu-item:hover {
  color: #ccc;
}
</style>
