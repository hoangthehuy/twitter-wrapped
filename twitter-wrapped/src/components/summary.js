import * as React from "react";
import { Card, Icon, Image, Statistic } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
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
    <h3>Profile</h3>
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
{/* <<<<<<< HEAD
        <Card.Content extra>
        <span>
            {formatFollowingCount(data["following_count"])}
        </span>
        &nbsp;
        &nbsp;
        <span>
            {formatFollowersCount(data["followers_count"])}
        </span>
        </Card.Content>
=======
        &nbsp;
>>>>>>> 528aec85ec18abb743e40efabdbe4a242d6d32e2 */}
    </Card>
    <Statistic.Group widths='two' size='mini'>
        <Statistic color='teal'>
            <Statistic.Value>{data["following_count"]}</Statistic.Value>
            <Statistic.Label>Following</Statistic.Label>
            <Statistic.Label>
              {data["following_count"] === 0 ? 0 :
                data["following_count"] < 10 ? (10 + (Math.random()*5)).toFixed(1) :
                data["following_count"] < 50 ? (20 + (Math.random()*5)).toFixed(1) :
                data["following_count"] < 100 ? (50 + (Math.random()*10)).toFixed(1) :
                (70 + (Math.random()*10)).toFixed(1)} Percentile
            </Statistic.Label>
        </Statistic>
        <Statistic color='blue'>
            <Statistic.Value>{data["followers_count"]}</Statistic.Value>
            <Statistic.Label>Followers</Statistic.Label>
            <Statistic.Label>
              {data["followers_count"] === 0 ? 0 :
                data["followers_count"] < 10 ? (3 + (Math.random()*5)).toFixed(1) :
                data["followers_count"] < 30 ? (5 + (Math.random()*5)).toFixed(1) :
                data["followers_count"] < 50 ? (10 + (Math.random()*5)).toFixed(1) :
                data["followers_count"] < 500 ? (20 + (Math.random()*5)).toFixed(1) :
                data["followers_count"] < 1000 ? (90 + (Math.random()*5)).toFixed(1) :
                99.9} Percentile
            </Statistic.Label>
        </Statistic>
    </Statistic.Group>
    <h3>Recent Tweets</h3>
    {data["recent_tweets"].map(tweet => (
      <Card>
        <Card.Content>
          {tweet}
        </Card.Content>
      </Card>
    ))}
    <br />
  </div>
  );
};
