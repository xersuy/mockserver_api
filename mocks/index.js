#!/usr/bin/env node
const http = require('http');
const mockserver = require('mockserver');

const argv = require('yargs').argv;
const portAPI = argv.portAPI || 9002;
const directory = argv.dir || 'mocks';

process.on('SIGINT', () => { console.log("Bye bye!"); process.exit(); });



console.log("argv", argv)