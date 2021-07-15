import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import { Link } from 'react-router-dom';

function PostCard(props) {
  return (
    <div className='items'>
      <Card className='post-card'>
        <CardContent>
          <img className='' src={props.link} alt={props.title} />
          <br />
          <br />
          <h6>
            <Link to='/'>{props.title}</Link>
          </h6>
          <h6>{props.about}</h6>
        </CardContent>
      </Card>
    </div>
  );
}

export default PostCard;
