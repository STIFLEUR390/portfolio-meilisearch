<script setup lang="ts">
const skills = [
  {
    label: "Vue / Nuxt.js",
    value: 95,
    gradient: "from-primary-500 to-primary-600",
  },
  {
    label: "Tailwind CSS & Shadcn",
    value: 90,
    gradient: "from-green-500 to-green-600",
  },
  {
    label: "Laravel & API REST",
    value: 90,
    gradient: "from-purple-500 to-purple-600",
  },
  {
    label: "n8n & Automatisation",
    value: 85,
    gradient: "from-orange-500 to-orange-600",
  },
  {
    label: "Docker & DevOps",
    value: 80,
    gradient: "from-green-500 to-green-600",
  },
  {
    label: "Meilisearch",
    value: 70,
    gradient: "from-pink-500 to-pink-600",
  },
];

const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
});
</script>

<template>
  <section
    id="about"
    class="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    v-gsap.whenVisible.from="{ opacity: 0, y: 60 }"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2
          class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          À propos de moi
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Développeur Full‑Stack, Designer & Automatisien IA passionné, avec
          plus de 4 ans d'expérience dans la création de solutions web
          innovantes et l'automatisation intelligente.
        </p>
      </div>
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Mon parcours
          </h3>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            Diplômé en Informatique Industrielle et Automatisme (BTS, Institut
            Universitaire de la Côte, Douala), j'ai rejoint <b>ETECH KEYS</b> en
            2019 comme développeur full‑stack. J'y ai conçu et maintenu des
            plateformes web robustes et des systèmes d'automatisation
            (distribution de factures, gestion d'assurance étudiante,
            multi‑partenaires) utilisés par des centaines d'utilisateurs.
          </p>
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            Depuis 2023, je travaille en freelance pour des clients
            internationaux et développe mes propres solutions : plateforme
            e‑learning TCF Canada, SaaS de gestion scolaire, outil de traduction
            multilingue, automatisation d'emails, etc. Mon objectif : allier
            performance, sécurité et expérience utilisateur pour chaque projet.
          </p>
          <!-- Compétences avec barres animées -->
          <div class="mt-8 space-y-4">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
              Compétences techniques
            </h4>
            <div class="space-y-3" v-gsap.timeline.whenVisible>
              <SkillBar
                v-for="(skill, i) in skills"
                :key="skill.label"
                :label="skill.label"
                :value="skill.value"
                :gradient="skill.gradient"
                :animated="mounted"
                v-gsap.add.from="{ opacity: 0, x: -40, delay: i * 0.08 }"
              />
            </div>
          </div>
        </div>
        <div class="space-y-6">
          <!-- Carte approche collaborative -->
          <div
            class="hover-lift bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl p-8 text-white"
            v-gsap.whenVisible.from="{ opacity: 0, y: 40, scale: 0.95 }"
          >
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-user-group" class="text-3xl mr-3" />
              <h4 class="text-xl font-semibold">Approche collaborative</h4>
            </div>
            <p class="text-primary-100 mb-4">
              J'adopte une méthodologie transparente et itérative : feedback
              continu, livraisons fréquentes et communication ouverte, pour
              garantir une montée en valeur rapide et conforme à vos objectifs.
            </p>
            <a
              href="#methodology"
              class="inline-flex items-center text-white font-medium hover:text-primary-100 transition-colors"
            >
              Découvrir ma méthodologie
              <UIcon name="i-heroicons-arrow-right" class="ml-2" />
            </a>
          </div>
          <!-- Stack technique -->
          <div
            class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8"
            v-gsap.whenVisible.from="{ opacity: 0, y: 40 }"
          >
            <h4
              class="text-xl font-semibold text-gray-900 dark:text-white mb-6"
            >
              Stack technique principale
            </h4>
            <div class="grid grid-cols-2 gap-4">
              <div class="flex items-center space-x-3">
                <div
                  class="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center"
                >
                  <span class="text-blue-600 dark:text-blue-400 font-bold"
                    >V</span
                  >
                </div>
                <span class="text-gray-700 dark:text-gray-300"
                  >Vue / Nuxt.js</span
                >
              </div>
              <div class="flex items-center space-x-3">
                <div
                  class="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center"
                >
                  <span class="text-green-600 dark:text-green-400 font-bold"
                    >S</span
                  >
                </div>
                <span class="text-gray-700 dark:text-gray-300"
                  >Shadcn & Tailwind CSS</span
                >
              </div>
              <div class="flex items-center space-x-3">
                <div
                  class="w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center"
                >
                  <span class="text-yellow-600 dark:text-yellow-400 font-bold"
                    >L</span
                  >
                </div>
                <span class="text-gray-700 dark:text-gray-300">Laravel</span>
              </div>
              <div class="flex items-center space-x-3">
                <div
                  class="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center"
                >
                  <span class="text-purple-600 dark:text-purple-400 font-bold"
                    >N</span
                  >
                </div>
                <span class="text-gray-700 dark:text-gray-300"
                  >n8n & Flowaise IA</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 