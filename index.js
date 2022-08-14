const express = require ('express');
const app = express(); // the appp is our web server
//let counter = 0;
/*app.get('/',function(req, res){   //request and response; request is what is coming from user and response is what sending back 
    res.status(200).send('Hello, world'); //200 lets you know that the status of the request is OK 
})
/app.get('/testRoute', function(req, res){
    counter++;
    res.send(`${counter}`);
});
app.listen(8000);*/
app.get('/', function(request, response){
    let name = 'john'
    response.send(name);
});
app.get('/nba', (req, res) => {
    console.log('/nba route');
    const data = {
        team: 'Warriors',
        championship: '2022',
    }
    res.send(data);
});
app.get('/nfl', (req, res) => {
    console.log('/nfl route');
    const nflData = {
        article: 'Patrick Mahomes throws sweet, no-look TD pass to Blake Bell',
        url: 'http://www.espn.com/video/clip?id=34394431'
    }
    res.send(nflData)
})
app.get('/mlb', (req, res) => {
    console.log('/MLB route');
    const mlbData = {
        article: 'San Diego Padres star Fernando Tatis Jr. suspended 80 games -- here is everything you need to know',
        url:'http://www.espn.com/video/clip?id=34390811'
    }
    res.send(mlbData)
})
app.get('/car', (req, res) => {
    res.send('<img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png" width="300px" height="300px">')
});
app.get('/nba/:team', (req, res) => {
    console.log('REQUEST', req.params);
    res.send(`<h1>Welcome to ${req.params.team}'s Website</h1>`);
})

app.get("/greet/:firstName/:lastName", (req, res) => {
    res.send("Hello " + req.params.firstName + " " + req.params.lastName);
  });
  
  app.get("/multiply/:x/:y", (req, res) => {
    res.send("The answer is: " + (req.params.x * req.params.y));
  });
  
  app.get("/add/:x/:y", (req, res) => {
    res.send("The answer is: " + (parseInt(req.params.x) + parseInt(req.params.y)));
  });

  app.get("/querystring", (req, res) => {
    let printout = '';
    for (let key in req.query) {
      printout += key + ": " + req.query[key] + "<br />";
    }
    res.send("Here's what they sent: <br /><br />" + printout);
  });

  app.get("/*", (req, res) => {
    res.send('This page does not exist');
  });
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`)
});


