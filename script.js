//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async function(event) {
    event.preventDefault();  // Prevent form from submitting

    const text = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value);

    // Validate delay input
    if (isNaN(delay) || delay < 0) {
        document.getElementById('output').innerText = 'Please enter a valid positive delay value.';
        return;
    }

    await displayMessageAfterDelay(text, delay);
});

async function displayMessageAfterDelay(message, delay) {
    await new Promise(resolve => setTimeout(resolve, delay));
    document.getElementById('output').innerText = message;
}
