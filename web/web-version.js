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
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'audio/*,video/mp4,video/webm,video/ogg';
    fileInput.multiple = true;
    fileInput.hidden = true;
    document.body.appendChild(fileInput);

    fileMenu?.classList.add('hidden');
    recentMenu?.classList.add('hidden');

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

    const videoModeButton = document.getElementById('videomode');
    videoModeButton?.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        showFullVersionNotice('Fullscreen video mode');
    }, true);

    const lockedSettings = [
        '.switchsss',
        '.switchccc',
        '.switchcccc',
        '.switchcc',
        '.rpc',
        '.awake',
        '.hardware',
        '.css',
        '.outputdev',
        '.switchautoratio',
        '.watchfolders'
    ];

    for (const selector of lockedSettings) {
        const control = document.querySelector(selector);
        const row = control?.closest('.row');
        if (!control || !row) {
            continue;
        }

        const input = control.matches('input, select') ? control : control.querySelector('input');
        if (input) {
            input.disabled = true;
        }

        row.classList.add('web-locked');
        const note = document.createElement('span');
        note.className = 'web-lock-note';
        note.textContent = 'Full version: ';

        const link = document.createElement('a');
        link.href = releaseUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'download';
        note.appendChild(link);
        row.appendChild(note);
    }

    const savePlaylistSwitch = document.querySelector('.switchccc input');
    if (savePlaylistSwitch) {
        savePlaylistSwitch.checked = false;
        savePlaylistSwitch.disabled = true;
    }

    notice.addEventListener('click', () => notice.classList.remove('visible'));
}
