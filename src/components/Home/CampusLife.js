import { Card, CardContent } from '@material-ui/core';
import React from 'react';

function CampusLife(props) {
  return (
    <div style={{padding:'10px'}}>
      <Card className='campus-life-card'>
        <CardContent>
          <img src={props.link} alt={props.title} className='campus-life-img' />
          <br />
          <h5>{props.title}</h5>
          <h6>{props.content}</h6>
        </CardContent>
      </Card>
    </div>
  );
}

export default CampusLife;
