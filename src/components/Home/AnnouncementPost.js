import React from 'react';

function AnnouncementPost(props) {
  return (
    <li>
      <a href={props.link} target='_blank' rel='noreferrer'>
        {props.content}
      </a>
    </li>
  );
}

export default AnnouncementPost;
