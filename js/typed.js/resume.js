document.addEventListener("DOMContentLoaded", () => {
    // Select all category buttons
    const filterButtons = document.querySelectorAll(".filter-btn");
  
    // Select all cards
    const cards = document.querySelectorAll(".card-dept");
  
    // Add event listeners to each button
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const category = button.dataset.category; // Get the category from the button
  
        // Show/hide cards based on the selected category
        cards.forEach(card => {
          if (category === "all" || card.dataset.category === category) {
            card.style.display = "block"; // Show card
          } else {
            card.style.display = "none"; // Hide card
          }
        });
      });
    });
  });
  