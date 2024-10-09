document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".sound-button");

    // Function to play sound for each button
    function playSound(soundFile) {
        const audio = new Audio(`assets/sounds/${soundFile}.mp3`);
        audio.play();
    }

    // Function to handle button click, play sound, and check if it's correct
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const sound = button.getAttribute("data-sound");

            // Play the sound
            playSound(sound);

            // Check if the button clicked matches the target sound
            if (isCorrectAnswer(sound)) {
                button.classList.add("correct");
                alert("Correct!"); // Placeholder for feedback
            } else {
                button.classList.add("incorrect");
                alert("Try Again!"); // Placeholder for feedback
            }

            // Remove feedback after a short delay
            setTimeout(() => {
                button.classList.remove("correct", "incorrect");
            }, 1000);
        });
    });

    // Placeholder function to define the correct sound
    function isCorrectAnswer(sound) {
        const targetSound = "sound1"; // Set this to the correct answer dynamically
        return sound === targetSound;
    }
});
