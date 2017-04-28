// Express app init
import express from 'express';
var app = express();

import cool from 'cool-ascii-faces';
app.get('/cool', function(request, response) {
  response.send(cool());
});

// Restful API module imports
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import Estate from './models/estate';

//  RESTFUL API
// app.use(bodyParser.json());

// Connect to mongoose
// mongoose.connect('mongodb://localhost/bookstore');
// var db = mongoose.connection;

// Get EstateS
// app.get('/api/estates', (req, res) => {
//     Estate.getEstates((err, estates) => {
//         if(err) {
//             throw err;
//         }
//         else {
//             res.json(estates);
//         }
//     });
// });

// Get Estate :/id
// app.get('/api/estates/:_id', (req, res) => {
//   Estate.getEstateById(req.params._id, (err, estate) => {
//     if(err) {
//       throw(err);
//     } else {
//       res.json(estate);
//     }
//   })
// })

// Post Estate
// app.post('/api/estates', (req, res) => {
//     var estate = req.body;
//     Estate.addEstate(estate, function(err, estate){
//         if(err) {
//             throw err;
//         }
//         else {
//             res.json(estate);
//         }
//     });
// });

// Update Estate

// Delete Estate /:id
// app.delete('/api/estates/:_id', (req, res) => {
//     var id = req.params._id;
//     Estate.deleteEstate(id, (err, estate) => {
//         if(err) {
//             throw err;
//         }
//         else {
//             res.json(estate);
//         }
//     });
// });

// Server-side rendering module imports
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../shared/routes';
import template from './template';
import config from './config';

//  SERVER-SIDE RENDERING
app.use('/dist/client', express.static(__dirname + '/client'));
app.use('/public', express.static(__dirname + '/../public'));

app.get('*', (req, res) => {
  match( {routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if(error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      let html = renderToString(<RouterContext {...renderProps} />);
      let googleMapsApiKey = config.googleMapsUrl;
      res.status(200).send(template({body: html}));
    } else {
      res.status(400).send('Not found.')
    }
  });
});


const PORT = 5000;
app.listen(PORT, console.log('App ready: Listening on port' + PORT));
