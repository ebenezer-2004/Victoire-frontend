<template>
    <Breadcrumb title="Départements" current="Départements" />

    <div class="our_department_area">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="section_title text-center mb-55">
                        <h3>Nos départements</h3>
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
                            <h3><a href="#">Eye Care</a></h3>
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
                            <h3><a href="#">Physical Therapy</a></h3>
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
                            <h3><a href="#">Dental Care</a></h3>
                            <p>Esteem spirit temper too say adieus who direct esteem.</p>
                            <a href="#" class="learn_more">Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 col-lg-4">
                    <div class="single_department">
                        <div class="department_thumb">
                            <img src="/img/department/4.png" alt="">
                        </div>
                        <div class="department_content">
                            <h3><a href="#">Diagnostic Test</a></h3>
                            <p>Esteem spirit temper too say adieus who direct esteem.</p>
                            <a href="#" class="learn_more">Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 col-lg-4">
                    <div class="single_department">
                        <div class="department_thumb">
                            <img src="/img/department/5.png" alt="">
                        </div>
                        <div class="department_content">
                            <h3><a href="#">Skin Surgery</a></h3>
                            <p>Esteem spirit temper too say adieus who direct esteem.</p>
                            <a href="#" class="learn_more">Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 col-lg-4">
                    <div class="single_department">
                        <div class="department_thumb">
                            <img src="/img/department/6.png" alt="">
                        </div>
                        <div class="department_content">
                            <h3><a href="#">Surgery Service</a></h3>
                            <p>Esteem spirit temper too say adieus who direct esteem.</p>
                            <a href="#" class="learn_more">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Temoignage />
    <Actualite />

    <Contact />



</template>

<script setup>

import Breadcrumb from '@/static/breadcrumbs.vue'
import Temoignage from "@/components/Temoignage.vue"
import Actualite from "@/components/Actualites.vue"
import Contact from "@/components/Contact.vue"
</script>

<style lang="scss" scoped></style>