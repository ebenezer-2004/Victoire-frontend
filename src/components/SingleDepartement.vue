<template>
    <div class="our_department_area"  data-aos="fade-up" data-aos-duration="1000">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="section_title text-center mb-55">
                        <h3>Nos départements</h3>
                        <p>Nous vous proposons divers services. <br>
                           en matiere de santé. </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-4 col-md-6 col-lg-4">
                    <div class="single_department">
                        <div class="department_thumb">
                            <img src="/img/department/1.png" alt="">
                        </div>
                        <div class="department_content">
                            <h3><a href="#">Ophtamologie</a></h3>
                            <p>Esteem spirit temper too say adieus who direct esteem.</p>
                            <a href="#" class="learn_more">Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 col-lg-4">
                    <div class="single_department">
                        <div class="department_thumb">
                            <img src="/img/department/2.png" alt="">
                        </div>
                        <div class="department_content">
                            <h3><a href="#">Chirurgie Générale</a></h3>
                            <p>Esteem spirit temper too say adieus who direct esteem.</p>
                            <a href="#" class="learn_more">Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 col-lg-4">
                    <div class="single_department">
                        <div class="department_thumb">
                            <img src="/img/department/3.png" alt="">
                        </div>
                        <div class="department_content">
                            <h3><a href="#">Gynécologie-Obstétrique</a></h3>
                            <p>Esteem spirit temper too say adieus who direct esteem.</p>
                            <a href="#" class="learn_more">Learn More</a>
                        </div>
                    </div>
                </div>
               
            </div>
            <div class="row d-flex justify-content-center" >
            <a href="#" class="genric-btn success-border">Voir plus</a>
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

<style lang="scss" scoped>

</style>