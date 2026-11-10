function initFileMenu() {
    const header = document.querySelector(".header");
    const fileButton = document.getElementById("file");
    const files = document.getElementById("files");

    if (!header) {
        return;
    }

    if (!fileButton) {
        return;
    }

    if (!files) {
        return;
    }

    let isOpen = !files.classList.contains("hidden");

    function openFiles() {
        if (isOpen) {
            return;
        }

        isOpen = true;
        files.classList.remove("hidden");
    }

    function closeFiles() {
        if (!isOpen) {
            return;
        }

        isOpen = false;
        files.classList.add("hidden");
    }

    function containsNode(root, node) {
        if (!root) {
            return false;
        }

        if (!node) {
            return false;
        }

        if (!(node instanceof Node)) {
            return false;
        }

        return root.contains(node);
    }

    fileButton.addEventListener("mouseenter", function () {
        openFiles();
    });

    header.addEventListener("mouseleave", function (event) {
        const relatedTarget = event.relatedTarget;

        if (containsNode(header, relatedTarget)) {
            return;
        }

        if (containsNode(files, relatedTarget)) {
            return;
        }

        closeFiles();
    });

    files.addEventListener("mouseleave", function (event) {
        const relatedTarget = event.relatedTarget;

        if (containsNode(header, relatedTarget)) {
            return;
        }

        if (containsNode(files, relatedTarget)) {
            return;
        }

        closeFiles();
    });

    window.addEventListener("resize", function () {
        if (!isOpen) {
            return;
        }

        const headerRect = header.getBoundingClientRect();
        const filesRect = files.getBoundingClientRect();

        const isPointerInsideHeader =
            headerRect.width > 0 &&
            headerRect.height > 0;

        const isPointerInsideFiles =
            filesRect.width > 0 &&
            filesRect.height > 0;

        if (!isPointerInsideHeader && !isPointerInsideFiles) {
            closeFiles();
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFileMenu);
} else {
    initFileMenu();
}