// START MODULE DEFINITIONS //
const dotenv = require('dotenv').config();
const key = process.env.KEY

const Taxjar = require('taxjar');


const client = new Taxjar({
  apiKey: key
});
// END MODULE DEFINITIONS //

// IMPORT HELPERS //
// <none>

// END IMPORTS //

// SET THE PROVIDER HERE, IF COMMENTED OUT, DEFAULTED TO "api".
const provider = 'api';

client.listOrders({
  from_transaction_date: '2018/01/01',
  to_transaction_date: '2020/01/01',
  provider: provider
}).then(res => {
  const orderTransactions = res.orders;
  console.log("Order transactions: " + orderTransactions);
  return orderTransactions
}).then(function(deleteTransactions) {

  async function deleteTransaction(trxId) {
    console.log("Deleting transaction with ID: " + trxId);
    await client.deleteOrder(trxId, {
      provider: provider
    }).then(res => {
      console.log("Response: " + JSON.stringify(res.order));
      return "Transaction deleted: " + trxId;
    }).catch(error => console.log(error));
  }

  for (const trxId of deleteTransactions) {
    deleteTransaction(trxId);
  }

}).catch(error => console.log(error))

client.listRefunds({
  from_transaction_date: '2018/01/01',
  to_transaction_date: '2020/01/01',
  provider: provider
}).then(res => {
  const refundTransactions = res.refunds;
  console.log("Refund Transactions: " + refundTransactions);
  return refundTransactions
}).then(function(deleteRefunds) {

  async function deleteRefund(trxId) {
    console.log("Deleting refund transaction with ID: " + trxId);
    await client.deleteRefund(trxId, {
      provider: provider
    }).then(res => {
      console.log("Response: " + JSON.stringify(res.order));
      return "Refund Transaction deleted: " + trxId;
    }).catch(error => console.log(error));
  }

  for (const trxId of deleteRefunds) {
    deleteRefund(trxId);
  }

}).catch(error => console.log(error))
