document.addEventListener("DOMContentLoaded", function () {

    /* ============ MENÜ DRAWER ============ */
    const mainNav       = document.getElementById("mainNav");
    const normalToggle  = document.querySelector(".mobile-menu-toggle");
    const compactToggle = document.querySelector(".compact-toggle");
    const closeBtn      = document.querySelector(".menu-close-btn");

    function openMenu()  { mainNav && mainNav.classList.add("open"); document.body.classList.add("menu-open"); }
    function closeMenu() { mainNav && mainNav.classList.remove("open"); document.body.classList.remove("menu-open"); }

    if (normalToggle)  normalToggle.addEventListener("click", openMenu);
    if (compactToggle) compactToggle.addEventListener("click", openMenu);
    if (closeBtn)      closeBtn.addEventListener("click", closeMenu);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

    /* ============ GECE MODU ============ */
    const darkToggles = document.querySelectorAll(".dark-mode-toggle");
    if (localStorage.getItem("darkMode") === "on") document.body.classList.add("dark-mode");
    darkToggles.forEach(btn => btn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "on" : "off");
    }));

    /* ============ SCROLL — KOMPAKT HEADER ============ */
    const siteHeader = document.getElementById("siteHeader");
    if (siteHeader) {
        const onScroll = () => {
            const y = window.scrollY || window.pageYOffset;
            siteHeader.classList.toggle("scrolled", y > 120);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
    }

    function openSearch() {
        if (!searchOverlay) return;
        searchOverlay.classList.add("active");
        searchOverlay.setAttribute("aria-hidden", "false");
        document.body.classList.add("search-open");
        if (searchBtn) searchBtn.setAttribute("aria-expanded", "true");
        setTimeout(() => { if (searchInput) searchInput.focus(); }, 200);
    }
    function closeSearch() {
        if (!searchOverlay) return;
        searchOverlay.classList.remove("active");
        searchOverlay.setAttribute("aria-hidden", "true");
        document.body.classList.remove("search-open");
        if (searchBtn) searchBtn.setAttribute("aria-expanded", "false");
    }
    if (searchBtn)   searchBtn.addEventListener("click", openSearch);
    if (searchClose) searchClose.addEventListener("click", closeSearch);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && searchOverlay && searchOverlay.classList.contains("active")) closeSearch();
        if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); openSearch(); }
    });
    if (searchOverlay) {
        searchOverlay.addEventListener("click", (e) => { if (e.target === searchOverlay) closeSearch(); });
    }

    /* ============ SLIDER (index.php) ============ */
    const slides = document.querySelectorAll(".slide-item");
    if (slides.length) {
        const prevBtn = document.querySelector(".prev-btn");
        const nextBtn = document.querySelector(".next-btn");
        const numBtns = document.querySelectorAll(".slide-num-btn");
        const sliderContainer = document.querySelector(".column-middle-slider");

        let currentIndex = 0;
        const totalSlides = slides.length;
        let slideInterval;

        function showSlide(index) {
            slides.forEach((s, i) => s.classList.toggle("active", i === index));
            numBtns.forEach((b, i) => b.classList.toggle("active", i === index));
            currentIndex = index;
        }
        function nextSlide() { showSlide((currentIndex + 1) % totalSlides); }
        function prevSlide() { showSlide((currentIndex - 1 + totalSlides) % totalSlides); }

        if (nextBtn) nextBtn.addEventListener("click", () => { nextSlide(); resetTimer(); });
        if (prevBtn) prevBtn.addEventListener("click", () => { prevSlide(); resetTimer(); });
        numBtns.forEach(btn => btn.addEventListener("click", () => { showSlide(parseInt(btn.dataset.index, 10)); resetTimer(); }));

        function startTimer() { slideInterval = setInterval(nextSlide, 6000); }
        function resetTimer() { clearInterval(slideInterval); startTimer(); }

        if (sliderContainer) {
            sliderContainer.addEventListener("mouseenter", () => clearInterval(slideInterval));
            sliderContainer.addEventListener("mouseleave", () => startTimer());
        }
        startTimer();

        /* Swipe */
        const sliderEl = document.querySelector(".news-slider-container");
        if (sliderEl) {
            let touchStartX = 0, touchStartY = 0, isSwiping = false;
            sliderEl.addEventListener("touchstart", (e) => {
                touchStartX = e.changedTouches[0].screenX;
                touchStartY = e.changedTouches[0].screenY;
                isSwiping = false;
            }, { passive: true });
            sliderEl.addEventListener("touchmove", (e) => {
                if (isSwiping) return;
                const dx = Math.abs(e.changedTouches[0].screenX - touchStartX);
                const dy = Math.abs(e.changedTouches[0].screenY - touchStartY);
                if (dx > 20 && dx > dy) isSwiping = true;
            }, { passive: true });
            sliderEl.addEventListener("touchend", (e) => {
                const dx = e.changedTouches[0].screenX - touchStartX;
                const dy = e.changedTouches[0].screenY - touchStartY;
                if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
                    if (dx < 0) { nextSlide(); resetTimer(); }
                    else        { prevSlide(); resetTimer(); }
                }
            }, { passive: true });
        }
    }

    /* ============ VİDEO CAROUSEL (index.php) ============ */
    const videoTrack = document.getElementById("videoTrack");
    const carouselPrev = document.querySelector(".carousel-prev");
    const carouselNext = document.querySelector(".carousel-next");
    if (videoTrack && carouselPrev && carouselNext) {
        const scrollAmount = 320;
        const updateArrows = () => {
            const maxScroll = videoTrack.scrollWidth - videoTrack.clientWidth;
            carouselPrev.disabled = videoTrack.scrollLeft <= 5;
            carouselNext.disabled = videoTrack.scrollLeft >= maxScroll - 5;
        };
        carouselPrev.addEventListener("click", () => videoTrack.scrollBy({ left: -scrollAmount, behavior: "smooth" }));
        carouselNext.addEventListener("click", () => videoTrack.scrollBy({ left: scrollAmount, behavior: "smooth" }));
        videoTrack.addEventListener("scroll", updateArrows, { passive: true });
        window.addEventListener("resize", updateArrows);
        updateArrows();
    }

    /* ============ META PAYLAŞ DROPDOWN (haber.php) ============ */
    const metaShareToggle = document.getElementById("metaShareToggle");
    const metaShareMenu   = document.getElementById("metaShareMenu");
    if (metaShareToggle && metaShareMenu) {
        metaShareToggle.addEventListener("click", function (e) {
            e.stopPropagation();
            const isOpen = metaShareMenu.classList.toggle("open");
            metaShareToggle.classList.toggle("active", isOpen);
            metaShareToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });
        document.addEventListener("click", function (e) {
            if (!metaShareMenu.contains(e.target) && !metaShareToggle.contains(e.target)) {
                metaShareMenu.classList.remove("open");
                metaShareToggle.classList.remove("active");
                metaShareToggle.setAttribute("aria-expanded", "false");
            }
        });
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && metaShareMenu.classList.contains("open")) {
                metaShareMenu.classList.remove("open");
                metaShareToggle.classList.remove("active");
            }
        });
        const copyOpt = metaShareMenu.querySelector(".share-copy");
        if (copyOpt) {
            copyOpt.addEventListener("click", function () {
                navigator.clipboard.writeText(window.location.href).then(() => {
                    const span = copyOpt.querySelector("span");
                    const original = span.textContent;
                    copyOpt.classList.add("copied");
                    span.textContent = "Kopyalandı!";
                    setTimeout(() => {
                        copyOpt.classList.remove("copied");
                        span.textContent = original;
                        metaShareMenu.classList.remove("open");
                        metaShareToggle.classList.remove("active");
                    }, 1500);
                });
            });
        }
    }

    /* ============ COPY LINK (haber.php) ============ */
    const copyBtn = document.querySelector(".copy-link");
    if (copyBtn) {
        copyBtn.addEventListener("click", function () {
            navigator.clipboard.writeText(window.location.href).then(() => {
                copyBtn.classList.add("copied");
                setTimeout(() => copyBtn.classList.remove("copied"), 1500);
            });
        });
    }

    /* ============ FİLTRE TABLARI (arama.php) ============ */
    const tabs = document.querySelectorAll(".search-filter-tab");
    if (tabs.length) {
        tabs.forEach(tab => tab.addEventListener("click", function () {
            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
        }));
    }
});

/* ============ ARAMA OVERLAY (DOM hazır, ayrı çalışır) ============ */
(function initSearchOverlay() {
    const searchBtn     = document.getElementById("headerSearchBtn");
    const searchOverlay = document.getElementById("searchOverlay");
    const searchClose   = document.getElementById("searchCloseBtn");
    const searchInput   = document.getElementById("searchInput");

    if (!searchBtn || !searchOverlay) {
        console.warn("[YY] Arama overlay elemanları bulunamadı. ID kontrol et:", {
            searchBtn: !!searchBtn,
            searchOverlay: !!searchOverlay,
            searchClose: !!searchClose,
            searchInput: !!searchInput
        });
        return;
    }

    function openSearch() {
        searchOverlay.classList.add("active");
        searchOverlay.setAttribute("aria-hidden", "false");
        document.body.classList.add("search-open");
        searchBtn.setAttribute("aria-expanded", "true");
        setTimeout(() => { if (searchInput) searchInput.focus(); }, 200);
    }
    function closeSearch() {
        searchOverlay.classList.remove("active");
        searchOverlay.setAttribute("aria-hidden", "true");
        document.body.classList.remove("search-open");
        searchBtn.setAttribute("aria-expanded", "false");
    }

    searchBtn.addEventListener("click", openSearch);
    if (searchClose) searchClose.addEventListener("click", closeSearch);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && searchOverlay.classList.contains("active")) closeSearch();
        if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); openSearch(); }
    });

    searchOverlay.addEventListener("click", (e) => {
        if (e.target === searchOverlay) closeSearch();
    });
})();