<template>


    <div class="home-body">
        <img src="../assets/baum2.png" class="home-logo" />

        <img src="../assets/logomartina.png" class="home-logo" />
        <div class="heading-div"><h1 class="heading heading-background">Herzlich Wilkommen!</h1></div>
        <p class="data-paragraph">
            Sie sind herzlich eingeladen, in Ruhe auf meiner Internet-Seite zu verweilen und sich umzuschauen. Neben den in meinem Web-Auftritt näher beschriebenen Therapieverfahren
            z.B. Colon-Hydro-Therapie (Darmreinigung)
            Behandlung nach Haartransplantation
            oder Emotional Freedom Technique EFT biete ich als Heilpraktikerin natürlich auch einige der klassischen Verfahren der Erfahrungs/ Naturheilkunde,
            z.B.Akupunktur, orthomolekulare Medizin,
            Blutegeltherapie usw. an. Bitte kontaktieren sie mich zu einem unverbindlichen Informations-/Vorgespräch. Ich freue mich auf ihren Besuch in meiner Naturheilpraxis in Karlsruhe und darauf, Sie auf dem Weg begleiten zu dürfen..
        </p><br><br><br>

        <!-- <div class="arrow">
            <i class="fa-solid fa-arrow-down fa-beat fa-2xl" style="color: #ffffff;"></i>
        </div> -->

    </div>
</template>

<style>
.heading{
    font-family: 'Mirza', serif;
    color: #325300;
    font-size: 4em;
}
.heading-background{
    display: inline-block;
    background-color: rgba(255, 255, 255, 0.900);
    margin-left: 10%;
    padding: 10px;
}
.heading-div{
    padding-top: 5%;
    text-align: left;
}
.data-paragraph{
    font-family: 'Mirza', serif;
    font-size: 1.2em;
    width: 80%;
    margin: 10%;
    margin-top: 5%;
    margin-bottom: 0;
    padding: 20px;
    color: black;
    background-color: rgba(255, 255, 255, 0.900);
    text-align: left;
    z-index: 5;
}

.home-body {
    margin: 0;
    padding: 0;
    position: relative; /* Set position to relative for the pseudo-element */
    min-height: 100vh;
}
.home-body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
    background-image: url(../assets/baum2.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
    opacity: 0.5; /* Set opacity for the background image only */
    z-index: -1; /* Move the pseudo-element to the background */
}

.home-logo{
    width: 40%;
    margin-top: 10%;
}
.arrow{
    margin-top: 20%;
}

@media only screen and (max-width: 600px) {
    .heading{
        font-size: 2em;
    }
    .data-paragraph{
        font-size: 1em;
    }
}

</style>