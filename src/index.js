const AUD = '$'; // Australian Dollar
const BDT = '৳'; // Bangladeshi Taka
const BTC = '₿'; // Bitcoin
const CAD = '$'; // Canadian Dollar
const CNY = '¥'; // Chinese Yuan
const CRC = '₡'; // Costa Rican Colón
const ETH = 'Ξ'; // Ethereum
const EUR = '€'; // Euro
const GBP = '£'; // British Pound Sterling
const GEL = '₾'; // Georgian Lari
const HKD = '$'; // Hong Kong Dollar
const ILS = '₪'; // Israeli New Sheqel
const INR = '₹'; // Indian Rupee
const JPY = '¥'; // Japanese Yen
const KRW = '₩'; // South Korean Won
const LTC = 'Ł'; // Litecoin
const MXN = '$'; // Mexican Peso
const NGN = '₦'; // Nigerian Naira
const NZD = '$'; // New Zealand Dollar
const PHP = '₱'; // Philippine Peso
const PLN = 'zł'; // Polish Zloty
const PYG = '₲'; // Paraguayan Guarani
const RUB = '₽'; // Russian Ruble
const SGD = '$'; // Singapore Dollar
const THB = '฿'; // Thai Baht
const TRY = '₺'; // Turkish Lira
const UAH = '₴'; // Ukrainian Hryvna
const USD = '$'; // US Dollar
const VND = '₫'; // Vietnamese Dong
const XMR = 'ɱ'; // Monero

const CURRENCY_SYMBOLS = {
  AUD,
  BDT,
  BTC,
  CAD,
  CNY,
  CRC,
  ETH,
  EUR,
  GBP,
  GEL,
  HKD,
  ILS,
  INR,
  JPY,
  KRW,
  LTC,
  MXN,
  NGN,
  NZD,
  PHP,
  PLN,
  PYG,
  RUB,
  SGD,
  THB,
  TRY,
  UAH,
  USD,
  VND,
  XMR,
};

module.exports = function getCurrencySymbol(code) {
  if (typeof code !== 'string') return undefined;

  const currencyCode = code.toUpperCase();

  return CURRENCY_SYMBOLS[currencyCode];
};

module.exports.CURRENCY_SYMBOLS = CURRENCY_SYMBOLS;

module.exports.AUD = AUD;
module.exports.BDT = BDT;
module.exports.BTC = BTC;
module.exports.CAD = CAD;
module.exports.CNY = CNY;
module.exports.CRC = CRC;
module.exports.ETH = ETH;
module.exports.EUR = EUR;
module.exports.GBP = GBP;
module.exports.GEL = GEL;
module.exports.HKD = HKD;
module.exports.ILS = ILS;
module.exports.INR = INR;
module.exports.JPY = JPY;
module.exports.KRW = KRW;
module.exports.LTC = LTC;
module.exports.MXN = MXN;
module.exports.NGN = NGN;
module.exports.NZD = NZD;
module.exports.PHP = PHP;
module.exports.PLN = PLN;
module.exports.PYG = PYG;
module.exports.RUB = RUB;
module.exports.SGD = SGD;
module.exports.THB = THB;
module.exports.TRY = TRY;
module.exports.UAH = UAH;
module.exports.USD = USD;
module.exports.VND = VND;
module.exports.XMR = XMR;
