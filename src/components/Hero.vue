<template>
  <div class="slider_area">
    <div class="slider_active owl-carousel">
      <!-- Slide 1: Accueil général -->
      <div class="single_slider d-flex align-items-center slider_bg_1">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="slider_text">
                <h3><span>Soins de santé</span><br> Pour toute la famille</h3>
                <p>À la Clinique La Victoire, notre priorité est votre bien-être. <br>
                   Des services accessibles, humains et adaptés à vos besoins.</p>
                <routerLink to="/a-propos" class="boxed-btn3">Nous découvrir</routerLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 2: Services spécialisés -->
      <div class="single_slider d-flex align-items-center slider_bg_2">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="slider_text">
                <h3><span>Consultations</span><br> Générales & spécialisées</h3>
                <p>Notre équipe de professionnels est à votre écoute : pédiatrie, gynécologie, médecine générale et plus encore.</p>
                <routerLink to="/departement" class="boxed-btn3">Voir nos spécialités</routerLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 3: Infrastructure et disponibilité -->
      <div class="single_slider d-flex align-items-center slider_bg_3">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="slider_text">
                <h3><span>Équipements modernes</span><br> et service 24h/24</h3>
                <p>La Victoire vous accueille dans un cadre confortable, avec une technologie adaptée pour une prise en charge rapide et efficace.</p>
                <routerLink to="/a-propos" class="boxed-btn3">En savoir plus</routerLink>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
