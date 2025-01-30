document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const clock = document.getElementById("clock");

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️";
    } else {
        body.classList.remove("dark-mode");
        darkModeToggle.textContent = "🌗";
    }

    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            darkModeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            darkModeToggle.textContent = "🌗";
        }
    });

    const updateClock = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        clock.textContent = `🕒 ${hours}:${minutes}:${seconds}`;
    };
    setInterval(updateClock, 1000);
    updateClock();

    gsap.from(".animated-title", { opacity: 0, y: 50, duration: 1, stagger: 0.2 });
    document.querySelectorAll(".skill-bar span").forEach((bar) => {
        const progress = bar.getAttribute("data-progress");
        gsap.to(bar, {
            width: `${progress}%`,
            duration: 1.5,
            ease: "power2.out",
        });
    });
});
