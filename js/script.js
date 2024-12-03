
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

// Dispositivos moveis
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
        nextItem(); // Deslizar para a esquerda, vai para o próximo item
        stopAutoSlide();
    } else if (touchEndX > touchStartX) {
        prevItem(); // Deslizar para a direita, vai para o item anterior
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

// Função para adicionar eventos de pausa ao novo item ativo
function addPauseEvents(item) {
    item.addEventListener('touchstart', handleTouchStart);
    item.addEventListener('touchend', handleTouchEnd);
    item.addEventListener('mouseover', stopAutoSlide); // Pausar o slide ao passar o mouse
    item.addEventListener('mouseout', startAutoSlide); // Reiniciar o slide ao tirar o mouse
}


// Função para remover eventos de pausa do item ativo
function removePauseEvents(item) {
    item.removeEventListener('touchstart', handleTouchStart);
    item.removeEventListener('touchmove', handleTouchMove);
    item.removeEventListener('touchend', handleTouchEnd);
    item.removeEventListener('mouseover', stopAutoSlide);
    item.removeEventListener('mouseout', startAutoSlide);
}

// Função para mostrar o próximo item
function nextItem() {
    let itemActive = container.querySelector('.list .item.active');
    itemActive.classList.remove('active');
    removePauseEvents(itemActive); // Remove os eventos do item anterior

    // Incrementa o índice ativo e faz o loop
    if (active + 1 > lastPosition) {
        active = 0; // Volta ao primeiro
    } else {
        active += 1;
    }

    items[active].classList.add('active');
    addPauseEvents(items[active]); // Adiciona os eventos ao novo item ativo
    updateDots(); // Atualiza os indicadores
}

// Função para mostrar o item anterior
function prevItem() {
    let itemActive = container.querySelector('.list .item.active');
    itemActive.classList.remove('active');
    removePauseEvents(itemActive); // Remove os eventos do item anterior

    // Decrementa o índice ativo e faz o loop
    if (active - 1 < firstPosition) {
        active = lastPosition; // Vai para o último
    } else {
        active -= 1;
    }

    items[active].classList.add('active');
    addPauseEvents(items[active]); // Adiciona os eventos ao novo item ativo
    updateDots(); // Atualiza os indicadores
}

// Função para iniciar o slide automático
function startAutoSlide() {
    autoSlide = setInterval(nextItem, intervalTime);
}

// Função para parar o slide automático
function stopAutoSlide() {
    clearInterval(autoSlide);
}

// Botão "Próximo"
nextButton.onclick = () => {
    stopAutoSlide(); // Parar o auto slide ao clicar manualmente
    nextItem();      // Mostrar o próximo item
    startAutoSlide(); // Reiniciar o auto slide
};

// Botão "Anterior"
prevButton.onclick = () => {
    stopAutoSlide(); // Parar o auto slide ao clicar manualmente
    prevItem();      // Mostrar o item anterior
    startAutoSlide(); // Reiniciar o auto slide
};

// Inicializando a classe ativa no primeiro item e no primeiro indicador
items[active].classList.add('active');
dots[active].classList.add('active');
addPauseEvents(items[active]); // Adiciona os eventos de pausa ao primeiro item ativo

// Iniciar o slide automático
startAutoSlide();
