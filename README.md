# Introduction

Small package that include some logic to prettify cryptocurrency wallets addresses.
This feature will allow differentiating bulk of wallet addresses to visualise more clearly if the address is in repetition.

# Installation

`npm install @pkuniniec/wallet-prettify`

# Usage
First please import the package:
`import { AddressPrettify } from '@pkuniniec/wallet-prettify';`

To use it just pass an address to the 'AddressPrettify' component:

`<AddressPrettify address={address}/>`

Options:
- to adjust color tile length:

`tileWidth` default value is set to '100%'

- to adjust color tile height:

`tileHeight` default value is set to '5px'

example:

`<AddressPrettify address={address} tileWidth='20px' tileHeight='10px' />`



