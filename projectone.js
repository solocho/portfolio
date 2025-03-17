// Toggle search bar functionality
const searchIcon = document.querySelector('.search-bar');
const searchInput = document.querySelector('.search input');

searchIcon.addEventListener('click', () => {
    if (searchInput.style.display === 'block') {
        searchInput.style.display = 'none';
    } else {
        searchInput.style.display = 'block';
        searchInput.focus();
    }
});

// Handle form submission for the contact page
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // WhatsApp integration
        const whatsappNumber = '25446415318';
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;

        window.open(whatsappLink, '_blank');
        alert('Your message has been sent via WhatsApp!');
        contactForm.reset();
    });
}

// Add hover effect on price buttons for a cooler feel
const priceButtons = document.querySelectorAll('.price-btn');

priceButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#00b7b7';
        button.style.color = '#111';
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = 'cyan';
        button.style.color = '#000';
    });
});

// Floating animation for the main display shoe
const mainDisplay = document.querySelector('.m-display');

if (mainDisplay) {
    mainDisplay.addEventListener('mouseenter', () => {
        mainDisplay.style.transform = 'translateY(-10px)';
        mainDisplay.style.transition = 'transform 0.3s';
    });

    mainDisplay.addEventListener('mouseleave', () => {
        mainDisplay.style.transform = 'translateY(0)';
    });
}
