<script setup lang="ts">
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2
        class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
      >
        Tarifs transparents
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Des bases claires, des solutions sur-mesure : chaque projet est unique,
        le tarif s'adapte à vos besoins.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <!-- Développement Web -->
      <div
        class="pricing-card bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
      >
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Développement Web
          </h3>
          <div class="text-4xl font-bold text-primary-600 mb-2">
            à partir de 1 500 €
          </div>
          <p class="text-gray-600 dark:text-gray-300">
            Site vitrine, landing page ou application web simple
          </p>
        </div>
        <ul class="space-y-4 mb-8">
          <li class="flex items-center">
            <FontAwesomeIconComponent
              icon="fa-solid-check"
              class="text-green-500 mr-3"
            />
            <span class="text-gray-700 dark:text-gray-300"
              >Design responsive & moderne</span
            >
          </li>
          <li class="flex items-center">
            <FontAwesomeIconComponent
              icon="fa-solid-check"
              class="text-green-500 mr-3"
            />
            <span class="text-gray-700 dark:text-gray-300"
              >Optimisation SEO de base</span
            >
          </li>
          <li class="flex items-center">
            <FontAwesomeIconComponent
              icon="fa-solid-check"
              class="text-green-500 mr-3"
            />
            <span class="text-gray-700 dark:text-gray-300"
              >Formulaire de contact</span
            >
          </li>
          <li class="flex items-center">
            <FontAwesomeIconComponent
              icon="fa-solid-check"
              class="text-green-500 mr-3"
            />
            <span class="text-gray-700 dark:text-gray-300"
              >Hébergement 1 an offert</span
            >
          </li>
        </ul>
        <a
          href="#contact"
          class="cta-button w-full bg-primary-600 text-white py-3 rounded-lg text-center block font-semibold"
        >
          Commencer ce projet
        </a>
      </div>

      <!-- Automatisation & IA -->
      <div
        class="pricing-card bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 border-primary-500 relative"
      >
        <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span
            class="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium"
            >Populaire</span
          >
        </div>
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Automatisation & IA
          </h3>
          <div class="text-4xl font-bold text-primary-600 mb-2">
            à partir de 2 000 €
          </div>
          <p class="text-gray-600 dark:text-gray-300">
            Workflows automatisés, connecteurs API, chatbots IA
          </p>
        </div>
        <ul class="space-y-4 mb-8">
          <li class="flex items-center">
            <FontAwesomeIconComponent
              icon="fa-solid-check"
              class="text-green-500 mr-3"
            />
            <span class="text-gray-700 dark:text-gray-300"
              >Automatisation de processus (n8n, Flowaise, Zapier…)</span
            >
          </li>
          <li class="flex items-center">
            <FontAwesomeIconComponent
              icon="fa-solid-check"
              class="text-green-500 mr-3"
            />
            <span class="text-gray-700 dark:text-gray-300"
              >Intégration d'API & IA</span
            >
          </li>
          <li class="flex items-center">
            <FontAwesomeIconComponent
              icon="fa-solid-check"
              class="text-green-500 mr-3"
            />
            <span class="text-gray-700 dark:text-gray-300"
              >Extraction & traitement de données</span
            >
          </li>
          <li class="flex items-center">
            <FontAwesomeIconComponent
              icon="fa-solid-check"
              class="text-green-500 mr-3"
            />
            <span class="text-gray-700 dark:text-gray-300"
              >Déploiement & documentation</span
            >
          </li>
        </ul>
        <a
          href="#contact"
          class="cta-button w-full bg-primary-600 text-white py-3 rounded-lg text-center block font-semibold"
        >
          Automatiser mon business
        </a>
      </div>

      <!-- Maquettes UI/UX & Prototypage -->
      <div
        class="pricing-card bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
      >
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Maquettes UI/UX
          </h3>
          <div class="text-4xl font-bold text-primary-600 mb-2">
            à partir de 800 €
          </div>
          <p class="text-gray-600 dark:text-gray-300">
            Wireframes, prototypes interactifs, design d'interface
          </p>
        </div>
        <ul class="space-y-4 mb-8">
          <li class="flex items-center">
            <FontAwesomeIconComponent
              icon="fa-solid-check"
              class="text-green-500 mr-3"
            />
            <span class="text-gray-700 dark:text-gray-300"
              >Audit UX & recommandations</span
            >
          </li>
          <li class="flex items-center">
            <FontAwesomeIconComponent
              icon="fa-solid-check"
              class="text-green-500 mr-3"
            />
            <span class="text-gray-700 dark:text-gray-300"
              >Création de wireframes & maquettes</span
            >
          </li>
          <li class="flex items-center">
            <FontAwesomeIconComponent
              icon="fa-solid-check"
              class="text-green-500 mr-3"
            />
            <span class="text-gray-700 dark:text-gray-300"
              >Prototypage interactif</span
            >
          </li>
          <li class="flex items-center">
            <FontAwesomeIconComponent
              icon="fa-solid-check"
              class="text-green-500 mr-3"
            />
            <span class="text-gray-700 dark:text-gray-300"
              >Identité visuelle digitale</span
            >
          </li>
        </ul>
        <a
          href="#contact"
          class="cta-button w-full bg-primary-600 text-white py-3 rounded-lg text-center block font-semibold"
        >
          Demander un design
        </a>
      </div>
    </div>

    <!-- Autres services -->
    <div class="grid md:grid-cols-3 gap-8 mt-12">
      <!-- E-commerce -->
      <div
        class="pricing-card bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
      >
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            E-commerce
          </h3>
          <div class="text-4xl font-bold text-primary-600 mb-2">
            à partir de 2 500 €
          </div>
          <p class="text-gray-600 dark:text-gray-300">
            Boutique en ligne, gestion des paiements & stocks
          </p>
        </div>
        <ul class="space-y-4 mb-8">
          <li class="flex items-center">
            <FontAwesomeIconComponent
              icon="fa-solid-check"
              class="text-green-500 mr-3"
            />
            <span class="text-gray-700 dark:text-gray-300"
              >Catalogue produits & panier</span
            >
          </li>
          <li class="flex items-center">
            <FontAwesomeIconComponent
              icon="fa-solid-check"
              class="text-green-500 mr-3"
            />
            <span class="text-gray-700 dark:text-gray-300"
              >Paiements sécurisés (Stripe, PayPal…)</span
            >
          </li>
          <li class="flex items-center">
            <FontAwesomeIconComponent
              icon="fa-solid-check"
              class="text-green-500 mr-3"
            />
            <span class="text-gray-700 dark:text-gray-300"
              >Gestion des stocks & commandes</span
            >
          </li>
          <li class="flex items-center">
            <FontAwesomeIconComponent
              icon="fa-solid-check"
              class="text-green-500 mr-3"
            />
            <span class="text-gray-700 dark:text-gray-300"
              >Dashboard administrateur</span
            >
          </li>
        </ul>
        <a
          href="#contact"
          class="cta-button w-full bg-primary-600 text-white py-3 rounded-lg text-center block font-semibold"
        >
          Lancer ma boutique
        </a>
      </div>

      <!-- Intégration API & Données -->
      <div
        class="pricing-card bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
      >
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Intégration API & Données
          </h3>
          <div class="text-4xl font-bold text-primary-600 mb-2">
            à partir de 1 200 €
          </div>
          <p class="text-gray-600 dark:text-gray-300">
            Connexion de vos outils, synchronisation & automatisation
          </p>
        </div>
        <ul class="space-y-4 mb-8">
          <li class="flex items-center">
            <FontAwesomeIconComponent
              icon="fa-solid-check"
              class="text-green-500 mr-3"
            />
            <span class="text-gray-700 dark:text-gray-300"
              >Intégration d'API tierces</span
            >
          </li>
          <li class="flex items-center">
            <FontAwesomeIconComponent
              icon="fa-solid-check"
              class="text-green-500 mr-3"
            />
            <span class="text-gray-700 dark:text-gray-300"
              >Synchronisation de bases de données</span
            >
          </li>
          <li class="flex items-center">
            <FontAwesomeIconComponent
              icon="fa-solid-check"
              class="text-green-500 mr-3"
            />
            <span class="text-gray-700 dark:text-gray-300"
              >Automatisation des imports/exports</span
            >
          </li>
          <li class="flex items-center">
            <FontAwesomeIconComponent
              icon="fa-solid-check"
              class="text-green-500 mr-3"
            />
            <span class="text-gray-700 dark:text-gray-300"
              >Reporting & visualisation</span
            >
          </li>
        </ul>
        <a
          href="#contact"
          class="cta-button w-full bg-primary-600 text-white py-3 rounded-lg text-center block font-semibold"
        >
          Connecter mes outils
        </a>
      </div>

      <!-- Maintenance & Support -->
      <div
        class="pricing-card bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
      >
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Maintenance & Support
          </h3>
          <div class="text-4xl font-bold text-primary-600 mb-2">
            à partir de 100 €/mois
          </div>
          <p class="text-gray-600 dark:text-gray-300">
            Assistance, évolutions, sécurité & optimisation continue
          </p>
        </div>
        <ul class="space-y-4 mb-8">
          <li class="flex items-center">
            <FontAwesomeIconComponent
              icon="fa-solid-check"
              class="text-green-500 mr-3"
            />
            <span class="text-gray-700 dark:text-gray-300"
              >Maintenance corrective & évolutive</span
            >
          </li>
          <li class="flex items-center">
            <FontAwesomeIconComponent
              icon="fa-solid-check"
              class="text-green-500 mr-3"
            />
            <span class="text-gray-700 dark:text-gray-300"
              >Sauvegardes & sécurité</span
            >
          </li>
          <li class="flex items-center">
            <FontAwesomeIconComponent
              icon="fa-solid-check"
              class="text-green-500 mr-3"
            />
            <span class="text-gray-700 dark:text-gray-300"
              >Optimisation des performances</span
            >
          </li>
          <li class="flex items-center">
            <FontAwesomeIconComponent
              icon="fa-solid-check"
              class="text-green-500 mr-3"
            />
            <span class="text-gray-700 dark:text-gray-300"
              >Assistance technique prioritaire</span
            >
          </li>
        </ul>
        <a
          href="#contact"
          class="cta-button w-full bg-primary-600 text-white py-3 rounded-lg text-center block font-semibold"
        >
          Demander un support
        </a>
      </div>
    </div>

    <!-- Note personnalisée -->
    <div class="mt-16 text-center max-w-2xl mx-auto">
      <div class="bg-primary-100 dark:bg-primary-900 rounded-xl p-6">
        <FontAwesomeIconComponent
          icon="fa-solid-circle-info"
          class="text-3xl text-primary-600 mb-3"
        />
        <p class="text-gray-700 dark:text-gray-300 text-lg">
          <b>Chaque projet est unique :</b> les tarifs affichés sont des bases
          minimales. Un devis personnalisé vous sera proposé après analyse de
          vos besoins, de la complexité et des fonctionnalités souhaitées.
        </p>
      </div>
    </div>
  </div>
</template>