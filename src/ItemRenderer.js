import React from "react";
import { Motion, spring } from "react-motion";

class ItemRenderer extends React.Component {
  constructor() {
    super();
    this.state = {
      hover: false
    };
  }
  render() {
    const { id, color, color2 } = this.props;
    const { hover } = this.state;

    return (
      // In your render...
      <Motion
        defaultStyle={{ opacity: 0, hover: 0 }}
        style={{ opacity: spring(1), hover: spring(hover ? 1.0675 : 1) }}
      >
        {value => (
          <div
            onMouseEnter={() => this.setState({ hover: true })}
            onMouseLeave={() => this.setState({ hover: false })}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              overflow: "auto",
              backgroundColor: color,
              transform: `translate3d(0,0,0)`,

            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                padding: ".5rem",
                backgroundColor: color2,
                color: "white",
                fontWeight: 'bold',
                fontFamily:
                  '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
              }}
            >
              #{id}
            </div>
          </div>
        )}
      </Motion>
    );
  }
}

export default ItemRenderer;
