const express= require('express');
const app = express();
const path = require('path');


//setings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//middlewares

// routes
app.use(require('./routes/index'));
// Static files
app.use(express.static(path.join(__dirname, 'public')));
//Listening the server
app.listen(app.get('port'), () => {
    console.log('Server listening', app.get('port'));
});