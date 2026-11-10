const tutorialStorageKey = 'parnasocial_tutorial_completed';

function checkAndStartTutorial() {
    const isDone = localStorage.getItem(tutorialStorageKey);
    if (isDone === 'true') {
        return;
    }
    showTutorialStep(1);
}

function showTutorialStep(step) {
    hideAllTutorialBlocks();

    let currentBlock = null;
    if (step === 1) {
        currentBlock = document.querySelector('.lefttrain');
    } else if (step === 2) {
        currentBlock = document.querySelector('.righttrain');
    } else if (step === 3) {
        currentBlock = document.querySelector('.centertrain');
    }

    if (currentBlock) {
        currentBlock.classList.remove('hidden');
        bindTutorialButtons(currentBlock, step);
    }
}

function hideAllTutorialBlocks() {
    const blocks = document.querySelectorAll('.trainblockbacks');
    blocks.forEach(function(block) {
        block.classList.add('hidden');
    });
}

function bindTutorialButtons(block, step) {
    const buttons = block.querySelectorAll('.row button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const text = this.textContent.trim();
            if (text === 'Skip' || text === 'End') {
                completeTutorial();
            } else if (text === 'Next') {
                showTutorialStep(step + 1);
            }
        });
    });
}

function completeTutorial() {
    hideAllTutorialBlocks();
    localStorage.setItem(tutorialStorageKey, 'true');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkAndStartTutorial);
} else {
    checkAndStartTutorial();
}