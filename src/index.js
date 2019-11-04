export const AUD = '$'; // Australian Dollar
export const BDT = '৳'; // Bangladeshi Taka
export const BTC = '₿'; // Bitcoin
export const CAD = '$'; // Canadian Dollar
export const CNY = '¥'; // Chinese Yuan
export const CRC = '₡'; // Costa Rican Colón
export const ETH = 'Ξ'; // Ethereum
export const EUR = '€'; // Euro
export const GBP = '£'; // British Pound Sterling
export const GEL = '₾'; // Georgian Lari
export const HKD = '$'; // Hong Kong Dollar
export const ILS = '₪'; // Israeli New Sheqel
export const INR = '₹'; // Indian Rupee
export const JPY = '¥'; // Japanese Yen
export const KRW = '₩'; // South Korean Won
export const LTC = 'Ł'; // Litecoin
export const MXN = '$'; // Mexican Peso
export const NGN = '₦'; // Nigerian Naira
export const NZD = '$'; // New Zealand Dollar
export const PHP = '₱'; // Philippine Peso
export const PLN = 'zł'; // Polish Zloty
export const PYG = '₲'; // Paraguayan Guarani
export const RUB = '₽'; // Russian Ruble
export const SGD = '$'; // Singapore Dollar
export const THB = '฿'; // Thai Baht
export const TRY = '₺'; // Turkish Lira
export const UAH = '₴'; // Ukrainian Hryvna
export const USD = '$'; // US Dollar
export const VND = '₫'; // Vietnamese Dong
export const XMR = 'ɱ'; // Monero

export const CURRENCY_SYMBOLS = {
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

export function getCurrencySymbol(code) {
  if (typeof code !== 'string') return undefined;

  const currencyCode = code.toUpperCase();

  return CURRENCY_SYMBOLS[currencyCode];
}

export default {
  getCurrencySymbol,
  CURRENCY_SYMBOLS,
};
