module.exports = {
  orderForm: function() {
    return `
      <!doctype html>
        <head>
          <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        </head>
        <div>
        </div>
        <body>
          <form action="/" method="post">
            <div class="row">
              <div class="col-md-4">
                <h2>From: </h2>
                <input type="text" name="from_country" value="US" /><label><strong>From Country</strong></label><br />
                <input type="text" name="from_zip" value="92093" /><label><strong>From Zip</strong></label><br />
                <input type="text" name="from_state" value="CA" /><label><strong>From State</strong></label><br />
                <input type="text" name="from_city" value="La Jolla" /><label><strong>From City</strong></label><br />
                <input type="text" name="from_street" value="9500 Gilman Drive" /><label><strong>From Street</strong></label><br />
              </div>
              <div class="col-md-4">
                <h2>To: </h2>
                <input type="text" name="to_country" value="US" /><label><strong>To Country</strong></label><br />
                <input type="text" name="to_zip" value="90210" /><label><strong>To Zip</strong></label><br />
                <input type="text" name="to_state" value="CA" /><label><strong>To State</strong></label><br />
                <input type="text" name="to_city" value="Beverly Hills" /><label><strong>To City</strong></label><br />
                <input type="text" name="to_street" value="300 N Canon Dr" /><label><strong>To Street</strong></label><br />
              </div>
              <div class="col-md-4">
                <h2>Details / Costs &amp; Shipping: </h2>
                <input type="string" name="provider" value="api" /><label><strong>Provider</strong></label><br />
                <input type="string" name="transaction_id" placeholder="Blank for random" /><label><strong>Transaction Id</strong></label><br />
                <input type="string" name="exemption_type" placeholder="Blank for none" /><label><strong>Exemption Type</strong></label><br />
                <input type="number" name="amount" step=".01" value="21.99" /><label><strong>Amount</strong></label><br />
                <input type="number" name="shipping" step=".01" value="7.59" /><label><strong>Shipping Costs</strong></label><br />
              </div>
            </div>
              <div class="row" style="margin-top: 50px;">
              <div class="col-md-12">
              <h2>Nexus Address(es) / Line Items: </h2>
              </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <h3>Nexus Address 1</h3>
                  <input type="text" name="nexus_address1_id" /><label><strong>Nexus Address 1 ID</strong></label><br />
                  <input type="text" name="nexus_address1_country" /><label><strong>Nexus Address 1 Country</strong></label><br />
                  <input type="text" name="nexus_address1_zip" /><label><strong>Nexus Address 1 Zip</strong></label><br />
                  <input type="text" name="nexus_address1_state" /><label><strong>Nexus Address 1 State</strong></label><br />
                  <input type="text" name="nexus_address1_city" /><label><strong>Nexus Address 1 City</strong></label><br />
                  <input type="text" name="nexus_address1_street" /><label><strong>Nexus Address 1 Street</strong></label><br />
                </div>
                <div class="col-md-4">
                  <h3>Nexus Address 2</h3>
                  <input type="text" name="nexus_address2_id" /><label><strong>Nexus Address 2 ID</strong></label><br />
                  <input type="text" name="nexus_address2_country" /><label><strong>Nexus Address 2 Country</strong></label><br />
                  <input type="text" name="nexus_address2_zip" /><label><strong>Nexus Address 2 Zip</strong></label><br />
                  <input type="text" name="nexus_address2_state" /><label><strong>Nexus Address 2 State</strong></label><br />
                  <input type="text" name="nexus_address2_city" /><label><strong>Nexus Address 2 City</strong></label><br />
                  <input type="text" name="nexus_address2_street" /><label><strong>Nexus Address 2 Street</strong></label><br />
                </div>
                <div class="col-md-4">
                <h3>Line Item 1</h3>
                  <input type="text" name="line_item1_id" value="1" /><label><strong>Line Item 1 ID</strong></label><br />
                  <input type="number" name="line_item1_quantity" value="1" /><label><strong>Line Item 1 Qty</strong></label><br />
                  <input type="text" name="line_item1_product_tax_code" /><label><strong>Line Item 1 Product Tax Code</strong></label><br />
                  <input type="number" name="line_item1_unit_price" step=".01" value="21.99" /><label><strong>Line Item 1 Unit Price</strong></label><br />
                  <input type="number" name="line_item1_discount" step=".01" value="0" /><label><strong>Line Item 1 Discount</strong></label><br />
                </div>
                </div>
              <br />
              <div class="col-md-6 offset-md-3" style="text-align: center">
              <input type="checkbox" name="tax_calc_only" value="true">Tax Calc only?<br />
              <button class="btn btn-primary" style="margin: 0 auto;">Submit</button>
              <br />
              <br />
            </div>
          </form>
          <div class="row">
            <div class="col-md-6 offset-md-3" style="text-align: center;">
              <button class="btn btn-warning" style="margin: 0 auto;" id="from-ca-to-ca">From CA to CA</button>
              <button class="btn btn-warning" style="margin: 0 auto;" id="from-ca-to-ny-no-nexus">From CA to NY (No Nexus)</button>
              <button class="btn btn-warning" style="margin: 0 auto;" id="from-ca-to-ny-with-nexus">From CA to NY (Nexus)</button>
              <button class="btn btn-warning" style="margin: 0 auto;" id="from-pittsburgh-to-philadelphia">From Pitts to Philly</button>
            </div>
          </div>
        </body>
        <footer>
          <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

          <script>
          $('#from-ca-to-ca').click(function(){
            $("input[name='from_zip']").val('92093');
            $("input[name='from_state']").val('CA');
            $("input[name='from_city']").val('La Jolla');
            $("input[name='from_street']").val('9500 Gilman Dr');

            $("input[name='to_zip']").val('90210');
            $("input[name='to_state']").val('CA');
            $("input[name='to_city']").val('Beverly Hills');
            $("input[name='to_street']").val('300 N Canon Dr');
          });

          $('#from-ca-to-ny-no-nexus').click(function(){
            $("input[name='from_zip']").val('92093');
            $("input[name='from_state']").val('CA');
            $("input[name='from_city']").val('La Jolla');
            $("input[name='from_street']").val('9500 Gilman Dr');

            $("input[name='to_zip']").val('10019');
            $("input[name='to_state']").val('NY');
            $("input[name='to_city']").val('New York');
            $("input[name='to_street']").val('201 W 53rd Street');
          });

          $('#from-ca-to-ny-with-nexus').click(function(){
            $("input[name='from_zip']").val('92093');
            $("input[name='from_state']").val('CA');
            $("input[name='from_city']").val('La Jolla');
            $("input[name='from_street']").val('9500 Gilman Dr');

            $("input[name='to_zip']").val('10019');
            $("input[name='to_state']").val('NY');
            $("input[name='to_city']").val('New York');
            $("input[name='to_street']").val('201 W 53rd Street');

            $("input[name='nexus_address1_id']").val('Warehouse');
            $("input[name='nexus_address1_country']").val('US');
            $("input[name='nexus_address1_zip']").val('10019');
            $("input[name='nexus_address1_state']").val('NY');
            $("input[name='nexus_address1_city']").val('New York');
            $("input[name='nexus_address1_street']").val('205 W 53rd Street');

            $("input[name='line_item1_id']").val('1');
            $("input[name='line_item1_quantity']").val('1');
            $("input[name='line_item1_product_tax_code']").val('20010');
            $("input[name='line_item1_unit_price']").val('21.99');
            $("input[name='line_item1_discount']").val('0');
          });

          $('#from-pittsburgh-to-philadelphia').click(function(){
            $("input[name='from_zip']").val('15212');
            $("input[name='from_state']").val('PA');
            $("input[name='from_city']").val('Pittsburgh');
            $("input[name='from_street']").val('115 Federal Street');

            $("input[name='to_zip']").val('19148');
            $("input[name='to_state']").val('PA');
            $("input[name='to_city']").val('Philadelphia');
            $("input[name='to_street']").val('1 Citizens Bank Way');

            $("input[name='line_item1_id']").val('1');
            $("input[name='line_item1_quantity']").val('1');
            $("input[name='line_item1_product_tax_code']").val('20010');
            $("input[name='line_item1_unit_price']").val('21.99');
            $("input[name='line_item1_discount']").val('0');
          });
          </script>
        </footer>
      </html>
    `
  }
}
