const caja = document.getElementById('caja');

caja.addEventListener('mouseover', () => {
    caja.style.background = 'yellow';
});

caja.addEventListener('mouseout', () => {
    caja.style.background = 'blue';
});

caja.addEventListener('click', () => {
    alert('Interacción registrada');
});

const areaTouch = document.getElementById('areaTouch');

areaTouch.addEventListener('touchstart', () => {
    areaTouch.style.background = 'red';
});

areaTouch.addEventListener('touchend', () => {
    areaTouch.style.background = 'blue';
});

areaTouch.addEventListener('click', () => {
    areaTouch.style.background = 'yellow';
    alert('Área táctil activada');
});
