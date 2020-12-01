# Twitter Wrapped

Info 253A Fall 2020<br>
An Bui, Huy Hoang, John Yang, Kelvin Ngo<br>
Due 10/19/2020

The purpose of our project is to design a front end application that provides a Twitter user with a summary of their activities during the last calendar year. The concept is particularly similar to the “Spotify Wrapped” ([link](https://www.spotify.com/us/wrapped/)) that provides Spotify users with interesting insights into their music listening history during the past calendar year, with information such as how many songs they’ve listened to, their favorite artists and genres, and the amount of time they have listened to different playlists, along with much more.

We plan to do something similar with a Twitter user. A logged in Twitter user will be able to see aggregates and insights based on their Twitter account information. We will be heavily using the Twitter API to retrieve information that we will be processing and displaying on the front end web application. The kind of information we display, which we are still working on, will influence the kinds of functionality we may implement. For instance, simple information such as who a Twitter user followed during the past year, or how many times he/she/they tweeted, should be evident with the correct API endpoint call. More complex information - such as political leanings, favorite topics, or amount of interactions in the forms of tweets, retweets, and likes - may require some processing of the API data. This may present some opportunities for building cool additional features such as text processing or machine learning models.

Our plan is to first, build the front end application. We will likely create a fake Twitter user and populate it with some arbitrary information. We’ll aim to display basic information about this fake user as our minimum proof of concept. Then, with more exploration of the Twitter API, we can display a greater breadth of insights through data processing. With enough time, we may also implement a login system such that a user can login with Twitter and see this information about their own accounts.

## TA Comments (Nov. 1st, 2020)

- Feasibility: Twitter's API is well tested and heavily used in Apps, projects, and academic researches. It's powerful and well-rounded. Exploring new features provided for its sake can be really fun.
- Scope: I am not sure how you will "wrap" the returned data and translate it into "insights", but we don't expect you build a fancy NLP or machine learning model. You may or may not want to process the data, depending on how confident in the other technical skills or ambitious you are. Need not over do it.
- Requirements: Satisfied.

## Presentation Slides (Nov. 30, 2020)

[Link](https://docs.google.com/presentation/d/1_WQgtGyNIwS9-88Q_raFB3irkPXZMkijgdfGiErIvAg/edit?usp=sharing) to Slides


## Setup Instructions

To run this project locally, follow the steps below:

1. Clone the repository
2. In the `twitter-wrapped-nodejs` folder, do the following:
   * Run `pip install -r python_requirements.txt` to install necessary python packges.
   * Run `yarn install` to install necessary node packages.
   * Run `yarn dev` to start the backend server.
3. In the `twitter-wrapped` folder, do the following:
   * Run `yarn install` to install necessary node packages.
   * Run `yarn start` to start the app in `http://localhost:3000`
