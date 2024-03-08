function evaluateOKRs() {
    var objective = document.getElementById('objectiveInput').value;
    var keyResults = document.getElementById('keyResultsInput').value;
    var objectiveFeedback = '';
    var keyResultsFeedback = '';

    // Validate Objective
    if (objective.length < 10 || /\d/.test(objective)) {
        objectiveFeedback = 'Objective should be descriptive and not include numbers.';
    } else {
        objectiveFeedback = 'Objective looks good!';
    }

    // Validate Key Results
    var krArray = keyResults.split('\n').filter(kr => kr.trim() !== '');
    if (krArray.length < 4 || krArray.length > 6) {
        keyResultsFeedback = 'You should have 4 to 6 Key Results.';
    } else {
        keyResultsFeedback = 'Key Results look well-defined!';
    }

    document.getElementById('objectiveFeedback').innerText = objectiveFeedback;
    document.getElementById('keyResultsFeedback').innerText = keyResultsFeedback;
}
