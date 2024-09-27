let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.getElementById('container');
let items = document.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;
let intervalTime = 3000; // Trocar a cada 3 segundos
let autoSlide;

// Função para atualizar o indicador ativo
function updateDots() {
    indicator.querySelector('.active').classList.remove('active');
    dots[active].classList.add('active');
}

// Função para remover eventos de pausa do item ativo
function removePauseEvents(item) {
    item.removeEventListener('mouseover', stopAutoSlide);
    item.removeEventListener('mouseout', startAutoSlide);
}

// Função para adicionar eventos de pausa ao novo item ativo
function addPauseEvents(item) {
    item.addEventListener('mouseover', stopAutoSlide); // Pausar o slide ao passar o mouse
    item.addEventListener('mouseout', startAutoSlide); // Reiniciar o slide ao tirar o mouse
}


// Função para mostrar o próximo item
function nextItem() {
    let itemActive = container.querySelector('.list .item.active');
    itemActive.classList.remove('active');
    // removePauseEvents(itemActive); // Remove os eventos do item anterior

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
