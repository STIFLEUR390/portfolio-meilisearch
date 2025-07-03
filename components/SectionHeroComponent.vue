<script setup lang="ts">
</script>

<template>
  <div class="pt-24 sm:pt-32">
    <div class="text-center z-10 max-w-4xl mx-auto px-4">
      <!-- Photo de profil -->
      <img
        src="/profile.jpg"
        alt="Portrait de Franck Herold Tamto Tamko"
        class="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg border-4 border-primary-600 object-cover"
      />

      <h1
        class="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight animate-fade-in-up"
      >
        Bonjour, je suis
        <span
          class="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent animate-float"
        >
          Franck Herold Tamto Tamko
        </span>
      </h1>

      <p
        class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up"
        style="animation-delay: 0.2s"
      >
        <strong class="text-primary-600"
          >Développeur Full‑Stack, Designer & Automatisien IA</strong
        >
        passionné par l’innovation digitale.<br />
        J’accompagne entreprises et entrepreneurs dans la création
        d’applications web performantes (Vue/Nuxt, Laravel), la conception de
        maquettes UI/UX (Figma, Adobe XD, HTML/CSS) et l’automatisation
        intelligente de leurs workflows (n8n, Flowaise IA, API).<br />
        Mon objectif : transformer vos idées en solutions concrètes, intuitives
        et évolutives.
      </p>

      <div
        class="flex flex-col sm:flex-row gap-4 justify-center mb-6 animate-fade-in-up"
        style="animation-delay: 0.4s"
      >
        <a
          href="#contact"
          class="cta-button bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center"
        >
          <span class="material-icons mr-2">chat</span>
          Discutons de votre projet
        </a>
        <a
          href="#projects"
          class="cta-button border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center"
        >
          <span class="material-icons mr-2">work</span>
          Voir mes réalisations
        </a>
      </div>

      <!-- Bouton de téléchargement du CV -->
      <div class="mb-12 animate-fade-in-up" style="animation-delay: 0.5s">
        <a
          href="/cv_franck_herold_tamto_tamko.pdf"
          target="_blank"
          rel="noopener"
          class="cta-button bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center shadow"
        >
          <span class="material-icons mr-2">description</span>
          Télécharger mon CV
        </a>
      </div>

      <!-- Statistiques -->
      <div
        class="grid grid-cols-3 gap-8 text-center animate-fade-in-up"
        style="animation-delay: 0.6s"
      >
        <div class="p-4">
          <div
            class="counter text-3xl md:text-4xl font-bold text-primary-600 mb-2"
            data-target="4"
          >
            0
          </div>
          <div class="text-gray-600 dark:text-gray-300">
            Projets d’entreprise
          </div>
        </div>
        <div class="p-4">
          <div
            class="counter text-3xl md:text-4xl font-bold text-primary-600 mb-2"
            data-target="7"
          >
            0
          </div>
          <div class="text-gray-600 dark:text-gray-300">Projets personnels</div>
        </div>
        <div class="p-4">
          <div
            class="counter text-3xl md:text-4xl font-bold text-primary-600 mb-2"
            data-target="5"
          >
            0
          </div>
          <div class="text-gray-600 dark:text-gray-300">
            Années d'expérience
          </div>
        </div>
      </div>
    </div>

    <!-- Flèche de défilement -->
    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
    >
      <span class="material-icons text-4xl text-gray-400 dark:text-gray-500"
        >keyboard_arrow_down</span
      >
    </div>
  </div>
</template>