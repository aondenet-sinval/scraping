// // const rp = require('request-promise');
// // const cheerio = require('cheerio');
// // const fs = require('fs');
// // const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
// // const outputFilename = 'presidents.json';
// // rp(url)
// //   .then(html => {
// //     const presidents = [];
// //     const $ = cheerio.load(html);
// //
// //     // Use seletor CSS para extrair os dados desejados
// //     $('table.wikitable').each((index, element) => {
// //       const presidentName = $(element).find('td:nth-child(3)').text().trim();
// //       const presidencyYears = $(element).find('td:nth-child(4)').text().trim();
// //
// //       presidents.push({
// //         name: presidentName,
// //         years: presidencyYears
// //       });
// //     });
// //
// //     console.log(presidents);
// //     const jsonData = JSON.stringify(presidents, null, 2);
// //
// //     fs.writeFile(outputFilename, jsonData, 'utf8', err => {
// //       if (err) {
// //         console.error('Ocorreu um erro ao gravar o arquivo JSON:', err);
// //       } else {
// //         console.log(`Os dados foram gravados em ${outputFilename}`);
// //       }
// //     });
// //   })
// //   .catch(err => {
// //     console.error('Ocorreu um erro ao fazer a solicitação:', err);
// //   });
// const rp = require('request-promise');
// const cheerio = require('cheerio');
//
// const url = 'https://wol.jw.org/pt/wol/d/r5/lp-t/2023326';
//
// rp(url)
//   .then(html => {
//     const articles = [];
//     const $ = cheerio.load(html);
//
//     // Use seletores CSS para extrair os dados desejados
//     $('.scalableui').each((index, element) => {
//       const title = $(element).find('p').text().trim();
//       // const title = $(element).find('li.entry-title').text().trim();
//       // const date = $(element).find('.date').text().trim();
//       // const excerpt = $(element).find('.entry-content p').first().text().trim();
//       // console.log(element);
//       // articles.push({
//       //   title: title
//       // });
//       articles.push({
//         title: title,
//       //   date: date,
//       //   excerpt: excerpt
//       });
//     });
//
//     console.log(articles);
//   })
//   .catch(err => {
//     console.error('Ocorreu um erro ao fazer a solicitação:', err);
//   });
// // const puppeteer = require('puppeteer');
// // const url = 'https://teixeiranews.com.br';
// //
// // puppeteer
// //   .launch()
// //   .then(function(browser) {
// //     return browser.newPage();
// //   })
// //   .then(function(page) {
// //     return page.goto(url).then(function() {
// //       return page.content();
// //     });
// //   })
// //   .then(function(html) {
// //     console.log(html);
// //   })
// //   .catch(function(err) {
// //     //handle error
// //   });
