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
    posts: [],
    loading: true
  };

  componentWillMount() {
    let postsRef = firebase.database().ref("posts");
    let _this = this;
    postsRef.on("value", function(snapshot) {
      console.log(snapshot.val());
      _this.setState({
        posts: snapshot.val(),
        loading: false
      });
    });
  }

  render() {
    console.log("props", this.props);
    return (
      <div>
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
