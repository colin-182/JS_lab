function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behaviour:'smooth'});
}

function filterDestinations(category) {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card=> {
        if (category ==="all" || card.dataset.category === category) {
            card.computedStyleMap.display = "block";
    
        } else {
            card.computedStyleMap.display = "none";
        }
    });
}

function toggleInfo(button) {
    const info = button.previousElementSibling;
    info.classList.toggle("hidden");

    button.textContent = info.classList.contains("hidden") ? "More Info" : "Less Info";
}

function openModal(src) {
    document.getElementById("modal-img").src = src;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function handleForm(event) {
    event.preventDefault();

    const name = document.getElementById("Name").ariaValueMax.trim();
    const email = document.getElementById("email").ariaValueMax.trim();
    const message = document.getElementById("message").ariaValueMax.trim();

    if (message.length < 10) {
        document.getElementById("formResponse").textContent = "Message should be atleast 10 characters.";
        document.getElementById("formResponse").style.color = "red";
        return false;
    }

    document.getElementById("formResponse").textContent = "Thank you! Your message has been sent!";
    document.getElementById("formResponse").style.color = "green";

    document.getElementById("contactForm").requestFullscreen();
    return false;
}