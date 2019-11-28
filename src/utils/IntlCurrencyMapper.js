/* eslint-disable module-resolver/use-alias */
// /* eslint-disable no-undef */
// /* eslint-disable module-resolver/use-alias */
// let Intl = require('intl');
// console.log(Intl, 'IntlIntlIntlIntl');

class IntlCurrencyMapper {
  static formatCurrency(number) {
    return `\$${Number(number).toFixed(2)}`;
    // Intl.NumberFormat('en-US', {
    //   style: 'currency',
    //   currency: 'USD',
    // }).format(number);
  }
  static formatCurrencyWithQuanity(number, quantity) {
    return `\$${Number(quantity * number).toFixed(2)}`;
    // Intl.NumberFormat('en-US', {
    //   style: 'currency',
    //   currency: 'USD',
    // }).format(number);
  }
}

export default IntlCurrencyMapper;
