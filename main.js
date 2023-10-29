//scroll
function scrollToAndOpen(x) {
    var targetSection = document.querySelector('#con');

    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });

        // Open the "letter.html" page in the "container" frame
        var containerFrame = document.getElementsByName("container")[0];
        containerFrame.src = x;
    }
}
// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});
