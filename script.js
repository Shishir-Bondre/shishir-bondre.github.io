let currentStep = 1;
const maxSteps = 6;

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateSteps(stepElements, step) {
    stepElements.forEach((element, index) => {
        if (index < step - 1) {
            element.className = element.className.replace(/ active| complete|\b$/, ' complete');
        } else if (index === step - 1) {
            element.className = element.className.replace(/ active| complete|\b$/, ' active');
        } else {
            element.className = element.className.replace(/ active| complete|\b$/, '');
        }
    });
}

function nextStep() {
    if (currentStep < maxSteps) {
        currentStep++;
        updateSteps(document.querySelectorAll('.step-vertical'), currentStep);
        managePreviousAndNext();
    }
}

function previousStep() {
    if (currentStep > 1) {
        currentStep--;
        updateSteps(document.querySelectorAll('.step-vertical'), currentStep);
        managePreviousAndNext();
    }
}

function managePreviousAndNext() {
        if(currentStep > 1) {
            prevBtn.removeAttribute('disabled');
        }
        if(currentStep == 6) {
            nextBtn.setAttribute('disabled', 'true');
        }
        if(currentStep < 6) {
            nextBtn.removeAttribute('disabled');
        }
        if(currentStep < 2) {
            prevBtn.setAttribute('disabled', 'true');
        }
}
