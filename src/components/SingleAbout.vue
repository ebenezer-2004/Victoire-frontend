<template>
    <div class="welcome_docmed_area"  data-aos="fade-up" data-aos-duration="1000">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6">
                    <div class="welcome_thumb">
                        <div class="thumb_1">
                            <img src="/img/about/la_victoire30.jpg" style="height:440px;width:362px" alt="">
                        </div>
                        <div class="thumb_2">
                            <img src="/img/about/la_victoire22.jpg" style="height:440px;width:362px" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="welcome_docmed_info">
                        <h2>Qui Sommes-nous ?</h2>

                        <p style="font-size: 14px;text-align:justify">Clinique La Victoire est un établissement médical renommé, situé Avédji. La clinique est
                            réputée pour son excellence dans les soins de santé. Elle propose une gamme complète de
                            services médicaux, allant de la chirurgie générale à la médecine spécialisée en passant par
                            les soins infirmiers et les services d'imagerie médicale.
                            La clinique se distingue par la qualité de ses soins, son personnel hautement qualifié et
                            ses équipements médicaux de pointe. Elle est également reconnue pour son engagement envers
                            le bien-être de ses patients et sa volonté d'offrir un environnement chaleureux et
                            accueillant. <br><br>

                            En plus de ses services médicaux, la clinique propose également des services de réadaptation
                            et de rééducation, ainsi que des programmes de bien-être et de prévention pour promouvoir la
                            santé et le bien-être de la communauté.

                            Au fil des ans, Clinique La Victoire a su se forger une solide réputation et est devenue un
                            pilier de la santé dans la région.
                        </p>
                        <!-- <ul>

                            <li> <i class="flaticon-right"></i> Fournir des soins de santé de haute qualité. </li>
                            <li> <i class="flaticon-right"></i> Améliorer continuellement la qualité des soins </li>
                            <li> <i class="flaticon-right"></i> Assurer un accès équitable aux services de santé pour
                                tous les patients. </li>
                        </ul> -->
                        <routerLink to="/a-propos" class="boxed-btn3-white-2">En savoir plus</routerLink>
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

<style lang="scss" scoped></style>