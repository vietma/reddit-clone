import React, { Component } from "react";

class Voting extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onUpVote(this.props.post, this.props.id)}
        >
          Upvote
        </button>
        <button
          onClick={() => this.props.onDownVote(this.props.post, this.props.id)}
        >
          Downvote
        </button>
      </div>
    );
  }
}

export default Voting;
