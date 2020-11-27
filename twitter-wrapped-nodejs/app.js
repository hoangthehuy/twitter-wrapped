const express = require('express');
          app = express();
   bodyParser = require('body-parser');

// Setting default view engine
app.set('view engine', 'ejs');
// Allows us to get input data from form
app.use(bodyParser.urlencoded({extended: true}));
// Serve the public directory (CSS and JS)
app.use(express.static(__dirname + '/public'));

var userName;

app.get('/', (req, res) => {
	res.render('landing');
});

app.get('/twitterData', (req, res) => {
    var spawn = require('child_process').spawn,
    py = spawn('python3', ['main.py']),
    data = userName,
    dataMap = 'null_value',
    dataName = 'null_value';

    py.stdout.on('data', function(data) {
        console.log(data);
        dataMap = JSON.parse(data);
    });

    py.stdout.on('end', function() {

        console.log(dataMap);
        var screenName = dataMap['screen_name'];
        var name = dataMap['name'];
        var location = dataMap['location'];
        var description = dataMap['description'];
        var followers_count = dataMap['followers_count'];
        var following_count = dataMap['following_count'];
        var created_at = dataMap['created_at'];
        var tweet_count = dataMap['tweet_count'];
        var recent_tweets = dataMap['recent_tweets'];
        res.render("twitterData", {userName: name, userScreenName: screenName, userLocation: location, userDescription: description, userFollowerCount: followers_count, userFollowingCount: following_count, userTweetCount: tweet_count, userCreatedDate: created_at});
    });

    py.stdin.write(JSON.stringify(data));
    py.stdin.end();
});

app.post('/twitterData', (req, res) => {
    userName = req.body.twitterUsername;
    res.redirect('/twitterData');
});

const PORT = 3000;
app.listen(PORT, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Server has started on port ' + PORT);
    }
});