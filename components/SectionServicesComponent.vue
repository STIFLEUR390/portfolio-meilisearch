<script setup lang="ts">
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2
        class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
      >
        Mes services
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Des solutions sur-mesure pour accélérer votre transformation digitale
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <!-- Développement Web -->
      <div
        class="hover-lift bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 text-center"
      >
        <div
          class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <FontAwesomeIconComponent
            icon="fa-solid-globe"
            class="text-blue-600 dark:text-blue-400 text-3xl"
          />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Développement Web
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          Création de sites et applications web performants, modernes et
          évolutifs.
        </p>
        <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-2 mb-6">
          <li>• Sites vitrine & institutionnels</li>
          <li>• Applications web sur-mesure</li>
          <li>• Progressive Web Apps (PWA)</li>
          <li>• Optimisation SEO</li>
        </ul>
        <a
          href="#contact"
          class="cta-button bg-blue-600 text-white px-6 py-3 rounded-full"
        >
          En savoir plus
        </a>
      </div>

      <!-- Création de Maquettes UI/UX -->
      <div
        class="hover-lift bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 text-center"
      >
        <div
          class="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <FontAwesomeIconComponent
            icon="fa-solid-pencil-ruler"
            class="text-pink-600 dark:text-pink-400 text-3xl"
          />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Création de Maquettes UI/UX
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          Conception de wireframes, prototypes interactifs et design
          d'interfaces intuitives.
        </p>
        <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-2 mb-6">
          <li>• Wireframes & maquettes</li>
          <li>• Prototypage interactif</li>
          <li>• Expérience utilisateur optimisée</li>
          <li>• Identité visuelle digitale</li>
        </ul>
        <a
          href="#contact"
          class="cta-button bg-pink-600 text-white px-6 py-3 rounded-full"
        >
          Découvrir
        </a>
      </div>

      <!-- Automatisation & IA -->
      <div
        class="hover-lift bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 text-center"
      >
        <div
          class="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <FontAwesomeIconComponent
            icon="fa-solid-robot"
            class="text-indigo-600 dark:text-indigo-400 text-3xl"
          />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Automatisation & IA
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          Automatisation de processus métiers et intégration d'IA (n8n, Flowise,
          API, GPT).
        </p>
        <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-2 mb-6">
          <li>• Workflows automatisés</li>
          <li>• Connecteurs API & IA</li>
          <li>• Extraction et traitement de données</li>
          <li>• Chatbots & assistants IA</li>
        </ul>
        <a
          href="#contact"
          class="cta-button bg-indigo-600 text-white px-6 py-3 rounded-full"
        >
          Automatiser maintenant
        </a>
      </div>

      <!-- E-commerce -->
      <div
        class="hover-lift bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 text-center"
      >
        <div
          class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <FontAwesomeIconComponent
            icon="fa-solid-cart-shopping"
            class="text-green-600 dark:text-green-400 text-3xl"
          />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          E-commerce
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          Boutiques en ligne performantes avec gestion complète des commandes et
          paiements.
        </p>
        <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-2 mb-6">
          <li>• Paiements sécurisés</li>
          <li>• Gestion des stocks</li>
          <li>• Dashboard administrateur</li>
          <li>• Analytics avancées</li>
        </ul>
        <a
          href="#contact"
          class="cta-button bg-green-600 text-white px-6 py-3 rounded-full"
        >
          Commencer maintenant
        </a>
      </div>

      <!-- Intégration d'API & Données -->
      <div
        class="hover-lift bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 text-center"
      >
        <div
          class="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <FontAwesomeIconComponent
            icon="fa-solid-plug"
            class="text-yellow-600 dark:text-yellow-400 text-3xl"
          />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Intégration d'API & Données
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          Connexion de vos outils, synchronisation de données et automatisation
          des échanges.
        </p>
        <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-2 mb-6">
          <li>• Intégration d'API tierces</li>
          <li>• Synchronisation de bases de données</li>
          <li>• Automatisation des imports/exports</li>
          <li>• Reporting & visualisation</li>
        </ul>
        <a
          href="#contact"
          class="cta-button bg-yellow-600 text-white px-6 py-3 rounded-full"
        >
          Connecter mes outils
        </a>
      </div>

      <!-- Maintenance & Support -->
      <div
        class="hover-lift bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 text-center"
      >
        <div
          class="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <FontAwesomeIconComponent
            icon="fa-solid-tools"
            class="text-red-600 dark:text-red-400 text-3xl"
          />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Maintenance & Support
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          Suivi, évolutions, corrections et optimisation continue de vos
          solutions digitales.
        </p>
        <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-2 mb-6">
          <li>• Maintenance corrective & évolutive</li>
          <li>• Sauvegardes & sécurité</li>
          <li>• Optimisation des performances</li>
          <li>• Assistance technique</li>
        </ul>
        <a
          href="#contact"
          class="cta-button bg-red-600 text-white px-6 py-3 rounded-full"
        >
          Demander un support
        </a>
      </div>
    </div>
  </div>
</template>