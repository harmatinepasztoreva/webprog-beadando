/**
 * Alap UI osztály
 * Ebből fog örökölni a FortuneCookie
 */
class BaseComponent {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
    }

    createInfoBadge() {
        const badge = document.createElement("div");
        badge.id = "oojs-badge";
        badge.textContent = "OOJS öröklődés aktív";
        badge.style.position = "fixed";
        badge.style.right = "12px";
        badge.style.bottom = "70px";
        badge.style.padding = "8px 14px";
        badge.style.background = "#f1e5d6";
        badge.style.color = "#7b5a4d";
        badge.style.borderRadius = "999px";
        badge.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
        badge.style.fontSize = "0.85rem";
        badge.style.zIndex = "999";

        document.body.appendChild(badge);
    }
}

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
 * extends => öröklődés
 */
class FortuneCookie extends BaseComponent {
    constructor(containerSelector, fortuneProvider) {
        super(containerSelector); // super => szülőosztály konstruktorának meghívása
        this.provider = fortuneProvider;
        this.isOpen = false;

        this.createInfoBadge();
        this.init();
    }

    init() {
        this.render();
        this.bindEvents();
    }

    render() {
        this.container.innerHTML = `
            <div class="cookie-container" id="main-cookie">
                <div class="cookie-half left"></div>
                <div class="cookie-half right"></div>
            </div>
            <div class="fortune-paper" id="fortune-text"></div>
        `;

        this.cookieElem = document.getElementById("main-cookie");
        this.textElem = document.getElementById("fortune-text");
        this.resetBtn = document.getElementById("reset-btn");
    }

    bindEvents() {
        this.cookieElem.addEventListener("mouseenter", () => this.handleHover(true));
        this.cookieElem.addEventListener("mouseleave", () => this.handleHover(false));
        this.cookieElem.addEventListener("click", () => this.crack());

        this.resetBtn.addEventListener("click", () => this.reset());
    }

    handleHover(isHovering) {
        if (!this.isOpen) {
            if (isHovering) {
                this.cookieElem.classList.add("shake");
            } else {
                this.cookieElem.classList.remove("shake");
            }
        }
    }

    crack() {
        if (this.isOpen) return;

        this.isOpen = true;
        this.cookieElem.classList.remove("shake");

        const message = this.provider.getRandomFortune();
        this.textElem.innerText = message;

        this.cookieElem.classList.add("open");
        this.resetBtn.style.display = "inline-block";
    }

    reset() {
        this.isOpen = false;
        this.render();
        this.bindEvents();
        this.resetBtn.style.display = "none";
    }
}

// Alkalmazás indítása
const provider = new FortuneProvider();
const cookieApp = new FortuneCookie("#cookie-target", provider);