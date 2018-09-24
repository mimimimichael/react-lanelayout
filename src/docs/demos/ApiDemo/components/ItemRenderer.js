import React from "react";


const ItemRenderer = ({id, color, color2}) => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: "auto",
      backgroundColor: color
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
    >#{id}</div>
  </div>
);

export default ItemRenderer;
