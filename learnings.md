# > Backend
#### We tried using multiple different open source API’s for this project. However, we found out that Twitter recently updated their front end so most open source Twitter scraper API’s are currently defunct. We went through a trial and error phase with API’s until we found Tweepy.
#### Tweepy is still functional as it pulls data directly from the official Twitter API. As Tweepy is not a scraper, Tweepy is limited by its requirement for us to register for an API key with one of our personal Twitter accounts as well as limiting the number of queries we are allowed to make. After providing a username, we get the following information from the user: screen name, user name, location, description, follower count, following count, date of account creation, tweet count, profile photo, and latest 3 tweets. This API allows us to see any information that our Twitter account is already able to see. 
#### Using Kelvin’s API key, we are able to pull information from any Twitter account, except for tweets from accounts that are set to be private that Kelvin does not follow. The Python backend is connected to the frontend using NodeJS. We elected to use NodeJS for this as it allows us to utilize our Python backend without hosting a server. Instead, NodeJS simply spawns a child process from the python code and executes it. 

# > Front end
#### In the frontend with React, we call the Node APIs using the axios library, which helps us create an HTTP client. To make things prettier, we used the Semantic UI library. 
#### To get the summary of a Twitter user, you first enter their username in the Search box. If the user exists, we’ll return summary and analytics data on that user. These include: account info, number of followers, number of people the user is following, 3 most recent tweets (if account is public), favorite topics, most frequent words, and most liked accounts.

# > Technologies
### Backend:
    - Python
    - Tweepy
    - NodeJS
### Frontend:
    - React
    - Semantic UI
    - Axios
    - HTML
    - CSS
    - JavaScript
    - React Twitter Widget

# > Learnings
#### We learned how to not only make something look good on the front end using multiple front end frameworks and libraries, but we also learned how to make something functional using backend APIs and how to connect the two. We also learned how to divvy up responsibility in these two realms and come together to make a fully functional full stack web application.
#### Thank you Kay and Ryan!

# > Next Steps
#### Currently, we are trying to figure out how to host our application on the web. Our primary concern is that we are using NodeJS and Python, so we might not be able to host it on Github Pages, which only supports static websites. We are currently attempting to accomplish hosting through Heroku.
