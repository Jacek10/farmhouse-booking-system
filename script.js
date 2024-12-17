document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    // Store booking data (for demo purposes, in practice use a server)
    localStorage.setItem("booking", JSON.stringify({ name, email, checkin, checkout }));

    // Redirect to confirmation page
    window.location.href = "confirmation.html";
});
