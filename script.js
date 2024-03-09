function evaluateOKRs() {
    var objective = document.getElementById('objectiveInput').value.trim();
    var keyResults = document.getElementById('keyResultsInput').value.trim();
    var objectiveFeedback = '';
    var keyResultsFeedback = '';
    var allValid = true;

    // Validate Objective
    if (objective.length < 10) {
        objectiveFeedback = 'Objective should be more descriptive.';
        allValid = false;
    } else if (/\d/.test(objective)) {
        objectiveFeedback = 'Objective should not include any numbers.';
        allValid = false;
    } else {
        if (!objective.toLowerCase().includes('achieve') && !objective.toLowerCase().includes('inspire')) {
            objectiveFeedback = 'Is your objective inspirational and actionable? Make sure it motivates and provides clear direction.';
            allValid = false;
        } else {
            objectiveFeedback = 'Objective looks good!';
        }
    }

    // Validate Key Results
    var validKRCount = 0;
    keyResults.split('\n').forEach(function(kr, index) {
        if (kr.trim() === '') {
            return;
        }
        validKRCount++;
        if (!/\d/.test(kr)) {
            keyResultsFeedback += `KR #${index + 1} should include a number quantifying its value. `;
            allValid = false;
        }
    });

    if (validKRCount < 4 || validKRCount > 6) {
        keyResultsFeedback += 'You should have 4 to 6 Key Results per Objective. ';
        allValid = false;
    }

    if (keyResultsFeedback === '') {
        keyResultsFeedback = 'Key Results look well-defined!';
    }

    document.getElementById('objectiveFeedback').innerText = objectiveFeedback;
    document.getElementById('keyResultsFeedback').innerText = keyResultsFeedback;

    if (allValid) {
        showModal();
    } else {
        closeModal();
    }
}

function showObjectiveHelp() {
    var helpDiv = document.getElementById('objectiveHelp');
    helpDiv.style.display = helpDiv.style.display === 'block' ? 'none' : 'block';
}

function showKeyResultsHelp() {
    var helpDiv = document.getElementById('keyResultsHelp');
    helpDiv.style.display = helpDiv.style.display === 'block' ? 'none' : 'block';
}

function showModal() {
    var modal = document.getElementById('successModal');
    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('successModal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    var modal = document.getElementById('successModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Array of scenarios
var scenarios = [
    "You are a product manager tasked with launching a new mobile app.",
    "You are a marketing specialist aiming to increase brand awareness.",
    "You are a project manager leading a team to deliver a major software upgrade.",
    // Add more scenarios as needed
];

// Function to generate a random scenario
function generateRandomScenario() {
    var randomIndex = Math.floor(Math.random() * scenarios.length);
    var scenario = scenarios[randomIndex];
    document.getElementById('scenario').innerText = scenario;
}

// Call generateRandomScenario function on page load
window.onload = generateRandomScenario;
