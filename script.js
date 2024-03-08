function evaluateOKRs() {
    var objective = document.getElementById('objectiveInput').value.trim();
    var keyResults = document.getElementById('keyResultsInput').value.trim();
    var objectiveFeedback = '';
    var keyResultsFeedback = '';

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

// Placeholder for Key Results validation logic
// Assume similar validation and feedback logic for Key Results here
    keyResultsFeedback = 'Key Results validation logic goes here.';

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