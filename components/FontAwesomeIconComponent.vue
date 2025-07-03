<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
});

// Liste des préfixes FA6 (classiques et nouveaux)
const prefixes = [
  "fas",
  "far",
  "fab", // legacy
  "fa-solid",
  "fa-regular",
  "fa-light",
  "fa-thin",
  "fa-duotone",
  "fa-brands",
  "fa-sharp",
  "fa-sharp-solid",
  "fa-sharp-regular",
  "fa-sharp-light",
  "fa-sharp-thin",
];

function iconToClass(icon) {
  // Cherche le préfixe le plus long qui matche
  const found = prefixes.find((prefix) => icon.startsWith(prefix + "-"));
  if (found) {
    // Pour FA6, le nom d'icône commence après le préfixe + '-'
    const iconName = icon.slice(found.length + 1); // +1 pour le tiret
    return `${found} fa-${iconName}`;
  }
  // Fallback : gestion ancienne syntaxe "fas-bullhorn" => "fas fa-bullhorn"
  const [prefix, ...iconParts] = icon.split("-");
  if (prefixes.includes(prefix)) {
    const iconName = iconParts.join("-");
    return `${prefix} fa-${iconName}`;
  }
  // Si aucun préfixe reconnu, retourne juste fa-xxx
  return `fa fa-${icon}`;
}
</script>

<template>
  <i v-if="props.icon" :class="iconToClass(props.icon)" aria-hidden="true"></i>
</template>