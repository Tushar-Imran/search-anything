import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageref = React.createRef();
  }
  componentDidMount() {
    this.imageref.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageref.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageref} alt={description} src={urls.regular} />
      </div>
    );
  }
}
export default ImageCard;
