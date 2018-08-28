import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div>
        <div>Title: {this.props.post.title}</div>
      </div>
    );
  }
}

export default Post;
