#!/bin/node
const fs = require('fs');
const { print } = require('../src/utils/print');
//Obtain the environment string passed to the node script
const environment = process.argv[2];
const home = process.argv[1].split('/').slice(0, -2).join('/');
if (!environment) {
  console.error('Required envirnoment[development, production, debug]');
  console.infor('Run node scripts/set-environment.js development');
}
fs.readFile(`.env.example`, 'utf8', function (err, data) {
  if (err);
  fs.writeFile(`${home}/.env.${environment}`, data, (err) => {
    if (err) {
      return;
    }
    //file written successfully
  });
});
