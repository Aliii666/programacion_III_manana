const caja = document.getElementById('caja');

caja.addEventListener('mouseover', () => {
    caja.style.background = '#e3b5ff';
});

caja.addEventListener('mouseout', () => {
    caja.style.background = '#b084cc';
});

caja.addEventListener('click', () => {
    alert('Interacción registrada');
});

const areaTouch = document.getElementById('areaTouch');

areaTouch.addEventListener('touchstart', () => {
    areaTouch.style.background = '#ff9ce6';
});

areaTouch.addEventListener('touchend', () => {
    areaTouch.style.background = '#d47dd4'; 
});

areaTouch.addEventListener('click', () => {
    areaTouch.style.background = '#f2a9ff';
    alert('Área táctil activada');
});
