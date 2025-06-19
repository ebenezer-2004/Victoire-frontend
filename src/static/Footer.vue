<template>
   
    <footer class="footer">
        <div class="footer_top">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-md-6 col-lg-4">
                        <div class="footer_widget">
                            <div class="footer_logo">
                                <a href="#">
                                    <img src="/img/clinique-medical-victoire-logo.png" alt="" style="height:150px">
                                </a>
                            </div>
                           
                            <div class="socail_links">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i class="ti-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="ti-twitter-alt"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div class="col-xl-2 offset-xl-1 col-md-6 col-lg-3">
                        <div class="footer_widget">
                            <h3 class="footer_title">
                               Ressources
                            </h3>
                            <ul>
                                <li><routerLink to="/blog">Blog</routerLink></li>
                                <li><routerLink to="/departement">Département</routerLink></li>
                               
                               
                            </ul>

                        </div>
                    </div>
                    <div class="col-xl-2 col-md-6 col-lg-2">
                        <div class="footer_widget">
                            <h3 class="footer_title">
                               Liens rapide
                            </h3>
                            <ul>
                                <li><a href="/">Acceuil</a></li>
                                <li><a to="/a-propos">A propos</a></li>
                                <li><a tp="/contact"> Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6 col-lg-3">
                        <div class="footer_widget">
                            <h3 class="footer_title">
                                Addresse
                            </h3>
                            <p>
                               Avédji Limousine en face de la Pharmacie OSSAN <br>
                               22 25 32 43 • 70 38 88 88 <br>
                               90 35 35 16 • 99 46 77 69
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copy-right_text" style="background-color: #35B7AE;color: white !important;">
            <div class="container">
                <div class="footer_border"></div>
                <div class="row">
                    <div class="col-xl-12">
                        <p class="copy_right text-center" style="color: white !important;">
                            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                            Copyright &copy;
                          2025 Tous droits reservés | Fait par  by <a
                                href="https://colorlib.com" target="_blank" style="color:white">NEO START TECHNOLOGY</a>
                            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- footer end  -->
</template>

<script setup>

import About from '@/pages/About.vue'
import Blog from '@/pages/Blog.vue'
</script>

<style lang="scss" scoped></style>