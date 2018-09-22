import React from "react";
import ReactDOM from "react-dom";
import LaneLayout from "./LaneLayout";
import ItemGenerator from "./ItemGenerator";
import ItemRenderer from "./ItemRenderer";

class App extends React.Component {
  constructor() {
    super();
    const items = ItemGenerator(50);

    this.state = {
      items,
      autoScroll: true,
      horizontal: true
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
    const { items, autoScroll, horizontal } = this.state;

    return (
      <div>
        <LaneLayout
          items={items}
          horizontal={horizontal}
          lanes={{
            vertical: {
              0: 1,
              360: 2,
              640: 2,
              960: 3,
              1280: 4,
              1400: 5,
              1720: 6,
              2040: 7,
              2360: 8
            },
            horizontal: {
              0: 1,
              320: 2,
              480: 3,
              640: 4
            }
          }}
          debug={false}
          gutter={10}
          outerGutter={true}
          onEnd={() => this._moreItems()}
          itemRenderer={ItemRenderer}
          autoScroll={autoScroll}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
