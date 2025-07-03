<template>
  <header>
    <!-- Barre de progression de scroll -->
    <div
      class="progress-bar fixed top-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-purple-500 z-50"
      :style="{ width: scrollWidth }"
    ></div>
    <nav
      class="fixed w-full top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 transition-all duration-300"
      :class="{ 'shadow-lg bg-white/95 dark:bg-gray-900/95': scrolled }"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <!-- Identité -->
          <div class="flex items-center">
            <span
              class="text-2xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent"
            >
              Franck Herold Tamto Tamko
            </span>
          </div>
          <!-- Menu desktop -->
          <div class="hidden md:flex items-center space-x-8">
            <a href="#about" class="nav-link">À propos</a>
            <a href="#services" class="nav-link">Services</a>
            <a href="#projects" class="nav-link">Projets</a>
            <a href="#testimonials" class="nav-link">Témoignages</a>
            <a href="#pricing" class="nav-link">Tarifs</a>
            <a href="#blog" class="nav-link">Blog</a>
            <a href="#contact" class="nav-link">Contact</a>
          </div>
          <!-- Actions (mode sombre + menu mobile) -->
          <div class="flex items-center space-x-4">
            <button
              @click="toggleDarkMode"
              class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Basculer le mode sombre"
            >
              <span v-if="colorMode.value === 'dark'" class="material-icons"
                >light_mode</span
              >
              <span v-else class="material-icons">dark_mode</span>
            </button>
            <button
              @click="showMobileMenu = !showMobileMenu"
              class="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              aria-label="Menu mobile"
            >
              <span class="material-icons">{{
                showMobileMenu ? "close" : "menu"
              }}</span>
            </button>
          </div>
        </div>
        <!-- Menu mobile -->
        <div
          v-show="showMobileMenu"
          class="md:hidden py-4 border-t border-gray-200 dark:border-gray-700"
        >
          <div class="flex flex-col space-y-4">
            <a
              href="#about"
              @click="closeMobileMenu"
              class="text-gray-600 dark:text-gray-300 hover:text-primary-600"
              >À propos</a
            >
            <a
              href="#services"
              @click="closeMobileMenu"
              class="text-gray-600 dark:text-gray-300 hover:text-primary-600"
              >Services</a
            >
            <a
              href="#projects"
              @click="closeMobileMenu"
              class="text-gray-600 dark:text-gray-300 hover:text-primary-600"
              >Projets</a
            >
            <a
              href="#testimonials"
              @click="closeMobileMenu"
              class="text-gray-600 dark:text-gray-300 hover:text-primary-600"
              >Témoignages</a
            >
            <a
              href="#pricing"
              @click="closeMobileMenu"
              class="text-gray-600 dark:text-gray-300 hover:text-primary-600"
              >Tarifs</a
            >
            <a
              href="#blog"
              @click="closeMobileMenu"
              class="text-gray-600 dark:text-gray-300 hover:text-primary-600"
              >Blog</a
            >
            <a
              href="#contact"
              @click="closeMobileMenu"
              class="text-gray-600 dark:text-gray-300 hover:text-primary-600"
              >Contact</a
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const showMobileMenu = ref(false);
const scrolled = ref(false);
const scrollProgress = ref(0);

const closeMobileMenu = () => {
  showMobileMenu.value = false;
};

const toggleDarkMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};

const scrollWidth = computed(() => `${scrollProgress.value * 100}%`);

onMounted(() => {
  const handleScroll = () => {
    const winScroll = window.scrollY;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    scrollProgress.value = height > 0 ? winScroll / height : 0;
    scrolled.value = winScroll > 64;
  };
  window.addEventListener("scroll", handleScroll);
  handleScroll();
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>

<style scoped>
.progress-bar {
  transition: width 0.2s;
}
.nav-link {
  position: relative;
  color: #64748b;
  transition: color 0.3s;
}
.nav-link:hover {
  color: #3b82f6;
}
.nav-link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #3b82f6;
  transition: width 0.3s;
}
.nav-link:hover::after {
  width: 100%;
}
</style> 