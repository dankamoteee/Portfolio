document.addEventListener("DOMContentLoaded", () => {
    // Quote Slider
    const quotes = document.querySelectorAll(".quote");
    let currentQuote = 0;

    const showQuote = (index) => {
        quotes.forEach((quote, i) => {
            quote.classList.toggle("active", i === index);
        });
    };

    setInterval(() => {
        currentQuote = (currentQuote + 1) % quotes.length;
        showQuote(currentQuote);
    }, 5000); // Auto-slide every 5 seconds

    // Skill Bars
    const skillBars = document.querySelectorAll(".progress-bar");

    const animateSkillBars = () => {
        skillBars.forEach((bar) => {
            const barTop = bar.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (barTop < windowHeight - 100) {
                bar.style.width = `${bar.dataset.skill}%`;
            }
        });
    };

    window.addEventListener("scroll", animateSkillBars);
    animateSkillBars(); // Trigger on page load
});
