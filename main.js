// JavaScript to show an alert when the button is clicked
document.getElementById('clickMeBtn').addEventListener('click', function() {
    alert('You clicked the button!');
});

// JavaScript to handle the form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for contacting us, ' + name + '!');
    } else {
        alert('Please fill in all fields.');
    }
});
