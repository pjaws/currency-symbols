# currency-symbols

A tiny library that maps currency codes to currency symbols. No dependencies. Several ways to get the symbol you want.

Currently supports all currency symbols with a Unicode value. Support for other currencies coming soon!

## Installation

`npm install currency-symbols`

## Usage

**Use the helper function**

```
import { getCurrencySymbol } from 'currency-symbols';

getCurrencySymbol('USD'); // '$'
getCurrencySymbol('EUR'); // '€'
getCurrencySymbol('INVALID') // undefined
```

**Import a constant matching the symbol you need**

```
import { USD, EUR } from 'currency-symbols';

console.log(`American Dollar: ${USD}`); // American Dollar: $
console.log(`Euro: ${EUR}`); // Euro: €
```

**Import the whole damn map**

```
import { CURRENCY_SYMBOLS } from 'currency-symbols';

console.log(`British Pound: ${CURRENCY_SYMBOLS.GBP}`);
```
