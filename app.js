const express = require('express'); // create a function called express

// express app
const app = express();

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
  // res.send('<p>home page</p>'); // automatically set header and don't need to set the status code
  res.sendFile('./views/index.html', { root: __dirname }); // set the root to make this a absolute path
});

app.get('/about', (req, res) => {
  // res.send('<p>about page</p>');
  res.sendFile('./views/about.html', { root: __dirname });
});

// redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// 404 page
app.use((req, res) => { // use this function for every incoming request. Run the get above one by one,
                        // if no match found, use this function. This must be at the bottom.
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});
