import times from 'lodash/times';
import uniqueId from 'lodash/uniqueId';
import sample from 'lodash/sample';

import React from 'react'
import LaneLayout from './../../lib/LaneLayout'

class MinimalExample extends React.Component {
  constructor() {
    super();
    this.state = {
      items: this._makeItems()
    };
    this._onEnd = this._onEnd.bind(this);
  }

  _makeItems() {
    return times(20, ()=>{
      return {
        key: uniqueId(),
        ratio: sample([1, 4/3, 3/4, 16 / 9])
      }
    });
  }

  _onEnd() {
    this.setState({
      items: [...this.state.items, ...this._makeItems()]
    });
  }

  render(){
    return <LaneLayout debug={true} items={this.state.items} onEnd={this._onEnd}/>
  }
}

export default MinimalExample;
