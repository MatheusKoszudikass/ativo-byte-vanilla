
let menuIcon = document.querySelector('.menu-mobile-icon');
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.getElementById('container');
let items = document.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;
let intervalTime = 5000;
let autoSlide;
let pauseTime = 10800;
let pauseTimeout;
let lastClickTime = 0;
let clickInterval = 300;
let isPaused = true;

let touchStartX = 0;
let touchEndX = 0;

function scrollToSection(sectionId) {
    let navbarMobileIcon = document.getElementById('open-icon');
    let navbarMobile = document.querySelector('.mobile-menu');
    let MobileSection = document.getElementById('container');
    const section = document.getElementById(sectionId);
    const navHeight = document.querySelector('header').offsetHeight;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY - navHeight;

    if (navbarMobile != null && navbarMobile.classList.contains('open')) {
        navbarMobileIcon.classList.remove('open-icon');
        navbarMobile.classList.remove('open');
        MobileSection.classList.remove('open');
    }

    window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
    });
}

function resetSlideAfterPause() {
    clearTimeout(pauseTimeout);

    pauseTimeout = setTimeout(() => {
        startAutoSlide();
        isPaused = false;
    }, pauseTime)
}

function handleTouchStart(event) {
    touchStartX = event.changedTouches ? event.changedTouches[0].screenX : event.screenX;
}

function handleTouchMove(event) {
    touchEndX = event.changedTouches[0].screenX;
}

function handleTouchEnd(event) {
    touchEndX = event.changedTouches ? event.changedTouches[0].screenX : event.screenX;
    if (touchEndX < touchStartX) {
        nextItem();
        stopAutoSlide();
    } else if (touchEndX > touchStartX) {
        prevItem();
        stopAutoSlide();
    }
    resetSlideAfterPause();
}

function handleClick() {
    stopAutoSlide();
    resetSlideAfterPause();
}

function toggleMenu() {
    let navbarMobileIcon = document.getElementById('open-icon');
    let navbarMobile = document.querySelector('.mobile-menu');
    let MobileSection = document.getElementById('container');
    navbarMobile.classList.toggle('open');
    navbarMobileIcon.classList.toggle('open-icon');

    if (navbarMobile.classList.contains('open')) {
        MobileSection.classList.add('open');
    } else {
        MobileSection.classList.remove('open');
    }
}

function updateDots() {
    indicator.querySelector('.active').classList.remove('active');
    dots[active].classList.add('active');
}

function addPauseEvents(item) {
    item.addEventListener('touchstart', handleTouchStart);
    item.addEventListener('touchend', handleTouchEnd);
    item.addEventListener('mouseover', stopAutoSlide);
    item.addEventListener('mouseout', startAutoSlide);
}

function removePauseEvents(item) {
    item.removeEventListener('touchstart', handleTouchStart);
    item.removeEventListener('touchmove', handleTouchMove);
    item.removeEventListener('touchend', handleTouchEnd);
    item.removeEventListener('mouseover', stopAutoSlide);
    item.removeEventListener('mouseout', startAutoSlide);
}

function nextItem() {
    let itemActive = container.querySelector('.list .item.active');
    itemActive.classList.remove('active');
    removePauseEvents(itemActive);

    if (active + 1 > lastPosition) {
        active = 0;
    } else {
        active += 1;
    }

    items[active].classList.add('active');
    addPauseEvents(items[active]);
    updateDots();
}

function prevItem() {
    let itemActive = container.querySelector('.list .item.active');
    itemActive.classList.remove('active');
    removePauseEvents(itemActive);

    if (active - 1 < firstPosition) {
        active = lastPosition;
    } else {
        active -= 1;
    }

    items[active].classList.add('active');
    addPauseEvents(items[active]);
    updateDots();
}

function startAutoSlide() {
    autoSlide = setInterval(nextItem, intervalTime);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}

nextButton.onclick = () => {
    stopAutoSlide();
    nextItem();
    startAutoSlide();
};

prevButton.onclick = () => {
    stopAutoSlide();
    prevItem();
    startAutoSlide();
};


items[active].classList.add('active');
dots[active].classList.add('active');

startAutoSlide();
