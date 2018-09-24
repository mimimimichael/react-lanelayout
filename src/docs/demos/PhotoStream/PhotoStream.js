import React from 'react';
import axios from 'axios';
import uniqueId from 'lodash/uniqueId'
import sampleSize from 'lodash/sampleSize'
import LaneLayout from './../../../lib/LaneLayout'
import ItemRenderer from './components/ItemRenderer'

class PhotoStream extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    };

    this._morePhotos = this._morePhotos.bind(this);
  }

  componentDidMount() {
    this._getPhotos();
  }

  async _getPhotos() {
    const photos = await axios.get('https://picsum.photos/list');

    this.setState({
      items: sampleSize(photos.data, 50).map(photo => {
        return {
          key: uniqueId(),
          ratio: photo.width / photo.height,
          itemProps: photo
        }
      })
    })
  }

  _morePhotos() {
    const { items } = this.state;

    const newItems = sampleSize(items, 25).map(photo=>{
      return {
        ...photo,
        key: uniqueId()
      }
    });

    this.setState({
      items: [...items, ...newItems]
    })
  }

  render() {
    const {items} = this.state;

    if (!items.length) {
      return null;
    }

    return <div>
      <LaneLayout autoScroll items={items} itemRenderer={ItemRenderer} onEnd={this._morePhotos}/>
    </div>
  }
}

export default PhotoStream