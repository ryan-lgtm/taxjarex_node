// START MODULE DEFINITIONS //
const dotenv = require('dotenv').config();
const key = process.env.KEY

const http = require('http');
const hostname = '127.0.0.1';
const port = 3005;

const Taxjar = require('taxjar');


const client = new Taxjar({
  apiKey: key
});
// END MODULE DEFINITIONS //

// IMPORT HELPERS //
const form = require('./helpers/form');
const restructure = require('./helpers/restructure');
const collectData = require('./helpers/request');
const transactionData = require('./helpers/transaction');

// END IMPORTS //

// START NODE SERVER //
const server = http.createServer((request, response) => {
  if (request.method === 'POST') {
    // 1.) Gather Form data
    collectData.collectRequestData(request, result => {
      response.setHeader('Content-Type', 'application/json');

      // 2.) Ensure Form data meets API specs -- restructure.js
      let requestData = restructure.restructureRequest(result);

      // 3.) Send a POST to TaxJar via API call.
      let results = {};
      results.requestData = requestData;
      // Used for load testing 7/8
      // let n = 15000; while(n-- >0)console.log(client.taxForOrder(requestData));

      client.taxForOrder(requestData).then(function(responseTaxData) {
        results.responseTaxData = responseTaxData;
      }).then(function(responseTransactionData) {
        results.responseTransactionData = responseTransactionData;
        response.end(
          `===CALCULATE TAX REQUEST DATA===\n\n` +
          JSON.stringify(results.requestData, null, 3) +
          `\n\n===CALCULATE TAX RESPONSE DATA===\n\n` +
          JSON.stringify(results.responseTaxData, null, 3)
        )
      }).catch(err => console.log(err))
    });
  } else {
    response.end(form.orderForm());
  }


});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
// END NODE SERVER //