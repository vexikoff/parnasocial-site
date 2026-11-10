function initHeaderScrollDirectionalHideWithUpscroll() {
    const header = document.querySelector(".header");

    if (!header) {
        return;
    }

    if (header.dataset.headerScrollInitialized === "true") {
        return;
    }

    header.dataset.headerScrollInitialized = "true";

    const computedPosition = window.getComputedStyle(header).position;

    if (computedPosition === "static") {
        header.style.position = "relative";
    }

    const hiddenTop = "-42px";
    const visibleTop = "0px";
    const stopShowDelay = 450;
    const directionThreshold = 1;
    const scrolledThreshold = 48;

    let isHidden = false;
    let hasUpscrollClass = false;
    let hasScrolledClass = false;
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

    function setScrolledState(active) {
        if (hasScrolledClass === active) {
            return;
        }

        hasScrolledClass = active;

        if (active) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    function showAfterStop() {
        stopTimer = null;
        setHeaderState(false);
        setUpscrollState(false);
        setScrolledState(getScrollY() >= scrolledThreshold);
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

        setScrolledState(currentScrollY >= scrolledThreshold);

        if (currentScrollY <= directionThreshold) {
            setHeaderState(false);
            setUpscrollState(false);
        } else if (delta >= directionThreshold) {
            setHeaderState(true);
            setUpscrollState(false);
        } else if (delta <= -directionThreshold) {
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
    setScrolledState(getScrollY() >= scrolledThreshold);
    scheduleStopShow();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHeaderScrollDirectionalHideWithUpscroll);
} else {
    initHeaderScrollDirectionalHideWithUpscroll();
}