import * as React from "react";
import { Button, Icon, Image, Item, Label, Grid, Progress } from "semantic-ui-react";
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

  const retweetAccounts = [
    {'name': 'NBC Bay Area', 'acct': '@nbcbayarea', 'retweets': 8, 'image': 'https://pbs.twimg.com/profile_images/1242907435582382081/1AscQT32_400x400.png'},
    {'name': 'Saturday Night Live - SNL', 'acct': 'nbcsnl', 'retweets': 8, 'image': 'https://pbs.twimg.com/profile_images/1159903342182699009/VOkYedxH_400x400.jpg'},
    {'name': 'Marvel Entertainment', 'acct': '@Marvel', 'retweets': 3, 'image': 'https://pbs.twimg.com/profile_images/573984336271122432/k8vEBoCW_400x400.jpeg'},
    {'name': 'Google', 'acct': '@Google', 'retweets': 2, 'image': 'https://pbs.twimg.com/profile_images/1329829922081271815/P_WGsgxW_400x400.jpg'}
  ]

  const mentionAccounts = [
    {'name': 'Bill Gates', 'acct': '@BillGates', 'mentions': 6, 'image': 'https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg'},
    {'name': 'Dwayne Johnson', 'acct': '@TheRock', 'mentions': 4, 'image': 'https://pbs.twimg.com/profile_images/3478244961/01ebfc40ecc194a2abc81e82ab877af4_400x400.jpeg'},
    {'name': 'Michelle Obama', 'acct': '@MichelleObama', 'mentions': 3, 'image': 'https://pbs.twimg.com/profile_images/1192811236242722816/-r8d4_d3_400x400.jpg'},
    {'name': 'Steve Carell', 'acct': '@SteveCarell', 'mentions': 3, 'image': 'https://pbs.twimg.com/profile_images/771722848704475136/4doM7H7R_400x400.jpg'},
  ]

  const mentionedAccounts = [
    {'name': 'UC Berkeley', 'acct': '@UCBerkeley', 'mentions': 2, 'image': 'https://pbs.twimg.com/profile_images/1115397640357728256/J34RZtya_400x400.png'},
    {'name': 'NCAA', 'acct': '@NCAA', 'mentions': 2, 'image': 'https://pbs.twimg.com/profile_images/875707949217308673/KoeOIQIV_400x400.jpg'},
    {'name': 'Tom Anderson', 'acct': '@myspacetom', 'mentions': 1, 'image': 'https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg'},
    {'name': 'Mark Zuckerberg', 'acct': '@finkd', 'mentions': 1, 'image': 'https://pbs.twimg.com/profile_images/77846223/profile_400x400.jpg'},
  ]

  const recommendations = [
    {'name': 'Conan O Brien', 'handle': '@ConanOBrien', 'desc': 'Late night talk show host on TBS', 'sources': 'Steve Carell, SNL, NBC', 'image': 'https://pbs.twimg.com/profile_images/730612231021322240/Rl0_QYhL_400x400.jpg'},
    {'name': 'Robert Downey Jr.', 'handle': '@robertdowneyjr', 'desc': 'American actor and producer. Known for Iron Man, Sherlock Holmes.', 'sources': 'Disney, Marvel, Dwayne Johnson', 'image': 'https://pbs.twimg.com/profile_images/712016346775564289/ajnm_P3F_400x400.jpg'},
    {'name': 'Microsoft', 'handle': '@Microsoft', 'desc': 'Multinational technology company headquartered in Redmond, Washington', 'sources': 'Bill Gates, Google', 'image': 'https://pbs.twimg.com/profile_images/1323136652504526850/QMvdTdGk_400x400.png'},
  ]

  const socialMedia = [
    {'company': 'Facebook', 'logo': 'facebook', 'color': 'blue', 'count': 34},
    {'company': 'Twitter', 'logo': 'twitter', 'color': 'teal', 'count': 21},
    {'company': 'Slack', 'logo': 'slack', 'color': 'red', 'count': 7},
    {'company': 'Google Plus', 'logo': 'google plus', 'color': 'yellow', 'count': 0},
  ]

  return (
  <div>
  <h2>Analytics</h2>
  <p>All measurements and surveys accounts for account activity from the past calendar year since today.</p>
  <hr />
  <div>
    <b>Favorite Topics</b>: &nbsp;
    {topics.map(topic => (
      <Label as='a' color={topic['color']} image>
        <img src={topic['image']} alt={topic['topic']} />
        {topic['topic']}
      </Label>
    ))}
    <p>Based on your favorite topics, we estimate <b>4.3</b>% of Twitter users have the same tastes as you. Unique palette 🎨!</p>
  </div>
  &nbsp;
  <div>
    <b>Most Frequent Words</b>
    {words.map(word => (
      <Progress percent={word[1]} color={word[2]} size='tiny'>
        '{word[0]}' - {word[1]}% of tweets
      </Progress>
    ))}
  </div>
  &nbsp;
  <div>
    <b>Favorite Accounts</b> by Most Liked Tweets
    <Grid columns={2} celled>
      {favAccounts.map((account, index) => (
          <Grid.Column>
            <Image src={account['image']} size='tiny' floated='left' circular />
            <b>{account['name']}</b> <br />
            {account['acct']} <br />
            <b>{account['likes']}</b> Tweets ❤️
          </Grid.Column>
      ))}
    </Grid>
  </div>
  <div>
    <b>Favorite Accounts</b> by Most Retweets
    <Grid columns={2} celled>
      {retweetAccounts.map((account, index) => (
          <Grid.Column>
            <Image src={account['image']} size='tiny' floated='left' circular />
            <b>{account['name']}</b> <br />
            {account['acct']} <br />
            <b>{account['retweets']}</b> Tweets 📣
          </Grid.Column>
      ))}
    </Grid>
  </div>
  <div>
    <b>Most Mentioned Accounts</b>
    <Grid columns={2} celled>
      {mentionAccounts.map((account, index) => (
          <Grid.Column>
            <Image src={account['image']} size='tiny' floated='left' circular />
            <b>{account['name']}</b> <br />
            {account['acct']} <br />
            <b>{account['mentions']}</b> Tweets @'ed
          </Grid.Column>
      ))}
    </Grid>
  </div>
  <div>
    <b>Most Accounts Mentioning You</b>
    <Grid columns={2} celled>
      {mentionedAccounts.map((account, index) => (
          <Grid.Column>
            <Image src={account['image']} size='tiny' floated='left' circular />
            <b>{account['name']}</b> <br />
            {account['acct']} <br />
            <b>{account['mentions']}</b> Tweets @ You
          </Grid.Column>
      ))}
    </Grid>
  </div>
  <h2>Recommendations</h2>
  <p>Based on your favorite subjects and accounts you've interacted with the most, we think you might be interested in...</p>
  <hr />
  <Item.Group divided>
    {recommendations.map(rec => (
      <Item>
        <Item.Image size='tiny' src={rec['image']} rounded />
        <Item.Content>
          <Item.Header as='a'>{rec['name']}</Item.Header>
          <Item.Meta>{rec['handle']}</Item.Meta>
          <Item.Description>{rec['desc']}</Item.Description>
          <Item.Extra>Based on your interests in <b>{rec['sources']}</b></Item.Extra>
        </Item.Content>
      </Item>
    ))}
  </Item.Group>
  <hr />
  <br />
  <center>
    <h3>Share your results!</h3>
    <div>
    {socialMedia.map(media => (
      <Button as='div' labelPosition='right'>
        <Button color={media['color']}>
          <Icon name={media['logo']} />
          {media['company']}
        </Button>
        <Label as='a' basic color={media['color']} pointing='left'>
          {media['count']}
        </Label>
      </Button>
    ))}
  </div>
  </center>
  </div>
  )
}
