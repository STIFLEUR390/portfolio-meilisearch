<template>
  <section
    id="hero"
    class="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 sm:pt-32 bg-white dark:bg-gray-900 transition-colors duration-300"
  >
    <div class="text-center z-10 max-w-4xl mx-auto px-4">
      <!-- Photo de profil -->
      <img
        src="/profile.jpg"
        alt="Portrait de Franck Herold Tamto Tamko"
        class="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg border-4 border-primary-600 object-cover bg-white dark:bg-gray-800"
      />

      <div v-gsap.whenVisible.from="{ y: 60, opacity: 0, duration: 1 }">
        <h1
          class="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
        >
          Bonjour, je suis
          <span
            class="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent inline-block"
          >
            Franck Herold Tamto Tamko
          </span>
        </h1>
      </div>

      <div
        v-gsap.whenVisible.from="{
          y: 40,
          opacity: 0,
          delay: 0.2,
          duration: 0.8,
        }"
      >
        <p
          class="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto"
        >
          <strong class="text-primary-600 dark:text-primary-400"
            >Développeur Full‑Stack, Designer & Automatisien IA</strong
          >
          passionné par l'innovation digitale.<br />
          J'accompagne entreprises et entrepreneurs dans la création
          d'applications web performantes (Vue/Nuxt, Laravel), la conception de
          maquettes UI/UX (Figma, Adobe XD, HTML/CSS) et l'automatisation
          intelligente de leurs workflows (n8n, Flowaise IA, API).<br />
          Mon objectif : transformer vos idées en solutions concrètes,
          intuitives et évolutives.
        </p>
      </div>

      <div
        class="flex flex-col sm:flex-row gap-4 justify-center mb-6"
        v-gsap.whenVisible.stagger.from="{
          y: 40,
          opacity: 0,
          delay: 0.4,
          duration: 0.7,
        }"
      >
        <a
          href="#contact"
          class="cta-button bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center shadow-lg dark:shadow-primary-900/30"
        >
          <FontAwesomeIconComponent icon="fa-solid fa-comments" class="mr-2" />
          Discutons de votre projet
        </a>
        <a
          href="#projects"
          class="cta-button border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400 dark:hover:text-white"
        >
          <FontAwesomeIconComponent icon="fa-solid fa-briefcase" class="mr-2" />
          Voir mes réalisations
        </a>
      </div>

      <!-- Bouton de téléchargement du CV -->
      <div
        class="mb-12"
        v-gsap.whenVisible.from="{
          y: 30,
          opacity: 0,
          delay: 0.5,
          duration: 0.7,
        }"
      >
        <a
          href="/cv_franck_herold_tamto_tamko.pdf"
          target="_blank"
          rel="noopener"
          class="cta-button bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center shadow dark:bg-gray-800 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-primary-400 dark:hover:text-white"
        >
          <FontAwesomeIconComponent
            icon="fa-solid fa-file-lines"
            class="mr-2"
          />
          Télécharger mon CV
        </a>
      </div>

      <!-- Statistiques -->
      <div
        class="grid grid-cols-3 gap-8 text-center"
        v-gsap.whenVisible.from="{
          y: 30,
          opacity: 0,
          delay: 0.6,
          duration: 0.7,
        }"
      >
        <div class="p-4">
          <div
            class="counter text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2"
          >
            {{ entrepriseCount }}
          </div>
          <div class="text-gray-700 dark:text-gray-200">
            Projets d'entreprise
          </div>
        </div>
        <div class="p-4">
          <div
            class="counter text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2"
          >
            {{ persoCount }}
          </div>
          <div class="text-gray-700 dark:text-gray-200">Projets personnels</div>
        </div>
        <div class="p-4">
          <div
            class="counter text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2"
          >
            {{ xpCount }}
          </div>
          <div class="text-gray-700 dark:text-gray-200">
            Années d'expérience
          </div>
        </div>
      </div>
    </div>

    <!-- Flèche de défilement -->
    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
    >
      <FontAwesomeIconComponent
        icon="fa-solid fa-chevron-down"
        class="text-4xl text-gray-400 dark:text-gray-500"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
// Compteurs animés
const entrepriseCount = ref(0);
const persoCount = ref(0);
const xpCount = ref(0);

function animateCounter(
  refValue: Ref<number>,
  target: number,
  duration = 1200
) {
  const start = 0;
  const startTime = performance.now();
  function update(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    refValue.value = Math.floor(progress * (target - start) + start);
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      refValue.value = target;
    }
  }
  requestAnimationFrame(update);
}

onMounted(() => {
  // Démarre l'animation au montage (ou utiliser intersection observer pour plus de précision)
  animateCounter(entrepriseCount, 4);
  animateCounter(persoCount, 7);
  animateCounter(xpCount, 5);
});
// FontAwesomeIconComponent est auto-importé
// Les animations GSAP sont auto-importées via v-gsap-nuxt
</script> 