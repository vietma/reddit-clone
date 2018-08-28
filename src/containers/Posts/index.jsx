import React, { Component } from "react";
import Post from "../../components/Post";

class Posts extends Component {
  render() {
    return Object.keys(this.props.posts).map(key => (
      <Post
        post={this.props.posts[key]}
        key={key}
        id={key}
        onUpVote={this.props.onUpVote}
      />
    ));
  }
}

export default Posts;
