const {
  parse
} = require('querystring');

module.exports = {
  collectRequestData: function(request, callback) {
    const FORM_URL_ENCODED = 'application/x-www-form-urlencoded';
    if (request.headers['content-type'] === FORM_URL_ENCODED) {
      let body = '';

      request.on('data', chunk => {
        body += chunk.toString();
      });

      request.on('end', () => {
        callback(parse(body));
      });
    } else {
      callback(null);
    }
  }
}
