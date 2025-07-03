<script setup lang="ts">
const colorMode = useColorMode();

// Couleur dynamique selon le dark mode
const particleColor = computed(() =>
  colorMode.value === "dark" ? "#3b82f6" : "#6366f1"
);

// Ref pour le groupe de particules
const pointsRef = shallowRef(null);

// Animation des particules (rotation)
onMounted(() => {
  let frameId: number;
  const animate = () => {
    if (pointsRef.value) {
      pointsRef.value.rotation.x += 0.0005;
      pointsRef.value.rotation.y += 0.0008;
    }
    frameId = requestAnimationFrame(animate);
  };
  animate();
  onUnmounted(() => cancelAnimationFrame(frameId));
});

const particlePositions = new Float32Array(
  Array.from({ length: 3000 }, () => (Math.random() - 0.5) * 10)
);
</script>

<template>
  <div class="fixed inset-0 w-full h-full z-[-1] pointer-events-none">
    <TresCanvas :window-size="true" :alpha="true">
      <TresPerspectiveCamera :position="[0, 0, 5]" />
      <TresAmbientLight :intensity="0.7" />
      <TresPoints ref="pointsRef">
        <TresBufferGeometry>
          <TresBufferAttribute
            attach="attributes-position"
            :count="1000"
            :array="particlePositions"
            :itemSize="3"
          />
        </TresBufferGeometry>
        <TresPointsMaterial
          :color="particleColor"
          :size="0.03"
          :sizeAttenuation="true"
        />
      </TresPoints>
    </TresCanvas>
  </div>
</template>

<style scoped>
.fixed {
  position: fixed;
}
.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.z-\[-1\] {
  z-index: -1;
}
.pointer-events-none {
  pointer-events: none;
}
</style> 