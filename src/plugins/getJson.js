var http = require("http");
var https = require("https");

var objectAssign = require('object-assign');

var defaultOptions = {
    port: 443,
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}

/**
 * getJSON:  REST get request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */
module.exports = function(options, onResult)
{
    var options = objectAssign(defaultOptions, options);
    var prot = options.port == 443 ? https : http;
    var req = prot.request(options, function(res)
    {
        var output = '';
        console.log(options.host + ':' + res.statusCode);
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function() {
            var obj = JSON.parse(output);
            onResult(res.statusCode, obj);
        });
    });

    req.on('error', function(err) {
        res.send('error: ' + err.message);
    });

    req.end();
};