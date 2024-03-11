function evaluateOKRs() {
    var objective = document.getElementById('objectiveInput').value.trim();
    var keyResults = document.getElementById('keyResultsInput').value.trim();
    var objectiveFeedback = '';
    var keyResultsFeedback = '';
    var allValid = true;

    // Validate Objective
    function validateObjective(objective) {
        let feedback = {
            isValid: true,
            messages: []
        };
    
        // 1. Declares the Big Idea Without Numbers
        if (/\d/.test(objective)) {
            feedback.isValid = false;
            feedback.messages.push("Objective should not include numbers.");
        }
    
        // 2. Checks for action-oriented verbs and meaningful content
        const actionVerbs = ['create', 'develop', 'establish', 'enhance', 'improve', 'increase', 'reinvent', 'transform', 'innovate'];
        const verbFound = actionVerbs.some(verb => objective.toLowerCase().includes(verb));
        if (!verbFound) {
            feedback.isValid = false;
            feedback.messages.push("Objective should include action-oriented verbs like create, develop, enhance, etc.");
        }
    
        // 3. Objective Types (Build, Improve, Innovate)
        // Assuming each type has unique keywords as provided
        const buildKeywords = ['create', 'develop', 'establish'];
        const improveKeywords = ['enhance', 'improve', 'increase'];
        const innovateKeywords = ['reinvent', 'transform', 'innovate'];
    
        const buildFound = buildKeywords.some(word => objective.toLowerCase().includes(word));
        const improveFound = improveKeywords.some(word => objective.toLowerCase().includes(word));
        const innovateFound = innovateKeywords.some(word => objective.toLowerCase().includes(word));
    
        if (!(buildFound || improveFound || innovateFound)) {
            feedback.isValid = false;
            feedback.messages.push("Objective should clearly indicate if it aims to build, improve, or innovate.");
        }
    
        // 4. Levels of Impact (Directional, Meaningful, Audacious)
        // Checking for the presence of impactful language
        const directionalKeywords = ['guide', 'focus', 'direct'];
        const meaningfulKeywords = ['meaningful', 'change', 'innovation'];
        const audaciousKeywords = ['energize', 'bold', 'next-level'];
    
        const directionalFound = directionalKeywords.some(word => objective.toLowerCase().includes(word));
        const meaningfulFound = meaningfulKeywords.some(word => objective.toLowerCase().includes(word));
        const audaciousFound = audaciousKeywords.some(word => objective.toLowerCase().includes(word));
    
        if (!(directionalFound || meaningfulFound || audaciousFound)) {
            feedback.isValid = false;
            feedback.messages.push("Objective should indicate its level of impact: directional, meaningful, or audacious.");
        }
    
        return feedback;
    }
    
    // Example usage:
    let objective = "Create a user-friendly onboarding experience.";
    let validationFeedback = validateObjective(objective);
    
    if (validationFeedback.isValid) {
        console.log("Objective is valid.");
    } else {
        console.log("Objective validation failed:", validationFeedback.messages.join(" "));
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
    "You are a sales manager looking to grow your team's revenue by 20%.",
    "You are a customer support manager aiming to improve customer satisfaction.",
    "You are a software engineer working to reduce the number of bugs in your product.",
    "You are a UX designer aiming to improve the user experience of your product.",
    "You are a data analyst looking to increase the accuracy of your reports.",
    "You are a content writer aiming to increase the number of blog subscribers.",
    "You are a HR manager aiming to improve employee retention.",
    "You are a finance manager aiming to reduce the company's operating expenses.",
    "You are a business analyst aiming to improve the company's profit margins.",
    "You are a supply chain manager aiming to reduce the company's inventory costs.",
    "You are a customer success manager aiming to increase customer retention.",
    "You are a graphic designer aiming to improve the visual identity of your product.",
    "You are a social media manager aiming to increase the company's social media engagement.",
    "You are a product owner aiming to improve the team's velocity.",
    "You are a QA engineer aiming to reduce the number of bugs in your product.",
    "You are a technical writer aiming to improve the quality of your product documentation.",
    "You are a business development manager aiming to increase the company's market share.",
    "You are a product marketing manager aiming to increase the number of product trials.",
    "You are a customer experience manager aiming to improve the customer journey.",
    "You are a product manager aiming to increase the number of active users of your product.",
    "You are a sales enablement manager aiming to improve the effectiveness of your sales team.",
    "You are a product manager aiming to improve the onboarding experience of your product.",
    "You are a project manager aiming to improve the team's collaboration.",
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
