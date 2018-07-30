let paraboxShifts;

function getZHeight(el) {
  const height =
    el.dataset.paraboxHeight ||
    getComputedStyle(el).getPropertyValue('--parabox-height');
  return height;
}

function paraboxShift(shiftX, shiftY, el) {
  const height = getZHeight(el) || 5;
  shiftX /= 100 / height;
  shiftY /= 100 / height;
  el.style.transform = `translate(${shiftX}px, ${shiftY}px)`;
}

function shiftChildren(parent, offsetX, offsetY) {
  const childShifts = parent.querySelectorAll('.parabox-shift');

  childShifts.forEach(shift => {
    paraboxShift(offsetX, offsetY, shift);
  });
}

function init() {
  paraboxShifts = document.querySelectorAll('.parabox-shift');
}

let paraboxes = [];

function getTransformMultiplier(el) {
  const multiplier =
    el.dataset.paraboxMultiplier ||
    getComputedStyle(el).getPropertyValue('--parabox-multiplier') ||
    1;
  return multiplier;
}

function tiltBox(e, el) {
  const rect = el.getBoundingClientRect();

  const horToBoxCenter = e.clientX - rect.left - rect.width / 2;
  const verToBoxCenter = e.clientY - rect.top - rect.height / 2;

  const transformX = horToBoxCenter * getTransformMultiplier(el);
  const transformY = verToBoxCenter * getTransformMultiplier(el);

  el.style.boxShadow = `${transformX * -1 / rect.width * 4}px ${transformY *
    -1 /
    rect.height *
    4}px 4px rgba(0, 0, 0, 0.25)`;

  el.style.transform = `rotateX(${transformY /
    rect.height *
    -4}deg) rotateY(${transformX * 1 / rect.width * 4}deg)`;

  shiftChildren(el, transformX, transformY);
}

function resetBox(el) {
  el.style.transform = '';

  shiftChildren(el, 0, 0);
}

function init$1() {
  paraboxes = document.querySelectorAll('.parabox');

  paraboxes.forEach(parabox => {
    parabox.addEventListener('mousemove', e => {
      tiltBox(e, parabox);
    });
    parabox.addEventListener('mouseleave', () => {
      resetBox(parabox);
    });
  });

  init();
}

export { init$1 as init };
