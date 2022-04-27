window.onload = function (){
    let seconds = 00;
    let tens = 00;
    let addSeconds = document.getElementById("seconds");
    let addTens = document.getElementById("tens");
    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    let reset = document.getElementById("reset");
    let interval;

    butonDeStart.onclick = function() {
        clearInterval(interval);
        interval = setInterval(start, 10);
    }

    butonDeStop.onclick = function() {
        clearInterval(interval);
    }

    reset.onclick = function() {
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        addTens.innerHTML = tens;
        addSeconds.innerHTML = seconds;
    }

    function start () {
        tens++;

        if(tens < 6){
            addTens.innerHTML = "0" + tens;
        }

        if(tens > 6){
            adaugaZecimi.innerHTML = zecimi;
        }

        if(tens > 60)
            seconds++;
            addSeconds.innerHTML = "0" + secunde;
            tens = 0;
            addTens.innerHTML = "0" + 0;
        }

        if(secunde > 6){
            addSeconds.innerHTML = seconds;
        }
    }
}
