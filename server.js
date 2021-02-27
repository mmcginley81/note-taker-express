/* Psuedo code

1.) When starting the Note taker get * should return the index.html file
2.) Get /notes should return the notes.html file

Following API Routes need to be created
Get / api/notes should read the db.json file and return all saved notes
Look into npm packages that can give each note posted a unique id

*/

const express = require('express');


// 
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Static Files
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// listening app
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});