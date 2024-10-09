let imagensHeader = [
    {
        id: 'responsive-navbar-img',
        mobile898: 'assets/img/nav-bar-mobile-36x30.svg',
        mobile1230: 'assets/img/nav-bar-mobile-45x38.svg'
    },
    {
        id: 'responsive-logo-img',
        mobile898: 'assets/img/logo/LogoAtivoByte-140x58.webp',
        mobile1230: 'assets/img/logo/LogoAtivoByte-156x64.webp'
    },
];

let imagens = [
    {
        id: 'responsive-img',
        desktop1230x713: 'assets/img/carrossel/LandPage/ServicoLandPage-350x250.webp',
        desktop1024x768: 'assets/img/carrossel/LandPage/ServicoLandPage-249x260.webp',
        desktop1280x720: 'assets/img/carrossel/LandPage/ServicoLandPage-400x250.webp',
        desktop1366x768: 'assets/img/carrossel/LandPage/ServicoLandPage-435x330.webp',
        desktop1854: 'assets/img/carrossel/LandPage/ServicoLandPage-455x350.webp',
        desktop1920x1080: 'assets/img/carrossel/LandPage/ServicoLandPage-672x395.webp',
        desktop: 'assets/img/carrossel/ServicoLandPage.webp',
        mobile768x1024: 'assets/img/carrossel-mobile/LandPage/ServicoLandPage-461x357.webp',
        mobile320x658: 'assets/img/carrossel-mobile/LandPage/ServicoLandPage-192x148.webp',
        mobile360x640: 'assets/img/carrossel-mobile/LandPage/ServicoLandPage-216x167.webp',
        mobile384x640: 'assets/img/carrossel-mobile/LandPage/ServicoLandPage-161x269.webp',
        mobile412x823: 'assets/img/carrossel-mobile/LandPage/ServicoLandPage-173x134.webp',
        mobile712x1138: 'assets/img/carrossel-mobile/LandPage/ServicoLandPage-299x231.webp',
        mobile1230: 'assets/img/carrossel-mobile/LandPage/ServicoLandPage-300x255.webp',
        mobile898: 'assets/img/carrossel-mobile/LandPage/ServicoLandPage-250x255.webp',
        mobile: 'assets/img/carrossel-mobile/ServicoLandPage-320x320.webp'
    },
    {
        id: 'responsive-img1',
        desktop1024x768: 'assets/img/carrossel/Sass/ServicoSass-249x260.webp',
        desktop1280x720: 'assets/img/carrossel/Sass/ServicoSass-400x250.webp',
        desktop1366x768: 'assets/img/carrossel/Sass/ServicoSass-435x330.webp',
        desktop1854: 'assets/img/carrossel/Sass/ServicoSass-455x350.webp',
        desktop1920x1080: 'assets/img/carrossel/Sass/ServicoSass-672x395.webp',
        desktop: 'assets/img/carrossel/ServicoSass.webp',
        mobile768x1024: 'assets/img/carrossel-mobile/Sass/ServicoSass-461x357.webp',
        mobile320x658: 'assets/img/carrossel-mobile/Sass/ServicoSass-192x148.webp',
        mobile360x640: 'assets/img/carrossel-mobile/Sass/ServicoSass-216x167.webp',
        mobile1230: 'assets/img/carrossel-mobile/Sass/ServicoSass-300x255.webp',
        mobile898: 'assets/img/carrossel-mobile/Sass/ServicoSass-250x255.webp'
    },
    {
        id: 'responsive-img2',
        desktop1024x768: 'assets/img/carrossel/E-commerce/ServicoEcommerce-249x260.webp',
        desktop1280x720: 'assets/img/carrossel/E-commerce/ServicoEcommerce-400x250.webp',
        desktop1366x768: 'assets/img/carrossel/E-commerce/ServicoEcommerce-435x330.webp',
        desktop1854: 'assets/img/carrossel/E-commerce/ServicoEcommerce-455x350.webp',
        desktop1920x1080: 'assets/img/carrossel/E-commerce/ServicoEcommerce-672x395.webp',
        desktop: 'assets/img/carrossel/ServicoE-COMMERCE.webp',
        mobile768x1024: 'assets/img/carrossel-mobile/E-commerce/ServicoEcommerce-461x357.webp',
        mobile320x658: 'assets/img/carrossel-mobile/E-commerce/ServicoEcommerce-192x148.webp',
        mobile360x640: 'assets/img/carrossel-mobile/E-commerce/ServicoEcommerce-216x167.webp',
        mobile1230: 'assets/img/carrossel-mobile/E-commerce/ServicoEcommerce-300x255.webp',
        mobile898: 'assets/img/carrossel-mobile/E-commerce/ServicoEcommerce-250x255.webp'
    }
];


function injectDesktopHeader() {
    const desktopHeaderHtml = `
    <header class="header-desktop">
        <a href="/" class="logo">
            <img src="/assets/logo/Ativo Byte.webp" alt="">
        </a>
        <nav class="navbar">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
    </header>`;

    document.getElementById('header-container').innerHTML = desktopHeaderHtml;
}

function injectMobileHeader() {
    const mobileHeaderHtml = `
    <header class="header-mobile">
        <nav class="nav-bar-mobile">
            <a href="/" class="logo" alt="Ativo Byte">
              <img id="responsive-logo-img" alt="Ativo Byte">
            </a>
            <div class="mobile-menu-icon">
                <button onclick="toggleMenu()">
                    <img id="responsive-navbar-img" alt="Ícone de menu" class="ico">
                </button>
            </div>
        </nav>
        <div class="mobile-menu">
            <ul>
                <li class="nav-item"><a href="#" class="nav-link">Inicio</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Serviços</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Contato</a></li>
            </ul>
        </div>
    </header>`;

    document.getElementById('header-container').innerHTML = mobileHeaderHtml;

    updateImageHeader();
};

/**
 * @description
 * Fun o para atualizar a imagem do header de acordo com o tamanho da tela.
 * @param {object} item - um item do array de imagens.
 * @returns {string} - o caminho da imagem selecionada.
 */
function updateImageHeader() {
    imagensHeader.forEach(async item => {
        const imgElement = document.getElementById(item.id);
        const imageUrl = await applyUpdateImagesHeader(item);
        imgElement.src = imageUrl;
    });
}

/**
 * @description
 * Fun o para atualizar a imagem de acordo com o tamanho da tela.
 * @param {object} item - um item do array de imagens.
 * @returns {string} - o caminho da imagem selecionada.
 */
async function applyUpdateImagesHeader(item) {
    let imageUrl = '';

    switch (item != null) {
        case (window.innerWidth <= 898):
            imageUrl = item.mobile898;
            break
        case (window.innerWidth <= 1230):
            imageUrl = item.mobile1230;
            break
        default:
            imageUrl = desktop;
            break;
    }
    return imageUrl;
}

function updateImageItens() {

    imagens.forEach(async item => {
        const imgElement = document.getElementById(item.id);
        const imageUrl = await applyUpdateImagesItems(item);
        console.log(imageUrl)

        // Define o src da imagem
        imgElement.src = imageUrl;
    });
}

async function applyUpdateImagesItems(item) {
    let imageUrl = '';

    switch (item != null) {
        case (window.innerWidth <= 151):
            imageUrl = item.mobile360x640;
            break;
        case (window.innerWidth <= 768):
            imageUrl = item.mobile898;
            break;
        case (window.innerWidth <= 320):
            imageUrl = item.mobile320x658;
            break;
        case (window.innerWidth <= 360):
            imageUrl = item.mobile360x640;
            break;
        case (window.innerWidth <= 384):
            imageUrl = item.mobile384x640;
            break;
        case (window.innerWidth <= 412):
            imageUrl = item.mobile412x823;
            break;
        case (window.innerWidth <= 712):
            imageUrl = item.mobile712x1138;
            break;
        case (window.innerWidth <= 898):
            imageUrl = item.mobile898;
            break;
        case (window.innerWidth <= 1024):
            imageUrl = item.mobile1230;
            break;
        case (window.innerWidth <= 1230):
            imageUrl = item.mobile1230;
            break;
        case (window.innerWidth <= 1280):
            imageUrl = item.desktop1280x720;
            break;
        case (window.innerWidth <= 1366):
            imageUrl = item.desktop1366x768;
            break;
        case (window.innerWidth <= 1854):
            imageUrl = item.desktop1854;
            break;
        case (window.innerWidth <= 1920):
            imageUrl = item.desktop1920x1080;
            break;
        default:
            imageUrl = item.desktop;
            break;
    }
    return imageUrl;
}

function updateHeader() {
    if (window.innerWidth <= 1230) {
        injectMobileHeader();
    } else {
        injectDesktopHeader();
    }
}

window.onresize = function () {
    updateImageHeader();
}

window.onload =  updateHeader(), updateImageItens();

const resizeObserver = new ResizeObserver(() => {
    updateImageItens();
    updateHeader();
});

resizeObserver.observe(document.body);