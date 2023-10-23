document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        var navbar = document.getElementById('navbar');
        if (window.scrollY > 0) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    const navbarLinks = document.querySelectorAll(".navbar a");

    navbarLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault(); 
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    function validateForm(formId) {
        var nameInput = document.getElementById("nameInput_" + formId);
        var emailInput = document.getElementById("emailInput_" + formId);
        var phoneInput = document.getElementById("phoneInput_" + formId);
        var addressInput = document.getElementById("addressInput_" + formId);

        if (
            nameInput.value === "" ||
            emailInput.value === "" ||
            phoneInput.value === "" ||
            addressInput.value === ""
        ) {
            alert("Harap isi semua inputan!");
        } else {
            window.location.href = "https://instagram.com/dprfans?igshid=MzRlODBiNWFlZA==";
        }
    }

    document.getElementById("sendButton_1").addEventListener("click", function () {
        validateForm("1");
    });

    document.getElementById("sendButton_2").addEventListener("click", function () {
        validateForm("2");
    });
});
