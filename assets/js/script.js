const questions = {
    inspiration: [
        "What gave you the idea for your model?",
        "Did you see something cool that made you think of this design?",
        "Why did you choose this shape or style for your model?",
        "Is your model based on something in real life, like a rocket or a car?",
        "What is your favourite part of your design, and why?",
        "Did you use any pictures, videos, or books to help you come up with ideas?",
        "If this model was real, what would it be used for?",
        "How did you make sure your design fit the 'Mission to Mars' theme?",
        "Did you change your idea while making it? What made you change it?",
        "If you could make another model, would it look similar or totally different? Why?",
    ],
    challenges: [
        "What was the hardest part of your model to make?",
        "Did anything go wrong while you were designing in TinkerCAD?",
        "How did you fix problems when they happened?",
        "Was there a part of the model you had to do over again?",
        "Which tool in TinkerCAD was the trickiest to use?",
        "Did you ever feel stuck? What helped you get unstuck?",
        "Was making the model harder or easier than you thought it would be?",
        "Did you ask for help from your teammates or teacher?",
        "How did you make your model look the way you wanted?",
        "What advice would you give someone making a model like yours?",
    ],
    precision: [
        "How did you decide how big the pegs and holes should be?",
        "Did your first pegs and holes fit together?",
        "What did you do if the pegs and holes didn’t fit?",
        "How did you measure the pegs and holes in TinkerCAD?",
        "Did you need to adjust your model after testing it?",
        "How did you make sure the parts stayed strong and didn’t break?",
        "Was it easy or hard to make the parts fit together smoothly?",
        "Did you use any special tricks to make the pegs and holes work better?",
        "How do you check your work to make sure the measurements are correct?",
        "What did you learn about making pegs and holes for 3D printing?",
    ],
    collaboration: [
        "How did your team share ideas about the designs?",
        "Did everyone in the team have a job to do? What was your job?",
        "Was it easy or hard to work as a team? Why?",
        "Did your teammates give you helpful ideas for your model?",
        "How did you share your model with your team in TinkerCAD?",
        "Did your team ever disagree on what to do? How did you solve it?",
        "What was your favourite part of working as a team?",
        "Did you help anyone on your team with their model?",
        "How did your team decide what to build for the project?",
        "If you worked in a team again, what would you do the same or differently?",
    ],
    assembly: [
        "Did your model fit together the way you wanted?",
        "How did you test if the parts worked properly?",
        "Did you have to print any part again to make it fit?",
        "Was there a part that didn’t work like you planned?",
        "How did you fix any problems with the model?",
        "Did the pegs and holes stay strong after putting them together?",
        "What did you learn about making sure parts fit before printing?",
        "How long did it take to assemble all the pieces?",
        "What surprised you the most about testing your model?",
        "If you could print your model again, what would you change?",
    ],
    reflection: [
        "What is the coolest thing you learned while making your model?",
        "Was making this model more fun or more work? Why?",
        "What are you most proud of in your design?",
        "What would you do differently if you could start over?",
        "Did you learn anything about teamwork from this project?",
        "What was the hardest thing you had to figure out?",
        "How do you feel about your model now that it’s finished?",
        "Did making the model teach you something new about Mars?",
        "What advice would you give yourself if you could start the project again?",
        "What do you want to make next after this project?",
    ],
};

function showQuestion(category) {
    const question1 = document.getElementById('question1');
    const question2 = document.getElementById('question2');
    const selectedQuestions = questions[category];

    if (selectedQuestions) {
        question1.innerText = selectedQuestions[0];
        question2.innerText = selectedQuestions[1];
    } else {
        console.error('Category not found:', category);
    }
}
