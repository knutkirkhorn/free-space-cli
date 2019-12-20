#!/usr/bin/env node
'use strict';
const freeSpace = require('@knutkirkhorn/free-space');
const meow = require('meow');
const prettyBytes = require('pretty-bytes');

const cli = meow(`
        Usage
          $ free-space <drive>
        Examples
          $ free-space
          $ free-space C:
          $ free-space /dev/sda
`);

const disk = cli.input[0];

if (cli.input.length <= 1) {
    freeSpace(disk).then(bytes => {
        console.log('Free space: ' + prettyBytes(bytes));
    });
}