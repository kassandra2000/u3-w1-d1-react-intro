import React from "react";
class ImageComponent extends React.Component {
  render() {
    console.log(this.props);
    return <img className={this.props.className} src={this.props.src} alt="img" />
  }
}

export default ImageComponent;