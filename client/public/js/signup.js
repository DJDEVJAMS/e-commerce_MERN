document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple form validation
    if (!name || !email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Send data to server via an API call
    // Example:
    // fetch('/api/signup', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ name, email, password }),
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.success) {
    //         window.location.href = '/welcome'; // Redirect on successful sign up
    //     } else {
    //         alert('Sign up failed. Please try again.');
    //     }
    // })
    // .catch(error => console.error('Error:', error));

    console.log('Signing up with:', name, email, password);
});
