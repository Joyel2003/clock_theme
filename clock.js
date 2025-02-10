function updateClock(){
    let now = new Date ();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
}

function toogleTheme(){
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
}

setInterval(updateClock, 1000);
updateClock();