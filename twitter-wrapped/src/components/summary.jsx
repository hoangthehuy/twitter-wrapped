import * as React from "react";
import { Card, Icon, Image, Statistic } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import {Tweet} from "react-twitter-widgets";
import Default_Pic from "../assets/default_profile_pic.png";

export const Summary = ({data}) => {
    const formatScreenName = (screen_name) => {
        return '@'+ screen_name;
    };

    const formatJoinDate = (dateStr) => {
        const date = new Date(dateStr);
        return "Since " + date.toLocaleDateString('en-GB', {
            month : 'short',
            year : 'numeric'
        });
    };
    
    return (
    <div>
    <h2>Profile</h2>
    <hr />
    <Card>
        <Image src={data["photo_url"] ? data["photo_url"]: Default_Pic} wrapped ui={false} />
        <Card.Content>
        <Card.Header>{data["name"]} </Card.Header>
        <Card.Meta>
            {formatScreenName(data["screen_name"])}
        </Card.Meta>
        <Card.Description>
            {data["description"]}
        </Card.Description>
        </Card.Content>
        <Card.Meta>
        &nbsp;&nbsp;&nbsp;
        <span>
            <Icon name='map marker alternate' />
            {data["location"]}
        </span>
        &nbsp;
        <span>
            <Icon name='calendar alternate outline' />
            {formatJoinDate(data["created_at"])}
        </span>
        </Card.Meta>
        &nbsp;
    </Card>
    <Statistic.Group widths='two' size='small'>
        <Statistic color='teal'>
            <Statistic.Value>{data["following_count"]}</Statistic.Value>
            <Statistic.Label>Following</Statistic.Label>
            <Statistic.Label>
              {data["following_count"] < 200 ? (data["following_count"]/200 * 100).toFixed(1) : 99.9} Percentile
            </Statistic.Label>
        </Statistic>
        <Statistic color='orange'>
            <Statistic.Value>
              {data["followers_count"] > 1000000 ? (data["followers_count"]/1000000).toFixed(1).toString() + 'M' :
               data["followers_count"] > 1000 ? (data["followers_count"]/1000).toFixed(1).toString() + 'K' :
               data["followers_count"]}
            </Statistic.Value>
            <Statistic.Label>Followers</Statistic.Label>
            <Statistic.Label>
              {data["followers_count"] < 1000 ?
                (data["followers_count"]/1000 * 100).toFixed(1) : 99.9} Percentile
            </Statistic.Label>
        </Statistic>
    </Statistic.Group>
    <h3> Recent Tweets </h3>
    {data["recent_tweets"]["id_str"].map(id => (
            <Tweet tweetId={id}/>
    ))}
    <Statistic.Group widths='three' size='small'>
        <Statistic color='purple'>
            <Statistic.Value>43</Statistic.Value>
            <Statistic.Label>Tweets</Statistic.Label>
        </Statistic>
        <Statistic color='red'>
            <Statistic.Value>102</Statistic.Value>
            <Statistic.Label>Likes</Statistic.Label>
        </Statistic>
        <Statistic color='blue'>
            <Statistic.Value>17</Statistic.Value>
            <Statistic.Label>Retweets</Statistic.Label>
        </Statistic>
    </Statistic.Group>
    &nbsp;&nbsp;
    </div>
    );
};
