import React, { Component } from "react";
import * as firebase from "firebase";
import firebaseConfig from "./firebase-config";
import Posts from "../Posts";

class App extends Component {
  constructor() {
    super();
    firebase.initializeApp(firebaseConfig);
  }
  state = {
    posts: []
  };

  componentWillMount() {
    let postsRef = firebase.database().ref("posts");
    let _this = this;
    postsRef.on("value", function(snapshot) {
      console.log(snapshot.val());
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

  render() {
    // console.log("posts", this.state.posts);
    return (
      <div>
        <Posts posts={this.state.posts} onUpVote={this.handleUpVote} />
      </div>
    );
  }
}

export default App;
