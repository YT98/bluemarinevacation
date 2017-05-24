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

      <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-99830702-1', 'auto');
      ga('send', 'pageview');
      </script>
      
      <script src="/dist/client/client.bundle.js"></script>
      <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    </html>
  `;
};
