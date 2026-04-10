/**
 * Adatkezelő osztály
 */
class FortuneProvider {
    constructor() {
        this.messages = [
            "Ma egy somlói galuska vár rád a sarokban!",
            "A kedvességed édesebb, mint a mézeskalács.",
            "Váratlan vendég érkezik, süss neki valamit!",
            "A szerencse olyan, mint a jó kelt tészta: türelem kell hozzá.",
            "Egy gombóc fagylalt megoldja a mai problémád.",
            "A holnapod olyan fényes lesz, mint a cukormáz!"
        ];
    }

    getRandomFortune() {
        return this.messages[Math.floor(Math.random() * this.messages.length)];
    }
}

/**
 * Süti UI osztály
 */
class FortuneCookie {
    constructor(containerSelector, fortuneProvider) {
        this.container = document.querySelector(containerSelector);
        this.provider = fortuneProvider;
        this.isOpen = false;
        
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        // HTML szerkezet létrehozása
        this.container.innerHTML = `
        <div class="cookie-container" id="main-cookie">
            <div class="cookie-half left"></div>
            <div class="cookie-half right"></div>
        </div>
        <div class="fortune-paper" id="fortune-text"></div>
    `;

        this.cookieElem = document.getElementById('main-cookie');
        this.textElem = document.getElementById('fortune-text');

        // Események feliratkozása
        this.cookieElem.addEventListener('mouseenter', () => this.handleHover(true));
        this.cookieElem.addEventListener('mouseleave', () => this.handleHover(false));
        this.cookieElem.addEventListener('click', () => this.crack());
    }

    handleHover(isHovering) {
        if (!this.isOpen) {
            isHovering ? this.cookieElem.classList.add('shake') : this.cookieElem.classList.remove('shake');
        }
    }

    crack() {
        if (this.isOpen) return;

        this.isOpen = true;
        this.cookieElem.classList.remove('shake');
        
        const message = this.provider.getRandomFortune();
        this.textElem.innerText = message;
        
        // CSS osztály hozzáadása az animáció indításához
        this.cookieElem.classList.add('open');
        
        // Megjelenítjük az újraindító gombot
        document.getElementById('reset-btn').style.display = 'inline-block';
    }

    reset() {
        this.isOpen = false;
        this.render();
        document.getElementById('reset-btn').style.display = 'none';
    }
}

// Alkalmazás indítása
const provider = new FortuneProvider();
const cookieApp = new FortuneCookie('#cookie-target', provider);

// Újraindítás gomb kezelése
document.getElementById('reset-btn').addEventListener('click', () => {
    cookieApp.reset();
});