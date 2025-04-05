const app = require('./app');
const config = require('./config');
const path = require('path');
const express = require('express');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'login.html'));
});

app.get('/cv', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'choose_cv.html'));
});

app.get('/pdf', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'pruebapdf.html'));
});


app.get('/perfil', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'perfil.html'));
});
app.get('/test', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'test_upload.html'));
});


app.get('/basic', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'cv_basic.html'));
});


app.get('/inter', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'cv_mid.html'));
});

app.get('/advance', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'cv_advance.html'));
});

app.get('/suscription', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'html', 'suscription.html'));
});
  app.listen(app.get('port'), () =>
  
  
    {
    console.log(`Server listening on port ${config.app.port}`);
  });

