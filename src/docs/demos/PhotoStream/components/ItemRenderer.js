import React from 'react';
import last from 'lodash/last'
import {Motion, spring} from 'react-motion'

import Container from './Container'
import Credits from './Credits'

const ItemRenderer = ({author, author_url, height, width, post_url}) => {
  const photoId = last(post_url.split('/'));
  const iWidth = 320;
  const iHeight = iWidth / width * height;
  const imageUrl = `https://source.unsplash.com/${photoId}/${iWidth}x${iHeight}`;

  return (
    <Motion defaultStyle={{scale: 0}} style={{scale: spring(1)}}>
      {v => <Container style={{
        width: '100%',
        height: '100%',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        border: '1px solid #eee',
        transform: `translate3d(0,0,0) scale(${v.scale})`
      }}>
        <Credits>Photo by <a href={author_url} target="_blank">{author}</a> on <a href="https://unsplash.com" target="_blank">Unsplash</a></Credits>
      </Container>}
    </Motion>

  );
};
export default ItemRenderer