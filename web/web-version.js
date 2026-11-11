if (window.parnasocial) {
    const updaterScript = document.createElement('script');
    updaterScript.src = 'upd.js';
    document.body.appendChild(updaterScript);
} else {
    document.body.classList.add('web-version');

    const releaseUrl = 'https://github.com/vexikoff/parnasocial/releases';
    const notice = document.createElement('div');
    notice.className = 'web-version-notice';
    notice.setAttribute('role', 'status');

    const message = document.createElement('span');
    const downloadLink = document.createElement('a');
    downloadLink.href = releaseUrl;
    downloadLink.target = '_blank';
    downloadLink.rel = 'noopener noreferrer';
    downloadLink.textContent = 'Download the full version';

    notice.append(message, downloadLink);
    document.body.appendChild(notice);

    function showFullVersionNotice(feature) {
        message.textContent = `${feature} is available in the full version. `;
        notice.classList.add('visible');
    }

    const fileButton = document.getElementById('file');
    const fileMenu = document.getElementById('files');
    const recentMenu = document.querySelector('.recentt');
    const logo = document.querySelector('.header .iconp');
    document.querySelector('.main > .left')?.remove();

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'audio/*,video/*';
    fileInput.multiple = true;
    fileInput.hidden = true;
    document.body.appendChild(fileInput);

    fileMenu?.remove();
    recentMenu?.remove();

    fileButton?.addEventListener('click', () => {
        showFullVersionNotice('The File menu and playlist saving');
    });

    logo?.addEventListener('click', (event) => {
        if (event.target.closest('button, a')) {
            return;
        }

        window.location.assign('https://parnasocial.vexikoff.xyz/');
    });

    const addButton = document.getElementById('addplaylist');
    addButton?.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', () => {
        window.parnasocialWeb?.addFiles(fileInput.files);
        fileInput.value = '';
    });

    document.querySelector('.main')?.addEventListener('dragover', (event) => {
        if (event.dataTransfer?.types.includes('Files')) {
            event.preventDefault();
        }
    });

    document.querySelector('.main')?.addEventListener('drop', (event) => {
        const files = event.dataTransfer?.files;
        if (!files?.length) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();
        window.parnasocialWeb?.addFiles(files);
    });

    notice.addEventListener('click', () => notice.classList.remove('visible'));
}
