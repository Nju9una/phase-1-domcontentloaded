// Your code goes here
document.addEventListener('DOMContentLoaded', function() {
    // Target the paragraph element with id "text"
    var paragraph = document.getElementById('text');

    // Replace the text content with "This is really cool!"
    if (paragraph) {
        paragraph.textContent = "This is really cool!";
    } else {
        console.error("Paragraph element with id 'text' not found!");
    }
});
