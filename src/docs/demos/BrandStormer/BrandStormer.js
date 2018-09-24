import React from "react";
import chroma from 'chroma-js';
import { sample, isObject } from "lodash";
import { Flex, Box, Provider } from "rebass";

import Container from "./components/Container/index";
import Variator from "./components/Variator/index";
import fonts from "./components/fonts";
import TextInput from "./components/TextInput/index";
import Button from "./components/Button/index";

import LaneLayout from '../../../lib/LaneLayout'




const makeTheme = (useBlack = false) => {
  let color = chroma.random();

    const black = chroma('black');
    const white = chroma('white');

    while(chroma.contrast(color, useBlack ? black : white) < 4.5) {
      color = chroma.random();
    }

  return {
    backgroundColor: color.hex(),
    textColor: useBlack ? 'black' :"white"
  };
};

const themes = {
  dark: {
    backgroundColor: "black",
    textColor: "white"
  },
  light: {
    backgroundColor: "white",
    textColor: "black"
  },
  nw: {
    backgroundColor: "gray",
    textColor: "white"
  },
  nb: {
    backgroundColor: "gray",
    textColor: "black"
  }
};

class BrandStormer extends React.Component {
  constructor() {
    super();
    this._addItems = this._addItems.bind(this);
  }

  state = {
    brand: "bränd",
    theme: makeTheme(),
    items: []
  };

  _addItems(clear) {
    const { brand } = this.state;
    const oldItems = this.state.items;
    const items = new Array(20).fill("").map(foo => fonts.random());

    const newItems = items.map(item => {
      return {
        key: item.id,
        ratio: sample([brand.length / 2.5, brand.length / 3, brand.length / 3]),
        itemProps: {
          ...item,
          brand
        }
      };
    });

    this.setState({
      items: clear ? newItems : [...oldItems, ...newItems]
    });
  }

  componentDidMount() {
    this._addItems();
  }

  render() {
    const { brand, theme, items } = this.state;

    if (!items.length) {
      return null;
    }
    return (
      <Provider theme={isObject(theme) ? theme : themes[theme]}>
        <Container>
          <Flex flexDirection="column" style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
            <Box flex="0 0 auto">
                <Flex width={1} alignItems="space-between">
                  <Box flex="1 1 0">
                    <TextInput
                      type="text"
                      value={brand}
                      onChange={e => {
                        this.setState({
                          brand: e.target.value
                        });
                        setTimeout(() => {
                          this._addItems(true);
                        }, 0);
                      }}
                      placeholder="Brand"
                    />
                  </Box>
                  <Box flex="1 1 0">
                    <Button
                      active={typeof theme === "object" && theme.textColor === 'white'}
                      onClick={() => {
                        this.setState({ theme: makeTheme() });
                      }}
                    >
                      White/Color
                    </Button>
                  </Box>
                  <Box flex="1 1 0">
                    <Button
                      active={typeof theme === "object" && theme.textColor === 'black'}
                      onClick={() => {
                        this.setState({ theme: makeTheme(true) });
                      }}
                    >
                      Black/Color
                    </Button>
                  </Box>
                  <Box flex="1 1 0">
                    <Button
                      active={theme === "dark"}
                      onClick={() => this.setState({ theme: "dark" })}
                    >
                      White/Black
                    </Button>
                  </Box>
                  <Box flex="1 1 0">
                    <Button
                      active={theme === "light"}
                      onClick={() => this.setState({ theme: "light" })}
                    >
                      Black/White
                    </Button>
                  </Box>

                  <Box flex="1 1 0">
                    <Button
                      active={theme === "nb"}
                      onClick={() => this.setState({ theme: "nb" })}
                    >
                      Black/Gray
                    </Button>
                  </Box>
                  <Box flex="1 1 0">
                    <Button
                      active={theme === "nw"}
                      onClick={() => this.setState({ theme: "nw" })}
                    >
                      White/Gray
                    </Button>
                  </Box>
                </Flex>

            </Box>
            <Box flex="1 1 auto" style={{position: 'relative'}}>
              <LaneLayout
                items={items}
                itemRenderer={Variator}
                gutter={16}
                outerGutter={true}
                onEnd={this._addItems}
                autoScroll
                horizontal
                lanes={{
                  vertical: {
                    0: 1,
                    640: 2,
                    960: 3,
                    1280: 4,
                  },
                  horizontal: {
                    0: 1,
                    360: 2,
                    540: 3,
                    800: 4,
                    1000: 5
                  }
                }}
              />
            </Box>
          </Flex>


        </Container>
      </Provider>
    );
  }
}

export default BrandStormer;
