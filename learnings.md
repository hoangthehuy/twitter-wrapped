# Twitter Wrapped
Info 253A Fall 2020 Final Project Report
Phuc Bui, Huy Hoang, Kelvin Ngo, John Yang
[Link](https://docs.google.com/presentation/d/1_WQgtGyNIwS9-88Q_raFB3irkPXZMkijgdfGiErIvAg/edit?usp=sharing) to Presentation
[Link](https://sites.ischool.berkeley.edu/i253af20/project-build-something-awesome/) to Project Specification

## Project Description
The purpose of our project is to design a front end application that provides a Twitter user with a summary of their activities during the last calendar year. The concept is particularly similar to the “Spotify Wrapped” ([link](https://2020.byspotify.com/us?locale=en)) that provides Spotify users with interesting insights into their music listening history during the past calendar year, with information such as how many songs they’ve listened to, their favorite artists and genres, and the amount of time they have listened to different playlists, along with much more.

This project aims to do something similar with a Twitter user. A logged in Twitter user will be able to see aggregates and insights based on their Twitter account information. We heavily use the Twitter API to retrieve information that we will be processing and displaying on the front end web application. Simple information such as who a Twitter user followed during the past year, or how many times he/she/they tweeted, is retrieved from the correct API endpoint call. More complex information - such as political leanings, favorite topics, or amount of interactions in the forms of tweets, retweets, and likes - may require some processing of the API data. We tackled some of the mechanisms supporting such insights. However, we largely focused on the front end, leaving some opportunities, if we revisit the project, to build cool additional features such as text processing or machine learning models.

Our repository is divided into two folders:
* `twitter-wrapped-nodejs`: Backend Node.js code hosting calls to Twitter API, data preprocessing
* `twitter-wrapped`: Frontend React code for displaying preprocessed data with predefined templates

A concise summary of our work: We built a Node.js backend with a single `twitterData` endpoint that calls the Twitter API through the `tweepy` Python library. The React front end invokes the endpoint and displays the user's basic profile information, along with a list of insights about the user's profile. While the user profile information is retrieved from API, the insights come from dummy data at the moment. The web page includes the following components:
* `landing`: Displays the search bar and renders the other components when a matching profile is queried.
* `summary`: Displays the user profile's basic information (i.e. following, followers, recent tweets, profile picture)
* `analytics`: Displays insights about the user's profile
  * Profile Facts: Favorite topics, most frequent words
  * Interactions: Favorite accounts by Most Liked / Most Retweeted, Most mentioned accounts
  * Tweet Analytics: Tweet Percentile, Graph of Tweets viewed vs. Tweet views
  * Recommenations: Generated based on the aforementioned insights.

Our list of technologies used include...
* Backend: Python, Tweepy, NodeJS, Express, Numpy, Pandas
* Frontend: React, Semantic UI, Axios, HTML/CSS/JavaScript, React Twitter Widget

## Learnings
We describe our learnings by backend and frontend, then discuss summarizing insights and potential next steps for the project.

### Backend
We tried using multiple different open source API’s for this project. However, we found out that Twitter recently updated their front end so most open source Twitter scraper API’s are currently defunct. We went through a trial and error phase with API’s until we found Tweepy.

Tweepy is still functional as it pulls data directly from the official Twitter API. As Tweepy is not a scraper, Tweepy is limited by its requirement for us to register for an API key with one of our personal Twitter accounts as well as limiting the number of queries we are allowed to make. After providing a username, we get the following information from the user: screen name, user name, location, description, follower count, following count, date of account creation, tweet count, profile photo, and latest 3 tweets. This API allows us to see any information that our Twitter account is already able to see.

Using Kelvin’s API key, we are able to pull information from any Twitter account, except for tweets from accounts that are set to be private that Kelvin does not follow. The Python backend is connected to the frontend using NodeJS. We elected to use NodeJS for this as it allows us to utilize our Python backend without hosting a server. Instead, NodeJS simply spawns a child process from the python code and executes it.

### Front end
In the frontend with React, we call the Node APIs using the axios library, which helps us create an HTTP client. To make things prettier, we used the Semantic UI library.

To get the summary of a Twitter user, you first enter their username in the Search box. If the user exists, we’ll return summary and analytics data on that user. These include: account info, number of followers, number of people the user is following, 3 most recent tweets (if account is public), favorite topics, most frequent words, and most liked accounts.

### Summary
We learned how to not only make something look good on the front end using multiple front end frameworks and libraries, but we also learned how to make something functional using backend APIs and how to connect the two. We also learned how to divvy up responsibility in these two realms and come together to make a fully functional full stack web application. Collaborating over the web was somewhat challenging at first, but we used a Trello board and weekly calls to make sure we were on the same page. From that point on, communicating through the messenger chat helped us make sure we were all working on different tasks, and that we didn't step on each others' commits with merge conflicts.

### Next Steps
Currently, we are trying to figure out how to host our application on the web. Our primary concern is that we are using NodeJS and Python, so we might not be able to host it on Github Pages, which only supports static websites. We are currently attempting to accomplish hosting through Heroku.

From a functionality standpoint, one of our top goals would be to replace the dummy data with real data. This would mean defining new data sources, whether that's the Twitter API or rewriting web scrapers that are largely defunct due to Twitter's UI updated.

We would also add more endpoints that host not only different forms of data retrieval, but also different tools for data preprocessing. This would vary by the kind of insights we want to present. For instance, this could be NLP for semantic analysis, Machine Learning for user engagement measurements, and statistics for user percentiles or distributions.

Last but not least, we would also design and code different UI designs (i.e. dashboard, collage). We'd like to think that our current page is displaying the information correctly, but our display could be more compact or more intuitive. We don't have any concrete ideas on this front, but believe it'd be worth exploring.

Thank you Kay and Ryan for a fantastic semester!
