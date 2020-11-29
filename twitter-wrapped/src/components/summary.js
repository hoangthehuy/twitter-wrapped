import * as React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import Default_Pic from "../assets/default_profile_pic.png";

export const Summary = ({data}) => {
    const formatScreenName = (screen_name) => {
        return '@'+ screen_name;
    };

    const formatJoinDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-GB', {
            month : 'short',
            year : 'numeric'
        });
    };

    const formatFollowingCount = (value) => {
        return <span> <b>{value} </b> Following</span>

    };

    const formatFollowersCount = (value) => {
        return <span> <b>{value} </b> Followers</span>

    };

    return (
    <div>
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
        <a>
            <Icon name='map marker alternate' />
            {data["location"]}
        </a>
        &nbsp;
        <a>
            <Icon name='calendar alternate outline' />
            {formatJoinDate(data["created_at"])}
        </a>
        </Card.Meta>
        <Card.Content extra>
        <a>
            {formatFollowingCount(data["following_count"])}
        </a>
        &nbsp;
        &nbsp;
        <a>
            {formatFollowersCount(data["followers_count"])}
        </a>
        </Card.Content>
    </Card>
    </div>
    );

};
