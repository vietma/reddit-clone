import React, { Component } from "react";
import Post from "../../components/Post";

class Posts extends Component {
  //   state = {};
  render() {
    return (
      <div>
        {this.props.posts.map(post => (
          <Post
            key={post.key}
            post={post}
            onUpVote={this.props.onUpVote}
            onDownVote={this.props.onDownVote}
          />
        ))}
      </div>
    );
  }
}

export default Posts;
