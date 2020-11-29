const express = require('express');
          app = express();
   bodyParser = require('body-parser');
         cors = require('cors');


// Setting default view engine
// app.set('view engine', 'ejs');
// Allows us to get input data from form
app.use(bodyParser.urlencoded({extended: true}));
// Serve the public directory (CSS and JS)
app.use(express.static(__dirname + '/public'));
// allow cross origin data access
app.use(cors());
// super important shit
app.use(bodyParser.json());

var userName;

app.get('/', (_, res) => {
    res.send('Server is running...');
});

app.post('/twitterData', (req, res) => {
    userName = req.body.twitterUsername;
    var spawn = require('child_process').spawn;
    py = spawn('python3', ['main.py']);
    dataMap = {};

    py.stdin.write(JSON.stringify(userName));
    py.stdin.end();

    py.stdout.on('data', function(data) {
        dataMap = JSON.parse(data);
        console.log(dataMap);
        res.json(dataMap);  
    });
});

const PORT = 8080;
app.listen(PORT, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Server has started on port ' + PORT);
    }
});