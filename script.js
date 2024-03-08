function evaluateOKRs() {
    var objective = document.getElementById('objectiveInput').value.trim();
    var keyResults = document.getElementById('keyResultsInput').value.trim();
    var objectiveFeedback = '';
    var keyResultsFeedback = '';
    var allValid = true; // Assume all validations pass initially

// Validate Objective
    if (objective.length < 10) {
        objectiveFeedback = 'Objective should be more descriptive.';
    } else if (/\d/.test(objective)) {
        objectiveFeedback = 'Objective should not include any numbers.';
    } else {
        if (!objective.toLowerCase().includes('achieve') && !objective.toLowerCase().includes('inspire')) {
            objectiveFeedback = 'Is your objective inspirational and actionable? Make sure it motivates and provides clear direction.';
        } else {
            objectiveFeedback = 'Objective looks good!';
        }
    }

// Validate Key Results
    var keyResultsArray = keyResults.split('\n');
    var validKRCount = 0;
    keyResultsArray.forEach(function(kr, index) {
        if (kr.trim() === '') {
            return;
        }
        validKRCount++;
        if (!/\d/.test(kr)) {
            keyResultsFeedback += `KR #${index + 1} should include a number quantifying its value. `;
        }
    });

    if (validKRCount < 4 || validKRCount > 6) {
        keyResultsFeedback += 'You should have 4 to 6 Key Results per Objective. ';
    }

    if (keyResultsFeedback === '') {
        keyResultsFeedback = 'Key Results look well-defined!';
    }

    document.getElementById('objectiveFeedback').innerText = objectiveFeedback;
    document.getElementById('keyResultsFeedback').innerText = keyResultsFeedback;
}

function showObjectiveHelp() {
    var helpDiv = document.getElementById('objectiveHelp');
    helpDiv.style.display = helpDiv.style.display === 'block' ? 'none' : 'block';
}

function showKeyResultsHelp() {
    var helpDiv = document.getElementById('keyResultsHelp');
    helpDiv.style.display = helpDiv.style.display === 'block' ? 'none' : 'block';
}

// Check if all validations passed
    if (objectiveFeedback === 'Objective looks good!' && keyResultsFeedback === 'Key Results look well-defined!') {
    allValid = true;
    } else {
        allValid = false;
    }

    document.getElementById('objectiveFeedback').innerText = objectiveFeedback;
    document.getElementById('keyResultsFeedback').innerText = keyResultsFeedback;

// If all validations pass, show celebratory message and confetti
    if (allValid) {
        showCelebration();
    }

function showCelebration() {
    var celebrationMessage = document.createElement('div');
    celebrationMessage.innerHTML = '<h2>Congratulations! Your OKRs look great!</h2>';
    celebrationMessage.style.textAlign = 'center';
    document.body.appendChild(celebrationMessage);

// Trigger confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}