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
const provider = 'some_third_party';

client.listOrders({
  from_transaction_date: '2019/01/01',
  to_transaction_date: '2020/01/01',
  provider: provider
}).then(res => {
  const orderTransactions = res.orders;
  console.log(orderTransactions);
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
  from_transaction_date: '2019/01/01',
  to_transaction_date: '2020/01/01',
  provider: provider
}).then(res => {
  const refundTransactions = res.orders;
  console.log(refundTransactions);
  return refundTransactions
}).then(function(deleteRefunds) {

  async function deleteRefund(trxId) {
    console.log("Deleting refund transaction with ID: " + trxId);
    await client.deleteRefund(trxId, {
      provider: 'mycart'
    }).then(res => {
      console.log("Response: " + JSON.stringify(res.order));
      return "Refund Transaction deleted: " + trxId;
    }).catch(error => console.log(error));
  }

  for (const trxId of deleteRefunds) {
    deleteRefund(trxId);
  }

}).catch(error => console.log(error))
