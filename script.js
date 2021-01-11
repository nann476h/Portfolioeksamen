window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap").addEventListener("click", togglemenu);

    document.querySelector("#logo").addEventListener("mouseover", hoverLogo);

    //    document.querySelector("#tekst_wrapper").addEventListener("click", fallingTekst)
}

//BURGERMENU//

function togglemenu() {
    console.log("toggleMenu");

    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";


    } else {
        document.querySelector("#menuknap").textContent = "x";
    }
}


//LOGO//

function hoverLogo() {
    console.log("hoverLogo");
    document.querySelector("#logo").classList.add("hover");
    document.querySelector("#logo").addEventListener("mouseout", hoverLogoNo);


}

function hoverLogoNo() {
    console.log("hoverLogoNo");

    document.querySelector("#logo").classList.remove("hover");

}
