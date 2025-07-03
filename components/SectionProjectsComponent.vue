<script setup>
const projects = ref([
  {
    title: "Plateforme E-learning TCF Canada",
    short: "Préparation interactive à l'examen TCF Canada avec correction IA.",
    long: "Développement d'une plateforme e-learning complète pour la préparation au TCF Canada. Fonctionnalités : quiz interactifs, gestion de contenu, correction automatisée par IA, paiement en ligne, interface admin avancée.",
    icon: "school",
    bgClass: "bg-gradient-to-r from-blue-500 to-purple-600",
    tags: [
      {
        label: "Laravel",
        class:
          "px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm",
      },
      {
        label: "Livewire",
        class:
          "px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm",
      },
      {
        label: "MySQL",
        class:
          "px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 rounded-full text-sm",
      },
    ],
    demo: "https://tcfcanada.dm-cm.net",
    code: "",
    video: "",
    iconFA: "fa-solid-school",
  },
  {
    title: "SaaS Gestion Scolaire",
    short: "Application web multi-établissements pour la gestion scolaire.",
    long: "SaaS de gestion scolaire : inscriptions, examens, notes, reporting, génération de documents, abonnements multi-niveaux, import/export de données. Interface intuitive et sécurisée.",
    icon: "apartment",
    bgClass: "bg-gradient-to-r from-green-500 to-teal-600",
    tags: [
      {
        label: "Laravel",
        class:
          "px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm",
      },
      {
        label: "Livewire",
        class:
          "px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm",
      },
      {
        label: "MySQL",
        class:
          "px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 rounded-full text-sm",
      },
    ],
    demo: "https://gasm.dm-cm.net",
    code: "",
    video: "",
    iconFA: "fa-solid-building-user",
  },
  {
    title: "Gestion de Traductions Multilingues",
    short: "Automatisation de la localisation d'applications web.",
    long: "Application web pour gérer et automatiser les traductions multilingues : import/export JSON, sélection de langues, génération automatisée, interface intuitive. Réduction de 70% du temps de localisation.",
    icon: "translate",
    bgClass: "bg-gradient-to-r from-purple-500 to-pink-600",
    tags: [
      {
        label: "Laravel",
        class:
          "px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm",
      },
      {
        label: "MySQL",
        class:
          "px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 rounded-full text-sm",
      },
    ],
    demo: "https://translate.dm-cm.net",
    code: "",
    video: "",
    iconFA: "fa-solid-language",
  },
  {
    title: "Automatisation d'Emails Personnalisés",
    short: "Envoi automatique d'emails ciblés avec planification.",
    long: "Système avancé d'envoi d'emails personnalisés : configuration de projets, gestion des utilisateurs, planification via cron, interface d'administration.",
    icon: "email",
    bgClass: "bg-gradient-to-r from-orange-500 to-yellow-500",
    tags: [
      {
        label: "Laravel",
        class:
          "px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm",
      },
    ],
    demo: "https://registeredtcf-gmail.whatboost.net",
    code: "",
    video: "",
    iconFA: "fa-solid-envelope",
  },
  {
    title: "Distribution Automatisée de Factures",
    short: "Extraction et distribution automatisée de factures PDF.",
    long: "Solution web pour extraire et distribuer automatiquement des factures à partir de PDF : gestion des utilisateurs, import Excel, moteur d'extraction, reporting visuel, réduction de 70% du temps de traitement.",
    icon: "receipt_long",
    bgClass: "bg-gradient-to-r from-blue-600 to-green-500",
    tags: [
      {
        label: "PHP",
        class:
          "px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-sm",
      },
      {
        label: "MySQL",
        class:
          "px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 rounded-full text-sm",
      },
    ],
    demo: "",
    code: "",
    video: "",
    iconFA: "fa-solid-file-invoice",
  },
  {
    title: "Gestion d'Assurance Étudiante",
    short: "Plateforme web & USSD pour la gestion d'assurances.",
    long: "Solution complète de gestion d'assurance étudiante : interface USSD (API MTN), plateforme web admin, gestion des contrats, génération de rapports, amélioration de l'efficacité opérationnelle.",
    icon: "verified_user",
    bgClass: "bg-gradient-to-r from-teal-500 to-blue-500",
    tags: [
      {
        label: "Laravel",
        class:
          "px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm",
      },
      {
        label: "PHP",
        class:
          "px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-sm",
      },
    ],
    demo: "",
    code: "",
    video: "",
    iconFA: "fa-solid-user-shield",
  },
]);

const showModal = ref(false);
const currentIdx = ref(0);

const openModal = (idx) => {
  currentIdx.value = idx;
  showModal.value = true;
};
const closeModal = () => {
  showModal.value = false;
};

const currentProject = computed(() => projects.value[currentIdx.value] || {});
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2
        class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
      >
        Mes réalisations
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Découvrez quelques-uns de mes projets les plus marquants
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(project, idx) in projects"
        :key="idx"
        class="hover-lift bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
      >
        <div
          :class="project.bgClass + ' h-48 flex items-center justify-center'"
        >
          <FontAwesomeIconComponent
            :icon="project.iconFA"
            class="text-white text-6xl"
          />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {{ project.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ project.short }}
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tag in project.tags" :key="tag" :class="tag.class">{{
              tag.label
            }}</span>
          </div>
          <div class="flex space-x-4">
            <button
              @click="openModal(idx)"
              class="text-primary-600 hover:text-primary-800 font-medium"
            >
              En savoir plus
            </button>
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              >Démo</a
            >
            <a
              v-if="project.code"
              :href="project.code"
              target="_blank"
              class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              >Code source</a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-12">
      <a
        href="#contact"
        class="cta-button bg-primary-600 text-white px-8 py-4 rounded-full font-semibold"
      >
        Voir tous mes projets
      </a>
    </div>

    <!-- Modals via Teleport -->
    <teleport to="body">
      <div
        v-if="showModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      >
        <div
          class="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-lg w-full relative"
        >
          <button
            @click="closeModal"
            class="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
          >
            <FontAwesomeIconComponent icon="fa-solid-xmark" />
          </button>
          <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            {{ currentProject.title }}
          </h3>
          <p class="mb-4 text-gray-700 dark:text-gray-300">
            {{ currentProject.long }}
          </p>
          <div v-if="currentProject.demo" class="mb-4">
            <a
              :href="currentProject.demo"
              target="_blank"
              class="text-primary-600 hover:underline"
              >Voir la démo</a
            >
          </div>
          <div v-if="currentProject.video" class="mb-4">
            <video
              controls
              :src="currentProject.video"
              class="w-full rounded"
            ></video>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>