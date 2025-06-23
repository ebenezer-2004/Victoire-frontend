<template>
  <div class="testmonial_area"  data-aos="fade-up" data-aos-duration="1000">
    <div class="testmonial_active owl-carousel">

      <div class="single-testmonial testmonial_bg_1 overlay2">
        <div class="container">
          <div class="row">
            <div class="col-xl-10 offset-xl-1">
              <div class="testmonial_info text-center">
                <div class="quote">
                  <i class="flaticon-straight-quotes"></i>
                </div>
                <p>
                  “À la Clinique La Victoire, chaque patient est accueilli avec attention et respect. Parce que la santé
                  ne se limite pas à un diagnostic, nous plaçons l’écoute et l’accompagnement humain au cœur de notre
                  engagement.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="single-testmonial testmonial_bg_2 overlay2">
        <div class="container">
          <div class="row">
            <div class="col-xl-10 offset-xl-1">
              <div class="testmonial_info text-center">
                <div class="quote">
                  <i class="flaticon-straight-quotes"></i>
                </div>
                <p>
                  “Nous croyons que la confiance est le premier soin à offrir. À chaque consultation, notre équipe
                  médicale s’investit pour offrir des soins de qualité, dans un climat serein et professionnel.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="single-testmonial testmonial_bg_1 overlay2">
        <div class="container">
          <div class="row">
            <div class="col-xl-10 offset-xl-1">
              <div class="testmonial_info text-center">
                <div class="quote">
                  <i class="flaticon-straight-quotes"></i>
                </div>
                <p>
                  “Plus qu’un établissement de soins, la Clinique La Victoire est un espace de réconfort, d’écoute et
                  d’expertise. Ici, les technologies modernes s’allient à une approche profondément humaine.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="single-testmonial testmonial_bg_2 overlay2">
        <div class="container">
          <div class="row">
            <div class="col-xl-10 offset-xl-1">
              <div class="testmonial_info text-center">
                <div class="quote">
                  <i class="flaticon-straight-quotes"></i>
                </div>
                <p>
                  “Nous savons qu’un bon diagnostic commence par une écoute attentive. Chaque jour, nous mettons tout
                  en œuvre pour que nos patients se sentent compris, soutenus, et pleinement pris en charge.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="single-testmonial testmonial_bg_1 overlay2">
        <div class="container">
          <div class="row">
            <div class="col-xl-10 offset-xl-1">
              <div class="testmonial_info text-center">
                <div class="quote">
                  <i class="flaticon-straight-quotes"></i>
                </div>
                <p>
                  “À La Victoire, chaque membre du personnel partage la même mission : offrir des soins sûrs,
                  personnalisés et empreints de compassion. Ici, l’humain est au centre de toutes nos décisions.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    once: false, // Permet à l’animation de se rejouer à chaque fois qu’on revient dans le viewport
    mirror: true // Permet à l'animation de se rejouer lorsqu'on scroll en arrière
  })
})
</script>

<style scoped>
</style>
