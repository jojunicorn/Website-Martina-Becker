<script>
import  ContactCard  from './ContactCardComponent.vue'

export default {
  components: {
    ContactCard, 
  },
};
</script>
<template>
    <div class="body-div content-body">
        <h1 class="heading">Anfahrt</h1>
        <ContactCard class="contact-card"/>

        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2615.618036651503!2d8.450035088159295!3d49.03687129750285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797080d16d0b2e5%3A0x453dd8479a751902!2sErfurter%20Str.%202%2C%2076139%20Karlsruhe!5e0!3m2!1sde!2sde!4v1706806544905!5m2!1sde!2sde" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <p class="anfahrt-info">
        <b>Anfahrt mit KVV</b>
          <br>Von Karlsruhe-Innenstadt: u.a. Straßenbahnlinie S2 Richtung Spöck/ Reitschulschlag, Ausstieg Jenaer Str., anschließend ca.3 Minuten Fußweg von Haltestelle aus nach rechts, dann gleich links in die Gothaer Str, anschließend 1. Weg rechts (Geroldsäcker Weg) und das nächste Haus (roter Backstein) rechts Ankunft </p>
    </div>
</template>
<style>
@import url('../assets/css/general.css');

.body-div{
    text-align: left;
}
.anfahrt-info{
  margin-left: 10%;
  margin-right: 10%;
  font-size: 1.5em;
}
.map {
  margin-left: 10%;
  margin-top: 5%;
  width: 100%; /* Set to 100% for responsiveness */
  max-width: 600px; /* Set a maximum width if needed */
  height: 400px;
  margin-bottom: 2%;
}
.contact-card{
    text-align: center;
}

/* If you want to center the map horizontally, you can use margin-left */
@media only screen and (max-width: 600px) {
    .map {
    margin-left: 0; /* Reset margin for small screens */
    max-width: 400px; /* Reset max-width for small screens */
    margin-top: 2%; /* Adjust margin-top for small screens */
  }
}

</style>