<script setup lang="ts">
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2
        class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
      >
        Ce que disent mes clients
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Témoignages authentiques de clients satisfaits
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <!-- Témoignage 1 -->
      <div class="testimonial-card rounded-2xl p-8 text-center">
        <div class="mb-6">
          <img
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=80&h=80&fit=crop&crop=face&auto=format"
            alt="Sarah Johnson"
            class="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
          />
          <div class="stars text-xl mb-2">★★★★★</div>
          <p class="text-gray-700 dark:text-gray-300 italic mb-4">
            "Grâce à l'expertise de Franck Herold, notre plateforme SaaS a vu le
            jour plus vite que prévu, avec une qualité technique irréprochable.
            Sa capacité à comprendre nos besoins et à proposer des solutions
            innovantes a été déterminante pour le succès du projet."
          </p>
          <div>
            <h4 class="font-semibold text-gray-900 dark:text-white">
              Sarah Johnson
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              CEO, TechInnovate
            </p>
          </div>
        </div>
      </div>

      <!-- Témoignage 2 -->
      <div class="testimonial-card rounded-2xl p-8 text-center">
        <div class="mb-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format"
            alt="David Chen"
            class="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
          />
          <div class="stars text-xl mb-2">★★★★★</div>
          <p class="text-gray-700 dark:text-gray-300 italic mb-4">
            "Collaboration fluide, livraisons toujours dans les temps et un
            accompagnement après-projet très professionnel. Franck a su
            automatiser nos processus et améliorer la productivité de notre
            équipe. Je recommande vivement !"
          </p>
          <div>
            <h4 class="font-semibold text-gray-900 dark:text-white">
              David Chen
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              CTO, FinanceFlow
            </p>
          </div>
        </div>
      </div>

      <!-- Témoignage 3 -->
      <div class="testimonial-card rounded-2xl p-8 text-center">
        <div class="mb-6">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face&auto=format"
            alt="Marie Dubois"
            class="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
          />
          <div class="stars text-xl mb-2">★★★★★</div>
          <p class="text-gray-700 dark:text-gray-300 italic mb-4">
            "L'expérience 3D développée par Franck a transformé notre showroom
            virtuel : immersion totale, navigation intuitive et hausse de 40 %
            de nos ventes en quelques mois. Un partenaire fiable et créatif."
          </p>
          <div>
            <h4 class="font-semibold text-gray-900 dark:text-white">
              Marie Dubois
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Directrice Marketing, DesignSpace
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>