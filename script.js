document.addEventListener("DOMContentLoaded", function () {
    // Mobil Menü
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Blog Yazıları Animasyonu
    const posts = document.querySelectorAll(".post");
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
        posts.forEach((post, index) => {
            setTimeout(() => {
                post.style.transform = "scale(1.05)";
                post.style.transition = "transform 0.5s ease";
            }, index * 200);
        });
    } else {
        posts.forEach((post) => {
            post.style.transform = "scale(1)";
            post.style.transition = "none";
        });
    }

    // İletişim Formu İşlemleri
    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    if (contactForm && formMessage) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            formMessage.textContent = "Mesajınız başarıyla gönderildi!";
            formMessage.style.color = "green";
            formMessage.style.fontWeight = "bold";

            setTimeout(() => {
                formMessage.textContent = "";
            }, 3000);

            contactForm.reset();
        });
    }

    // Scroll animasyonu
    const hero = document.querySelector("#hero");
    const about = document.querySelector("#about");

    if (hero && about) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > hero.offsetHeight - 100) { // Daha hassas tetikleme için offset ayarlandı
                about.classList.add("fadeIn");
            }
        });
    }
});
