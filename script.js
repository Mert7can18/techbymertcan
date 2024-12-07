document.addEventListener("DOMContentLoaded", function () {
    // Mobil Menü
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Menü Toggle işlevselliği
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Blog Yazıları Animasyonu
    const posts = document.querySelectorAll(".post");
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
        // Sadece masaüstünde yazılara animasyon ekle
        posts.forEach((post, index) => {
            setTimeout(() => {
                post.style.transform = "scale(1.05)";
                post.style.transition = "transform 0.5s ease";
            }, index * 200); // Postlar sırasıyla büyüsün
        });
    } else {
        // Mobil cihazda animasyonları kaldır
        posts.forEach((post) => {
            post.style.transform = "scale(1)"; // Mobilde büyütme yapma
            post.style.transition = "none";
        });
    }

    // İletişim Formu İşlemleri
    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Sayfanın yenilenmesini engelle

        // Form mesajı başarılı olarak ayarla
        formMessage.textContent = "Mesajınız başarıyla gönderildi!";
        formMessage.style.color = "green";
        formMessage.style.fontWeight = "bold";

        // Mesajı 3 saniye sonra gizle
        setTimeout(() => {
            formMessage.textContent = "";
        }, 3000);

        // Formu sıfırla
        contactForm.reset();
    });

    // Scroll animasyonu (Sayfayı kaydırırken animasyonlu etkileşim ekleyebiliriz)
    const hero = document.querySelector("#hero");
    const about = document.querySelector("#about");

    window.addEventListener("scroll", () => {
        if (window.scrollY > hero.offsetHeight) {
            about.classList.add("fadeIn"); // About bölümüne animasyon ekle
        }
    });
});
