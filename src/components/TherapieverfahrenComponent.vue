<template>
    <div>
        <img src="../assets/buch2.jpg" class="buch-img" alt="Therapien">

        <h1 class="heading therapie-heading">Therapien</h1>
        <p class="therapy-paragraph">
            Als Heilpraktikerin begebe ich mich auf die Suche nach verborgenen Gründen für Ihre gesundheitlichen Probleme. In meiner Naturheilpraxis nehme ich mir ausreichend Zeit, um der Sache auf den Grund zu gehen und die Auslöser für Ihre Beeinträchtigung zu finden.
            <br>Die Schwerpunkte meiner Arbeit liegen in der Darmsanierung mit der Colon-Hydro-Therapie, Akupunktur und die Emotional-Freedom-Technique (EFT) als psycho-energetische Behandlungsmethode, Blutegeltherapie und Hildegardmedizin (vorrangig Aderlass)
        </p>
        <div>
            <img src="../assets/crystal.jpg" class="therapy1-img" alt="Edelsteine">
            <img src="../assets/blutegel2.jpg" class="therapy2-img" alt="Blutegel">
            <img src="../assets/akupunktur.jpeg" class="therapy3-img" alt="Akupunktur">
        </div>
    </div>
</template>
<style>
@import url('./src/assets/css/general.css');
.container {
    position: relative;
}
.buch-img{
    width: 60%;
    margin-top: 2%;
    margin-bottom: 2%;
    position: relative;
    z-index: 1;
}
.therapy1-img{
    width: 25%;
    height: 40%;
    margin: 3%;
}
.therapy3-img{
    width: 30%;
    height: 40%;
    margin: 3%;
}
.therapy2-img{
    width: 13%;
    margin: 3%;
}
.therapie-heading{
    margin-top: -10%;
    margin-left: 10%;
    color: #532A12;
    font-size: 4em;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px;
    padding-bottom: 20px;
    z-index: 2;
    position: absolute;
}
.therapy-paragraph{
    background-color: #fbdbbc8c;
    text-align: left;
    font-size: 1.5em;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 5%;
    padding: 20px;
}

@media only screen and (max-width: 600px) {
    .heading{
        font-size: 2em;
        background-color: rgba(255, 255, 255, 1);

    }
    .data-paragraph{
        font-size: 1em;
    }
    .therapy1-img{
        width: 80%;
        margin: 3%;
    }
    .therapy2-img{
        width: 50%;
        margin: 3%;
    }    
    .therapy3-img{
        width: 80%;
        margin: 3%;
    }
}



</style>