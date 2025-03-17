document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const links = document.querySelectorAll(".nav-link");
    const indicator = document.querySelector(".scroll-indicator");

     
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️";
    }

    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
        darkModeToggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌗";
    });

 
    const datetime = document.getElementById("datetime");
    const updateDateTime = () => {
        const now = new Date();
        const date = now.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        const time = now.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' });
        datetime.textContent = `📅 ${date} | ${time}`;
    };
    setInterval(updateDateTime, 1000);
    updateDateTime();
 
    function updateIndicator() {
        const active = document.querySelector(".nav-link.active");
        if (active) {
            indicator.style.width = active.offsetWidth + "px";
            indicator.style.left = active.offsetLeft + "px";
        }
    }

    window.addEventListener("scroll", () => {
        let fromTop = window.scrollY + 100;
        links.forEach(link => {
            let section = document.querySelector(link.getAttribute("href"));
            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                links.forEach(l => l.classList.remove("active"));
                link.classList.add("active");
                updateIndicator();
            }
        });
    });

    updateIndicator();
});
