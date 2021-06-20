var bttBtn = document.getElementById("topBtn");

function bttFunct() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () { dispBtn() }
function dispBtn() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        bttBtn.style.display = "block";
    }
    else {
        bttBtn.style.display = "none";
    }
}