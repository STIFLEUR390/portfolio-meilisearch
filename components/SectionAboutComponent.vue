<script setup lang="ts">
const gsap = useGSAP();

onMounted(() => {
  document.querySelectorAll(".counter").forEach((counter) => {
    const target = parseInt(counter.dataset.target);
    gsap.fromTo(
      counter,
      { innerText: 0 },
      {
        innerText: target,
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: counter,
          start: "top 80%",
        },
      }
    );
  });

  // Barres de compétences
  document.querySelectorAll(".skill-bar").forEach((bar) => {
    const width = bar.dataset.width;
    gsap.fromTo(
      bar,
      { width: "0%" },
      {
        width: width,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bar,
          start: "top 85%",
        },
      }
    );
  });
});
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2
        class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
      >
        À propos de moi
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Développeur Full‑Stack, Designer & Automatisien IA passionné, avec plus
        de 4 ans d'expérience dans la création de solutions web innovantes et
        l'automatisation intelligente.
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div class="space-y-6">
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Mon parcours
        </h3>

        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
          Diplômé en Informatique Industrielle et Automatisme (BTS, Institut
          Universitaire de la Côte, Douala), j'ai rejoint
          <b>ETECH KEYS</b> en 2019 comme développeur full‑stack. J'y ai conçu
          et maintenu des plateformes web robustes et des systèmes
          d'automatisation (distribution de factures, gestion d'assurance
          étudiante, multi‑partenaires) utilisés par des centaines
          d'utilisateurs.
        </p>

        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
          Depuis 2023, je travaille en freelance pour des clients internationaux
          et développe mes propres solutions : plateforme e‑learning TCF Canada,
          SaaS de gestion scolaire, outil de traduction multilingue,
          automatisation d'emails, etc. Mon objectif : allier performance,
          sécurité et expérience utilisateur pour chaque projet.
        </p>

        <!-- Compétences avec barres animées -->
        <div class="mt-8 space-y-4">
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
            Compétences techniques
          </h4>

          <div class="space-y-3">
            <div>
              <div class="flex justify-between mb-1">
                <span class="text-sm text-gray-600 dark:text-gray-300"
                  >Vue / Nuxt.js</span
                >
                <span class="text-sm text-gray-600 dark:text-gray-300"
                  >95%</span
                >
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                <div
                  class="skill-bar bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                  data-width="95%"
                ></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between mb-1">
                <span class="text-sm text-gray-600 dark:text-gray-300"
                  >Tailwind CSS & Shadcn</span
                >
                <span class="text-sm text-gray-600 dark:text-gray-300"
                  >90%</span
                >
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                <div
                  class="skill-bar bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                  data-width="90%"
                ></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between mb-1">
                <span class="text-sm text-gray-600 dark:text-gray-300"
                  >Laravel & API REST</span
                >
                <span class="text-sm text-gray-600 dark:text-gray-300"
                  >90%</span
                >
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                <div
                  class="skill-bar bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full"
                  data-width="90%"
                ></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between mb-1">
                <span class="text-sm text-gray-600 dark:text-gray-300"
                  >n8n & Automatisation</span
                >
                <span class="text-sm text-gray-600 dark:text-gray-300"
                  >85%</span
                >
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                <div
                  class="skill-bar bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full"
                  data-width="85%"
                ></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between mb-1">
                <span class="text-sm text-gray-600 dark:text-gray-300"
                  >Docker & DevOps</span
                >
                <span class="text-sm text-gray-600 dark:text-gray-300"
                  >80%</span
                >
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                <div
                  class="skill-bar bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                  data-width="80%"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <!-- Carte approche collaborative -->
        <div
          class="hover-lift bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl p-8 text-white"
        >
          <div class="flex items-center mb-4">
            <FontAwesomeIconComponent
              icon="fa-solid-users"
              class="text-3xl mr-3"
            />
            <h4 class="text-xl font-semibold">Approche collaborative</h4>
          </div>
          <p class="text-primary-100 mb-4">
            J'adopte une méthodologie transparente et itérative : feedback
            continu, livraisons fréquentes et communication ouverte, pour
            garantir une montée en valeur rapide et conforme à vos objectifs.
          </p>
          <a
            href="#methodology"
            class="inline-flex items-center text-white font-medium hover:text-primary-100 transition-colors"
          >
            Découvrir ma méthodologie
            <FontAwesomeIconComponent
              icon="fa-solid-arrow-right"
              class="ml-2"
            />
          </a>
        </div>

        <!-- Stack technique -->
        <div class="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
          <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
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
</template>