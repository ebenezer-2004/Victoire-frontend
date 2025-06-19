<template>
  <Breadcrumb :title="'Contact '" :subtitle="'Contact'" />
  <section class="contact-section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="contact-title">Contacter nous</h2>
        </div>
        <div class="col-lg-8">
          <form
            class="form-contact contact_form"
            action="contact_process.php"
            method="post"
            id="contactForm"
            novalidate="novalidate"
          >
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <textarea
                    class="form-control w-100"
                    name="message"
                    id="message"
                    cols="30"
                    rows="9"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter Message'"
                    placeholder=" Name"
                  ></textarea>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <input
                    class="form-control valid"
                    name="name"
                    id="name"
                    type="text"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter your name'"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <input
                    class="form-control valid"
                    name="email"
                    id="email"
                    type="email"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter email address'"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <input
                    class="form-control"
                    name="subject"
                    id="subject"
                    type="text"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter Subject'"
                    placeholder="Enter Subject"
                  />
                </div>
              </div>
            </div>
            <div class="form-group mt-3">
              <button type="submit" class="button button-contactForm boxed-btn">
                Send
              </button>
            </div>
          </form>
        </div>
        <div class="col-lg-3 offset-lg-1">
          <div class="media contact-info">
            <span class="contact-info__icon"><i class="ti-home"></i></span>
            <div class="media-body">
              <h3>Buttonwood, California.</h3>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>
          <div class="media contact-info">
            <span class="contact-info__icon"><i class="ti-tablet"></i></span>
            <div class="media-body">
              <h3>+1 253 565 2365</h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div class="media contact-info">
            <span class="contact-info__icon"><i class="ti-email"></i></span>
            <div class="media-body">
              <h3>support@colorlib.com</h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="container mb-5">
    <section class="map-section">
      <div class="container-fluid px-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.752198933585!2d1.1788921759144944!3d6.201032993796086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102165cfc2056c7f%3A0xd0a951022f59f248!2sClinique%20La%20Victoire!5e0!3m2!1sfr!2stg!4v1718218251684!5m2!1sfr!2stg"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  </div>

  <Contact />
</template>

<script setup>
import Breadcrumb from "@/static/breadcrumbs.vue";
import Contact from "@/components/Contact.vue";
</script>

<style scoped>
.map-section {
  margin-top: -60px;
  iframe {
    display: block;
    width: 100%;
    height: 450px;
    border: none;
  }
}
</style>
