var to_add_to_body = `<div class="forceLandscape"  style="display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: white;
        z-index: 999999;
        font-weight: bold;
        justify-content: center;
        text-align: center;
        align-items: center;
        font-size: 2rem;">
    <img src="./assets/rotate-phone.jpg" style="width: 100vw; margin-top: 20px;">
</div>`
$("body").append(to_add_to_body);
$(document).ready(function () {
    checkOrientation();
});

function checkOrientation() {
    console.log(window.innerHeight, window.innerWidth)
        if (window.innerHeight >= window.innerWidth) {
            $(".forceLandscape").css("display", "flex");
        } else {
            $(".forceLandscape").css("display", "none");
        }
    }

window.addEventListener("resize", checkOrientation);
