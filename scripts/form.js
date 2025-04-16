// Form Validation & Submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Replace with Formspree endpoint
        fetch('https://formspree.io/f/mjkydvgk', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        })
        .then(response => alert('Message sent!'))
        .catch(error => alert('Error!'));
    }
});