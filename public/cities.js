async function onloadcities() {
    await setScroll();
    renderCityPoints();
    pageReveal();
    await scrambleReveal('#select', 'Select a City.', 500);
    blinkingPeriod();
    preloadImgs();
}