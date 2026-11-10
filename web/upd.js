const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
    const pred2contNac = document.querySelector('.pred2cont.nac');
    const pred2contRestart = document.querySelector('.pred2cont:not(.nac)');
    const btnUpdate = document.getElementById('update');
    const btnSkip3 = document.getElementById('skip3');
    const btnRestart2 = document.getElementById('restart2');
    const btnSkip2 = document.getElementById('skip2');

    const progressText = document.createElement('p');
    progressText.id = 'update-progress-text';
    progressText.style.marginTop = '8px';
    progressText.style.fontSize = '14px';
    progressText.style.opacity = '0.7';

    if (pred2contNac) {
        pred2contNac.querySelector('.pred').appendChild(progressText);
    }

    function hideAllPreds() {
        if (pred2contNac) pred2contNac.classList.add('hidden');
        if (pred2contRestart) pred2contRestart.classList.add('hidden');
    }

    ipcRenderer.on('update-available', (event, version) => {
        if (pred2contNac) {
            const h1 = pred2contNac.querySelector('h1');
            if (h1) h1.textContent = `New version ${version} found, update?`;
            pred2contNac.classList.remove('hidden');
        }
    });

    ipcRenderer.on('update-downloaded', () => {
        hideAllPreds();
        if (pred2contRestart) {
            pred2contRestart.classList.remove('hidden');
        }
    });

    ipcRenderer.on('download-progress', (event, percent) => {
        if (progressText) {
            progressText.textContent = `Downloading: ${Math.round(percent)}%`;
        }
    });

    ipcRenderer.on('update-error', (event, message) => {
        console.error('Update error:', message);
        hideAllPreds();
    });

    if (btnUpdate) {
        btnUpdate.addEventListener('click', () => {
            btnUpdate.disabled = true;
            btnUpdate.textContent = 'Downloading...';
            ipcRenderer.send('start-download');
        });
    }

    if (btnSkip3) {
        btnSkip3.addEventListener('click', () => {
            hideAllPreds();
        });
    }

    if (btnRestart2) {
        btnRestart2.addEventListener('click', () => {
            ipcRenderer.send('quit-and-install');
        });
    }

    if (btnSkip2) {
        btnSkip2.addEventListener('click', () => {
            hideAllPreds();
        });
    }

    ipcRenderer.send('start-update-check');
});