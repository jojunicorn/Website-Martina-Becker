<template>
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img src="@/assets/logo-white.png" alt="Logo" class="logo-img"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/aboutMe">Über mich</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/therapieverfahren">Therapieverfahren</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Therapie
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/colon-hydro-therapy">Colon-Hydro-Therapie</a></li>
            <li><a class="dropdown-item" href="/eft">EFT</a></li>
            <li><a class="dropdown-item" href="/akupunktur">Akupunktur</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/preise">Preise</a>
        </li>        
        <li class="nav-item">
          <a class="nav-link" href="/kontakt">Kontakt</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/anfahrt">Anfahrt</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<style scoped>
.navbar {
    font-family: 'Mirza';
    font-size: 1.5rem;
    background-color: #71A02E;
    position: fixed; /* Add this line */
    width: 100%; /* Add this line to make it full-width */
    z-index: 1000; /* Add this line to control the stacking order */
    top: 0; /* Add this line to position it at the top */
}
.nav-link{
    color: white;
    margin-right: 20px; /* Adjust the value to control the space between items */
    margin-left: 10px
}
.nav-link:hover{
    background-color: #94d23d;
    border-radius: 5%;
}
.logo-img{
    width: 3em;
}
.dropdown-menu{
    background-color: #71A02E;
}
.dropdown-item{
    color: white;
    font-size: 1.2rem;

}
.dropdown-item:hover{
    background-color: #94d23d;
}
</style>