<template>
    <!-- header-start -->
    <header>
        <div class="header-area ">
            <div class="header-top_area">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-md-6 ">
                            <div class="social_media_links">
                                <routerLink to="#">
                                    <i class="fa fa-linkedin"></i>
                                </routerLink>
                                <routerLink to="#">
                                    <i class="fa fa-facebook"></i>
                                </routerLink>
                                <routerLink to="#">
                                    <i class="fa fa-google-plus"></i>
                                </routerLink>
                            </div>
                        </div>
                        <div class="col-xl-6 col-md-6">
                            <div class="short_contact_list">
                                <ul>
                                    <!-- <li><a to="mailto:"> <i class="fa fa-envelope"></i> info@docmed.com</a></li> -->
                                    <li><a to="tel:+228"> <i class="fa fa-phone"></i> 22 25 32 43 / 70 38 88 88 / 90 35 35 16 /  99 46 77 69</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="sticky-header" class="main-header-area">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-3 col-lg-2">
                            <div class="logo">
                                <a href="/">
                                    <img src="/img/clinique-medical-victoire-logo.png" alt="" style="height:110px">
                                </a>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-7">
                            <div class="main-menu  d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li>
                                            <a class="active" href="/">Acceuil</a>
                                        </li>
                                        <li>
                                            <routerLink to="/departement">Département</routerLink>
                                        </li>
                                        <li>
                                            <routerLink to="/a-propos">A propos</routerLink>
                                        </li>
                                        <li>
                                            <routerLink to="/blog">Blog</routerLink>
                                        </li>
                                        <li>
                                            <routerLink to="/contact">Contact</routerLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 d-none d-lg-block">
                            <div class="Appointment">
                                <div class="book_btn d-none d-lg-block">
                                    <routerLink class="popup-with-form" to="#test-form">Prendre un rendez-vous
                                    </routerLink>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- header-end -->
</template>

<script setup>

import Contact from '@/pages/Contact.vue'
</script>

<style lang="scss" scoped></style>