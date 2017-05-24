// Express app init
import express from 'express';
var app = express();

app.use('/sitemap.xml', express.static(__dirname + '/../public/sitemap.xml'));
app.use('/robots.txt', express.static(__dirname + '/../public/robots.txt'));

// Nodemailer
import config from './config';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';

const transporter = nodemailer.createTransport({
  service: config.service,
  auth: {
    user: config.username,
    pass: config.password
  }
});

// REST API
app.use(bodyParser.json());

app.post('/sendmail', function (req, res) {

  function sprintf(template, values) {
    return template.replace(/%s/g, function() {
      return values.shift();
    });
  }
  let text = sprintf('Nom: %s \nAddresse mail: %s \nNuméro de téléphone: %s \nService désiré: %s \nInformation additionelle: %s \nLangue: %s', [
    req.body.name, req.body.mail, req.body.phone, req.body.services, req.body.info, req.body.lang
  ])

  transporter.sendMail({
    from: config.username,
    to: config.sendAddr,
    subject: 'Formulaire holidayhomes7.com',
    text : text
  }, function(error, response){
    if (error) {
      res.status(500);
    } else {
      res.status(200);
    }
  });

});

// Server-side rendering module imports
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../shared/routes';
import template from './template';

//  Server-side rendering
app.use('/dist/client', express.static(__dirname + '/client'));
app.use('/public', express.static(__dirname + '/../public'));

app.get('*', (req, res) => {
  match( {routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if(error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      let lang = req.language;
      let html = renderToString(<RouterContext {...renderProps} />);
      res.status(200).send(template({body: html, lang: lang}));
    } else {
      res.status(400).send('Not found.')
    }
  });
});

//
const PORT = 5000;
app.listen(PORT, console.log('App ready: Listening on port' + PORT));
