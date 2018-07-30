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

export function shiftChildren(parent, offsetX, offsetY) {
  const childShifts = parent.querySelectorAll('.parabox-shift');

  childShifts.forEach(shift => {
    paraboxShift(offsetX, offsetY, shift);
  });
}

export function init() {
  paraboxShifts = document.querySelectorAll('.parabox-shift');
}

export default {
  paraboxShifts,
  shiftChildren,
  init,
};
