<template>
    <div class="contact-info">
        <div class="contact-info-part">
            <i class="fa-solid fa-location-dot dark"></i>
            <p class="contact-text">     Erfurter Straße 2
                <br>76139 Karlsruhe
            </p>
        </div>
        <div class="contact-info-part">
            <i class="fa-solid fa-phone dark"></i>
            <p class="contact-text"> +49 159 01391426</p>
        </div>
    </div>
</template>
<style scoped>
.contact-text {
  width: 100%;
}

.contact-info-part {
  padding: 10px;
  width: 100%;
  font-size: 1.2em;
  display: flex;
}

.dark {
  color: #486224; /* Set your desired color */
  font-size: 40px; /* Set your desired font size */
}

.contact-info {
  padding: 20px;
  width: 100%; /* Use full width on small screens */
  max-width: 400px; /* Set a maximum width for larger screens */
  margin-left: 10%;
  border-color: #486224;
  border-style: solid;
  display: flex;
  flex-direction: column;
}

/* Media query for small screens */
@media only screen and (max-width: 600px) {
    .contact-info{
        margin: 0 auto;
    }
  .contact-info-part {
    flex-direction: column; /* Stack items vertically on small screens */
  }

  .dark {
    font-size: 30px; /* Adjust font size for small screens */
  }
}
</style>
