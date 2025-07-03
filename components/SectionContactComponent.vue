<script setup>
const submitting = ref(false);

// Formulaire de contact
const form = reactive({
  name: "",
  email: "",
  projectType: "",
  message: "",
});

const submitForm = async () => {
  submitting.value = true;

  // Simulation d'envoi (remplacez par votre logique)
  await new Promise((resolve) => setTimeout(resolve, 2000));

  alert(
    "Message envoyé avec succès ! Je vous recontacterai dans les plus brefs délais."
  );

  // Reset du formulaire
  Object.keys(form).forEach((key) => (form[key] = ""));
  submitting.value = false;
};
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2
        class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
      >
        Créons quelque chose ensemble
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Prêt à démarrer votre projet ? Contactez-moi pour discuter de vos
        besoins, obtenir un devis ou simplement échanger sur vos idées
        digitales.
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-12">
      <!-- Formulaire de contact -->
      <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Envoyez-moi un message
        </h3>
        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >Nom complet</label
              >
              <input
                type="text"
                v-model="form.name"
                class="form-field w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Votre nom"
                required
              />
            </div>
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >Email</label
              >
              <input
                type="email"
                v-model="form.email"
                class="form-field w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="votre@email.com"
                required
              />
            </div>
          </div>
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Type de projet</label
            >
            <select
              v-model="form.projectType"
              class="form-field w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            >
              <option value="">Sélectionnez un type de projet</option>
              <option value="site-vitrine">Site vitrine</option>
              <option value="ecommerce">E-commerce</option>
              <option value="application">Application web</option>
              <option value="experience-3d">Expérience 3D</option>
              <option value="maintenance">Maintenance/Optimisation</option>
              <option value="autre">Autre</option>
            </select>
          </div>
          <div>
            <label
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Message</label
            >
            <textarea
              v-model="form.message"
              rows="5"
              class="form-field w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Décrivez votre projet, vos objectifs et vos contraintes..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="cta-button w-full bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center"
            :disabled="submitting"
          >
            <FontAwesomeIconComponent
              icon="fa-solid-paper-plane"
              class="mr-2"
            />
            <FontAwesomeIconComponent
              icon="fa-solid-arrows-rotate"
              class="mr-2 animate-spin"
              v-if="submitting"
            />
            {{ submitting ? "Envoi en cours..." : "Obtenir mon devis gratuit" }}
          </button>
        </form>
      </div>

      <!-- Informations de contact -->
      <div class="space-y-8">
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Autres moyens de me contacter
          </h3>
          <div class="space-y-4">
            <div class="flex items-center">
              <div
                class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mr-4"
              >
                <FontAwesomeIconComponent icon="fa-solid-envelope" />
              </div>
              <div>
                <h4 class="font-medium text-gray-900 dark:text-white">Email</h4>
                <a
                  href="mailto:heroldtamko39@gmail.com"
                  class="text-primary-600 hover:text-primary-800"
                  >heroldtamko39@gmail.com</a
                >
              </div>
            </div>
            <div class="flex items-center">
              <div
                class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4"
              >
                <FontAwesomeIconComponent icon="fa-solid-phone" />
              </div>
              <div>
                <h4 class="font-medium text-gray-900 dark:text-white">
                  Téléphone
                </h4>
                <a
                  href="tel:+237697626397"
                  class="text-primary-600 hover:text-primary-800"
                  >+237 697 62 63 97</a
                >
              </div>
            </div>
            <div class="flex items-center">
              <div
                class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4"
              >
                <FontAwesomeIconComponent icon="fa-solid-location-dot" />
              </div>
              <div>
                <h4 class="font-medium text-gray-900 dark:text-white">
                  Localisation
                </h4>
                <p class="text-gray-600 dark:text-gray-300">
                  Logbessou, Douala, Cameroun
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Calendly ou disponibilités -->
        <div
          class="bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 class="text-xl font-semibold mb-4">
            Réservez un appel découverte
          </h3>
          <p class="text-primary-100 mb-6">
            Discutons de votre projet lors d'un appel gratuit de 30 minutes.
          </p>
          <a
            href="mailto:heroldtamko39@gmail.com"
            class="cta-button bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Proposer un créneau par email
          </a>
        </div>

        <!-- Réseaux sociaux -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Suivez-moi
          </h3>
          <div class="flex space-x-4">
            <a
              href="https://github.com/STIFLEUR390"
              target="_blank"
              rel="noopener"
              class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              aria-label="GitHub"
            >
              <FontAwesomeIconComponent icon="fa-brands-github" />
            </a>
            <a
              href="https://linkedin.com/in/franck-tamto-87068624b"
              target="_blank"
              rel="noopener"
              class="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="LinkedIn"
            >
              <FontAwesomeIconComponent icon="fa-brands-linkedin" />
            </a>
            <a
              href="https://dm-cm.net"
              target="_blank"
              rel="noopener"
              class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
              aria-label="Site web"
            >
              <FontAwesomeIconComponent icon="fa-solid-newspaper" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>