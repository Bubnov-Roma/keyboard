export default class Key {
  constructor({ small, shift, code }) {
    this.small = small;
    this.shift = shift;
    this.code = code;

    if (this.code.match(/Ctrl|Alt|Shift|Caps|Win/)) this.fn = Boolean();
  }
}