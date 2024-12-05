function validateForm(event) {
    var name = document.getElementById("name-field").value;
    var email = document.getElementById("email-field").value;
    var subject = document.getElementById("subject-field").value;
    var message = document.getElementById("message-field").value;

    var loadingMessage = document.getElementById("loading-message");
    var errorMessage = document.getElementById("error-message");
    var sentMessage = document.getElementById("sent-message");

    // Hide all messages initially
    loadingMessage.style.display = "none";
    errorMessage.style.display = "none";
    sentMessage.style.display = "none";

    if (name == "" || email == "" || subject == "" || message == "") {
        alert("Please fill out all fields.");
        event.preventDefault(); // Prevent form submission if fields are empty
        return false;
    }

    // Show the loading message
    loadingMessage.style.display = "block";

    // Simulate a delay (e.g., server processing time)
    setTimeout(function () {
        // Assume message is sent successfully
        loadingMessage.style.display = "none"; // Hide the loading message
        sentMessage.style.display = "block";  // Show the success message

        // If there were an error, you could do:
        // loadingMessage.style.display = "none";
        // errorMessage.style.display = "block";
    }, 2000); // Simulates a 2-second delay

    // Allow form submission
    return true;
}