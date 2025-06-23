<template>
  <div class="service_area" id="services">
    <div class="container p-0">
      <div class="row no-gutters">
        <!-- Service 1 -->
        <div class="col-xl-4 col-md-4">
          <div class="single_service" data-aos="fade-down" data-aos-duration="1000">
            <div class="icon">
              <i class="flaticon-electrocardiogram"></i>
            </div>
            <h3>Hospitalité</h3>
            <p>Un accueil chaleureux, des chambres confortables et un personnel toujours à votre écoute.</p>
            <a href="#" class="boxed-btn3-white">Demander un lit</a>
          </div>
        </div>

        <!-- Service 2 -->
        <div class="col-xl-4 col-md-4">
          <div class="single_service" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div class="icon">
              <i class="flaticon-emergency-call"></i>
            </div>
            <h3>Soins d'urgence</h3>
            <p>Disponible 24h/24, notre service d’urgence vous garantit une prise en charge rapide et efficace.</p>
            <a href="tel:+22870388888" class="boxed-btn3-white">Appelez-nous maintenant</a>
          </div>
        </div>

        <!-- Service 3 -->
        <div class="col-xl-4 col-md-4">
          <div class="single_service" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
            <div class="icon">
              <i class="flaticon-first-aid-kit"></i>
            </div>
            <h3>Consultations</h3>
            <p>Des consultations générales et spécialisées, dispensées par des médecins expérimentés et bienveillants.</p>
            <a href="#" class="boxed-btn3-white">Prendre rendez-vous</a>
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
.single_service {
  transition: all 0.3s ease-in-out;
}

</style>
