function myFunction() {
    var el = document.getElementById("nav-links");
    if (el.style.height == "125px") {
        el.style.height = "0px"

    } else {
        el.style.height = "125px"
    }
}

window.addEventListener('resize', () => {
    console.log("teste");
    if (window.innerWidth >= "1024px") {
        var element = document.getElementById("nav-links");
        element.style.height = "max-content";
    }
})