'use-strict';

// Globals and imports
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var Promise = require('bluebird');
var multer = require('multer');
var upload = multer({ dest: 'uploads/'});
var app = express();

app.listen(process.env.PORT || 3000);

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(express.static(path.join(__dirname, './public')));
app.use(morgan('common'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.post('/upload', upload.single('file'), (req, res, next) => {
    return res.json(req.file.size);
});

app.use(function(err, req, res, next) {
    res.error = err;
    res.status(err.status || 500);
    res.json({
        message: err.message
    });
});
