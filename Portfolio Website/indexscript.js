function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const body = document.body;
    const top = document.getElementById("top");

    if (scrollPosition > top.offsetHeight) {
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {

const emailCopyButton = document.getElementById('emailCopyButton');

emailCopyButton.addEventListener('click', function() {
    // Execute the copyEmail function
    copyEmailToClipboard();
});

 // Function to copy email to clipboard
 function copyEmailToClipboard() {
    const emailText = 'grayson.hw7@gmail.com';

    // Create a textarea element to temporarily hold the email text
    const textarea = document.createElement('textarea');
    textarea.value = emailText;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();

    // Attempt to copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the textarea from the document
    document.body.removeChild(textarea);

    // You can provide visual feedback to the user if needed
    alert('Email copied to clipboard!');
}
});