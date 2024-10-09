document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".sound-button");

    function playSound(soundFile) {
        const audio = new Audio(`assets/sounds/ding-101492.mp3`);
        audio.play();
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const sound = button.getAttribute("data-sound");
            playSound(sound);

            if (isCorrectAnswer(sound)) {
                button.classList.add("correct");
                alert("Correct!"); 
            } else {
                button.classList.add("incorrect");
                alert("Try Again!"); 
            }

            setTimeout(() => {
                button.classList.remove("correct", "incorrect");
            }, 1000);
        });
    });

    function isCorrectAnswer(sound) {
        const targetSound = "sound1"; 
        return sound === targetSound;
    }
});
