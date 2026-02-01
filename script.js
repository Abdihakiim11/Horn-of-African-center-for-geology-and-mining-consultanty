document.addEventListener('DOMContentLoaded', () => {
    console.log("Geochemical Lab Site Loaded Successfully");

    // Simple interaction for Learn More buttons
    const buttons = document.querySelectorAll('.learn-more');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert("Redirecting to detailed service analysis...");
        });
    });
});