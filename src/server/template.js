export default ({ body, lang }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Holiday Homes 7 | Investissements immobiliers </title>
        <meta name="description" content="Vente de proprietes a St-Martin, St-Marteen et St-Barth.">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
        <script src="https://use.fontawesome.com/0cee7cce00.js"></script>
        <link rel="icon" type="image/png" href="/public/img/favicon.ico">
        <link rel="stylesheet" href="/public/style.css" />
      </head>

      <body>
        <div id="root">${body}</div>
      </body>

      <script src="/dist/client/client.bundle.js"></script>
      <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    </html>
  `;
};
