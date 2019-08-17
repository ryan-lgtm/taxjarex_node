module.exports = {
  restructureRequest: function(data) {
    //helper to restructure data for API call

    data.nexus_addresses = [];
    data.line_items = [];

    data.nexus_addresses.push({
      id: data.nexus_address1_id,
      country: data.nexus_address1_country,
      zip: data.nexus_address1_zip,
      state: data.nexus_address1_state,
      city: data.nexus_address1_city,
      street: data.nexus_address1_street
    });

    data.nexus_addresses.push({
      id: data.nexus_address2_id,
      country: data.nexus_address2_country,
      zip: data.nexus_address2_zip,
      state: data.nexus_address2_state,
      city: data.nexus_address2_city,
      street: data.nexus_address2_street
    });

    data.line_items.push({
      id: data.line_item1_id,
      quantity: data.line_item1_quantity,
      ...(data.line_item1_product_tax_code && {product_tax_code: data.line_item1_product_tax_code}),
      unit_price: data.line_item1_unit_price,
      discount: data.line_item1_discount
    });

    if (data.exemption_type == '') {
      delete data.exemption_type
    }
    
    let deleteProps = function(obj, prop) {
      for (let p of prop)
        (p in obj) && (delete obj[p]);
    };
    deleteProps(data, ['nexus_address1_id', 'nexus_address1_country', 'nexus_address1_zip', 'nexus_address1_state', 'nexus_address1_city', 'nexus_address1_street', 'nexus_address2_id', 'nexus_address2_country', 'nexus_address2_zip', 'nexus_address2_state', 'nexus_address2_city', 'nexus_address2_street', 'line_item1_id', 'line_item1_quantity', 'line_item1_product_tax_code', 'line_item1_unit_price', 'line_item1_discount']);

    if (data.line_item1_product_tax_code) {
      deleteProps(data, ['line_item1_product_tax_code'])
    }
    return data
  }
}
