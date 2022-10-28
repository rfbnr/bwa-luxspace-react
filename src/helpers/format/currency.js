/* eslint-disable no-extend-native */
/* eslint no-extend-native: ["error", {"exceptions": ["number"]}] */

if (!Number.hasOwnProperty("currency")) {
  Number.prototype.currency = function () {
    const currency = new Intl.NumberFormat(navigator.language, {
      style: "currency",
      currency: "IDR",
    });
    return currency.format(this);
  };
}
