//var http, server;
//http = require( 'http' );
//server = http.createServer( function ( request, response ) {
//  response.writeHead( 200, { 'Content-Type': 'text/plain' } );
//  response.end( 'Hello World' );
//}).listen( 3000 );
//console.log( 'Listening on port %d', server.address().port );

'use strict';
var
  http = require( 'http' ),
  express = require( 'express' ),
  app = express(),
  server = http.createServer( app );


app.get( '/', function ( request, response ) {
  response.send( 'Hello Express' );
});


server.listen( 3000 );
console.log(
  'Express server listening on port %d in %s mode',
  server.address().port, app.settings.env
);