<template>
  <div
    class="font-sans antialiased bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
  >
    <!-- Canvas Three.js -->
    <ThreeJSBackgroundComponent />

    <SectionNavigationComponent />

    <!-- Section Hero -->
    <section
      id="hero"
      class="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <SectionHeroComponent />
    </section>

    <!-- Section À propos -->
    <section
      id="about"
      class="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <SectionAboutComponent />
    </section>

    <!-- Section Méthodologie -->
    <section
      id="methodology"
      class="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <SectionMethodologyComponent />
    </section>

    <!-- Section Services -->

    <section
      id="services"
      class="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <SectionServicesComponent />
    </section>

    <!-- Section Projets -->
    <section
      id="projects"
      class="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <SectionProjectsComponent />
    </section>

    <!-- Section Témoignages -->
    <section
      id="testimonials"
      class="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <SectionTestimonialsComponent />
    </section>

    <!-- Section Tarifs -->
    <section
      id="pricing"
      class="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <SectionPricingComponent />
    </section>

    <!-- Section Blog -->
    <section
      id="blog"
      class="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <SectionBlogComponent />
    </section>

    <!-- Section Contact -->
    <section
      id="contact"
      class="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <SectionContactComponent />
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <SectionFooterComponent />
    </footer>
  </div>
</template>

<script setup>
useHead({
  title: "Portfolio | Franck Herold Tamto Tamko",
  titleTemplate: "%s",
});

const baseUrl = window.location.origin;

useSeoMeta({
  title: "Portfolio | Franck Herold Tamto Tamko",
  description:
    "Découvrez le portfolio de Franck Herold Tamto Tamko : développeur web, expert Nuxt.js, Vue.js, Tailwind CSS, et intégration de solutions modernes. Projets, méthodologie, services, témoignages et contact.",
  ogTitle: "Portfolio | Franck Herold Tamto Tamko",
  ogDescription:
    "Découvrez le portfolio de Franck Herold Tamto Tamko : développeur web, expert Nuxt.js, Vue.js, Tailwind CSS, et intégration de solutions modernes.",
  ogImage: "/profile.jpg",
  ogUrl: baseUrl,
  twitterCard: "summary_large_image",
  twitterTitle: "Portfolio | Franck Herold Tamto Tamko",
  twitterDescription:
    "Découvrez le portfolio de Franck Herold Tamto Tamko : développeur web, expert Nuxt.js, Vue.js, Tailwind CSS, et intégration de solutions modernes.",
  twitterImage: "/profile.jpg",
});

const gsap = useGSAP();

// Lifecycle
onMounted(() => {
  // Animations d'apparition pour les sections
  gsap.utils.toArray("section").forEach((section) => {
    gsap.fromTo(
      section.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
      }
    );
  });
});
</script>