#!/usr/bin/env node
const http = require('http');
const mockserver = require('mockserver');

const argv = require('yargs').argv;
const portAPI = argv.portAPI || 9002;
const directory = argv.dir || 'mocks';

console.log("argv", argv)