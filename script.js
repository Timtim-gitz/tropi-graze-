// Dynamic greeting

window.onload = function() {
    const greeting = document.createElement("h2");
    const hour = new Date().getHours();
    let message = "Welcome to Tropi Graze Farm!";
    

    if (hour < 12) {
        message = "Good Morning! 🌞 Welcome to Tropi Graze Farm!";
    } else if (hour < 18) {
        message = "Good Afternoon! 🌻 Welcome to Tropi Graze Farm!";
    } else {
        message = "Good Evening! 🌙 Welcome to Tropi Graze Farm!";
    }
    greeting.innerText = message;
    document.body.insertBefore(greeting, document.body.firstChild);  

};



// Function to open the lightbox
function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    
    
    // Display the lightbox
    lightbox.style.display = "flex";
    lightboxImage.src=imageSrc;
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage=document.getElementById("lightboximage");

    lightbox.style.display = "none";
    lightboxImage.src=""
}

//





document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    // Clear initial values on focus

    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach(input => {
        input.addEventListener("focus", function() {
            if (input.value === input.defaultValue) {
                input.value = "";

            }
        });
    });


    // Validate form on submit

    form.addEventListener("submit", function(event) {

        event.preventDefault(); // Prevent default form submission


        let isValid = true;


        // Check for name entry

        const name = document.getElementById("name");

        if (!name.value.trim()) {

            alert("Name is required.");

            name.focus();

            isValid = false;

        }


        // Check for email entry

        const email = document.getElementById("email");

        if (!email.value.trim()) {

            alert("Email is required.");

            email.focus();

            isValid = false;

        }


        // Check for message entry

        const message = document.getElementById("message");

        if (!message.value.trim()) {

            alert("Message is required.");

            message.focus();

            isValid = false;

        }


        // If the form is valid, construct the mailto link

        if (isValid) {

            const subject = "Contact Form Submission";

            const body = `Name: ${encodeURIComponent(name.value)}\n` +

                         `Email: ${encodeURIComponent(email.value)}\n` +

                         `Message: ${encodeURIComponent(message.value)}`;

            window.location.href = `mailto:info@tropigraze.com?subject=${encodeURIComponent(subject)}&body=${body}`;

        }

    });

});



