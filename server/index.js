 const express = require ('express');
 require('dotenv').config();

 const app = express ();

 app.use('/places', require('./controllers/places'));

 app.get ('/', (req,res) => {
    res.send(`
    <body style - "margin: 0;">
    <div style = "border: 1px solid black;
                  height: 10vh;
                  background-color: white;"> 
      <h2 style= "text-align:center;"> NAV BAR </h2>
    </div>
    <h1> Hello World </h1>
    </body>
    `);

 });

app.get('/teal', (req,res) => {

   res.send(`
    <body style - "margin: 0;">
    <div style = "border: 1px solid black;
                  height: 10vh;
                  background-color: teal;"> 
      <h2 style= "text-align:center;"> NAV BAR </h2>
    </div>
    <h1 style = "color: teal;"> Teal Page </h1>
    </body>
    `);
   
});

app.get('/:color', (req,res) => {
   const myColor = req.params.color;

   res.send(`
    <body style - "margin: 0;">
    <div style = "border: 1px solid black;
                  height: 10vh;
                  background-color: ${myColor} ;"> 
      <h2 style= "text-align:center;"> NAV BAR </h2>
    </div>
    <h1 style = "color: ${myColor};"> Page </h1>
    </body>
    `);
   
});

app.get('*', (req,res) => {
   
    res.status(404).send('<h1> 404 Page </h1>');
   
});

 app.listen(process.env.PORT, () => 
 {
    console.log(`app is running on port ${process.env.PORT}`);
 });