const numberFormat = new Intl.NumberFormat("en-US");

window.onload = async () => {
    await setScroll();
    renderCityPoints();
    pageReveal();
    await scrambleReveal('#select', 'Select a City.', 250);
    blinkingPeriod();
}

/* Scrolls back to the Top */
async function backToTop() {
    document.querySelector('html').style.setProperty('scroll-behavior', 'smooth');
    window.location.href = '#map';
    await new Promise(resolve => setTimeout(resolve, 0.1));
    window.location.href = '#';
}

/* Sets Scroll to Top Even When Resetting Page Right After Scrolled (Still small failure rate) */
async function setScroll() {
    window.location.href = '#map';
    await new Promise(resolve => setTimeout(resolve, 100));
    window.location.href = '#';
    document.body.style.overflowY = 'hidden';
}

/* Page Reveal Effect */
async function pageReveal() {
    document.getElementById('black-screen').style.transform = 'translate(0, -100%)';
    await new Promise(resolve => setTimeout(resolve, 500));
    document.getElementById('black-screen').remove();
}

/* Blinking Period Effect */
async function blinkingPeriod() {
    const before = document.getElementById('select').innerHTML;
    while (!selected) {
        document.getElementById('select').innerHTML = before;
        await new Promise(resolve => setTimeout(resolve, 500));
        if (!selected) {
            document.getElementById('select').innerHTML = document.getElementById('select').innerHTML.slice(0, document.getElementById('select').innerHTML.length - 1);
        }
        await new Promise(resolve => setTimeout(resolve, 500));
    }
}

/* Scramble Reveal Effect */
const randomChars = '!@#$%^&*()-_=+[{]};:",<>./?`~';

class scrambleString {
    random = '';
    constructor() {}
    async start(boolean, string) {
        while (boolean) {
            this.iteration = '';
            for (let i = 0; i < string.length; i++) {
                this.iteration = this.iteration.concat('', randomChars[Math.floor(Math.random() * 29)]);
            }
            this.random = this.iteration;
            await new Promise(resolve => setTimeout(resolve, 1));
        }
    }

    get() {
        return this.random;
    }
}

class popReveal {
    result = '';
    finished = false;
    constructor() {}
    async start(string) {
        for (let i = 0; i < string.length; i++) {
            this.result += string[i];
            await new Promise(resolve => setTimeout(resolve, 15));
        }
        this.finished = true;
    }

    getFinished() {
        return this.finished;
    }

    getResult() {
        return this.result;
    }
}

async function scrambleReveal(query, after, delay) {
    const before = document.querySelector(query).innerHTML;
    let funcRunning = true;
    let loop = true;
    let scr = new scrambleString();
    scr.start(funcRunning, before);
    if (!delay) {
        delay = 100;
    }
    setTimeout(function () {
        loop = false;
    }, delay);
    while (loop) {
        document.querySelector(query).innerHTML = scr.get();
        await new Promise(resolve => setTimeout(resolve, 1));
    }
    let res = new popReveal();
    res.start(after);
    while (!res.getFinished()) {
        document.querySelector(query).innerHTML = res.getResult() + scr.get().slice(res.getResult().length, before.length);
        await new Promise(resolve => setTimeout(resolve, 1));
    }
    funcRunning = false;
    document.querySelector(query).innerHTML = after;
}


/* City Points */
let selected = false;
let currentSelected = '';

class cityElement {
    text;
    container;
    constructor(name, position, displayName) {
        this.name = name;
        this.displayName = displayName;
        this.container = document.createElement('div');
        this.element = document.createElement('button');
        this.text = document.createElement('h1');
        this.container.className = 'div-wrapper';
        this.container.id = `${name}-div-wrapper`;
        this.text.className = 'point';
        this.text.innerHTML = displayName;
        this.element.className = 'point';
        this.element.id = name;
        this.element.setAttribute('onclick', `cities.${name}.selected()`);
        if (position != null) {
            this.element.style.left = `${position[0]}px`;
            this.element.style.top = `${position[1]}px`;
        }
        document.getElementById('map').appendChild(this.container);
        this.container.appendChild(this.element);
        this.element.appendChild(this.text);
    }

    selected() {
        if (document.querySelector('.selected')) {
            document.querySelectorAll('.selected').forEach((element) => {
                element.classList.remove('selected');
            });
        }
        if (!selected) {
            document.getElementById('map').classList.add('selectActive');
            window.removeEventListener('wheel', preventDefault, { passive: false });
            window.removeEventListener('touchmove', preventDefault, { passive: false });
            window.removeEventListener('keydown', preventDefaultForScrollKeys, { passive: false });
            document.body.style.overflowY = 'auto';
            selected = true;
        }
        if (currentSelected != this.name) {
            currentSelected = this.name;
            scrambleReveal('#select', this.displayName);
            infoChange(this.displayName, 
                city_desc[this.name], 
                city_stats[this.name], 
                city_tcard[this.name], 
                city_tcard_img[this.name], 
                city_dcard[this.name], 
                city_dcard_img[this.name]);
        }
        this.element.classList.add('selected');
        this.text.classList.add('selected');
        document.title = this.displayName;
        document.getElementById('map').style.setProperty('--selected-link', `url(${imgs[this.name]})`);
    }
}

function infoChange(name, desc, statistics, tcard, tcard_img, dcard, dcard_img) {
    scrambleReveal('#city-name', name);
    document.getElementById('city-description').innerHTML = desc;
    scrambleReveal('#pop', numberFormat.format(statistics[0]));
    scrambleReveal('#ar', `${numberFormat.format(statistics[1])} km^2`);
    scrambleReveal('#gdppc', `$${numberFormat.format(statistics[2])}`);
    for (let i = 0; i < 3; i++) {
        scrambleReveal(`#tcard${i + 1} > h1`, tcard[i]);
        document.querySelector(`#tcard${i + 1} > img`).setAttribute('src', tcard_img[i]);
        scrambleReveal(`#dcard${i + 1} > h1`, dcard[i]);
        document.querySelector(`#dcard${i + 1} > img`).setAttribute('src', dcard_img[i]);
    }
}

function renderCityPoints() {
    cities.hk = new cityElement('hk', [814, 798], '香港 Hong Kong');
    cities.sh = new cityElement('sh', [943, 563], '上海 Shanghai');
    cities.ur = new cityElement('ur', [298, 297], '乌鲁木齐 Ürümqi');
}