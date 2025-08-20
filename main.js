// Show/Hide password toggle
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.textContent = type === 'password' ? 'Show' : 'Hide';
    });
}

// Form submission (demo only)
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if (!document.getElementById('terms').checked) {
        alert('You must accept the Terms and Conditions and Privacy Policy.');
        return;
    }
    alert('Account created successfully! (Demo)');
});


