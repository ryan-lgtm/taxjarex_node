module.exports = {
  collectTransactionData: function(requestData, responseTaxData) {
    //helper to restructure data for API call

    let transactionId = (requestData.transactionId) ? requestData.transactionId : Math.floor(Math.random() * 999999);
    let now = new Date().toISOString();

    let data = {

      transaction_id: transactionId,
      transaction_date: now,

      from_country: requestData.from_country,
      from_zip: requestData.from_zip,
      from_state: requestData.from_state,
      from_city: requestData.from_city,
      from_street: requestData.from_street,

      to_country: requestData.to_country,
      to_zip: requestData.to_zip,
      to_state: requestData.to_state,
      to_city: requestData.to_city,
      to_street: requestData.to_street,

      amount: responseTaxData.tax.order_total_amount,
      shipping: requestData.shipping,
      sales_tax: responseTaxData.tax.amount_to_collect,
      customer_id: Math.floor(Math.random() * 500),

    }

    if (responseTaxData.has_nexus) {
      data.line_items = [];
      data.line_items.push({
        id: requestData.line_items[0].id,
        quantity: requestData.line_items[0].quantity,
        product_identifier: Math.floor(Math.random() * 500),
        product_description: 'A really cool thing',
        product_tax_code: requestData.line_items[0].product_tax_code,
        unit_price: requestData.line_items[0].unit_price,
        discount: requestData.line_items[0].discount,
        sales_tax: responseTaxData.tax.breakdown.line_items[0].tax_collectable
      });
    }

    if (responseTaxData.exemption_type) {
        data.exemption_type = responseTaxData.exemption_type
    }

    return data
  }
}
