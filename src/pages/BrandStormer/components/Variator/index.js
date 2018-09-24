import React from "react";
import { withTheme } from "styled-components";
import {Motion, spring} from 'react-motion'

class Variator extends React.Component {
  constructor() {
    super();
    this.container = React.createRef();
  }
  state = {
    hover: false
  };

  render() {
    const { hover } = this.state;
    const { id, brand, theme, cssName, urls, textTransform, letterSpacing } = this.props;

    return (
      <Motion defaultStyle={{scale: 0}} style={{scale: spring(1)}}>
  {iS => <div
    onMouseEnter={() =>
      this.setState({
        hover: true
      })
    }
    onMouseLeave={() =>
      this.setState({
        hover: false
      })
    }
    ref={this.container}
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      userSelect: 'none',
      backgroundColor: hover ? theme.textColor : "transparent",
      color: hover ? theme.backgroundColor : "inherit",
      transform: `translate3d(0,0,0) scale(${iS.scale})`,
      opacity: iS.scale
    }}
  >
    <style
      dangerouslySetInnerHTML={{
        __html: `
    @font-face {
      font-family: ${cssName};
      src: url('${urls.woff.split("http").join("https")}') format('woff');
    }

    .font${id} {
      font-family: ${cssName};
      text-transform: ${textTransform};
      font-size: 3rem;
      letter-spacing: ${letterSpacing}em;
      margin: auto;
      text-align: center;
      display: block;
      width: 100%;
      line-height: 1;
    }

  `
      }}
    />

    <div className={"font" + id}>{brand}</div>
  </div>}
</Motion>
    );
  }
}

export default withTheme(Variator);
