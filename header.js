function initHeaderScrollDirectionalHideWithUpscroll() {
    const header = document.querySelector(".header");

    if (!header) {
        return;
    }

    if (header.dataset.headerScrollInitialized === "true") {
        return;
    }

    header.dataset.headerScrollInitialized = "true";

    const hiddenTop = "-42px";
    const visibleTop = "0px";
    const stopShowDelay = 450;
    const directionThreshold = 1;

    let isHidden = false;
    let hasUpscrollClass = false;
    let stopTimer = null;
    let frameRequested = false;

    function getScrollY() {
        return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }

    let lastScrollY = getScrollY();

    function clearStopTimer() {
        if (stopTimer !== null) {
            clearTimeout(stopTimer);
            stopTimer = null;
        }
    }

    function setHeaderState(hidden) {
        if (isHidden === hidden) {
            return;
        }

        isHidden = hidden;
        header.style.top = hidden ? hiddenTop : visibleTop;
    }

    function setUpscrollState(active) {
        if (hasUpscrollClass === active) {
            return;
        }

        hasUpscrollClass = active;

        if (active) {
            header.classList.add("upscroll");
        } else {
            header.classList.remove("upscroll");
        }
    }

    function showAfterStop() {
        stopTimer = null;
        setHeaderState(false);
        setUpscrollState(false);
        lastScrollY = getScrollY();
    }

    function scheduleStopShow() {
        clearStopTimer();
        stopTimer = setTimeout(showAfterStop, stopShowDelay);
    }

    function processScroll() {
        frameRequested = false;

        const currentScrollY = getScrollY();
        const delta = currentScrollY - lastScrollY;

        clearStopTimer();

        if (currentScrollY <= directionThreshold) {
            setHeaderState(false);
            setUpscrollState(false);
        } else if (delta > directionThreshold) {
            setHeaderState(true);
            setUpscrollState(false);
        } else if (delta < -directionThreshold) {
            setHeaderState(false);
            setUpscrollState(true);
        }

        scheduleStopShow();

        lastScrollY = currentScrollY;
    }

    function requestProcessScroll() {
        if (!frameRequested) {
            frameRequested = true;
            window.requestAnimationFrame(processScroll);
        }
    }

    function onScrollEnd() {
        clearStopTimer();
        scheduleStopShow();
    }

    window.addEventListener("scroll", requestProcessScroll, { passive: true });
    window.addEventListener("resize", requestProcessScroll, { passive: true });
    window.addEventListener("scrollend", onScrollEnd, { passive: true });
    document.addEventListener("scrollend", onScrollEnd, { passive: true });

    setHeaderState(getScrollY() > directionThreshold);
    scheduleStopShow();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHeaderScrollDirectionalHideWithUpscroll);
} else {
    initHeaderScrollDirectionalHideWithUpscroll();
}