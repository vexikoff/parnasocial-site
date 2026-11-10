function initScreenshotViewer() {
    const screenshots = document.querySelector(".screenshots");
    if (!screenshots) {
        return;
    }

    const overlay = document.createElement("div");
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Screenshot preview");
    Object.assign(overlay.style, {
        position: "fixed",
        inset: "0",
        zIndex: "1000",
        display: "none",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        boxSizing: "border-box",
        borderRadius: "4px",
        background: "rgb(0 0 0 / 80%)"
    });

    const preview = document.createElement("img");
    Object.assign(preview.style, {
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "contain"
    });
    overlay.append(preview);
    document.body.append(overlay);

    function closePreview() {
        overlay.style.display = "none";
        preview.removeAttribute("src");
        document.removeEventListener("keydown", onKeyDown);
    }

    function onKeyDown(event) {
        if (event.key === "Escape") {
            closePreview();
        }
    }

    screenshots.addEventListener("click", event => {
        const image = event.target.closest("img");
        if (!image || !screenshots.contains(image)) {
            return;
        }

        preview.src = image.currentSrc || image.src;
        preview.alt = image.alt;
        overlay.style.display = "flex";
        document.addEventListener("keydown", onKeyDown);
    });

    overlay.addEventListener("click", closePreview);
    preview.addEventListener("click", event => event.stopPropagation());
}

initScreenshotViewer();
