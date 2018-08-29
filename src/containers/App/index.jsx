import React, { Component } from "react";
import Posts from "../Posts";
import firebase from "../../firebase";

class App extends Component {
  state = {
    posts: []
  };

  componentWillMount() {
    let postsRef = firebase.database().ref("posts");
    let _this = this;
    postsRef.on("value", function(snapshot) {
      // console.log(snapshot.val());
      console.log("componentWillMount hook is called...");
      _this.setState({
        posts: snapshot.val()
      });
    });
  }

  handleUpVote = (post, id) => {
    let firebaseRef = firebase.database();
    firebaseRef.ref("posts/" + id).set({
      title: post.title,
      upvote: post.upvote + 1,
      downvote: post.downvote
    });
  };

  handleDownVote = (post, id) => {
    let firebaseRef = firebase.database();
    firebaseRef.ref("posts/" + id).set({
      title: post.title,
      upvote: post.upvote,
      downvote: post.downvote + 1
    });
  };

  render() {
    // console.log("posts", this.state.posts);
    return (
      <div>
        <Posts
          posts={this.state.posts}
          onUpVote={this.handleUpVote}
          onDownVote={this.handleDownVote}
        />
      </div>
    );
  }
}

export default App;
