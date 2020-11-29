import tweepy
import sys, json
import os
# import flask

# Set up flask
# app = flask.Flask("__main__")

# @app.route("/")
# def my_index():
#     return flask.render_template("index.html", token="Hello Flask+React")

# app.run()

print("hi1")

# Kelvin Ngo's credetials
consumer_key = "X3I0iztfxrJ1zKkyGpde7RvEi"
consumer_secret = "mIknyeI4MlH5GTFaxxhJ4ky0GdgfwNApDPNXm3kGWWP0aC0zLL"
access_token = "2736733387-spqE4tiPwbdVkqhgpbbYWpTgZ4QzZ6iYx6vcqEb"
access_token_secret = "OHInPwXz4QqRKdOvX9MBsZKSHqPCzEDGzcZdivrLC1CJl"

# Anphuc Bui's credentials
# consumer_key = "OOo7LOtur8MzfxQE1fbEIXwod"
# consumer_secret = "QghPOaX92r3gZxCfDAj9PyPe0BxMRLGH5XdU9VFjbqI7xH86qR"
# access_token = "1188311491511894017-PDU6Rnbir7Dsk0ftSsohcYDZvogYFI"
# access_token_secret = "8XsSHnX3y9wi0boR5n7XoU7RbKgK2Pw5ANexc8hb89XWM"

# Set up tweepy authentication with credentials
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)



"""
{Input} username (str); string of the user's profile you want to look at.
{Output} user_info (dict); dictionary containing screen_name, name, location, description, followers_count,
                                                  following_count, created_at, tweet_count, and recent_tweets.
Note: Recent Tweets feature only works on public accounts, private accounts will not be able to see Recent Tweets.                  
"""
def get_user_info(username):
    # Set up dictionary
    user = api.get_user(username)
    user_info = {}
    user_info["screen_name"] = user.screen_name
    user_info["name"] = user.name
    user_info["location"] = user.location
    user_info["description"] = user.description
    user_info["followers_count"] = user.followers_count
    user_info["following_count"] = user.friends_count
    user_info["created_at"] = user.created_at
    user_info["tweet_count"] = user.statuses_count
    user_info["photo_url"] = user.profile_image_url
    user_info["recent_tweets"] = []

    # Try to get recent tweets, if the account is private, just return the dictionary with everything but recent_tweets
    recent_tweet_count = 10
    try:
        statuses = api.user_timeline(username, count=recent_tweet_count)
        for status in statuses: 
            user_info["recent_tweets"].append(status.text)
    except tweepy.error.TweepError:
        pass

    return user_info

def read_in():
    lines = sys.stdin.readlines()
    return json.loads(lines[0])

def main():
    # username = read_in()
    # info = get_user_info(username)
    print("hi")

if __name__ == '__main__':
    main()