<script setup lang="ts">
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2
        class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
      >
        Blog & Ressources
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Découvrez mes derniers articles techniques, tutoriels et retours
        d'expérience sur le développement web, l'automatisation et le design.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Article 1 -->
      <article
        class="blog-card bg-gray-50 dark:bg-gray-700 rounded-2xl overflow-hidden"
      >
        <div
          class="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"
        >
          <FontAwesomeIconComponent
            icon="fa-solid-bolt"
            class="text-white text-4xl"
          />
        </div>
        <div class="p-6">
          <span class="text-sm text-primary-600 font-medium"
            >Automatisation</span
          >
          <h3
            class="text-xl font-semibold text-gray-900 dark:text-white mt-2 mb-3"
          >
            Automatiser vos workflows avec n8n et Flowaise IA
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Un guide étape par étape pour connecter vos outils, automatiser vos
            tâches et intégrer l'IA dans vos processus métiers.
          </p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">28 Juin 2025</span>
            <a
              href="#"
              class="text-primary-600 hover:text-primary-800 font-medium"
              >Lire le tutoriel</a
            >
          </div>
        </div>
      </article>

      <!-- Article 2 -->
      <article
        class="blog-card bg-gray-50 dark:bg-gray-700 rounded-2xl overflow-hidden"
      >
        <div
          class="h-48 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center"
        >
          <FontAwesomeIconComponent
            icon="fa-solid-code-branch"
            class="text-white text-4xl"
          />
        </div>
        <div class="p-6">
          <span class="text-sm text-green-600 font-medium">API & Backend</span>
          <h3
            class="text-xl font-semibold text-gray-900 dark:text-white mt-2 mb-3"
          >
            Créer une API REST sécurisée avec Laravel et Vue.js
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Les bonnes pratiques pour concevoir, documenter et sécuriser une API
            performante, avec exemples concrets.
          </p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">15 Juin 2025</span>
            <a
              href="#"
              class="text-primary-600 hover:text-primary-800 font-medium"
              >Lire l'article</a
            >
          </div>
        </div>
      </article>

      <!-- Article 3 -->
      <article
        class="blog-card bg-gray-50 dark:bg-gray-700 rounded-2xl overflow-hidden"
      >
        <div
          class="h-48 bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center"
        >
          <FontAwesomeIconComponent
            icon="fa-solid-palette"
            class="text-white text-4xl"
          />
        </div>
        <div class="p-6">
          <span class="text-sm text-purple-600 font-medium">UI/UX Design</span>
          <h3
            class="text-xl font-semibold text-gray-900 dark:text-white mt-2 mb-3"
          >
            Concevoir des interfaces modernes avec Tailwind CSS & Shadcn
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Astuces et exemples pour créer des interfaces élégantes, accessibles
            et responsives, adaptées à tous les écrans.
          </p>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500">2 Juin 2025</span>
            <a
              href="#"
              class="text-primary-600 hover:text-primary-800 font-medium"
              >Lire le guide</a
            >
          </div>
        </div>
      </article>
    </div>

    <div class="text-center mt-12">
      <a
        href="#"
        class="cta-button bg-primary-600 text-white px-8 py-4 rounded-full font-semibold"
      >
        Voir tous les articles
      </a>
    </div>
  </div>
</template>