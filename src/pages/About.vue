<template>
    <Breadcrumbs title="A propos" current="A propos" />
    <SingleAbout />
    <div class="container" style="margin-top: -200px;">
        <div class="section-top-border">
            <div class="row">
                <div class="col-md-6">
                    <img src="/img/elements/la_victoire28 (1).jpg" alt="" class="img-fluid"
                        style="height:90%; width: 100%;">
                </div>
                <div class="col-md-6 mt-sm-10 d-flex flex-column">
                    <h2 class="mb-10" style="text-align: start;">Notre mission</h2>
                    <p style="text-align: justify;margin-top:-20px">La Clinique La Victoire est de fournir des soins de
                        santé de haute qualité, accessibles et personnalisés à la
                        population de Lomé et de ses environs. La clinique s'engage à offrir des services médicaux
                        complets et spécialisés,
                        en mettant l'accent sur l'excellence clinique, la compassion et le respect des patients. Elle
                        vise également à promouvoir
                        la santé et le bien-être en proposant des programmes de prévention et de sensibilisation à la
                        santé. La Clinique La Victoire
                        s'efforce d'être
                        un leader dans le domaine de la santé au Togo, en offrant des soins de qualité et en répondant
                        aux
                        besoins de la communauté de manière efficace et professionnelle.</p>
                </div>
            </div>
        </div>
    </div>
    <Actualite />
    <Contact />
</template>

<script setup>
import Breadcrumbs from '@/static/breadcrumbs.vue';
import SingleAbout from '@/components/SingleAbout.vue';
import Actualite from "@/components/Actualites.vue";
import Contact from "@/components/Contact.vue";

</script>


<style scoped>
.section-top-border h2 {
    font-size: 18px;
    font-weight: 400;
    color: #1F1F1F;
    margin-bottom: 40px;
    position: relative;
    z-index: 9;
    padding-bottom: 9px;
}

/* line 65, C:/Users/SPN Graphics/Desktop/CL September/210 Medical/HTML/scss/_about.scss */
.section-top-border h2:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 50px;
    background: #5DB2FF;
}
</style>