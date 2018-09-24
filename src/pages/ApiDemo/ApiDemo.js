import React from "react";
import LaneLayout from "./../../lib/LaneLayout";
import ItemGenerator from "./../../ItemGenerator";
import ItemRenderer from "./../../ItemRenderer";

import {Flex, Box } from 'rebass'
import Sidebar from './../../components/Sidebar'
import Text from './../../components/Text'

const laneConfig = {
  vertical: {
    0: 1,
    480: 2,
    720: 3,
    960: 4,
    1200: 5
  },
  horizontal: {
    0: 1,
    400: 2,
    600: 3,
    800: 4,
    1000: 5
  }
}

class PropsDemo extends React.Component {
  constructor() {
    super();
    const items = ItemGenerator(50);

    this.state = {
      items,
      autoScroll: 0,
      horizontal: false,
      gutter: 16,
      outerGutter: true,
      debug: false
    };

    this._moreItems = this._moreItems.bind(this);
  }

  componentDidMount() {
    /*
    setInterval(() => {
      this.setState({
        //horizontal: !this.state.horizontal,
        autoScroll: !this.state.autoScroll
      });
    }, 5000);
    */
  }

  _moreItems() {
    const { items } = this.state;

    this.setState({
      items: [...items, ...ItemGenerator(50)]
    });
  }

  render() {
    const { items, gutter, debug, outerGutter, autoScroll, horizontal } = this.state;

    const labelSize = 2;
    const boxSpacing = 3;

    return (
      <Flex flexDirection="row-reverse" style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
        <Box flex="0 0 auto" width={220} style={{position: 'relative'}}>
        <Sidebar p={3}>
          <Flex flexDirection="column">
            <Box mb={boxSpacing}>
              <Text fontSize={labelSize} mb={2} block is="label" htmlFor="direction">Direction</Text>
              <select id="direction" value={horizontal} onChange={(e)=>this.setState({horizontal: e.target.value === 'true'})}>
                <option value={false}>Vertical</option>
                <option value={true}>Horizontal</option>
              </select>
            </Box>
            <Box mb={boxSpacing}>
              <Text fontSize={labelSize} mb={2} block is="label" htmlFor="autoscroll">Auto Scroll</Text>
              <input id="autoscroll" value={autoScroll} type="range" min="0" max="5" step="1" onChange={(e)=>this.setState({
                autoScroll: e.target.value
              })}/>
            </Box>
            <Box mb={boxSpacing}>
              <Text fontSize={labelSize} mb={2} block is="label" htmlFor="gutter">Gutter</Text>
              <input id="gutter" value={gutter} type="range" min="0" max="32" onChange={(e)=>this.setState({
                gutter: e.target.value
              })}/>
            </Box>
            <Box mb={boxSpacing}>
              <Text fontSize={labelSize} mb={2} block is="label" htmlFor="outergutter">Outer Gutter</Text>
              <input id="outergutter" checked={outerGutter} type="checkbox" onChange={(e)=>{
                this.setState({outerGutter: e.target.checked})
              }}/>
            </Box>
            <Box mb={boxSpacing}>
              <Text fontSize={labelSize} mb={2} block is="label" htmlFor="debug">Debug</Text>
              <input id="debug" checked={debug} type="checkbox" onChange={(e)=>{
                this.setState({debug: e.target.checked})
              }}/>
            </Box>
          </Flex>

        </Sidebar>
        </Box>
        <Box flex="1 1 auto" style={{position: 'relative'}}>
        <LaneLayout
          lanes={laneConfig}
          items={items}
          horizontal={horizontal}
          gutter={parseInt(gutter)}
          outerGutter={outerGutter}
          onEnd={() => this._moreItems()}
          itemRenderer={ItemRenderer}
          autoScroll={parseInt(autoScroll)}
          debug={debug}
        />
        </Box>
      </Flex>
    );
  }
}

export default PropsDemo;
