import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div>
        <div>Title: {this.props.post.title}</div>
        <div>Upvotes: {this.props.post.upvote}</div>
        <div>Downvotes: {this.props.post.downvote}</div>
      </div>
    );
  }
}

export default Post;
