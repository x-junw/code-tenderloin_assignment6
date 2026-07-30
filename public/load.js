const cPage = window.location.pathname.split('/').pop().split('.html').shift();

const sScript = `
window.addEventListener('wheel', preventDefault, { passive: false });
window.addEventListener('touchmove', preventDefault, { passive: false });
window.addEventListener('keydown', preventDefaultForScrollKeys, { passive: false });

            
const scrollKeys = {
    32: true,
    33: true,
    34: true,
    35: true,
    36: true,
    37: true,
    38: true,
    39: true,
    40: true
};

function preventDefault(event) {
    event.preventDefault();
}

function preventDefaultForScrollKeys(event) {
    if (scrollKeys[event.keyCode]) {
        preventDefault(event);
        return false;
    }
}
`;

window.onload = async () => {
    if (cPage != 'cities') {
        let nav = document.createElement('nav');
        nav.innerHTML = `<img id="logo" src="../images/chinas/prc.png" /><div></div><ul><a id="history" href="./history.html"><li>History</li></a><a id="cities" href="./cities.html"><li>Cities</li></a></ul>`;
        document.body.prepend(nav);
    }
    await newScript('../public/effects.js');
    await Promise.all([scrollScript(), newScript('../public/data.js'), newScript(`../public/${cPage}.js`, `onload${cPage}()`)]);
    loadFavicon();
}

function loadFavicon() {
    let elm = document.createElement('link');
    elm.rel = 'icon';
    elm.type = 'image/x-icon';
    elm.href = '../images/favicon.ico';
    document.head.appendChild(elm);

}

function scrollScript() {
    let elm = document.createElement('script');
    elm.innerHTML = sScript;
    document.head.appendChild(elm);
}

function newScript(path, onload) {
    let elm = document.createElement('script');
    elm.src = path;
    if (onload) {
        elm.setAttribute('onload', onload);
    }
    document.head.appendChild(elm);
}

function newCSS(path) {
    let elm = document.createElement('link');
    elm.rel = 'stylesheet'
    elm.src = path;
    document.head.appendChild(elm);
}