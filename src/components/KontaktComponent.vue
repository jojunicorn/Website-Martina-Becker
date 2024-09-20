
<script>
import  ContactCard  from './ContactCardComponent.vue'

export default {
  components: {
    ContactCard, 
  },
};
</script>

<template>
    <div class="content-body">
        <h1 class="heading">Kontakt</h1>

        <div class="contact-info">
            <ContactCard class="contact-card"/>
        </div>

        <div class="contact-form">
            <form class="flex-part">
                <div class="info">     
                    <div>       
                        <label>Full Name</label>
                        <input class="form-control short-field" type="text"/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input class="form-control short-field" type="email"/>
                    </div>
                </div>

                <label>Betreff</label>
                <input class="form-control long-field" type="text"/>
                <label>Nachricht</label>
                <textarea class="form-control long-field text-area" rows="4" cols="50" type="text-area"></textarea>
                <input type="button" class="btn button-senden" value="Senden"/>
            </form>
            <div class="flex-part">
                <img src="../assets/angelpainting.jpg" class="pic" alt="Martina Becker">
            </div>
        </div>
    </div>
</template>

<style>
@import url('../assets/css/general.css');
.contact-card{
    margin-bottom: 2%;
}
.heading{
    font-family: 'Mirza', serif;
    color: #325300;
    font-size: 4em;
    text-align: left;
    margin-left: 10%;
}
.button-senden{
    background-color: #94d23d;
    color: white;
    padding: 5px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 1.5em;
    margin-top: 5%;
}
.button-senden:hover{
    background-color: #659b1a;
    color: white;
}
.flex-part{
    width: 70%;
}
.pic{
    width: 100%;
    padding: 20px;
    min-width: 300px;
}
.info{
    display: flex;
}
.contact-form{
    width: 70%;
    background-color: rgb(222, 222, 222);
    padding: 30px;
    text-align: left;
    margin-left: 10%;
    margin-right: 10%;
    display: flex;
    margin-bottom: 10%;
}
.short-field{
    width: 95%;
    align-content: left;
}
.long-field{
    width: 97%;
}
.text-area{
    height: 300px;
}
@media only screen and (max-width: 780px) {
    .heading{
        font-size: 2em;

    }
    .flex-part{
        width: 100%;
    }
    .pic{
        width: 100%;
        padding: 20px;
        min-width: 300px;
    }
    .info{
        display: flex;
    }
    .contact-form{
        width: 80%;
        background-color: rgb(222, 222, 222);
        padding: 30px;
        text-align: left;
        margin-left: 10%;
        margin-right: 10%;
        display: flex;
        flex-direction: column;
        margin-bottom: 10%;
    }

}


</style>