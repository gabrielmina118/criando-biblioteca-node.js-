#!/usr/bin/env node
const chalk = require('chalk');
const pegaArquivo = require('./index');
const validaUrls = require("./http-validacao")

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
  const resultado = await pegaArquivo(caminhoDeArquivo[2]);

  if (caminho[3] === "validar") {
    console.log(chalk.green('links validados'), await validaUrls(resultado));
  } else {
    console.log(chalk.yellow('lista de links'), resultado);
  }

}

processaTexto(caminho);