<template>
    <!-- header-start -->
    <header>
        <div class="header-area ">
            <div class="header-top_area" style="background-color:#35B7AE !important">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-md-6 ">
                            <div class="social_media_links">
                                <li><a to="mailto:info@cliniquelavictoire.com" style="color:#fff"> <i
                                            class="fa fa-envelope" style="color:#fff"></i>
                                        info@cliniquelavictoire.com</a></li>

                                <!-- <routerLink to="#" style="color:#fff">
                                    <i class="fa fa-linkedin" style="color:#fff"></i>
                                </routerLink>
                                <routerLink to="#">
                                    <i class="fa fa-facebook" style="color:#fff"></i>
                                </routerLink>
                                <routerLink to="#" style="color:#fff">
                                    <i class="fa fa-google-plus"></i>
                                </routerLink> -->
                            </div>
                        </div>
                        <div class="col-xl-6 col-md-6">
                            <div class="short_contact_list">
                                <ul>
                                    <li><a style="color:#fff" to="tel:+228"> <i class="fa fa-phone"
                                                style="color:#fff"></i> 22 25 32 43 / 70 38 88 88 / 90 35 35 16 / 99 46
                                            77 69</a></li>

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
                                            <a  href="/" :class="{ active: route.path === '/' }">Acceuil</a>
                                        </li>
                                        <li>
                                            <routerLink to="/departement" exact-active-class="active">Département</routerLink>
                                        </li>
                                        <li>
                                            <routerLink to="/a-propos" exact-active-class="active">A propos</routerLink>
                                        </li>
                                        <li>
                                            <routerLink to="/blog" exact-active-class="active">Blog</routerLink>
                                        </li>
                                        <li>
                                            <routerLink to="/contact" exact-active-class="active">Contact</routerLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                         <div class="col-xl-3 col-lg-3 d-none d-lg-block">
                            <div class="Appointment">
                                <div class="book_btn d-none d-lg-block">
                                    <a class="popup-with-form" href="#test-form">Make an Appointment</a>
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
   <form id="test-form" class="white-popup-block mfp-hide">
<div class="popup_box ">
    <div class="popup_inner">
        <h3>Make an Appointment</h3>
        <form action="#">
            <div class="row">
                <div class="col-xl-6">
                    <input id="datepicker" placeholder="Pick date">
                </div>
                <div class="col-xl-6">
                    <input id="datepicker2" placeholder="Suitable time">
                </div>
                <div class="col-xl-6">
                    <select class="form-select wide" id="default-select" >
                        <option data-display="Select Department">Department</option>
                        <option value="1">Eye Care</option>
                        <option value="2">Physical Therapy</option>
                        <option value="3">Dental Care</option>
                    </select>
                </div>
                <div class="col-xl-6">
                    <select class="form-select wide" id="default-select" >
                        <option data-display="Doctors">Doctors</option>
                        <option value="1">Mirazul Alom</option>
                        <option value="2">Monzul Alom</option>
                        <option value="3">Azizul Isalm</option>
                    </select>
                </div>
                <div class="col-xl-6">
                    <input type="text"  placeholder="Name">
                </div>
                <div class="col-xl-6">
                    <input type="text"  placeholder="Phone no.">
                </div>
                <div class="col-xl-12">
                    <input type="email"  placeholder="Email">
                </div>
                <div class="col-xl-12">
                    <button type="submit" class="boxed-btn3">Confirm</button>
                </div>
            </div>
        </form>
    </div>
</div>
</form>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
import Contact from '@/pages/Contact.vue'
import Acceuil from '@/pages/Acceuil.vue'
</script>

<style  scoped>
.router-link-active,
.router-link-exact-active,
.active {
  border-bottom: 2px solid #35B7AE; /* ou underline, ou changement de couleur */
  color: #35B7AE !important;
  padding-bottom: 10px !important; /* Ajustez la marge si nécessaire */
}

</style>