/** Variables available in all js files:
 * all the exported constants from globals.js
 */

/** Directories available as aliases
 * all the paths within Dir in globals.js
 */
import $ from "jquery";
import { ethers } from "ethers";

//import dompurify from 'dompurify'

import 'picturefill'
import 'utils/errors'
import 'utils/validation'
import 'utils/quick'

// import swap-sdk from '@pancakeswap-libs/sdk'


window.$ = $;
window.ethers = ethers;
window.asciichart = require("asciichart");
window.Diff = require("diff");
window.InputDataDecoder = require('ethereum-input-data-decoder');

window.swapSdk = require('@pancakeswap-libs/sdk');

// eslint-disable-next-line no-console
console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
