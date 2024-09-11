document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple form validation
    if (!email || !password) {
        alert('Please fill in both fields.');
        return;
    }

    // You can now send this data to your server via an API call
    // For example: 
    // fetch('/api/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, password }),
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.success) {
    //         window.location.href = '/dashboard'; // Redirect on successful login
    //     } else {
    //         alert('Invalid login credentials');
    //     }
    // })
    // .catch(error => console.error('Error:', error));

    console.log('Logging in with:', email, password);
});
