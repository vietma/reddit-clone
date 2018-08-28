import React, { Component } from "react";
import Post from "../../components/Post";
import Voting from "../../components/Voting";

class Posts extends Component {
  render() {
    return Object.keys(this.props.posts).map(key => (
      <React.Fragment key={key}>
        <Post post={this.props.posts[key]} />
        <Voting
          post={this.props.posts[key]}
          id={key}
          onUpVote={this.props.onUpVote}
          onDownVote={this.props.onDownVote}
        />
      </React.Fragment>
    ));
  }
}

export default Posts;
