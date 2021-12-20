// post-install.js

/**
 * Script to run after npm install
 *
 * Copy selected files to user's directory
 */

'use strict'

const gentlyCopy = require('gently-copy');

const filesToCopy = ['src/.github'];

//  local directory
const copyPath = '../../../';


// Moving files to user's local directory
gentlyCopy(filesToCopy, copyPath, {overwrite: false})
