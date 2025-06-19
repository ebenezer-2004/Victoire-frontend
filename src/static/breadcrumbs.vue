<template>
  <div class="bradcam_area breadcam_bg bradcam_overlay">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="bradcam_text">
            <h3>{{ title }}</h3>
            <p>
              <routerLink href="/">Accueil /</routerLink> {{ current }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  current: {
    type: String,
    required: true
  }
});
</script>

<style scoped>

</style>
