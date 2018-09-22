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
    const { id, color } = this.props;
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
              transform: `translate3d(0,0,0) scale(${value.hover})`,
              opacity: value.opacity
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                padding: ".5rem",
                backgroundColor: "black",
                color: "white",
                fontFamily:
                  '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
              }}
            >
              #{id} {hover ? "hover" : ""}
            </div>
          </div>
        )}
      </Motion>
    );
  }
}

export default ItemRenderer;
