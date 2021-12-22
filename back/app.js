var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(52273, function(){
    console.log('Server Running at http://localhost:52273');
});