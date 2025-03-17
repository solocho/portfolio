document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        let phoneNumber = "254783434955"; // Your WhatsApp number (without +)
        let whatsappMessage = `New Message from ${name}%0AEmail: ${email}%0AMessage: ${message}`;

        let whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

        window.open(whatsappURL, "_blank"); // Opens WhatsApp chat in a new tab

        alert("Your message will be sent via WhatsApp. Click 'Send' in WhatsApp to confirm.");
        this.reset();
    });
});
