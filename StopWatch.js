window.onload = function (){
    let secunde = 00;
    let zecimi = 00;
    let adaugaSecunde = document.getElementById("secunde");
    let adaugaZecimi = document.getElementById("zecimi");
    let butonDeStart = document.getElementById("butonDeStart");
    let butonDeStop = document.getElementById("butonDeStop");
    let butonDeResetare = document.getElementById("butonDeResetare");
    let interval;

    butonDeStart.onclick = function() {
        clearInterval(interval);
        interval = setInterval(startTimp, 10);
    }

    butonDeStop.onclick = function() {
        clearInterval(interval);
    }

    butonDeResetare.onclick = function() {
        clearInterval(interval);
        zecimi = "00";
        secunde = "00";
        adaugaZecimi.innerHTML = zecimi;
        adaugaSecunde.innerHTML = secunde;
    }

    function startTimp () {
        zecimi++;

        if(zecimi < 9){
            adaugaZecimi.innerHTML = "0" + zecimi;
        }

        if(zecimi > 9){
            adaugaZecimi.innerHTML = zecimi;
        }

        if(zecimi > 99) {
            console.log("secunde");
            secunde++;
            adaugaSecunde.innerHTML = "0" + secunde;
            zecimi = 0;
            adaugaZecimi.innerHTML = "0" + 0;
        }

        if(secunde > 9){
            adaugaSecunde.innerHTML = secunde;
        }
    }
}
