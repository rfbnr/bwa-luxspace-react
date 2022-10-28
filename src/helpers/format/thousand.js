/* eslint-disable no-extend-native */
/* eslint no-extend-native: ["error", {"exceptions": ["number"]}] */

if (!Number.hasOwnProperty("thousand")) {
  Number.prototype.thousand = function () {
    const thousand = new Intl.NumberFormat(navigator.language);
    return thousand.format(this);
  };
}
