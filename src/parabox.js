import { init as initParaboxShift, shiftChildren } from './parabox-shift.js';

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

export function init() {
  paraboxes = document.querySelectorAll('.parabox');

  paraboxes.forEach(parabox => {
    parabox.addEventListener('mousemove', e => {
      tiltBox(e, parabox);
    });
    parabox.addEventListener('mouseleave', () => {
      resetBox(parabox);
    });
  });

  initParaboxShift();
}

export default {
  init,
};
