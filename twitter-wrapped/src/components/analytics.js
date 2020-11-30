import * as React from "react";
import { Label } from "semantic-ui-react";
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

  const words = ['work', 'student', 'game', 'best', 'king', 'ball', 'gym']

  return (
  <div>
  <h3>Analytics</h3>
  <div>
    Favorite Topics: &nbsp;
    {topics.map(topic => (
      <Label as='a' color={topic['color']} image>
        <img src={topic['image']} alt={topic['topic']} />
        {topic['topic']}
      </Label>
    ))}
  </div>

  <div>
    Most Frequent Words: &nbsp;
    {words.map(word => (<Label as='a' tag> {word} </Label>))}
  </div>
  </div>
  )
}
