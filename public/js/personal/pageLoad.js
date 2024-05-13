import { emptyTapTest } from './emptyTapTest.js';

export function pageLoad(btn, func, div, emptyMsg) {
  let num = 0;
  document.getElementById(btn).addEventListener('click', () => {
    num += 1;
    func(num);
    document.getElementById(div).removeChild(document.getElementById(emptyMsg));
    emptyTapTest();
  });
}
