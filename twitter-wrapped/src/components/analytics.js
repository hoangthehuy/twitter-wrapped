import * as React from "react";
import { Image, Label, Grid, Progress } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

export const Analytics = ({data}) => {
  const topics = [
    {'topic': 'Basketball', 'color': 'orange', 'image': 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png'},
    {'topic': 'NBA', 'color': 'white', 'image': 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/National_Basketball_Association_logo.svg/210px-National_Basketball_Association_logo.svg.png'},
    {'topic': 'Music', 'color': 'purple', 'image': 'https://www.pngkit.com/png/full/87-874879_beats-headphones-png-clip-art-transparent-stock-beats.png'},
    {'topic': 'Design', 'color': 'blue', 'image': 'https://s.clipartkey.com/mpngs/s/9-92238_transparent-fountain-pen-clipart-fountain-pen-icon-png.png'},
    {'topic': 'Ecology', 'color': 'green', 'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Recycle001.svg/1200px-Recycle001.svg.png'},
    {'topic': 'Business', 'color': 'white', 'image': 'https://media.istockphoto.com/vectors/tie-icon-vector-vector-id867883650?k=6&m=867883650&s=612x612&w=0&h=hl30NvFL4wTm3aNXf_cYNxBkUWV_NrO1huVaRCcdDio='}
  ];

  const words = [['game', 73, 'red'], ['student', 56, 'orange'], ['work', 41, 'yellow'],
    ['best', 37, 'olive'], ['king', 25, 'green'], ['ball', 23, 'teal'], ['gym', 14, 'blue']]

  const favAccounts = [
    {'name': 'National Geographic', 'acct': '@NatGeo', 'likes': 10, 'image': 'https://pbs.twimg.com/profile_images/1305841513050583045/GMz3LpM1_400x400.png'},
    {'name': 'Reuters', 'acct': '@Reuters', 'likes': 15, 'image': 'https://pbs.twimg.com/profile_images/1194751949821939712/3VBu4_Sa_400x400.jpg'},
    {'name': 'NBA', 'acct': '@NBA', 'likes': 13, 'image': 'https://pbs.twimg.com/profile_images/1329296372986753026/AXwqAk9-_400x400.jpg'},
    {'name': 'Disney', 'acct': '@Disney', 'likes': 23, 'image': 'https://pbs.twimg.com/profile_images/1289584734494892032/Z1TjPU-z_400x400.jpg'}
  ]

  return (
  <div>
  <h3>Analytics</h3>
  <div>
    <b>Favorite Topics</b>: &nbsp;
    {topics.map(topic => (
      <Label as='a' color={topic['color']} image>
        <img src={topic['image']} alt={topic['topic']} />
        {topic['topic']}
      </Label>
    ))}
  </div>
  &nbsp;
  <div>
    <b>Most Frequent Words</b>
    {words.map(word => (
      <Progress percent={word[1]} color={word[2]} size='tiny'>
        '{word[0]}' - {word[1]}% of all tweets
      </Progress>
    ))}
  </div>
  &nbsp;
  <div>
    <b>Most Liked Accounts</b>
    <Grid columns={2} celled>
      {favAccounts.map((account, index) => (
          <Grid.Column>
            <Image src={account['image']} size='tiny' floated='left' />
            <b>{account['name']}</b> <br />
            {account['acct']} <br />
            <b>{account['likes']}</b> Tweets ❤️
          </Grid.Column>
      ))}
    </Grid>
  </div>
  </div>
  )
}
