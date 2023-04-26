

document.addEventListener('DOMContentLoaded', function () {
    // Select all buttons and result paragraphs
    const buttons = document.querySelectorAll('button');
    const results = document.querySelectorAll('p');

    // Initialize the counter
    let counter = 0;

    // Function to update the total score in the HTML
    function updateTotalScore() {
        const totalResults = document.getElementById('totalResults');
        totalResults.textContent = `Total Score: ${counter}`;
    }

    // Add event listeners to each button
    buttons.forEach((button) => {
        button.addEventListener('click', function () {
            // Get the corresponding result paragraph
            const resultId = button.parentElement.querySelector('p').id;
            const result = document.getElementById(resultId);

            if (button.classList.contains('correct')) {
                // Set button background to green and show "Correct" message
                button.style.backgroundColor = 'green';
                result.textContent = 'Correct';

                // Increase the counter by 5 and update the total score
                counter += 5;
                updateTotalScore();
            } else {
                // Set button background to red and show "Incorrect" message
                button.style.backgroundColor = 'red';
                result.textContent = 'Incorrect';
            }

            // Disable all buttons after an answer has been clicked
            //button.parentElement.querySelectorAll('button').forEach((btn) => {
                //btn.disabled = true;
            //});
        });
    });
});