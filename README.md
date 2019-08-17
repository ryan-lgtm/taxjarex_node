# taxjarex_node
A small and super lightweight node application that hooks into the Taxjar API to calculate sales tax or create orders.

**NOTE:** This application is neither endorsed, built, or maintained by TaxJar. It is strictly experimental and serves as an example to using NodeJS for Sales Tax calculation.

**NOTE 2:** *You must have an API token from TaxJar.* Don't have one? Subscribe for a risk-free 30-day Trial Account at https://app.taxjar.com/sign_up.

All information used to build this project had strictly come from TaxJar's public SmartCalcs API:
https://developers.taxjar.com/api/reference/

## Install Notes and Usage
No package.json has been created for this project.
Requires the following packages from NPM:
- dotenv
- http
- taxjar  

(`npm install dotenv http taxjar`)

Create a .env file in the project's root directory:
`touch .env`

Enter the following in this file:
`KEY=YOUR_TAXJAR_API_KEY`

Start the HTTP server:
`node server.js`

Go to `http://localhost:3005` in your web browser.

Enough data is prepopulated that you can simply click "Submit" on the form to view a JSON response.

If you do not want to test creating a transaction to your TaxJar account, simply select the checkbox, "Tax Calc only?".

### An Example
This application will break down request/response bodies to TaxJar's /v2/taxes and /v2/transactions/orders (CREATE) endpoints, and is organized by Tax Request, Tax Response, Transaction Create Request, Transaction Create Response:

```
===CALCULATE TAX REQUEST DATA===

{
   "from_country": "US",
   "from_zip": "92093",
   "from_state": "CA",
   "from_city": "La Jolla",
   "from_street": "9500 Gilman Drive",
   "to_country": "US",
   "to_zip": "90210",
   "to_state": "CA",
   "to_city": "Beverly Hills",
   "to_street": "300 N Canon Dr",
   "transaction_id": "",
   "amount": "21.99",
   "shipping": "7.59",
   "nexus_addresses": [
      {
         "id": "",
         "country": "",
         "zip": "",
         "state": "",
         "city": "",
         "street": ""
      },
      {
         "id": "",
         "country": "",
         "zip": "",
         "state": "",
         "city": "",
         "street": ""
      }
   ],
   "line_items": [
      {
         "id": "1",
         "quantity": "1",
         "unit_price": "21.99",
         "discount": "0"
      }
   ]
}

===CALCULATE TAX RESPONSE DATA===

{
   "tax": {
      "taxable_amount": 21.99,
      "tax_source": "destination",
      "shipping": 7.59,
      "rate": 0.095,
      "order_total_amount": 29.58,
      "jurisdictions": {
         "state": "CA",
         "county": "LOS ANGELES",
         "country": "US",
         "city": "BEVERLY HILLS"
      },
      "has_nexus": true,
      "freight_taxable": false,
      "breakdown": {
         "taxable_amount": 21.99,
         "tax_collectable": 2.09,
         "state_taxable_amount": 21.99,
         "state_tax_rate": 0.0625,
         "state_tax_collectable": 1.37,
         "special_tax_rate": 0.0225,
         "special_district_taxable_amount": 21.99,
         "special_district_tax_collectable": 0.49,
         "line_items": [
            {
               "taxable_amount": 21.99,
               "tax_collectable": 2.09,
               "state_taxable_amount": 21.99,
               "state_sales_tax_rate": 0.0625,
               "state_amount": 1.37,
               "special_tax_rate": 0.0225,
               "special_district_taxable_amount": 21.99,
               "special_district_amount": 0.49,
               "id": "1",
               "county_taxable_amount": 21.99,
               "county_tax_rate": 0.01,
               "county_amount": 0.22,
               "combined_tax_rate": 0.095,
               "city_taxable_amount": 0,
               "city_tax_rate": 0,
               "city_amount": 0
            }
         ],
         "county_taxable_amount": 21.99,
         "county_tax_rate": 0.01,
         "county_tax_collectable": 0.22,
         "combined_tax_rate": 0.095,
         "city_taxable_amount": 0,
         "city_tax_rate": 0,
         "city_tax_collectable": 0
      },
      "amount_to_collect": 2.09
   }
}

===CREATE TRANSACTION REQUEST DATA===

{
   "transaction_date": "2019-08-17T22:47:50.970Z",
   "from_country": "US",
   "from_zip": "92093",
   "from_state": "CA",
   "from_city": "La Jolla",
   "from_street": "9500 Gilman Drive",
   "to_country": "US",
   "to_zip": "90210",
   "to_state": "CA",
   "to_city": "Beverly Hills",
   "to_street": "300 N Canon Dr",
   "amount": 29.58,
   "shipping": "7.59",
   "sales_tax": 2.09,
   "customer_id": 183,
   "transaction_id": 635845
}

===CREATE TRANSACTION RESPONSE DATA===

{
   "order": {
      "transaction_id": "635845",
      "user_id": 114196,
      "provider": "api",
      "transaction_date": "2019-08-17T22:47:50.970Z",
      "transaction_reference_id": null,
      "customer_id": "183",
      "exemption_type": null,
      "from_country": "US",
      "from_zip": "92093",
      "from_state": "CA",
      "from_city": "LA JOLLA",
      "from_street": "9500 Gilman Drive",
      "to_country": "US",
      "to_zip": "90210",
      "to_state": "CA",
      "to_city": "BEVERLY HILLS",
      "to_street": "300 N Canon Dr",
      "amount": "29.58",
      "shipping": "7.59",
      "sales_tax": "2.09",
      "line_items": []
   }
}
```
