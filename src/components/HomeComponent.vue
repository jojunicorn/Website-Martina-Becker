<template>
    <div class="home-body">
        <img src="../assets/logomartina.png" class="home-logo" />

        <div class="arrow">
            <i class="fa-solid fa-arrow-down fa-beat fa-2xl" style="color: #ffffff;"></i>
        </div>
    </div>
</template>

<style>
.home-body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
    background-image: url(../assets/baum2.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover; /* Scale the image to cover the entire background */
    background-position: center center; /* Center the image horizontally and vertically */
    opacity: 0.5;
}
.home-logo{
    width: 40%;
    margin-top: -10%;
}
.arrow{
    margin-top: 20%;
}

</style>