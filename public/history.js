async function onloadhistory () {
    scrollTopStep();
    selectDynasty(selectedDynasty);
    selectChina(selectedChina);
    loadBtnFuncs();
}

async function setScroll() {
    window.location.href = '#map';
    await new Promise(resolve => setTimeout(resolve, 100));
    window.location.href = '#';
    document.body.style.overflowY = 'hidden';
}

async function scrollTopStep() {
    document.body.style.overflowY = 'auto';
    await setScroll();
    document.body.style.overflowY = 'hidden';
    await new Promise(resolve => setTimeout(resolve, 1000));
    document.body.style.overflowY = 'auto';
    window.removeEventListener('wheel', preventDefault, { passive: false });
    window.removeEventListener('touchmove', preventDefault, { passive: false });
    window.removeEventListener('keydown', preventDefaultForScrollKeys, { passive: false });
}

function loadBtnFuncs() {
    document.querySelectorAll('.dyn').forEach((element) => {
        element.setAttribute('onclick', `selectDynasty('${element.id}')`);
    });
    document.querySelectorAll('.two-chinas').forEach((element) => {
        element.setAttribute('onclick', `selectChina('${element.id}')`);
    });
}

function selectDynasty(dynasty) {
    const beforeDynasty = selectedDynasty;
    if (beforeDynasty != dynasty || (beforeDynasty == dynasty && dynasty == 'xia')) {
        selectedDynasty = dynasty;
        document.getElementById(beforeDynasty).style.color = '#000000';
        document.getElementById(dynasty).style.color = '#FF0000';
        document.querySelector('#dynasty-flag').setAttribute('src', `../images/dynasties/${dynasty}.png`);
        scrambleReveal('#dynasty-name', dynastyStats[dynasty][0]);
        scrambleReveal('#time', dynastyStats[dynasty][1]);
        scrambleReveal('#capital', dynastyStats[dynasty][2]);
        document.querySelector('#description').innerHTML = dynastyDesc[dynasty];
    }
}

function selectChina(china) {
    const beforeChina = selectedChina;
    if (beforeChina != china || (beforeChina == china && china == 'roc')) {
        selectedChina = china;
        document.getElementById(beforeChina).style.color = '#000000';
        document.getElementById(china).style.color = '#FF0000';
        document.querySelector('#china-flag').setAttribute('src', `../images/chinas/${china}.png`);
        scrambleReveal('#china-name', chinaStats[china][0]);
        scrambleReveal('#china-time', chinaStats[china][1]);
        scrambleReveal('#china-capital', chinaStats[china][2]);
        document.querySelector('#china-description').innerHTML = chinaDesc[china];
    }
}