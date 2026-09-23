

var navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// Contact form

var form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    var name = document.getElementById("name").value;

    document.getElementById("result").innerHTML =
        "Thank you, " + name + "! We will contact you soon.";

    form.reset();

});