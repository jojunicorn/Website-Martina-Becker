<script>
import  ContactCard  from './ContactCardComponent.vue'

export default {
  components: {
    ContactCard, 
  },
};
</script>
<template>
    <div class="body-content">
        <h1 class="heading">Preise</h1>
        <div class="preise-container">
            <div class="preise-item">
                <p class="form-control text">Infos zu den Preisen seit 1.1.2023 neu alle auf Anfrage</p>
                <p class="form-control text">Die Naturheilpraxis ist eine Privatpraxis, das heißt, dass sie nicht an die gesetzlichen Krankenkassen angegliedert ist. 

                    Private Krankenkassen/Versicherungen/ Beihilfe übernehmen Heilpraktikerkosten, jedoch in sehr unterschiedlichem Umfang und nach eigenen Richtlinien. Informieren Sie sich bei Ihrer persönlichen Krankenkasse direkt bei Behandlungsbeginn über die Übernahme der Kosten. Es kann tatsächlich sein, dass Sie, trotz Privatversicherung, Zuzahlungen leisten müssen. Die gültige Gebührenordnung für Heilpraktiker (GebüH) ist Grundlage meiner Rechnungserstellung.</p>   
                    <ContactCard class="contact-card" />

                </div>
            <div class="preise-item"><img src="../assets/engel3.jpg" class="engel-pic" alt="Martina Becker"></div>
            
        </div>

    </div>
</template>
<style>
@import url('../assets/css/general.css');
.preise-item{
    width: 40%
}
.preise-container{
    margin-left: 10%;
    display: flex;
    width: 100%
}
.engel-pic{
    width: 80%;
    margin-left: 10%;
    margin-bottom: 3%;
}
.contact-card{
    margin-top: 20%;
    margin-bottom: 3%
}
.text{
    margin-top: 2%;
    text-align: left;
    font-size: 1.2em;
}
@media only screen and (max-width: 780px) {
    .heading{
        font-size: 2em;

    }
    .preise-item{
        width: 80%;
    }
    .preise-container{
        flex-direction: column;
    }
    .engel-pic{
        width: 60%;
        margin-bottom: 3%;
    }
    
}
</style>