/** Variables available in all js files:
 * all the exported constants from globals.js
 */

/** Directories available as aliases
 * all the paths within Dir in globals.js
 */
import $ from "jquery";
// import { ethers } from "ethers";

//import dompurify from 'dompurify'

import 'picturefill'
import 'utils/errors'
import 'utils/validation'
import 'utils/quick'

import { Fetcher, Route } from '@pancakeswap-libs/sdk';
// import swap-sdk from '@pancakeswap-libs/sdk'
window.regeneratorRuntime = require('regenerator-runtime')

window.$ = $;
window.ethers = require("ethers");
window.asciichart = require("asciichart");
window.Diff = require("diff");
window.InputDataDecoder = require('ethereum-input-data-decoder');

window.Fetcher = Fetcher;
window.Route = Route;

// window.swapSdk = require('@pancakeswap-libs/sdk');

// eslint-disable-next-line no-console
console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
