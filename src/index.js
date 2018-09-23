import './reset.css';
import React from "react";
import ReactDOM from "react-dom";
import LaneLayout from "./lib/LaneLayout";
import ItemGenerator from "./ItemGenerator";
import ItemRenderer from "./ItemRenderer";

import {ThemeProvider} from 'styled-components'
import theme from './theme';
import {Flex, Box } from 'rebass'
import Sidebar from './components/Sidebar'
import Text from './components/Text'

class App extends React.Component {
  constructor() {
    super();
    const items = ItemGenerator(50);

    this.state = {
      items,
      autoScroll: 0,
      horizontal: true,
      gutter: 16,
      outerGutter: true
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
    const { items, gutter, outerGutter, autoScroll, horizontal } = this.state;

    const labelSize = 2;
    const boxSpacing = 3;

    return (
      <div>
      <ThemeProvider theme={theme}>
      <Flex style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
        <Box flex="0 0 auto" width={260} style={{position: 'relative'}}>
        <Sidebar p={4}>

          <Text fontFamily="mono" is="h1" mb={4} fontSize={4} fontWeight="bold">{`<LaneLayout/>`}</Text>

          <Flex flexDirection="column">
            <Box mb={boxSpacing}>
              <Text fontSize={labelSize} mb={2} block is="label" htmlFor="direction">Direction</Text>
              <select id="direction" value={horizontal} id="direction" onChange={(e)=>this.setState({horizontal: e.target.value === 'true'})}>
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
          </Flex>

        </Sidebar>
        </Box>
        <Box flex="1 1 auto" style={{position: 'relative'}}>
        <LaneLayout
          items={items}
          horizontal={horizontal}
          debug={false}
          gutter={parseInt(gutter)}
          outerGutter={outerGutter}
          onEnd={() => this._moreItems()}
          itemRenderer={ItemRenderer}
          autoScroll={parseInt(autoScroll)}
        />
        </Box>
      </Flex>

      </ThemeProvider>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
