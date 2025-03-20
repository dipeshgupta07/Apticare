// JavaScript for the Hamburger Menu toggle
document.getElementById("hamburger").addEventListener("click", function() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
});
