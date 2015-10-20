(function() {
  'use strict';

  var app       = io.express(),
      user_get  = require('../impl/user/http_get');

  app.route('/general')
    .get(function(req, res, next) {
      var fs = require('fs');

      var filename = io.rootPath + 'introduction.mp4';

      // This line opens the file as a readable stream
    var readStream = fs.createReadStream(filename);

    // var stream
    var data_chunk;
    readStream
      .on('data', function (chunk) {
        console.log(chunk.length);
        if (data_chunk) {
          data_chunk = chunk;
        } else {
          data_chunk += chunk;
        }
      })
      .on('end', function () {  // done
        res.json({data:data_chunk.toString()});
      });
      // res.json({
      //   message : 'VIDEOS',
      //   status  : 200,
      //   data    : 'success'
      // });
    });

  module.exports = app;
}());
